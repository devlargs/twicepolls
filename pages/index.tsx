import SEO from "components/SEO";
import CONFIG from "constants/config";

const Index = () => {
  return (
    <div className="index-container">
      <SEO title={CONFIG.appTitle} />
    </div>
  );
};

export default Index;
