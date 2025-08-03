import { ProjectCard } from 'app/components/project-card'
import { getAllProjects } from 'app/data/projects'

export const metadata = {
    title: 'Projects',
    description: 'Check out my projects.',
}

export default function Page() {
    const projects = getAllProjects()

    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p className="mb-4">
                    Here are some of the projects I've worked on. Each one represents a unique challenge
                    and learning experience in my journey as a developer.
                </p>

                <div className="grid gap-6 mt-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            slug={project.slug}
                            externalUrl={project.externalUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
} 