import { connectDB } from "@/dbConfig/dbConfig";
import { User, userValidation } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
connectDB();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username, email, phone } = reqBody;
    const { error } = userValidation.validate({ username, email, phone });
    if (error) {
      return NextResponse.json({ error: error.details[0].message });
    }
    const userExist = await User.findOne({ $or: [{ phone }, { email }] });
    if (userExist) {
      return NextResponse.json({
        error: "Phone Number or email Already Used, try somthing else",
      });
    }
    const newUser = await User.create({ username, email, phone });
    NextResponse.json({ success: "Reservation successfull Thank you!" })
  } catch (error: any) {
    NextResponse.json({ error: error.message }, { status: 500 });
  }
}
