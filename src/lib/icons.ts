// Material Symbols Outlined glyphs, addressed by codepoint rather than
// ligature text so the self-hosted font can be subset to only these icons.
export const ICONS = {
  home: "",
  inventory_2: "",
  photo_library: "",
  shopping_bag: "",
  smart_display: "",
  widgets: "",
  quiz: "",
  info: "",
  rss_feed: "",
  mail: "",
  article: "",
  arrow_forward: "",
  open_in_new: "",
  check: "",
  restaurant: "",
} as const;

export type IconName = keyof typeof ICONS;
