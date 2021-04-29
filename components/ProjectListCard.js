import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const ProjectListCard = ({
  item,
  isHovered,
  index,
  mouseOver,
  mouseOut,
  image,
  caption,
  slug,
}) => {
  const style = isHovered
    ? { opacity: "0.33" }
    : { opacity: "1", cursor: "pointer" };

  return (
    <ListCard
      key={index}
      style={style}
      onMouseOver={() => mouseOver(item)}
      onMouseOut={() => mouseOut(item)}
    >
      <Link href={`/projekt/${slug}`}>
        <a>
          <img src={image.src} alt={caption} />
        </a>
      </Link>
    </ListCard>
  );
};

const ListCard = styled.div`
  position: relative;
  border-radius: 20px;
  background-color: gray;
  padding-top: 200px;
  overflow: hidden;

  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    transition: none;
  }
`;

export default ProjectListCard;
