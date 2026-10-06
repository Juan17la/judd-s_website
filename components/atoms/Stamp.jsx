// an 88x31 web badge
export default function Stamp({ children }) {
  return <span className="grid h-8 w-22 place-items-center border-2 border-brand-dark bg-brand font-body text-[10px] font-bold leading-none text-black">{children}</span>;
}
