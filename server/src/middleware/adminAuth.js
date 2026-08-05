export const requireAdmin = (req, res, next) => {
  const configuredToken = process.env.ADMIN_TOKEN;

  if (!configuredToken) {
    return res.status(403).json({ message: "ADMIN_TOKEN is not configured." });
  }

  const authHeader = req.get("authorization") || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

  if (token !== configuredToken) {
    return res.status(401).json({ message: "Unauthorized." });
  }

  next();
};
