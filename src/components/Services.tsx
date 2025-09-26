import { 
  Code, Database, Globe, TestTube, TrendingUp, Users, 
  Smartphone, Apple, Monitor, Layers, 
  Bot, Server, Workflow,
  Triangle, Zap,
  ShoppingBag, Package, Store,
  FileText, Edit3, Pen
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      id: 'services',
      title: 'IT Services',
      icon: Code,
      description: 'Comprehensive IT solutions for modern businesses',
      services: [
        { name: 'Custom Software', icon: Code, description: 'Tailored software solutions for your business needs' },
        { name: 'Full-Stack Web Development', icon: Globe, description: 'End-to-end web application development' },
        { name: 'IT Consulting Services', icon: Users, description: 'Strategic technology consulting and planning' },
        { name: 'Software Testing & QA', icon: TestTube, description: 'Comprehensive testing and quality assurance' },
        { name: 'Digital Marketing', icon: TrendingUp, description: 'Digital marketing and SEO optimization' },
        { name: 'Outsourced Product Development', icon: Package, description: 'Complete product development outsourcing' },
        { name: 'Software Development And IT Operations', icon: Workflow, description: 'DevOps and continuous integration' },
        { name: 'Data as a Service', icon: Database, description: 'Data management and analytics solutions' },
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Native and cross-platform mobile applications',
      services: [
        { name: 'Mobile App Development', icon: Smartphone, description: 'Custom mobile application development' },
        { name: 'iOS Development', icon: Apple, description: 'Native iOS app development with Swift' },
        { name: 'Android Development', icon: Monitor, description: 'Native Android app development' },
        { name: 'React Native', icon: Triangle, description: 'Cross-platform React Native apps' },
        { name: 'Flutter', icon: Layers, description: 'Beautiful Flutter applications' },
        { name: 'Ionic', icon: Zap, description: 'Hybrid mobile apps with Ionic' },
        { name: 'Swift', icon: Apple, description: 'Swift programming for iOS apps' },
      ]
    },
    {
      id: 'server',
      title: 'Server Side Development',
      icon: Server,
      description: 'Backend development and server-side solutions',
      services: [
        { name: 'AI Chatbot', icon: Bot, description: 'Intelligent chatbot development' },
        { name: 'PHP Development', icon: Code, description: 'PHP web development solutions' },
        { name: 'Laravel', icon: Server, description: 'Laravel framework development' },
        { name: 'CodeIgniter', icon: Code, description: 'CodeIgniter PHP framework' },
        { name: 'Symfony', icon: Server, description: 'Symfony framework development' },
        { name: 'NodeJS', icon: Server, description: 'Node.js backend development' },
        { name: 'SpringBoot', icon: Server, description: 'SpringBoot (microservices) backend development' },
      ]
    },
    {
      id: 'hiring',
      title: 'Hiring Services',
      icon: Users,
      description: 'Dedicated teams and technology leadership',
      services: [
        { name: 'Dedicated Development Teams', icon: Users, description: 'Skilled development teams for your projects' },
        { name: 'CTO Services', icon: Users, description: 'Chief Technology Officer consulting' },
        { name: 'CMO Services', icon: TrendingUp, description: 'Chief Marketing Officer services' },
        { name: 'Tech Agencies', icon: Users, description: 'Complete technology agency solutions' },
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Globe,
      description: 'Modern frontend frameworks and technologies',
      services: [
        { name: 'Angular Development', icon: Triangle, description: 'Angular web applications' },
        { name: 'ReactJS Development', icon: Code, description: 'React web applications' },
        { name: 'VueJS Development', icon: Zap, description: 'Vue.js web applications' },
      ]
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Solutions',
      icon: ShoppingBag,
      description: 'Complete e-commerce development and solutions',
      services: [
        { name: 'Magento Development', icon: Store, description: 'Magento e-commerce solutions' },
        { name: 'WooCommerce', icon: ShoppingBag, description: 'WordPress WooCommerce stores' },
        { name: 'Shopify Development', icon: Store, description: 'Shopify store development' },
      ]
    },
    {
      id: 'cms',
      title: 'Content Management',
      icon: FileText,
      description: 'CMS development and content management solutions',
      services: [
        { name: 'Content Management System', icon: FileText, description: 'Custom CMS development' },
        { name: 'WordPress Development', icon: Pen, description: 'WordPress website development' },
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions to transform your business and drive digital innovation
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-24">
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.services.map((service, index) => (
                  <div key={index} className="service-card group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">{service.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;