import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  slug: string
  externalUrl?: string
}

export function ProjectCard({ title, description, technologies, slug, externalUrl }: ProjectCardProps) {
  const CardContent = () => (
    <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-3">
        {description}
      </p>
      <div className="flex gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )

  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <CardContent />
      </a>
    )
  }

  return (
    <Link href={`/projects/${slug}`} className="block">
      <CardContent />
    </Link>
  )
} 