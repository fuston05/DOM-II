// //////////////// get blocks to vars //////////////////
////////////////////////////////////////////////////////
const red= document.querySelector('.block--red');
const blue= document.querySelector('.block--blue');
const green= document.querySelector('.block--green');
const pink= document.querySelector('.block--pink');
const gray= document.querySelector('.block--gray');

const blockHeight= 120; // 100px + 10px margin top and bottom

//get top pos rel to topleft viewport
function getMyPos(block){
    let cur= block.getBoundingClientRect(); 
    return cur.top;
}//end func

// //////////////// add event listeners //////////////////
/////////////////////////////////////////////////////////
red.addEventListener('click', (event) => {
    event.stopPropagation();

    let pos= getMyPos(red);
    console.log('red pos: '+ pos);

    let move= Math.floor(pos/120);
    if(move > 0){
        console.log('move: '+move); 
    }//end if

    if( pos > 69 ){
        gsap.to( red, { duration: 1, y: (-120 * move) } );
        console.log('Not on top');
    }//end if
});//end click event

blue.addEventListener('click', (event) => {
    event.stopPropagation();

    let pos= getMyPos(blue);
    console.log('blue pos: '+pos);
    let move= Math.floor(pos/120);
    if(move > 0){
        console.log('move: '+move); 
    }

    if( pos > 68 ){
        gsap.to( blue, { duration: 1, y: -120 } );
        console.log('Not on top');
    }//end if
});//end click event

green.addEventListener('click', (event) => {
    
});//end click event

pink.addEventListener('click', (event) => {
    
});//end click event

gray.addEventListener('click', (event) => {
    
});//end click event