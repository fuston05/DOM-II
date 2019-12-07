// //////////////// get blocks to vars //////////////////
////////////////////////////////////////////////////////
const red= document.querySelector('.block--red');
const blue= document.querySelector('.block--blue');
const green= document.querySelector('.block--green');
const pink= document.querySelector('.block--pink');
const gray= document.querySelector('.block--gray');

//get a nodeList of blocks for looping
const blocks= document.querySelectorAll('.block');

const blockHeight= 120; // 100px + 10px margin top and bottom

//get top pos rel to topleft viewport
function getMyPos(block){
    let cur= block.getBoundingClientRect(); 
    return cur.top;
}//end func

function moveToTop(block){
    let pos= getMyPos(block);
    // console.log(`${block}, pos: `+ pos);

    let move= Math.floor(pos/120);
    if(move > 0){
        // console.log('move: '+move); 
    }//end if

    //move clicked block UP
    if( pos > 69 ){
        gsap.to( block, { duration: 1, y: (-120 * move) } );
    }//end if

    for( let i= 0; i < blocks.length; i++){
        let curPos= getMyPos(blocks[i]);
        console.log(blocks[i],': curPos' + curPos);
    
        let curMove= Math.ceil(curPos/120);
        console.log(blocks[i],' curMove'+ curMove);

        if( curPos < pos && curMove > 0){
            gsap.to( blocks[i], { duration: 1, y: (120) } );
            // console.log(blocks[i],'move down');
        }//end if
    }//end for
    pos= '';
    move= '';
    curMove= '';
    curPos= '';
}//end func

// function reOrganize(block){ 
//     // console.log('reOrganize called');
//     //use curr pos of 'block'
//     //anything with a less 'pos' move down one increment of 120 each
//     for( let i= 0; i < blocks.length; i++){

//         let curPos= getMyPos(blocks[i]);
//         console.log('curPos' + curPos);
//         let curMove= Math.floor(curPos/120);

//         if( curPos < pos ){
//             gsap.to( block, { duration: 1, y: (120 * curMove) } );
//             console.log('move down');
//         }//end if

//     }//end for

//     console.log('cur block: ',block);
// }//end func



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