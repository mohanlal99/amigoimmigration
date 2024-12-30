"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
import { CheckCircle, Globe, GraduationCap, Users } from "lucide-react";

const Loan = () => {
  return (
    <section className="bg-gradient-to-b mx-auto container py-6  from-background to-muted">
      <div className=" px-4 md:px-6">
        <motion.div
          animate="animate"
          className="text-center space-y-4 mb-12"
          initial="initial"
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Study Abroad Loans for Students
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Dreaming of studying abroad but worried about the financial burden?
            We&#39;re here to help! Explore specialized loan services for
            tuition, living expenses, and internships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            animate="animate"
            initial="initial"
            variants={{
              initial: { opacity: 0, x: 1 * 50 },
              animate: { opacity: 1, x: 0 },
            }}
          >
            <Card>
              <CardBody className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Why Choose Us?</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Comprehensive financial support for education and internships",
                    "Tailored loan plans with flexible repayment options",
                    "Support for internships and placements abroad",
                    "Simplified application process with quick approvals",
                    "Expert guidance for loans, visas, and settling abroad",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            animate="animate"
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
          >
            <Card>
              <CardBody className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Who Can Apply?</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    {
                      icon: <GraduationCap className="h-5 w-5" />,
                      text: "Students pursuing Bachelor's, Master's, or diploma courses abroad",
                    },
                    {
                      icon: <Globe className="h-5 w-5" />,
                      text: "Individuals seeking internships in their field of study",
                    },
                    {
                      icon: <Users className="h-5 w-5" />,
                      text: "Those needing financial assistance for immigration and settlement",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 mt-0.5 text-primary">
                        {item.icon}
                      </div>
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        <motion.div
          animate="animate"
          className="text-center space-y-6"
          initial="initial"
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          }}
        >
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold">
              Ready to take the first step toward your dream?
            </h4>
            <p className="text-muted-foreground mx-auto max-w-[600px]">
              Contact us today to learn more about our loan services and how we
              can support your aspirations.
            </p>
          </div>
          <Button className="px-8" size="lg">
            <Link href="/services/loans">Get Started</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Loan;
