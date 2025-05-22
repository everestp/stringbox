
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const blogPosts = [
  {
    title: "10 Tips for Optimizing Your Website Performance",
    excerpt: "Learn how to improve your website's speed and performance with these actionable tips.",
    date: "May 15, 2024",
    author: "John Smith",
    category: "Web Development",
    image: "https://via.placeholder.com/800x400",
  },
  {
    title: "The Future of Mobile App Development: Trends to Watch",
    excerpt: "Explore the emerging technologies that will shape the future of mobile applications.",
    date: "May 8, 2024",
    author: "Sarah Lee",
    category: "Mobile Development",
    image: "https://via.placeholder.com/800x400",
  },
  {
    title: "How to Choose the Right Hosting Solution for Your Business",
    excerpt: "A comprehensive guide to selecting the best hosting option based on your business needs.",
    date: "April 30, 2024",
    author: "Mike Johnson",
    category: "Hosting",
    image: "https://via.placeholder.com/800x400",
  },
  {
    title: "SEO Strategies That Actually Work in 2024",
    excerpt: "Discover effective SEO tactics that can help your website rank higher in search results.",
    date: "April 22, 2024",
    author: "Lisa Brown",
    category: "Digital Marketing",
    image: "https://via.placeholder.com/800x400",
  },
  {
    title: "Understanding DevOps: A Beginner's Guide",
    excerpt: "Learn the fundamentals of DevOps and how it can streamline your development workflow.",
    date: "April 15, 2024",
    author: "David Wilson",
    category: "DevOps",
    image: "https://via.placeholder.com/800x400",
  },
  {
    title: "The Importance of Responsive Design in 2024",
    excerpt: "Why having a responsive website is more critical than ever for businesses today.",
    date: "April 8, 2024",
    author: "Anna Chen",
    category: "Web Design",
    image: "https://via.placeholder.com/800x400",
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Hosting",
  "Digital Marketing",
  "DevOps",
  "Web Design",
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-secondary/50 dark:bg-secondary/10 py-16 md:py-20">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Insights, tips, and news from the stringbox.org team on web development, hosting, and digital marketing.
            </p>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 bg-muted/50">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">By {post.author}</span>
                        <Button variant="link" className="p-0">Read More</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/4">
              <div className="sticky top-24">
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Search</h3>
                  <div className="flex">
                    <Input placeholder="Search posts..." className="rounded-r-none" />
                    <Button variant="default" className="rounded-l-none" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Button
                        key={index}
                        variant={index === 0 ? "default" : "ghost"}
                        className="w-full justify-start"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Subscribe</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest posts delivered straight to your inbox.
                  </p>
                  <Input placeholder="Your email address" className="mb-2" />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
