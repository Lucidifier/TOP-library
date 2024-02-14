document.addEventListener('DOMContentLoaded', function() {
  const openDialogBtn = document.querySelector('.open-dialog');
  const closeDialogBtn = document.querySelector('.close-dialog');
  const dialog = document.querySelector('.entry-dialog');

  openDialogBtn.addEventListener('click', () => {
    console.log('asd');
    dialog.showModal();
  });

  closeDialogBtn.addEventListener('click', () => {
    console.log('aaa');
    dialog.close();
  });
})