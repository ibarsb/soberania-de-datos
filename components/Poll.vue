<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    default: () => ['Total / determinante', 'Con palancas / condicionante', 'No afecta la autonomía'],
  },
})

const votes = ref(props.options.map(() => 0))
const voted = ref(false)

const total = computed(() => votes.value.reduce((a, b) => a + b, 0) || 1)
const max = computed(() => Math.max(...votes.value, 1))

function vote(i) {
  if (voted.value)
    return
  votes.value[i]++
  voted.value = true
}

function reset() {
  votes.value = props.options.map(() => 0)
  voted.value = false
}
</script>

<template>
  <div class="poll-v2">
    <div
      v-for="(opt, i) in options"
      :key="i"
      class="poll-row"
      :class="{ 'poll-winner': voted && votes[i] === max }"
    >
      <button
        class="poll-btn"
        :disabled="voted"
        @click.stop="vote(i)"
      >
        <span class="poll-opt-label">{{ opt }}</span>
        <span v-if="voted" class="poll-pct">{{ Math.round((votes[i] / total) * 100) }}%</span>
      </button>
      <div v-if="voted" class="poll-track">
        <div
          class="poll-fill"
          :style="{ width: `${Math.round((votes[i] / total) * 100)}%` }"
        />
      </div>
    </div>
    <p class="poll-footer">
      <span v-if="voted" class="poll-hint">Votación en vivo — se muestra en pantalla 👁️</span>
      <span v-else class="poll-hint poll-hint-idle">Clic en una opción para votar 👆</span>
      <button v-if="voted" class="poll-restart" @click.stop="reset">↺ Reiniciar</button>
    </p>
  </div>
</template>

<style scoped>
.poll-v2 {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  max-width: 34rem;
  padding: 1rem 1.2rem;
  border: 1px solid rgba(125, 155, 255, 0.35);
  border-radius: 14px;
  background: linear-gradient(160deg, rgba(99, 102, 241, 0.12), rgba(14, 18, 38, 0.55));
  box-shadow: 0 0 22px rgba(99, 102, 241, 0.22);
}
.poll-row { display: flex; flex-direction: column; gap: 0.25rem; }
.poll-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  border: 1px solid rgba(125, 155, 255, 0.4);
  border-radius: 10px;
  padding: 0.45rem 0.9rem;
  font-size: 0.95rem;
  color: inherit;
  background: rgba(10, 14, 26, 0.6);
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
}
.poll-btn:not(:disabled):hover {
  border-color: rgba(34, 211, 238, 0.7);
  background: rgba(34, 211, 238, 0.08);
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.25);
}
.poll-btn:disabled { cursor: default; }
.poll-pct {
  font-variant-numeric: tabular-nums;
  font-size: 0.8rem;
  color: #9ee8ff;
}
.poll-track {
  height: 6px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}
.poll-fill {
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(90deg, #22d3ee, #818cf8);
  box-shadow: 0 0 10px rgba(129, 140, 248, 0.6);
  animation: poll-grow 0.5s ease;
}
.poll-winner .poll-fill { background: linear-gradient(90deg, #34d399, #22d3ee); }
@keyframes poll-grow { from { width: 0 !important; } }
.poll-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0 0;
  font-size: 0.75rem;
  opacity: 0.85;
}
.poll-hint-idle { opacity: 0.6; }
.poll-restart {
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 0.15rem 0.6rem;
  font-size: 0.75rem;
  color: #9ee8ff;
  background: rgba(34, 211, 238, 0.12);
  transition: background 0.2s;
}
.poll-restart:hover { background: rgba(34, 211, 238, 0.25); }
</style>
