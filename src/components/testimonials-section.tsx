
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    content: "Stringbox transformed our business with their exceptional web development services. Our new e-commerce platform has increased conversions by 45%!",
    author: "Sarah Johnson",
    position: "CEO, FashionRetail",
    image: "",
    initials: "SJ",
  },
  {
    content: "The mobile app that Stringbox created for us has revolutionized how our students access course materials. Their technical expertise is unmatched.",
    author: "Michael Chen",
    position: "Director of IT, Educa University",
    image: "",
    initials: "MC",
  },
  {
    content: "Their DevOps solutions streamlined our deployment process, cutting our release time in half. The Stringbox team truly understands modern development workflows.",
    author: "Alex Rodriguez",
    position: "CTO, TechInnovate",
    image: "",
    initials: "AR",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses that have transformed their digital presence with us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border/50">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
