$(document).ready(function () {
    $('.insert').click(function () {
        $('.addItems').show("slow");
    });
    $('.close').click(function () {
        $('.addItems').hide('slide', { direction: 'down' }, 'slow');
    });
});


function dataTable($scope) {
    $scope.items = [
        {
            id: '11111',
            nome: 'JohnDoe Number1',
            email: 'Angel',
            telefone: '111-111-1111'
        },
        {
            id: '22222',
            nome: 'JaneDoe Number1',
            email: 'Bigfoot',
            telefone: '222-222-2222'
        },
        {
            id: '33333',
            nome: 'JohnDoe Number2',
            email: 'Comfy',
            telefone: '333-333-3333'
        },
        {
            id: '44444',
            nome: 'JaneDoe Number2',
            email: 'Dreamy',
            telefone: '444-444-4444'
        }];
    $scope.addItem = function (item) {
        $scope.items.push(item);
        $scope.item = {};
    }
    $scope.removeItem = function (index) {
        $scope.items.splice(index, 1);
    }
};
