// //////////////// get blocks to vars //////////////////
////////////////////////////////////////////////////////
const red= document.querySelector('.block--red');
const blue= document.querySelector('.block--blue');
const green= document.querySelector('.block--green');
const pink= document.querySelector('.block--pink');
const gray= document.querySelector('.block--gray');



const blockHeight= 120; // 100px + 10px margin top and bottom


// //////////////// add event listeners //////////////////
/////////////////////////////////////////////////////////
red.addEventListener('click', (event) => {
    let redPos= red.getBoundingClientRect(); //returns object with positioning info based form 
                                            //top left corner of 'viewport'
    console.log('red: ',redPos.top);
});//end click event

blue.addEventListener('click', (event) => {
    let bluePos= blue.getBoundingClientRect();
    console.log('blue: ', bluePos.top);
});//end click event

green.addEventListener('click', (event) => {
    
});//end click event

pink.addEventListener('click', (event) => {
    
});//end click event

gray.addEventListener('click', (event) => {
    
});//end click event