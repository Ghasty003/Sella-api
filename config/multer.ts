import multer from "multer";
import path from "path";

export default multer({
  storage: multer.diskStorage({}),
  fileFilter(req, file, cb) {
    const extention = path.extname(file.originalname);

    if (
      extention !== ".jpg" &&
      extention !== ".png" &&
      extention !== ".gif" &&
      extention !== ".jpeg"
    ) {
      return cb(new Error("File type is not supported"));
    }

    cb(null, true);
  },
});
