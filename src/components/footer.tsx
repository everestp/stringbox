
import { Link } from "react-router-dom";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/about#team" },
  { name: "Careers", href: "/careers" },
  { name: "Press", href: "/press" },
];

const resourceLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Documentation", href: "/docs" },
  { name: "Knowledge Base", href: "/knowledge-base" },
  { name: "FAQs", href: "/faqs" },
];

const serviceLinks = [
  { name: "Website Hosting", href: "/services#hosting" },
  { name: "DevOps & Automation", href: "/services#devops" },
  { name: "Website Development", href: "/services#web-dev" },
  { name: "Mobile App Development", href: "/services#mobile-dev" },
  { name: "Digital Marketing", href: "/services#marketing" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-bold text-xl">
              string<span className="text-accent">box</span>.org
            </Link>
            <p className="text-sm text-muted-foreground">
              Your complete web and app development solution. From hosting to marketing, we've got you covered.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium">Company</h3>
            {companyLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium">Resources</h3>
            {resourceLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium">Services</h3>
            {serviceLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium">Legal</h3>
            {legalLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} stringbox.org, Inc. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
