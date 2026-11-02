<script setup>
import { ref } from 'vue'

// 0 = sin orden · 1 = orden entrante · 2 = entrega autorizada (gag order)
const paso = ref(0)
let timer

function simular() {
  clearTimeout(timer)
  paso.value = 1
  timer = setTimeout(() => { paso.value = 2 }, 1100)
}

function reset() {
  clearTimeout(timer)
  paso.value = 0
}
</script>

<template>
  <div class="csim" @click.stop>
    <button
      class="csim-btn"
      :class="{ 'csim-btn-on': paso > 0 }"
      @click.stop="paso ? reset() : simular()"
    >{{ paso ? '↺ Reiniciar simulación' : '⚡ Simular orden CLOUD Act' }}</button>

    <div class="csim-panel" :class="{ 'csim-panel-alto': paso === 2 }">
      <div v-if="paso === 0" class="csim-idle">👻 Sin órdenes activas — presioná el botón para simular el flujo</div>

      <div v-else-if="paso === 1" class="csim-step">
        <span class="badge b-amber">📜 ORDEN ENTRANTE · 18 U.S.C. § 2713</span>
        <p class="csim-text">Un tribunal de EE. UU. exige al proveedor los datos del <b>cliente argentino</b> guardados en São Paulo.</p>
      </div>

      <div v-else class="csim-step csim-out">
        <span class="badge b-rose">🤫 ENTREGA AUTORIZADA</span>
        <p class="csim-text"><b>⛔ Gag order (Kiteworks):</b> prohibido notificar al cliente — el dato viaja y su titular <b>nunca se entera</b>.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.csim {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.csim-btn {
  cursor: pointer;
  align-self: flex-start;
  border: 1px solid rgba(251, 113, 133, 0.65);
  border-radius: 999px;
  padding: 0.18rem 0.7rem;
  font-size: 0.68rem;
  font-weight: 700;
  color: #fda4af;
  background: rgba(251, 113, 133, 0.08);
  transition: all 0.2s;
}
.csim-btn:hover {
  border-color: #fb7185;
  color: #ffe4e6;
  box-shadow: 0 0 14px rgba(251, 113, 133, 0.35);
}
.csim-btn-on {
  border-color: rgba(251, 191, 36, 0.7);
  color: #fcd34d;
  background: rgba(251, 191, 36, 0.08);
}
.csim-panel {
  min-height: 5rem;
  border: 1px solid rgba(125, 155, 255, 0.3);
  border-radius: 10px;
  padding: 0.4rem 0.6rem;
  background: rgba(8, 12, 24, 0.5);
  transition: border-color 0.3s, box-shadow 0.3s;
}
.csim-panel-alto {
  border-color: rgba(251, 113, 133, 0.7);
  box-shadow: 0 0 14px rgba(251, 113, 133, 0.25), inset 0 0 18px rgba(251, 113, 133, 0.06);
  animation: csim-pulse 1.4s ease-in-out infinite;
}
@keyframes csim-pulse {
  0%, 100% { box-shadow: 0 0 8px rgba(251, 113, 133, 0.2); }
  50% { box-shadow: 0 0 20px rgba(251, 113, 133, 0.45); }
}
.csim-idle {
  font-size: 0.66rem;
  opacity: 0.55;
  padding-top: 0.5rem;
}
.csim-step p { margin: 0.3rem 0 0; }
.csim-text {
  font-size: 0.66rem;
  line-height: 1.4;
  opacity: 0.92;
  animation: csim-in 0.3s ease both;
}
@keyframes csim-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
.csim-out {
  border-left: 2px solid rgba(251, 113, 133, 0.7);
  padding-left: 0.45rem;
}
</style>
