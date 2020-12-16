  
 function rzut() 
{ 
        setTimeout(function () 
        { 
            var liczba = Math.floor(Math.random() * 6) + 1; 
        
            document.querySelector(".zdj").setAttribute
            ("src", "kostka" + liczba + ".png"); 
            document.querySelector("h2").innerHTML 
                = (liczba);
                 
        }, 500); 
    
} 