const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Subscription success page
app.get('/subscription/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'subscription', 'success.html'));
});

// Subscription cancel page (redirect to main page)
app.get('/subscription/cancel', (req, res) => {
    res.redirect('/');
});

// Download redirect - smart link to App Store / Google Play
app.get('/download', (req, res) => {
    res.redirect('https://onelink.to/bv9k4s');
});

// Serve index.html for all other routes (SPA-style)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Rescue Radar landing page running on port ${PORT}`);
});