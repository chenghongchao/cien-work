import { ImageResponse } from "next/og";

export const alt = "Cien - Social Media & Influencer Marketing Specialist";
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
          justifyContent: "space-between",
          background: "#F7F7F5",
          color: "#111111",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 999,
                background: "#111111",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 25,
                fontWeight: 700,
              }}
            >
              C
            </div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>CIEN PORTFOLIO</div>
          </div>
          <div style={{ color: "#B83A4B", fontSize: 18, fontWeight: 700 }}>SELECTED WORK / 2026</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ maxWidth: 920, fontSize: 70, lineHeight: 1.02, letterSpacing: "-0.055em", fontWeight: 700 }}>
            Social Media &amp; Influencer Marketing Specialist
          </div>
          <div style={{ color: "#666666", fontSize: 25 }}>
            Creator partnerships / Content operations / Performance analysis / Workflow design
          </div>
        </div>

        <div style={{ height: 7, width: "100%", display: "flex" }}>
          <div style={{ width: "28%", background: "#B83A4B" }} />
          <div style={{ flex: 1, background: "#111111" }} />
        </div>
      </div>
    ),
    size,
  );
}
