import mongoose, { Schema, Document } from 'mongoose';

export interface PostSchema extends Document {
    title: string;
    content: string;
}

const postSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
});

export const Post = mongoose.model('Post') || mongoose.model<PostSchema>('Post', postSchema);
