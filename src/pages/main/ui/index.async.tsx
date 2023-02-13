import { lazily } from "react-lazily";

export const MainPageAsync = lazily(() => import(".")).MainPage;
