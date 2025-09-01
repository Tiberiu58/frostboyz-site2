import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: 'Orders & Shipping',
      items: [
        {
          question: 'How long does shipping take?',
          answer: 'We offer worldwide shipping with delivery times of 7-15 business days. Express shipping (3-7 days) is available for an additional fee. All orders are processed within 1-2 business days.',
        },
        {
          question: 'Do you offer free shipping?',
          answer: 'Yes! We offer free worldwide shipping on all orders over 150 RON. Orders under 150 RON have a flat shipping rate of 15 RON.',
        },
        {
          question: 'Can I track my order?',
          answer: 'Absolutely. Once your order ships, you\'ll receive a tracking number via email. You can track your package through our website or the carrier\'s website.',
        },
        {
          question: 'Can I change or cancel my order?',
          answer: 'You can modify or cancel your order within 2 hours of placing it. After that, your order enters our fulfillment process. Contact us immediately at support@frostboyz.com if you need to make changes.',
        },
      ],
    },
    {
      category: 'Returns & Exchanges',
      items: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 14-day return policy from the date of delivery. Items must be unworn, in original condition, and include all original packaging. Custom or engraved items cannot be returned.',
        },
        {
          question: 'How do I return an item?',
          answer: 'Contact our support team at support@frostboyz.com to initiate a return. We\'ll provide you with a prepaid return label and instructions. Returns are free for defective items; customer-initiated returns may have a $10 processing fee.',
        },
        {
          question: 'Can I exchange for a different size or style?',
          answer: 'Yes, we offer exchanges within our 14-day return window. Contact us to arrange an exchange. Note that size options may be limited for certain pieces.',
        },
      ],
    },
    {
      category: 'Product Care',
      items: [
        {
          question: 'How do I clean my FrostBoyz jewelry?',
          answer: 'For stainless steel and brass pieces: Use a soft cloth with mild soap and water. For silver: Use a silver polishing cloth. Avoid harsh chemicals, perfumes, and lotions. Store in a dry place when not wearing.',
        },
        {
          question: 'Is FrostBoyz jewelry water-resistant?',
          answer: 'Yes, our stainless steel pieces are water-resistant and can handle everyday activities. However, we recommend removing jewelry before swimming, showering, or exercising to maintain the finish and longevity.',
        },
        {
          question: 'Will the color fade or tarnish?',
          answer: 'Our premium plating is designed to last. With proper care, your jewelry should maintain its appearance for years. We use high-quality materials and finishes to ensure durability.',
        },
        {
          question: 'Are your products hypoallergenic?',
          answer: 'Yes, all FrostBoyz jewelry is made with hypoallergenic materials. Our pieces are nickel-free and safe for sensitive skin.',
        },
      ],
    },
    {
      category: 'Sizing & Fit',
      items: [
        {
          question: 'How do I determine my chain length?',
          answer: 'Chain lengths: 18" sits at the collarbone, 20" at the chest, 22" below the chest, 24" at the sternum. For the best fit, measure an existing chain you like or use a string and ruler.',
        },
        {
          question: 'What bracelet size should I order?',
          answer: 'Measure your wrist circumference and add 0.5-1 inch for comfort. Most of our bracelets are adjustable between 7-9 inches to fit most wrist sizes.',
        },
        {
          question: 'Are your earrings suitable for sensitive ears?',
          answer: 'Yes, all our earrings use hypoallergenic posts and are designed for comfort. They\'re suitable for sensitive ears and everyday wear.',
        },
      ],
    },
    {
      category: 'Materials & Quality',
      items: [
        {
          question: 'What materials do you use?',
          answer: 'We use premium stainless steel, brass with gold/silver plating, and sterling silver. All materials are hypoallergenic, durable, and ethically sourced.',
        },
        {
          question: 'Do you offer a warranty?',
          answer: 'Yes, we offer a lifetime warranty against manufacturing defects. This covers structural issues but not normal wear, misuse, or accidental damage.',
        },
        {
          question: 'Are your diamonds/stones real?',
          answer: 'We use high-quality cubic zirconia and crystal stones that provide the iced-out look with exceptional clarity and brilliance. They\'re designed to last and maintain their sparkle.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Got questions? We got answers. Everything you need to know about FrostBoyz.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-900 text-white px-6 py-4">
                <h2 className="text-xl font-semibold">{category.category}</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={itemIndex} className="border-b border-gray-200 last:border-b-0">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
                      >
                        <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-lg mb-6">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://www.instagram.com/frostboyz.jewelry?igsh=MWE1dDFkazh2dGV1bA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Follow us on Instagram
            </a>
            <span className="text-white/50">•</span>
            <a
              href="https://www.tiktok.com/@frostboyzromania?_t=ZN-8zN3Ly3wF54&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Follow us on TikTok
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="mailto:frostboyz.jewelry@gmail.com"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;