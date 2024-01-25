export default class Library {
    static books = [];

    static addBook(...books) {
        books.forEach((book) => {
            this.books.push(book);
        });
    }

    static deleteBook(title) {
        this.books.forEach((book) => {
            if (book.title === title) {
                this.books.splice(
                    this.books.findIndex(
                        (currentBook) => currentBook.title === title
                    ),
                    1
                );
            }
        });
    }
}
