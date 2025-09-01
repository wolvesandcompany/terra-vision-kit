import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To accelerate the transition to sustainable energy and environmental solutions through innovative technology and strategic partnerships."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Expert consultants and engineers with decades of combined experience in renewable energy and environmental sustainability."
    },
    {
      icon: Award,
      title: "Our Impact",
      description: "Proven track record of helping organizations reduce their carbon footprint while improving operational efficiency and cost savings."
    }
  ];

  const achievements = [
    "ISO 14001 Environmental Management Certified",
    "50+ Successful Renewable Energy Installations",
    "25% Average Energy Cost Reduction for Clients",
    "Zero Waste to Landfill Certification Program"
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
              Pioneering <span className="text-primary">Sustainable Solutions</span> 
              Since 2010
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe that environmental responsibility and business success go hand in hand. 
              Our comprehensive approach combines cutting-edge technology with proven methodologies 
              to deliver measurable results that benefit both your organization and the planet.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button variant="eco" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Values Grid */}
          <div className="space-y-6 slide-up">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card rounded-2xl p-6 shadow-soft hover-lift border border-border/50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-heading text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;