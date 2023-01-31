import { lazily } from "react-lazily";

export const MainPageAsync = lazily(() => import("./main")).MainPage;
