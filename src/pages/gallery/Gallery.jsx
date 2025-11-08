// import  { useState, useEffect } from "react";
// import axios from "axios";
// import styles from "./Gallery.module.css";

// const Gallery = () => {
//   const [images, setImages] = useState([]);
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchImages = async () => {
//     const res = await axios.get("http://localhost:8000/api/gallery/upload/");
//     setImages(res.data);
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!file) return alert("Please select an image!");

//     const formData = new FormData();
//     formData.append("image", file);

//     setLoading(true);
//     try {
//       await axios.post("http://localhost:8000/api/gallery/upload", formData);
//       fetchImages();
//       setFile(null);
//     } catch (error) {
//       console.error("Upload failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={styles.gallerySection}>
//       <h2 className={styles.title}>📸 Gallery</h2>

//       <form onSubmit={handleUpload} className={styles.uploadForm}>
//         <input
//           type="file"
//           onChange={(e) => setFile(e.target.files[0])}
//           className={styles.fileInput}
//           accept="image/*"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className={styles.uploadButton}
//         >
//           {loading ? "Uploading..." : "Upload Image"}
//         </button>
//       </form>

//       <div className={styles.galleryGrid}>
//         {images.map((img, i) => (
//           <div key={i} className={styles.imageCard}>
//             <img src={img} alt={`Uploaded ${i}`} className={styles.image} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;






import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/gallery");
      setImages(res.data);
    } catch (error) {
      console.error(" Fetch images failed:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  

  return (
    <div className={styles.gallerySection}>
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.galleryGrid}>
        {images.map((img, i) => (
          <div key={i} className={styles.imageCard}>
            <img src={img} alt={`Uploaded ${i}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
