"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-white text-black flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4 text-center">BUILT FROM VISION</h1>
      <p className="text-xl text-gray-600 max-w-xl text-center mb-8">
        A visionary streetwear movement. Built for founders, creatives, and those walking in purpose.
      </p>

      <div className="flex gap-4 mb-10">
        <Card>
          <CardContent className="p-4 text-center">
            <img src="/products/vision-tee.png" alt="Vision Tee" className="w-48 h-48 object-contain mx-auto mb-4" />
            <h2 className="text-xl font-semibold">Vision Tee</h2>
            <p className="text-gray-500 text-sm mb-2">“Built From Vision. Fueled by Faith.”</p>
            <Button asChild>
              <a href="https://www.etsy.com/shop/builtfromvision" target="_blank">Shop on Etsy</a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <img src="/products/assets-crewneck.png" alt="Crewneck" className="w-48 h-48 object-contain mx-auto mb-4" />
            <h2 className="text-xl font-semibold">Assets Crewneck</h2>
            <p className="text-gray-500 text-sm mb-2">“Assets Over Algorithms”</p>
            <Button asChild>
              <a href="https://www.etsy.com/shop/builtfromvision" target="_blank">Shop on Etsy</a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Button size="lg" className="text-lg" asChild>
        <a href="https://www.etsy.com/shop/builtfromvision" target="_blank">Visit Our Etsy Store</a>
      </Button>
    </main>
  );
}
