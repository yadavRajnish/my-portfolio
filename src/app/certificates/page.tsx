// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from ".../components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/buttton";

export default function Certificates() {
  const certificates = [
    {
      title: "MERN Stack Developer",
      issuer: "TryCatch Classes",
      date: "2024",
      credentialId: "",
      description:
        "Completed a hands-on training program covering full-stack development using the MERN stack. Developed projects using modern technologies and gained practical experience in building responsive, scalable web applications.",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      image: "/Images/mern_certificate.png",
    },
    {
      title: "Digital Marketing",
      issuer: "Thakur College of Science and Commerce",
      date: "2022",
      credentialId: "GCP-PD-789012",
      description:
        "Learned the fundamentals of digital marketing including SEO, SEM, content marketing, and social media strategies. Gained insights into online branding and website analytics to increase online visibility.",
      skills: ["SEO", "Content Marketing", "Google Analytics"],
      image: "/Images/dm.png",
    },
  ];

  return (
    <div className="px-4 py-16 md:px-32">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Certificates
        </h1>
        <p className="text-muted-foreground max-w-[600px] mx-auto md:text-lg">
          Professional certifications and achievements that validate my
          expertise in various technologies and methodologies.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {certificates.map((cert, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative">
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-contain"
              />
              <div className="absolute top-4 right-4">
                <Badge
                  variant="secondary"
                  className="bg-background/80 backdrop-blur"
                >
                  <Award className="h-3 w-3 mr-1" />
                  Certified
                </Badge>
              </div>
            </div>

            <CardHeader>
              <div className="space-y-2">
                {/* <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                <CardDescription className="font-medium text-primary">{cert.issuer}</CardDescription> */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Issued {cert.date}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="pt-2 border-t">
                  {/* <p className="text-xs text-muted-foreground mb-2">Credential ID: {cert.credentialId}</p> */}
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
          <p className="text-muted-foreground">
            Continuous learning and professional development achievements
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">
              {certificates.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Total Certificates
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">0</div>
            <div className="text-sm text-muted-foreground">Cloud Platforms</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">2024</div>
            <div className="text-sm text-muted-foreground">
              Latest Certification
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
