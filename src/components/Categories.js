export default function Categories() {
  const categories = [
    { emoji: "🍎", name: "Fruits",     count: "85 items",  color: "#fff0f0" },
    { emoji: "🥦", name: "Vegetables", count: "120 items", color: "#f0fff4" },
    { emoji: "🥛", name: "Dairy",      count: "45 items",  color: "#f0f8ff" },
    { emoji: "🍞", name: "Bakery",     count: "60 items",  color: "#fffbf0" },
    { emoji: "☕", name: "Beverages",  count: "90 items",  color: "#f5f0ff" },
    { emoji: "🍿", name: "Snacks",     count: "110 items", color: "#fff5f0" },
  ];

  return (
    <section style={{
      padding: "72px 48px", background: "#fffdf5",
      fontFamily: "sans-serif",
    }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <div style={{
          color: "#27ae60", fontWeight: "600",
          fontSize: "13px", letterSpacing: "2px",
          textTransform: "uppercase",
        }}>Browse by Category</div>
        <h2 style={{
          fontSize: "40px", fontWeight: "700",
          color: "#1a1a1a", margin: "8px 0 12px",
        }}>What Are You Looking For?</h2>
        <p style={{ color: "#6b7280", fontSize: "16px" }}>
          Explore our wide range of fresh categories
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "20px",
      }}>
        {categories.map((cat) => (
          <div
            key={cat.name}
            style={{
              background: cat.color, borderRadius: "20px",
              padding: "32px 16px", textAlign: "center",
              cursor: "pointer", border: "2px solid transparent",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.borderColor = "#27ae60";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(26,107,60,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "44px", marginBottom: "12px" }}>{cat.emoji}</div>
            <div style={{ fontWeight: "700", fontSize: "15px", color: "#1a1a1a", marginBottom: "4px" }}>
              {cat.name}
            </div>
            <div style={{ color: "#6b7280", fontSize: "12px" }}>{cat.count}</div>
          </div>
        ))}
      </div>

    </section>
  );
}
