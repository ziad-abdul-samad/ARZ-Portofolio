import FeedBackSection from "./components/FeedBackSection";
import GetStartedSection from "./components/GetStartedSection";
import IndustriesSection from "./components/IndustriesSection";
import ProcessSection01 from "./components/ProcessSection01";
import ProcessSection02 from "./components/ProcessSection02";
import StrategicInfoSection from "./components/StrategicInfoSection";
import TechnologiesSection from "./components/TechnologiesSection";

export default function ProcessPage() {
  return (
    <>
    <ProcessSection01/>
    <ProcessSection02/>
    <IndustriesSection/>
    <StrategicInfoSection/>
    <TechnologiesSection/>
    <GetStartedSection/>
    <FeedBackSection/>
    </>
  );
}
