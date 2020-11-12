export default function handler(req, res): void {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(`${Date.now()}`);
}
