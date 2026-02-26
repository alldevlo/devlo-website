type WaveDividerProps = {
  tone?: "light" | "dark";
  variant?: "simple" | "layered-top" | "layered-bottom";
};

const WAVE_DARK = "#0F2B3C";
const WAVE_MEDIUM = "#4F809E";
const WAVE_LIGHT = "#AFC8D7";

export function WaveDivider({ tone = "light", variant = "simple" }: WaveDividerProps) {
  if (variant === "layered-top") {
    return (
      <div className="pointer-events-none -mb-1 h-16 w-full overflow-hidden bg-devlo-50 sm:h-20">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-full w-full" aria-hidden>
          <path d="M0,44 C170,38 330,46 480,58 C650,72 820,78 980,70 C1160,60 1310,40 1440,44 L1440,80 L0,80 Z" fill={WAVE_LIGHT} />
          <path d="M0,52 C170,46 330,54 480,64 C650,76 820,80 980,74 C1160,66 1310,48 1440,52 L1440,80 L0,80 Z" fill={WAVE_MEDIUM} />
          <path d="M0,60 C170,54 330,62 480,70 C650,80 820,84 980,78 C1160,72 1310,56 1440,60 L1440,80 L0,80 Z" fill={WAVE_DARK} />
        </svg>
      </div>
    );
  }

  if (variant === "layered-bottom") {
    return (
      <div className="pointer-events-none -mt-1 h-16 w-full overflow-hidden bg-white sm:h-20">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-full w-full" aria-hidden>
          <g transform="translate(0,80) scale(1,-1)">
            <path d="M0,44 C170,38 330,46 480,58 C650,72 820,78 980,70 C1160,60 1310,40 1440,44 L1440,80 L0,80 Z" fill={WAVE_LIGHT} />
            <path d="M0,52 C170,46 330,54 480,64 C650,76 820,80 980,74 C1160,66 1310,48 1440,52 L1440,80 L0,80 Z" fill={WAVE_MEDIUM} />
            <path d="M0,60 C170,54 330,62 480,70 C650,80 820,84 980,78 C1160,72 1310,56 1440,60 L1440,80 L0,80 Z" fill={WAVE_DARK} />
          </g>
        </svg>
      </div>
    );
  }

  const fill = tone === "dark" ? "#0b5b86" : "#f3f4f6";

  return (
    <div className="pointer-events-none h-10 w-full overflow-hidden sm:h-12">
      <svg className="block h-full w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
        <path
          d="M0,74 C95,120 195,18 300,50 C415,86 520,6 640,45 C745,79 855,34 960,56 C1080,82 1198,24 1295,46 C1370,63 1415,77 1440,90 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
