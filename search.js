export default async function handler(req, res) {
    const { q, l } = req.query;
    const API_KEY = '5fd36959d3ebed46321c9cf628926597'; // Your Careerjet Key
    
    // Get user details for Careerjet requirements
    const userIP = req.headers['x-forwarded-for'] || '1.1.1.1';
    const userAgent = req.headers['user-agent'] || 'Mozilla';

    const url = `https://search.api.careerjet.net/v4/query?affid=${API_KEY}&keywords=${q}&location=${l}&user_ip=${userIP}&user_agent=${userAgent}&locale_code=en_IE`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch jobs" });
    }
}
