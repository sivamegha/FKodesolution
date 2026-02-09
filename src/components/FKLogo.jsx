import fkodeImg from "../pictures/fkode.jpg";

export default function FKLogo({ size = 1, showText = true }) {
  const dimension = 40 * size;

  return (
    <div className="flex items-center gap-2">
      <div
        className={`
          rounded-2xl overflow-hidden border border-white/10 bg-black/70 
          shadow-[0_0_18px_rgba(0,212,255,0.35)]
          transition-transform duration-300 ease-out
          hover:scale-150 hover:shadow-[0_0_40px_rgba(0,212,255,0.7)]
        `}
        style={{ width: dimension, height: dimension }}
      >
        <img
          src={fkodeImg}
          alt="FKode Solution Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {showText && (
        <div className="text-base md:text-lg font-extrabold">
          <span className="text-[#00d4ff]">F</span>
          <span className="text-[#ff4500]">K</span>
          <span className="text-white">ode Solution</span>
        </div>
      )}
    </div>
  );
}
