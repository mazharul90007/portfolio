"use client";
interface AboutItem {
  label: string;
  value: string;
}

const aboutData: AboutItem[] = [
  { label: "Age", value: "28" },
  { label: "Residence", value: "Bangladesh" },
  { label: "Email", value: "mazharul90007@gmail.com" },
  { label: "Address", value: "Dhaka, Bangladesh" },
  { label: "Phone", value: "+880 1939562168" },
];

const AboutMe = () => {
  return (
    <div className="my-12">
      <p className="text-white/50 font-medium text-xl md:text-2xl mb-4">
        <span className="mr-2">||</span>About Me
      </p>
      <h2 className="text-5xl text-sub font-semibold mb-16">
        Passionate Full Stack Developer
      </h2>
      <p className="text-white/50 font-medium text-xl md:text-xl mb-4">
        Hey, there. I am{" "}
        <span className="text-white/90">Mazharul Islam Sourabh</span>, a
        passionate <span className="text-white/90">Full stack developer</span>.
        My programming journey began in January 2023, and since then, I have
        been dedicated to honing my skills and staying up-to-date with the
        latest technologies.
      </p>
      <p className="text-white/50 font-medium text-xl md:text-xl mb-4">
        What excites me most about web development is the ability to create
        interactive, user-friendly web applications that solve real-world
        problems. As I continue to grow as a developer, I am eager to work on
        more challenging projects, collaborate with other developers, and
        contribute to the ever-evolving tech landscape.
      </p>

      <div>
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-white/90 justify-between border-b border-gray-300/50 py-2"
          >
            <div className="inline-flex text-base items-center rounded-md border border-white/20 px-6 py-2  font-medium text-white">
              {item.label}
            </div>
            <div className="text-right text-lg text-white/50 font-medium">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
