import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Recycle, 
  Droplets, 
  Wind, 
  Sun, 
  Factory,
  ArrowRight
} from 'lucide-react';

const Solutions = () => {
  const services = [
    {
      icon: Sun,
      title: "Solar Energy Solutions",
      description: "Custom solar panel installations and energy storage systems for residential and commercial properties.",
      features: ["20-year warranty", "24/7 monitoring", "Grid-tie systems"],
      color: "bg-yellow-500/10 text-yellow-600"
    },
    {
      icon: Wind,
      title: "Wind Power Systems",
      description: "Small and large-scale wind turbine installations with comprehensive maintenance packages.",
      features: ["High efficiency", "Low maintenance", "Smart controls"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Recycle,
      title: "Waste Management",
      description: "Zero-waste strategies and circular economy solutions to minimize environmental impact.",
      features: ["Waste audits", "Recycling programs", "Composting systems"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Rainwater harvesting, greywater systems, and smart irrigation solutions.",
      features: ["50% water savings", "Smart sensors", "Automated systems"],
      color: "bg-cyan-500/10 text-cyan-600"
    },
    {
      icon: Factory,
      title: "Industrial Efficiency",
      description: "Energy audits and efficiency upgrades for manufacturing and industrial facilities.",
      features: ["Energy audits", "LED retrofits", "HVAC optimization"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Zap,
      title: "Smart Grid Integration",
      description: "Advanced energy management systems and smart grid connectivity solutions.",
      features: ["Real-time monitoring", "Load balancing", "Peak shaving"],
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  return (
    <section id="solutions" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
            Comprehensive <span className="text-primary">Green Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From renewable energy installations to waste management strategies, 
            we provide end-to-end sustainable solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-card rounded-2xl p-8 shadow-soft hover-lift border border-border/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold font-heading text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center slide-up">
          <Button variant="eco" size="xl">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;