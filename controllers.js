 HeaderController($scope, $location) 
 { 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
 }

$('#viewport').html($(window).width());

$(window).resize(function () {
    var viewportWidth = $(window).width();
    $('#viewport').html(viewportWidth + "px");
});

