function greetings(){
    setTimeout( function(){
        document.getElementById("characterTalk").hidden = false;
        document.getElementById("characterTalk").textContent = "Hi! I'm the FlameBot! Your new friend, made just for you!";
        document.getElementById("images").src = "do not open/images/character/hey1.png";
    }, 1000);
    setTimeout(function(){
        document.getElementById("characterTalk").textContent = "can you, please....press that button over there?...so your browser may unmute me... (don't forget to turn your volume down)";
        document.getElementById("images").src = "do not open/images/character/shy1.png";
        document.getElementById("unmuteButton").hidden = false;
    },6000);
};
function unmute(){
    var audio = new Audio("do not open/sounds/quotes/yes.wav");
    audio.play();
    document.getElementById("unmuteButton").hidden = true;
    document.getElementById("characterTalk").hidden = true;
    document.getElementById("images").src = "do not open/images/character/celebrating1.png";
    audio.onended = function(){
        audio = new Audio("do not open/sounds/quotes/okayLetsStart.wav");
        audio.play();
        document.getElementById("images").src = "do not open/images/character/idle2.png";
        audio.onended = function(){
            document.getElementById("images").src = "do not open/images/character/idle3.png";
            document.getElementById("characterTalk").textContent = "Now you may use that text field down there! Write what you want then send me using the button near it! If you're sending a question, don't forget the question mark!";
            document.getElementById("characterTalk").hidden = false;
            document.getElementById("textField").hidden = false;
            document.getElementById("sendButton").hidden = false;
        }
    }
}

