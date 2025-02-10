
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { SearchIcon, ArrowRight } from "lucide-react";
import aiToolsData from "../data/ai-tools.json";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("הכל");
  const [email, setEmail] = React.useState("");
  const { toast } = useToast();

  const filteredTools = aiToolsData.tools.filter(
    (tool) => selectedCategory === "הכל" || tool.category === selectedCategory
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "תודה על ההרשמה!",
        description: "תקבלו את העדכונים האחרונים שלנו על כלי בינה מלאכותית.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            {aiToolsData.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {aiToolsData.hero.subtitle}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button className="rounded-full px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
              גלה כלים
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container px-4 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {aiToolsData.categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
                  : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rtl">
          {filteredTools.map((tool) => (
            <Card
              key={tool.name}
              className="p-6 hover:shadow-lg transition-shadow animate-fade-up backdrop-blur-sm bg-white/50 border border-purple-100"
            >
              <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600">
                {tool.category}
              </Badge>
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-muted-foreground mb-4">{tool.description}</p>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-blue-600 transition-colors"
              >
                למד עוד
                <ArrowRight className="mr-1 h-4 w-4 rotate-180" />
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container px-4 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            הישאר מעודכן
          </h2>
          <p className="text-muted-foreground mb-8">
            הירשם לקבלת העדכונים האחרונים על כלי בינה מלאכותית ישירות לתיבת הדואר שלך
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-3 rtl">
            <Input
              type="email"
              placeholder="הכנס את האימייל שלך"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              dir="rtl"
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
            >
              הרשמה
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
