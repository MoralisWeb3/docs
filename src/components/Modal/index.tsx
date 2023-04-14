import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ModalPrimitive";
import GPTPrompt from "../GPTPrompt";

const Modal = ({ children }) => {
  return (
    <Dialog>
      {children}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hey there, how can I help you today?</DialogTitle>
          <DialogDescription>
            <GPTPrompt />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
