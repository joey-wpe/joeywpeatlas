export default async function handler(req, res) {
  console.log('Token:', process.env.REVALIDATION_SECRET); // Log the token to check
  console.log("Received revalidation request:", req.body);
  if (req.query.secret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const path = req.query.path;

  if (!path) {
    return res.status(400).json({ message: 'Path query parameter is required' });
  }

  try {
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: 'Error revalidating', error: err.message });
  }
}
