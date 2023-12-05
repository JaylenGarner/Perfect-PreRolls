import { NextResponse } from "next/server";
import addSubscriber from "@/app/utils/mailchimp";

export const POST = async (req) => {
  const body = await req.json();

  try {
    const response = await addSubscriber(body);

    return NextResponse.json(response);
  } catch (error) {
    return error;
  }
};
