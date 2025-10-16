import React from "react";
import Layout from "@theme/Layout";

export default function HelloReact() {
  return (
    <Layout title="Hello React">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          height: "50vh",
          padding: "2rem",
        }}
      >
        <h1>Hello from React!</h1>
        <p>
          Edit <code>src/pages/hello-react.tsx</code> to see this page update
          live.
        </p>
      </div>
    </Layout>
  );
}