import rateLimit from "express-rate-limit";

const limiter = (duration, limit) => {
  return rateLimit({
    windowMs: duration,
    max: limit,
    standardHeaders: true,
    legacyHeaders: false,
  });
};

export default limiter;
