import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";

const Education = () => {
  return (
    <div className="my-12 w-full">
      <p className="text-white/50 font-medium text-xl md:text-2xl mb-4">
        <span className="mr-2">||</span>Education
      </p>
      <h2 className="text-5xl text-sub font-semibold mb-16">
        Passionate Full Stack Developer
      </h2>
      <div className="w-full flex gap-4">
        <div className="relative w-full overflow-hidden flex-1 p-4 rounded-lg">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <div>
            <h5 className="text-xl text-white mb-4">
              Bachelor of Science in Mathematics
            </h5>
            <p className="text-white/50 mb-2">
              <span className="mr-2 text-white/90">Institution:</span>{" "}
              Government Titumir College, Dhaka
            </p>
            <p className="text-white/50 mb-2">
              <span className="mr-2 text-white/90">Year:</span> 2020
            </p>
            <p className="text-white/50">
              <span className="mr-2 text-white/90">Address:</span> A.K.
              Khandakar Road, Mohakhali, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden flex-1 p-4 rounded-lg">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <div>
            <h5 className="text-xl text-white mb-4">
              Higher Secondary School Certificate (HSC)
            </h5>
            <p className="text-white/50 mb-2">
              <span className="mr-2 text-white/90">Institution:</span>{" "}
              Government Science College, Dhaka
            </p>
            <p className="text-white/50 mb-2">
              <span className="mr-2 text-white/90">Year:</span> 2012 - 2014
            </p>
            <p className="text-white/50">
              <span className="mr-2 text-white/90">Group: </span> Science
            </p>
            <p className="text-white/50">
              <span className="mr-2 text-white/90">Address: </span> 34/B, West
              Farmgate - Tejturi Bazar Rd, Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
