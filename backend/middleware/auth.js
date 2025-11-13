// backend/middleware/auth.js
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';

const auth = (roles = []) => {
  return (req, res, next) => {
    try {
      // Check for authorization header
      const authHeader = req.headers['authorization'];
      if (!authHeader) return res.status(401).json({ message: 'No token provided' });

      // Extract token
      const token = authHeader.split(' ')[1];
      if (!token) return res.status(401).json({ message: 'No token provided' });

      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;

      // Check role
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Access denied' });
      }

      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
};

// ✅ Default export for ES Modules
export default auth;
