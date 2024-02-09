async function getBook() {
  try {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCjtKLXcVF08Axo2j0NkxJ_atoVWSYjyw4"
    );
    return response.json();
  } catch (error) {
    console.error("Error getting the book: ", error);
  }
}

export { getBook };
