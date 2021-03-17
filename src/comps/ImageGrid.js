import React from "react";
import UseFirestore from "../Hooks/UseFirestore";
import { motion } from "framer-motion";
const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = UseFirestore("images");

  // const deletePicture = (id) => {
  //   let pic = docs.where(`${id}`);
  //   pic.get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       doc.ref.delete(doc.id);
  //       console.log(`it is here ${doc}`);
  //     });
  //   });
  // };

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
            // onDoubleClick={() => deletePicture(doc.id)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
