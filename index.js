const toggleBtn = document.getElementById('burgerIcon'),
navItem     = document.getElementById('phoneitem'),
closeIcon   = document.getElementById('close'),
openIcon    = document.getElementById('open');

toggleBtn.addEventListener('click',
    ()=>{
        navItem.classList.toggle('show')
        closeIcon.classList.toggle('show1');
        openIcon.classList.toggle('hide')
    }
)