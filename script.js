m=0;
var y; 

function start()
{
    y = setInterval(run,1)

    function run()
    {
        m += 1
        var x=document.getElementById("img")
        x.style.marginLeft= m +`px`;
    } 
}
function pause()
{
 clearInterval(y)
}
function stop()
{
    y = setInterval(reverse, 1)
    x = document.getElementById("img")
    
    function reverse() {
        m -= 1;
        x.style.marginLeft= m + `px`;
        if (m == 0) {
            clearInterval(y)
        }
    }

    
}