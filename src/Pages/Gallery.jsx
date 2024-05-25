import { useEffect, useState } from "react";
import Masonry,{ResponsiveMasonry} from "react-responsive-masonry";


export default function Gallery() {
  const images = [

      "gallery1.jpg",
      "gallery2.png",
    "gallery3.png",
    "gallery4.png",
    "gallery5.png",
    "gallery6.png",
    "gallery7.jpg",
    "gallery8.png",
    "gallery9.png",
    "gallery10.png",
    "gallery11.png",
    "gallery12.png",
    "gallery13.png",
    "gallery14.png",
    "gallery15.png",
    "gallery16.png",
    "gallery17.png",
    "gallery18.png",
    "gallery19.png",
    "gallery20.png",
    "gallery21.png",
    "gallery22.png",
    "gallery23.png",
    "gallery24.png",
    "gallery25.png",
    "gallery26.png",
    "gallery27.png",
    "gallery28.png",
    "gallery29.png",
    "gallery30.jpg",
    "gallery31.jpg",
    "gallery32.png",
    "gallery33.png",
    "gallery34.jpg",
    "gallery35.png",
    "gallery36.jpg",
    "gallery37.png",
    "gallery38.jpg",
    "gallery39.png",
    "gallery40.png",
    "gallery41.jpg",
    "gallery42.jpg",
    "gallery43.jpg",
    "gallery44.png",
    "gallery45.png",
    "gallery46.png",
    "gallery47.png",
    "gallery48.jpg",
    "gallery49.jpg",
    "gallery50.jpg",
    "gallery51.jpg",
    "gallery52.jpg",
    "gallery53.jpg",
    "gallery54.jpg",
    "gallery55.png",
    "gallery56.png",
    "gallery57.png",
    "gallery59.png",
    "gallery60.png",
    "gallery61.png",
  ];
  const [files, setFiles] = useState();
  useEffect(() => {
    fetch("./gallery")
      .then((response) => response)
      .then((data) => setFiles(data))
      .catch((error) => console.error("Error fetching gallery files:", error));
  }, []);
  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <div className="container mx-auto py-10  gap-4 px-5">
      <ResponsiveMasonry  columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}>
      <Masonry className="w-full"  style={{width:"100%"}}>
      {images?.map((file, index) => (
        <img
          key={index}
          src={`/gallery/${file}`}
          alt={file}
          className="gallery-image rounded-lg m-3"
        />
      ))}
      </Masonry>
      </ResponsiveMasonry>

     
    </div>
  );
}
