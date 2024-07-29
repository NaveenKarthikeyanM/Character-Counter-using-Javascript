const text = document.getElementById('text');
const count = document.getElementById('count');
const remain = document.getElementById('remain');

const maxChars = 150;

text.addEventListener('input', () => {
    const textLength = text.value.length;
    count.textContent = textLength;
    remain.textContent = maxChars - textLength;
    if(remain.textContent==0){
        alert("Exceeded the Limit")
    }
});