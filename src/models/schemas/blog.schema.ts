import mongoose, { Schema } from 'mongoose';
import { BlogInterface } from '../interfaces/blog-interface';

const BlogSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdByName: { type: String, required: true },
  createdByID: { type: String, required: true },
});

const Blog =
  mongoose.models.Blog || mongoose.model<BlogInterface>('Blog', BlogSchema);

export default Blog;
