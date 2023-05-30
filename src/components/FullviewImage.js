import { Paper } from "@material-ui/core";
import { ImageGroup, Image } from "react-fullscreen-image";

const images = [
  "/assests/image/net-1.jpg",
  "/assests/image/net-2.jpg",
  "/assests/image/net-5.jpg",
  "/assests/image/net-2.jpg",
  "/assests/image/net-5.jpg",
  "/assests/image/net-1.jpg",
  "/assests/image/net-2.jpg",
  "/assests/image/net-5.jpg",
  "/assests/image/club1.jpg",
  "/assests/image/net-1.jpg",
  "/assests/image/net-2.jpg",
  "/assests/image/net-5.jpg",
  "/assests/image/net-2.jpg",
  "/assests/image/net-5.jpg",
  "/assests/image/net-1.jpg",
  "/assests/image/net-2.jpg",
  "/assests/image/net-5.jpg",
  "/assests/image/club1.jpg",
  "/assests/image/net-1.jpg",
  "/assests/image/net-2.jpg",
  "/assests/image/net-5.jpg",
  "/assests/image/net-2.jpg",
  "/assests/image/net-5.jpg",
];

export default function FullviewImage() {
  return (
    <ImageGroup>
      <ul className="images">
        {images.map((i) => (
          <li key={i}>
            <Image
              src={i}
              alt="nature"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </li>
        ))}
      </ul>
    </ImageGroup>
  );
}
