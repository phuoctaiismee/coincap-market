interface LinkItem {
  label: string;
  href: string;
  children?: LinkItem[];
}

export type { LinkItem };
