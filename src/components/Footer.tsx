import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Leaf, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Mail,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Solutions: [
      "Solar Energy",
      "Wind Power",
      "Waste Management",
      "Water Conservation",
      "Energy Consulting"
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "Press",
      "Contact"
    ],
    Resources: [
      "Blog",
      "Case Studies",
      "White Papers",
      "Sustainability Guide",
      "FAQ"
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Compliance",
      "Certifications"
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-heading">
                EcoSolutions
              </span>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Leading the way in sustainable technology solutions. 
              Building a greener future through innovative renewable energy, 
              waste management, and environmental consulting services.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">
                Stay Updated
              </h4>
              <p className="text-white/70 text-sm mb-4">
                Get the latest news on sustainability and green technology.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                />
                <Button variant="secondary" size="icon">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold mb-4 font-heading">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-white/70 hover:text-white transition-colors text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-white/60">
              © 2024 EcoSolutions. All rights reserved. Building a sustainable future since 2010.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@ecosolutions.com</span>
              </div>
              <div className="hidden sm:block">|</div>
              <div>+1 (555) 123-4567</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;