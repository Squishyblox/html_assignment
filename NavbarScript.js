
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("pot").style.top = "60px";
        } else {
            document.getElementById("pot").style.top = "-20px";
        }
        prevScrollpos = currentScrollPos;
    }

    window.onresize = function() {
        document.getElementById("mySidepanel").style.width = "0";
    }

    function sideNav(){
        document.getElementById("mySidepanel").style.width = "250px";
    }

    function closeNav(){
        document.getElementById("mySidepanel").style.width = "0";
    }