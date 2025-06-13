// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and collaborated with cross-functional teams to deliver high-quality products.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      location: "New York, NY",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications and collaborated with designers to create pixel-perfect user interfaces. Improved application performance by 40% through optimization techniques.",
      technologies: ["React", "Vue.js", "JavaScript", "SASS", "Webpack", "Jest"],
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      location: "Austin, TX",
      period: "2019 - 2020",
      description:
        "Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
    },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Built a full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      year: "2023",
    },
    {
      title: "Task Management App",
      description:
        "Developed a collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      year: "2023",
    },
    {
      title: "Portfolio Website",
      description: "Created a responsive portfolio website with modern design and smooth animations.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      year: "2022",
    },
  ]

  return (
    <div className="container px-4 py-16 md:px-6">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Experience</h1>
        <p className="text-muted-foreground max-w-[600px] mx-auto md:text-lg">
          My professional journey and the projects I've worked on throughout my career.
        </p>
      </div>

      {/* Work Experience */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <Building className="h-4 w-4" />
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Notable Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant="outline">{project.year}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
