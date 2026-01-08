// data/projects.js
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

export const projects = [
  {
    title: "Census of India",
    image: image1,
    stack: ["HTML", "JEE", "PostgreSQL"],
    desc: "Comprehensive census data platform with advanced search.",
    points: [
      "Dynamic data visualization",
      "Admin-controlled access",
      "Scalable REST API",
    ],
    live: "http://103.172.150.156/districtsofindia_demo",
    github: "",
  },
  {
    title: "WQLAB Assesment Portal",
    image: image2,
    stack: ["HTML", "JEE", "PostgreSQL"],
    desc: "Online assessment portal for check Water Quality",
    points: [ "Product filtering", "Optimized performance"],
    live: "wqlab.indiagis.org",
    github: "",
  },
   {
    title: "MHPAC",
    image: image3,
    stack: ["HTML", "JEE", "PostgreSQL"],
    desc: "Localising Plastic Action through Communities.",
    points: [ "Product filtering", "Optimized performance"],
    live: "pac.indiagis.org",
    github: "",
  },
];
