<script setup>
import { computed } from 'vue'
import { activeNode } from '../composables/dataMapStore'

const node = computed(activeNode)
</script>

<template>
  <div class="dmi">
    <div :key="'n-' + (node ? node.id : 'empty')" class="dmi-card dmi-anim" :class="node ? 'dmi-' + node.risk : ''">
      <template v-if="node">
        <p class="card-title">{{ node.title }}</p>
        <p class="dmi-desc">{{ node.desc }}</p>
        <div class="dmi-row">
          <span class="risk-chip" :class="'risk-' + node.risk">{{ node.riskLabel }}</span>
        </div>
        <p class="dmi-legal">⚖️ {{ node.legal }}</p>
      </template>
      <template v-else>
        <p class="card-title">🔍 Mapa de conectividad</p>
        <p class="dmi-desc">Pasá el cursor o hacé clic sobre un punto del mapa para ver sus detalles técnicos y riesgos legales.</p>
      </template>
    </div>

    <div class="card card-amber text-xs p-2" style="font-size: 0.68rem;">
      <b style="color:#fff;">⚖️ La pinza jurisdiccional en el mapa:</b> si la empresa dueña de la nube o del cable es de EE. UU., el
      <b>CLOUD Act</b> puede exigir los datos sin importar el país donde estén (<i>Kiteworks</i>) — y puede impedir avisar al cliente.
    </div>
  </div>
</template>

<style scoped>
.dmi {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  min-width: 0;
}
.dmi-card {
  border: 1px solid rgba(125, 155, 255, 0.3);
  border-radius: 12px;
  padding: 0.55rem 0.8rem;
  background: linear-gradient(165deg, rgba(20, 26, 54, 0.72), rgba(10, 14, 26, 0.55));
  box-shadow: 0 8px 22px rgba(2, 6, 16, 0.45);
}
.dmi-card p { margin: 0; }
.dmi-desc {
  margin-top: 0.25rem !important;
  font-size: 0.74rem;
  line-height: 1.45;
  opacity: 0.92;
}
.dmi-row { margin-top: 0.4rem; }
.dmi-legal {
  margin-top: 0.45rem !important;
  font-size: 0.68rem;
  line-height: 1.4;
  opacity: 0.8;
  border-top: 1px dashed rgba(125, 155, 255, 0.3);
  padding-top: 0.4rem;
}
.dmi-alto { border-color: rgba(251, 113, 133, 0.55); }
.dmi-medio { border-color: rgba(251, 191, 36, 0.55); }

/* Animación de entrada al cambiar de nodo (por key — sin transición acoplable) */
.dmi-anim { animation: dmi-in 0.22s ease both; }
@keyframes dmi-in {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
