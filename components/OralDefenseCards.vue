<script setup>
import { ref, onUnmounted } from 'vue'

const preguntas = [
  {
    id: 'p1', label: 'P1 · Jurisdicción',
    q: '¿Por qué tener servidores en el país no basta?',
    kw: 'CLOUD Act sigue al proveedor de EE. UU. · control operativo · auditabilidad del código',
  },
  {
    id: 'p2', label: 'P2 · Extractivismo',
    q: '¿En qué consiste el extractivismo de datos?',
    kw: 'Extracción continua de la vida · materia prima acá, cómputo afuera (LACIGF 2025)',
  },
  {
    id: 'p3', label: 'P3 · Mitigación',
    q: '¿Cómo proteger la privacidad sin costos prohibitivos?',
    kw: 'Cláusulas AAIP gratuitas · ARSAT recibe privados · claves propias · open source · cotizar antes',
  },
  {
    id: 'p4', label: 'P4 · Límites',
    q: '¿Cuáles son los límites de este informe?',
    kw: 'Fuentes periodísticas y de proveedores · contrastar normas · sumar CEPAL, UIT, Derechos Digitales, Vía Libre y Karisma',
  },
]

const flip = ref({})  // id -> girada
const secs = ref({ p1: 60, p2: 60, p3: 60, p4: 60 })  // id -> segundos restantes
let timer = null

function girar(id) {
  flip.value[id] = !flip.value[id]
  if (flip.value[id] && secs.value[id] <= 0) {
    secs.value[id] = 60 // arranca el cronómetro al girar
  }
  if (!timer) {
    timer = setInterval(tick, 1000)
  }
}

function tick() {
  for (const p of preguntas) {
    if (flip.value[p.id] && secs.value[p.id] > 0) {
      secs.value[p.id]--
    }
  }
}

function dejar(id) {
  flip.value[id] = false
  secs.value[id] = 60
}onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="grid grid-cols-4 gap-2 od" @click.stop>
    <button
      v-for="p in preguntas" :key="p.id"
      class="flip-card"
      :class="{ 'is-flipped': flip[p.id] }"
      @click.stop="girar(p.id)"
    >
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <span class="badge b-violet" style="font-size: 0.56rem;">{{ p.label }}</span>
          <p class="flip-q od-q">{{ p.q }}</p>
          <p class="flip-hint">🖱️ Clic: girar + ⏱️ 60 s</p>
        </div>
        <div class="flip-face flip-back">
          <div class="od-back-head">
            <b style="font-size:0.62rem;">🔑 Palabras clave</b>
            <span
              class="od-timer"
              :class="{ 'od-timer-off': (secs[p.id] ?? 0) <= 0 }"
            >{{ (secs[p.id] ?? 0) <= 0 ? '⏰ ¡tiempo!' : '⏱️ ' + secs[p.id] + 's' }}</span>
          </div>
          <p class="flip-a od-kw">{{ p.kw }}</p>
          <p class="flip-hint" @click.stop="dejar(p.id)">↺ reponer la tarjeta</p>
        </div>
      </div>
    </button>
  </div>
</template>

<style scoped>
.od { --od-h: 190px; }
.flip-card {
  position: relative;
  perspective: 900px;
  width: 100%;
  height: var(--od-h);
  cursor: pointer;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  background: transparent;
  text-align: left;
  display: block;
}
.flip-inner {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  transition: transform 0.55s ease;
}
.is-flipped .flip-inner { transform: rotateY(180deg); }
.flip-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 12px;
  padding: 0.5rem 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  border: 1px solid rgba(125, 155, 255, 0.3);
  background: linear-gradient(165deg, rgba(20, 26, 54, 0.72), rgba(10, 14, 26, 0.55));
  box-shadow: 0 8px 22px rgba(2, 6, 16, 0.45);
  overflow: hidden;
}
.flip-front:hover { border-color: rgba(167, 139, 250, 0.7); }
.od-q { font-size: 0.68rem; line-height: 1.3; }
.flip-q { margin: 0; font-weight: 700; color: #fff; }
.flip-hint {
  margin: auto 0 0;
  font-size: 0.55rem;
  opacity: 0.65;
}
.flip-a { margin: 0; line-height: 1.35; overflow: auto; }
.od-kw { font-size: 0.58rem; }
.flip-back {
  transform: rotateY(180deg);
  border-color: rgba(52, 211, 153, 0.6);
  background: linear-gradient(165deg, rgba(13, 46, 38, 0.85), rgba(10, 14, 26, 0.7));
  box-shadow: 0 0 16px rgba(52, 211, 153, 0.22), 0 8px 22px rgba(2, 6, 16, 0.45);
}
.od-back-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
  color: #fff;
}
.od-timer {
  font-size: 0.6rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: #6ee7b7;
  white-space: nowrap;
}
.od-timer-off { color: #fda4af; }
.flip-hint { cursor: pointer; }
.flip-hint:hover { opacity: 1; }
@keyframes od-pip { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
.od-timer { animation: od-pip 0.2s ease both; }
</style>
