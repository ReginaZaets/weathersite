import { Route, Routes } from "react-router-dom";
import { paths } from "./lib/paths.ts";
import MainPage from "./components/page/MainPage.tsx";
import NotFoundPage from "./components/page/NotFoundPage.tsx";

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path={paths.MAIN} element={<MainPage />} />
      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
