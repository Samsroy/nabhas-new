import { Request, Response, NextFunction } from 'express';

export default function spaMiddleware(req: Request, res: Response, next: NextFunction) {
  // Skip file requests (have extensions) and API calls
  if (req.url.match(/\.\w+$/i) || req.url.startsWith('/api/')) {
    next();
    return;
  }

  // For all other requests, continue to the next middleware
  next();
}
