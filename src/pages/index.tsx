// @ts-nocheck
import SeoHead from "@/components/seo-head";

export default function Home() {
  const popChatBot = () => {
    console.log("pop chat");
    embedded_svc.bootstrapEmbeddedService();
  };

  return (
    <>
      <SeoHead title="POC - SF chatbot" />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col space-y-2 text-center  ">
          <h1 className="">Hello World</h1>
          <button className="bg-gray-300 rounded-md p-2" onClick={popChatBot}>
            click to pop chat
          </button>
        </div>
      </div>
    </>
  );
}
