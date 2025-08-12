import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence and Data Science",
      institution: "Sri Sairam Engineering College",
      location: "Chennai, Tamil Nadu, India",
      duration: "Sep 2022 – March 2025",
      type: "current"
    },
    {
      degree: "Diploma",
      field: "Electronics and Communication Engineering",
      institution: "Sri Sairam Polytechnic College", 
      location: "Chennai, Tamil Nadu, India",
      duration: "June 2019 – May 2022",
      type: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-warm mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Academic foundation combining technology and creativity
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-warm transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        edu.type === 'current' ? 'bg-gradient-warm' : 'bg-gradient-nature'
                      }`}>
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-earth-orange font-semibold mb-3">
                            {edu.field}
                          </p>
                        </div>
                        {edu.type === 'current' && (
                          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-muted-foreground">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;