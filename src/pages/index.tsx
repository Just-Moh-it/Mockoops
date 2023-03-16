import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
// ASsets
import LogoFull from "~/assets/icons/logo-full.svg";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mockoops - Beautify screenshots in seconds</title>
        <meta
          name="description"
          content="Convert boring screen recordings into peices of art in seconds. Choose from many templates. Free, and no signup required."
        />
        <meta
          name="keywords"
          content="mockups, mockups online, mockups free, mockups online free, mockups online no signup, mockups online no download, mockups online no signup"
        />
        <meta name="author" content="Mohit Yadav (@Just_Moh_it)" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex h-full w-full flex-col items-stretch">
        {/* Navbar */}
        <div className="flex items-center justify-between py-3 pl-4 pr-3 shadow-[rgba(0,2,24,0.08)_0px_-1px_0px_0px_inset]">
          {/* Logo */}
          <LogoFull width={150} />

          {/* Hamburger Menu */}
          <div className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl bg-gray-200 hover:bg-[rgba(0,2,24,0.08)]">
            <div className="h-[2px] w-4 bg-gray-400" />
            <div className="h-[2px] w-4 bg-gray-400" />
          </div>
        </div>

        {/* Hero section */}
        <div className="flex flex-1 flex-col items-center justify-center">
          {/* Heading Section */}
          <div className="flex items-center justify-center gap-2 px-4 pb-4 pt-8">
            <h1 className="text-[40px] font-medium leading-[48px] tracking-[-0.5px]">
              Write.
            </h1>
            <h1 className="text-[40px] font-medium leading-[48px] tracking-[-0.5px]">
              Publish.
            </h1>
            <h1 className="text-[40px] font-medium leading-[48px] tracking-[-0.5px]">
              Earn.
            </h1>
          </div>

          <div className="py-6">
            <video
              autoPlay
              loop
              muted
              className="w-full"
              src="https://framerusercontent.com/modules/assets/E7AQSyyv8rD3jPODkpnjhYD0Zxc~q70HAdfRtMA3DgFOCzOxyQ1Y7CVHkzadtdNIKlT3C2o.mp4"
            />
          </div>

          <div className="flex flex-col items-stretch gap-8 p-4 text-center">
            <p className="text-lg leading-8 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              perspiciatis similique quam.
            </p>
            <div className="flex w-full flex-col gap-4 px-12">
              <Link
                href="/create"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-3 text-xs font-medium uppercase leading-6 tracking-[.72px] text-white outline-1 outline-gray-200 transition-colors hover:bg-transparent hover:text-black hover:outline"
              >
                Hello
              </Link>
              <Link
                href="/create"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-transparent px-8 py-3 text-xs font-medium uppercase leading-6 tracking-[.72px] text-black outline outline-1 outline-gray-200 transition-colors hover:text-gray-500"
              >
                Hello
              </Link>
            </div>
          </div>
        </div>
        
        {/* Reviews */}
        <div className="flex items-stretch"></div>
      </div>
    </>
  );
};

export default HomePage;
