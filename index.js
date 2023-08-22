let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('ul li a button');

window.onscroll = () => {
    sections.forEach(sec => 
        {
            let top = window.scrollY;
            let offset =  sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            
            if(top>= offset-10 && top < offset  + height)
            {
                
                navLinks.forEach(links=>
                    {
                        links.classList.remove('active');
                        document.querySelector('ul li a[href*='+id+'] button').classList.add('active');

                        
                    });
            };
        });
};
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer.", "Web Designer."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname)
{
    for (tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function ValidateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat))
  {
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    document.form1.Email.focus();
    return false;
  }
}
