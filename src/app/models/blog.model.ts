import mongoose, { Schema} from 'mongoose';
export interface IBlog {
    title: string;
    category: string;
    description?: string;
    codeSnippet?: string;
    createdAt?: Date;
    _id?:string;
}
const blogSchema = new Schema<IBlog>(
    {
        title: {
            type: String,
            required: [true, 'Blog title is required'],
            trim: true,
        },
        category: {
            type: String,
            required: [true, 'Category is required'],
            trim: true,
        },
        description: {
            type: String,
            default: '',
        },
        codeSnippet: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true, // automatically adds createdAt & updatedAt
    }
);
const Blog = mongoose.models.Blog || mongoose.model<IBlog>('Blog', blogSchema);
export default Blog;
