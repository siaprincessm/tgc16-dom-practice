let number = 0;

function getColor() {
    if( number % 2 == 0) {
        return "green"
    } else {
        return "red"
    }
}

function runController() {
    document.querySelector("#increment").addEventListener('click', function (){
        number ++;
        render ();
    })
    document.querySelector("#decrement").addEventListener('click', function (){
        number --;
        render();
    })
    document.querySelector("#reset").addEventListener('click', function (){
        number =0;
        render();
    })

}

function render() {
    let box = document.querySelector("#box");

    box.innerHTML = number;
    box.style.color = getColor();
}

render();
runController();
    