<script setup>
import { ref, computed } from 'vue'

const destinos = [
  {
    id: 'aws', icono: '🔴', nom: 'AWS · São Paulo',
    chip: 'risk-alto', chipTxt: '🚨 Riesgo ALTO',
    filas: [
      ['📍 Ubicación del dato', 'São Paulo (Brasil) · sin región en Argentina'],
      ['📜 Cláusulas AAIP', 'Sí · transferencia internacional (art. 12, Ley 25.326) · modelos gratuitas'],
      ['🇺🇸 CLOUD Act', 'Sí · 18 U.S.C. § 2713 alcanza a la matriz de EE. UU. aunque el dato quede en Brasil («la pinza»)'],
      ['🏛️ ¿Ley argentina sola?', 'No · rige la ley de origen + la del país del proveedor'],
    ],
  },
  {
    id: 'claro', icono: '🟡', nom: 'Claro–Oracle Alloy',
    chip: 'risk-medio', chipTxt: '⚠️ Riesgo MEDIO',
    filas: [
      ['📍 Ubicación del dato', '🇦🇷 Datacenter argentino (desde 12/2026)'],
      ['📜 Cláusulas AAIP', 'A definir · la ubicación no define la jurisdicción («ubicación ≠ cumplimiento»)'],
      ['🇺🇸 CLOUD Act', 'Riesgo latente · tecnología de Oracle (EE. UU.) · jurisdicción ante requerimientos extranjeros sin aclarar'],
      ['🏛️ ¿Ley argentina sola?', 'No aclarado · «nube soberana» por confirmar'],
    ],
  },
  {
    id: 'arsat', icono: '🟢', nom: 'ARSAT · Benavídez',
    chip: 'risk-bajo', chipTxt: '✅ Riesgo BAJO',
    filas: [
      ['📍 Ubicación del dato', '🇦🇷 Benavídez · Nube Pública Nacional (Tier III)'],
      ['📜 Cláusulas AAIP', 'No se requieren · el dato no sale del país'],
      ['🇺🇸 CLOUD Act', 'No aplica a una empresa estatal argentina · 2026: bajo la lupa judicial (visita denunciada, versión no confirmada)'],
      ['🏛️ ¿Ley argentina sola?', 'Sí · Ley 25.326 + gobernanza propia (open source)'],
    ],
  },
]

const sel = ref('aws')
const d = computed(() => destinos.find(x => x.id === sel.value))
</script>

<template>
  <div class="tc" @click.stop>
    <div class="tc-btns">
      <button
        v-for="x in destinos" :key="x.id"
        class="tc-btn"
        :class="{ 'tc-btn-on': sel === x.id }"
        @click.stop="sel = x.id"
      >{{ x.icono }} {{ x.nom }}</button>
    </div>

    <div class="tc-panel">
      <div class="tc-head">
        <b>{{ d.icono }} {{ d.nom }}</b>
        <span class="risk-chip" :class="d.chip">{{ d.chipTxt }}</span>
      </div>
      <div v-for="(f, i) in d.filas" :key="i" class="tc-row">
        <b>{{ f[0] }}</b>
        <span>{{ f[1] }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tc { display: flex; flex-direction: column; gap: 0.4rem; }
.tc-btns { display: flex; gap: 0.35rem; }
.tc-btn {
  cursor: pointer;
  flex: 1;
  border: 1px solid rgba(125, 155, 255, 0.35);
  border-radius: 9px;
  padding: 0.22rem 0.3rem;
  font: inherit;
  font-size: 0.62rem;
  font-weight: 700;
  color: inherit;
  background: rgba(10, 14, 26, 0.5);
  transition: border-color 0.2s, background 0.2s;
  white-space: nowrap;
}
.tc-btn:hover { border-color: rgba(34, 211, 238, 0.7); }
.tc-btn-on {
  border-color: rgba(34, 211, 238, 0.85);
  background: rgba(34, 211, 238, 0.12);
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.25);
}
.tc-panel {
  border: 1px dashed rgba(125, 155, 255, 0.35);
  border-radius: 10px;
  padding: 0.4rem 0.55rem;
  background: rgba(8, 12, 24, 0.45);
}
.tc-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  color: #fff;
  font-size: 0.68rem;
  margin-bottom: 0.25rem;
}
.tc-row {
  display: flex;
  flex-direction: column;
  margin: 0.14rem 0;
  font-size: 0.62rem;
  line-height: 1.35;
}
.tc-row b { color: #cfe3ff; }
.tc-row span { opacity: 0.9; }
@keyframes tc-in { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: translateY(0); } }
.tc-panel { animation: tc-in 0.22s ease both; }
</style>
