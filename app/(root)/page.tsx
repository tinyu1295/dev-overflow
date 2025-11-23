import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import LocalSearch from "@/components/search/LocalSearch";
import HomeFilter from "@/components/filters/HomeFilter";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const { query = "" } = await searchParams;
  const { filter = "" } = await searchParams;
  console.log(query);
  const filteredQuestion = questions.filter((item) =>
    item.description.toLowerCase().includes(query.toLowerCase())
  );
  const session = await auth();
  if (!session?.user) return null;

  return (
    // <main>
    //   <form
    //     className="px-10 pt-[100px]"
    //     action={async () => {
    //       "use server";
    //       await signOut({ redirectTo: ROUTES.SIGN_IN });
    //     }}
    //   >
    //     <Button type="submit">Sign Out</Button>
    //   </form>
    // </main>
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          className=" primary-gradient min-h-[46px] px-4 py-3 text-light-900!"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          icon="/icons/search.svg"
          placeholder="search question..."
          otherClasses="flex-1"
          route="/"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestion.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
