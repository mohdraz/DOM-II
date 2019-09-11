// Your code goes here

// function to handle menue hover effect 
const menuHover = (element) => {
    element.addEventListener('mouseover', (e) => {
        e.target.style.color = 'red';
        e.target.style.backgroundColor = 'lightblue';
        e.target.style.padding = '.3rem .6rem';
    });

    // removes hover effects 
    element.addEventListener('mouseleave', (e) => {
        e.target.style.color = '';
        e.target.style.backgroundColor = '';
        e.target.style.padding = '';
    });

}

// h2 style on mouse enter 

const headingStyle = (element) => {
    element.addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'scale(1.2)';
        e.target.style.color = 'blue';
    })

// 1 - mouseleave

    element.addEventListener('mouseleave', (e) => {
        e.target.style.transform = '';
        e.target.style.color = '';
    });

}

// 2 - load 

document.querySelector('.intro img').addEventListener('load', (e) => {
    const divEl = document.createElement('div');
    divEl.appendChild(document.createTextNode("The Tourists are having aweomse time"));
    const parentEl = document.querySelector('.intro')
    const h2El = document.querySelector('.intro h2');
    parentEl.insertBefore(divEl, h2El);

    document.querySelector('.main-navigation').style.position = 'relative';
    document.querySelector('.intro').style.position = 'relative';
    document.querySelector('.intro').style.padding= '0 0 10px';



    divEl.style.position = 'absolute';
    divEl.style.top = '40%';
    divEl.style.left = '20%';
    divEl.style.color = 'red';
    divEl.style.fontSize = '3rem';
    divEl.style.margin = '0 auto';
});

// 3 - mouseover - turn menu items to have a background and a different on mouseover

const menuItem = document.querySelectorAll('.nav-link');
menuItem.forEach(menuHover);


// 4 - mouseenter - style the h2 elements on hover 

const h2El = document.querySelectorAll('h2');
h2El.forEach(headingStyle);

const h4El = document.querySelectorAll('h4');
h4El.forEach(headingStyle);

// 5 - click -  event for the button 

const button = document.querySelectorAll('.btn');
button.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'red';
    })


})


// 6 - dblclick event 

const destination = document.querySelectorAll('.destination p'); 
destination.forEach( (element) => {
    element.addEventListener('dblclick', (e) => {
        alert('you must be very excited about traveling, click sign up button now!');
    })
})

// 7  -- focus event

const containerHome = document.querySelector('.home');
const contact = document.createElement('div');
containerHome.appendChild(contact);

const contactHeading = document.createElement('h1');
const name = document.createElement('input');
const nameLast = document.createElement('input');

contact.appendChild(contactHeading);
contact.appendChild(name);
contact.appendChild(nameLast);

contactHeading.textContent = 'Contact Us';
name.setAttribute("type", "text");
name.setAttribute("value", "First Name");

name.classList.add('inputClass');
nameLast.classList.add('inputClass');

nameLast.setAttribute("type", "text");
nameLast.setAttribute("value", "Last Name");

// styling 
contact.style.textAlign = 'center';
contact.style.margin = '4rem auto';

const inputStyle = document.querySelectorAll('.inputClass');
inputStyle.forEach( (element) => {
    element.style.color = 'blue';
    element.style.width = '20rem';
    element.style.height = '3rem';
    element.style.fontSize = '2rem';
    element.style.border = '1px solid grey';
})



const inputElements = document.querySelectorAll('input[type="text"]');

inputElements.forEach( (element) => {
    element.addEventListener('focus', (e) => {
        e.target.style.backgroundColor = 'lightgrey';
        e.target.style.border = '2px solid black';
        e.target.style.transform = 'scale(1.5)';
        setTimeout( () => e.target.style.backgroundColor = '', 3000);
        setTimeout( () => e.target.style.border = '', 3000);
        setTimeout( () => e.target.style.transform = '', 3000);
    })
})


// 8 - scroll 

window.addEventListener('scroll', (e) => {
    const btn = document.createElement('div');
    btn.textContent = "Contact Us";

    const container = document.querySelector('body');
    container.appendChild(btn);

    btn.style.position = 'fixed';
    btn.style.left = '0%;';
    btn.style.top = '25%';
    btn.style.marginLeft = '8%';
    btn.style.color = 'red';
    btn.style.fontSize = '2.5rem';

});

// 9 - resize ;

function resizeElement() {
    const nav = document.querySelector('.nav-container ');
    nav.style.flexDirection = 'column';
}

window.onresize = resizeElement;

// 10 - timeout 

const images = document.querySelectorAll('img');
images.forEach( (element) => {
    element.addEventListener('click', (e) => {
        e.target.style.transform = 'scale(1.5)';
        setTimeout(() => e.target.style.transform = '' ,3000);
    })
})


console.log(images);

// Stop the navigation from items from refreshing the page by using preventDefault()

const navigation = document.querySelectorAll('.nav-link');
navigation.forEach( (element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
    })
})


// stop propogation

const header = document.querySelector('.nav-container');
header.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'green';
})

const logoHeader = document.querySelector('.logo-heading'); 
logoHeader.addEventListener('click', (e) => {
    e.target.style.color = 'blue';
    e.target.style.backgroundColor = 'lightgrey';
    e.stopPropagation();
})
