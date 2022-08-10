# 📱 Mockoops

![Intro GIF](https://user-images.githubusercontent.com/48997634/177388575-6a74b925-d736-4463-876e-8c48b1a99ee9.gif)

Create animated mockups from boring screen recordings in seconds, powered by React.

- ⚡️ Superfast rendering powered by Serverless Functions
- 📸 Updates previewed as soon as parameters are changed
- 📏 Responsive Video Templates
- 🥳 Comes with a bunch of templates suited for different scenarios.
- 😎 Long-term Caching for saving rendering times
- 🌤 Light Mode / Dark Mode (Manual + Device preferences-based)

## What is Mockoops? Click this 👇

[![Recommended Video](https://user-images.githubusercontent.com/48997634/177479922-681278e9-4e13-450f-a6c8-c830d247c703.gif)](https://www.youtube.com/watch?v=SSNmU3FXW4s&ab_channel=MohitYadav)

## 🎬 Templates

Pckd comes with a bunch of templates. View the final renders here:

## Current Templates 🌈

Mockoops comes with a bunch of templates right out of the box! They are very responsive, customisable and diversified for each of your motion-graphics video need. Some of them are here:

### 📐 Angled Presentation

This template is idea for long-form content to make it more appealing (and possibly less boring too!). Here's a quick Showdown

https://user-images.githubusercontent.com/48997634/177477832-8b9c6aff-5f57-4f78-b4fe-e2fbc920d913.mp4

### ⚡️ Quick Teaser

This one is great for quick teasers that start out by build anticipation in the begenning, revealing only certain part of the input video at first, and slowly reveal the entire thing.

Here's me, using it for [Pckd](https://github.com/PckdHq/Pckd)'s reveal

https://user-images.githubusercontent.com/48997634/177477866-52c74675-cedb-4981-a301-fa97151caa16.mp4

### 💻 Laptop Zoom

This one is for the more lo-fi people out there. This template lets you present your video on a moving MacBook screen on a beautiful workstation background. This could be used with non-screen recorded stuff as well!

https://user-images.githubusercontent.com/48997634/177477863-aab11867-8fc0-4402-8c75-6bbca14de4f4.mp4

### 📚 Text Reveal

This one is for short announcements or reveals. Most suitably when you just have one screen for an app and you want to tease the coming soon status!

https://user-images.githubusercontent.com/48997634/177477874-b219ce0d-a26e-4901-afbe-23d35c309c2e.mp4

Or it could even be used for things like the release of a new version of a product. The possibility with this one are endless

### 🎭 Rotate Title

This one is well suited for use-cases where you need to present some text before a video, while not having to setup any fancy stuff

https://user-images.githubusercontent.com/48997634/177477870-a48ed8bb-0bec-4c4b-a483-73a95250e6e3.mp4

## 🏡 Architecture

Here's a diagram explaining exactly how everything fits into place

<div align="center">
  <img src="https://user-images.githubusercontent.com/48997634/177478467-4a9bf89e-a4f7-44ec-8e81-d114be936fa7.png"
    height="300" />
  <p>Here's how everything fits into the scene</p>
</div>

## 📐 Tech Stack

- 🔥 **NextJS** - Because it's one of the best frontend JS Frameworks
- ▶️ **Remotion** - For the video and rendering
- 🪣 **Linode S3 Storage** - For quickly storing uploaded video files in storage buckets
- 💅 **Sass** - For making the app look beautiful
- 🌱 **MongoDB (w/ Linode)** - For caching renders with the same input params
- 🔫 **React Recoil** - For app-wide state management
- 🍞 **React Hot Toast** - For the notifications
- 🎉 **React Confetti** - For the joyous animations
- 💦 **React Dropzone** - For handling advanced drag-drop animations

## 💾 Installation

### Pre-Requisites

1. NodeJS 14+
1. NPM installation
1. A S-3 compatible storage bucket with read and write access. (Optional)
1. An [Serverless account](https://aws.amazon.com/lambda) for rendering, (Optional)

The videos will only render to an mp4 file if you have all of this set-up. However, you would still be able to preview the videos in the browser without the last two.

### Install steps

1. Setup an Object storage bucket with Linode or any other cloud provider.
1. Rename the `.env.example` file to `.env`.
1. Install packatges using `npm install`
1. Follow the installation instructions at [Remotion Lambda Installation docs](https://www.remotion.dev/docs/lambda/setup#1-install-remotionlambda), **till step 6** .
1. Once you have the key ID and Secret from the lambda console, edit these values into the `.env` file along with other values.
1. Verify `.env` setup using `npx remotion lambda policies validate`. Only proceed if you get checkmarks on everything, else repeat from step `4`.
1. Edit your preferred regions in `src/deploy/regions.ts` file.
1. Deploy the functions using the command `npm run deploy`. Wait for deployment.

### Run the app

1. Run the development server using `npm run dev`. Navigate to the address displayed in the terminal to view the app. Verify that everything works.
1. Create a production build using `npm run build` and serve using `npm start`.

## 👩‍⚖️ License

The software is published under the [`MIT` License](/LICENSE).

## 🌟 Support this project

![](https://user-images.githubusercontent.com/48997634/174794647-0c851917-e5c9-4fb9-bf88-b61d89dc2f4f.gif)

### [⏫⭐️ Scroll to the star button](#start-of-content)

If you believe this project has potential, feel free to **star this repo** just like many [amazing people](https://github.com/Just-Moh-it/Mockoops/stargazers) have.
