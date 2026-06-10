import { useState } from "react";

export default function Navbar() {
  const [cartCount] = useState(3);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "#ffffff",
      borderBottom: "1px solid #e8f5e9",
      display: "flex", alignItems: "center",
      justifyContent: "space-between",
      padding: "0 48px", height: "72px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      fontFamily: "sans-serif",
    }}>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: "40px", height: "40px",
          background: "linear-gradient(135deg, #27ae60, #1a6b3c)",
          borderRadius: "12px", display: "flex",
          alignItems: "center", justifyContent: "center", fontSize: "20px",
        }}>🌿</div>
        <span style={{
          fontSize: "22px", fontWeight: "700", color: "#1a6b3c",
        }}>FreshMart</span>
      </div>

      {/* Links */}
      <ul style={{
        display: "flex", gap: "32px",
        listStyle: "none", margin: 0, padding: 0,
      }}>
        {["Home", "Shop", "Deals", "About Us", "Contact"].map((item) => (
          <li key={item}>
            <a style={{
              color: "#1a1a1a", textDecoration: "none",
              fontSize: "15px", fontWeight: "500", cursor: "pointer",
            }}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Cart */}
      <button style={{
        position: "relative", background: "#1a6b3c",
        color: "#ffffff", border: "none", borderRadius: "50px",
        padding: "10px 24px", cursor: "pointer",
        fontWeight: "600", fontSize: "14px",
      }}>
        🛒 Cart
        <span style={{
          position: "absolute", top: "-6px", right: "-6px",
          background: "#f39c12", color: "#fff",
          borderRadius: "50%", width: "20px", height: "20px",
          fontSize: "11px", display: "flex",
          alignItems: "center", justifyContent: "center",
        }}>{cartCount}</span>
      </button>

    </nav>
  );
    }
