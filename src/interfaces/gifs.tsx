import { GifsResult } from "@giphy/js-fetch-api";

export interface IGif {
  title: string;
  url: string;
  id: string | number;
}

export interface GifsResultOwn {
  data: IGif[]; // Giphy no exporta la clase IGif... 
  pagination: GifsResult['pagination'];
  meta: GifsResult['meta'];
}