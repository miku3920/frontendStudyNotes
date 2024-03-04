// script.js
$(document).ready(function() {
    $('.tab').click(function() {
        const tabId = $(this).data('tab');
        $('.tab-content').removeClass('active');
        $('#' + tabId).addClass('active');
    });

    $('#tab1').addClass('active');
});
