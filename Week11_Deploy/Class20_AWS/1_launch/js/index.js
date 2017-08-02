$(function(){
    $('#quote').resizable();
    var pages = {
        'home': {
            'title': 'Home',
            'content': '<h1>Hi MOM!</h1>'
        },
        'projects': {
            'title': 'Projects',
            'gallery': [
                {'image':'img/gallery/1.png', 'info': 'This was a fun project'},
                {'image':'img/gallery/store.png', 'info': 'This project sucked'},
            ]
        },
        'about': {
            'title': 'About Us and our friends'
        },
        'team': {
            'title': 'Team that is totally awesome',
            'members': [
                {
                    'file': 'mi.jpg',
                    'name': 'Mi Dixon',
                    'title': 'Coffee Specialist',
                    'description': 'Being able to get a lot of accomplished with no sleep'
                },
                {
                    'file': 'jonathan.png',
                    'name': 'Jonathan Boswell',
                    'title': 'Chief Tech Guy',
                    'description': 'Building with Love and Patience'
                },
                {
                    'file': 'aaron.jpg',
                    'name': 'Aaron Alvarado',
                    'title': 'The Streets',
                    'description': 'Meta visualization'
                },
                {
                    'file': 'nicole.jpg',
                    'name': 'Nicole Bai',
                    'title': 'Digital Marketing',
                    'description': 'Non-stop sleeping'
               },
               {
                    'file': 'leanne.jpg',
                    'name': 'Leanne Lee',
                    'title': 'Designer', 
                    'description': 'Good at freaking out',
               },
               {
                   'file': 'karim.jpg',
                   'name': 'Karim Ali',
                   'title': 'Graphic Designer',
                   'description': 'Sees everything in green'
               },
               {
                   'file': 'David.jpg',
                   'name': 'David Pettijohn',
                   'title': 'Expert movie watcher',
                   'description': 'Binge watching movies all day',
               },
               {
                   'file': 'josh.jpg',
                   'name': 'Josh Chu',
                   'title': 'Marketing',
                   'description': 'Never sits still',
                }
            ]
        }
    }

    function loadPages()
    {
        // Load titles
        $.each(pages, function(key, value){
            var id = '#' + key;
            $(id + ' h2').html(value.title);
        });

        // Load gallery
        $.each(pages.projects.gallery, function(key, item)
        {
            var s = "";
            s += '<div class="col-xs-12 col-sm-6">';
            s += '  <img src="' + item.image + '" class="img-thumbnail"/>';
            s += '</div>';
            $('#gallery').append(s);
        });

        // Load team members
        $.each(pages.team.members, function(key, member){
            var s = "";

            s += '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">';
            s += '  <div class="person">';
            s += '      <img src="./img/' + member.file + '" class="img-thumbnail img-circle"/>';
            s += '      <h3>' + member.name + '</h3>';
            s += '      <h4>' + member.title + '</h3>';
            s += '      <p>' + member.description + '</p>';
            s += '  </div>';
            s += '</div>';

            $('#members').append(s);
        });
    }

    loadPages();

    //This just closes the "hamburger" menu whenever a menu item is clicked
    $('.nav a').on('click', function(){
        var _opened = $(".navbar-collapse").hasClass("collapse in");
        if (_opened === true) {
            $('.navbar-toggle').click();
        }
    });
});