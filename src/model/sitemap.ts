import { SitemapItem } from "../types";

export const sitemap: SitemapItem[] = [
  { path: "/", name: "Home" },
  { path: "/settings", name: "Settings" },
  { path: "/tasks", name: "Tasks" },
  { path: "/tasks/inbox", name: "Inbox" },
  { path: "/tasks/today", name: "Today" },
  { path: "/tasks/done", name: "Done" },
];