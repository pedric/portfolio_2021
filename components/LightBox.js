import React, { useState } from "react";
import styled from "styled-components";

const LightBox = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  return (
    <>
      <h2>LightBox</h2>
      {open && <Modal></Modal>}
    </>
  );
};

const Modal = styled.div``;

export default LightBox;
