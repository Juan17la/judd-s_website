// the green bar on top of every window (and of the project popup)
const sizes = { lg: "min-h-12 text-xl", md: "min-h-10 text-lg", sm: "min-h-9 text-base" };

export default function TitleBar({ size = "md", center, className = "", children }) {
  return <div className={`flex items-center gap-3 border-b-3 border-brand-dark bg-brand px-3 py-1.5 font-display tracking-wide text-black ${sizes[size]} ${center ? "justify-center" : ""} ${className}`}>{children}</div>;
}
