
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const industries = [
  {
    name: "E-Commerce",
    tags: ["Online Stores", "Marketplaces", "Shopping Carts"],
  },
  {
    name: "Education",
    tags: ["Universities", "Schools", "E-Learning"],
  },
  {
    name: "Media & News",
    tags: ["News Portals", "Magazines", "Blogs"],
  },
  {
    name: "Finance",
    tags: ["Banking", "Insurance", "Investments"],
  },
  {
    name: "Healthcare",
    tags: ["Hospitals", "Clinics", "Health Tech"],
  },
  {
    name: "Technology",
    tags: ["SaaS", "IT Services", "Tech Startups"],
  },
];

export function IndustriesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our solutions are tailored to meet the unique needs of various industries
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="border border-border/50 hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{industry.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {industry.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
