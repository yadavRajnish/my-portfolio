// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from ".../components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/buttton"

export default function Certificates() {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-123456",
      description:
        "Validates expertise in designing distributed systems on AWS platform with focus on scalability, security, and cost optimization.",
      skills: ["AWS", "Cloud Architecture", "Security", "Scalability"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-789012",
      description:
        "Demonstrates ability to build scalable and reliable applications using Google Cloud technologies and best practices.",
      skills: ["Google Cloud", "Kubernetes", "DevOps", "Microservices"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Meta Frontend Developer Professional",
      issuer: "Meta (Facebook)",
      date: "2022",
      credentialId: "META-FE-345678",
      description:
        "Comprehensive program covering modern frontend development with React, responsive design, and user experience principles.",
      skills: ["React", "JavaScript", "HTML/CSS", "UX Design"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MDB-DEV-901234",
      description:
        "Validates skills in MongoDB database design, development, and administration for modern applications.",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
      credentialId: "CKA-567890",
      description:
        "Demonstrates skills in Kubernetes cluster administration, troubleshooting, and best practices for container orchestration.",
      skills: ["Kubernetes", "Docker", "Container Orchestration", "DevOps"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Scrum Master Certified",
      issuer: "Scrum Alliance",
      date: "2021",
      credentialId: "CSM-123789",
      description:
        "Validates understanding of Scrum framework and ability to facilitate agile development processes effectively.",
      skills: ["Scrum", "Agile", "Project Management", "Team Leadership"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="container px-4 py-16 md:px-6">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Certificates</h1>
        <p className="text-muted-foreground max-w-[600px] mx-auto md:text-lg">
          Professional certifications and achievements that validate my expertise in various technologies and
          methodologies.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative">
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-background/80 backdrop-blur">
                  <Award className="h-3 w-3 mr-1" />
                  Certified
                </Badge>
              </div>
            </div>

            <CardHeader>
              <div className="space-y-2">
                <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                <CardDescription className="font-medium text-primary">{cert.issuer}</CardDescription>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Issued {cert.date}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground mb-2">Credential ID: {cert.credentialId}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Verify Certificate
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Section */}
      <section className="mt-16 bg-muted/50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Certification Summary</h2>
          <p className="text-muted-foreground">Continuous learning and professional development achievements</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">{certificates.length}</div>
            <div className="text-sm text-muted-foreground">Total Certificates</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">4</div>
            <div className="text-sm text-muted-foreground">Cloud Platforms</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">2023</div>
            <div className="text-sm text-muted-foreground">Latest Certification</div>
          </div>
        </div>
      </section>
    </div>
  )
}
