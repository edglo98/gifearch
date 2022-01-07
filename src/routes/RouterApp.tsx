import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../pages/404/NotFoundPage";
import { DetailsPage } from "../pages/Details/DetailsPage";
import { HomePage } from "../pages/Home/HomePage";
import { SearchPage } from "../pages/Search/SearchPage";
import { Layout } from "../theme/Layout/Layout";

export const RouterApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="search/:query" element={<SearchPage />} />
      <Route path="details/:id" element={<DetailsPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
)