import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abdullah Kmar Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#07080c",
          color: "#ffffff",
          padding: 72,
          fontFamily: "Arial",
        }}
      >
        <div style={{ fontSize: 34, color: "#2f7df6", fontWeight: 700 }}>
          Performance Marketing & Media Buying
        </div>
        <div style={{ marginTop: 24, fontSize: 86, fontWeight: 900, letterSpacing: -3 }}>
          Abdullah Kmar
        </div>
        <div style={{ marginTop: 24, maxWidth: 850, fontSize: 34, lineHeight: 1.35, color: "#cbd5e1" }}>
          Meta Ads, Google Ads, TikTok Ads, campaign strategy, and measurable growth.
        </div>
      </div>
    ),
    size,
  );
}
