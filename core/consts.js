export const uploadPath = {
  posts: "uploads/posts",
  news: "uploads/news",
};
export const success = "success";
export const error = "error";
export const lang = "lang";
export const defaultPageSize = 10;
export const defaultPageSize2 = 12;
export const defaultLanguage = 'en';

export const current = "current";

export const male = "M";
export const female = "F";

export const eliteResourcesUrl = process.env.NODE_ENV === "production" ? "https://eliteresources.co" : "http://localhost:8080";

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
  eliteResourcesUrl,
}
