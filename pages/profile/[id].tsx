import { Text, Box } from "@chakra-ui/react";
import SEO from "components/SEO";
import config from "constants/config";
import { useRouter } from "next/router";

const ProfileById = () => {
  const router = useRouter();

  return (
    <>
      {/* change the profile to username later on */}
      <SEO title={`Profile | ${config.appTitle}`} />
      <Box w="100vw" textAlign="center">
        <Text fontSize="2xl">Profile Page for {router.query.id}</Text>
      </Box>
    </>
  );
};

export default ProfileById;
