export default function ProductCards() {
  const products = [
    { emoji: "🍅", name: "Organic Tomatoes", weight: "500g",  price: 45,  original: 60  },
    { emoji: "🥑", name: "Fresh Avocados",   weight: "2 pcs", price: 120, original: 150 },
    { emoji: "🥕", name: "Baby Carrots",     weight: "1 kg",  price: 55,  original: 70  },
    { emoji: "🫐", name: "Blueberries",      weight: "250g",  price: 180, original: 220 },
    { emoji: "🧀", name: "Cheddar Cheese",   weight: "200g",  price: 140, original: 180 },
    { emoji: "🍋", name: "Fresh Lemons",     weight: "6 pcs", price: 35,  original: 50  },
    { emoji: "🧅", name: "Red Onions",       weight: "1 kg",  price: 40,  original: 55  },
    { emoji: "🌽", name: "Sweet Corn",       weight: "2 pcs", price: 30,  original: 40  },
  ];

  return (
    <section style={{
      padding: "72px 48px", background: "#ffffff",
      fontFamily: "sans-serif",
    }}>

      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-end", marginBottom: "40px",
      }}>
        <div>
          <div style={{
            color: "#27ae60", fontWeight: "600",
            fontSize: "13px", letterSpacing: "2px",
            textTransform: "uppercase",
          }}>Our Products</div>
          <h2 style={{
            fontSize: "40px", fontWeight: "700",
            color: "#1a1a1a", margin: "8px 0 0",
          }}>Fresh Picks This Week</h2>
        </div>
        <button style={{
          background: "none", border: "2px solid #27ae60",
          color: "#27ae60", borderRadius: "50px",
          padding: "10px 28px", fontWeight: "600",
          cursor: "pointer", fontSize: "14px",
        }}>View All →</button>
      </div>

      {/* Products Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "24px",
      }}>
        {products.map((p) => (
          <div
            key={p.name}
            style={{
              background: "#fff", borderRadius: "20px",
              border: "1px solid #e8f5e9",
              overflow: "hidden", cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(26,107,60,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Image */}
            <div style={{
              background: "#f0f4f0", height: "160px",
              display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "64px",
            }}>{p.emoji}</div>

            {/* Body */}
            <div style={{ padding: "16px" }}>
              <div style={{ color: "#f59e0b", marginBottom: "6px" }}>★★★★★</div>
              <div style={{
                fontWeight: "600", fontSize: "15px",
                color: "#1a1a1a", marginBottom: "4px",
              }}>{p.name}</div>
              <div style={{ color: "#6b7280", fontSize: "13px", marginBottom: "12px" }}>
                {p.weight}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "20px", fontWeight: "700", color: "#1a6b3c" }}>
                    ₹{p.price}
                  </span>
                  <span style={{
                    fontSize: "13px", color: "#6b7280",
                    textDecoration: "line-through", marginLeft: "6px",
                  }}>₹{p.original}</span>
                </div>
                <button style={{
                  background: "#1a6b3c", color: "#fff",
                  border: "none", borderRadius: "50px",
                  padding: "8px 16px", cursor: "pointer",
                  fontWeight: "600", fontSize: "13px",
                }}>+ Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
        }
