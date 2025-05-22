
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Website Hosting",
    description: "Reliable shared, VPS, and cloud hosting solutions to keep your website fast and secure.",
    icon: "🌐",
  },
  {
    title: "DevOps & Automation",
    description: "CI/CD pipelines and cloud infrastructure to streamline your development workflow.",
    icon: "⚙️",
  },
  {
    title: "Website Development",
    description: "Custom websites for ecommerce, educational institutions, news portals, and more.",
    icon: "💻",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform apps for iOS and Android that deliver exceptional experiences.",
    icon: "📱",
  },
  {
    title: "Digital Marketing",
    description: "SEO, PPC, branding, and social media services to boost your online presence.",
    icon: "📈",
  },
  {
    title: "Internet Services",
    description: "Domain registration, analytics setup, and ongoing maintenance to support your digital assets.",
    icon: "🔧",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tech solutions to help your business thrive in the digital landscape
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full border border-border/50 hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="text-3xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
