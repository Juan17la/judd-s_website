// content on the left, a sidebar on the right (stacked on phones)
export default function TwoColumns({ sidebar, children }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
      <section className="min-w-0 lg:col-span-4">{children}</section>
      <aside id="social" className="grid min-w-0 grid-cols-[repeat(auto-fit,minmax(210px,1fr))] content-start gap-x-4 lg:col-span-1 lg:grid-cols-1">{sidebar}</aside>
    </div>
  );
}
