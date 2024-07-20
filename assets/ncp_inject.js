function injectNcd() {
    var el = document.getElementsByClassName('mw-ncd-wrapper')[0];
    var clone = el.cloneNode(true);
    var cartRecap = document.getElementsByClassName('Cart__Recap')[0];
    console.log("Clone ncp : ", clone);
    console.log("Waiting to inject clone NCP");
    setTimeout(() => {
        console.log("Injecting clone NCP: ", clone);
        console.log("Injecting into CartRecap: ", cartRecap);
        var newEl = document.createElement("div");
        newEl.innerText = "NCD";
        newEl.style.fontSize = "18px";
        cartRecap.appendChild(newEl);
        cartRecap.appendChild(clone);
        console.log("Finished injecting clone NCP");
        var cartRecapWithClone = document.getElementsByClassName('Cart__Recap')[0];
        console.log("Cart recap with clone: ", cartRecapWithClone);

    }, 6000);

   }


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


$(window).on("load", function () {
    var checkExist = setInterval(function () {
        if ($('.mw-ncd-wrapper').length) {
            console.log("EXISTS.");
            injectNcd();
            clearInterval(checkExist);
        }
    }, 100); // check every 100ms

    checkExist;

});