import { body } from "express-validator";

export const userSchema = [
    body("name")
        .exists()
        .notEmpty().withMessage("El nombre es requerido")
        .isString().withMessage("El nombre debe ser una cadena de texto"),

    body('lastname')
        .exists()
        .notEmpty().withMessage('El apellido es requerido')
        .isString().withMessage('El apellido no es válido'),

    body('email')
        .exists()
        .notEmpty().withMessage("El email es obligatorio")
        .isEmail().withMessage("El email no es válido"),
        
    body('password')
        .exists()
        .notEmpty().withMessage("La contraseña es obligatoria")
        .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
        .isString().withMessage('La contraseña no es válida')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/).withMessage("La contraseña debe tener al menos una letra minúscula, una letra mayúscula y un número"),
    body('fecha_nac')
        .exists()
        .notEmpty().withMessage("La fecha de nacimiento es obligatoria")
        .isDate().withMessage("La fecha de nacimiento no es válida"),

]