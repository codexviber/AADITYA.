import { createFileRoute } from "@tanstack/react-router";
import PublicProjectsPage from "@/portfolio/components/PublicProjectsPage";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return <PublicProjectsPage />;
}
