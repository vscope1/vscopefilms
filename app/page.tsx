"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
// Countdown removed to avoid hydration mismatches — static coming soon page

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-6 overflow-hidden">
      <FlickeringGrid
        className="absolute inset-0 z-0 w-full h-full"
        squareSize={4}
        gridGap={6}
        color="#ff6b35"
        maxOpacity={0.3}
        flickerChance={2}
      />
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden ring-1 ring-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative bg-gray-100">
              <Image
                src="/blackwhite.png"
                alt="hero"
                className="h-full w-full object-cover object-center sm:h-[480px]"
                width={640}
                height={480}
              />
            <div className="absolute left-6 bottom-6 text-sm text-zinc-300">About • Contact • Help</div>
          </div>

          <div className="p-10 md:p-16 flex flex-col justify-center">
            <div className="flex items-center justify-between">
              <div className="text-sm text-zinc-500">vscopefilms</div>
              <div className="text-sm text-zinc-400">Share</div>
            </div>

            <h2 className="mt-6 text-4xl font-extrabold text-zinc-900">Coming Soon</h2>
            <p className="mt-2 text-sm text-zinc-500">Stay connected — we’ll share updates and sneak peeks.</p>

            <div className="mt-8">
              <p className="text-sm text-zinc-500">Launch date coming soon — follow us for updates.</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget as HTMLFormElement);
                const email = data.get("email");
                // placeholder: wire up to your mailing service
                // eslint-disable-next-line no-console
                console.log("notify:", email);
                alert("Thanks — we will notify " + email);
              }}
              className="mt-8 flex flex-col sm:flex-row gap-3 items-center"
            >
              <input
                name="email"
                type="email"
                placeholder="Email address"
                required
                className="w-full rounded-full border border-zinc-200 px-4 py-3 text-sm text-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <Button type="submit" className="whitespace-nowrap">Notify Me</Button>
            </form>

            <div className="mt-6 text-xs text-zinc-400">© {new Date().getFullYear()} vscopefilms — All rights reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
}
