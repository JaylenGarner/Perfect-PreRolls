"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "@/components/ui/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { bebasNeue } from "@/lib/fonts";
import handleEmail from "@/lib/handleEmail";

const ContactForm = () => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name,
      email,
      subject,
      message,
    };

    const response = await handleEmail(formData);

    if (response) {
      setIsLoading(false);
      setComplete(true);
    }
  };

  return (
    <Card className={`form_container ${bebasNeue.className}`}>
      <CardContent>
        {/* Succesful submission */}
        {complete && (
          <motion.div
            className="flex flex_center flex-col p-8 pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="success_message">
              Thank you for reaching out! We've received your email and will be
              in touch shortly
            </h2>
            <FontAwesomeIcon icon={faCircleCheck} color="#C1FF00" size="4x" />
          </motion.div>
        )}

        {/* Standard form */}
        {!complete && (
          <form className="pt-16" onSubmit={handleSubmit}>
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
                  type="email"
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

              <div className="flex flex_center p-8">
                <button className="button">
                  {!isLoading ? (
                    "Send"
                  ) : (
                    <FontAwesomeIcon
                      icon={faCircleNotch}
                      className="animate-spin fa-sm"
                    />
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;
