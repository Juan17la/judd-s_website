export default function Tag({ children }) {
  return (
    <span className="inline-flex items-start rounded-lg border-2 border-brand-dark bg-brand-light px-2.5 py-0.5 text-[13px] font-bold leading-tight text-ink transition hover:bg-brand hover:text-black">
      <span className="mr-px opacity-50">#</span>{children}
    </span>
  );
}
