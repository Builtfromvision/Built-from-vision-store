export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-white text-black flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4 text-center">BUILT FROM VISION</h1>
      <p className="text-lg text-center mb-8">
        A visionary streetwear movement. Built for founders, creatives, and those walking in purpose.
      </p>

      <a
        href="https://www.etsy.com/shop/builtfromvision"
        className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition"
        target="_blank"
      >
        Shop on Etsy
      </a>
    </main>
  );
}
