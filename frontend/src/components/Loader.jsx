import React from "react";

const Loader = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#fff",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      zIndex: 9999
    }}>
      <h1 className="text-4xl text-gray-700 w-full text-center" style={{ marginBottom: "24px" }}>in-house</h1>
      <div style={{
        border: "8px solid #f3f3f3",
        borderTop: "8px solid #3498db",
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        animation: "spin 2s linear infinite"
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
