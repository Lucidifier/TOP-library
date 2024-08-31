function validateForm() {
  console.log('formValidation');
  const form = document.querySelector('.entry-dialog');
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const genreInput = document.getElementById('genre');
  const titleRegExp = /[a-zA-Z0-9]+/;
  const titleError = document.querySelector('#title + span');
  const authorError = document.querySelector('#author + span');
  const genreError = document.querySelector('#genre + span');

  console.log(titleInput);

  titleInput.addEventListener('input', (event) => {
    if(titleInput.validity.patternMismatch) {
      // titleInput.setCustomValidity('Only letters and numbers allowed');
      titleError.textContent = 'Only letters and numbers allowed';
      titleError.classList.replace('error_inactive', 'error_active');
    } else {
      titleError.classList.replace('error_active', 'error_inactive');
    };
  })

  authorInput.addEventListener('input', (event) => {
    if(authorInput.validity.patternMismatch) {
      // titleInput.setCustomValidity('Only letters and numbers allowed');
      authorError.textContent = 'Only letters and numbers allowed';
      authorError.classList.replace('error_inactive', 'error_active');
    } else {
      authorError.classList.replace('error_active', 'error_inactive');
    };
  })

  genreInput.addEventListener('input', (event) => {
    if(genreInput.validity.patternMismatch) {
      // titleInput.setCustomValidity('Only letters and numbers allowed');
      genreError.textContent = 'Only letters and numbers allowed';
      genreError.classList.replace('error_inactive', 'error_active');
    } else {
      genreError.classList.replace('error_active', 'error_inactive');
    };
  })
}
export default  validateForm;