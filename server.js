const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8081;

// Serve static files from the "Birthday" folder
app.use(express.static(path.join(__dirname)));

// Handle SPA routing (optional)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
