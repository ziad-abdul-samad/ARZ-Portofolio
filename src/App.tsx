import Navbar from "./components/Navbar";
import { AboutUsPage } from "./features/AboutUs";
import { BlogsPage } from "./features/Blogs";
import { ContactPage } from "./features/Contact";
import { HomePage } from "./features/Home";
import { ProcessPage } from "./features/Process";
import { ProjectsPage } from "./features/Projects";
import { ServicesPage } from "./features/Services";
import "./App.css"
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <HomePage />
      <AboutUsPage/>
      <ServicesPage/>
      <ProjectsPage/>
      <ProcessPage/>
      <BlogsPage/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
