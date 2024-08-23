import { validationResult } from 'express-validator';

// Este middleware se encarga de validar los campos de los request que llegan a las rutas 
export const validator = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
};