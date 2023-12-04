"use client";

import Hero from "@/components/Hero";
import NewsletterForm from "@/components/NewsletterForm";

const Newsletter = () => {
  return (
    <div>
      <Hero heading={"Newsletter"} image={"bg-newsletter-banner"} />

      <div className="flex justify-center">
        <NewsletterForm />
      </div>
    </div>
  );
};

export default Newsletter;
