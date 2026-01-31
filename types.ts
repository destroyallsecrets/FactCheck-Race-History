
export interface FactSection {
  id: string;
  category: 'Economic' | 'Legal' | 'Cultural' | 'Systems';
  title: string;
  myth: string;
  fact: string;
  details: string[];
  icon: string;
  tags: string[];
}

export interface Resource {
  title: string;
  author: string;
  description: string;
  link: string;
}
