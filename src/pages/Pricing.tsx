
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const pricingPlans = {
  hosting: [
    {
      name: "Basic",
      price: "$9.99",
      period: "/month",
      description: "Perfect for small websites and blogs",
      features: ["1 Website", "5 GB Storage", "10 GB Bandwidth", "Free SSL Certificate", "24/7 Support"],
      buttonText: "Get Started",
    },
    {
      name: "Business",
      price: "$19.99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: ["5 Websites", "20 GB Storage", "Unlimited Bandwidth", "Free SSL Certificate", "Priority Support", "Daily Backups"],
      buttonText: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$49.99",
      period: "/month",
      description: "For large scale applications",
      features: ["Unlimited Websites", "100 GB Storage", "Unlimited Bandwidth", "Free SSL Certificate", "24/7 Premium Support", "Daily Backups", "Dedicated Resources"],
      buttonText: "Contact Sales",
    },
  ],
  development: [
    {
      name: "Basic",
      price: "$2,999",
      period: "",
      description: "Simple website development",
      features: ["5-page Website", "Responsive Design", "Basic SEO Setup", "Contact Form", "3 Rounds of Revisions"],
      buttonText: "Get Quote",
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "",
      description: "Advanced website with custom features",
      features: ["10-15 Pages", "Responsive Design", "Advanced SEO Setup", "CMS Integration", "E-commerce Features", "5 Rounds of Revisions"],
      buttonText: "Get Quote",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale web applications",
      features: ["Custom Web Application", "API Development", "User Authentication", "Payment Gateway Integration", "Admin Dashboard", "Unlimited Revisions"],
      buttonText: "Contact Sales",
    },
  ],
};

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include our exceptional support and reliability.
            </p>
          </div>

          <Tabs defaultValue="hosting" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="hosting">Hosting Services</TabsTrigger>
              <TabsTrigger value="development">Development Services</TabsTrigger>
            </TabsList>
            <TabsContent value="hosting">
              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.hosting.map((plan, index) => (
                  <Card key={index} className={`flex flex-col h-full ${plan.popular ? "border-accent" : "border-border/50"}`}>
                    {plan.popular && (
                      <div className="bg-accent text-white text-center py-1 text-xs font-medium">MOST POPULAR</div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="ml-1 text-sm text-muted-foreground">{plan.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="h-4 w-4 text-accent mr-2" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className={`w-full ${plan.popular ? "" : "variant-outline"}`}>
                        {plan.buttonText}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="development">
              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.development.map((plan, index) => (
                  <Card key={index} className={`flex flex-col h-full ${plan.popular ? "border-accent" : "border-border/50"}`}>
                    {plan.popular && (
                      <div className="bg-accent text-white text-center py-1 text-xs font-medium">MOST POPULAR</div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="ml-1 text-sm text-muted-foreground">{plan.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="h-4 w-4 text-accent mr-2" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className={`w-full ${plan.popular ? "" : "variant-outline"}`}>
                        {plan.buttonText}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
