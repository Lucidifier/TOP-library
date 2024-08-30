function validateForm() {
  console.log('formValidation');
  const form = document.querySelector('.entry-dialog');
  const titleInput = document.getElementById('title');
  const titleRegExp = /[a-zA-Z0-9]+/;
  const titleError = document.querySelector('#title + span')

  console.log(titleInput);

  titleInput.addEventListener('input', (event) => {
    if(titleInput.validity.patternMismatch) {
      titleInput.setCustomValidity('Only letters and numbers');
      titleError.textContent = 'Only letters and numbers';
      titleError.classList.replace('error_inactive', 'error_active');
    } else {
      titleError.classList.replace('error_active', 'error_inactive');
    };
  })
}
export default  validateForm;