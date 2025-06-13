export default async function handler(req, res) {
  try {
    const response = await fetch('https://allrounderscoreboard.onrender.com/score?id=106673');
    const data = await response.json();

    // Optional: cache header (1 minute)
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch score' });
  }
}
