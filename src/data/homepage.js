import { GitHub, Twitter } from "icons";

const data = {
  header: {
    navbarLinks: [
      { href: "/", children: "home" },
      { href: "#features", children: "features" },
      { href: "#reviews", children: "reviews" },
      { href: "#about", children: "about" },
    ],
    bannerButtons: [
      {
        href: "https://github.com/Just-Moh-it/Mockoops",
        children: <GitHub color="var(--bg)" />,
      },
      {
        href: "https://twitter.com/just_moh_it",
        children: <Twitter color="var(--bg)" />,
      },
    ],
    ctas: [{ href: "/create", children: "Get Started" }],
  },
  hero: {
    headingItems: ["Drag.", "Edit.", "Done."],
    video: {
      preview: {
        src: "https://remotion.ap-south-1.linodeobjects.com/hero-thumb.mp4",
        alt: "Hero Video Preview",
      },
      content: {
        type: "youtube",
        src: "https://www.youtube.com/embed/1cD_F3j8a5c",
        title: "Test title",
        height: "100%",
        width: "100%",
      },
    },
    description:
      "Convert your boring screen recording into life-like mockups. Just drag-drop and export with a click.",
    ctas: [
      { href: "/create", children: "Get Started", type: "filled" },
      { href: "#about", children: "About", type: "outline" },
    ],
  },
  reviewData: [
    {
      author: {
        name: "Mohit Yadav",
        description: "Tinkerer at PckdHQ",
        avatar: { src: "/assets/images/avatars/1.jpg", alt: "Mohit" },
      },
      review:
        "This is so fricking amazing that I'd like to have a call with the CEO of this company. Like literally dude, how good can someone make something?",
    },
    {
      author: {
        name: "Mohit Yadav",
        description: "Tinkerer at PckdHQ",
        avatar: { src: "/assets/images/avatars/1.jpg", alt: "Mohit" },
      },
      review:
        "This is so fricking amazing that I'd like to have a call with the CEO of this company. Like literally dude, how good can someone make something?",
    },
    {
      author: {
        name: "Mohit Yadav",
        description: "Tinkerer at PckdHQ",
        avatar: { src: "/assets/images/avatars/1.jpg", alt: "Mohit" },
      },
      review:
        "This is so fricking amazing that I'd like to have a call with the CEO of this company. Like literally dude, how good can someone make something?",
    },
  ],
  features: [
    {
      info: {
        heading: ["Write Articles", "with Ease"],
        description:
          "Fusce dapibus, tellus ac cursus commodo, tortor mauris imentum nibh, ut fermentum massa",
      },
      image: {
        src: "/assets/images/features/1.webp",
        alt: "Feature 1",
      },
    },
  ],
  ctaBanner: {
    content: {
      heading: "Ready to work with the most Intuitive Editor of All Time?",
      description:
        "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
      ctas: [{ href: "/create", children: "Get Started", type: "filled" }],
    },
  },
};

export default data;
