const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

app.get("/convert", (req, res) => {
    const value = parseFloat(req.query.value);
    const unit = req.query.unit.toUpperCase();

    if (isNaN(value) || (unit !== "C" && unit !== "F")) {
        return res.json({ error: "Invalid input" });
    }

    let result;
    if (unit === "C") {
        result = (value * 9/5) + 32;
        res.json({ input: ${value}°C, output: ${result.toFixed(2)}°F });
    } else {
        result = (value - 32) * 5/9;
        res.json({ input: ${value}°F, output: ${result.toFixed(2)}°C });
    }
});

app.listen(PORT, () => {
    console.log(Server running at http://localhost3000:${PORT});
});