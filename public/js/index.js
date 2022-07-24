let $imgAwoo2 = document.querySelector(".imgAwoo2");
let $imgAwoo3 = document.querySelector(".imgAwoo3");
let $imgAwoo4 = document.querySelector(".imgAwoo4");
let $awoon = document.querySelector(".awoon");
let $awooBody = document.querySelector(".awooBody");
let $monika = document.querySelector(".monika");
let $monika2 = document.querySelector(".monika2");
let $monika3 = document.querySelector(".monika3");
let $monikaText = document.querySelector(".monikaText");
let $monikaText2 = document.querySelector(".monikaText2");
let $aaa = document.querySelector(".aaa");
var timeoutID
var cargar = false

$imgAwoo2.addEventListener("click", function(e){
    e.preventDefault
    $imgAwoo2.style.display = "none"
    $imgAwoo3.style.display = "block"
    
})

$imgAwoo3.addEventListener("click", function(e){
    e.preventDefault
    $imgAwoo3.style.display = "none"
    $imgAwoo2.style.display = "block"
    
})

$imgAwoo4.addEventListener("click", function(e){
    e.preventDefault
    $awoon.style.display = "none"
    $awooBody.classList.remove("awooBody")
    $awooBody.classList.add("glitch")
    
    if($awooBody.classList.contains("glitch")){

        timeoutID = window.setTimeout(showMonika, 3000)
      
      function showMonika() {
        $monika.style.display = "flex"
        $monika.classList.add("ready")
        $monika2.classList.add("ready")

        if($monika.classList.contains("ready")){

          timeoutID = window.setTimeout(showMonika2, 3000)
        
          function showMonika2() {
            $monika.style.display = "none"
            $monika2.style.display = "flex"
            $monikaText.style.display = "flex"

            if($monika2.classList.contains("ready")){

              timeoutID = window.setTimeout(showMonika3, 3000)
            
              function showMonika3() {
                $monika2.style.display = "none"
                $monikaText.style.display = "none"
                $monika3.style.display = "flex"
                $monikaText2.style.display = "flex"
                $monika3.classList.add("ready")

                if($monika3.classList.contains("ready")){

                  timeoutID = window.setTimeout(re, 3000)

                  function re() {
                    cargar = true
                    location.reload()

                  }

                }
                
              }
            
            }

          }
        
        }
      }



        }
})





