
const storage = multer.diskStorage({ // medio de almacenamiento
    destination: './public/uploads',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname); // usamos file
        cb(null, file.fieldname + '-' + uniqueSuffix + ext); // añadimos un sufijo unico al nombre del archivo para no pisar otros
    }
})

// filtro de formatos de archivos permitidos
const fileFilter = (res, file, cb) => {
    const fileTypes = /jpeg|jpg|png/; // extensiones permitidas
    const mimeType = fileTypes.test(file.mimetype);
    const exName = fileTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimeType && exName) {
        return cb(null, true);
    } else {
        cb(new Error('Tipo de archivo no soportado'), false);
    }
}

const upload = multer({ storage, fileFilter });