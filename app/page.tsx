import { BlogPosts } from 'app/components/posts'
import { ProjectsList } from 'app/components/projects-list'
import { getFeaturedProjects } from 'app/data/projects'

export default function Page() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, I'm Amir
      </h1>
      <p className="mb-4">
        {`Currently working as a professional software engineer with a lot of outside passions and hobbies. This is a dump of all my thoughts and current projects`}
      </p>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4 tracking-tighter">Featured Projects</h2>
        <ProjectsList projects={featuredProjects} />
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4 tracking-tighter">Recent Blog Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
