import { ImageResponse } from "next/og";

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
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#F7F1E8",
          color: "#162B26",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 82% 28%, rgba(221,231,222,0.95), rgba(247,241,232,0) 28%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "54px 64px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 999,
                background: "#043439",
              }}
            />
            <div
              style={{
                fontSize: 22,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#0F4C45",
              }}
            >
              Front-End Developer • UI/UX
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 48,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 650,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 92,
                  fontWeight: 800,
                  lineHeight: 0.95,
                  letterSpacing: "-0.05em",
                }}
              >
                <span>Hello, I&apos;m</span>
                <span>Brittne.</span>
              </div>

              <div
                style={{
                  marginTop: 28,
                  fontSize: 30,
                  lineHeight: 1.45,
                  color: "#3E514D",
                  maxWidth: 560,
                }}
              >
                Thoughtful interfaces, accessible UX, and polished portfolio
                projects built with Next.js and Tailwind CSS.
              </div>
            </div>

            <div
              style={{
                width: 300,
                height: 300,
                borderRadius: 999,
                background: "#DDE7DE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 22px 48px rgba(22,43,38,0.08)",
              }}
            >
              <div
                style={{
                  width: 206,
                  height: 206,
                  borderRadius: 999,
                  background: "#FBF7EF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#043439",
                  fontSize: 122,
                  fontWeight: 800,
                }}
              >
                B
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 30px",
                borderRadius: 999,
                background: "#043439",
                color: "#FFFFFF",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              Portfolio Template
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#4D5D59",
              }}
            >
              brittnevaldivia.com
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
