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

    element.addEventListener('mouseleave', (e) => {
        e.target.style.transform = '';
        e.target.style.color = '';
    });

}

// 1 - notify the visitor

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

// 2 - turn menu items to have a background and a different on mouseover

const menuItem = document.querySelectorAll('.nav-link');
menuItem.forEach(menuHover);


// 3 - style the h2 elements on hover 

const h2El = document.querySelectorAll('h2');
h2El.forEach(headingStyle);

const h4El = document.querySelectorAll('h4');
h4El.forEach(headingStyle);

// 4 - click event for the button 

const button = document.querySelectorAll('.btn');
button.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'red';
    })


})
