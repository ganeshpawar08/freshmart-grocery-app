export default function Footer() {
  const columns = [
    { title: "Quick Links", links: ["Home", "Shop", "About Us", "Blog", "Contact"] },
    { title: "Categories",  links: ["Fruits", "Vegetables", "Dairy", "Bakery", "Beverages"] },
    { title: "Support",     links: ["FAQ", "Shipping Info", "Returns", "Track Order", "Privacy Policy"] },
  ];

  return (
    <footer style={{
      background: "#0d2b1a",
      color: "rgba(255,255,255,0.75)",
      padding: "64px 48px 32px",
      fontFamily: "sans-serif",
    }}>

      {/* Main Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr",
        gap: "48px", marginBottom: "48px",
      }}>

        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{
              width: "36px", height: "36px",
              background: "linear-gradient(135deg, #27ae60, #1a6b3c)",
              borderRadius: "10px", display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: "18px",
            }}>🌿</div>
            <span style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff" }}>
              FreshMart
            </span>
          </div>
          <p style={{
            fontSize: "14px", lineHeight: "1.8",
            marginBottom: "24px", maxWidth: "280px",
          }}>
            Delivering farm-fresh groceries straight to your doorstep.
            Quality you can taste, freshness you can trust.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            {["📘", "📸", "🐦", "▶️"].map((s, i) => (
              <div key={i} style={{
                width: "36px", height: "36px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "50%", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "16px", cursor: "pointer",
              }}>{s}</div>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <div style={{
              color: "#ffffff", fontWeight: "700",
              fontSize: "15px", marginBottom: "20px",
            }}>{col.title}</div>
            <ul style={{
              listStyle: "none", padding: 0, margin: 0,
              display: "flex", flexDirection: "column", gap: "12px",
            }}>
              {col.links.map((l) => (
                <li key={l} style={{ fontSize: "14px", cursor: "pointer" }}>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "28px", display: "flex",
        justifyContent: "space-between",
        alignItems: "center", fontSize: "13px",
      }}>
        <span>© 2025 FreshMart. All rights reserved. Made with 💚</span>
        <div style={{ display: "flex", gap: "8px", fontSize: "22px" }}>
          <span>💳</span><span>📱</span><span>💵</span><span>🏦</span>
        </div>
      </div>

    </footer>
  );
                }
