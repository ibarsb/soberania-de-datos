<script setup>
import { ref, provide, computed } from 'vue'

const props = defineProps({
  initial: { type: String, default: null },
  // pill | timeline
  variant: { type: String, default: 'pill' },
})

const items = ref([])
const active = ref(props.initial)

provide('tabs-items', items)
provide('tabs-active', computed({
  get: () => active.value,
  set: v => active.value = v,
}))
</script>

<template>
  <div class="tabs">
    <div class="tabs-bar" :class="{ 'tabs-timeline': variant === 'timeline' }">
      <span v-if="variant === 'timeline'" class="tabs-line" aria-hidden="true" />
      <button
        v-for="t in items"
        :key="t.id"
        class="tabs-btn"
        :class="{ 'tabs-btn-active': active === t.id }"
        @click.stop="active = t.id"
      >
        {{ t.label }}
      </button>
    </div>
    <div class="tabs-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tabs-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.8rem;
}
.tabs-btn {
  cursor: pointer;
  border: 1px solid rgba(125, 155, 255, 0.35);
  border-radius: 999px;
  padding: 0.25rem 0.85rem;
  font-size: 0.8rem;
  color: #aab4d6;
  background: rgba(10, 14, 26, 0.55);
  transition: all 0.2s;
}
.tabs-btn:hover {
  border-color: rgba(34, 211, 238, 0.6);
  color: #e8ecf8;
}
.tabs-btn-active {
  border-color: rgba(34, 211, 238, 0.85);
  color: #041418;
  background: linear-gradient(120deg, #22d3ee, #818cf8);
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.35);
}

/* Variante línea de tiempo (horizontal) */
.tabs-timeline {
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
  margin-bottom: 0.9rem;
}
.tabs-line {
  position: absolute;
  left: 3%;
  right: 3%;
  top: 46%;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, rgba(52, 211, 153, 0.5), rgba(125, 155, 255, 0.35), rgba(251, 113, 133, 0.5));
  z-index: 0;
}
.tabs-timeline .tabs-btn {
  position: relative;
  z-index: 1;
  background: rgba(10, 14, 26, 0.9);
  border-color: rgba(125, 155, 255, 0.45);
}
.tabs-timeline .tabs-btn-active {
  background: linear-gradient(120deg, #22d3ee, #818cf8);
}
</style>
