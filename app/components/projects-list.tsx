import Link from 'next/link'
import type { Project } from 'app/data/projects'

interface ProjectsListProps {
    projects: Project[]
}

export function ProjectsList({ projects }: ProjectsListProps) {
    return (
        <div>
            {projects.map((project) => {
                const ProjectContent = () => (
                    <div className="flex flex-col space-y-1 mb-4">
                        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                            <div className="flex flex-col">
                                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                                    {project.title}
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )

                if (project.externalUrl) {
                    return (
                        <a
                            key={project.slug}
                            href={project.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <ProjectContent />
                        </a>
                    )
                }

                return (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="block"
                    >
                        <ProjectContent />
                    </Link>
                )
            })}
        </div>
    )
} 