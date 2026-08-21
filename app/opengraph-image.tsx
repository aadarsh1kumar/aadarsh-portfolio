import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0A0B",
          color: "#EDEDEF",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#34E37A",
            fontSize: 22,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#34E37A",
              display: "flex",
            }}
          />
          available for opportunities
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 600 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#96969E", marginTop: 20 }}>
          {site.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
