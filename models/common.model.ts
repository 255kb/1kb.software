export type AccordionData = {
  title: string;
  items: { question: string; answer: string }[];
}[];

export type MetaData = {
  title: string;
  description: string;
  image?: string;
  ogType?: string;
  url?: string;
};

export type Training = {
  slug: string;
  title: string;
  prerequisites: string[];
  duration: number;
  dailyRate: number;
  minParticipants: number;
  meta: {
    title: string;
    description: string;
  };
  intro: string;
  tableOfContent: {
    title: string;
    items: string[];
  }[];
};
