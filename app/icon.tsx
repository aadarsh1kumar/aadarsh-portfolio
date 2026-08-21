import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#0A0A0B",
          borderRadius: 6,
          color: "#34E37A",
          fontSize: 15,
          fontWeight: 600,
          fontFamily: "monospace",
        }}
      >
        AK
      </div>
    ),
    { ...size }
  );
}
