
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServicesSection } from "@/components/services-section";
import { CTASection } from "@/components/cta-section";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-secondary/50 dark:bg-secondary/10 py-16 md:py-20">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive technology solutions to help your business thrive in the digital landscape. From web hosting to app development, we've got you covered.
            </p>
          </div>
        </div>
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
