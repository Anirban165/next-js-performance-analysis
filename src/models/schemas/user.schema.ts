import mongoose, { Schema, Document } from 'mongoose';
import { PostSchema } from './post.schema';

export interface UserSchema extends Document {
    name: string;
    email: string;
    password: string;
    totalPosts: number;
    posts: PostSchema[];
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    totalPosts: { type: Number, default: 0 },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

export const User = mongoose.model<UserSchema>('User', userSchema);