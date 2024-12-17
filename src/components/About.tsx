import { Target, Heart, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Bahauddin Chishte',
    role: 'Founder & Menor',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2FBahauddinChishte&psig=AOvVaw3iWqnSIhcpNx9bze5gMjuV&ust=1734463467872000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCVt5v7rooDFQAAAAAdAAAAABAJ',
    bio: 'Former educator passionate about bridging education and employment.',
  },
  {
    name: 'Nazmul Islam',
    role: 'Operations Lead',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGPrD-7zf6g2Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720258657577?e=1740009600&v=beta&t=qHzkyom1-zUjcgSBOqPoOJZ5g1jSULqcxrPWPHg1xF8',
    bio: '10+ years experience in EdTech and skill development.',
  },
  {
    name: 'Bappy Golder',
    role: 'Cheif Advisor',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQG2ff4V8Xdzew/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694913470563?e=2147483647&v=beta&t=ghzMX3JovJWNWLdyfoLUdzDtpbtVBsAkGJerEFykV5U',
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