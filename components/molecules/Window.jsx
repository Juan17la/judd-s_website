import TitleBar from "../atoms/TitleBar";

// A titled panel. `hero` = the big white one, `small` = sidebar size, `last` = no gap below.
export default function Window({ title, hero, small, center, last, className = "", children, ...rest }) {
  const look = hero ? "bg-white shadow-hard-lg" : "bg-brand-pale/80 shadow-hard";
  return (
    <article className={`border-3 border-brand-dark rounded-md ${look} ${last ? "" : "mb-4"} ${className}`} {...rest}>
      <TitleBar size={hero ? "lg" : small ? "sm" : "md"} center={center}><h2><span aria-hidden="true">~ </span>{title}<span aria-hidden="true"> ~</span></h2></TitleBar>
      {children}
    </article>
  );
}
