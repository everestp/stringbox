
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [

  {
    content:
      "Stringbox transformed our campus with a modern, feature-rich website. The real-time notice board and dynamic gallery updates have significantly improved how we communicate with students and faculty.",
    author: "Biren Chettri",
    position: "Campus Chief, Banke Bageshwori Campus",
    image: "",
    initials: "BC",
  },
  {
    content:
      "The custom e-commerce app developed by Stringbox has revolutionized how we connect with our customers. Their technical expertise and attention to UX helped us increase conversions by 45%.",
    author: "Everest Paudel",
    position: "Director, Carten.xyz",
    image: "",
    initials: "EP",
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
