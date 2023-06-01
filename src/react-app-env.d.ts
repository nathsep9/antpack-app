/// <reference types="vite/client" />
interface ImportMetaEnv {
  NODE_ENV: "development" | "production" | "test";
  VITE_API_URL: string;
}
