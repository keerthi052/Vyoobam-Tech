import React from "react";
import image from "../assets/CTA.jpg"
export default function CTA() {
  return (
    <section
      style={{
        background: "linear-gradient(90deg, #f6e7ff 0%, #e3eaff 100%)",
        borderRadius: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "3rem 2.5rem",
        margin: "2rem auto",
        maxWidth: "960px",
        width:"100%",
        boxShadow: "0 8px 32px rgba(80, 80, 120, 0.14)",
      }}
    >
      {/* Left: Text Content */}
      <div style={{ maxWidth: "420px" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "1rem",
            color: "#22223b",
            lineHeight: "1.2",
            letterSpacing: "-1px",
          }}
        >
          From the Spark Of An Idea To Mesurable Results
        </h2>
        <p style={{ fontSize: "1rem", color: "#37385b", marginBottom: "2rem" }}>
          Event great transformation begins with an idea.we bring that idea to life with cutting edge technology,seamless execution,and mesurable outcomes that help your business thrive
        </p>
        <button
          style={{
            padding: "0.75rem 2rem",
            background: "#2054ef",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: "pointer",
            outline: "none",
          }}
        >
          Get started
        </button>
      </div>
      {/* Right: Meeting Image/Mockup */}
      <div>
        <img
          src={image} // Replace with your image path
          alt="Meeting screenshot"
          style={{
            borderRadius: "18px",
            boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
            maxWidth: "340px",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </section>
  );
}
