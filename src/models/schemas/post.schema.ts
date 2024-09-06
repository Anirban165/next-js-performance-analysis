import mongoose, { Schema, Document } from 'mongoose';

export interface PostSchema extends Document {
  title: string;
  content: string;
}

const postSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Post =
  mongoose.models.post || mongoose.model<PostSchema>('post', postSchema);

export default Post;
