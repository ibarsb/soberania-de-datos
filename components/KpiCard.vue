<script setup>
defineProps({
  value: { type: String, required: true },
  label: { type: String, required: true },
  source: { type: String, default: '' },
  icon: { type: String, default: '' },
  // sky | rose | violet
  color: { type: String, default: 'sky' },
})
</script>

<template>
  <div class="kpi" :class="`kpi-${color}`">
    <span v-if="icon" class="kpi-ico">{{ icon }}</span>
    <span class="kpi-label">{{ label }}</span>
    <div class="kpi-value">{{ value }}</div>
    <p v-if="source" class="kpi-source">{{ source }}</p>
  </div>
</template>

<style scoped>
.kpi {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0.95rem;
  border: 1px solid;
  border-radius: 14px;
  background: linear-gradient(165deg, rgba(20, 26, 54, 0.85), rgba(10, 14, 26, 0.7));
  overflow: hidden;
}
.kpi-sky {
  border-color: rgba(56, 189, 248, 0.65);
  box-shadow: 0 0 18px rgba(56, 189, 248, 0.28), inset 0 0 24px rgba(56, 189, 248, 0.06);
}
.kpi-rose {
  border-color: rgba(251, 113, 133, 0.65);
  box-shadow: 0 0 18px rgba(251, 113, 133, 0.28), inset 0 0 24px rgba(251, 113, 133, 0.06);
}
.kpi-violet {
  border-color: rgba(167, 139, 250, 0.65);
  box-shadow: 0 0 18px rgba(167, 139, 250, 0.28), inset 0 0 24px rgba(167, 139, 250, 0.06);
}
.kpi-ico {
  position: absolute;
  top: 0.55rem;
  right: 0.75rem;
  font-size: 1.1rem;
  opacity: 0.85;
}
.kpi-label {
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.75;
}
.kpi-value {
  margin-top: 0.25rem;
  font-size: 1.65rem;
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
  font-variant-numeric: tabular-nums;
}
.kpi-sky .kpi-value { color: #a8e5ff; text-shadow: 0 0 18px rgba(56, 189, 248, 0.5); }
.kpi-rose .kpi-value { color: #ffb3c0; text-shadow: 0 0 18px rgba(251, 113, 133, 0.5); }
.kpi-violet .kpi-value { color: #d6c8ff; text-shadow: 0 0 18px rgba(167, 139, 250, 0.5); }
.kpi-source {
  margin: 0.35rem 0 0;
  font-size: 0.66rem;
  opacity: 0.65;
  line-height: 1.3;
}
</style>
