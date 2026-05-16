const  navMenu = document.getElementById('nav-Menu'),
            navtog = document.getElementById('nav-tog'),
            navclose = document.getElementById('nav-close')
 // --- show menu --- 
 if(navtog){
    navtog.addEventListener('click',  ()  =>{
        navMenu . classlist .add('show-menu')
    })
 }

//  --hide menu--
if(navclose){
    navclose.addEventListener('click', () =>{
        navMenu. classlist .remove('show-menu')
    })
}
