$(document).ready(function(){
    $('.nav-list').click(function(e) {
        $('.main-area > p').text(e.target.id)
    })
});
