document.getElementById('open-credit').addEventListener("click", () => {
    document.querySelector('.credits').classList.add('active');
});

document.getElementById('close-credit').addEventListener("click", () => {
    document.querySelector('.credits').classList.remove('active');
});