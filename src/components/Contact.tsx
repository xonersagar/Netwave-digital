import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Sending...");

    const formPayload = new FormData();
    formPayload.append("access_key", "0001ed4d-2998-4433-b312-875faf9c1761"); // ✅ Your access key
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("service", formData.service);
    formPayload.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formPayload,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } else {
      console.error("Error:", data);
      setResult("❌ " + data.message);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Main Road Balidih",
        "Bokaro Steel City",
        "Jharkhand 827014",
        "Coordinates: 23.667359, 86.055703",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 7481947649"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@netwavedigital.com", "sagar@netwavedigital.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
      ],
    },
  ];

  const services = [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "IT Consulting",
    "Digital Marketing",
    "E-commerce Solutions",
    "Other",
  ];

  return (
    <section id="contact" className="py-20 px-6 scroll-mt-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology?
            Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Owner Contact */}
            <div className="mt-8 p-6 glass-card">
              <h4 className="font-semibold text-foreground mb-4">
                Direct Contact
              </h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Sagar (Founder & CEO)
                  </span>
                </p>
                <p className="text-muted-foreground">
                  <Phone className="w-4 h-4 inline mr-2" />
                  +91 7481947649
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  Available for direct consultation and project discussions
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground resize-none"
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              <button type="submit" className="hero-button w-full group">
                Send Message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* ✅ Status Message */}
            <p className="mt-4 text-sm text-foreground">{result}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
