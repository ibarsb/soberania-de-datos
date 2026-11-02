<script setup>
import { ref } from 'vue'

const items = [
  {
    id: 'ar', icon: '🇦🇷', label: 'Ley 25.326 (2000) — protección de datos personales', color: 'b-sky',
    lines: [
      '⚖️ <b>Art. 12:</b> registrar datos en una nube extranjera = <b>transferencia internacional</b>.',
      '🇪🇺 La UE la declaró <b>país adecuado</b> (2024) — pero <b>EE. UU. no figura</b> como adecuado para la AAIP.',
      '🧾 Cláusulas modelo: <b>gratuitas</b> (AAIP) y de uso recomendado en cada contrato con nube de EE. UU.',
    ],
  },
  {
    id: 'eu', icon: '🇪🇺', label: 'GDPR (2018) — norma global de facto', color: 'b-violet',
    lines: [
      '💸 Multas de hasta <b>€20M o el 4%</b> de la facturación anual global.',
      '⏱️ Brechas: notificación al regulador en <b>72 horas</b>.',
      '🌍 Alcance <b>extraterritorial</b>: rige a cualquiera que trate datos de residentes de la UE.',
    ],
  },
  {
    id: 'reg', icon: '🌎', label: 'Región: LGPD y Chile 21.719', color: 'b-emerald',
    lines: [
      '🇧🇷 Brasil: <b>LGPD</b> (sancionada 2018, plenamente vigente 2020).',
      '🇨🇱 Chile: <b>Ley 21.719</b> — regirá plenamente desde 12/2026.',
    ],
  },
]

const open = ref('ar')
</script>

<template>
  <div class="lac" @click.stop>
    <button
      v-for="it in items" :key="it.id"
      class="lac-row"
      :class="{ 'lac-row-open': open === it.id }"
      @click.stop="open = open === it.id ? null : it.id"
    >
      <span class="badge" :class="it.color">{{ it.icon }} {{ it.label }}</span>
      <span class="lac-chev" :class="{ 'lac-chev-open': open === it.id }">▾</span>
    </button>

    <div class="lac-pane">
      <template v-if="open">
        <template v-for="it in items" :key="it.id">
          <div v-if="open === it.id" class="lac-detail">
            <p v-for="(l, i) in it.lines" :key="i" class="lac-line" v-html="'· ' + l"></p>
          </div>
        </template>
      </template>
      <div v-else class="lac-idle">Desplegá una fila para comparar el art. 12, las multas y los plazos.</div>
    </div>
  </div>
</template>

<style scoped>
.lac {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.lac-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  cursor: pointer;
  border: none;
  padding: 0.2rem 0.45rem 0.2rem 0.55rem;
  border-radius: 10px;
  font: inherit;
  color: inherit;
  text-align: left;
  background: rgba(10, 14, 26, 0.45);
  transition: border-color 0.2s, background 0.2s;
}
.lac-row:hover {
  background: rgba(34, 211, 238, 0.06);
}
.lac-row-open {
  background: rgba(34, 211, 238, 0.10);
}
.lac-chev {
  font-size: 0.7rem;
  opacity: 0.6;
  transition: transform 0.2s;
}
.lac-chev-open {
  transform: rotate(180deg);
  opacity: 1;
}
.lac-pane {
  min-height: 4rem;
  border: 1px dashed rgba(125, 155, 255, 0.35);
  border-radius: 10px;
  padding: 0.45rem 0.6rem;
  background: rgba(8, 12, 24, 0.4);
}
.lac-detail {
  animation: lac-in 0.25s ease both;
}
.lac-line {
  margin: 0.12rem 0;
  font-size: 0.66rem;
  line-height: 1.4;
}
.lac-idle {
  font-size: 0.66rem;
  opacity: 0.5;
  padding-top: 0.5rem;
}
@keyframes lac-in {
  from { opacity: 0; transform: translateY(3px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
