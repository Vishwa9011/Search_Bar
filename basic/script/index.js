console.log("index.js")

const para = document.querySelector('.para-text');

const search = document.querySelector('#search');

search.addEventListener('input', function (e) {
     const regExp = new RegExp(e.target.value, 'gi');
     para.innerHTML = para.textContent.replace(regExp, `<mark>$&</mark>`)
})
