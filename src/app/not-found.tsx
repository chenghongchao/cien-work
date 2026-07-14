import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-shell grid min-h-[65vh] place-items-center py-20 text-center">
      <div>
        <p className="text-sm font-bold text-accent">404</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em]">
          Page not found
        </h1>
        <p className="mt-5 text-muted">该页面不存在或项目地址已发生变化。</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          返回首页
        </Link>
      </div>
    </section>
  );
}
