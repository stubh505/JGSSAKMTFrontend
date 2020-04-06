import { Paragraph } from './paragraph';

export class Page {
    pageId:number;
    name:string;
    header:string;
    excerpt:string;
    paragraphs:Paragraph[];
    posted:Date;
    edited:Date;
}