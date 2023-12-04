"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import handleEmail from "@/lib/handleEmail";

const NewsletterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name,
      email,
    };

    const response = await handleEmail(formData);

    if (response) {
      setIsLoading(false);
      setComplete(true);
    }
  };

  return (
    <Card className="w-[1000px] max-xl:w-5/6 border-none h-fit ">
      <CardContent>
        {complete === true ? (
          <motion.div
            className="flex flex_center flex-col pt-16 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <FontAwesomeIcon icon={faCircleCheck} color="#1AAE70" size="3x" />
            <h2 className="text-4xl max-md:text-3xl md:w-3/5 max-md:w-full text-center text-bold max-md:pr-8 max-md:pl-8 pb-8">
              Thank you for reaching out! We've received your email and will be
              in touch shortly
            </h2>
          </motion.div>
        ) : (
          <form className="pt-16" onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
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

              <div className="flex justify-center pt-2">
                {isLoading === true ? (
                  <button className="primary_button">
                    <FontAwesomeIcon
                      icon={faCircleNotch}
                      className="animate-spin fa-sm"
                    />
                  </button>
                ) : (
                  <motion.button
                    className="primary_button"
                    transition={{ duration: 0.5, opacity: 1 }}
                  >
                    Send
                  </motion.button>
                )}
              </div>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsletterForm;
