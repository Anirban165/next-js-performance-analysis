import User from '@/models/schemas/user.schema';
import connectToDb from '@/utils/mongodbConnext';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    console.log(email, password);

    await connectToDb();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        status: 400,
        message: 'User not found',
        data: null,
      });
    }

    // Optionally, you can add password verification here
    if (user.password !== password) {
      return NextResponse.json({
        status: 400,
        message: 'Incorrect password',
        data: null,
      });
    }

    return NextResponse.json({
      status: 200,
      message: 'User found',
      data: user,
    });
  } catch (error: any) {
    console.error('Error during login:', error);
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}