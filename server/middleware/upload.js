const multer = require('multer')

var fileStorageEngine = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './myuploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + Date.now() + " - " + file.originalname);
    }
})
var upload = multer({ storage: fileStorageEngine });

module.exports = upload