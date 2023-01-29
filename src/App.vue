<template>
  <div class="quiz-box">
    <!-- <transition name="fade" mode="out-in"> -->
    <QuestionItem
      v-if="questionsAnswered < questions.length"
      @click="questionAnswered"
    ></QuestionItem>
    <ResultItem v-else></ResultItem>
    <!-- </transition> -->
    <!-- <button type="button" class="back-btn" @click.prevent="goBack">Back</button> -->
    <button
      type="button"
      class="reset-btn"
      @click.prevent="restart"
      v-if="this.questionsAnswered === questions.length"
    >
      Restart
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useQuizStore } from "@/stores/useQuiz";
import QuestionItem from "./components/QuestionItem.vue";
import ResultItem from "./components/ResultItem.vue";
import "../src/assets/css/main.css";

export default {
  name: "App",
  components: {
    QuestionItem,
    ResultItem,
  },
  computed: {
    ...mapState(useQuizStore, [
      "questionIndex",
      "questionsAnswered",
      "totalCorrect",
      "questions",
      "results",
    ]),
  },
  methods: {
    ...mapActions(useQuizStore, ["questionAnswered", "restart"]),
  },
};
</script>

<style>
</style>
