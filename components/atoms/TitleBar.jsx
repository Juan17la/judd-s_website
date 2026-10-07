// window title bar: dots on the left, centred title, optional control on the right (macOS/GNOME style)
const sizes = { lg: "min-h-12 text-base", md: "min-h-10 text-sm", sm: "min-h-9 text-sm" };

// dot colours: muted macOS-style traffic lights
const DOTS = ["bg-tone-rose", "bg-tone-amber", "bg-tone-green"];
const TOPS = { blue: "border-t-tone-blue", teal: "border-t-tone-teal", amber: "border-t-tone-amber", rose: "border-t-tone-rose", violet: "border-t-tone-violet", green: "border-t-tone-green" };

export default function TitleBar({ size = "md", tone = "blue", end, className = "", children }) {
  return (
    <div className={`grid grid-cols-[4rem_1fr_4rem] items-center rounded-t-[inherit] border-t-2 ${TOPS[tone]} border-b border-line bg-linear-to-b from-raise to-brand px-3 py-1.5 text-hi ${sizes[size]} ${className}`}>
      <span aria-hidden="true" className="flex gap-1.5">{DOTS.map((c) => <i key={c} className={`size-3 rounded-full opacity-80 ${c}`} />)}</span>
      <div className="flex items-center justify-center gap-2 tracking-wide">{children}</div>
      <div className="flex justify-end">{end}</div>
    </div>
  );
}
