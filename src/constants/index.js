import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    nerdherd,
    webdev,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Responsive Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
//    {
//      name: "Node JS",
//      icon: nodejs,
//    },
    {
      name: "Three JS",
      icon: threejs,
    },
 //   {
 //     name: "git",
 //     icon: git,
 //   },
  ];
  
  const experiences = [
    {
      title: "CEO",
      company_name: "Web Developer Magic",
      icon: webdev,
      iconBg: "#383E56",
      date: "March 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Mobile phone technician & Developer ",
      company_name: "The Nerd Herd",
      icon: nerdherd,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Repairing, data wiping, reselling mobile devices.",
        "Customer service.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Coming Soon",
      company_name: "Coming soon",
     // icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
      //  "Developing and maintaining web applications using React.js and other related technologies.",
      //  "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //  "Implementing responsive design and ensuring cross-browser compatibility.",
      //  "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Coming Soon",
      company_name: "Coming Soon",
     // icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
      //  "Developing and maintaining web applications using React.js and other related technologies.",
      //  "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //  "Implementing responsive design and ensuring cross-browser compatibility.",
      //  "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Example",
      designation: "CFO",
      company: "example",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "example",
      designation: "COO",
      company: "example",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "example",
      designation: "CTO",
      company: "example",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Uploading",
      //description:
     //   "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
     // image: 
      source_code_link: "https://github.com/",
    },
    {
      name: "Uploading",
     // description:
    //    "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
    //  image: ,
      source_code_link: "https://github.com/",
    },
    {
      name: "Uploading",
     // description:
      //  "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
    //  image: ,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };