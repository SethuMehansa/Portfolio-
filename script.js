let length=0;
let text="Here's a collection of fun, interactive websites I've built to explore creative coding and design.These projects are a mix of experimentation, learning."
typing();
function typing(){
        if(length<text.length){
        document.getElementById("typing").innerHTML+=text.charAt(length);
        length++;
        setTimeout(typing,)
        
    }
}