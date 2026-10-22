import { createFileRoute } from "@tanstack/react-router";
import type { ComponentType } from "react";
import CaseStudyPage from "@/portfolio/components/CaseStudyPage";

const ProjectView = CaseStudyPage as ComponentType<{ id: string }>;

export const Route = createFileRoute("/projects/$id")({
  component: ProjectPage,
});

function ProjectPage() {
  const { id } = Route.useParams();
  return <ProjectView id={id} />;
}
