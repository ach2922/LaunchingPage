window.addEventListener("load", function () {
        var theRealease = new Date("March 2, 2025 00:00:00").getTime();

        var interval = setInterval(function () {
                var d = theRealease - new Date().getTime();

                document.querySelector(".showDays").innerHTML = Math.floor(d / (1000 * 60 * 60 * 24));
                document.querySelector(".showHours").innerHTML = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                document.querySelector(".showMinutes").innerHTML = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
                document.querySelector(".showSeconds").innerHTML = Math.floor((d % (1000 * 60)) / 1000);

                document.querySelector(".loader").style.opacity = "0";
                document.querySelector(".content").className = "content animated fadeInDownBig";
                // If the count down is over, write some text 
                if (d < 0) {
                        clearInterval(interval);
                        document.querySelector(".countdown").innerHTML = "";
                        document.getElementById("title").innerHTML = 'TROPIC NETWORK IS NOW LIVE!';
                        document.querySelector(".finished").innerHTML = 'TROPIC NETWORK has now been released. Join now at <span id="ip">MC.TROPIC-NETWORK.XYZ</span>';
                }
        }, 1000);
});