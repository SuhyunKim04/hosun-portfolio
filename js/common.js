const hosun = () => {
    const contents = document.querySelector(".contents");
    if(!contents){
        return false;
    }
    const box = document.querySelector(".box");
    const pics = contents.querySelector(".pics");
    const click = contents.querySelector(".click");

    pics.addEventListener('click',(e) => {
        console.log('click')
        box.classList.toggle('open')
        click.classList.toggle('close');
    })
    
}

const height = () =>{
    const btn = document.querySelector('.top');
    let doc = document.documentElement;
    window.addEventListener('scroll',() =>{
       
        if(window.pageYOffset > 500) {
            btn.classList.add('visible')
        }else{
            btn.classList.remove('visible')
        }

        btn.addEventListener('click', (e) =>{
            console.log('test')
            e.preventDefault();
            doc.scrollTop = 0;
            
        })
    })
}
    // var btn = document.querySelector(".top");
    // doc = document.documentElement,
    // // offset,
    // // scollPos,
    // // docHeight;

    // docHeight = doc.offsetHeight;
    // scrollPos = doc.scrollTop;
    // console.log(scrollPos);


height();
hosun();

