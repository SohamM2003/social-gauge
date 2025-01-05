import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";``
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { router } from "./routes/AppRoutes";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
