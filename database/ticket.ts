interface Ticket {
  id: number;
  title: string;
  description: string;
}

export const tickets: Array<Ticket> = [
  { id: 1, title: "Sample Ticket", description: "This is a sample ticket." },
  {
    id: 2,
    title: "Another Ticket",
    description: "This is another sample ticket.",
  },
  {
    id: 3,
    title: "Third Ticket",
    description: "This is the third sample ticket.",
  },
];
