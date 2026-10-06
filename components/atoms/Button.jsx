const base = "inline-block cursor-pointer rounded-full border-2 border-brand-dark bg-white font-display tracking-wide text-black shadow-press transition hover:bg-brand hover:text-black active:translate-y-0.5 active:shadow-none disabled:opacity-60";
const sizes = { md: "px-5 py-1.5 text-base", sm: "px-3 py-0.5 text-sm" };

// a <button>, or an <a> when `href` is given
export default function Button({ href, size = "md", className = "", ...props }) {
  const classes = `${base} ${sizes[size]} ${className}`;
  return href ? <a className={classes} href={href} {...props} /> : <button className={classes} {...props} />;
}
