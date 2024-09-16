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