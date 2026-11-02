<script setup>
defineProps({
  to: { type: Number, required: true },
})
</script>

<template>
  <button class="agenda-nav" @click.stop="$slidev.nav.go(to)">
    <slot />
  </button>
</template>

<style scoped>
.agenda-nav {
  cursor: pointer;
  width: 100%;
  text-align: left;
  border: 1px solid rgba(125, 155, 255, 0.3);
  border-radius: 10px;
  padding: 0.35rem 0.9rem;
  font: inherit;
  color: inherit;
  background: rgba(10, 14, 26, 0.5);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}
.agenda-nav:hover {
  border-color: rgba(34, 211, 238, 0.7);
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.25);
  transform: translateX(3px);
}
</style>
