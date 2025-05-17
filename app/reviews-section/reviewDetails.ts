import { StaticImageData } from "next/image";
import amit from "../../public/amit.avif";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Amit Roy",
    role: "Web Developer",
    company: "Amit Company",
    profileImg: amit,
    testimonial:
      "Poulastaa is seriously one of the best Android developer I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Amit Roy",
    role: "Web Developer",
    company: "Amit Company",
    profileImg: amit,
    testimonial:
      "Poulastaa is seriously one of the best Android developer I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Amit Roy",
    role: "Web Developer",
    company: "Amit Company",
    profileImg: amit,
    testimonial:
      "Poulastaa is seriously one of the best Android developer I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Amit Roy",
    role: "Web Developer",
    company: "Amit Company",
    profileImg: amit,
    testimonial:
      "Poulastaa is seriously one of the best Android developer I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Amit Roy",
    role: "Web Developer",
    company: "Amit Company",
    profileImg: amit,
    testimonial:
      "Poulastaa is seriously one of the best Android developer I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Amit Roy",
    role: "Web Developer",
    company: "Amit Company",
    profileImg: amit,
    testimonial:
      "Poulastaa is seriously one of the best Android developer I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  
];
