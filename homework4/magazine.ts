import { LibraryItem } from "./libraryItem";
export class Magazine extends LibraryItem {

    constructor(id: number, title: string, public issueNumber: number) {
        super(id, title);
    }

    getInfo(): string {
        return `Magazine: ${this.title} - Issue ${this.issueNumber}`
    }
}