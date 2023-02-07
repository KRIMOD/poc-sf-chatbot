/* eslint-disable @next/next/no-html-link-for-pages */
import SeoHead from "@/components/seo-head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <>
    <SeoHead title="POC - SF chatbot" />
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col space-y-2 text-center  ">
        <h1 className="">Hello World</h1>
        <div className="flex  justify-center">
          <a href="/" className="p-2">
            fr
          </a>
          <p className="p-2">-</p>
          <a href="/eng" className="p-2">
            eng
          </a>
        </div>
        {children}
        {/* <button className="bg-gray-300 rounded-md p-2" onClick={popChatBot}> */}
        {/* click to pop chat */}
        {/* </button> */}
      </div>
    </div>
  </>
);
