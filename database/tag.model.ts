import { questions } from "@/constants";
import { Schema, models, model } from "mongoose";

interface ITag {
  name: string;
  questions: number;
}

const TagSchema = new Schema<ITag>(
  {
    name: { type: String, required: true },
    questions: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Tag = models?.tag || model<ITag>("Tag", TagSchema);

export default Tag;
