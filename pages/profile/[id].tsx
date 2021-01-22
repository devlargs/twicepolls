import SEO from "components/SEO";
import config from "constants/config";
import { useRouter } from "next/router";

const ProfileById = () => {
  const router = useRouter();

  return (
    <>
      <SEO title={`Profile | ${config.appTitle}`} />
      <>Profile Page for {router.query.id}</>
    </>
  );
};

export default ProfileById;
