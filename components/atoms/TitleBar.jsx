// dialog header: title on the left, a control (`end`) on the right
export default function TitleBar({ end, className = "", children }) {
  return (
    <div className={`flex items-center justify-between gap-3 border-b border-line bg-surface/85 px-5 py-3 text-lg font-semibold text-hi backdrop-blur ${className}`}>
      <div className="flex items-center gap-2">{children}</div>
      {end}
    </div>
  );
}
