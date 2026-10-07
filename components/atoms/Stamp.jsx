// an 88x31 web badge
export default function Stamp({ children }) {
  return <span className="grid h-8 w-22 place-items-center border border-line bg-brand font-mono text-[10px] font-bold leading-none text-hi">{children}</span>;
}
