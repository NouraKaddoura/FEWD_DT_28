$(function(){
    var pages = {
        'home': {
            'title': 'Home'
        },
        'projects': {
            'title': 'Projects',
            'gallery': [
                {'image':'img/gallery/1.png'}
            ]
        },
        'about': {
            'title': 'About Us'
        },
        'team': {
            'title': 'Team'
        }
    }

    function loadPages()
    {
        $.each(pages.projects.gallery, function(key, item)
        {
            console.log(item.image);
            var s = "";
            s += '<div class="col-xs-6">';
            s += '  <img src="' + item.image + '" class="img-thumbnail"/>';
            s += '</div>';
            $('#gallery').append(s);
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