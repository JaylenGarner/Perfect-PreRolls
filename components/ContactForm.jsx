"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Card className="w-[500px] border-none">
      <CardHeader>
        <CardTitle className="text-4xl tracking-wide">Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="subject" className="text-xl">
                Subject
              </Label>
              <Input
                id="subject"
                placeholder="What is your message about?"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-xl">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email" className="text-xl">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message" className="text-xl">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your Message"
                className="resize-none"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Send</Button>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
