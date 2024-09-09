import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export default async function connectToDb() {
  if (connection.isConnected) {
    console.log("Already connected to database. Logged from: mongodbConnect.ts");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);
    connection.isConnected = db.connections[0].readyState;
    mongoose.connection.on('connection', () => {
      // ! This callback can be used for testing / implementing middlewares
    });
    mongoose.connection.on('error', () => {
      console.error('Error connecting to database. Logged from: mongodbConnect.ts');
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error connecting to database. Logged from: mongodbConnect.ts');
    // process.exit(1);
  }
}