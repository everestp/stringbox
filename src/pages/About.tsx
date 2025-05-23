import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import React from 'react';

const teamMembers = [
  {
    name: "Deepak Gautam",
    position: "CEO & Co-Founder",
    bio: "Driven by a bold vision to simplify digital technology, Deepak leads our team with passion and curiosity. As a passionate emerging leader, he fosters a culture of creative problem-solving.",
    image: "/deepak.jpg",
    initials: "DG",
    social: {
      linkedin: "https://linkedin.com/in/deepakgautam",
      twitter: "https://twitter.com/deepakgautam"
    },
  },
  {
    name: "Everest Paudel",
    position: "CTO & Co-Founder",
    bio: "Everest is a tech enthusiast with a strong interest in DevOps and cloud systems, shaping our platform's core technology with fresh ideas. He architects scalable solutions with a focus on performance.",
    image: "/everest.jpeg",
    initials: "EP",
    social: {
      linkedin: "https://linkedin.com/in/everestpaudel",
    },
  },
  {
    name: "Nitik Sunam",
    position: "CFO & Co-Founder",
    bio: "Nitik brings energy and strategic thinking to our journey, focusing on smart finance and decision-making. His analytical approach helps drive sustainable growth.",
    image: "/nitik.jpg",
    initials: "NS",
    social: {
      twitter: "https://twitter.com/nitiksunam",
    },
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/20" />
            <div
              className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Learn more about our company, our mission, and the passionate team behind stringbox.org
            </p>
            <div className="mt-12 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full" />
            </div>
          </div>
        </div>

        {/* Other sections remain unchanged... */}

        {/* Our Team Section */}
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Team</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals who make stringbox.org a leader in technology solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  {/* Profile Image */}
                 <div className="relative mb-6">
  <div className="relative h-32 w-32 mx-auto transform transition-transform duration-500 group-hover:scale-110">
    {/* Profile Image */}
    <img
      src={member.image}
      alt={member.name}
      className="h-full w-full rounded-full object-cover border-4 border-white shadow-lg"
      onError={(e) => {
        const img = e.target as HTMLImageElement;
        img.style.display = 'none';
        const fallback = img.nextElementSibling as HTMLElement | null;
        if (fallback) fallback.style.display = 'flex';
      }}
    />
    {/* Fallback with Initials */}
    <div className="hidden h-full w-full rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-3xl font-bold items-center justify-center text-white shadow-lg">
      {member.initials}
    </div>
    {/* Bottom-right status dot */}
    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-4 border-white" />
  </div>
</div>


                  {/* Content */}
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-semibold text-lg mb-4">{member.position}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>

                    {/* Social Links */}
                    <div className="pt-6 flex justify-center gap-4">
                      {member.social?.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn profile of ${member.name}`}
                          className="p-3 bg-gray-100 hover:bg-blue-500 rounded-full transition-all duration-300 hover:text-white"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.03-3.06-1.866-3.06-1.867 0-2.152 1.458-2.152 2.966v5.698h-3v-11h2.884v1.509h.041c.401-.757 1.379-1.557 2.837-1.557 3.033 0 3.594 1.998 3.594 4.597v6.451z"/>
                          </svg>
                        </a>
                      )}
                      {member.social?.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Twitter profile of ${member.name}`}
                          className="p-3 bg-gray-100 hover:bg-blue-400 rounded-full transition-all duration-300 hover:text-white"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
