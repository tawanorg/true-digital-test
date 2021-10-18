import { IQuize } from "../types";

export const QUIZES: IQuize[] = [
  {
    id: 1,
    question: "Question A",
    correctAnswer: [11],
    choiceType: "SINGLE",
    answer: [
      {
        id: 11,
        title: "Answer A",
      },
      {
        id: 12,
        title: "Answer B",
      },
      {
        id: 13,
        title: "Answer C",
      },
    ],
  },
  {
    id: 2,
    question: "Question B",
    correctAnswer: [21, 22],
    choiceType: "MULTIPLE",
    answer: [
      {
        id: 21,
        title: "Answer A",
      },
      {
        id: 22,
        title: "Answer B",
      },
      {
        id: 23,
        title: "Answer C",
      },
    ],
  },
  {
    id: 3,
    question: "Question C",
    correctAnswer: [31],
    choiceType: "SINGLE",
    answer: [
      {
        id: 31,
        title: "Answer A",
      },
      {
        id: 32,
        title: "Answer B",
      },
      {
        id: 33,
        title: "Answer C",
      },
    ],
  },
  {
    id: 4,
    question: "Question D",
    correctAnswer: [11],
    choiceType: "MULTIPLE",
    answer: [
      {
        id: 11,
        title: "Answer A",
      },
      {
        id: 12,
        title: "Answer B",
      },
      {
        id: 13,
        title: "Answer C",
      },
    ],
  },
];
