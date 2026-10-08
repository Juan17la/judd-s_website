// A section: small label (icon + title, optional `meta` on the right) above a rounded card.
// `small` = sidebar spacing, `last` = no gap below, `bare` = no card around the children.
export default function Window({ title, icon: Icon, meta, small, last, bare, className = "", children, ...rest }) {
  return (
    <section className={`reveal ${last ? "" : small ? "mb-4" : "mb-7"} ${className}`} {...rest}>
      <header className="mb-2 flex items-center justify-between gap-2 px-1 text-xs font-semibold tracking-wider text-muted uppercase">
        <h2 className="flex items-center gap-1.5">{Icon && <Icon size={14} weight="bold" aria-hidden="true" />}{title}</h2>
        {meta && <span className="font-medium tracking-normal normal-case">{meta}</span>}
      </header>
      {bare ? children : <div className="card overflow-hidden">{children}</div>}
    </section>
  );
}
