import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="px-4 py-16 md:px-32">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              Building amazing digital experiences with modern technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/experience"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Experience
              </Link>
              <Link
                href="/certificates"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Certificates
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/yadavRajnish"
                target="_blank"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/rajnishhyadav/"
                target="_blank"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://x.com/rajnish94302588"
                target="_blank"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rajnishyadav5509@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>rajnishyadav5509@gmail.com</p>
              <p>+91 8692965123</p>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t pb-12 pt-4 text-center w-full">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rajnish Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
