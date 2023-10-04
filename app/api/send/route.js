import { NextResponse } from "next/server";
import { sendEmail } from "@/app/utils/aws-ses";

export const POST = async (req) => {
  const body = await req.json();

  try {
    const response = await sendEmail(body);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error });
  }
};
