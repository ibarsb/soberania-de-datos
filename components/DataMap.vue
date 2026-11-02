<script setup>
import { ref, computed } from 'vue'
import { dataMapState, dataMapNodes, setActiveNode } from '../composables/dataMapStore'

defineProps({
  // Etiqueta sobre el mapa (opcional)
  legend: { type: String, default: '' },
})

const FILTERS = [
  { id: 'sub', label: '1 · Entrada Submarina', color: '#7dd3fc' },
  { id: 'amba', label: '2 · Concentración AMBA', color: '#c4b5fd' },
  { id: 'fuga', label: '3 · Fuga a Brasil/Chile', color: '#fda4af' },
]

const FLOWS = [
  { id: 'dc-sub', d: 'M176,272 Q258,266 276,164 Q277,152 270,148', cls: 'dm-flow-dc', color: '#7dd3fc', t: ['sub', 'map'] },
  { id: 'fuga-sp', d: 'M166,240 Q226,200 270,148', cls: 'dm-flow-ii', color: '#fda4af', t: ['fuga', 'amba', 'map'] },
  { id: 'fuga-ch', d: 'M166,240 Q128,214 112,182', cls: 'dm-flow-ii', color: '#fda4af', t: ['fuga', 'amba', 'map'] },
  { id: 'lan-lt', d: 'M176,272 L166,240', cls: 'dm-flow-lan', color: '#c4b5fd', t: ['amba', 'map'] },
  { id: 'cable-1', d: 'M176,272 Q226,284 304,272', cls: 'dm-cable', color: '#7dd3fc', t: ['sub', 'map'] },
  { id: 'cable-2', d: 'M176,272 Q238,276 326,258', cls: 'dm-cable', color: '#7dd3fc', t: ['sub', 'map'] },
  { id: 'cable-3', d: 'M176,272 Q244,268 348,242', cls: 'dm-cable', color: '#7dd3fc', t: ['sub', 'map'] },
]

// Flujos asociados a cada nodo activo (modo mapa = nodo seleccionado)
const DEPS = {
  ltoninas: ['cable-1', 'cable-2', 'cable-3', 'lan-lt', 'dc-sub'],
  amba: ['lan-lt', 'fuga-sp', 'fuga-ch'],
  saopaulo: ['dc-sub', 'fuga-sp'],
  santiago: ['fuga-ch'],
}

const NODES = dataMapNodes
const activeId = computed(() => dataMapState.nodeId)
const filter = ref(null)

const setActive = setActiveNode

// ¿Qué elementos resalta el modo actual?
const relevantNodes = computed(() => {
  if (filter.value === 'sub') return ['ltoninas']
  if (filter.value === 'amba') return ['ltoninas', 'amba']
  if (filter.value === 'fuga') return ['amba', 'saopaulo', 'santiago']
  return [activeId.value]
})
const relevantFlows = computed(() => {
  if (filter.value) return FLOWS.filter(f => f.t.includes(filter.value)).map(f => f.id)
  return DEPS[activeId.value] || []
})

const nodeCls = n => ({
  'dm-node-hot': relevantNodes.value.includes(n.id),
  'dm-node-dim': !!(filter.value && !relevantNodes.value.includes(n.id)),
})
const flowCls = f => ({
  'dm-flow-hot': relevantFlows.value.includes(f.id),
  'dm-flow-dim': !relevantFlows.value.includes(f.id),
})
</script>

<template>
  <div class="dm" @click.stop>
    <div class="dm-filters">
      <button
        v-for="f in FILTERS" :key="f.id"
        class="dm-filter"
        :class="{ 'dm-filter-on': filter === f.id }"
        :style="filter === f.id ? { borderColor: f.color, color: f.color, boxShadow: `0 0 10px ${f.color}55` } : {}"
        @click.stop="filter = filter === f.id ? null : f.id"
      >{{ f.label }}</button>
    </div>

    <svg class="dm-svg" viewBox="0 0 420 342" xmlns="http://www.w3.org/2000/svg">
      <!-- Contorno estilizado del Cono Sur -->
      <path
        d="M136,42 Q160,26 190,34 Q224,42 246,38 Q278,40 294,66 Q314,92 300,120 Q290,140 278,158 Q262,178 244,198 Q236,216 218,232 Q206,244 198,260 Q186,288 178,312 Q172,328 166,332 Q150,326 142,300 Q132,272 126,248 Q112,214 108,188 Q98,156 104,128 Q108,96 118,72 Q124,52 136,42 Z"
        class="dm-land"
      />
      <text class="dm-ocean" x="356" y="120">Atlántico</text>
      <text class="dm-ocean" x="18" y="220">Pacífico</text>

      <!-- Cables submarinos que amarran en Las Toninas -->
      <g v-for="fl in FLOWS" :key="fl.id" class="dm-flow" :class="flowCls(fl)">
        <path :d="fl.d" :class="fl.cls" :stroke="fl.color" />
        <path :d="fl.d" class="dm-flow-pulse" :stroke="fl.color" />
      </g>
      <text class="dm-cable-label" x="306" y="282">Malbec</text>
      <text class="dm-cable-label" x="330" y="266">Tannat</text>
      <text class="dm-cable-label" x="352" y="240">Firmina</text>

      <!-- Cluster de datacenters AMBA (solo cuando el filtro lo resalta) -->
      <g class="dm-dcs" :class="{ 'dm-dcs-on': filter === 'amba' || activeId === 'amba' }">
        <rect x="146" y="206" width="7" height="7" rx="1.5" />
        <rect x="158" y="204" width="7" height="7" rx="1.5" />
        <rect x="170" y="207" width="7" height="7" rx="1.5" />
        <rect x="146" y="218" width="7" height="7" rx="1.5" />
        <rect x="158" y="216" width="7" height="7" rx="1.5" />
        <text class="dm-dc-note" x="98" y="252">13 DC &gt; 1 MW · ~32 MW</text>
      </g>

      <!-- Nodos interactivos -->
      <g
        v-for="n in NODES" :key="n.id"
        class="dm-node"
        :class="nodeCls(n)"
        @click.stop="setActive(n.id)"
        @mouseenter="setActive(n.id)"
      >
        <circle class="dm-ring" :cx="n.x" :cy="n.y" r="9" />
        <circle class="dm-dot" :cx="n.x" :cy="n.y" r="5.5" :fill="n.color" />
        <text class="dm-node-ico" :x="n.x" :y="n.y - 13">{{ n.icon }}</text>
        <text class="dm-node-label" :class="'dm-l-' + n.id" :x="n.lx" :y="n.ly" :text-anchor="n.anchor">{{ n.label }}</text>
      </g>

      <text v-if="legend" class="dm-legend" x="12" y="336">{{ legend }}</text>
    </svg>
  </div>
