
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent/20 dark:to-background/0"></div>
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Powering Digital <span className="gradient-text">Innovation</span>
          </h1>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            From website hosting to mobile development, stringbox.org delivers comprehensive tech solutions that help businesses scale in the digital world.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Link to="/contact">
              <Button size="lg" className="font-medium">
                Get Started
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="font-medium">
                View Pricing
              </Button>
            </Link>
          </div>
          <div className="mt-12">
            <p className="text-sm text-muted-foreground mb-3">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-xl font-semibold text-muted-foreground/60">BBC college</div>
              <div className="text-xl font-semibold text-muted-foreground/60">Carten-Ecommerce</div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}