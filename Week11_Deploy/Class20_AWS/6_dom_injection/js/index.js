$(function(){
    
    var songs = ["Halo"];
    var artists = ["Beyonce"];
    var images = ["song.jpg"];

    $.each(songs, function(index, song){
        var string = "";
        string += "<!--  you can build a string -->";
        string += "  <!-- using multiple lines -->";
        string += "  <!-- like this -->";
        string += '<!-- with single quotes or double quotes -->';
        
        //can you take the html template you style and inject it into the DOM?

        //can you get the button to set the "Now Playing" <h3> tag to whatever is clicked?
        //  hint $('#songs').on('click','.btn', function(){});

        $('#songs').append(string);
    });

    //BONUS: Can you replace all the arrays with 1 object called playlists?
    //What how would you structure it?
    //Give it a shot! :)
    var playlists = {
        'happy': {},
        'sad': {},
        'dance': {}
    }
});
