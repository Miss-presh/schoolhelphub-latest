"use client";

import Image from "next/image";
import Link from "next/link";

export default function EnhancedTutorsPage() {

  const vettingSteps = [
    { title: "Academic Credential Check", desc: "Verification of university degrees, teaching certifications, and classroom experience records.", icon: "📜" },
    { title: "Enhanced DBS Background Check", desc: "100% mandatory security screening before any tutor interacts with a student.", icon: "🛡️" },
    { title: "Live Pedagogical Auditing", desc: "Rigorous 1-on-1 test lessons evaluated by our academic coordination board for communication quality.", icon: "🎙️" },
  ];

  const featuredTutors = [
    {
      name: "Dr. Sarah Jenkins",
      title: "Senior Mathematics Specialist",
      credentials: "MSc Mathematics, PhD Quantum Mechanics (Imperial College London)",
      experience: "9+ Years Classroom Experience • 11+ & GCSE Board Specialist",
      bio: "Sarah focuses on turning math anxiety into calculated confidence, breaking down complex algebraic structures into intuitive visual blueprints.",
      image: "/tutor2.jpg",
    },
    {
      name: "Jonathan Vance, MA",
      title: "English Language & Literature Lead",
      credentials: "BA English Literature (Oxford), MA Creative Writing (Columbia)",
      experience: "7+ Years Secondary Teaching Experience • AP & IB Exam Director",
      image: "/tutor1.jpg",
    },
    {
      name: "Elena Rostova, MSc",
      title: "Advanced STEM Discipline Specialist",
      credentials: "BSc Biomedical Sciences, MSc Biochemistry (King&apos;s College London)",
      experience: "6+ Years Specialized Tutoring • Separate & Combined Sciences Board Specialist",
      bio: "Elena utilizes interactive digital mockups to make chemistry and physics deeply understandable, preparing secondary students for elite exam performance.",
      image: "/tutor3.jpg",
    },
  ];

  return (
    <div className="bg-brand-cream text-brand-textNearBlack font-sans antialiased selection:bg-brand-yellow selection:text-brand-deepGreen">
      
      {/* 1. Deep Green Premium Hero Fold */}
      <section className="py-24 bg-brand-deepGreen text-white border-b-2 border-brand-green/30 text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:200%_100%] animate-shimmer pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-yellow bg-brand-green/40 px-4 py-1.5 rounded-full border border-brand-yellow/20 inline-block">
            Meet the Elite Faculty
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight leading-tight text-white">
            Vetted Professional School Educators, <br /> 
            <span className="bg-gradient-to-r from-brand-yellow via-yellow-200 to-brand-yellow bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
              Not Casual Student Peers
            </span>
          </h1>
          <p className="text-base sm:text-lg text-brand-lightGreen/80 max-w-2xl mx-auto leading-relaxed font-medium">
            We source exclusively from the top 5% of background-checked educators to ensure academic progression and absolute lesson security.
          </p>
        </div>
      </section>

      {/* 2. Pipeline Cards */}
      <section className="py-16 bg-white border-b border-brand-lightGreen/40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-deepGreen">
              The 3-Tier Security & Vetting Protocol
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vettingSteps.map((step, idx) => (
              <div 
                key={idx} 
                style={{ animationDelay: `${idx * 150}ms` }}
                className="flex gap-4 items-start p-5 bg-brand-cream rounded-2xl border border-brand-lightGreen/60 transition-all duration-300 hover:shadow-md-brand hover:border-brand-green/30 animate-fadeIn"
              >
                <span className="text-2xl p-2.5 bg-white rounded-xl shadow-sm-brand border border-brand-lightGreen flex-shrink-0 transform transition-transform duration-300 hover:rotate-12">
                  {step.icon}
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-brand-deepGreen font-serif">{step.title}</h3>
                  <p className="text-xs text-brand-mutedSage leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Profile Matrix */}
      <section className="py-24 bg-brand-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {featuredTutors.map((tutor, idx) => (
            <div 
              key={idx} 
              style={{ animationDelay: `${(idx + 2) * 150}ms` }}
              className="bg-white border border-brand-lightGreen rounded-3xl p-6 sm:p-8 shadow-sm-brand flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 transition-all duration-300 hover:shadow-md-brand hover:-translate-y-1 group animate-fadeIn"
            >
              <div className="w-28 h-28 rounded-2xl border-2 border-brand-lightGreen shadow-inner flex-shrink-0 overflow-hidden bg-brand-faintGreen relative group-hover:border-brand-green/40 transition-colors duration-300">
                <Image
                  src={tutor.image}
                  alt={tutor.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-300 pointer-events-none" />
              </div>

              <div className="flex-grow space-y-4 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-deepGreen group-hover:text-brand-green transition-colors duration-200">
                      {tutor.name}
                    </h3>
                    <span className="text-xs font-bold text-brand-midGreen uppercase tracking-widest block mt-0.5">
                      {tutor.title}
                    </span>
                  </div>
                  <span className="text-xs font-bold bg-brand-lightGreen text-brand-deepGreen px-3 py-1.5 rounded-full border border-brand-green/10 self-center md:self-start shadow-sm">
                    ✓ Verified Faculty
                  </span>
                </div>

                <div className="text-xs font-medium space-y-2 pt-2 text-brand-textNearBlack/80 border-t border-brand-lightGreen/50">
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="text-sm">🎓</span> <strong className="text-brand-deepGreen font-bold">Credentials:</strong> {tutor.credentials}
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <span className="text-sm">🎯</span> <strong className="text-brand-deepGreen font-bold">Experience:</strong> {tutor.experience}
                  </p>
                </div>

                {tutor.bio ? (
                  <p className="text-xs sm:text-sm text-brand-mutedSage leading-relaxed italic pt-1">
                    &ldquo;{tutor.bio}&rdquo;
                  </p>
                ) : (
                  <div className="space-y-2 pt-2 max-w-xl">
                    <div className="h-3 w-full bg-gradient-to-r from-brand-cream via-brand-lightGreen/40 to-brand-cream bg-[length:200%_100%] animate-shimmer rounded" />
                    <div className="h-3 w-5/6 bg-gradient-to-r from-brand-cream via-brand-lightGreen/40 to-brand-cream bg-[length:200%_100%] animate-shimmer rounded" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Action Area */}
      <section className="py-20 bg-brand-deepGreen text-white text-center px-4 relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-lightGreen">
            Want to Find Your Student&apos;s Perfect Match?
          </h2>
          <p className="text-xs sm:text-sm text-brand-lightGreen/70 max-w-xl mx-auto leading-relaxed">
            Our educational coordinators evaluate your child&apos;s personality profile and curriculum goals to hand-select their assigned instructor.
          </p>
          <div className="pt-4">
            <Link 
              href="/free-trial" 
              className="bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-8 py-4 rounded-xl text-sm transition-all duration-300 shadow-md-brand inline-block transform hover:-translate-y-0.5 active:translate-y-0 tap-target"
            >
              Request Custom Tutor Matching
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}