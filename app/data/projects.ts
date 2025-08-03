export interface Project {
    title: string
    description: string
    technologies: string[]
    slug: string
    externalUrl?: string
    featured?: boolean
    githubUrl?: string
    liveUrl?: string
    imageUrl?: string
    longDescription?: string
}

export const projects: Project[] = [
    {
        title: 'Real Estate Analytics',
        description: 'Created a REI investment analysis tool that make calculations on an investment quickly. Utilizing AI to add further insights into trends.',
        technologies: ['React', 'AI', 'Quadrnt'],
        slug: 'real-estate-analytics',
        featured: true,
        // githubUrl: 'https://github.com/username/project-name',
        liveUrl: 'https://project-name.vercel.app',
        imageUrl: '/images/project-name.png',
        longDescription: `
        This project was built to address a specific need in the development community. It leverages AI technology to provide a seamless user experience while maintaining high performance and accessibility standards.
    `,
    },
    // {
    //     title: 'Another Project',
    //     description: 'Another project description showcasing different skills and technologies.',
    //     technologies: ['Next.js', 'Tailwind CSS'],
    //     slug: 'another-project',
    //     featured: true,
    //     githubUrl: 'https://github.com/username/another-project',
    //     liveUrl: 'https://another-project.vercel.app',
    //     imageUrl: '/images/another-project.png',
    //     longDescription: `
    //   This project demonstrates advanced Next.js features and modern web development practices.
    //   It includes server-side rendering, static generation, and dynamic routing capabilities.

    //   Key features:
    //   - Next.js 13+ with App Router
    //   - Server and client components
    //   - API routes for backend functionality
    //   - Database integration
    //   - Authentication system
    // `,
    // },
    // {
    //     title: 'External Project',
    //     description: 'A project hosted externally with a live demo.',
    //     technologies: ['Vue.js', 'Node.js'],
    //     slug: 'external-project',
    //     externalUrl: 'https://example.com/project',
    //     featured: false,
    // },
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website built with Next.js and TypeScript.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        slug: 'portfolio-website',
        featured: false,
        githubUrl: 'https://github.com/goudarziha/agoudarzi-next-blog',
        liveUrl: 'https://amirgoudarzi.com',
        longDescription: `
        Wanted to update personal website and dip into Next.js to see what all the hype is about.
      
      Features:
      - Responsive design
      - Dark/light mode support
      - Blog functionality
      - Project showcase
      - SEO optimized
    `,
    },
]

// Helper functions
export function getFeaturedProjects(): Project[] {
    return projects.filter(project => project.featured)
}

export function getAllProjects(): Project[] {
    return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug)
}

export function getProjectsByTechnology(technology: string): Project[] {
    return projects.filter(project =>
        project.technologies.some(tech =>
            tech.toLowerCase().includes(technology.toLowerCase())
        )
    )
} 