export type ParamsType = {
  locale: string;
};

export interface ProjectProps {
  num: string;
  title: string;
  description: string;
  stack: {
    name: string;
  }[];
  image: string;
  deploy: string;
  github: string;
}
