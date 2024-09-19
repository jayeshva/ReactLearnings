import React from "react";

export default function PostCard({ data }) {
  return (
    <div
      style={{
        width: "600px",
        height: "auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        margin: "20px auto",
        backgroundColor: "#fff",
      }}
    >
      <p style={{ fontWeight: "bold", color: "#333" }}>UserId: {data.userId}</p>
      <p style={{ fontSize: "1.5em", color: "#e74c3c", margin: "10px 0" }}>
        {data.title}
      </p>
      <div style={{ width: "100%", marginBottom: "15px" }}>
        <p style={{ color: "#555" }}>{data.body}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "#888" }}>Views: {data.views}</p>
        <p style={{ color: "#888" }}>Likes: {data.reactions.likes}</p>
        <p style={{ color: "#888" }}>Dislikes: {data.reactions.dislikes}</p>
      </div>
      <div style={{ margin: "10px 0" }}>
        <span style={{ fontWeight: "bold" }}>Tags: </span>
        {data.tags.map((tag, index) => (
          <span key={index} style={{ color: "#3498db" }}>
            #{tag}{" "}
          </span>
        ))}
      </div>
      {data.userId === 123 && (
        <div style={{ marginTop: "15px" }}>
          <button
            style={{
              padding: "10px 15px",
              marginRight: "10px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#2ecc71",
              color: "#fff",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#27ae60")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2ecc71")}
          >
            Edit
          </button>
          <button
            style={{
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#e74c3c",
              color: "#fff",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
