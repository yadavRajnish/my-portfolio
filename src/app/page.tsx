import { ArrowRight, Code, Palette, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "./components/ui/badge"
import { Button } from "./components/ui/buttton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hi, I&apos;m <span className="text-primary">Rajnish Yadav</span>
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">MERN Stack Developer</p>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                I create beautiful, functional, and user-centered digital experiences. With expertise in modern web
                technologies, I bring ideas to life through code and design.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/experience">View My Work</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-full border-4 border-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted/50 py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What I Do</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              I specialize in creating digital solutions that combine beautiful design with powerful functionality.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Code className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>
                  Building responsive and interactive user interfaces with modern frameworks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Backend Development</CardTitle>
                <CardDescription>Creating robust server-side applications and APIs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Palette className="h-10 w-10 text-primary mb-2" />
                <CardTitle>UI/UX Design</CardTitle>
                <CardDescription>
                  Designing user-centered experiences that are both beautiful and functional
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Adobe XD</Badge>
                  <Badge variant="secondary">Prototyping</Badge>
                  <Badge variant="secondary">User Research</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400`}
                  alt={`Project ${i}`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>Project {i}</CardTitle>
                  <CardDescription>
                    A brief description of this amazing project and the technologies used to build it.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    View Project
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4 max-w-[600px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Work Together?</h2>
            <p className="text-primary-foreground/80 md:text-lg">
              I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can bring your
              ideas to life.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
