export const uploadPath = {
  posts: "uploads/posts",
  magazines: "uploads/magazines",
  news: "uploads/news",
  questionnaire: "uploads/questionnaire",
  avatars: "uploads/avatars",
  aboutUs: "uploads/about-us",
};
export const success = "success";
export const error = "error";
export const lang = "lang";
export const defaultPageSize = 10;
export const defaultPageSize2 = 12;
export const defaultLanguage = "en";

export const current = "current";

export const male = "M";
export const female = "F";

export const questionTypes = {
  C: "Checkbox",
  I: "Input",
  R: "Radio",
};

export const prefixCheckbox = "C";
export const prefixInput = "I";
export const prefixRadio = "R";

export const tokenLifetime = 24;
export const tokenStatus = {
  VALID: 1,
  EXPIRED: 2,
  NOT_FOUND: 3,
  ALREADY_USED: 4,
  EMAIL_NOT_FOUND: 5,
};

export const resetPasswordUri = "auth/reset-password";

export const eliteResourcesUrl = "https://eliteresources.co";

export default {
  uploadPath,
  success,
  error,
  lang,
  defaultPageSize,
  defaultPageSize2,
  defaultLanguage,
  current,
  male,
  female,
  questionTypes,
  prefixCheckbox,
  prefixInput,
  prefixRadio,
  tokenLifetime,
  tokenStatus,
  resetPasswordUri,
  eliteResourcesUrl,
}
