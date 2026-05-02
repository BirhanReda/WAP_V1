import { LibraryItem } from "./libraryItem";

export class Library {
    items: LibraryItem[] = [];
    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    listAvailable(): void {
        const availableItem = this.items.filter(item => item.isAvailable);
        console.log('available items:');
        availableItem.forEach(item => console.log(item.getInfo()));



    }
    findByTitle(title: string): LibraryItem | undefined {
        return this.items.find(item => item.title === title);
    }

}