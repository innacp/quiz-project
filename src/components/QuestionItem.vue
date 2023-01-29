<template>
  <div class="question-container">
    <div class="progress-box">
      <div
        class="progress"
        :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"
      ></div>
      <div class="status">
        {{ questionsAnswered }} of {{ questions.length }} questions answered
      </div>
    </div>
    <!-- <transition-group name="fade"> -->
    <div
      class="question-box"
      v-for="(question, qi) in questions"
      :key="question.q"
      v-show="questionsAnswered === qi"
    >
      <div class="question">{{ question.q }}</div>
      <div
        class="answer"
        v-for="answer in question.answers"
        :key="answer.text"
        @click.prevent="selectAnswer(answer.is_correct)"
      >
        {{ answer.text }}
      </div>
    </div>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useQuizStore } from "@/stores/useQuiz";

export default {
  name: "QuestionItem",
  // props: ["questions", "questionsAnswered"],
  // emits: ["question-answered"],
  computed: {
    ...mapState(useQuizStore, ["questions", "questionsAnswered"]),
  },
  methods: {
    ...mapActions(useQuizStore, ["questionAnswered"]),
  },
  // selectAnswer(is_correct) {
  //   this.$emit("question-answered", is_correct);
  // },
};
</script>

<style>
</style>