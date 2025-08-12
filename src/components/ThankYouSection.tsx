import { Heart } from "lucide-react";

const ThankYouSection = () => {
  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Heart className="w-12 h-12 text-white mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Thank You
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Thank you for taking the time to explore my work. Every poster tells a story, 
            and I'm grateful for the opportunity to share mine with you. 
            I look forward to creating something beautiful together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;