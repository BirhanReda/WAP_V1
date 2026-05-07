export interface Book {

    "id": string,

    "title": string,

    "author": string,

    "year": number,

    //"imageUrl": string // new field

}
export const books: Book[] = [
    {

        id: "B001",
        title: "The Power Of Now",
        author: "Eckart Tolle",
        year: 2022
    },
    {
        id: "B002",
        title: " The Power of Postive Thinking",
        author: "Norman Vincent",
        year: 2002
    },
    {
        id: "B003",
        title: " Think And Grow Rich",
        author: "Napoleon Hill",
        year: 2019
    }
]
export default books;