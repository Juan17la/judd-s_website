const base = "inline-flex cursor-pointer items-center gap-2 rounded-lg font-medium transition duration-200 hover:-translate-y-px active:translate-y-0 disabled:opacity-60";
const looks = { primary: "bg-accent text-white shadow-sm hover:brightness-110", ghost: "bg-brand-light text-hi hover:bg-raise" };
const sizes = { md: "px-4 py-2 text-sm", sm: "px-3 py-1 text-xs" };

// a <button>, or an <a> when `href` is given. `look` = primary | ghost
export default function Button({ href, size = "md", look = "primary", className = "", ...props }) {
  const classes = `${base} ${looks[look]} ${sizes[size]} ${className}`;
  return href ? <a className={classes} href={href} {...props} /> : <button className={classes} {...props} />;
}
