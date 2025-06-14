// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function ExperiencePage() {
  const experiences = [
  {
    title: "Junior MERN Stack Developer",
    company: "Millicent Technologies",
    location: "Mumbai, India",
    period: "Aug 2024 - Present",
    description:
      "Built and maintained scalable web applications using React, Next.js, Node.js, and Nest.js. Collaborated with UI/UX designers to develop pixel-perfect interfaces. Optimized performance and code efficiency, achieving a 40% improvement in application speed. Integrated databases using Sequelize with MySQL and MongoDB.",
    technologies: [
      "React",
      "Next",
      "Node.js",
      "Nest.js",
      "TypeScript",
      "Sequelize",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "React Developer Intern",
    company: "Nextgen Techno Ventures Pvt. Ltd",
    location: "Mumbai, India",
    period: "Feb 2024 - Apr 2024",
    description:
      "Assisted in building interactive user interfaces using React.js and Vue.js. Collaborated with senior developers to debug and enhance application functionality. Gained hands-on experience in modern JavaScript frameworks and improved front-end responsiveness.",
    technologies: ["React.js", "Vue.js", "JavaScript"],
  },
  {
    title: "Technical Support",
    company: "Antraweb Technologies Pvt. Ltd",
    location: "Mumbai, India",
    period: "May 2022 - Dec 2022",
    description:
      "Provided technical support for Tally Prime users by resolving installation, configuration, and connectivity issues. Configured firewall settings and maintained secure network access. Assisted clients with troubleshooting software-related concerns, ensuring minimal downtime.",
    technologies: ["Tally Prime", "Firewall"],
  },
  {
    title: "Digital Marketing Intern",
    company: "Saraf Tech",
    location: "Remote",
    period: "Jul 2021 - Aug 2021",
    description:
      "Executed basic SEO strategies to improve website visibility and traffic. Conducted keyword research, optimized on-page content, and tracked site performance using Google Analytics. Gained foundational experience in digital marketing tools and techniques.",
    technologies: ["SEO"],
  },
];


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
      description:
        "Created a responsive portfolio website with modern design and smooth animations.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      year: "2022",
    },
  ];

  return (
    <div className="px-4 py-16 md:px-32">
      <div className="space-y-4 text-center mb-12 ">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Experience
        </h1>
        <p className="text-muted-foreground max-w-[600px] mx-auto md:text-lg">
          My professional journey and the projects I&apos;ve worked on
          throughout my career.
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
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
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
  );
}
