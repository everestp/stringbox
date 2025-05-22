
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "John Smith",
    position: "CEO & Founder",
    bio: "With over 15 years of experience in tech, John leads our vision and strategy.",
    image: "",
    initials: "JS",
  },
  {
    name: "Sarah Lee",
    position: "CTO",
    bio: "Sarah brings deep technical expertise in cloud infrastructure and DevOps.",
    image: "",
    initials: "SL",
  },
  {
    name: "Mike Johnson",
    position: "Creative Director",
    bio: "Mike leads our design team, bringing creativity and user-centered thinking.",
    image: "",
    initials: "MJ",
  },
  {
    name: "Anna Chen",
    position: "Lead Developer",
    bio: "Anna specializes in full-stack development with expertise in modern frameworks.",
    image: "",
    initials: "AC",
  },
  {
    name: "David Wilson",
    position: "Marketing Manager",
    bio: "David drives our marketing strategy with a focus on digital growth.",
    image: "",
    initials: "DW",
  },
  {
    name: "Lisa Brown",
    position: "Client Success Manager",
    bio: "Lisa ensures our clients receive exceptional service and support.",
    image: "",
    initials: "LB",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-secondary/50 dark:bg-secondary/10 py-16 md:py-20">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Learn more about our company, our mission, and the team behind stringbox.org.
            </p>
          </div>
        </div>
        
        <div className="container py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Founded in 2015, stringbox.org began with a simple mission: to provide businesses with comprehensive technology solutions that drive growth and innovation.
                </p>
                <p>
                  What started as a small web development agency has grown into a full-service technology partner offering hosting, development, and digital marketing services to clients around the world.
                </p>
                <p>
                  Our team combines technical expertise with creative thinking to deliver solutions that not only meet our clients' needs but exceed their expectations.
                </p>
              </div>
            </div>
            <div className="bg-muted h-80 rounded-lg"></div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p>We embrace new technologies and approaches to create forward-thinking solutions.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Quality</h3>
                  <p>We're committed to excellence in everything we create, build, and deliver.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                  <p>We work closely with our clients, treating their goals as our own.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Integrity</h3>
                  <p>We believe in transparency, honesty, and doing what's right for our clients.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={member.image} />
                      <AvatarFallback className="text-xl">{member.initials}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-accent mb-3">{member.position}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
