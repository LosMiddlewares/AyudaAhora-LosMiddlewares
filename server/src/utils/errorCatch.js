export const handleError = (error, res, message = "Ocurrió un error") => {
    console.error(error);
    const statusCode = error.statusCode || 400;
    res.status(statusCode).json({ message: error.message || message });
};