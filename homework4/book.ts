import { LibraryItem } from "./libraryItem";

export class Book extends LibraryItem {
    constructor(id: number, title: string, public author: string, public pages: number) {
        super(id, title);
    }
    getInfo(): string {
        return `Book: ${this.title} by ${this.author} - ${this.pages} pages`;
    }

}