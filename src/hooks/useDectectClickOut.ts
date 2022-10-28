import { useRef, useState, useEffect } from "react";

const useDetectClickOut = () => {
  const [show, setShow] = useState(false);
  const triggerRef = useRef(null);
  const nodeRef = useRef(null);

  const handleDetectClickOut = (e) => {
    if (
      triggerRef.current &&
      triggerRef.current.contains(e.target) &&
      nodeRef.current
    ) {
      return setShow(false);
    }
    if (triggerRef.current && triggerRef.current.contains(e.target)) {
      return setShow(true);
    }
    if (nodeRef.current && !nodeRef.current.contains(e.target)) {
      return setShow(false);
    }
  };
  const handleHideDropdown = (e) => {
    if (e.key === "Escape") {
      setShow(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleDetectClickOut);
    document.body.addEventListener("keydown", handleHideDropdown);

    return () => {
      document.body.removeEventListener("click", handleDetectClickOut);
      document.body.addEventListener("keydown", handleHideDropdown);
    };
  });

  return { show, setShow, triggerRef, nodeRef };
};

export default useDetectClickOut;
