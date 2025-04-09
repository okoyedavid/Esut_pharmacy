import { cloneElement, createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import useOutsideClick from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [modalName, setModalName] = useState("");
  const open = (name) => setModalName(name);
  const close = () => setModalName("");

  return (
    <ModalContext.Provider value={{ open, close, modalName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, name }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(name) });
}

function Window({ children, name }) {
  const { modalName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== modalName) return null;
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 max-h-[40vh] my-auto backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div
        ref={ref}
        className="relative bg-gray-50 dark:bg-gray-900  p-6 max-w-lg w-full rounded-xl shadow-2xl"
      >
        <button onClick={close} className="absolute top-2 right-2.5">
          <X size={20} />
        </button>
        {children}
      </div>
    </motion.div>,
    document.body
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error(
      "Error! trying to access the modal context outside its provider"
    );
  }

  return context;
}
