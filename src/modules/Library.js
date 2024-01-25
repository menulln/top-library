export default class Library {
    static books = [];

    static addBook(...books) {
        books.forEach((book) => {
            this.books.push(book);
        });
    }
}
