import projects from "./data/projects"
import ProjectCard from "./ProjectCard"
const Projects = () => {
  return (
    <section className="w-full flex justify-center py-24">
        <div className="w-full max-w-7xl  py-10 md:px-10 border-2 border-gray-200 rounded-xl">
            <h2 className="text-4xl font-bold mb-12 leading-tight">
                Recent <span className="text-purple-600">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {projects.map((project) =>(
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        category={project.category}
                        image={project.image}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    </section>
)
}

export default Projects