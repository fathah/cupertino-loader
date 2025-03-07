import React from "react";

interface CupertinoLoaderProps {
  size?: number;
  color?: string;
}

const CupertinoLoader: React.FC<CupertinoLoaderProps> = ({
  size = 54,
  color = "gray-500",
}) => {
  const bars = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div
      className="relative"
      style={{ width: size, height: size, borderRadius: "10px" }}
    >
      {bars.map((bar) => (
        <div
          key={bar}
          className={`absolute left-1/2 top-[30%] w-[8%] h-[24%] bg-${color} opacity-0 rounded-full shadow-md animate-cupertino`}
          style={{
            transform: `rotate(${(bar - 1) * 30}deg) translate(0, -130%)`,
            animationDelay: `-${1.2 - bar * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default CupertinoLoader;
