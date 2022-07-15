const data = {
  hero: {
    headingItems: ["Drag.", "Edit.", "Done."],
    video: {
      preview: {
        src: "https://remotion.ap-south-1.linodeobjects.com/Introducing Mockoops 📱 _ Create Mockups in seconds.mp4",
        alt: "Video",
      },
      content: {
        type: "youtube",
        src: "https://www.youtube.com/embed/SSNmU3FXW4s",
        title: "Introducing Mockoops",
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
        avatar: {
          src: "https://pbs.twimg.com/profile_images/1525045654976077825/5379dAKX_400x400.jpg",
          alt: "Mohit",
        },
      },
      review:
        "I craved something that could make my boring screencasts share-worthy, while not having to install any heavy software. This app perfectly fits my needs... No fancy subscriptions too!",
    },
    {
      author: {
        name: "Dhravya Shah",
        description: "Student",
        avatar: {
          src: "https://pbs.twimg.com/profile_images/1547151428229136385/ytBDTnG8_400x400.png",
          alt: "Dhravya",
        },
      },
      review:
        "Since I don't edit videos, and can't find any good tools on the internet to create mockups, this is literally perfect for all my needs. It also has a bunch of templates to choose from!",
    },
    {
      author: {
        name: "Amit Wani",
        description: "SDE",
        avatar: {
          src: "https://pbs.twimg.com/profile_images/1532754122016956425/5wXFAIX7_400x400.jpg",
          alt: "Amit Wani",
        },
      },
      review:
        "When I first saw the trailer, I was blown away. The product turned out to be equally awesome. I guess I'll never upload plain screen-recordings to twitter ever again.",
    },
  ],
  features: [
    {
      info: {
        heading: ["Just Drag", "and drop"],
        description:
          "Add your boring screen-recordings to one of the beautiful templates and instantly make them a piece of art.",
      },
      video: {
        src: "https://remotion.ap-south-1.linodeobjects.com/1.mp4",
        alt: "Drag-dropping into the video source",
      },
    },

    {
      info: {
        heading: ["We're never out of", "Templates"],
        description:
          "Beautifying a screen-recording to upload on twitter? Announcing a new app? We've got you covered",
      },
      video: {
        src: "https://remotion.ap-south-1.linodeobjects.com/2.mp4",
        alt: "Scrolling through templates",
        loop: false,
      },
    },
    {
      info: {
        heading: ["Export with", "A click"],
        description:
          "Blazing fast serverless-based exports, with no watermarks. Preview in the browser and finalize anytime.",
      },
      video: {
        src: "https://remotion.ap-south-1.linodeobjects.com/3.mp4",
        alt: "Showing the export process",
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
