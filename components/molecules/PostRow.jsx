import Avatar from "../atoms/Avatar";

const when = (t) => new Date(t * 1000).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });

// one post, tweet-style. `children` = extra controls (the admin delete button).
export default function PostRow({ post, children }) {
  return (
    <div className="grid grid-cols-[44px_1fr] gap-3 border-b-2 border-dashed border-brand-dark/40 px-4 py-4 last:border-0 sm:grid-cols-[52px_1fr]">
      <Avatar className="size-11 text-xl sm:size-13" />
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2 text-sm">
          <b className="font-display text-base font-normal tracking-wide">Jud</b>
          <span className="text-muted">@1714Jud · {when(post.created)}</span>
        </div>
        <p className="mt-1 break-words whitespace-pre-wrap">{post.body}</p>
        <span className="mt-2 inline-block text-xs font-medium text-muted">via web ✦</span>
        {children}
      </div>
    </div>
  );
}
