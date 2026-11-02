<script setup>
import { ref, computed } from 'vue'

const controles = [
  { id: 'anon',  icon: '🧬',   txt: 'Anonimización' },
  { id: 'open',  icon: '🧑‍💻', txt: 'Código abierto' },
  { id: 'aud',   icon: '🔍',   txt: 'Auditoría externa' },
  { id: 'evam',  icon: '⚖️',   txt: 'Eval. de impacto' },
]
const PESO = 25 // cada control activado quita 25 puntos de opacidad

const on = ref({ anon: false, open: false, aud: false, evam: false })

function toggle(id) { on.value[id] = !on.value[id] }

const opacidad = computed(() =>
  100 - controles.reduce((s, c) => s + (on.value[c.id] ? PESO : 0), 0)
)

const nivel = computed(() => {
  const o = opacidad.value
  if (o >= 76) return { txt: '⬛ Caja negra', cls: 'am-negra' }
  if (o >= 51) return { txt: '🕳️ Caja de niebla', cls: 'am-niebla' }
  if (o >= 26) return { txt: '🧊 Caja translúcida', cls: 'am-trans' }
  return { txt: '💎 Caja de cristal', cls: 'am-cristal' }
})
</script>

<template>
  <div class="am" @click.stop>
    <p class="am-t">🎛️ Tablero de cajanegrización · <span class="badge b-sky" style="font-size: 0.54rem;">clic = activar control</span></p>

    <div class="am-sw">
      <button
        v-for="c in controles" :key="c.id"
        class="am-sw-btn" :class="{ 'am-sw-on': on[c.id] }"
        @click.stop="toggle(c.id)"
      >
        <span class="am-ico">{{ c.icon }}</span>
        <span>{{ c.txt }}</span>
        <span class="am-chk">{{ on[c.id] ? '✔' : '☐' }}</span>
      </button>
    </div>

    <div class="am-score">
      <div class="am-bar">
        <div class="am-fill" :style="{ width: opacidad + '%' }"></div>
      </div>
      <div class="am-label">
        <b :class="nivel.cls">{{ nivel.txt }}</b>
        <span>opacidad {{ opacidad }}%</span>
      </div>
    </div>

    <p class="am-note">Caja negra = secreto empresarial que impide auditar (Las Toninas, 2017) · heurística didáctica del TP: cada control reduce −25%.</p>
  </div>
</template>

<style scoped>
.am { display: flex; flex-direction: column; gap: 0.35rem; }
.am-t { margin: 0; font-size: 0.66rem; font-weight: 700; color: #fff; }
.am-sw {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.3rem;
}
.am-sw-btn {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  border: 1px solid rgba(125, 155, 255, 0.35);
  border-radius: 9px;
  padding: 0.2rem 0.4rem;
  font: inherit;
  font-size: 0.62rem;
  color: inherit;
  background: rgba(10, 14, 26, 0.5);
  transition: border-color 0.2s, background 0.2s;
  text-align: left;
}
.am-sw-btn:hover { border-color: rgba(34, 211, 238, 0.7); }
.am-sw-on {
  border-color: rgba(52, 211, 153, 0.85);
  background: rgba(52, 211, 153, 0.12);
}
.am-ico { font-size: 0.78rem; }
.am-chk { margin-left: auto; opacity: 0.85; }
.am-sw-on .am-chk { color: #6ee7b7; }
.am-bar {
  height: 10px;
  border-radius: 999px;
  background: rgba(8, 12, 24, 0.6);
  border: 1px solid rgba(125, 155, 255, 0.3);
  overflow: hidden;
}
.am-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #6ee7b7, #fcd34d, #fb7185);
  transition: width 0.35s ease;
}
.am-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.64rem;
}
.am-negra   { color: #fda4af; }
.am-niebla  { color: #fcd34d; }
.am-trans   { color: #7dd3fc; }
.am-cristal { color: #6ee7b7; }
.am-note { margin: 0; font-size: 0.56rem; opacity: 0.7; line-height: 1.3; }
@keyframes am-in { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: translateY(0); } }
.am { animation: am-in 0.22s ease both; }
</style>
