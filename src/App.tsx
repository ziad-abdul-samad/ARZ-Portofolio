import Navbar from "./components/Navbar";
import { AboutUsPage } from "./features/AboutUs";
import { HomePage } from "./features/Home";
import { ProcessPage } from "./features/Process";
// import { ProjectsPage } from "./features/Projects";
import { ServicesPage } from "./features/Services";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutUsPage/>
      <ServicesPage/>
      {/* <ProjectsPage/> */}
      <ProcessPage/>
    </div>
  );
}

export default App;
