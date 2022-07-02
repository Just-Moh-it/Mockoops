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
      { href: "#about", children: "About", type: "outline" },
    ],
  },
  reviewData: [
    {
      author: {
        name: "Mohit Yadav",
        description: "Dev",
        avatar: { src: "/assets/images/avatars/1.jpg", alt: "Mohit" },
      },
      review:
        "I craved something that could make my boring screencasts share-worthy, while not having to install any heavy software. Found the perfect replacement!",
    },
    {
      author: {
        name: "Dhravya Shah",
        description: "Student",
        avatar: { src: "/assets/images/avatars/1.jpg", alt: "Mohit" },
      },
      review:
        "OMG, I could make so good screencasts with this app. I'm so excited to see what it can do! Why didn't I find this before...!? I'm think I'm going to use this almost everyday",
    },
    {
      author: {
        name: "Amit Wani",
        description: "SDE",
        avatar: { src: "/assets/images/avatars/1.jpg", alt: "Mohit" },
      },
      review:
        "When I first saw the trailer, I was blown away. The product turned out to be equally good. I guess I'll never upload plain screen-recordings again",
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
    heading: "Ready to work with the most Intuitive Editor of All Time?",
    description:
      "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    ctas: [{ href: "/create", children: "It's free! Get Started", type: "filled" }],
  },
};

export default data;
