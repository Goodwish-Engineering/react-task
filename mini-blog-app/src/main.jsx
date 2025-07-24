import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyRoutes from "./MyRoutes.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "../Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <MyRoutes />
    </Provider>
  </StrictMode>
);
