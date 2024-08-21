export default async function handler(req, res) {
  console.log('Token:', process.env.MY_SECRET_TOKEN); // Log the token to check
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
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
