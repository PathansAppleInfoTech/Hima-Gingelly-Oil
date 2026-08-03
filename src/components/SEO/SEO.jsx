import { Helmet } from "react-helmet-async";

const SITE = "Hima Gingelly Oil";
const URL = "https://himagingellyoil.com";
const DEFAULT_IMAGE = `${URL}/assets/images/icon.jpg`;

export default function SEO({
  title,
  description,
  path = "/",
  keywords = "",
  image = DEFAULT_IMAGE,
}) {
  const fullTitle = `${title} | ${SITE}`;
  const canonical = `${URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
