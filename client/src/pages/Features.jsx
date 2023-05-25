import Analytic from "../components/Features/Analytic";
import Hero from "../components/Features/Hero";

//importing data
import { featureAnalytic, featureIntegration } from "../utils/constant";

const Features = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Hero />
      <Analytic
        head={"Analytics"}
        para={"Powerful features to advanced user analytics"}
        data={featureAnalytic}
      />
      <Analytic
        head={"Integration"}
        para={`Connect all your tools and work efficiently.`}
        data={featureIntegration}
      />
    </div>
  );
};

export default Features;
