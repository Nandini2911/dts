import { ImageResponse } from "next/og";

export const alt =
  "Digital marketing, SEO, Google Ads, Meta Ads and agency FAQs by Double Trouble Studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#F7FAFF",
          color: "#0D2444",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "720px",
            height: "720px",
            borderRadius: "999px",
            background: "#DDEBFF",
            top: "-360px",
            right: "-140px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background: "#BFD7F6",
            bottom: "-190px",
            left: "-120px",
            opacity: 0.75,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "12px 20px",
                borderRadius: "999px",
                border: "1px solid #C9DAF0",
                background: "rgba(255,255,255,0.8)",
                color: "#315E91",
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: "0.12em",
              }}
            >
              DTS KNOWLEDGE CENTRE
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 26,
                fontWeight: 800,
              }}
            >
              DTSWORLD.IN
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 78,
                lineHeight: 0.98,
                letterSpacing: "-0.055em",
                fontWeight: 900,
                maxWidth: "980px",
              }}
            >
              Frequently Asked Questions
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "26px",
                maxWidth: "980px",
                fontSize: 28,
                lineHeight: 1.35,
                color: "#38506D",
              }}
            >
              Digital Marketing · Social Media · Google Ads · Meta Ads ·
              Website SEO · PR · Events · AI Video
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}