<template>
  <div class="result-box">
    <div class="title">{{ results[resultIndex].title }}</div>
    <div class="description">{{ results[resultIndex].description }}</div>
  </div>
</template>

<script>
export default {
  name: "ResultItem",
  props: ["results", "totalCorrect"],
  computed: {
    resultIndex() {
      let index = 0;

      this.results.forEach((e, i) => {
        if (e.min <= this.totalCorrect && e.max >= this.totalCorrect) {
          index = i;
        }
      });

      return index;
    },
  },
};
</script>

<style>
</style>