import { title } from "process";

export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const questions = [
  { title: "How to center a div in CSS?" },
  { title: "What is a closure in JavaScript?" },
  { title: "Explain event delegation in JavaScript?" },
  { title: "What is the difference between == and === in JavaScript?" },
];

export const filters = [
  { label: "Newest", value: "newest" },
  { label: "Recommended", value: "recommended" },
  { label: "Frequent", value: "frequent" },
  { label: "Unanswered", value: "unanswered" },
];
