import { useEffect, useState } from 'react';
import { TrendingUp, Users, Zap, TreePine } from 'lucide-react';

const Impact = () => {
  const [counters, setCounters] = useState({
    co2Reduced: 0,
    energySaved: 0,
    clientsSatisfied: 0,
    treesEquivalent: 0
  });

  const finalValues = {
    co2Reduced: 500,
    energySaved: 2500,
    clientsSatisfied: 150,
    treesEquivalent: 25000
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepTime = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const finalValue = finalValues[key as keyof typeof finalValues];
      const increment = finalValue / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepTime);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: counters.co2Reduced,
      suffix: "+",
      label: "Tons CO₂ Reduced",
      description: "Annual carbon emission reduction achieved through our solutions",
      color: "text-green-600"
    },
    {
      icon: Zap,
      value: counters.energySaved,
      suffix: "MWh",
      label: "Energy Saved",
      description: "Total renewable energy generated across all projects",
      color: "text-yellow-600"
    },
    {
      icon: Users,
      value: counters.clientsSatisfied,
      suffix: "+",
      label: "Clients Satisfied",
      description: "Organizations we've helped transition to sustainable practices",
      color: "text-blue-600"
    },
    {
      icon: TreePine,
      value: counters.treesEquivalent,
      suffix: "+",
      label: "Trees Planted Equivalent",
      description: "Environmental impact equivalent in trees planted",
      color: "text-green-700"
    }
  ];

  const caseStudies = [
    {
      title: "Green Manufacturing Plant",
      description: "50% energy reduction through solar integration and efficiency upgrades",
      impact: "200 tons CO₂ saved annually",
      image: "🏭"
    },
    {
      title: "Sustainable Office Complex",
      description: "Zero-waste achievement with comprehensive recycling program",
      impact: "95% waste diverted from landfills",
      image: "🏢"
    },
    {
      title: "Renewable Energy Community",
      description: "Residential solar program powering 500+ homes",
      impact: "1.2 MW clean energy capacity",
      image: "🏘️"
    }
  ];

  return (
    <section id="impact" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
            Our Environmental <span className="text-primary">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real results from real projects. See how we're making a measurable difference 
            in the fight against climate change.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 text-center shadow-soft hover-lift border border-border/50"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                
                <div className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                
                <div className="text-lg font-semibold text-primary mb-2">
                  {stat.label}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Case Studies */}
        <div className="slide-up">
          <h3 className="text-2xl lg:text-3xl font-bold font-heading text-foreground text-center mb-12">
            Success Stories
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 shadow-soft hover-lift border border-border/50"
              >
                <div className="text-4xl mb-4 text-center">{study.image}</div>
                
                <h4 className="text-xl font-semibold font-heading text-foreground mb-4">
                  {study.title}
                </h4>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="bg-success/10 rounded-lg p-3">
                  <div className="text-sm font-semibold text-success">
                    {study.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;