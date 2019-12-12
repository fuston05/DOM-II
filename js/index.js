//open console to see all events running

// /////////////// grab elements ////////////////////
////////////////////////////////////////////////////

//images
const introImg= document.querySelector('.intro img');
const contentSectionImg= document.querySelector('.content-section img');
const inverseImg= document.querySelector('.inverse-content img');
const destinationImg= document.querySelector('.content-destination img');

//buttons
const button1= document.querySelector('.content-pick .btn:first-child');
const button2= document.querySelector('.content-pick .btn:nth-child(2)');
const button3= document.querySelector('.content-pick .btn:last-child');

// nav
const nav= document.querySelector('nav');

//nav links
const navLink1= document.querySelector('nav .nav-link:first-child');
const navLink2= document.querySelector('nav .nav-link:nth-child(2)');
const navLink3= document.querySelector('nav .nav-link:nth-child(3)');
const navLink4= document.querySelector('nav .nav-link:last-child');
//get all nav links
const navLinks= document.querySelectorAll('nav .nav-link');

// main heading
const mainHeader= document.querySelector('header');
const mainHeading= document.querySelector('header h1');

//grab an image container to prepend a new element for gsap animation code below
const inverseContent= document.querySelector('.inverse-content');

// /////////////// events ////////////////////
/////////////////////////////////////////////

//unique event 1: mouseenter
introImg.addEventListener('mouseenter', (event) =>{ //add border on mouseenter
    introImg.style.border= '1px solid green';
} );

//unique event 2: mouseleave
introImg.addEventListener('mouseleave', (event) =>{ //remove border on mouseleave
    introImg.style.border= 'none';
} );

//unique event 3: scroll- alternate nav link colors as you scroll
window.addEventListener('scroll', (event) => {
    for( let i=0; i < navLinks.length; i++ ){
        //set initial color state.. every other link
        if( i % 2 > 0){
            navLinks[i].style.color= 'red';
        }else{
            navLinks[i].style.color= 'black';
        }//end if

        window.setTimeout( function(){ //delay the color toggle 
            if( navLinks[i].style.color === 'red' ){
                navLinks[i].style.color= 'black';
            }else if( navLinks[i].style.color != 'red' ){
                navLinks[i].style.color= 'red';
            }//end if
        }, 10 );//end setTimeout       
    }//end for
} );//end window scroll

//unique event 4: keydown
window.addEventListener('keydown', (event) => {
    alert('Did you mean to press the: '+ event.key+ ' key?');
});//end window keydown

//unique event 5: dblclick
mainHeading.addEventListener('dblclick', (event) => { //toggle color
    if( mainHeading.style.color === 'blue' ){
        mainHeading.style.color= 'black';
    }else{
        mainHeading.style.color= 'blue';
    };//end if
    
});//end dblclick

//unique event 6: resize - console.log's window size
window.addEventListener('resize', (event) => {
    console.log('Window Hdight: '+ window.innerHeight + '\nWindow Width: ' + window.innerWidth);
});//end resize

//unique event 7: load
window.addEventListener('load', (event) => {
    mainHeader.style.width= '100%';
    mainHeader.style.opacity= '1';

    mainHeader.style.transition= 'width 1s, opacity 5s';
});//end load

//unique event 8: transitionstart
mainHeader.addEventListener('transitionstart', (event) => {
    console.log('transitions on header has begun');
});//and transitionstart

//unique event 9: beforeprint
window.addEventListener('beforeprint', (event) => {
    console.log('about to print, get ready');
});//end beforeprint

//unique event 10: transitionend
mainHeader.addEventListener('transitionend', (event) => {
    console.log('header transitions have ended');
});//end transitionend

// ////////////////// create and handle propagation ////////////////
///////////////////////////////////////////////////////////////////
//nav link click event
navLink4.addEventListener('click', (event) => {
    navLink4.style.color= "pink"; // triggers the 'nav' click event as well
    event.stopPropagation();
});//end click

//nav click event
nav.addEventListener('click', (event) => {
    nav.style.backgroundColor= 'lightblue';
});//end click

// ///////////////////////////////////////////

//add 'preventDefault' to all nav links

navLinks.forEach( (ele) => {
    ele.addEventListener('click', (evnet) => {
        event.preventDefault();
    });//end click
} );//end foreach

// ///////////////// GSAP stretch //////////////////////
///////////////////////////////////////////////////////

//create a new ele
const newDiv= document.createElement('div');
//style new ele
newDiv.textContent= 'Click for cool GSAP animation!';
newDiv.style.position= 'absolute';
newDiv.style.backgroundColor= 'dodgerblue';
newDiv.style.borderRadius= '5px';
newDiv.style.padding= '5px';
newDiv.style.zIndex= '2';
newDiv.style.fontSize= '15px';
newDiv.style.border= '2px solid gray';

//add it to DOM
inverseContent.prepend(newDiv);

//add events for mouseenter to sim a hover affect
newDiv.addEventListener('mouseenter', (evnet) => {
    newDiv.style.backgroundColor= 'blue';
    newDiv.style.color= 'white';
    newDiv.style.cursor= 'pointer';
});//end mouseenter

//add events for mouseleave to sim a hover affect
newDiv.addEventListener('mouseleave', (evnet) => {
    newDiv.style.backgroundColor= 'dodgerblue';
    newDiv.style.color= 'black';
});//end mouseenter

// add click listener to fire the gsap animation
newDiv.addEventListener('click', (evnet) => {
    const firstImg= gsap.to(inverseImg, {duration: 1, x: 423, y: -314,onComplete: runReverse});
    const secondImg= gsap.to(contentSectionImg, {duration: 1, x: -423, y: 314, onComplete: runReverse});   
   
    //reverses the animation after a delay
    function runReverse(){
        setTimeout( function(){ //reverses the animation
            firstImg.reverse();
            secondImg.reverse();
        }, 1000);//end timeout
    }//end func
});//end mouseenter





