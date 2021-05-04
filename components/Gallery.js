import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context";
import Swipe from "../classes/Swipe";

const Gallery = ({ images }) => {
  const theme = useContext(ThemeContext);
  const [swipeClass, setSwipeClass] = useState();
  const [activeImage, setActiveImage] = useState(null);
  const [collection, setCollection] = useState([]);
  const modal = useRef(null);
  useEffect(() => {
    setActiveImage(0);
    setCollection(images || []);
    setSwipeClass(new Swipe());
  }, []);

  useEffect(() => {
    if (modal.current) {
      window.addEventListener("resize", adjustHeight, false);
    }
    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, [activeImage]);

  const adjustHeight = () => {
    modal.current.style = `${modal.current.offsetWidth}px`;
  };

  const swipe = () => {
    const start = { ...swipeClass.swipeStart };
    const end = { ...swipeClass.swipeEnd };
    const minSwipeInPixels = 20;
    if (typeof start.x === "number") {
      const horizontalMove = start.x - end.x;
      const verticalmove = start.y - end.y;
      const moveWasHorizontal =
        Math.abs(horizontalMove) > Math.abs(verticalmove);
      if (moveWasHorizontal && Math.abs(horizontalMove) > minSwipeInPixels) {
        if (horizontalMove > 0) {
          displayNext();
        } else {
          displayPrevious();
        }
      }
    }
  };

  const displayPrevious = () => {
    activeImage === 0
      ? setActiveImage(collection.length - 1)
      : setActiveImage((prev) => prev - 1);
  };

  const displayNext = () => {
    activeImage + 1 === collection.length
      ? setActiveImage(0)
      : setActiveImage((prev) => prev + 1);
  };

  return (
    <>
      {typeof activeImage === "number" ? (
        <Modal
          ref={modal}
          onClick={displayNext}
          onTouchStart={(e) =>
            swipeClass.setStartPoints(
              e.touches[0].screenX,
              e.touches[0].screenY
            )
          }
          onTouchEnd={(e) => {
            swipeClass.setEndPoints(
              e.changedTouches[0].screenX,
              e.changedTouches[0].screenY
            );
            swipe();
          }}
          style={{
            "--height": modal.current
              ? `${modal.current.offsetWidth}px`
              : `640px`,
          }}
        >
          <img
            src={collection[activeImage].gallery_image.url}
            alt='#'
            style={{
              "--height": modal.current
                ? `${modal.current.offsetWidth}px`
                : `640px`,
            }}
          />
        </Modal>
      ) : null}
      <ThumbsWrapper>
        {collection && collection.length > 0
          ? collection.map((image, index) => {
              return (
                <StyledThumb
                  className={
                    typeof activeImage === "number" && activeImage === index
                      ? "active"
                      : ""
                  }
                  key={`${image}_${index}`}
                  onClick={() => setActiveImage(index)}
                  image={image.gallery_image.url}
                  color={theme.accent}
                  title={`gallery thumb ${index + 1}`}
                ></StyledThumb>
              );
            })
          : null}
      </ThumbsWrapper>
    </>
  );
};

const Modal = styled.aside`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: var(--height);
  background: rgba(150, 150, 150, 0.05);
  margin-top: 24px;

  img {
    max-width: 100%;
    max-height: var(--height);
  }
`;

const ThumbsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 24px 0;
  padding: 8px 0 8px;
  background: rgba(150, 150, 150, 0.05);
`;

const StyledThumb = styled.div`
  position: relative;
  width: calc(25% - 8px);
  height: 80px;
  max-width: 100px;
  // overflow: hidden;
  margin: 4px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  &.active:after {
    content: "";
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(props) => props.color};
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default Gallery;
