// //////////////// get blocks to vars //////////////////
////////////////////////////////////////////////////////
const red= document.querySelector('.block--red');
const blue= document.querySelector('.block--blue');
const green= document.querySelector('.block--green');
const pink= document.querySelector('.block--pink');
const gray= document.querySelector('.block--gray');

//get a nodeList of blocks for looping
let blocks= document.querySelectorAll('.block');

const blockHeight= 120; // 100px + 10px margin top and bottom

function moveToTop(block){
    
    let pos= block.getBoundingClientRect().top;

    let move= Math.floor(pos/120);

    for( let i= 0; i < blocks.length; i++){
        let curPos= blocks[i].getBoundingClientRect().top;

        if( curPos < pos && blocks[i] !== block){
            gsap.to( blocks[i], { duration: 1, y: 120 } );
            console.log('curPos: ' + curPos + ', pos: ' + pos);
        }//end if
    }//end for

    //move clicked block UP
    if( pos > 69 && move > 0){
        gsap.to( block, { duration: 1, y: -(120 * move) } );
    }//end if

   

}//end func



// //////////////// add event listeners //////////////////
/////////////////////////////////////////////////////////
red.addEventListener('click', (event) => {
    event.stopPropagation();
    moveToTop(red);
});//end click event

blue.addEventListener('click', (event) => {
    event.stopPropagation();
    moveToTop(blue);
});//end click event

green.addEventListener('click', (event) => {
    event.stopPropagation();
    moveToTop(green);
});//end click event

pink.addEventListener('click', (event) => {
    event.stopPropagation();
    moveToTop(pink);
});//end click event

gray.addEventListener('click', (event) => {
    event.stopPropagation();
    moveToTop(gray);
});//end click event