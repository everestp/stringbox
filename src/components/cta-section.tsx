
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="rounded-xl bg-gradient-to-br from-accent/90 to-accent/30 dark:from-accent/70 dark:to-accent/10 p-8 md:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-white">
              Ready to supercharge your digital presence?
            </h2>
            <p className="text-lg mb-10 text-white/90 md:text-xl">
              Partner with stringbox.org for all your web development, hosting, and digital marketing needs.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="default" className="font-medium bg-white text-accent hover:bg-white/90">
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="font-medium border-white text-white hover:bg-white/10">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
