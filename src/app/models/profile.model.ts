import mongoose, { Schema, Document } from "mongoose";
interface SingleJobTitle {
    title: string,
    score: number,
}
interface ProfileSchema extends Document {
    jobTitles: SingleJobTitle[];
}
const SingleJobTitleSchema = new Schema<SingleJobTitle>({
    title: { type: String, required: true },
    score: { type: Number, required: true, default: 0 },
});
const profileSchema = new Schema<ProfileSchema>({
    jobTitles: { type: [SingleJobTitleSchema], default: [] },
});
export const ProfileModel =
    mongoose.models.Profile || mongoose.model<ProfileSchema>("Profile", profileSchema);