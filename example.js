//add the file
const pix=require("./pix.js")

//create a new screen
var screen=new pix.Screen(64,32)

//initiate the screen
screen.init()

//draw "HI" shape
screen.drawShape(29,15,[
    [1,0,1,0,1,1,1], //remember: 1 = solid, 0 = blank
    [1,1,1,0,0,1,0],
    [1,0,1,0,1,1,1]
])

//update the screen with the new shape
screen.update()
