window.onload = function() {
    var seg = 00;
    var mil = 00;
    var contseg = document.getElementById("seg")
    var contmil = document.getElementById("mil")
    var start = document.getElementById("start")
    var stop = document.getElementById("stop")
    var reset = document.getElementById("reset")
    var Interval;

    start.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);        
    }

    stop.onclick = function() {
        clearInterval(Interval)
    }

    reset.onclick = function() {
        clearInterval(Interval);
        mil = 00;
        seg = 00;
        contmil.innerHTML = mil;
        contseg.innerHTML = seg;
    }

    function startTimer () {
        mil++;

        if(mil <=9) {
        contmil.innerHTML = "0" + seg; 
        }

        if(mil > 9)
        contmil.innerHTML = mil;

        if(mil > 99) {
            console.log("seg")
            seg++;
            contseg.innerHTML = "0" + seg;
            mil = 0
            contmil.innerHTML = "0" + 0;
        }

        if(seg > 9) {
            contseg.innerHTML = seg;
        }
    }
}
