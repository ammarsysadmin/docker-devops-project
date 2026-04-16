const express = require("express");
const client = require("prom-client");

const app = express();

client.collectDefaultMetrics();

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

// ✅ ADD THIS (VERY IMPORTANT)
app.get("/metrics", async (req, res) => {
    res.set("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
});

// ✅ IMPORTANT for Docker
app.listen(5001, '0.0.0.0', () => {
  console.log("Server running on port 5001");
});
