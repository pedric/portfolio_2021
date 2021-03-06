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
        <a className='no-effect'>
          <img src={image.src} alt={caption} />
        </a>
      </Link>
    </ListCard>
  );
};

const ListCard = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  padding-top: 66.6%;
  overflow: hidden;
  height: 0;

  & > a {
    position: initial;
  }

  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    max-width: 130%;
    max-height: 130%;
    transition: none;
  }
`;

export default ProjectListCard;
