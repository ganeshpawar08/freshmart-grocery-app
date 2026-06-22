export default function HeroSection() {
  const fruits = [
    { emoji: "🍎", name: "Apples",   price: "₹80/kg" },
    { emoji: "🥦", name: "Broccoli", price: "₹60/kg" },
    { emoji: "🥛", name: "Milk",     price: "₹55/L"  },
    { emoji: "🍌", name: "Bananas",  price: "₹40/dz" },
  ];

  return (
    <section style={{
      background: "linear-gradient(135deg, #0d4c2a, #1a6b3c, #27ae60)",
      minHeight: "520px", display: "flex",
      alignItems: "center", padding: "60px 48px",
      position: "relative", overflow: "hidden",
      fontFamily: "sans-serif",
    }}>

      {/* Background circles */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "rgba(168,224,99,0.12)",
      }} />

      {/* Content */}
      <div style={{ maxWidth: "560px", position: "relative", zIndex: 2 }}>

        <div style={{
          display: "inline-block",
          background: "rgba(168,224,99,0.2)",
          border: "1px solid rgba(168,224,99,0.4)",
          color: "#a8e063", borderRadius: "50px",
          padding: "6px 16px", fontSize: "13px",
          fontWeight: "600", marginBottom: "24px",
        }}>🌱 100% Fresh & Organic</div>

        <h1 style={{
          fontSize: "56px", fontWeight: "900",
          color: "#ffffff", lineHeight: "1.1",
          margin: "0 0 20px 0",
        }}>
          Farm Fresh,<br />
          <span style={{ color: "#a8e063" }}>Delivered</span><br />
          to Your Door
        </h1>

        <p style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: "18px", lineHeight: "1.7",
          margin: "0 0 36px 0",
        }}>
          Get the freshest vegetables, fruits, dairy & more —
          straight from local farms. Same-day delivery available.
        </p>

        <div>
          <button style={{
            background: "#a8e063", color: "#1a1a1a",
            border: "none", borderRadius: "50px",
            padding: "16px 36px", fontSize: "16px",
            fontWeight: "700", cursor: "pointer", marginRight: "16px",
          }}>🛒 Shop Now</button>

          <button style={{
            background: "rgba(255,255,255,0.12)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "50px", padding: "16px 36px",
            fontSize: "16px", cursor: "pointer",
          }}>📦 View Deals</button>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: "40px", marginTop: "48px",
          paddingTop: "28px",
          borderTop: "1px solid rgba(255,255,255,0.15)",
        }}>
          {[
            { n: "15K+", l: "Happy Customers" },
            { n: "500+", l: "Products" },
            { n: "2Hr",  l: "Fast Delivery" },
          ].map((s) => (
            <div key={s.l}>
              <span style={{
                color: "#a8e063", fontSize: "28px",
                fontWeight: "700", display: "block",
              }}>{s.n}</span>
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fruit Cards */}
      <div style={{
        position: "absolute", right: "48px", top: "50%",
        transform: "translateY(-50%)",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "16px", zIndex: 2,
      }}>
        {fruits.map((f) => (
          <div key={f.name} style={{
            background: "rgba(255,255,255,0.12)",
            borderRadius: "20px", padding: "24px",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.15)",
          }}>
            <div style={{ fontSize: "40px", marginBottom: "8px" }}>{f.emoji}</div>
            <div style={{ color: "#fff", fontSize: "13px", fontWeight: "600" }}>{f.name}</div>
            <div style={{ color: "#a8e063", fontSize: "12px", marginTop: "4px" }}>{f.price}</div>
          </div>
        ))}
      </div>

    </section>
  );
    }
