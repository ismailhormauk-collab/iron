import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { formatPrice, plans } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — abonnements de 3 à 24 mois`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/iron-tv-max-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const from = formatPrice(Math.min(...plans.map((p) => p.price)));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: 80,
          background: "radial-gradient(circle at 15% 20%, #1d3b66 0%, #070d1d 60%), #070d1d",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <img src={logoSrc} width={451} height={332} alt="" />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1.5 }}>Abonnements de 3 à 24 mois</div>
          <div style={{ fontSize: 30, marginTop: 24, color: "rgba(255,255,255,0.75)" }}>
            {`À partir de ${from} · Assistance WhatsApp et Telegram`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
