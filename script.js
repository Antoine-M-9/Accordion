const selected = document.getElementsByClassName('questions');
console.log(selected);

let i;

for (i = 0; i < selected.length; i++) {
    selected[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}