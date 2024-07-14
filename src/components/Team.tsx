import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
interface TeamProps {
  imageUrl: string;
  name: string;
  content: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/assets/kashif-imtiaz.jpg",
    name: "Kashif Imtiaz",
    position: "CEO",
    content: "Kashif leads the team with a vision for success.",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/kashif-imtiaz" },
      { name: "Facebook", url: "https://www.facebook.com/kashifimtiaz2010/" },
      { name: "Instagram", url: "https://www.instagram.com/kashifaheer2011" },
    ],
  },
  {
    imageUrl: "/assets/zainab-khalil.jpg",
    name: "Zainab Khalil",
    position: "Affiliate Manager",
    content: "Zainab manages our affiliate partnerships expertly.",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/zainab-khalil-b83a95267/" },
      { name: "Facebook", url: "#" },
      { name: "Instagram", url: "https://www.instagram.com/live:.cid.5f2d5fcf58b1f757" },
    ],
  },
  {
    imageUrl: "/assets/cube-leg.png",
    name: "Muhammad Hanzla",
    position: "Frontend & Backend Developer",
    content: "Hanzla develops seamless web experiences.",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },
];


export const Team = () => {
  const teamRef = useRef(null);
  const inView = useInView(teamRef, { once: true, amount: 0.1 });
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <FaLinkedin size="20" />;

      case "Facebook":
        return <FaFacebook size="20" />;

      case "Instagram":
        return <FaInstagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      ref={teamRef}
      className="container py-24 sm:py-32"
    >
      {inView && (
        <motion.h2
          initial={{ y: 200, opacity: 0 }} // Start from the right
          animate={{ y: 0, opacity: 1 }}   // Move to original position
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold" // Delay for staggered effect
        >
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Our Dedicated{" "}
          </span>
          Crew
        </motion.h2>
      )}
      {inView && (
        <motion.p
          initial={{ y: 200, opacity: 0 }} // Start from the right
          animate={{ y: 0, opacity: 1 }}   // Move to original position
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 mb-10 text-xl text-muted-foreground" // Delay for staggered effect
        >
          Logic Pulse is an affiliate marketing website founded in 2021, dedicated to helping users discover trusted affiliate programs.
        </motion.p>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, content, position, socialNetworks }: TeamProps) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 200 }} // Start hidden and slightly below
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible
              transition={{ duration: 1, delay: 0.5 }} // Delay for staggered effect
            >
              <Card
                key={name}
                className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
              >
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                  <Image
                    src={imageUrl}
                    alt="User Image"
                    height={90}
                    width={90}
                    className="absolute -top-12 rounded-full aspect-square object-cover borde border-green-600 bg-gray-100 dark:bg-muted"
                  />
                  <CardTitle className="text-center">{name}</CardTitle>
                  <CardDescription className="text-primary">
                    {position}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                  <p>{content}</p>
                </CardContent>

                <CardFooter>
                  {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                    <div key={name}>
                      <Link
                        rel="noreferrer noopener"
                        href={url}
                        target="_blank"
                        className={buttonVariants({
                          variant: "ghost",
                          size: "sm",
                        })}
                      >
                        <span className="sr-only">{name} icon</span>
                        {socialIcon(name)}
                      </Link>
                    </div>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};