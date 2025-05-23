"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";

const QRCodeCanvas = dynamic(
  () => import("qrcode.react").then((mod) => mod.QRCodeCanvas),
  {
    ssr: false,
  }
);

const LOGO_ASPECT_RATIO = 1789 / 986;
const LOGO_HEIGHT = 0.25; // 25% of QR code height

export default function Home() {
  const [text, setText] = useState<string>("");
  const [size, setSize] = useState<number>(512);
  const [showQR, setShowQR] = useState<boolean>(false);

  const handleGenerate = () => {
    if (text) {
      setShowQR(true);
    }
  };

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center">
          Generador de Código QR
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block mb-2">Texto:</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Ingrese el texto para el código QR"
            />
          </div>

          <div>
            <label className="block mb-2">Tamaño:</label>
            <input
              type="number"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full p-2 border rounded"
              min="64"
              max="1024"
            />
          </div>

          <button
            onClick={handleGenerate}
            className="w-full p-2 bg-[#0290d3] text-white rounded hover:opacity-90"
          >
            Generar QR
          </button>
        </div>

        {showQR && text && (
          <div className="space-y-4">
            <div className="flex justify-center">
              <QRCodeCanvas
                value={text}
                size={size}
                level="H"
                includeMargin={true}
                bgColor="#ffffff"
                fgColor="#0290d3"
                imageSettings={{
                  src: "/logo.png",
                  x: undefined,
                  y: undefined,
                  height: size * LOGO_HEIGHT,
                  width: size * LOGO_HEIGHT * LOGO_ASPECT_RATIO,
                  excavate: true,
                }}
              />
            </div>
            <button
              onClick={handleDownload}
              className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Guardar Imagen
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
