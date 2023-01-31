import { initChatBot } from "@/utils/chatbot";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

// Default value for some meta data
const defaultMeta = {
  title: "POC - SF chatbot",
  siteName: "POC - SF chatbot",
  description:
    "A simple proof of concept for adding SF einstein chatbot to nextjs",
  // change base url of your web (without '/' at the end)
  url: "https://poc-sf-chatbot.vercel.app",
  type: "website",
  robots: "follow, index",
  // change with url of your image (recommended dimension = 1.91:1)
  // used in twitter, facebook, etc. card when link copied in tweet/status
  image: "https://poc-sf-chatbot.vercel.app/assets/card-image.png",
  author: "Krimo Temam",
};

/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const SeoHead = (props: any) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content={meta.robots} />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${meta.url}${router.asPath}`} />
        <link rel="canonical" href={`${meta.url}${router.asPath}`} />
        {/* Open Graph */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="image" property="og:image" content={meta.image} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@F2aldi" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <>
            <meta property="article:published_time" content={meta.date} />
            <meta
              name="publish_date"
              property="og:publish_date"
              content={meta.date}
            />
            <meta
              name="author"
              property="article:author"
              content={meta.author}
            />
          </>
        )}
        {/* Windows 8 app icon */}
        <meta name="msapplication-TileColor" content="#F53838" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        {/* Accent color on supported browser */}
        <meta name="theme-color" content="#F53838" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        ></meta>
      </Head>
      {/* <Script src="https://service.force.com/embeddedservice/5.0/esw.min.js" /> */}
      <Script
        id="gabin"
        src="https://playful-panda-3dtfr6-dev-ed.trailblaze.my.salesforce.com/embeddedservice/5.0/esw.min.js"
        onLoad={() => {
          initChatBot();
        }}
      />
    </>
  );
};

export default SeoHead;
