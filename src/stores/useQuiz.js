import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questionIndex: 0,
    questionsAnswered: 0,
    totalCorrect: 0,
    questions: [
      {
        q: "What is Vue.js?",
        answers: [
          {
            text: "programming language",
            is_correct: false,
          },
          {
            text: "framework",
            is_correct: true,
          },
          {
            text: "library",
            is_correct: false,
          },
          {
            text: "extension",
            is_correct: false,
          },
        ],
      },
      {
        q: "Which directive creates two-way binding?",
        answers: [
          {
            text: "v-for",
            is_correct: false,
          },
          {
            text: "v-bind",
            is_correct: false,
          },
          {
            text: "v-show",
            is_correct: false,
          },
          {
            text: "v-model",
            is_correct: true,
          },
        ],
      },
      {
        q: "Which lifecycle hook is called when the instance is initialized?",
        answers: [
          {
            text: "created",
            is_correct: false,
          },
          {
            text: "beforeCreate",
            is_correct: true,
          },
          {
            text: "initialized",
            is_correct: false,
          },
          {
            text: "beforeMount",
            is_correct: false,
          },
        ],
      },
      {
        q: "What 'v-for' directive is used for?",
        answers: [
          {
            text: "list rendering",
            is_correct: true,
          },
          {
            text: "listening to DOM events",
            is_correct: false,
          },
          {
            text: "conditional rendering",
            is_correct: false,
          },
          {
            text: "binding",
            is_correct: false,
          },
        ],
      },
      {
        q: "Which attribute applies CSS to elements of the current component only?",
        answers: [
          {
            text: "slot",
            is_correct: false,
          },
          {
            text: "ref",
            is_correct: false,
          },
          {
            text: "scoped",
            is_correct: true,
          },
          {
            text: "style",
            is_correct: false,
          },
        ],
      },
    ],
    results: [
      {
        min: 0,
        max: 2,
        title: "Try again!",
        description: "Do a little more studying and you'll succeed!",
      },
      {
        min: 5,
        max: 5,
        title: "Well done!",
        description: "Practice makes perfect!",
      },
    ],
  }),
  getters: {
    resultIndex(state) {
      let index = 0;
      state.results.forEach((e, i) => {
        if (e.min <= state.totalCorrect && e.max >= state.totalCorrect) {
          index = i;
        }
      });
      return index;
    },
  },
  actions: {
    questionAnswered(is_correct) {
      if (is_correct) {
        this.totalCorrect++;
      }
      this.questionsAnswered++;
    },
    restart() {
      this.questionsAnswered = 0;
      this.totalCorrect = 0;
    },
  },
});
