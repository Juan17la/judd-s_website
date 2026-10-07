import TitleBar from "../atoms/TitleBar";

const ICON = { blue: "text-tone-blue", teal: "text-tone-teal", amber: "text-tone-amber", rose: "text-tone-rose", violet: "text-tone-violet", green: "text-tone-green" };

// A titled panel. `tone` = accent colour (blue, teal, amber, rose, violet, green). `hero` = emphasised, `small` = sidebar size, `last` = no gap below, `icon` = a Phosphor icon component.
export default function Window({ title, icon: Icon, tone = "blue", hero, small, last, className = "", children, ...rest }) {
  return (
    <article className={`rounded-xl border border-line shadow-win ${hero ? "bg-surface" : "bg-brand-pale"} ${last ? "" : "mb-4"} ${className}`} {...rest}>
      <TitleBar tone={tone} size={hero ? "lg" : small ? "sm" : "md"}>
        {Icon && <Icon size={16} weight="duotone" aria-hidden="true" className={ICON[tone]} />}
        <h2 className="font-display">{title}</h2>
      </TitleBar>
      {children}
    </article>
  );
}
