<script setup>
import { ref } from 'vue'

defineProps({
  label: { type: String, default: 'Pregunta' },
  question: { type: String, required: true },
  answer: { type: String, required: true },
})
const flipped = ref(false)
</script>

<template>
  <button
    class="flip-card"
    :class="{ 'is-flipped': flipped }"
    @click.stop="flipped = !flipped"
  >
    <div class="flip-inner">
      <div class="flip-face flip-front">
        <span class="badge b-violet">{{ label }}</span>
        <p class="flip-q">{{ question }}</p>
        <p class="flip-hint">🖱️ Clic para girar</p>
      </div>
      <div class="flip-face flip-back">
        <div class="card-title">✅ Respuesta técnica</div>
        <p class="flip-a">{{ answer }}</p>
      </div>
    </div>
  </button>
</template>

<style scoped>
.flip-card {
  position: relative;
  perspective: 900px;
  width: 100%;
  min-height: 178px;
  cursor: pointer;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  background: transparent;
  text-align: left;
  display: block;
}
.flip-inner {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  transition: transform 0.55s ease;
}
.is-flipped .flip-inner { transform: rotateY(180deg); }
.flip-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 14px;
  padding: 0.7rem 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border: 1px solid rgba(125, 155, 255, 0.3);
  background: linear-gradient(165deg, rgba(20, 26, 54, 0.72), rgba(10, 14, 26, 0.55));
  box-shadow: 0 8px 22px rgba(2, 6, 16, 0.45);
  overflow: hidden;
}
.flip-front:hover { border-color: rgba(167, 139, 250, 0.7); }
.flip-q {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.35;
}
.flip-hint {
  margin: auto 0 0;
  font-size: 0.62rem;
  opacity: 0.65;
}
.flip-a {
  margin: 0;
  font-size: 0.72rem;
  line-height: 1.4;
  overflow: auto;
}
.flip-back {
  transform: rotateY(180deg);
  border-color: rgba(52, 211, 153, 0.6);
  background: linear-gradient(165deg, rgba(13, 46, 38, 0.85), rgba(10, 14, 26, 0.7));
  box-shadow: 0 0 16px rgba(52, 211, 153, 0.22), 0 8px 22px rgba(2, 6, 16, 0.45);
}
</style>
