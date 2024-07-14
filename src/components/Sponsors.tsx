import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    href: "https://www.affpaying.com/",
    img: '/assets/affPaying.jpg',
    alt: "affPaying logo",
    title: "AFFPAYING",
    description: "Affpaying: Reviews of CPA Networks, Affiliate Programs and ...",
  },
  {
    href: "https://www.affplus.com/",
    img: '/assets/aff+.jpg',
    alt: "aff+ logo",
    title: "AFFPLUS",
    description: "Affplus.com is a largest affiliate offer search engine.",
  },
  {
    href: "#",
    img: "/assets/placeholder.png",
    alt: "Placeholder logo",
    title: "Placeholder",
    description: "This is a placeholder for future partners.",
  },
];

const Sponsors = () => {
  const partnerRef = useRef(null);
  const inView = useInView(partnerRef, { once: true, amount: 0.1 });
  return (
    <section id="partners" className="container pt-18 sm:py-24" ref={partnerRef}>
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Our Partners
      </h2>
      <div className="flex gap-4 flex-col sm:flex-row w-full sm:max-w-[80%] mx-auto">
        {partners.map((partner, index) => (
          <Link
            key={index}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            {inView && (
              <motion.div
                initial={{ y: 200, opacity: 0 }} // Start from the right
                animate={{ y: 0, opacity: 1 }}   // Move to original position
                transition={{ duration: 1, delay: index * 0.5 }} // Delay for staggered effect
                className="border flex flex-col gap-4 p-3 rounded-md"
              >
                <Image src={partner.img} alt={partner.alt} height={150} width={150}
                />
                <h3 className="text-green-800 font-semibold hover:text-green-700">
                  {partner.title}
                </h3>
                <p className="text-base">{partner.description}</p>
              </motion.div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
