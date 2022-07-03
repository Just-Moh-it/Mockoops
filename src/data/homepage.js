const data = {
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
      { href: "#features", children: "About", type: "outline" },
    ],
  },
  reviewData: [
    {
      author: {
        name: "Mohit Yadav",
        description: "Dev",
        avatar: { src: "/assets/images/avatars/mohit.png", alt: "Mohit" },
      },
      review:
        "I craved something that could make my boring screencasts share-worthy, while not having to install any heavy software. This app perfectly fits my needs... No fancy subscriptions too!",
    },
    {
      author: {
        name: "Dhravya Shah",
        description: "Student",
        avatar: { src: "/assets/images/avatars/dhravya.png", alt: "Dhravya" },
      },
      review:
        "Since I don't edit videos, and can't find any good tools on the internet to create mockups, this is literally perfect for all my needs. It also has a bunch of templates to choose from!",
    },
    {
      author: {
        name: "Amit Wani",
        description: "SDE",
        avatar: { src: "/assets/images/avatars/amit.png", alt: "Amit Wani" },
      },
      review:
        "When I first saw the trailer, I was blown away. The product turned out to be equally awesome. I guess I'll never upload plain screen-recordings to twitter ever again.",
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
    heading: "It's clear. No subscriptions. No payments. No Bullshit",
    description:
      "Start working with the most well-crafted drag-and-drop mockups tool for making your boring screencasts stand out!",
    ctas: [
      { href: "/create", children: "It's free! Get Started", type: "filled" },
    ],
  },
};

export default data;
