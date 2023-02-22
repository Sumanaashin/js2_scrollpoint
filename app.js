var getprogressbar = document.getElementById('progress-bar');
// console.log(getprogressbar);

window.onscroll= function(){
    scrollpoint();
}

function scrollpoint(){
    // console.log("Hey I am working");

    var getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop);
    var getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight);
    var getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);

    var calcheight = getscrollheight - getclientheight;
    // console.log(calcheight);
    var finalscroll = Math.round((getscrolltop * 100) / calcheight);
    // console.log(finalscroll);

    getprogressbar.style.width = `${finalscroll}%`;

}


function printme(){
    window.print();
}
