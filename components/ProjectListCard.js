import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ProjectListCard = ({
  item,
  isHovered,
  index,
  mouseOver,
  mouseOut,
  image,
  caption,
}) => {
  const style = isHovered
    ? { opacity: "0.33" }
    : { opacity: "1", cursor: "pointer" };

  return (
    <ListCard
      key={index}
      style={style}
      className={"portfolio"}
      onMouseOver={() => mouseOver(item)}
      onMouseOut={() => mouseOut(item)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        layout='fill'
        sizes='(max-width: 600px)500px,(max-width: 2000px)400px'
      />
      {/* <img src={image.src} alt={image.alt} /> */}
      {/* <figure> */}
      {/* <Image src={image.src} alt={image.alt} layout='fill' /> */}
      <img src={image.src} alt={caption} />
      {/* <figcaption>
          <h2>{caption}</h2>
        </figcaption>
      </figure> */}
    </ListCard>
  );
};

export default ProjectListCard;

const ListCard = styled.div`
  position: relative;
  border-radius: 20px;
  background-color: gray;
  max-width: 400px;
  min-width: 300px;
  padding-top: 56.6%;
  overflow: hidden;

  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`;
