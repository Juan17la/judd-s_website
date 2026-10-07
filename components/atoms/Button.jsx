const base = "inline-flex cursor-pointer items-center gap-2 rounded-md border border-line bg-raise font-semibold tracking-wide text-hi shadow-sm transition hover:border-accent hover:bg-brand-light active:translate-y-px disabled:opacity-60";
const sizes = { md: "px-4 py-1.5 text-sm", sm: "px-3 py-0.5 text-xs" };

// a <button>, or an <a> when `href` is given
export default function Button({ href, size = "md", className = "", ...props }) {
  const classes = `${base} ${sizes[size]} ${className}`;
  return href ? <a className={classes} href={href} {...props} /> : <button className={classes} {...props} />;
}
