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
import { FaFacebook, FaInstagram, FaLinkedin, FaSkype } from "react-icons/fa";

interface TeamProps {
  imageUrl: string;
  name: string;
  content: string;
  position: string;
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/assets/kashif-imtiaz.jpg",
    name: "Kashif Imtiaz",
    position: "DIRECTOR",
    content: "Kashif leads the team with a vision for success.",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/kashif-imtiaz" },
      { name: "Facebook", url: "https://www.facebook.com/kashifimtiaz2010/" },
      { name: "Skype", url: "skype:kashifaheer2011" },
    ],
  },
  {
    imageUrl: "/assets/zainab-khalil.jpg",
    name: "Zainab Khalil",
    position: "AFFILIATE MANAGER",
    content: "Zainab manages our affiliate partnerships.",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/zainab-khalil-b83a95267/" },
      { name: "Facebook", url: "#" },
      { name: "Skype", url: "skype:live:.cid.5f2d5fcf58b1f757" }, // Example Skype URL
    ],
  },
  {
    imageUrl: "/assets/cube-leg.png",
    name: "Interviews in progress",
    position: "AFFILIATE MANAGER",
    content: "manages our affiliate partnerships.",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      { name: "Facebook", url: "#" },
      { name: "Skype", url: "skype:#" }, // Example Skype URL
    ],
  },
  {
    imageUrl: "/assets/cube-leg.png",
    name: "Sheeza Malik",
    position: "FINANCE MANAGER",
    content: "Managing our Finance department.",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },
  {
    imageUrl: "/assets/cube-leg.png",
    name: "Muhammad Hanzla",
    position: "TECH DEPARTMENT",
    content: "Hanzla develops seamless web experiences.",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },
  {
    imageUrl: "/assets/cube-leg.png",
    name: "Interviews in progress",
    position: "BUSINESS INTELLIGENCE",
    content: "Medior Data Analyst, Pricing & Commercial Analyst.",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },
  {
    imageUrl: "/assets/cube-leg.png",
    name: "Interviews in progress",
    position: "ACCOUNT MANAGERS",
    content: "Strategic Partner.",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },
  {
    imageUrl: "/assets/cube-leg.png",
    name: "Interviews in progress",
    position: "MARKETING MANAGER",
    content: "MARKETING MANAGER.",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },
  {
    imageUrl: "/assets/cube-leg.png",
    name: "Interviews in progress",
    position: "OFFICE MANAGER",
    content: "OFFICE",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },
];

export const Team = () => {
  const teamRef = useRef(null);
  const inView = useInView(teamRef, { once: true, threshold: 0.1 });

  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <FaLinkedin size="20" />;
      case "Facebook":
        return <FaFacebook size="20" />;
      case "Instagram":
        return <FaInstagram size="20" />;
      case "Skype":
        return <FaSkype size="20" />;
      default:
        return null;
    }
  };

  return (
    <section id="team" ref={teamRef} className="container py-24 sm:py-32 flex flex-col items-center relative">
      {inView && (
        <motion.h2
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 relative z-10"
        >
          <span className="relative z-10">
            MEET OUR <span className="text-GREEN-500">AFFILIATE MARKETING</span> <span className="text-green-500">Pioneers</span>

          </span>
        </motion.h2>
      )}
      {inView && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 to-transparent z-0"
        />
      )}
      {inView && (
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 mb-10 text-xl text-green-500 text-center max-w-prose"
        >
          Our core is built on genuine human connections, moving beyond digital interfaces and virtual interactions.
        </motion.p>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
        {teamList.map(({ imageUrl, name, content, position, socialNetworks }: TeamProps) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
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
                  className="absolute -top-12 rounded-full aspect-square object-cover border border-green-600 bg-gray-100 dark:bg-muted"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">{position}</CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{content}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SocialNetworkProps) => (
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
        ))}
      </div>
    </section>
  );
};
