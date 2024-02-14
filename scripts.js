  const library = [];

  function displayBook() {
    library.forEach(function(item) {
      let containerDiv = document.createElement('div');
      let line1 = document.createElement('p');
      let line2 = document.createElement('p');
      let line3 = document.createElement('p');
      line1.innerText = item.title;
      line2.innerText = item.author;
      line3.innerText = item.genre;
      bookContainer.appendChild(containerDiv);
      containerDiv.appendChild(line1);
      containerDiv.appendChild(line2);
      containerDiv.appendChild(line3);
      containerDiv.classList.toggle('book');
    })
  }

  console.log(library);
 
  const openDialogBtn = document.querySelector('.open-dialog');
  const closeDialogBtn = document.querySelector('.close-dialog');
  const addBookBtn = document.querySelector('.add-book');
  const dialog = document.querySelector('.entry-dialog');
  const bookContainer = document.querySelector('.book-container');
  const testButton = document.querySelector('.test-btn');

  //Input fields 
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const bookGenre = document.getElementById('genre');
  const bookRead = document.getElementById('read');


  function Book() {
    this.title = bookTitle.value;
    this.author  = bookAuthor.value;
    this.genre = bookGenre.value;
    this.read = bookRead.checked;
  }

  function addBookToLibrary() {

    //Reset values because dialog box remembers  old ones
    function resetValues() {
      bookTitle.value = '';
      bookAuthor.value = '';
      bookGenre.value = '';
      bookRead.checked = false;
    }

    let newBook = new Book();
    library.push(newBook);
    console.log(library);
    dialog.close();
    resetValues();
    displayBook();
  }

  openDialogBtn.addEventListener('click', () => {
    console.log('asd');
    dialog.showModal();
  });

  closeDialogBtn.addEventListener('click', () => {
    console.log('aaa');
    dialog.close();
  });

  addBookBtn.addEventListener('click', addBookToLibrary);

  testButton.addEventListener('click', displayBook);