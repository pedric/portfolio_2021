import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Gallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(null);
  const [collection, setCollection] = useState([]);
  const modal = useRef(null);
  useEffect(() => {
    setActiveImage(0);
    setCollection(images || []);
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
          style={{
            "--height": modal.current
              ? `${modal.current.offsetWidth}px`
              : `640px`,
          }}
        >
          <img src={collection[activeImage].gallery_image.url} alt='#' />
        </Modal>
      ) : null}
      <ThumbsWrapper>
        {collection && collection.length > 0
          ? collection.map((image, index) => {
              return (
                <div
                  key={`${image}_${index}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={image.gallery_image.url} alt='#' />
                </div>
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

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ThumbsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 8px 0 8px;
  background: rgba(150, 150, 150, 0.05);

  > div {
    position: relative;
    width: 80px;
    height: 80px;
    overflow: hidden;
    margin: 4px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    > img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 150%;
      min-width: 100%;
      max-height: 150%;
      min-height: 100%;
    }
  }
`;

export default Gallery;
