function Title({
  category,
  title1,
  title2,
}: {
  category: string;
  title1: string;
  title2: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 text-indigo-500 font-bold tracking-[0.2em] uppercase text-xs mb-6">
        <span className="w-10 h-px bg-indigo-500"></span>
        {category}
      </div>

      <h2 className="text-4xl md:text-6xl font-bold text-white/90 mb-8 tracking-tight">
        {title1} <br />
        <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
          {title2}
        </span>
      </h2>
    </div>
  );
}

export default Title;
