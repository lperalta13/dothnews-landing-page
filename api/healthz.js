export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  res.json({ ok: true, env: process.env.NODE_ENV || 'unknown' })
}
