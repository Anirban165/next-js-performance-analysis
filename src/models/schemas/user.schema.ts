import mongoose from 'mongoose';
import { UserInterface } from '../interfaces/user-interface';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  posts: {
    type: Array,
    default: [],
  },
});

const User = mongoose.models.user || mongoose.model<UserInterface>('user', userSchema);

export default User;