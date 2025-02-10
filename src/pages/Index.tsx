
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { SearchIcon, ArrowRight } from "lucide-react";

const categories = [
  "All",
  "Image Generation",
  "Text Generation",
  "Video Creation",
  "Music",
  "Productivity",
];

const tools = [
  {
    name: "Mubert",
    description: "AI-powered music creation without copyright restrictions",
    category: "Music",
    url: "https://mubert.com",
  },
  {
    name: "ChatGPT",
    description: "Advanced conversational AI for text generation and assistance",
    category: "Text Generation",
    url: "https://chat.openai.com",
  },
  {
    name: "Perplexity AI",
    description: "Smart research assistant for academic papers and content",
    category: "Productivity",
    url: "https://www.perplexity.ai",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [email, setEmail] = React.useState("");
  const { toast } = useToast();

  const filteredTools = tools.filter(
    (tool) => selectedCategory === "All" || tool.category === selectedCategory
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive our latest AI tool updates.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Henry's AI Toolbox
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover and master the most powerful AI tools to enhance your creativity and productivity.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button className="rounded-full px-8">
              Explore Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container px-4 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <Card
              key={tool.name}
              className="p-6 hover:shadow-lg transition-shadow animate-fade-up"
            >
              <Badge className="mb-4">{tool.category}</Badge>
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-muted-foreground mb-4">{tool.description}</p>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container px-4 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to receive the latest AI tools and updates directly in your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
