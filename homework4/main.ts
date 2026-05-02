import { Library } from './library';
import { Book } from './book';
import { Magazine } from './magazine';

const library = new Library();

library.addItem(new Book(1, 'Think And Grow Rich', 'Napoleon Hill', 431));
library.addItem(new Book(2, 'The Power Of Positive thinking', 'Norman Vincent', 352));
library.addItem(new Book(3, 'The Power Of Now ', 'Eckhart Tolle', 245));
library.addItem(new Magazine(4, 'Nature', 245));


library.listAvailable();

const book = library.findByTitle('Think and Grow Rich');

if (book) {
    book.checkout();
}
console.log("after check out");
library.listAvailable();

if (book) {
    book.returnItem();
}

console.log("after return");
library.listAvailable();

console.log("all items info");
library.items.forEach(item => console.log(item.getInfo()));






