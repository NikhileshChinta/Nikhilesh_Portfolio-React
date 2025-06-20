import { ArrowRight, Github } from "lucide-react";
import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A responsive, dynamic portfolio built with React, Tailwind CSS, and deployed via Vercel. It showcases my skills, projects, and resume with smooth animations and optimized performance.",
      image: "/Projects/Portfolio.png",
      githubUrl: "#",
      skills: ["React", "Tailwind CSS", "Vite"],
    },
    {
      id: 2,
      title: "Task Manager App",
      description:
        "A full-stack task management app with user authentication, real-time updates, and CRUD functionality using React, Node.js, Express, and MongoDB.",
      image: "#",
      githubUrl: "#",
      skills: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    },
    {
      id: 3,
      title: "E-Commerce Store",
      description:
        "A fully functional e-commerce platform with product listings, cart management, user authentication, and payment integration built using Next.js, Tailwind CSS, and PostgreSQL.",
      image: "#",
      githubUrl: "#",
      skills: ["React", "Tailwind CSS", "PostgreSQL", "Stripe", "Prisma"],
    },
    {
      id: 4,
      title: "Markdown Blog Platform",
      description:
        "A content-focused blog application with dynamic routes, Markdown support, and an admin dashboard, built with Next.js, MongoDB, and Tailwind CSS.",
      image: "#",
      githubUrl: "#",
      skills: ["React", "Markdown", "MongoDB", "Tailwind CSS", "Mongoose"],
    },
    {
      id: 5,
      title: "Real-Time Chat App",
      description:
        "A real-time chat application with socket.io, user authentication, and group chat support using React, Node.js, Express, and MongoDB.",
      image: "#",
      githubUrl: "#",
      skills: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    },
    {
      id: 6,
      title: "Project Management Dashboard",
      description:
        "A Kanban-style task management tool with drag-and-drop functionality, built with React, Redux, Express, and PostgreSQL. Inspired by Trello.",
      image: "#",
      githubUrl: "#",
      skills: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/NikhileshChinta?tab=repositories"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
