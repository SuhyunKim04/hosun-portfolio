const hosun = () => {
    const contents = document.querySelector(".contents");
    const box = document.querySelector(".box");
    const pics = contents.querySelector(".pics");

    pics.addEventListener('click',(e) => {
        console.log('click')
        box.classList.toggle('open')
    })
}

hosun();