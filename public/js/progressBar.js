$(document).ready(function(){
    //require file to pull user data
    
    // Variables 
    var goalAmount = 4000; // Goal amount from user data db.workOutChallenge.goal
    var calsBurned = 2774; // Total from users workouts logged 
    var percentage = (calsBurned / goalAmount) * 100;

    // Function to create the progress bar
    function goalProgress(){

       // Generate the HTML
        var progressBar = '<h4> Total Calories Burned: '+calsBurned+'</h4>'+
        '<div class ="progressBar" style= width:'+ percentage+'%;></div>'+
        '<span id="goal_start" style="float: left; font-size: 18px; padding: 5px;">'+0+'</span>'+
        '<span id="goal-target" style="float: right; font-size: 18px; padding 5px;">'+goalAmount+'</span>';
        
        
        // $('.progressBar').animate({width: percentage + '%'}, 1000);
        $("#prog-bar").append(progressBar);
    };
    goalProgress();
})

