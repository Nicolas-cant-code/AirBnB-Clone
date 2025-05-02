import React from "react";
import "./Modal.css";

const Modal = () => {
  let modalInlineStyle;

  const closeModalHandler = () => {};

  return (
    <div className="site-modal" style={modalInlineStyle}>
      <div className="modal-content">
        <div className="close">
          <div className="col right">
            <span onClick={closeModalHandler} className="close">
              &times;
              {/* 
              
              
              
              Attaching payloads to Actions -b TIMESTAMPP: 20:30 left
              
              
              
              
              */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
