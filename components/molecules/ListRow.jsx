// one row of a settings-style list: icon tile, title + subtitle, and `children` on the right
export default function ListRow({ icon: Icon, title, subtitle, children }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 transition-colors duration-200 hover:bg-raise/60">
      {Icon && <span className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-brand-light text-hi"><Icon size={18} weight="duotone" aria-hidden="true" /></span>}
      <div className="min-w-0 flex-1">
        <h3 className="font-medium leading-snug text-hi">{title}</h3>
        {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
