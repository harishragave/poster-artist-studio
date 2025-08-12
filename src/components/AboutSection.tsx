import { Card, CardContent } from "@/components/ui/card";
import { Palette, PenTool, Video, Layers, Sparkles, Target } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Poster Design", icon: Palette, color: "text-earth-orange" },
    { name: "Drawing & Illustration", icon: PenTool, color: "text-nature-green" },
    { name: "Video Editing", icon: Video, color: "text-primary" },
    { name: "Graphic Design", icon: Layers, color: "text-earth-orange" },
    { name: "AI-Assisted Design", icon: Sparkles, color: "text-secondary" },
    { name: "Visual Storytelling", icon: Target, color: "text-warm-brown" }
  ];

  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-warm mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a creative visual designer with a passion for turning ideas into eye-catching poster designs. 
                My style blends bold typography, engaging layouts, and unique textures to create visuals that 
                not only look good but tell a story.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Whether it's a vintage coffee shop ad, a sleek tech campaign, or a vibrant music festival poster, 
                I focus on designs that connect with people and leave a lasting impression.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Proficient in Canva, AI-assisted design tools, and layout software, I bring together modern design 
                trends with timeless visual appeal. I believe great design is about more than aesthetics — 
                it's about sparking emotion and inspiring action.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <skill.icon className={`w-8 h-8 mx-auto mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;