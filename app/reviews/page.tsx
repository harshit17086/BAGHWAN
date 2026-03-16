'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ReviewsPage() {
  const reviews = [
    { name: "Mitali Joshi", loc: "Google Review", text: "We had a wonderful experience at BaghVan The resort is beautifully maintained and surrounded by a very peaceful and refreshing atmosphere, making it a perfect place to relax and unwind." },
    { name: "Jagriti Chhimwal", loc: "Google Review", text: "I loved it! I felt at ease from the moment I stepped in. Very friendly staff, elegant decor, and a peaceful, soothing atmosphere. Ideal for both work trips and short break. It was the ideal place to relax after a long, hectic day." },
    { name: "Vedika Bisht", loc: "Google Review", text: "Just visited Baghvan and wow, the sunset view there is straight-up unreal. The whole place has this calm, luxury-in-the-wild vibe, and once the sun starts dipping behind the trees, the sky turns into pure golden magic." },
    { name: "Anshi Kaw", loc: "Google Review", text: "Great food and service. Property is very well maintained. Must visit." },
    { name: "Pranjay Rawat", loc: "Google Review", text: "Had an amazing experience at my stay there. I feel like this property being the best in Corbett." },
    { name: "Mansi Arya", loc: "Google Review", text: "I had a very pleasant stay at the Bagh Van. The rooms were clean, comfortable, and well maintained. The staff members were polite and always ready to help. The surroundings were beautiful and peaceful. The food was also delicious." },
    { name: "Chitra Bhatt", loc: "Google Review", text: "Resort gives visitors a pleasant and memorable dining experience. The place is clean, comfortable, and beautifully decorated. The staff welcome guests politely and provide friendly service. The food is fresh, tasty, and prepared with good-quality ingredients." },
    { name: "Kiran Lohani", loc: "Google Review", text: "Had a great experience at Baag Van and River Resort. The resort is very beautiful and peaceful, making it a perfect place to relax. The staff was polite, helpful, and very cooperative throughout our stay." },
    { name: "Hemu Sati", loc: "Google Review", text: "I had a wonderful stay at The Baghvan. The place was very clean and peaceful. The staff was polite and helpful, and the food was delicious. It is a great place to relax and enjoy nature. Highly recommended! 😊" }
  ];

  return (
    <div className="bg-[#F5F1E8] min-h-screen flex flex-col">
      <Header />

      <section className="pt-40 pb-20 px-4 md:px-8 text-center bg-[#2F3D24] text-[#F5F1E8]">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Guest Reviews</h1>
        <p className="text-xl max-w-2xl mx-auto font-serif text-[#C8E86C]">
          Stories from those who have touched the wild.
        </p>
      </section>

      <section className="flex-1 container mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-[#6B5F4F]/10">
              <div className="flex text-[#C8E86C] mb-6">
                {/* 5 Stars */}
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-[#6B5F4F] text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
              <div>
                <p className="text-[#2F3D24] font-bold font-serif">{review.name}</p>
                <p className="text-[#6B5F4F] text-sm uppercase tracking-widest">{review.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
