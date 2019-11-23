require("dotenv").config();

const server = {
  isDev: false,
  port: process.env.HTTP_PORT,
  sslPort: process.env.HTTPS_PORT,
  baseUrl: process.env.BASE_URL,
  name: "hrgulf.org",
  description: "Portal in hrgulf.org",
  author: "Zhenlong J.",
  secret: "hrgulf@@",
  sslKey: "./sslcert/server.key",
  sslCert: "./sslcert/1e720c418ffe9875.crt",
  sslCA: "./sslcert/gd_bundle-g2-g1.crt",
  environment: process.env.NODE_ENV,
};
const mysql = {
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};
const session = {
  name: "knowledge.hrgulf.org",
  key: "knowledge.hrgulf.org",
  secret: "knowledge.hrgulf.org@@",
  secretAdmin: "knowledge.hrgulf.org_admin@@",
};
const dbTblName = {
  users: "users",
  admins: "admins",
  posts: "posts",
  comments: "comments",
  comments_count: "comments_count",
  news: "news",
  video: "video",
};

export {
  server,
  mysql,
  session,
  dbTblName,
}
export default {
  server,
  mysql,
  session,
  dbTblName,
}
