import { Box, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";

const images = [
  {
    id: 1,
        title: "B.tech",
    blog: "jhgkjfhbdfhdhbkjhbsdkb",
  },
  {
    id: 2,
      title: "M.tech",
    blog: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
  },
  {
    id: 3,
    ImageUrl: "/assests/image/net-5.jpg",
  },
  {
    id: 4,
    ImageUrl: "/assests/image/net-4.jpg",
  },
  {
    id: 1,
    ImageUrl: "/assests/image/net-1.jpg",
  },
  {
    id: 2,
    ImageUrl: "/assests/image/net-2.jpg",
  },
  {
    id: 3,
    ImageUrl: "/assests/image/net-5.jpg",
  },
  {
    id: 4,
    ImageUrl: "/assests/image/net-4.jpg",
  },
];

const OnhoverBlog = () => {
  const [visible, setVisible] = useState(false);
  const [showScreen, setShowScreen] = useState();
  //   console.log(showScreen, "show screen ");
  const openImage = (data) => {
    setVisible(true);
    setShowScreen(data);
  };

  return (
    <>
      <Box>
        {images.map((item) => {
          console.log(item);
          return (
            <>
              <div>
                <Box key={item?.id}>
                          <Box onMouseOver={() => openImage(item)}>
                              <button>{item.title}</button>
                    {/* <img className="ImageView" src={item.ImageUrl} alt="img" /> */}
                  </Box>
                </Box>
              </div>
            </>
          );
        })}
      </Box>
      {visible && (
        <Paper className="boxvisibal">
          <Typography onClick={() => setVisible(!visible)}>X</Typography>
                  {/* <img className="imageshow" src={showScreen?.ImageUrl} alt="viewimg" /> */}
                  <Paper>{showScreen?.blog}</Paper>
        </Paper>
      )}
    </>
  );
};

export default OnhoverBlog;
