<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  // [{ icon, title, desc }]
  steps: { type: Array, required: true },
})

const active = ref(0)
const current = computed(() => props.steps[active.value])
</script>

<template>
  <div class="stepper">
    <div class="stepper-track">
      <template v-for="(s, i) in steps" :key="i">
        <button
          class="step"
          :class="{ 'step-active': i === active, 'step-done': i < active }"
          @click.stop="active = i"
        >
          <span class="step-ico">{{ s.icon }}</span>
          <span class="step-title">{{ s.title }}</span>
          <span class="step-num">{{ i + 1 }}</span>
        </button>
        <div v-if="i < steps.length - 1" class="step-link" :class="{ 'step-link-done': i < active }" />
      </template>
    </div>

    <div class="stepper-detail">
      <div v-for="(s, i) in steps" v-show="i === active" :key="i" class="stepper-pane">
        <span class="badge" :class="s.tone || 'b-sky'">{{ s.badge || s.title }}</span>
        <p class="stepper-text">{{ s.desc }}</p>
      </div>
    </div>

    <div class="stepper-nav">
      <button class="stepper-btn" :disabled="active === 0" @click.stop="active = active - 1">◀ Anterior</button>
      <div class="stepper-dots">
        <button
          v-for="(s, i) in steps"
          :key="i"
          class="stepper-dot"
          :class="{ 'stepper-dot-on': i === active }"
          :title="s.title"
          @click.stop="active = i"
        />
      </div>
      <button
        class="stepper-btn"
        :disabled="active === steps.length - 1"
        @click.stop="active = active + 1"
      >
        Siguiente ▶
      </button>
    </div>
  </div>
</template>

<style scoped>
.stepper { display: flex; flex-direction: column; gap: 0.7rem; width: 100%; }
.stepper-track {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  flex: 1;
  min-width: 0;
  cursor: pointer;
  border: 1px solid rgba(125, 155, 255, 0.3);
  border-radius: 12px;
  padding: 0.45rem 0.3rem 0.3rem;
  font: inherit;
  color: inherit;
  background: rgba(10, 14, 26, 0.55);
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
}
.step:not(.step-active):not(:disabled):hover {
  border-color: rgba(34, 211, 238, 0.55);
}
.step-active {
  border-color: rgba(34, 211, 238, 0.85);
  background: rgba(34, 211, 238, 0.10);
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.3);
}
.step-done { border-color: rgba(52, 211, 153, 0.55); }
.step-ico { font-size: 1.05rem; }
.step-title {
  font-size: 0.62rem;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
.step-num {
  font-size: 0.55rem;
  opacity: 0.55;
}
.step-link {
  flex: none;
  height: 2px;
  width: 1.1rem;
  border-radius: 2px;
  background: rgba(125, 155, 255, 0.35);
}
.step-link-done { background: linear-gradient(90deg, #34d399, #22d3ee); }
.stepper-detail {
  min-height: 5.2rem;
  border: 1px solid rgba(125, 155, 255, 0.3);
  border-radius: 12px;
  background: linear-gradient(165deg, rgba(20, 26, 54, 0.72), rgba(10, 14, 26, 0.55));
  padding: 0.65rem 0.85rem;
}
.stepper-pane { display: flex; flex-direction: column; gap: 0.3rem; }
.stepper-text {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.45;
}
.stepper-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.stepper-btn {
  cursor: pointer;
  border: 1px solid rgba(125, 155, 255, 0.35);
  border-radius: 999px;
  padding: 0.2rem 0.7rem;
  font-size: 0.65rem;
  color: #9ee8ff;
  background: rgba(34, 211, 238, 0.08);
  transition: background 0.2s;
}
.stepper-btn:not(:disabled):hover { background: rgba(34, 211, 238, 0.2); }
.stepper-btn:disabled { opacity: 0.35; cursor: default; }
.stepper-dots { display: flex; gap: 0.4rem; }
.stepper-dot {
  cursor: pointer;
  width: 9px;
  height: 9px;
  border-radius: 999px;
  border: 1px solid rgba(125, 155, 255, 0.55);
  background: transparent;
  padding: 0;
}
.stepper-dot-on { background: #22d3ee; box-shadow: 0 0 8px rgba(34, 211, 238, 0.7); border-color: #22d3ee; }
</style>
