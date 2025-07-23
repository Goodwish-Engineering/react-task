import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function Portal({ children }) {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    setContainer(el);

    return () => {
      document.body.removeChild(el);
    };
  }, []);

  if (!container) return null;

  return createPortal(children, container);
}
