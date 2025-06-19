import BlogsContainer from "./components/BlogsContainer";
import BlogsHeading from "./components/BlogsHeading";
import BlogsSection from "./components/BlogsSection";

export default function BlogsPage() {
  return (
    <>
      <section id="Blogs">
        <BlogsHeading />
        <BlogsSection />
        <BlogsContainer />
      </section>
    </>
  );
}
