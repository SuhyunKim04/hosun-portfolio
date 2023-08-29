const hosun = () => {
    const contents = document.querySelector(".contents");
    const box = document.querySelector(".box");
    const pics = contents.querySelector(".pics");
    const click = contents.querySelector(".click");

    pics.addEventListener('click',(e) => {
        console.log('click')
        box.classList.toggle('open')
        click.classList.toggle('close');
    })
}

hosun();