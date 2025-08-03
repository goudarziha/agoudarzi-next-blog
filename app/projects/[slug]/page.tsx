import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectBySlug } from 'app/data/projects'

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <section>
      <div className="mb-8">
        <Link 
          href="/projects" 
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
      
      <h1 className="font-semibold text-3xl mb-4 tracking-tighter">{project.title}</h1>
      
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
          {project.description}
        </p>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
          <div className="flex gap-2 flex-wrap">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {project.longDescription && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">About This Project</h2>
            <div className="whitespace-pre-line text-neutral-600 dark:text-neutral-400">
              {project.longDescription}
            </div>
          </div>
        )}
        
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black px-4 py-2 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </section>
  )
} 