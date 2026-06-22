export default function Testimonials() {
  const reviews = [
    {
      name: "Priya Sharma", location: "Mumbai", avatar: "👩",
      text: "FreshMart has completely changed how I shop! Vegetables are so fresh and delivery is always on time. Highly recommend to everyone!",
    },
    {
      name: "Rahul Mehta", location: "Pune", avatar: "👨",
      text: "Amazing quality! Ordered organic fruits and they arrived perfectly fresh within 2 hours. Prices are also very reasonable. Will order again!",
    },
    {
      name: "Anita Desai", location: "Nashik", avatar: "👩‍🦱",
      text: "Best grocery app I have used. Categories are well organized and finding products is super easy. Dairy products are especially excellent.",
    },
  ];

  return (
    <section style={{
      padding: "80px 48px",
      background: "linear-gradient(135deg, #f0fff4, #e8f5e9)",
      fontFamily: "sans-serif",
    }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "52px" }}>
        <div style={{
          color: "#27ae60", fontWeight: "600",
          fontSize: "13px", letterSpacing: "2px",
          textTransform: "uppercase",
        }}>Testimonials</div>
        <h2 style={{
          fontSize: "40px", fontWeight: "700",
          color: "#1a1a1a", margin: "8px 0 12px",
        }}>What Our Customers Say</h2>
        <p style={{ color: "#6b7280", fontSize: "16px" }}>
          Join thousands of happy customers across Maharashtra
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "28px",
      }}>
        {reviews.map((r) => (
          <div key={r.name} style={{
            background: "#ffffff", borderRadius: "24px",
            padding: "36px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            position: "relative",
          }}>
            <div style={{
              position: "absolute", top: "24px", right: "28px",
              fontSize: "60px", color: "#e8f5e9",
              fontFamily: "Georgia", lineHeight: 1,
            }}>"</div>

            <div style={{ color: "#f59e0b", fontSize: "18px", marginBottom: "16px" }}>
              ★★★★★
            </div>
            <p style={{
              color: "#4b5563", fontSize: "15px",
              lineHeight: "1.75", marginBottom: "28px",
            }}>{r.text}</p>

            <div style={{
              display: "flex", alignItems: "center", gap: "14px",
              borderTop: "1px solid #e8f5e9", paddingTop: "20px",
            }}>
              <div style={{
                width: "48px", height: "48px",
                background: "#f0f4f0", borderRadius: "50%",
                display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "26px",
              }}>{r.avatar}</div>
              <div>
                <div style={{ fontWeight: "700", fontSize: "15px", color: "#1a1a1a" }}>
                  {r.name}
                </div>
                <div style={{ fontSize: "13px", color: "#6b7280" }}>
                  📍 {r.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
        }
