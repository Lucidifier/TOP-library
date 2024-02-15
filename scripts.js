  const library = [];

  function displayBook() {

    //Clear container of  previous book divs
    while(bookContainer.firstChild) {
      bookContainer.removeChild(bookContainer.firstChild);
    };

    //Loop through library arr  and create  divs for every object
    library.forEach(function(item, index) {
      let containerDiv = document.createElement('div');
      let lineTitle = document.createElement('p');
      let lineAuthor = document.createElement('p');
      let lineGenre = document.createElement('p');
      removeButton = document.createElement('button');
      containerDiv.dataset.order = index;
      console.log(containerDiv.dataset.order);

      lineTitle.innerText = item.title;
      lineAuthor.innerText = item.author;
      lineGenre.innerText = item.genre;
      removeButton.innerText = 'REMOVE';

      bookContainer.appendChild(containerDiv);
      containerDiv.appendChild(lineTitle);
      containerDiv.appendChild(lineAuthor);
      containerDiv.appendChild(lineGenre);
      containerDiv.appendChild(removeButton);
      containerDiv.classList.toggle('book');

      function removeBookFromLibrary() {
        console.log(library);
        containerDiv.classList.toggle('hide-element');
        let indexToRemove = containerDiv.dataset.order;
        library.splice(indexToRemove, 1);
        console.log(library);
      }

      removeButton.addEventListener('click', removeBookFromLibrary);
    });
  }

  console.log(library);
 
  const openDialogBtn = document.querySelector('.open-dialog');
  const closeDialogBtn = document.querySelector('.close-dialog');
  const addBookBtn = document.querySelector('.add-book');
  const dialog = document.querySelector('.entry-dialog');
  const bookContainer = document.querySelector('.book-container');
  let removeButton;

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

 