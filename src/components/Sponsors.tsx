import { useRef } from "react";
import Image from "next/image";

const partners = [
  {
    href: "https://www.affpaying.com/logicpulse",
    img: '/assets/affPaying.jpg',
    alt: "affPaying logo",
    title: "AFFPAYING",
    description: "Affpaying Reviews of CPA Networks, Affiliate Programs and Advertisers.",
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

  return (
    <section id="partners" className="container pt-18 sm:py-24">
      <div className="bg-muted/50 border rounded-lg py-12">
        <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
          MEET OUR <span className="text-green-500">PARTNERS</span>.
        </h2>
        <div className="flex gap-4 flex-col sm:flex-row w-full sm:max-w-[80%] mx-auto">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex flex-col items-center border border-gray-200 rounded-md p-4 hover:shadow-md"
            >
              <Image src={partner.img} alt={partner.alt} height={150} width={150} />
              <h3 className="text-green-800 font-semibold hover:text-green-700 mt-4 mb-2 text-center">
                {partner.title}
              </h3>
              <p className="text-base text-center">{partner.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
