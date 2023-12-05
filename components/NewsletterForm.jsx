"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import handleNewsletter from "@/lib/handleNewsletter";

const NewsletterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      firstName,
      lastName,
      email,
    };

    const response = await handleNewsletter(formData);

    if (response) {
      setIsLoading(false);
      setComplete(true);
    }
  };

  return (
    <Card className="form_container">
      <CardContent>
        {/* Succesful submission */}
        {complete && (
          <motion.div
            className="flex flex_center flex-col pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2
              // className="text-4xl max-md:text-3xl md:w-3/5 max-md:w-full text-center text-bold max-md:pr-8 max-md:pl-8 pb-8">
              className="success_message"
            >
              Thank you for subscribing to our newsletter! Expect updates soon!
            </h2>
            <FontAwesomeIcon icon={faCircleCheck} color="#C1FF00" size="4x" />
          </motion.div>
        )}

        {/* Standard form */}
        {!complete && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form_field">
              <Label htmlFor="name" className="form_label ">
                First Name
              </Label>
              <Input
                className="form_input"
                id="name"
                value={firstName}
                placeholder="Your First Name"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form_field">
              <Label htmlFor="name" className="form_label ">
                Last Name
              </Label>
              <Input
                className="form_input"
                id="name"
                value={lastName}
                placeholder="Your Last Name"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form_field">
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

export default NewsletterForm;
