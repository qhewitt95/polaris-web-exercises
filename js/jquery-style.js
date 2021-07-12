$(document).ready(function (){

    var h1 = $("h1")
    h1 = $("h1")

    console.log(h1)
    console.log(h1.html("The champ is here "))

    alert("Watch this!")

    var h2= $('h2')
    h2 = $('h2')

    console.log(h1)
    console.log(h2.html("This is actually kinda wack #rip"))

    $( "#bigheader" ).click(function() {
        $(this).css('background-color', 'red');
    });
    $( "#ptagss" ).dblclick(function() {
        $(this).css('font-size', '40px');
    });
    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );
    $('#biglist').css({backgroundColor: "#ffe", borderLeft: "10px solid #ccc" })

    $('#samelist').css('background-color', 'green', 'border:')
    $('#pTag').css({backgroundColor: "#ddd", borderRight: "10px solid #bbb"})

    $('.codeup').css('border', '1px red solid').css({backgroundColor: "#ffe", borderTop: "10px solid black"});

    $('li').css('font-size', '20px')


    $('#main-header').hover(
        function() {
            $(this).css('background-color', 'red');
        },
        function() {
            $(this).css('background-color', 'green');
        }
    );

    /*$('h1').css('background-color', 'yellow');
    $('p').css('background-color', 'yellow');
    $('li').css('background-color', 'yellow');*/
}) 