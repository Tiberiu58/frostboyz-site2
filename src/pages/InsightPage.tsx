import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User } from 'lucide-react';

const InsightPage: React.FC = () => {
  const { id } = useParams();

  const articles = {
    'cuban-chain-styling': {
      title: 'Top 3 Ways to Style Cuban Chains',
      author: 'FrostBoyz Team',
      readTime: '3 min read',
      date: 'January 15, 2025',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: [
        {
          type: 'paragraph',
          text: 'Cuban chains are the backbone of street luxury. They\'re not just jewelry – they\'re statements. Whether you\'re hitting the block or stepping into the boardroom, knowing how to style your Cuban chain separates the real from the fake.',
        },
        {
          type: 'heading',
          text: '1. The Solo Statement',
        },
        {
          type: 'paragraph',
          text: 'Sometimes less is more, but the piece has to be perfect. Rock a single, thick Cuban chain at the perfect length – 20" hits the sweet spot for most builds. Let it sit clean on your chest, no competition. This is for when you want the chain to do all the talking.',
        },
        {
          type: 'paragraph',
          text: 'Pro tip: Match your chain width to your build. Bigger frame = thicker chain. Smaller frame = keep it proportional. The chain should complement you, not overpower.',
        },
        {
          type: 'heading',
          text: '2. The Layer Game',
        },
        {
          type: 'paragraph',
          text: 'Layering is an art form. Start with your longest chain (22-24"), add a medium (20"), finish with a shorter piece (18"). Different textures work – mix your Cuban with a tennis chain or add a pendant to one layer.',
        },
        {
          type: 'paragraph',
          text: 'The key is spacing. Each chain should have its own space to shine. Too close together and they fight for attention. Too far apart and the look falls flat.',
        },
        {
          type: 'heading',
          text: '3. The Full Frost Setup',
        },
        {
          type: 'paragraph',
          text: 'This is for when you want all the smoke. Cuban chain, matching bracelet, iced-out watch, maybe some earrings. Everything coordinates but doesn\'t match exactly – that\'s the difference between styled and costume.',
        },
        {
          type: 'paragraph',
          text: 'Keep the metals consistent (all gold or all silver), but vary the textures and sizes. This look requires confidence – if you\'re not ready to own the room, start with option 1.',
        },
        {
          type: 'heading',
          text: 'The Bottom Line',
        },
        {
          type: 'paragraph',
          text: 'Your Cuban chain should reflect your energy. Quiet confidence or loud statement – both work if you own it. The culture respects authenticity over everything. Wear what feels right, not what looks right on someone else.',
        },
      ],
    },
    'jewelry-care-guide': {
      title: 'Keep Your Ice Forever Fresh',
      author: 'FrostBoyz Team',
      readTime: '4 min read',
      date: 'January 12, 2025',
      image: 'https://images.pexels.com/photos/6669856/pexels-photo-6669856.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: [
        {
          type: 'paragraph',
          text: 'Your FrostBoyz pieces are built to last, but even the hardest ice needs proper care. These aren\'t just accessories – they\'re investments in your image. Treat them right, and they\'ll keep you looking fresh for years.',
        },
        {
          type: 'heading',
          text: 'Daily Maintenance',
        },
        {
          type: 'paragraph',
          text: 'After every wear, give your pieces a quick wipe with a soft cloth. Skin oils, sweat, and daily grime can dull that shine over time. Takes 30 seconds, saves you hours of deep cleaning later.',
        },
        {
          type: 'paragraph',
          text: 'Store each piece separately. Chains tangle, metals scratch against each other. Use the pouches we send with every order, or get a jewelry box with individual compartments.',
        },
        {
          type: 'heading',
          text: 'Deep Cleaning',
        },
        {
          type: 'paragraph',
          text: 'Once a week, show your ice some love. Warm water, mild soap, soft toothbrush for the detailed areas. For our stainless steel pieces, this routine will keep them looking brand new.',
        },
        {
          type: 'paragraph',
          text: 'Avoid harsh chemicals – no bleach, no ammonia, no jewelry cleaners with unknown ingredients. Our pieces are tough, but why risk it? Gentle cleaning works better anyway.',
        },
        {
          type: 'heading',
          text: 'What to Avoid',
        },
        {
          type: 'paragraph',
          text: 'Swimming pools are jewelry killers. Chlorine will fade your plating faster than anything. Ocean water isn\'t much better with all that salt. Take off your pieces before you dive in.',
        },
        {
          type: 'paragraph',
          text: 'Gym sessions and heavy sweating – either clean immediately after or leave the expensive pieces at home. Sweat is acidic and will break down finishes over time.',
        },
        {
          type: 'heading',
          text: 'Pro Storage Tips',
        },
        {
          type: 'paragraph',
          text: 'Keep your jewelry in a cool, dry place. Humidity is the enemy of metal finishes. If you live somewhere humid, throw a silica gel packet in your jewelry box.',
        },
        {
          type: 'paragraph',
          text: 'For chains, hang them when possible. Laying flat can create kinks and weak spots over time. A simple jewelry tree works wonders.',
        },
      ],
    },
    'trap-jewelry-history': {
      title: 'The Culture Behind the Ice',
      author: 'FrostBoyz Team',
      readTime: '5 min read',
      date: 'January 10, 2025',
      image: 'https://images.pexels.com/photos/9026226/pexels-photo-9026226.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: [
        {
          type: 'paragraph',
          text: 'Jewelry in hip-hop isn\'t just fashion – it\'s language. Every chain tells a story of struggle, success, and street credibility. Understanding this culture is understanding why FrostBoyz exists.',
        },
        {
          type: 'heading',
          text: 'From the Streets to the Spotlight',
        },
        {
          type: 'paragraph',
          text: 'In the early days of hip-hop, jewelry was about transformation. Artists who grew up with nothing used chains and rings to show they\'d made it. It wasn\'t about showing off – it was about showing up.',
        },
        {
          type: 'paragraph',
          text: 'The bigger the chain, the bigger the statement. But it had to be real. The culture could spot fake from a mile away, and getting called out for wearing costume jewelry could end careers.',
        },
        {
          type: 'heading',
          text: 'The Trap Era Revolution',
        },
        {
          type: 'paragraph',
          text: 'Trap music changed everything. The jewelry got icier, the styles got bolder, and the attitude got harder. Cuban links became the standard. Tennis chains added sparkle. Grillz brought the flash to your smile.',
        },
        {
          type: 'paragraph',
          text: 'This wasn\'t just about money anymore – it was about energy. The right piece could change how you walked, how you talked, how the world saw you. Jewelry became armor.',
        },
        {
          type: 'heading',
          text: 'The FrostBoyz Philosophy',
        },
        {
          type: 'paragraph',
          text: 'We studied this culture because we lived it. We saw how the right piece could elevate someone\'s entire presence. But we also saw how expensive real ice could be, keeping it out of reach for the people who understood it best.',
        },
        {
          type: 'paragraph',
          text: 'FrostBoyz bridges that gap. Premium quality that respects the culture, at prices that respect the hustle. Because everyone deserves to feel that confidence, that energy, that frost.',
        },
        {
          type: 'heading',
          text: 'More Than Metal',
        },
        {
          type: 'paragraph',
          text: 'When you wear FrostBoyz, you\'re connecting to decades of cultural evolution. You\'re part of a movement that turned struggle into strength, poverty into power, and dreams into reality.',
        },
        {
          type: 'paragraph',
          text: 'That\'s why we say "Frost never melts." It\'s not just about the jewelry – it\'s about the mindset. The confidence. The culture. The legacy you carry forward.',
        },
      ],
    },
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article not found</h2>
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-600 font-medium"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Article Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8 transition-colors duration-300">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 space-x-4 mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime}
              </div>
              <span>{article.date}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 transition-colors duration-300">
          <div className="prose prose-lg max-w-none">
            {article.content.map((section, index) => (
              <div key={index} className="mb-6">
                {section.type === 'heading' && (
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8 first:mt-0">
                    {section.text}
                  </h2>
                )}
                {section.type === 'paragraph' && (
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {section.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 transition-colors duration-300">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">More Insights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(articles)
              .filter(([key]) => key !== id)
              .slice(0, 2)
              .map(([key, relatedArticle]) => (
                <Link
                  key={key}
                  to={`/insights/${key}`}
                  className="group block border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-blue-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {relatedArticle.content[0].text.slice(0, 100)}...
                  </p>
                </Link>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-6 sm:p-8 text-center text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Build Your Collection?</h3>
          <p className="text-base sm:text-lg mb-6">
            Apply what you've learned. Shop the pieces that match your energy.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-black text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Shop FrostBoyz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InsightPage;