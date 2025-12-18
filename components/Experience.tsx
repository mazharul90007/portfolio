"use client";
const Experience = () => {
  return (
    <section className="py-12 w-full">
      <div className="">
        {/* Section Header */}
        <p className="text-white/50 font-medium text-xl md:text-2xl mb-2">
          <span className="mr-2">||</span>Work Experience
        </p>
        <h2 className="text-5xl text-sub font-semibold mb-16">
          My Professional Journey
        </h2>

        {/* Experience Card */}
        <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          {/* Job Title & Duration */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <h3 className="text-3xl text-white/90 font-bold">
              Backend Developer
            </h3>
            <span className="text-white/50 text-base font-medium mt-2 md:mt-0">
              06/2025 - 10/2025 | Full Time, Onsite
            </span>
          </div>

          {/* Company Info */}
          <div className="mb-6">
            <h4 className="text-2xl text-white/90 font-semibold">
              SM Technology
            </h4>
            <p className="text-white/50 text-base">
              H-14, Main Road, Block - A, Banasree, Rampura, Dhaka-1219
            </p>
          </div>

          {/* Responsibilities & Achievements */}
          <div>
            <h5 className="text-xl text-white/90 font-semibold mb-2">
              Responsibilities & Achievements:
            </h5>
            <ul className="list-disc list-inside space-y-2 text-white/50 text-lg">
              <li>
                Designed scalable REST APIs using Node.js, TypeScript, Prisma,
                PostgreSQL
              </li>
              <li>
                Implemented secure authentication and authorization using JWT
                and role-based access control
              </li>
              <li>
                Integrated payment systems, including Stripe and PayPal,
                handling real-time transactions safely
              </li>
              <li>
                Implemented AWS S3 for image/file upload and secure asset
                storage
              </li>
              <li>
                Deployed backend applications on Hostinger VPS, including Nginx
                setup, Reverse Proxy configuration, PM2 process manager, SSL
                certificate setup, Domain configuration & DNS management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
