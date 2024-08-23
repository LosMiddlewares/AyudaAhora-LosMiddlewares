import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

export const createJWT = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, config.SECRET_KEY, (err, token) => {
      if (err) {
        reject('Error while creating the token')
      };

      resolve({ token });
    });
  });
};