</template>

<style scoped>
.dm {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  min-width: 0;
}

/* Filtros rápidos */
.dm-filters {
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
}
.dm-filter {
  cursor: pointer;
  border: 1px solid rgba(125, 155, 255, 0.35);
  border-radius: 999px;
  padding: 0.14rem 0.55rem;
  font-size: 0.63rem;
  font-weight: 600;
  color: #aab4d6;
  background: rgba(10, 14, 26, 0.6);
  transition: all 0.2s;
}
.dm-filter:hover { border-color: rgba(34, 211, 238, 0.6); color: #e8ecf8; }
.dm-filter-on { background: rgba(34, 211, 238, 0.08); }

/* SVG base */
.dm-svg {
  width: 100%;
  height: auto;
  display: block;
  border: 1px solid rgba(125, 155, 255, 0.3);
  border-radius: 14px;
  background: linear-gradient(165deg, rgba(20, 26, 54, 0.6), rgba(8, 12, 24, 0.45));
}
.dm-land {
  fill: rgba(30, 41, 72, 0.55);
  stroke: rgba(125, 155, 255, 0.35);
  stroke-width: 1;
}
.dm-ocean {
  fill: rgba(125, 155, 255, 0.4);
  font-size: 8px;
  font-style: italic;
  letter-spacing: 0.08em;
}
.dm-cable-label {
  fill: rgba(125, 211, 252, 0.65);
  font-size: 6.5px;
}
.dm-legend { fill: rgba(125, 155, 255, 0.5); font-size: 7.5px; }

/* Flujos */
.dm-flow path {
  fill: none;
}
.dm-flow-dc, .dm-flow-ii, .dm-flow-lan, .dm-cable {
  stroke-width: 1.6;
  opacity: 0.5;
  stroke-dasharray: 6 5;
  transition: opacity 0.25s, stroke-width 0.25s;
}
.dm-flow-dim path { opacity: 0.06 !important; }
.dm-flow-hot .dm-flow-dc, .dm-flow-hot .dm-flow-ii, .dm-flow-hot .dm-flow-lan, .dm-flow-hot .dm-cable {
  opacity: 1;
  stroke-width: 2.2;
}
.dm-flow-pulse {
  stroke-width: 4.5;
  opacity: 0;
}
.dm-flow-hot .dm-flow-pulse {
  animation: dm-pulse-flow 1.2s ease-out infinite;
}
@keyframes dm-pulse-flow {
  0% { opacity: 0.5; stroke-width: 1; }
  70% { opacity: 0; stroke-width: 7; }
  100% { opacity: 0; }
}

/* Nodos */
.dm-node { cursor: pointer; }
.dm-node .dm-dot {
  transition: r 0.2s, filter 0.2s;
}
.dm-node-hot .dm-dot {
  filter: drop-shadow(0 0 5px currentColor);
}
.dm-node-hot .dm-ring {
  animation: dm-ring 1.6s ease-out infinite;
}
.dm-ring {
  fill: none;
  stroke: rgba(125, 211, 252, 0.55);
  stroke-width: 1;
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
}
@keyframes dm-ring {
  0% { opacity: 0.8; stroke-width: 2; transform: scale(1); }
  100% { opacity: 0; stroke-width: 0.5; transform: scale(2.4); }
}
.dm-node-dim { opacity: 0.3; transition: opacity 0.25s; }
.dm-node { transition: opacity 0.25s; }
.dm-node-ico { font-size: 9px; }
.dm-node-label {
  fill: #aab4d6;
  font-size: 8px;
  font-weight: 600;
  transition: fill 0.2s;
}
.dm-node-hot .dm-node-label { fill: #ffffff; }
.dm-l-amba { fill: #c4b5fd; }

/* Cluster AMBA */
.dm-dcs rect { fill: rgba(196, 181, 253, 0.25); }
.dm-dcs-on rect { fill: #c4b5fd; }
.dm-dc-note { fill: #c4b5fd; font-size: 7px; opacity: 0; transition: opacity 0.25s; }
.dm-dcs-on .dm-dc-note { opacity: 0.9; }
</style>
