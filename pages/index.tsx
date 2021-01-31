import SEO from "components/SEO";
import CONFIG from "constants/config";
import Router from "next/router";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Router.push("/polls");
    }
  });

  return (
    <div className="index-container">
      <SEO title={CONFIG.appTitle} />
    </div>
  );
};

export default Index;
