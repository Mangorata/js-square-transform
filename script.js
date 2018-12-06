let rotate = 0;
const deg = 10;

const btn = document.querySelector('button');
const div = document.querySelector('div');










//nasłuchaiwacze

btn.addEventListener('click', function() {
                     
        // div.style.transform = 'rotate(5deg)';
    //rotate = rotate + deg; a krocej to bedzie: 
    rotate += deg;
    div.style.transform = "rotate(" + rotate + "deg)";
    //"rotate(0deg)";
    div.style.transition = "0.5s";
});
