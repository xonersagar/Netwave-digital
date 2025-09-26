import { Award, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering businesses through innovative technology solutions that drive growth and efficiency.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Delivering high-quality software solutions with rigorous testing and best practices.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Building long-term partnerships with our clients through exceptional service and support.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Staying ahead of technology trends to provide cutting-edge solutions for modern challenges.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 scroll-mt-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">NetWave Digital</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                NetWave Digital Services is a leading IT solutions provider specializing in custom software 
                development, web applications, mobile app development, and comprehensive digital transformation services.
              </p>
              
              <p>
                Founded and led by Sagar, our company has been at the forefront of technological innovation, 
                helping businesses across various industries leverage the power of modern technology to achieve 
                their goals and stay competitive in today's digital landscape.
              </p>
              
              <p>
                With expertise spanning across full-stack development, mobile applications, e-commerce solutions, 
                and cloud technologies, we provide end-to-end digital solutions that transform how businesses operate and grow.
              </p>
            </div>

            {/* Owner Info */}
            <div className="mt-8 p-6 glass-card">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Leadership</h3>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Sagar</h4>
                  <p className="text-muted-foreground">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Visionary leader with expertise in technology strategy and digital transformation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="service-card text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Satisfied Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">99%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;