import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import ProjectHero from "@/components/ProjectHero";
import ProjectSpecs from "@/components/ProjectSpecs";
import ProjectTechnical from "@/components/ProjectTechnical";

// Pre-generate all project routes at build time
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — AE Studio`,
    description: project.shortDescription.slice(0, 160),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        category={project.category}
        num={project.num}
        heroImage={project.heroImage}
      />
      <ProjectSpecs project={project} />
      <ProjectTechnical project={project} />
    </>
  );
}
