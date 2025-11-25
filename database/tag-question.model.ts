import { questions } from "@/constants";
import { Schema, models, model } from "mongoose";

interface ITagQuestion {
  tag: Schema.Types.ObjectId;
  question: Schema.Types.ObjectId[];
}

const TagQuestionSchema = new Schema<ITagQuestion>(
  {
    tag: { type: Schema.Types.ObjectId, ref: "Tag", required: true },
    question: [
      { type: Schema.Types.ObjectId, ref: "Question", required: true },
    ],
  },
  { timestamps: true }
);

const TagQuestion =
  models?.tagQuestion || model<ITagQuestion>("TagQuestion", TagQuestionSchema);

export default TagQuestion;
