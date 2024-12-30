import mongoose, { Model } from "mongoose";

import { ApplicationData } from "@/types";

const ApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    dob: { type: String, required: true },
    degree: { type: String, required: true },
    department: { type: String, required: true },
    cv: { type: String, required: true },
  },
  { timestamps: true },
);
const Application: Model<ApplicationData> =
  mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);

export default Application;
