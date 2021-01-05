import Head from "next/head";
import { useRouter } from "next/router";
import meta from "constants/meta";
import CONFIG from "constants/config";

type Props = {
  title: string;
  description?: string;
  imgAlt?: string;
};

const SEO = ({ description, title, imgAlt }: Props) => {
  const desc = description || meta.description(title);
  const router = useRouter();
  const origin = process.browser
    ? window.location.origin
    : process.env.WEBSITE_URL;

  const url = `${origin}${router?.pathname}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="og:type" content="article" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={desc} />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" content={desc} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={desc} />
      <meta name="og:url" content={url} />
      <meta name="og:image" content={CONFIG.randomBackgroundImage} />
      <meta name="og:image_alt" content={imgAlt || "twice-polls"} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={CONFIG.randomBackgroundImage} />
    </Head>
  );
};

export default SEO;
