import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-2xs text-ink-faint">// 404</p>
      <h1 className="text-2xl font-medium text-ink">
        This route doesn&apos;t exist.
      </h1>
      <p className="max-w-[40ch] text-sm text-ink-muted">
        The page you&apos;re looking for was moved, renamed, or never built.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-md border border-border px-4 py-2 text-sm text-ink transition-colors hover:border-border-strong hover:bg-bg-raised"
      >
        Back home
      </Link>
    </main>
  );
}
