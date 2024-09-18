// MENU TOGGLE 
let toggleBar = document.querySelector('.toggle-bar');
let icon = document.querySelector('.toggle-bar i')
let headerNav =  document.querySelector('nav') ;

function toggle(){
    headerNav.classList.toggle('active')
    if(icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-times')
    } else{
        icon.classList.remove('fa-times')
        icon.classList.add('fa-bars')
    }
}
toggleBar.addEventListener('click', toggle)

//CHEERS 
cheersBtn = document.querySelector('.cheers')

    cheersBtn.addEventListener('click', (event) => {
    cheersBtn.classList.add('animate');
    setTimeout(() => cheersBtn.classList.remove('animate'), 1000); // Duration should match animation duration

    const currentPageUrl = window.location.href; // Get the current page URL
    if (navigator.share) {
      navigator.share({
        title: 'Congrats on 20k steps!',
        text: 'I just hit 20k steps before 10 am! Cheer me on!',
        url: currentPageUrl,
      })
      .then(() => console.log('Cheer sent!'))
      .catch(console.error);
    } else {
      console.log('Sharing not supported on this browser.');
    }
  });