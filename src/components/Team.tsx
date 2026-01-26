import { FaLinkedin } from 'react-icons/fa';

type TeamMember = {
  name: string;
  image: string;
  linkedin: string;
};

const teamMembers: TeamMember[] = [
  { name: 'Mukunthan Mahesh', image: '/images/mukunthan-mahesh.png', linkedin: 'https://www.linkedin.com/in/mukunthan-mahesh/' },
  { name: 'Mark Luo', image: '/images/mark-luo.png', linkedin: 'https://www.linkedin.com/in/mark-luo-879a96326/' },
  { name: 'Tanish Samarawickrema', image: '/images/tanish-samarawickrema.png', linkedin: 'https://www.linkedin.com/in/tanish-samarawickrema05/' },
  { name: 'Ansh Sudani', image: '/images/ansh-sudani.png', linkedin: 'https://www.linkedin.com/in/anshsudani/' },
  { name: 'Jack Gong', image: '/images/jack-gong.png', linkedin: 'https://www.linkedin.com/in/jack-gong-639a22385/' },
  { name: 'Sid Varmalluri', image: '/images/sid-varmalluri.png', linkedin: '#' },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-20 flex flex-col items-center"
    >
      <div className="text-center max-w-5xl w-full mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 font-editorial uppercase">
          Team
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border border-[#68528D]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-full bg-black/20" />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-0.5 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-[#A5B4FC] border border-[#68528D] shadow-lg"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
              <h3 className="text-base font-medium text-slate-50">
                {member.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
