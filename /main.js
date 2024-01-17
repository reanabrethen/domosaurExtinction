// 1. Adjust the font size of the span with the class `mess-with-me` to 40 pixels.

const paragraph = document.querySelector('span.mess-with-me')
paragraph.style.fontSize = '40px'


// 2. Modify the paragraph with the class `mess-with-me` to have a green background.
const p = document.querySelector('p.mess-with-me')
p.style.backgroundColor = 'green'

// 3. Conceal the second dinosaur's image, rendering it invisible while causing the space below it to adjust accordingly. If you're uncertain about the method to achieve this, you can look up the CSS rule to hide an element.

const secondImage = document.querySelector('#hide-me')
secondImage.style.display = 'none'


// 4. Resize the first dinosaur image to be 324 pixels in width.

const firstImage = document.querySelector('#triceratops')
firstImage.style.width = '324px'



// ## Event Listener Challenges

// 1. Apply an event listener to the span with the class `mess-with-me` such that when clicked, the font color transitions to orange.

paragraph.addEventListener('click', ()=>{
    paragraph.style.color = 'orange'
})


// 2. Attach an event listener to the first dinosaur, so that clicking it results in a red border.

firstImage.addEventListener('click', ()=>{
    firstImage.style.border = '10px solid red'
})


// 3. Assign an event listener to the feathered dinosaur, causing it to become 50% transparent upon clicking.

const featherDino = document.querySelector('#feathers')
    featherDino.addEventListener('click', ()=>{
        featherDino.style.opacity = "50%"
    })


// 4. Implement an event listener for the "Switch Background Color" button that, upon clicking, alters the background color of the row of dinosaurs to a color of your preference.

const button = document.querySelector('#toggle')
const rowColor = document.querySelector('#row')
button.addEventListener('click', ()=>{
    rowColor.style.backgroundColor = 'turquoise'
    
})


// // function colorChange(row){
//     const rowColor = document.querySelector('#row')
//     const button = button.addEventListener('click', ()=>{
//     if(rowColor === 'white'){
//        document.querySelector('#toggle').style.backgroundColor = 'turquoise'
//        }else{
//         document.querySelector('#toggle').style.backgroundColor = 'white'

//     } 
// })
   

// 5. Establish an event listener for the dinosaur with the ID `biggify`, ensuring that when HOVERED, the image expands to a width of 200 pixels. Note that this requires a different event type, so some research may be necessary to determine the correct event.

const smileDino = document.querySelector('#biggify')
smileDino.addEventListener('mouseover', ()=>{
    smileDino.style.width = '200px'
})


// ## Stretch Goals

// 1. Enable the "Switch Background Color" button to toggle between white and your chosen color upon clicking. This modification can be achieved by reworking the function used in your existing event listener. **Hint:** If you haven't explicitly set the background color **via JavaScript**, its value will always be an empty string, regardless of any prior settings from other sources.

// 2. Introduce a new event listener that reverts the `biggify` dinosaur back to its original size when it is no longer being hovered. **Hint:** This action is similar to the previous one, but focuses on the width. **Hint 2:** You'll need to use a different type of event, though the name is somewhat related.
 smileDino.addEventListener('mouseout', ()=>{
    smileDino.style.width = '162px'
 })