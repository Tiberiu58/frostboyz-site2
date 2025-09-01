import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Every piece is crafted with precision using only the finest materials.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Built by the culture, for the culture. We understand your vibe.',
    },
    {
      icon: Target,
      title: 'Street Luxury',
      description: 'Where urban meets luxury. Where authenticity meets excellence.',
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'More than business. This is our art, our statement, our legacy.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Jewelry Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">About FrostBoyz<span className="text-blue-400">.</span></h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed px-4">
            Born from urban culture, FrostBoyz is more than jewelry. It's attitude. 
            Trap-inspired, icy, bold. We don't just make accessories – we craft statements.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    FrostBoyz was born in the heart of the culture – where hip-hop meets high fashion, 
                    where the streets dictate style, and where authenticity isn't just a word, it's a way of life.
                  </p>
                  <p>
                    We saw a gap between mass-produced jewelry and true luxury. Too many brands either 
                    lacked soul or cost a fortune. We decided to bridge that gap with pieces that speak 
                    to the culture while maintaining premium quality.
                  </p>
                  <p>
                    Every chain, bracelet, and earring tells a story. Your story. Built for those who 
                    hustle, who grind, who never settle. Because when you wear FrostBoyz, 
                    you're not just wearing jewelry – you're wearing a mindset.
                  </p>
                </div>
                <div className="mt-8">
                  <blockquote className="text-xl sm:text-2xl font-bold text-blue-400 italic">
                    "Frost never melts."
                  </blockquote>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">– Our founding principle</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.3}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0">
                <img
                  src="https://images.pexels.com/photos/9026226/pexels-photo-9026226.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Craftsmanship"
                  className="rounded-lg shadow-md"
                />
                <img
                  src="https://images.pexels.com/photos/6669856/pexels-photo-6669856.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Design Process"
                  className="rounded-lg shadow-md mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/11670231/pexels-photo-11670231.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Quality Control"
                  className="rounded-lg shadow-md -mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/6669859/pexels-photo-6669859.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Final Product"
                  className="rounded-lg shadow-md"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 px-4">What We Stand For</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                Our values aren't just words on a page – they're the DNA of everything we create.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300">
                  <value.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
              To elevate the culture through premium jewelry that speaks to your hustle, 
              your grind, and your success. We're not just accessorizing your outfit – 
              we're amplifying your energy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {[
                { stat: '10K+', label: 'Happy Customers' },
                { stat: '50+', label: 'Countries Shipped' },
                { stat: '99%', label: 'Satisfaction Rate' },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.2} direction="up">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">{item.stat}</h3>
                    <p className="text-sm sm:text-base text-gray-300">{item.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 px-4">Meet the Founders</h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4">
                The visionaries behind the frost
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="text-center px-4">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  AJ
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">Alex Johnson</h3>
                <p className="text-blue-400 font-medium mb-4">Co-Founder & Creative Director</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  From the streets of Atlanta, Alex brings the authentic trap aesthetic that defines our brand. 
                  His eye for detail ensures every piece captures the essence of street luxury.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.4}>
              <div className="text-center px-4">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-700 to-black rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  MR
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">Marcus Rivera</h3>
                <p className="text-blue-400 font-medium mb-4">Co-Founder & Head of Operations</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  With a background in luxury jewelry craftsmanship, Marcus ensures that every FrostBoyz piece 
                  meets the highest standards of quality and durability.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-400 to-blue-600 text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Join the Movement?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
              Discover jewelry that matches your energy. Built for the streets, worn like luxury.
            </p>
            <a
              href="/shop"
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Shop FrostBoyz
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default AboutPage;