document.addEventListener('DOMContentLoaded', function () {

    let table = document.querySelector('#pixelCanvas');
    let submitInput = document.querySelector('input[type="submit"]');
    let colorPicker = document.querySelector('#colorPicker');

    function changeColor() {
        let tdColor = this.style.backgroundColor;
        if (tdColor === '' || tdColor === 'rgb(255, 255, 255)') {
            this.style.backgroundColor = colorPicker.value;
        } else {
            this.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }

    function makeGrid() {
        let height = document.querySelector('#inputHeight').value,
            width = document.querySelector('#inputWeight').value;

        for (let i = 0; i < height; i++) {
            let row = table.insertRow();
            for (let j = 0; j < width; j++) {
                let cell = row.insertCell();
                cell.onclick = changeColor;
            }
        }
    }

    submitInput.addEventListener('click', function (e) {
        table.innerHTML = '';
        e.preventDefault();
        makeGrid();
    });

});
