export interface TBlog {
    _id: string;
    title: string;
    content: string;
    image: string;
    author: string;
    isPublished: boolean;
    createdAt: string
  }

  import { StaticImageData } from 'next/image';

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  completionDate: string;
  image: StaticImageData | string;
  status: string;
  features: string[];
  challenges: string[];
  opinions: string[];
}
export interface TMessage {
  _id: string
  name: string,
  email: string,
  message:string,
  createdAt: string

}