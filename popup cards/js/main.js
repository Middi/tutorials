$(function(){
    playerCard();
});

function playerCard() {
    $('.player').each(function(){
        var $this = $(this),
            name = $this.text(),
            height = $this.data('height'),
            weight = $this.data('weight'),
            place = $this.data('place');

            console.log(name, height, place);

            var template = '<div class="player-card animated zoomIn">'+
            '<img src="images/' + name + '.jpg" alt="">'+
            '<h4>'+ name + '</h4>'+
            '<ul>'+
                '<li><strong>Height:</strong> ' + height + '</li>'+
                '<li><strong>Weight:</strong> ' + weight + '</li>'+
                '<li><strong>Birthplace:</strong> ' + place + '</li>'+
            '</ul>'+
        '</div>';

        $this.append(template);
    });
}