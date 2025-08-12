import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Nature Way Castor Oil",
      category: "Product Marketing",
      image: "/lovable-uploads/f2b50b83-ba27-4c22-9803-4f124862798b.png",
      description: "Natural product poster with botanical illustrations"
    },
    {
      id: 2,
      title: "Nature Way Coconut Oil",
      category: "Product Marketing", 
      image: "/lovable-uploads/c8b9afb6-52a8-4462-8dfe-57c16e9d8939.png",
      description: "Traditional wood-pressed coconut oil marketing design"
    },
    {
      id: 3,
      title: "Nature Way Groundnut Oil",
      category: "Product Marketing",
      image: "/lovable-uploads/8bf2b7e9-c636-484b-a62e-e075f86c6a67.png",
      description: "Pure groundnut oil product showcase"
    },
    {
      id: 4,
      title: "Nature Way Gingelly Oil",
      category: "Product Marketing",
      image: "/lovable-uploads/746cc3f0-f329-43ef-b069-5ac4da456823.png",
      description: "Traditional gingelly oil marketing poster"
    },
    {
      id: 5,
      title: "Nature Way Coconut Oil - Lifestyle",
      category: "Product Marketing",
      image: "/lovable-uploads/31d39fd6-91ea-479c-a90c-a624c2f6e22f.png",
      description: "Lifestyle-focused coconut oil advertisement"
    },
    {
      id: 6,
      title: "Coca-Cola Fresh Taste",
      category: "Beverage Advertising",
      image: "/lovable-uploads/5f05511b-54cd-40ff-807c-5ca333c40bec.png",
      description: "Bold beverage advertising with fresh elements"
    },
    {
      id: 7,
      title: "Healthy Glowing Skin",
      category: "Beauty & Wellness",
      image: "/lovable-uploads/6feb67ca-e7b1-4ac0-bdf9-e3dfe1b1f4e0.png",
      description: "Natural skincare product marketing"
    },
    {
      id: 8,
      title: "Nourish Your Skin",
      category: "Beauty & Wellness",
      image: "/lovable-uploads/b955b017-3b77-472b-88de-65db1d560e9c.png",
      description: "Tropical-themed skincare advertisement"
    },
    {
      id: 9,
      title: "Coffee Culture",
      category: "Food & Beverage",
      image: "/lovable-uploads/75058859-1f7a-42c8-8e61-50931b4f7902.png",
      description: "Vintage-style coffee house poster"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Product Marketing", "Beverage Advertising", "Beauty & Wellness", "Food & Beverage"];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              My Portfolio
            </h2>
            <div className="w-20 h-1 bg-gradient-warm mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of poster designs showcasing creativity, brand storytelling, and visual impact
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-6 py-2 text-sm transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-gradient-warm text-white border-0" 
                    : "hover:bg-muted"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-warm transition-all duration-300 hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {item.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="max-w-full max-h-[95vh] w-auto h-auto object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;