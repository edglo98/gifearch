/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GIPHY_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}