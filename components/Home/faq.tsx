"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

const FandQ = () => {
  const faqs = [
    {
      question: "How do I apply for an internship abroad?",
      answer:
        "You can apply directly on our website under the 'Apply Now' section. Our team will guide you through the process.",
    },
    {
      question: "What countries do you offer internships in?",
      answer:
        "We provide internships in countries like USA, Australia, UAE, France, Germany, and more.",
    },
    {
      question: "Is there guaranteed placement?",
      answer: "Yes, we offer guaranteed placements in 3, 4, and 5-star hotels.",
    },
  ];

  return (
    <div className="w-full container mx-auto  mt-10 ">
      <h2 className="text-2xl font-semibold text-center mb-5">
        Frequently Asked Questions
      </h2>
      <Accordion>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} className="p-2 px-5" title={faq.question}>
            <p className="px-5">{faq.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FandQ;
