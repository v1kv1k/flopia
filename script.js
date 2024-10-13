document.getElementById('copyText').addEventListener('click', function(event) {
    event.preventDefault();
    const textToCopy = this.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        this.classList.add('copied');
        setTimeout(() => {
            this.classList.remove('copied');
        }, 500);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});