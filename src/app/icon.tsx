import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background: "#07080c",
          color: "#ffffff",
          fontSize: 24,
          fontWeight: 900,
          fontFamily: "Arial",
          border: "4px solid #2f7df6",
        }}
      >
        AK
      </div>
    ),
    size,
  );
}
