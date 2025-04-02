// Sample data for books
const books = [
    {
        id: 1,
        titre: "Le Petit Prince",
        auteur: "Saint-Exupéry",
        description: "Un livre pour toutes les générations.",
        prix: 120,
        image: "https://m.media-amazon.com/images/I/71t+4m5lz0L._SL1500_.jpg",
        anneedition: 1943,
        commentaires: ["Magnifique!", "Un classique."],
        likes: 450
    },
    {
        id: 2,
        titre: "L'Étranger",
        auteur: "Camus",
        description: "Un roman philosophique.",
        prix: 150,
        image: "https://m.media-amazon.com/images/I/51QzQbz6MNL._SL1051_.jpg",
        anneedition: 1942,
        commentaires: ["Profond.", "À lire absolument."],
        likes: 120
    },
    {
        id: 3,
        titre: "Moby Dick",
        auteur: "Melville",
        description: "Un roman d'aventure.",
        prix: 350,
        image: "https://m.media-amazon.com/images/I/51aV053NRjL.jpg",
        anneedition: 1851,
        commentaires: ["Un peu long, mais captivant.", "Un chef-d'œuvre."],
        likes: 550
    },
    {
        id: 4,
        titre: "1984",
        auteur: "George Orwell",
        description: "Un roman dystopique.",
        prix: 200,
        image: "https://m.media-amazon.com/images/I/71rpa1-kyvL._SL1500_.jpg",
        anneedition: 1949,
        commentaires: ["Effrayant mais fascinant.", "Un must-read."],
        likes: 600
    },
    {
        id: 5,
        titre: "Pride and Prejudice",
        auteur: "Jane Austen",
        description: "Un roman classique.",
        prix: 180,
        image: "https://m.media-amazon.com/images/I/81Scutrtj4L._SL1500_.jpg",
        anneedition: 1813,
        commentaires: ["Romantique et intelligent.", "Un chef-d'œuvre littéraire."],
        likes: 500
    }
];

// Array to store selected books
let selectedBooks = JSON.parse(localStorage.getItem("LivresFavoris")) || [];

// Function to display books in the grid
function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

    books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.className = "col book-card";
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.titre}">
            <h4>${book.titre}</h4>
            <p>${book.auteur}</p>
            <p>Prix: ${book.prix} DH</p>
            <p>Likes: ${book.likes}</p>
            <div class="button-container">
                <button onclick="addToSelected(${book.id})">Ajouter</button>
                <button onclick="showBookDetails(${book.id})">Détails</button>
            </div>
        `;
        bookList.appendChild(bookCard);
    });
}

// Function to add a book to the selected list
function addToSelected(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!selectedBooks.some(b => b.id === bookId)) {
        selectedBooks.push(book);
        localStorage.setItem("LivresFavoris", JSON.stringify(selectedBooks));
        displaySelectedBooks();
    }
}

// Function to display selected books
function displaySelectedBooks() {
    const selectedBooksList = document.getElementById("selected-books-list");
    selectedBooksList.innerHTML = "";

    selectedBooks.forEach(book => {
        const selectedBookCard = document.createElement("div");
        selectedBookCard.className = "book-card";
        selectedBookCard.innerHTML = `
            <h4>${book.titre}</h4>
            <p>${book.auteur}</p>
            <p>Prix: ${book.prix} DH</p>
            <button onclick="removeBook(${book.id})">Supprimer</button>
        `;
        selectedBooksList.appendChild(selectedBookCard);
    });
}

// Function to remove a book from the selected list
function removeBook(bookId) {
    selectedBooks = selectedBooks.filter(b => b.id !== bookId);
    localStorage.setItem("LivresFavoris", JSON.stringify(selectedBooks));
    displaySelectedBooks();
}

// Function to show book details
function showBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    const bookDetails = document.getElementById("book-details");
    bookDetails.innerHTML = `
        <h4>${book.titre}</h4>
        <p>Auteur: ${book.auteur}</p>
        <p>Description: ${book.description}</p>
        <p>Prix: ${book.prix} DH</p>
        <p>Année d'édition: ${book.anneedition}</p>
        <p>Commentaires: ${book.commentaires.join(", ")}</p>
        <p>Likes: ${book.likes}</p>
        <button onclick="closeBookDetails()">Fermer</button>
    `;
    bookDetails.style.display = "block";
}

// Function to close book details
function closeBookDetails() {
    const bookDetails = document.getElementById("book-details");
    bookDetails.style.display = "none";
}


displayBooks();
displaySelectedBooks();
// Function to show book details in a modal
function showBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);

    // Populate modal content
    document.getElementById("modal-title").textContent = book.titre;
    document.getElementById("modal-author").textContent = book.auteur;
    document.getElementById("modal-description").textContent = book.description;
    document.getElementById("modal-price").textContent = book.prix;
    document.getElementById("modal-year").textContent = book.anneedition;
    document.getElementById("modal-comments").textContent = book.commentaires.join(", ");
    document.getElementById("modal-likes").textContent = book.likes;

    // Display the modal
    const modal = document.getElementById("book-details-modal");
    modal.style.display = "block";

    // Close the modal when the user clicks the close button (×)
    const closeButton = document.querySelector(".close");
    closeButton.onclick = () => {
        modal.style.display = "none";
    };

    // Close the modal when the user clicks outside of it
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}
function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

    books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.className = "col book-card";
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.titre}">
            <h4>${book.titre}</h4>
            <p>${book.auteur}</p>
            <p>Prix: ${book.prix} DH</p>
            <p>Likes: ${book.likes}</p>
            <div class="button-container">
                <button onclick="addToSelected(${book.id})">Ajouter</button>
                <button onclick="showBookDetails(${book.id})">Détails</button>
            </div>
        `;
        bookList.appendChild(bookCard);
    });
}
// Add event listeners to the buttons
document.getElementById("add-book-btn").addEventListener("click", openAddBookForm);
document.getElementById("my-selection-btn").addEventListener("click", showSelectedBooks);

// Function to open the "Add Book" modal
function openAddBookForm() {
    const modal = document.getElementById("add-book-modal");
    modal.style.display = "block";

    // Close the modal when the user clicks the close button (×)
    document.getElementById("close-add-book-modal").onclick = () => {
        modal.style.display = "none";
    };

    // Close the modal when the user clicks outside of it
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

// Handle form submission for adding a new book
document.getElementById("add-book-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const description = document.getElementById("book-description").value;
    const price = parseFloat(document.getElementById("book-price").value);
    const image = document.getElementById("book-image").value;

    // Create a new book object
    const newBook = {
        id: books.length + 1, // Generate a new ID
        titre: title,
        auteur: author,
        description: description,
        prix: price,
        image: image,
        anneedition: new Date().getFullYear(), // Use the current year
        commentaires: [],
        likes: 0,
    };

    // Add the new book to the list
    books.push(newBook);

    // Refresh the book list
    displayBooks();

    // Close the modal
    document.getElementById("add-book-modal").style.display = "none";

    // Clear the form
    document.getElementById("add-book-form").reset();
});

// Function to show the selected books
function showSelectedBooks() {
    const selectedBooksSection = document.querySelector(".selected-books");
    selectedBooksSection.style.display = "block"; // Ensure the section is visible
    displaySelectedBooks(); // Refresh the list of selected books
}
