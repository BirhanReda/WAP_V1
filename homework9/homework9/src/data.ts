

export interface IBook {



    id: string;
    title: string;
    author: string;
    year: number;
    imageUrl: string;




}
export const books: IBook[] = [
    {
        id: "1",
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        year: 2022,
        imageUrl: "https://covers.openlibrary.org/b/id/8739161-M.jpg"
    },
    {
        id: "2",
        title: "The Power of Positive Thinking",
        author: "Norman Vincent Peale",
        year: 2021,
        imageUrl: "https://covers.openlibrary.org/b/id/8739191-M.jpg"
    },
    {
        id: "3",
        title: "The Power of Now",
        author: "Eckhart Tolle",
        year: 2023,
        imageUrl: "https://covers.openlibrary.org/b/id/8091343-M.jpg"
    },

]