import { lazily } from "react-lazily";

export const AboutPageAsync = lazily(() => import("./about")).AboutPage;
