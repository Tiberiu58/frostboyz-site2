import React from 'react';
import { Instagram, Play } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const LookbookPage: React.FC = () => {
  const lookbookImages = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Street Luxury',
      description: 'Iced Cuban Chain with urban streetwear',
      category: 'chains',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/6669856/pexels-photo-6669856.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Golden Hour',
      description: 'Frost Bracelet catching the perfect light',
      category: 'bracelets',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/9026226/pexels-photo-9026226.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ice Drop',
      description: 'Statement earrings for the bold',
      category: 'earrings',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/11670231/pexels-photo-11670231.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Minimal Flex',
      description: 'Understated elegance with maximum impact',
      category: 'bracelets',
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/6669859/pexels-photo-6669859.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Stack Game',
      description: 'Layering gold pieces for the perfect look',
      category: 'bracelets',
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/9026227/pexels-photo-9026227.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Night Vibes',
      description: 'Black chain for after-dark energy',
      category: 'chains',
    },
  ];

  const socialPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
      username: '@frostboyz_official',
      caption: 'Not the man. The Boss. 🧊',
      likes: '2.1k',
      type: 'image',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/6669856/pexels-photo-6669856.jpeg?auto=compress&cs=tinysrgb&w=400',
      username: '@frostboyz_official',
      caption: 'Frost never melts. ❄️',
      likes: '3.5k',
      type: 'video',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/9026226/pexels-photo-9026226.jpeg?auto=compress&cs=tinysrgb&w=400',
      username: '@frostboyz_official',
      caption: 'Ice that speaks before you do 💎',
      likes: '1.8k',
      type: 'image',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/11670231/pexels-photo-11670231.jpeg?auto=compress&cs=tinysrgb&w=400',
      username: '@frostboyz_official',
      caption: 'Built for the streets. Worn like luxury. 🔥',
      likes: '4.2k',
      type: 'video',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Lookbook Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Lookbook</h1>
          <p className="text-xl leading-relaxed mb-8">
            Where street culture meets luxury. See how the Frost Fam rocks their ice.
          </p>
          <p className="text-blue-400 font-medium text-lg">
            "fit is drip. but the frost never melts"
          </p>
        </div>
      </section>

      {/* Main Lookbook Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Lifestyle Gallery</h2>
              <p className="text-xl text-gray-600">
                Real pieces. Real style. Real attitude.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lookbookImages.map((item) => (
              <ScrollReveal key={item.id} delay={item.id * 0.1} direction="up">
                <div className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-200 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Follow the Movement
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See what the Frost Fam is saying on social
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.instagram.com/frostboyz.jewelry?igsh=MWE1dDFkazh2dGV1bA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  @frostboyz.jewelry
                </a>
                <a 
                  href="https://www.tiktok.com/@frostboyzromania?_t=ZN-8zN3Ly3wF54&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  <Play className="h-5 w-5 mr-2" />
                  @frostboyzromania
                </a>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPosts.map((post) => (
              <ScrollReveal key={post.id} delay={post.id * 0.1} direction="up">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative aspect-square">
                    <img
                      src={post.image}
                      alt={post.caption}
                      className="w-full h-full object-cover"
                    />
                    {post.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3">
                          <Play className="h-6 w-6 text-gray-900" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2">
                        FB
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{post.username}</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">{post.caption}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <button className="mr-4 hover:text-red-500 transition-colors">
                        ♥ {post.likes}
                      </button>
                      <button className="hover:text-gray-700 transition-colors">
                        💬 Reply
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-black text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Featured in Culture</h2>
            <p className="text-xl text-gray-300 mb-12">
              From the streets to the spotlight, FrostBoyz is making waves
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Music Videos', desc: 'Featured in 15+ music videos by emerging trap artists' },
                { title: 'Influencer Collabs', desc: 'Worn by 100+ social media influencers and content creators' },
                { title: 'Street Style', desc: 'Spotted in streetwear blogs and urban fashion magazines' },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.2} direction="up">
                  <div className="p-6 border border-gray-800 rounded-lg">
                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-400 to-blue-600 text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Join the Lookbook?</h2>
            <p className="text-xl mb-8">
              Tag us in your FrostBoyz photos for a chance to be featured
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/shop"
                className="inline-block bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
              >
                Shop the Looks
              </a>
              <a
                href="#"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Share Your Style
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default LookbookPage;