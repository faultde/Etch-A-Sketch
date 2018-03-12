
let canvas = document.getElementById('canvas');


/* Create Grid
function createGrid(x){
	for (let i = 1; i <= x; i++){
		let div = document.createElement('div');
		div.className = 'grid-item';
		canvas.appendChild(div);

	}
}
*/
//

function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#canvas").append("<div class='grid-item'></div>");
        };
    };
    $(".grid-item").width(680/x);
    $(".grid-item").height(480/x);
};
 $(".grid-item").hover(function(){
 	this.css("background-color","red")});