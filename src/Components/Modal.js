import React from "react";
import styled from "styled-components";

const Entire = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const DialogBox = styled.dialog`
  background-color: ${(props) => props.theme.white1};
  min-width: 700px;
  //height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  z-index: 10000;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
`; 


function Modal({ onClickToggleApplyInfo, children}) {
  return (
    <Entire>
      <DialogBox>{children}</DialogBox>
      <Backdrop
        onClick={(e) => {
          e.preventDefault();
          if(onClickToggleApplyInfo) {
            onClickToggleApplyInfo();
          }
        }}
      />
    </Entire>
  );
}

export default Modal;