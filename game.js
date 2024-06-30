/*This is different approach created by me without using unneccessary storage to store all the user clicked values ,by checking current button cliked
value only*/


//to store randomly formed colours for each newsequence
var gamePattern=[];


//to track of cliked button lenght to checking match with game pattern (this variable make major difference for storing problem in previous approach)
var ra=-1;//for indexing purpose


//for to select any colour randomly according to the indexes 0 to 3, for generating for new sequence
var buttonColours=["green","red","yellow","blue"];




$(".btn").click(function() {

    //Inside the handler, create a new variable called userChosenColour to store the id(colour) of the button that got clicked.
    //*** (this) is the main keyword to make changes to that particular arised one (means avoked one in this example is button)
    var userChosenColour = $(this).attr("id");
  


    //for playing sound
    playSound(userChosenColour);


    //for button animation
    animatePress(userChosenColour);


    //for every new button clicked need to increase value to macth that corresponding index value in game pattern array
    ra++;


    //for checking each button when clicked is match with corresponding value with game pattern array
    checkAnswer(userChosenColour,ra);
  
  });

//for tracking of current level
var level=0;


var started=false;  //to ensure that key press happen at first or at last for this we change to true in below code
//if any key press happens
$(document).keypress(function(){
    if(!started)
    {
        nextsequence();
        started=true;//
    }
});



//for button animation when clicked
function animatePress(n)
{
    //for button animation
    $("."+n).addClass("pressed");
    setTimeout(function(){
        $("."+n).removeClass("pressed");
    },100);
}


//to play sound
function playSound(o)
{
    var z=new Audio("sounds/"+o+".mp3");
    z.play();
}


function nextsequence(){

    //if next sequence is occured means either game starting from first or level is incresed then we need check from starting user clicked button
    ra=-1;

    //for every nextsequence level need to be increased
    level++;

    //at top description need to change
    $("h1").text("Level "+level);


    //creating random number between 0 to 3
    var randomNumber=Math.floor(Math.random()*4);


    //for to get that random number referenced array colour
    gamePattern.push(buttonColours[randomNumber]);



    //for button animation
    animatePress(buttonColours[randomNumber]);


    //to play sound
    playSound(buttonColours[randomNumber]);


}

//to sequentially check user answer is correct with game pattern or not
//here n1 is userclicked button colour and n2 is length which need to check correct or not with game pattern array
function checkAnswer(n1,n2)
{
    //to check each one when it is clicked
    if(n1==gamePattern[n2])
    {

        //if length equals means that level is passed and call nextsequence for next level
        if(n2==gamePattern.length-1)
        {
            setTimeout(function(){
                nextsequence();
            },1000);
        }

    }

    //if not equal means game over
    else{
        $("h1").text("Game Over and press any key to restart");

        //for wrong body animation
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);


        //for playing wrong sound
        playSound("wrong");
        

        //for freshly starting
        ra=-1;


        //for fresh to start after game over otherwise it will store previous game values
        gamePattern=[];

        //this is usefull to start game after game over when any key is pressed
        started=false;
        level=0;
    }
}





/*This is the previous approach by following udemy approach



//to store randomly formed colours
var gamePattern=[];
//for to select any colour randomly according to the indexes 0 to 3
var buttonColours=["green","red","yellow","blue"];
//to store our clicking button colours
var userClickedPattern=[];


//when button is clicked
$(".btn").click(function() {
    //Inside the handler, create a new variable called userChosenColour to store the id(colour) of the button that got clicked.
    var userChosenColour = $(this).attr("id");
  
    //Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);

    //for playing sound
    playSound(userChosenColour);

    //for button animation
    animatePress(userChosenColour);

    //for checking each button when clicked
    checkAnswer(userClickedPattern.length-1);
  
  });
//for tracking of current level
var level=0;

var started=false;  //to ensure that key press happen at first or at last for this we change to true in below code
//if any key press happens
$(document).keypress(function(){
    if(!started)
    {
        nextsequence();
        started=true;//
    }
});


//for button animation when clicked
function animatePress(n)
{
    //for button animation
    $("."+n).addClass("pressed");
    setTimeout(function(){
        $("."+n).removeClass("pressed");
    },100);
}
//to play sound
function playSound(o)
{
    var z=new Audio("sounds/"+o+".mp3");
    z.play();
}

function nextsequence(){
    //for each new sequence means userClickedPattern need to start from first
    userClickedPattern=[]

    //for every nextsequence level need to be increased
    level++;
    //at top description need to change
    $("h1").text("Level "+level);

    //creating random number between 0 to 3
    var randomNumber=Math.floor(Math.random()*4);
    //for to get that random number referenced array colour
    gamePattern.push(buttonColours[randomNumber]);


    //for button animation
    animatePress(buttonColours[randomNumber]);

    //to play sound
    playSound(buttonColours[randomNumber]);

}
//to sequentially check user answer is correct with game pattern or not
function checkAnswer(n)
{
    //to check each one when it is clicked
    if(userClickedPattern[n]==gamePattern[n])
    {
        //if length equals means that level is passed and call nextsequence for next level
        if(userClickedPattern.length==gamePattern.length)
        {
            setTimeout(function(){
                nextsequence();
            },1000);
        }
    }
    //if not equal means game over
    else{
        $("h1").text("Game Over and press any key to restart");
        //for wrong body animation
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        //for playing wrong sound
        playSound("wrong");
        


        //for fresh to start after game over otherwise it will store previous game values
        gamePattern=[];
        //this is usefull to start game after game over when any key is pressed
        started=false;
        level=0;
    }
}
*/