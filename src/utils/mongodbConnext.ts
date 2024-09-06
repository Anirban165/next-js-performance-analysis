import mongoose from 'mongoose';

const connectToMongoDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log('Connected to MongoDB');
        return Promise.resolve();
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        return Promise.reject(error);
    }
};

export default connectToMongoDB;