import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../actions/modalAction";
import "./Modal.css";
import Login from "./Login";

const Modal = () => {
  let modalInlineStyle;
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const { openClose, content } = modal;

  if (openClose === "open") {
    modalInlineStyle = {
      display: "block",
    };
  } else {
    modalInlineStyle = {
      display: "none",
    };
  }

  const closeModalHandler = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return openClose === "open" ? (
    <div className="site-modal" style={modalInlineStyle}>
      <div className="modal-content">
        <div className="col right">
          <span onClick={closeModalHandler} className="close">
            &times;
          </span>
        </div>
        <div>{content.content}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
