import { Target, Heart, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    bio: 'Former educator passionate about bridging education and employment.',
  },
  {
    name: 'David Chen',
    role: 'Head of Education',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    bio: '10+ years experience in EdTech and skill development.',
  },
  {
    name: 'Aisha Patel',
    role: 'Student Success Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    bio: 'Dedicated to helping students achieve their full potential.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#2A2D35]">
      <div className="container mx-auto px-6">
        {/* Vision & Story Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Story
          </h2>
          <p className="text-gray-300 mb-12 text-lg">
            Born from the recognition that students need flexible earning opportunities that don't compromise their education, Earn4Edu bridges the gap between academic pursuits and financial independence.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#24272D] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#33FEA8]/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="h-6 w-6 text-[#33FEA8]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Vision</h3>
              <p className="text-gray-400">
                To create a world where every student can pursue their education without financial constraints.
              </p>
            </div>
            
            <div className="bg-[#24272D] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#33FEA8]/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Heart className="h-6 w-6 text-[#33FEA8]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mission</h3>
              <p className="text-gray-400">
                To empower students with digital skills and flexible earning opportunities while prioritizing their education.
              </p>
            </div>
            
            <div className="bg-[#24272D] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#33FEA8]/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-[#33FEA8]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Initiative</h3>
              <p className="text-gray-400">
                Building a supportive community that combines learning, earning, and growth opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Meet Our Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-[#24272D] rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#33FEA8] mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}