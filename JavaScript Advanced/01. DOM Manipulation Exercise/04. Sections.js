function create(sentences) {
    let div = document.getElementById('content');

    for (sentence of sentences) {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = sentence;
        paragraph.style.display = 'none';

        let innerDiv = document.createElement('div');
        innerDiv.appendChild(paragraph);
        innerDiv.addEventListener('click', displaySentence);

        div.appendChild(innerDiv);
    }

    function displaySentence() {
        let paragraph = this.firstChild;
        paragraph.style.display = 'inline';
    }
}
