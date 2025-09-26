import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      rating: 5,
      text: "NetWave Digital Services delivered an exceptional e-commerce platform for our business. Their team understood our requirements perfectly and delivered a solution that exceeded our expectations. The project was completed on time and within budget.",
      service: "E-commerce Development"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Healthcare Plus",
      rating: 4.8,
      text: "Working with Sagar and his team was a pleasure. They developed a comprehensive healthcare management system that streamlined our operations significantly. The mobile app they created is user-friendly and robust.",
      service: "Custom Software Development"
    },
    {
      id: 3,
      name: "Aditya Mahto",
      company: "StartupFlow",
      rating: 5,
      text: "The web application developed by NetWave has transformed our business processes. Their full-stack development expertise and attention to detail is commendable. Highly recommend their services!",
      service: "Full-Stack Development"
    },
    {
      id: 4,
      name: "Anita Patel",
      //company: "Digital Marketing Pro",
      rating: 5,
      text: "NetWave's digital marketing and web development services helped us establish a strong online presence. Their strategic approach and technical skills made a significant impact on our business growth.",
      service: "Digital Marketing & Web Development"
    },
    {
      id: 5,
      name: "Raja singh",
      company: "MobileFirst Inc",
      rating: 5,
      text: "The React Native app developed by NetWave is exactly what we needed. Cross-platform compatibility, smooth performance, and intuitive design - they delivered it all. Excellent work!",
      service: "Mobile App Development"
    },
    {
      id: 6,
      name: "Sneha Reddy",
      //company: "CloudTech Ventures",
      rating: 4,
      text: "From consultation to deployment, NetWave provided exceptional IT consulting services. Their team helped us choose the right technology stack and implemented a solution that scales with our business.",
      service: "IT Consulting"
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services and solutions.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            {/* Current Review */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${i < reviews[currentReview].rating 
                      ? 'fill-yellow-400 text-yellow-400' 
                      : 'text-muted-foreground'
                    }`} 
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg md:text-xl text-center text-foreground leading-relaxed mb-8 font-medium">
                "{reviews[currentReview].text}"
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                <h4 className="font-semibold text-lg text-foreground mb-1">
                  {reviews[currentReview].name}
                </h4>
                <p className="text-muted-foreground mb-2">
                  {reviews[currentReview].company}
                </p>
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
                  <span className="text-sm text-primary font-medium">
                    {reviews[currentReview].service}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/10 hover:bg-primary/20 text-primary rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/10 hover:bg-primary/20 text-primary rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Next review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentReview 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Review Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;