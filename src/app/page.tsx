// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black text-gray-200 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-20">
        {/* subtle diagonal gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />

        {/* colored corner accents */}
        <div className="absolute top-[-6rem] left-[-6rem] h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-8rem] h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Hero PNG background */}
      <div className="mt-12 absolute top-0 left-0 w-full z-1 h-[80vh] overflow-hidden opacity-20">
        <Image
          src="/vscode.png"  // your PNG in /public/vscode-demo.png
          alt="VS Code Demo"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Logo */}
      <div className="mb-10 z-5 mt-12">
        <Image
          src="/no-bg-logo.png"
          alt="Polycode Logo"
          width={160}
          height={160}
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="relative max-w-3xl text-center z-10">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-white drop-shadow-lg">
          Collaborate. Create. <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent font-semibold">PolyCode.</span>
        </h1>
        <p className="mt-8 text-lg leading-8 text-gray-300 drop-shadow">
          <span className="text-indigo-400 font-semibold">PolyCode</span> is a lightweight VS Code extension
          for seamless teamwork, <br/><span className="text-indigo-400 font-semibold">without ever leaving your editor</span>.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=Waymond9056.polycode"
            className="rounded-lg bg-indigo-500 px-6 py-3 text-white font-medium hover:bg-indigo-600 transition"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/Waymond9056/Polycode-Extension"
            className="rounded-lg border border-gray-700 px-6 py-3 text-gray-200 font-medium hover:bg-gray-800 transition"
          >
            Github
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="mt-20 grid gap-12 max-w-5xl grid-cols-1 sm:grid-cols-2"
      >
        <div>
          <h2 className="text-2xl font-semibold text-teal-400">
            Real-Time Collaboration
          </h2>
          <p className="mt-2 text-gray-400">
            Work side by side in the same editor — instant sharing, zero setup
            friction.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-indigo-400">
            Seamless Integration
          </h2>
          <p className="mt-2 text-gray-400">
            Built directly into VS Code, so you can stay focused on writing
            code.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-violet-400">
            Secure by Design
          </h2>
          <p className="mt-2 text-gray-400">
            Collaboration without compromise — encrypted, private, and
            dependable.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-emerald-400">
            Developer Friendly
          </h2>
          <p className="mt-2 text-gray-400">
            Lightweight, fast, and distraction-free — designed for developers,
            not overhead.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="get-started"
        className="mt-24 w-full max-w-3xl rounded-xl border border-gray-800 bg-gray-900/40 px-8 py-12 text-center shadow-xl backdrop-blur"
      >
        <h2 className="text-3xl font-bold text-white">
          Start Coding Together
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Install PolyCode today and discover how effortless real-time coding
          can be.
        </p>
        <Link
          href="https://marketplace.visualstudio.com/items?itemName=Waymond9056.polycode"
          className="mt-8 inline-block rounded-lg bg-indigo-500 px-6 py-3 text-white font-medium hover:bg-indigo-600 transition"
        >
          Download Extension
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500">
        {/* © {new Date().getFullYear()} Polycode. All rights reserved. */}
      </footer>
    </main>
  );
}
