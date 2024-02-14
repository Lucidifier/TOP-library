  const library = [];

  const openDialogBtn = document.querySelector('.open-dialog');
  const closeDialogBtn = document.querySelector('.close-dialog');
  const addBookBtn = document.querySelector('.add-book');
  const dialog = document.querySelector('.entry-dialog');
  const bookPlaceholder = document.querySelector('book-placeholder');



  function Book(title, author, genre, read) {
    this.name = title;
    this.author  = author;
    this.genre = genre;
    this.read = function() {
      if(read===true) {
        this.read = true;
      };
    };
  }

  function addBookToLibrary() {
    let newBook = new Book('aa', 'aaa', 'aaaa', 1);
    library.push(newBook);
    console.log(library);
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