import User from '@/models/schemas/user.schema';
import connectToDb from '@/utils/mongodbConnext';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { name, email, password } = reqBody;
  try {
    await connectToDb();
    const user = await User.findOne({
      email,
    });
    if (user) {
      return NextResponse.json({
        status: 400,
        message: 'User already exists',
      });
    }

    const createdUser = await User.create({ name, email, password });
    return NextResponse.json({
      status: 201,
      message: 'User created successfully',
      data: createdUser,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}
