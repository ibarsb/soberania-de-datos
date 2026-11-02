<script setup>
import { inject, computed, onMounted } from 'vue'

const props = defineProps({
  id: { type: String, default: '1' },
  label: { type: String, default: '' },
})

const items = inject('tabs-items')
const active = inject('tabs-active')

// SSR-safe: register once in setup (runs on server too)
if (items) {
  if (!items.value.some(t => t.id === props.id))
    items.value.push({ id: props.id, label: props.label })
}

onMounted(() => {
  // Auto-select the first tab if nothing is selected
  if (active && active.value == null && items.value.length)
    active.value = items.value[0].id
})

const visible = computed(() => active.value === props.id)
</script>

<template>
  <div v-show="visible">
    <slot />
  </div>
</template>
