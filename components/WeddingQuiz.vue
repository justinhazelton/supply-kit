<script lang="ts" setup>
import { propsToAttrMap } from '@vue/shared';
import { ref, computed } from 'vue';

const props = defineProps({

    image: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },



})


const testVar = props.id



const questions = ref([
  {
    question: 'What colour is the sky? heheheh',
    answer: 0,
    index: 0,
    options: [
      props.id,
      'Purple',
      'Dinosaur'
    ],
    selected: null
  },
  {
    question: 'What is in the garden?',
    answer: 2,
    options: [
      'Monkeys',
      'TV',
      'Tomatoes'
    ],
    selected: null
  }
])
const quizCompleted = ref(false)
const currentQuestion  = ref(0)
const score = computed(() => {
  let value = 0
  questions.value.map(q => {
    if (q.selected == q.answer) {
      value++
    }
  })
  return value
})
const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value]
  question.index = currentQuestion.value
  console.log(`Question ${question.index}`)

  return question
})
const SetAnswer = evt => {
  questions.value[currentQuestion.value].selected = evt.target.value
  evt.target.value = null
}
const NextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++
  } else {
    quizCompleted.value = true
  }
}










</script>

<template>
 
    <section class="quiz" v-if="!quizCompleted">
      <div class="quizInfo">
        <div class="question">{{ getCurrentQuestion.question }}</div>
        <div class="score">Score {{ score }} / {{ questions.length }}</div>
      </div>

      <div class="options p-6 divide-y divide-slate-200">
        <label class="flex py-4 first:pt-0 last:pb-0 hover:bg-blue-700"
          v-for="(option, index) in getCurrentQuestion.options" 
            :key="index"
            :class="`option ${
              getCurrentQuestion.selected == index 
                ? index == getCurrentQuestion.answer
                  ? 'correct'
                  : 'wrong'
                  :''
            } ${
                getCurrentQuestion.selected != null &&
                index != getCurrentQuestion.selected
                ? 'disabled'
                : ''
             }`">
            <input type="radio" 
              name="getCurrentQuestion.index" 
              :value="index"
              v-model="getCurrentQuestion.selected"
              :disabled="getCurrentQuestion.selected"
              @change ="SetAnswer">
            <span>{{ option }}</span>
        </label>
      </div>

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="NextQuestion"
        :disabled="!getCurrentQuestion.selected">
          {{
          getCurrentQuestion.index == questions.length - 1 
            ? 'Finish'
            : getCurrentQuestion.selected == null
              ? 'Select an option'
              : 'Next question'
          }}
      </button>

    </section>

    <section v-else>
      <h2>You have finished the quiz</h2>
      <p>Your score is {{ score }} / {{ questions.length }}</p>
    </section>




</template>