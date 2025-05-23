
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolioItems = {
  web: [
    {
      title: "E-commerce Platform",
      client: "carten",
      description: "A full-featured e-commerce platform with inventory management and payment processing.",
      image: "/carten.png",
      tags: ["React", "Spring Boot", "MongoDB"],
    },
    {
      title: "Banke Bageshowori Campus Website",
      client: "Banke Bageshowori Campus",
      description: "A comprehensive portal for students, faculty, and administrators with course management.",
      image: "/bbc.png",
      tags: ["Appwrite", "Reactjs", "PostgreSQL"],
    }
  ]
  // mobile: [
  //   {
  //     title: "Fitness Tracking App",
  //     client: "HealthFit",
  //     description: "An iOS and Android app for tracking workouts, nutrition, and health metrics.",
  //     image: "https://via.placeholder.com/400x300",
  //     tags: ["React Native", "Firebase"],
  //   },
  //   {
  //     title: "Food Delivery App",
  //     client: "QuickBite",
  //     description: "A mobile application for ordering food with real-time order tracking.",
  //     image: "https://via.placeholder.com/400x300",
  //     tags: ["Flutter", "Node.js", "MongoDB"],
  //   },
  //   {
  //     title: "Banking App",
  //     client: "SecureBank",
  //     description: "A secure mobile banking application with biometric authentication and transaction features.",
  //     image: "https://via.placeholder.com/400x300",
  //     tags: ["Swift", "Kotlin", "Java"],
  //   },
  // ],
  // design: [
  //   {
  //     title: "Brand Identity",
  //     client: "TechStartup",
  //     description: "Complete brand identity including logo, color palette, and brand guidelines.",
  //     image: "https://via.placeholder.com/400x300",
  //     tags: ["Branding", "Identity", "Logo Design"],
  //   },
  //   {
  //     title: "UI/UX Design",
  //     client: "FinTech App",
  //     description: "User interface and experience design for a financial technology application.",
  //     image: "https://via.placeholder.com/400x300",
  //     tags: ["UI/UX", "Wireframing", "Prototyping"],
  //   },
  //   {
  //     title: "Marketing Campaign",
  //     client: "EcoProducts",
  //     description: "Digital marketing campaign including social media assets and web banners.",
  //     image: "https://via.placeholder.com/400x300",
  //     tags: ["Digital Marketing", "Social Media", "Advertising"],
  //   },
  // ],
};

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-secondary/50 dark:bg-secondary/10 py-16 md:py-20">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our recent projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>
        </div>
        
        <div className="container py-12 md:py-16">
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-12">
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
            
            {Object.entries(portfolioItems).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="h-48 bg-muted/50">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">Client: {item.client}</p>
                        <p className="text-sm mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs bg-secondary/80 text-secondary-foreground px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
