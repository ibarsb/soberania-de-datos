<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  question: { type: String, required: true },
  // [{ text: string, correct?: boolean }]
  options: { type: Array, required: true },
  hint: { type: String, default: '' },
})

const chosen = ref(null)

const correctIndex = computed(() => {
  const idx = props.options.findIndex(o => o.correct === true)
  return idx === -1 ? 0 : idx
})

const answered = computed(() => chosen.value !== null)
const isRight = computed(() => chosen.value === correctIndex.value)

function pick(i) {
  if (answered.value)
    return
  chosen.value = i
}

function reset() {
  chosen.value = null
}
</script>

<template>
  <div class="quiz-card">
    <p class="quiz-q">{{ question }}</p>
    <div class="quiz-opts">
      <button
        v-for="(o, i) in options"
        :key="i"
        class="quiz-opt"
        :class="{
          'quiz-idle': !answered,
          'quiz-correct': answered && i === correctIndex,
          'quiz-wrong': answered && i === chosen && i !== correctIndex,
          'quiz-dim': answered && i !== correctIndex && i !== chosen,
        }"
        :disabled="answered"
        @click.stop="pick(i)"
      >
        {{ o.text }}
      </button>
    </div>
    <p v-if="answered" class="quiz-feedback" :class="isRight ? 'quiz-good' : 'quiz-bad'">
      <template v-if="isRight">✅ ¡Correcto! {{ hint }}</template>
      <template v-else>❌ No era esa — la respuesta modelo está marcada en verde. {{ hint }}</template>
    </p>
    <button v-if="answered" class="quiz-reset" @click.stop="reset">↺ Reintentar</button>
  </div>
</template>

<style scoped>
.quiz-card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem 1.1rem;
  border: 1px solid rgba(125, 155, 255, 0.35);
  border-radius: 14px;
  background: linear-gradient(160deg, rgba(168, 85, 247, 0.10), rgba(14, 18, 38, 0.55));
  box-shadow: 0 0 18px rgba(129, 140, 248, 0.16);
}
.quiz-q {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
}
.quiz-opts {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.quiz-opt {
  cursor: pointer;
  text-align: left;
  border: 1px solid rgba(125, 155, 255, 0.4);
  border-radius: 10px;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  color: inherit;
  background: rgba(10, 14, 26, 0.6);
  transition: border-color 0.25s, box-shadow 0.25s, background 0.25s, transform 0.25s, opacity 0.25s;
}
.quiz-opts .quiz-opt + .quiz-opt { margin-top: 0.4rem; }
.quiz-idle:hover {
  border-color: rgba(34, 211, 238, 0.7);
  background: rgba(34, 211, 238, 0.08);
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.25);
}
.quiz-correct {
  border-color: rgba(52, 211, 153, 0.9) !important;
  background: rgba(52, 211, 153, 0.16) !important;
  box-shadow: 0 0 16px rgba(52, 211, 153, 0.45);
  animation: quiz-pop 0.35s ease;
}
.quiz-wrong {
  border-color: rgba(251, 113, 133, 0.9) !important;
  background: rgba(251, 113, 133, 0.16) !important;
  box-shadow: 0 0 16px rgba(251, 113, 133, 0.4);
  animation: quiz-shake 0.4s ease;
}
.quiz-dim { opacity: 0.35; }
.quiz-opts button:disabled { cursor: default; }
.quiz-feedback {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.4;
  animation: quiz-fade 0.4s ease;
}
.quiz-good { color: #6ee7b7; }
.quiz-bad { color: #fda4af; }
.quiz-reset {
  align-self: flex-start;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 0.15rem 0.6rem;
  font-size: 0.72rem;
  color: #9ee8ff;
  background: rgba(34, 211, 238, 0.12);
  transition: background 0.2s;
}
.quiz-reset:hover { background: rgba(34, 211, 238, 0.25); }
@keyframes quiz-pop {
  0% { transform: scale(0.96); }
  60% { transform: scale(1.03); }
  100% { transform: scale(1); }
}
@keyframes quiz-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  75% { transform: translateX(-2px); }
}
@keyframes quiz-fade { from { opacity: 0; } to { opacity: 1; } }
</style>
