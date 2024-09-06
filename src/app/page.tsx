import Image from "next/image";
import InfoColumn from "./tsx/InfoColumn";
import Navbar from "./tsx/navbar";
import "./css/globals.css";

export default function Home() {
  const infoData = [
    {
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c05d0121bdb80378b1917b6a6754e30a8cd8b81068b1d99c592e142aa92fae3?placeholderIfAbsent=true&apiKey=bf92909d692941f49fb4e5c6c4ac75e5",
      title: "The Problem",
      description: "Trading is a hassle job. Only 10% traders survive in the market.",
    },
    {
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5f6cedb81a1abf1fadca33a268c8c60e7b07178ed43d5e6d2a41a905584d410?placeholderIfAbsent=true&apiKey=bf92909d692941f49fb4e5c6c4ac75e5",
      title: "The Solution",
      description: "This is the perfect spot to guide you through the turmoil.",
    },
  ];
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="https://nextjs.org/icons/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="https://nextjs.org/icons/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
    <Navbar>
      <main className="container">
        <section className="heroSection">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de4f2ae25edc64a5cf7be22f3a6aa8cc15464981fc4903d58290a35d872b470f?placeholderIfAbsent=true&apiKey=bf92909d692941f49fb4e5c6c4ac75e5" 
            alt="" 
            className="backgroundImage"
            loading="lazy"
          />
          <div className="contentWrapper">
            <div className="decorativeCircle" aria-hidden="true"></div>
            <h1 className="w3-hide-small" style={{fontSize: '10px'}}>
              <div className="mainHeading">Revolutionize Trading</div>
              <br />
              <div className='mainHeading2'>with Algo Trading Solutions</div>
            </h1>
            <h1 className='w3-hide-large w3-hide-medium' style={{fontSize: '10px'}}>
              <div className='mainHeading'>Algo Trading:</div>
              <br />
              <div className='mainHeading2'>Revolution of Trades</div>
            </h1>
            <div className="infoContainer">
              <div className="infoGrid">
                {infoData.map((info, index) => (
                  <InfoColumn key={index} {...info} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Navbar>
  );
}
