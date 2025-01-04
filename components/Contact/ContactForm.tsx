"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { Form } from "@nextui-org/react";
import { FormEvent, useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const data = Object.fromEntries(new FormData(e.currentTarget)) as {
      name: string;
      email: string;
      message: string;
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Failed to submit the form.");
      } else {
        setSuccess("Your message has been sent successfully!");
        e.currentTarget.reset(); // Clear the form
      }
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardBody>
        <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
        <Form
          className="space-y-6"
          validationBehavior="native"
          onSubmit={onSubmit}
        >
          <Input
            isRequired
            errorMessage="Please enter a valid name"
            label="Name"
            labelPlacement="outside"
            name="name"
            placeholder="Enter your name"
            type="text"
          />
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <Textarea
            isRequired
            errorMessage="Please enter a valid message"
            label="Message"
            labelPlacement="outside"
            minRows={4}
            name="message"
            placeholder="Enter your message"
          />
          <Button
            className="w-full"
            color="primary"
            isLoading={loading}
            type="submit"
          >
            Submit
          </Button>
        </Form>

        {error && <p className="text-danger mt-4">{error}</p>}
        {success && <p className="text-success mt-4">{success}</p>}
      </CardBody>
    </Card>
  );
};

export default ContactForm;
