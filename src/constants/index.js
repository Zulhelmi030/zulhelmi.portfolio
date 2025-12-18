const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  /*{
    name: "Testimonials",
    link: "#testimonials",
  },*/
];

const words = [
  { text: "Ideas", imgPath: import.meta.env.BASE_URL + "images/ideas.svg" },
  { text: "Concepts", imgPath: import.meta.env.BASE_URL + "images/concepts.svg" },
  { text: "Designs", imgPath: import.meta.env.BASE_URL + "images/designs.svg" },
  { text: "Code", imgPath: import.meta.env.BASE_URL + "images/code.svg" },
  { text: "Ideas", imgPath: import.meta.env.BASE_URL + "images/ideas.svg" },
  { text: "Concepts", imgPath: import.meta.env.BASE_URL + "images/concepts.svg" },
  { text: "Designs", imgPath: import.meta.env.BASE_URL + "images/designs.svg" },
  { text: "Code", imgPath: import.meta.env.BASE_URL + "images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Satisfied Clients" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: import.meta.env.BASE_URL + "images/logos/company-logo-1.png",
  },
  {
    imgPath: import.meta.env.BASE_URL + "images/logos/company-logo-2.png",
  },
  {
    imgPath: import.meta.env.BASE_URL + "images/logos/company-logo-3.png",
  },
  {
    imgPath: import.meta.env.BASE_URL + "images/logos/company-logo-4.png",
  },
  {
    imgPath: import.meta.env.BASE_URL + "images/logos/company-logo-5.png",
  },
  {
    imgPath: import.meta.env.BASE_URL + "images/logos/company-logo-6.png",
  },
  {
    imgPath: import.meta.env.BASE_URL + "images/logos/company-logo-7.png",
  },
  {
    imgPath: import.meta.env.BASE_URL + "images/logos/company-logo-8.png",
  },
  {
    imgPath: import.meta.env.BASE_URL + "images/logos/company-logo-9.png",
  },
  {
    imgPath: import.meta.env.BASE_URL + "images/logos/company-logo-10.png",
  },
  {
    imgPath: import.meta.env.BASE_URL + "images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: import.meta.env.BASE_URL + "images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: import.meta.env.BASE_URL + "images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: import.meta.env.BASE_URL + "images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: import.meta.env.BASE_URL + "images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: import.meta.env.BASE_URL + "images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: import.meta.env.BASE_URL + "images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: import.meta.env.BASE_URL + "images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: import.meta.env.BASE_URL + "images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: import.meta.env.BASE_URL + "models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: import.meta.env.BASE_URL + "models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: import.meta.env.BASE_URL + "models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: import.meta.env.BASE_URL + "models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: import.meta.env.BASE_URL + "models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "A reliable and customer-focused team member who handled transactions efficiently while maintaining excellent service standards.",
    imgPath: import.meta.env.BASE_URL + "images/pngimg.com - kfc_PNG53.png",
    logoPath: import.meta.env.BASE_URL + "images/KFC_logo.svg.png",
    title: "Cashier",
    date: "January 2023 - Present",
    responsibilities: [
      "Handled cash and cashless transactions accurately in a fast-paced environment.",
      "Provided friendly and efficient customer service while taking orders.",
      "Maintained cleanliness of the counter area and followed food safety standards.",
      "Assisted with order preparation and coordinated with kitchen staff.",
    ],
  },
  {
    review:
      "Demonstrated strong teamwork and communication skills while delivering quality service to customers.",
    imgPath: import.meta.env.BASE_URL + "images/AliHabi_img.png",
    logoPath: import.meta.env.BASE_URL + "images/AliHabi_img.png",
    title: "Waiter",
    date: "June 2020 - December 2022",
    responsibilities: [
      "Served food and beverages to customers in a professional and courteous manner.",
      "Took customer orders accurately and communicated them to kitchen staff.",
      "Ensured dining areas were clean, organized, and properly set.",
      "Handled customer inquiries and resolved minor complaints promptly.",
    ],
  },
  {
    review:
      "Played a key role in order fulfillment and inventory management, supporting smooth daily operations.",
    imgPath: import.meta.env.BASE_URL + "images/nadear_logo.png",
    logoPath: import.meta.env.BASE_URL + "images/nadear_logo.png",
    title: "Order Fulfillment & Inventory Assistant",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Packed customer orders for TikTok Shop accurately and efficiently.",
      "Managed and updated product stock to ensure inventory accuracy.",
      "Prepared products for shipment and coordinated with logistics partners.",
      "Ensured packaging quality and correct labeling for customer satisfaction.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: import.meta.env.BASE_URL + "images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: import.meta.env.BASE_URL + "images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: import.meta.env.BASE_URL + "images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: import.meta.env.BASE_URL + "images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: import.meta.env.BASE_URL + "images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: import.meta.env.BASE_URL + "images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: import.meta.env.BASE_URL + "images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: import.meta.env.BASE_URL + "images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: import.meta.env.BASE_URL + "images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: import.meta.env.BASE_URL + "images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: import.meta.env.BASE_URL + "images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: import.meta.env.BASE_URL + "images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: import.meta.env.BASE_URL + "images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};