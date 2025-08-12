import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-gradient-warm mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'd love to hear about your project and create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Email Me</h3>
                <p className="text-muted-foreground mb-6">
                  Drop me a line and I'll get back to you as soon as possible
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('mailto:harish62264@gmail.com')}
                >
                  harish62264@gmail.com
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-nature rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Call Me</h3>
                <p className="text-muted-foreground mb-6">
                  Available for calls and discussions about your project
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('tel:+919080764427')}
                >
                  +91 9080764427
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-gradient-hero border-0 shadow-glow">
              <CardContent className="p-8">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready to Start a Project?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Whether you need a single poster or a complete design campaign, 
                  I'm here to help bring your vision to life with creativity and professionalism.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-warm border-0"
                    onClick={() => window.open('mailto:harish62264@gmail.com?subject=Design Project Inquiry')}
                  >
                    Start a Project
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('tel:+919080764427')}
                  >
                    Schedule a Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;