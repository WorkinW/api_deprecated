import multer from "multer";
import { resolve } from "path";

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const fileHash = Math.random() * 2;

          const filename = `${fileHash.toString().replace(".", "")}-${file.originalname
            }`;

          return callback(null, filename);
        },
      }),
    };
  },
};
