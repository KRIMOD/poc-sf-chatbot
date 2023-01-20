import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>POC - SF chatbot</title>
        <meta
          name="description"
          content="A simple proof of concept for adding SF einstein chatbot to nextjs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello world</h1>
      </main>
    </>
  );
}