function unknownCommand(){
    document.getElementById("images").src = "do not open/images/character/confused1.png";
    var audio = new Audio("do not open/sounds/quotes/huh1.wav");
    audio.play();
    document.getElementById("characterTalk").textContent = "?...i don't get it...";
    document.getElementById("characterTalk").hidden = false;
    document.getElementById("sendButton").hidden = false;
    document.getElementById("textField").hidden = false;
}
function randomAnswer(){
    var possibleAnswers = ["Nope.", "Nah.", "Not at all...", "No way!", "No.", "Maybe...", "I...Guess so...", "yeah!", "yes.", "Absolutely!", "Of course!", "Wow...Really?...", "Hey!", "Stop it!"];
    var chosenAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    var audio = null;
    if(chosenAnswer == possibleAnswers[0]){
        document.getElementById("images").src = "do not open/images/character/idle2.png";
    }
    else if(chosenAnswer == possibleAnswers[1]){
        document.getElementById("images").src = "do not open/images/character/idle5.png";
    }
    else if(chosenAnswer == possibleAnswers[2]){
        document.getElementById("images").src = "do not open/images/character/confused1.png";
        audio = new Audio("do not open/sounds/quotes/notAtAll1.mp3");
    }
    else if(chosenAnswer == possibleAnswers[3]){
        document.getElementById("images").src = "do not open/images/character/idle4.png";
        audio = new Audio("do not open/sounds/quotes/noWay1.wav");
    }
    else if(chosenAnswer == possibleAnswers[4]){
        document.getElementById("images").src = "do not open/images/character/idle6.png";
        audio = new Audio("do not open/sounds/quotes/no1.mp3");
    }
    else if(chosenAnswer == possibleAnswers[5]){
        document.getElementById("images").src = "do not open/images/character/confused1.png";
    }
    else if(chosenAnswer == possibleAnswers[6]){
        document.getElementById("images").src = "do not open/images/character/confused1.png";
    }
    else if(chosenAnswer == possibleAnswers[7]){
        document.getElementById("images").src = "do not open/images/character/blinking1.png";
        audio = new Audio("do not open/sounds/quotes/yeah1.mp3");
    }
    else if(chosenAnswer == possibleAnswers[8]){
        document.getElementById("images").src = "do not open/images/character/idle4.png";
        audio = new Audio("do not open/sounds/quotes/yes2.mp3");
    }
    else if(chosenAnswer == possibleAnswers[9]){
        document.getElementById("images").src = "do not open/images/character/idle2.png";
    }
    else if(chosenAnswer == possibleAnswers[10]){
        document.getElementById("images").src = "do not open/images/character/happy1.png";
        audio = new Audio("do not open/sounds/quotes/ofCourse1.wav");
    }
    else if(chosenAnswer == possibleAnswers[11]){
        document.getElementById("images").src = "do not open/images/character/crying1.png";
    }
    else if(chosenAnswer == possibleAnswers[12]){
        document.getElementById("images").src = "do not open/images/character/angry1.png";
    }
    else if(chosenAnswer == possibleAnswers[13]){
        document.getElementById("images").src = "do not open/images/character/angry2.png";
        audio = new Audio("do not open/sounds/quotes/angrySound1.mp3");
    }
    if(audio != null){
        audio.play();
    }
    document.getElementById("characterTalk").textContent = chosenAnswer;
    document.getElementById("characterTalk").hidden = false;
    document.getElementById("sendButton").hidden = false;
    document.getElementById("textField").hidden = false;

}
var conversation = "";
var likeWordVariants = [" like ", " love ", " adore ", " enjoy ", " favorite ", " favourite "];
var dislikeWordVariants = [" dislike "," deslike ", " no like ", " disgust ", " hate ", " unlike "];
var youWordVariants = [" u ", " you ", " your ", " ya ", " hyung "];
var iWordVariants = [" i ", " me ", " imo "];
var positiveWordVariants = [" yes ", " positive ", " sure ", " yea ", " yeah ", " absolutely "];
var negativeWordVariants = [" no ", " nah ", " nope ", " negative ", " not ", " don't "];
var symbolsToRemove = ["!", ".", ",", ";", ":", "&", "(", ")", "-", "_", "@", "#", "$", "%", "¨", "*"];
function checkLikeWord(commandToRead){
    var contains = false;
    for (let i = 0; i < likeWordVariants.length; i++){
        if(commandToRead.includes(likeWordVariants[i])){
            contains = true;
        }
    }
    return contains;
}
function checkDislikeWord(commandToRead){
    var contains = false;
    for (let i = 0; i < dislikeWordVariants.length; i++){
        if(commandToRead.includes(dislikeWordVariants[i])){
            contains = true;
        }
    }
    return contains;
}
function checkYouWord(commandToRead){
    var contains = false;
    for (let i = 0; i < youWordVariants.length; i++){
        if(commandToRead.includes(youWordVariants[i])){
            contains = true;
        }
    }
    return contains;
}
function checkIWord(commandToRead){
    var contains = false;
    for (let i = 0; i < iWordVariants.length; i++){
        if(commandToRead.includes(iWordVariants[i])){
            contains = true;
        }
    }
    return contains;
}
function checkPositiveWord(commandToRead){
    var contains = false;
    for (let i = 0; i < positiveWordVariants.length; i++){
        if(commandToRead.includes(positiveWordVariants[i])){
            contains = true;
        }
    }
    return contains;
}
function checkNegativeWord(commandToRead){
    var contains = false;
    for (let i = 0; i < negativeWordVariants.length; i++){
        if(commandToRead.includes(negativeWordVariants[i])){
            contains = true;
        }
    }
    return contains;
}
function removeSymbols(commandToRead){
    for(x = 0; x < symbolsToRemove.length; x++){
        if(commandToRead.includes(symbolsToRemove[x])){
            commandToRead = commandToRead.replace(/[\!\.\,\;\:\&\(\)\_\@\#\$\%\¨\*]/g, '');
            commandToRead = commandToRead.replace(/-/g, '');
        }
    }
    return commandToRead;
}
function readCommand(){
    document.getElementById("characterTalk").hidden = true;
    var command = " " + document.getElementById("textField").value;
    command = removeSymbols(command);
    if(command[command.length - 1] == "?"){
        command = command.substring(0, command.length - 1) + " " + "?";
    }
    else{
        command = command + " ";
    }
    command = command.toLowerCase();
    document.getElementById("sendButton").hidden = true;
    document.getElementById("textField").hidden = true;
    document.getElementById("textField").value = "";
    if (conversation == "musicLike"){
        if(checkNegativeWord(command) == true && checkPositiveWord(command) == false){
            document.getElementById("images").src = "do not open/images/character/shocked1.png";
            var audio = new Audio("do not open/sounds/quotes/wha1.wav");
            audio.play();
            audio.onended = function(){
                setTimeout(function(){
                    document.getElementById("images").src = "do not open/images/character/shy1.png";
                    audio = new Audio("do not open/sounds/quotes/sorry1.wav");
                    audio.play();
                    document.getElementById("characterTalk").textContent = "Sorry...i'll try a better one next time...";
                    document.getElementById("characterTalk").hidden = false;
                    conversation = "";
                    document.getElementById("sendButton").hidden = false;
                    document.getElementById("textField").hidden = false;
                },1000);
            };
        }
        else if(checkNegativeWord(command) == false && checkPositiveWord(command) == true){
            document.getElementById("images").src = "do not open/images/character/happy1.png";
            document.getElementById("characterTalk").textContent = "Thanks! I choosed that one just for you!";
            document.getElementById("characterTalk").hidden = false;
            conversation = "";
            document.getElementById("sendButton").hidden = false;
            document.getElementById("textField").hidden = false;
        }
        else{
            unknownCommand();
        }
    }
    else if(conversation == "likeMe"){
        if(checkNegativeWord(command) == true && checkPositiveWord(command) == false){
            document.getElementById("images").src = "do not open/images/character/shocked1.png";
            var audio = new Audio("do not open/sounds/quotes/wha1.wav");
            audio.play();
            setTimeout(function(){
                document.getElementById("images").src = "do not open/images/character/crying1.png";
                document.getElementById("characterTalk").textContent = "R...Really?....";
                document.getElementById("characterTalk").hidden = false;
                setTimeout(function(){
                    document.getElementById("images").src = "do not open/images/character/laughing2.png";
                    document.getElementById("characterTalk").textContent = "Just kidding! I know you! Ya'd never think that for real!";
                    audio = new Audio("do not open/sounds/quotes/laugh2.mp3");
                    audio.play()
                    document.getElementById("sendButton").hidden = false;
                    document.getElementById("textField").hidden = false;        
                },4000)
            },2000)
            conversation = "";
        }
        else if(checkNegativeWord(command) == false && checkPositiveWord(command) == true){
            document.getElementById("images").src = "do not open/images/character/shy1.png";
            document.getElementById("characterTalk").textContent = "Heheh...I knew it already!...i mean...so many years already...no way you'd give another answer!";
            var audio = new Audio("do not open/sounds/quotes/laugh1.wav");
            audio.play();
            document.getElementById("characterTalk").hidden = false;
            document.getElementById("sendButton").hidden = false;
            document.getElementById("textField").hidden = false;
            conversation = "";
        }
        else {unknownCommand();};
    }
    else{
        if(command.includes("?")){
            if(checkYouWord(command) == true){
                if(checkLikeWord(command) == true && checkNegativeWord(command) == false && checkDislikeWord(command) == false){
                    if(checkIWord(command) == true){
                        document.getElementById("images").src = "do not open/images/character/happy1.png";
                        var audio = new Audio("do not open/sounds/quotes/ofCourse1.wav");
                        audio.play();                        
                        document.getElementById("characterTalk").textContent = "What a question...of course i do!";
                        document.getElementById("characterTalk").hidden = false;
                        conversation = "likeMe";
                        setTimeout(function(){
                            document.getElementById("images").src = "do not open/images/character/idle4.png";
                            document.getElementById("characterTalk").textContent = "What about you? You like me?";
                            document.getElementById("sendButton").hidden = false;
                            document.getElementById("textField").hidden = false;
                        },3000);
                    }
                    else if(command.includes(" color ")){
                        document.getElementById("images").src = "do not open/images/character/confused1.png";
                        var audio = new Audio("do not open/sounds/quotes/huh1.wav");
                        audio.play();
                        document.getElementById("characterTalk").textContent = "I...thought you knew already...";
                        document.getElementById("characterTalk").hidden = false;
                        setTimeout(function(){
                            document.getElementById("images").src = "do not open/images/character/idle5.png";
                            document.getElementById("characterTalk").textContent = "Red, of course! Best color ever!";
                            document.getElementById("sendButton").hidden = false;
                            document.getElementById("textField").hidden = false;
                        },3000);
                    }
                    else{randomAnswer();}
                }
                else if((checkLikeWord(command) == false && checkDislikeWord(command) == true)||(checkLikeWord(command) == true && checkNegativeWord(command) == true)){
                    if(checkIWord(command) == true){
                        document.getElementById("images").src = "do not open/images/character/idle4.png";
                        var audio = new Audio("do not open/sounds/quotes/noWay1.wav");
                        audio.play();
                        document.getElementById("characterTalk").textContent = "No way!...After these years ya still asking that?";
                        document.getElementById("characterTalk").hidden = false;
                        document.getElementById("sendButton").hidden = false;
                        document.getElementById("textField").hidden = false;
                    }
                    else{randomAnswer();}
                }
                else if(command.includes(" are ")||command.includes(" r ")||command.includes(" is ")){
                    document.getElementById("images").src = "do not open/images/character/confused1.png";
                    var audio = new Audio("do not open/sounds/quotes/huh1.wav");
                    audio.play();
                    document.getElementById("characterTalk").textContent = "I...told you already...i'm the Flamebot...";
                    document.getElementById("characterTalk").hidden = false;
                    document.getElementById("sendButton").hidden = false;
                    document.getElementById("textField").hidden = false;
                }
                else{randomAnswer();}
            }
            else if(checkIWord(command) == true){
                if(checkLikeWord(command) == true && checkNegativeWord(command) == false && checkDislikeWord(command) == false){
                    if(command.includes(" color ")){
                        document.getElementById("images").src = "do not open/images/character/idle2.png";
                        var audio = new Audio("do not open/sounds/quotes/tooEasy1.mp3")
                        audio.play()
                        audio.onended = function(){
                            document.getElementById("images").src = "do not open/images/character/idle2.png";
                            document.getElementById("characterTalk").textContent = "Royal Blue of course!";
                            document.getElementById("characterTalk").hidden = false;
                            setTimeout(function(){
                                document.getElementById("images").src = "do not open/images/character/blinking1.png";
                                var audio = new Audio("do not open/sounds/quotes/laugh1.wav");
                                audio.play();
                                document.getElementById("characterTalk").textContent = "Why ya think i chose this background color?";
                                document.getElementById("characterTalk").hidden = false;
                                document.getElementById("sendButton").hidden = false;
                                document.getElementById("textField").hidden = false;    
                            },3000);        
                        }
                    }
                    else {randomAnswer();}
                }
                else if(command.includes(" are ")||command.includes(" r ")||command.includes(" am ")){
                    if(command.includes(" who ")){
                        document.getElementById("images").src = "do not open/images/character/idle3.png";
                        var audio = new Audio("do not open/sounds/quotes/laugh1.wav");
                        audio.play();
                        document.getElementById("characterTalk").textContent = "Heh, you're my imo of course!";
                        document.getElementById("characterTalk").hidden = false;
                        setTimeout(function(){
                            document.getElementById("images").src = "do not open/images/character/shy1.png";
                            document.getElementById("characterTalk").textContent = "I were made just for you! So no way i'm talking to someone else.";
                            document.getElementById("characterTalk").hidden = false;
                            document.getElementById("sendButton").hidden = false;
                            document.getElementById("textField").hidden = false;
                        },4000);
                    }
                    else {randomAnswer();}
                }
                else {randomAnswer();}
            }
            else if(command.includes(" my ")){
                if(command.includes(" age ")){
                    document.getElementById("images").src = "do not open/images/character/confused1.png";
                    document.getElementById("characterTalk").textContent = "Well...i don't know what day exactly is today...";
                    document.getElementById("characterTalk").hidden = false;
                    setTimeout(function(){
                        document.getElementById("images").src = "do not open/images/character/idle3.png";
                        document.getElementById("characterTalk").textContent = "But the first day i'm talking to you, that is...25/10/2022, you are 17!";
                        document.getElementById("characterTalk").hidden = false;
                        document.getElementById("sendButton").hidden = false;
                        document.getElementById("textField").hidden = false;
                    },4000)
                }
                else {randomAnswer();}
            }
            else {randomAnswer();}
        }
        else if(command.includes("play")){
            if(command.includes("song")||command.includes("music")){
                var songs = ['do not open/sounds/songs/akon, eminem - smack that - original.mp3', 'do not open/sounds/songs/backstreet boys - i want it that way - original.mp3', 'do not open/sounds/songs/bond - fuego - original.mp3', 'do not open/sounds/songs/bust a groove - 2 bad - original.mp3', 'do not open/sounds/songs/camila cabello, young thug - havana - kfir ochaion.mp3', 'do not open/sounds/songs/dirilis ertugrul - jenerik muzigi - original.mp3', 'do not open/sounds/songs/dragon ball gt - dan dan kokoro hikareteku - we.b.mp3', 'do not open/sounds/songs/initial d first stage - be my babe - jilly.mp3', 'do not open/sounds/songs/kingspade - drunk in the club - original.mp3', 'do not open/sounds/songs/marvel vs capcom clash of super heroes - roll - instrumental.mp3', 'do not open/sounds/songs/michael jackson - smooth criminal - original.mp3', 'do not open/sounds/songs/ne yo - beautiful monster - original.mp3', 'do not open/sounds/songs/pink, nate ruess - just give me a reason - sam tsui, kylee.mp3', 'do not open/sounds/songs/power rangers time force - theme - jasan radford.mp3', 'do not open/sounds/songs/saint seiya - pegasus fantasy - we.b, amalee.mp3', 'do not open/sounds/songs/sonic 3d blast - youre my hero - debbie morris.mp3', 'do not open/sounds/songs/sonic forces - ghost town - turret 3471.mp3', 'do not open/sounds/songs/the legend of zelda ocarina of time - gerudo valley - gipsy.mp3', 'do not open/sounds/songs/tony hawk pro skater 2 - cyclone - dub pistols.mp3', 'do not open/sounds/songs/usher - dj got us fallin in love - original.mp3'];
                var playedAudio = new Audio(songs[Math.floor(Math.random() * songs.length)]);
                document.getElementById("images").src = "do not open/images/character/playingMusic1.png";
                playedAudio.play();
                playedAudio.onended = function(){
                    document.getElementById("images").src = "do not open/images/character/idle3.png";
                    playedAudio = new Audio('do not open/sounds/quotes/laugh1.wav');
                    playedAudio.play();
                    document.getElementById("characterTalk").textContent = "Liked it?";
                    document.getElementById("characterTalk").hidden = false;
                    conversation = "musicLike";
                    document.getElementById("sendButton").hidden = false;
                    document.getElementById("textField").hidden = false;
                };
            }
            else {unknownCommand();}
        }
        else if(command.includes("dance")){
            document.getElementById("images").src = "do not open/images/character/laughing1.png";
            document.getElementById("characterTalk").hidden = false;
            document.getElementById("characterTalk").textContent = "Heheh...better not...you'd not be able to see it properly!...";
            var audio = new Audio("do not open/sounds/quotes/laugh1.wav");
            audio.play();
            setTimeout(function(){
                document.getElementById("images").src = "do not open/images/character/usingPower1.png";
                document.getElementById("characterTalk").textContent = "but i can do this!!!";
                audio = new Audio("do not open/sounds/quotes/powerSound1.mp3");
                audio.play();
                audio.onended = function(){
                    document.getElementById("images").src = "do not open/images/character/blinking1.png";
                    audio = new Audio("do not open/sounds/quotes/allRight1.mp3");
                    audio.play()
                    document.getElementById("characterTalk").textContent = "Enjoy it!...if it didn't work...your browser probably blocked pop ups...allow it if u can...or else you'd not be able to see the video.";
                    document.getElementById("sendButton").hidden = false;
                    document.getElementById("textField").hidden = false;
                    var videosToOpen = ['https://www.youtube.com/watch?v=rnM8XsuKi0M', "https://www.youtube.com/watch?v=vGoCvNJe12o", "https://www.youtube.com/watch?v=JtgXGkYeZAc", "https://www.youtube.com/watch?v=Gj8f-efFo24"]
                    var selectedUrl = videosToOpen[Math.floor(Math.random() * videosToOpen.length)];
                    window.open(selectedUrl, '_blank');
                };
            }, 2000)
        }
        else if(command.includes( " close ")||command.includes( " bye ")||command.includes( " byebye ")||command.includes( " goodbye ")){
            document.getElementById("images").src = "do not open/images/character/confused1.png";
            document.getElementById("characterTalk").textContent = "Awww...Going already?...";
            document.getElementById("characterTalk").hidden = false;
            setTimeout(function(){
                document.getElementById("images").src = "do not open/images/character/idle3.png";
                var audio = new Audio("do not open/sounds/quotes/seeYaLater1.mp3");
                audio.play()
                document.getElementById("characterTalk").textContent = "Come back soon! I love u lots imo!";
                setTimeout(function(){
                    window.close();
                },5000);
            },3000);
        }
        else {unknownCommand();}
    }
}