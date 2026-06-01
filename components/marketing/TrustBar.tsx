"use client";

export default function TrustBar() {
  const points = [
    { icon: "🎓", text: "Qualified UK & US School Teachers Only" },
    { icon: "🛡️", text: "100% Enhanced DBS & Background Checked" },
    { icon: "📊", text: "Detailed Progress Report After Every Single Class" },
    { icon: "⭐", text: "4.9/5 Parent Rating on Trustpilot" },
    { icon: "🎯", text: "Curriculum Aligned: 11+, KS2-4, GCSE, & US Standards" },
  ];

  return (
    <section className="bg-brand-deepGreen border-y-2 border-brand-green py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center items-center justify-center">
          {points.map((point, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col sm:flex-row items-center justify-center gap-3 px-2 ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <span className="text-2xl bg-brand-green/40 w-10 h-10 rounded-xl flex items-center justify-center shadow-inner">
                {point.icon}
              </span>
              <p className="text-xs sm:text-sm font-sans font-medium text-brand-lightGreen/90 max-w-[180px] sm:text-left leading-snug">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}