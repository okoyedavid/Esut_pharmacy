import { useEffect, useRef } from "react";

function useOutsideClick(close) {
  const ref = useRef();

  useEffect(() => {
    function outsideClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    }

    document.addEventListener("click", outsideClick, true);

    return () => document.removeEventListener("click", outsideClick, true);
  }, [close]);

  return ref;
}

export default useOutsideClick;
