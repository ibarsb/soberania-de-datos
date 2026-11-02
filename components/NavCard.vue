<script setup>
defineProps({
  to: { type: Number, required: true },
  icon: { type: String, default: '›' },
  title: { type: String, required: true },
  desc: { type: String, default: '' },
  full: { type: Boolean, default: false },
})
</script>

<template>
  <button class="nav-card" :class="{ 'nav-span2': full }" @click.stop="$slidev.nav.go(to)">
    <span class="nav-ico">{{ icon }}</span>
    <span class="nav-txt">
      <span class="nav-t">{{ title }}</span>
      <span v-if="desc" class="nav-d">{{ desc }}</span>
    </span>
    <span class="nav-go">→</span>
  </button>
</template>

<style scoped>
.nav-card {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-align: left;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(125, 155, 255, 0.30);
  border-radius: 14px;
  padding: 0.65rem 0.9rem;
  font: inherit;
  color: inherit;
  background: linear-gradient(165deg, rgba(20, 26, 54, 0.72), rgba(10, 14, 26, 0.55));
  box-shadow: 0 8px 22px rgba(2, 6, 16, 0.45);
  transition: border-color 0.22s, box-shadow 0.22s, transform 0.22s;
}
.nav-card:hover {
  border-color: rgba(34, 211, 238, 0.75);
  box-shadow: 0 0 16px rgba(34, 211, 238, 0.28), 0 8px 22px rgba(2, 6, 16, 0.45);
  transform: translateY(-2px);
}
.nav-ico {
  display: grid;
  place-items: center;
  flex: none;
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(129, 140, 248, 0.14);
  border: 1px solid rgba(129, 140, 248, 0.4);
}
.nav-txt { display: flex; flex-direction: column; min-width: 0; }
.nav-t { font-size: 0.88rem; font-weight: 600; color: #ffffff; }
.nav-d { font-size: 0.7rem; opacity: 0.72; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.nav-go {
  margin-left: auto;
  flex: none;
  font-size: 0.85rem;
  color: #9ee8ff;
  opacity: 0.6;
  transition: transform 0.22s, opacity 0.22s;
}
.nav-card:hover .nav-go { opacity: 1; transform: translateX(3px); }
.nav-span2 { grid-column: span 2; }
</style>
