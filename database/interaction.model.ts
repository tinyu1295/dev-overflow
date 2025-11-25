import { model, Schema, models } from "mongoose";

interface IInteraction {
  user: Schema.Types.ObjectId;
  action: string;
  actionId: Schema.Types.ObjectId;
  actionType: string;
}

const InteractionSchema = new Schema<IInteraction>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true },
    actionId: { type: Schema.Types.ObjectId, required: true },
    actionType: { type: String, enum: ["question", "answer"], required: true },
  },
  { timestamps: true }
);

const Interaction =
  models?.interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
