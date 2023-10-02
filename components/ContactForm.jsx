"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Card className="w-[1000px] max-xl:w-5/6 border-none h-fit ">
      <CardContent>
        <form className="pt-16">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1 w-full">
              <Label htmlFor="subject" className="form_label">
                Subject
              </Label>
              <Input
                className="form_input"
                id="subject"
                value={subject}
                placeholder="What is your message about?"
                required
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="form_label ">
                Name
              </Label>
              <Input
                className="form_input"
                id="name"
                value={name}
                placeholder="Your Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email" className="form_label">
                Email
              </Label>
              <Input
                className="form_input"
                id="email"
                value={email}
                placeholder="Email Address"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message" className="form_label">
                Message
              </Label>
              <Textarea
                className="text-lg h-[180px]  resize-none"
                id="message"
                value={message}
                placeholder="Your Message"
                required
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className=" text-2xl w-[200px] font-bold" type="submit">
          Send
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
