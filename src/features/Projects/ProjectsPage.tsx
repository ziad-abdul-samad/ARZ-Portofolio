import CategoryToggle from "./components/CategoryToggle";
import HeadingTitle from "./components/HeadingTitle";
import ProjectsCard from "./components/ProjectCard";

export default function ProjectsPage() {
  return (
    <>
      <section id="OurProjects">
        <HeadingTitle />
        <CategoryToggle />
        <ProjectsCard />
      </section>
    </>
  );
}
