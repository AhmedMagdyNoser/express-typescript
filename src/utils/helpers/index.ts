import { ENVIRONMENT } from "../constants";

export const isDevelopmentMode = ENVIRONMENT === "development";
export const isProductionMode = ENVIRONMENT === "production";
