import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Input, Textarea } from "@nextui-org/input";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="" id="contact">
      <div className="container mx-auto px-4 py-6">
        <div className="relative text-center mb-12 hidden md:block">
          <Image
            removeWrapper
            alt="Contact Amigo Immigration"
            className="mx-auto rounded-lg shadow-lg w-full"
            height={400}
            src="https://img.freepik.com/premium-photo/close-up-electric-lamp-against-blue-wall_1048944-5426551.jpg?w=1380"
          />
          <h1 className="absolute top-40   right-16 z-10 transform translate-y-[-50%] text-7xl font-bold mt-8 px-16 py-8 border-4 text-white rounded-lg shadow-lg">
            Contact
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <div className="text-2xl font-semibold ">Contact Information</div>
            </CardHeader>
            <CardBody>
              <p className="mb-6 ">
                Feel free to get in touch with us through any of the below
                contact methods or visit our office by taking an appointment.
              </p>
              <ul className="space-y-4 ">
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5  " />
                  <span>
                    <strong>Head Office:</strong> 0141-6655850
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5  " />
                  <span>
                    <strong>Email:</strong>{" "}
                    <Link
                      className="  hover:underline"
                      href="mailto:info@amigoimmigrant.com"
                    >
                      info@amigoimmigrant.com
                    </Link>
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5  " />
                  <span>
                    <strong>Mobile:</strong>{" "}
                    <Link
                      className="  hover:underline"
                      href="tel:+919887699703"
                    >
                      +91 9887699703
                    </Link>
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5   mt-1" />
                  <span>
                    <strong>Address:</strong> G-FF-03, Capitol High Street Mall,
                    Jagatpura, Jaipur.
                  </span>
                </li>
                <li className="flex items-start">
                  <Clock className="mr-2 h-5 w-5   mt-1" />
                  <span>
                    <strong>Office Timings:</strong> Monday to Saturday, 10:00
                    AM to 6:00 PM
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 ">Find Us Here:</h3>
                <div className="aspect-w-16 ">
                  <iframe
                    className="rounded-lg w-full shadow-md"
                    height="300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1074.6428170744634!2d75.85834289648673!3d26.799343185167988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9d6f000be8f%3A0x96781e9898265140!2sRTech%20Capital%20Highstreet%20Jaipur!5e1!3m2!1sen!2sin!4v1731915749892!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    title="Google Maps location for RTech Capital Highstreet Jaipur"
                    width="700"
                  />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-2xl font-semibold ">Get in Touch</div>
            </CardHeader>
            <CardBody>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium " htmlFor="name">
                    Name
                  </label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium " htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium " htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    rows={4}
                  />
                </div>
                <Button className="w-full" type="submit">
                  Send Message
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
