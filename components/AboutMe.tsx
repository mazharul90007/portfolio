"use client";
import {
  LuUser,
  LuMapPin,
  LuMail,
  LuPhone,
  LuCalendar,
  LuInfo,
} from "react-icons/lu";

const aboutData = [
  { label: "Age", value: "28", icon: LuCalendar },
  { label: "Residence", value: "Bangladesh", icon: LuMapPin },
  { label: "Email", value: "mazharul90007@gmail.com", icon: LuMail },
  { label: "Phone", value: "+880 1939562168", icon: LuPhone },
];

const AboutMe = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Subtle background glow to match Hero */}
      <div className="absolute top-1/2 -right-20 w-72 h-72 bg-indigo-600/5 blur-[120px] rounded-full -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Story & Narrative */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-indigo-500 font-bold tracking-[0.2em] uppercase text-xs mb-6">
            <span className="w-10 h-px bg-indigo-500"></span>
            About Me
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Passionate <br />
            <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h2>

          <div className="space-y-6 text-white/50 text-lg md:text-xl leading-relaxed">
            <p>
              Hey there! I am{" "}
              <span className="text-white font-medium">
                Mazharul Islam Sourabh
              </span>
              . My programming journey ignited in early 2023, fueled by a deep
              curiosity for how elegant code transforms into impactful digital
              experiences.
            </p>
            <p>
              I specialize in building{" "}
              <span className="text-indigo-400/80">
                user-centric applications
              </span>{" "}
              that bridge the gap between complex backend logic and
              pixel-perfect frontends. For me, coding isn&apos;t just about
              syntax—it&apos;s about solving real-world problems.
            </p>
          </div>
        </div>

        {/* Right Side: Bento Info Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/[0.02] transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <item.icon size={20} />
              </div>
              <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                {item.label}
              </p>
              <p className="text-white/90 font-medium text-sm truncate">
                {item.value}
              </p>
            </div>
          ))}

          {/* Large Address Card */}
          <div className="sm:col-span-2 p-8 rounded-[2rem] bg-linear-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 relative overflow-hidden group">
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-indigo-400 text-xs uppercase tracking-widest font-bold mb-2">
                  Location
                </p>
                <p className="text-white text-2xl font-bold">
                  Dhaka, Bangladesh
                </p>
              </div>
              <LuMapPin
                className="text-indigo-500/50 group-hover:text-indigo-500 group-hover:rotate-12 transition-all"
                size={40}
              />
            </div>
            {/* Decorative Background Glow */}
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
