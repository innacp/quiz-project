<template>
  <div class="result-box">
    <div class="title">{{ results[resultIndex].title }}</div>
    <div class="description">{{ results[resultIndex].description }}</div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useQuizStore } from "@/stores/useQuiz";

export default {
  name: "ResultItem",
  computed: {
    ...mapState(useQuizStore, ["results", "totalCorrect", "resultIndex"]),
  },
};
</script>

<style>
</style>