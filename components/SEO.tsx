import Head from "next/head";
import { useRouter } from "next/router";
import CONFIG from "constants/config";

type Props = {
  title: string;
  imgAlt?: string;
  imgCoverUrl?: string;
};

const SEO = ({ title, imgAlt, imgCoverUrl }: Props) => {
  const router = useRouter();
  const origin = process.browser
    ? window.location.origin
    : process.env.WEBSITE_URL;

  const url = `${origin}${router?.pathname}`;
  const description = "Twice Polls | created for once's";

  return (
    <Head>
      <title>{title}</title>
      <meta name="og:type" content="article" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
      <meta name="og:url" content={url} />
      <meta
        name="og:image"
        content={imgCoverUrl || CONFIG.randomBackgroundImage}
      />
      <meta name="og:image_alt" content={imgAlt || "twice-polls"} />
      <meta name="twitter:url" content={url} />
      <meta
        name="twitter:image"
        content={imgCoverUrl || CONFIG.randomBackgroundImage}
      />
    </Head>
  );
};

export default SEO;
