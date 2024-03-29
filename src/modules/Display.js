import Book from './Book';
import Library from './Library';

export default class Display {
    static renderLayout() {
        const main = document.createElement('main');
        document.body.appendChild(main);

        this.renderBookForm();
    }

    static renderBookForm() {
        const form = document.createElement('form');
        const titleLabel = document.createElement('label');
        const titleInput = document.createElement('input');
        const authorLabel = document.createElement('label');
        const authorInput = document.createElement('input');
        const pagesLabel = document.createElement('label');
        const pagesInput = document.createElement('input');
        const hasReadLabel = document.createElement('label');
        const hasReadInput = document.createElement('select');
        const hasReadYes = document.createElement('option');
        const hasReadNo = document.createElement('option');
        const submitBtn = document.createElement('button');

        titleLabel.textContent = 'Title';
        authorLabel.textContent = 'Author';
        pagesLabel.textContent = 'Pages';
        hasReadLabel.textContent = 'Read';
        submitBtn.textContent = 'Submit';

        pagesInput.type = 'number';

        hasReadYes.textContent = 'Yes';
        hasReadNo.textContent = 'No';

        hasReadInput.appendChild(hasReadYes);
        hasReadInput.appendChild(hasReadNo);

        form.appendChild(titleLabel);
        form.appendChild(titleInput);
        form.appendChild(authorLabel);
        form.appendChild(authorInput);
        form.appendChild(pagesLabel);
        form.appendChild(pagesInput);
        form.appendChild(hasReadLabel);
        form.appendChild(hasReadInput);
        form.appendChild(submitBtn);

        submitBtn.addEventListener('click', (e) => {
            const event = e;

            event.preventDefault();

            const hasRead = hasReadInput.value === 'Yes';

            Library.addBook(
                new Book(
                    titleInput.value,
                    authorInput.value,
                    pagesInput.value,
                    hasRead
                )
            );

            this.renderBooks();
        });

        const main = document.querySelector('main');
        main.appendChild(form);
    }

    static renderBooks() {
        const main = document.querySelector('main');

        if (document.querySelector('.books')) {
            document.querySelector('.books').remove();
        }

        const books = document.createElement('div');
        books.classList.toggle('books');

        Library.books.forEach((book) => {
            const container = document.createElement('div');
            const title = document.createElement('h3');
            const author = document.createElement('p');
            const pages = document.createElement('p');
            const hasRead = document.createElement('div');

            title.textContent = book.title;
            author.textContent = book.author;
            pages.textContent = book.pages;

            title.style.display = 'inline';
            author.style.display = 'inline';
            pages.style.display = 'inline';
            hasRead.style.display = 'inline-block';

            hasRead.style.width = '20px';
            hasRead.style.height = '20px';
            hasRead.style.backgroundColor = book.hasRead ? 'green' : 'red';

            container.appendChild(title);
            container.appendChild(author);
            container.appendChild(pages);
            container.appendChild(hasRead);

            books.appendChild(container);
        });

        main.appendChild(books);
    }
}
