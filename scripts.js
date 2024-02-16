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

		//Creates dataset data-order and binds it to object div index
		containerDiv.dataset.order = `${index}`;
  		// let orderIndex = containerDiv.dataset.order;
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
    	lineTitle.classList.toggle('book-rows');
    	lineAuthor.classList.toggle('book-rows');
    	lineGenre.classList.toggle('book-rows');
      	removeButton.classList.toggle('book-remove-btn');


      	function removeBookFromLibrary() {
        	console.log(library);
        	containerDiv.remove();
        	library.splice(containerDiv.dataset.order,1);

        	//Selects all  divs and resets  their data-order values  to match index  values, so splicing happens  from  correct index
        	let allContainerDivs = document.querySelectorAll('main > div');
        	let i = 0;
        	allContainerDivs.forEach(function(item) {
          		item.dataset.order = i;
          		i++;
        	});
        }


      	function checkReadStatus() {
        	if(item.read === true) {
          	containerDiv.classList.toggle('read-outline');
        	};
      	}

      	function changeReadStatus() {
        	if(item.read === true) {
          		containerDiv.classList.toggle('read-outline');
          		return item.read = false;
        	} else {
            	containerDiv.classList.toggle('read-outline');
            	return item.read = true;
          	}
        };


      	checkReadStatus(); 
      	removeButton.addEventListener('click', removeBookFromLibrary);
      	containerDiv.addEventListener('click', changeReadStatus);
    });
}

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
  	this.checkRead = function() {
    	if(bookRead.checked) {
      		return this.read = true;
    	}else {
        	return this.read = false;
      	}
  	};
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
  	newBook.checkRead();
  	library.push(newBook);
  	dialog.close();
  	resetValues();
  	displayBook();
  	}

  

openDialogBtn.addEventListener('click', () => {
  	dialog.showModal();
});

closeDialogBtn.addEventListener('click', () => {
  	dialog.close();
});

addBookBtn.addEventListener('click', addBookToLibrary);