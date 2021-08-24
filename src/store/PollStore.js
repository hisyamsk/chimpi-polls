import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "React or Svelte?",
    answerA: "React",
    answerB: "Svelte",
    votesA: 9,
    votesB: 13,
  },
  {
    id: 2,
    question: "Terang Bulan vs Martabak Manis",
    answerA: "Terang Bulan",
    answerB: "Martabak Manis",
    votesA: 23,
    votesB: 8,
  },
]);

export default PollStore;
