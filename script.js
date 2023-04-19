/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




/* scroll section avtice */
let section =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
           links.classList.remove('active');
           document.querySelector('header nav a[href*=' + id +']'.classList.add('active'));
            });
        };
    });

    /* sticky navbar*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
 
    /* remove toggle icon  and navbar when click navbar link(scroller) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
const readMoreBtn = document.querySelector('.read-more-btn');
const  text = document.querySelector('.text');

readMoreBtn.addEventListener('click', (e)=>{
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText === 'Read More'){
        readMoreBtn.innerText = 'Read Less';
    }else{
        readMoreBtn.innerText = 'Read More';
    }
});
    /* scroll reveal */
    ScrollReveal({ 
       // reset:true,
        distance: '80px',
        duration:2000,
        delay: 200
    });
    ScrollReveal().reveal('.home-content, .heading',{ origin: 'top'}); 
    ScrollReveal().reveal('.home-img, .portfolio-box, contact form',{ origin: 'bottom'}); 
    ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left'}); 
    ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right'}); 
    

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "komalkanwarrathore2014@gmail.com",
        Password : "Komalrathore@31",
        To : 'komalkanwarrathore2014@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : " Full Name: "+ document.getElementById("name").value
        +"<br> Email: " + document.getElementById("email").value
        +"<br> Mobile No: " + document.getElementById("mobile").value
        +"<br> Email Subject: " + document.getElementById("email subjest").value
        +"<br>  Your Message: " + document.getElementById("message").value

    }).then(
      message => alert("Message Sent Succesfully")
    );
      
}

