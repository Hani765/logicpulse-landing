import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import cubeLeg from "../assets/cube-leg.png";
import { motion, useInView } from "framer-motion";
import { ShieldIcon } from "lucide-react";
import { DashboardIcon } from "@radix-ui/react-icons";
import { ChartIcon, MagnifierIcon } from "./Icons";
import { useRef } from "react";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Scam Protection",
    description:
      "Our platform ensures secure traffic with advanced scam protection features, safeguarding your investments and enhancing trust.",
    icon: <ShieldIcon />,
  },
  {
    title: "Comprehensive Dashboard",
    description:
      "Manage your affiliate campaigns effortlessly with our intuitive admin dashboard, providing real-time analytics and performance tracking.",
    icon: <DashboardIcon />,
  },
  {
    title: "Code Collaboration",
    description:
      "Collaborate seamlessly with your team using our tools, designed to enhance productivity and streamline workflow.",
    icon: <ChartIcon />,
  },
  {
    title: "Task Automation",
    description:
      "Automate repetitive tasks to focus on what matters most, increasing efficiency and driving better results for your campaigns.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="container py-24 sm:py-32"
      ref={ref}>
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.1 }}
          >
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-xl mt-4 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Discover our comprehensive suite of services designed to empower affiliate marketers and optimize your success.
          </motion.p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                <Card>
                  <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                      {icon}
                    </div>
                    <div>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription className="text-md mt-2">
                        {description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Visual representation of services"
        />
      </div>
    </section>
  );
};
