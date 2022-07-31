let $imgAwoo2 = document.querySelector(".imgAwoo2");
let $imgAwoo3 = document.querySelector(".imgAwoo3");
let $imgAwoo4 = document.querySelector(".imgAwoo4");
let $awoon = document.querySelector(".awoon");
let $awooBody = document.querySelector("#bod");
let $monika = document.querySelector(".monika");
let $monika2 = document.querySelector(".monika2");
let $monika3 = document.querySelector(".monika3");
let $monikaText = document.querySelector(".monikaText");
let $monikaText2 = document.querySelector(".monikaText2");
let $monikaBack = document.querySelector(".monikaBack");
let $aaa = document.querySelector(".aaa");
let $soyInvi = document.querySelector(".soyInvi");
let $soyInvi2 = document.querySelector(".soyInvi2");
let $soyInvi3 = document.querySelector(".soyInvi3");
let $soyInvi4 = document.querySelector(".soyInvi4");
let $soyInvi5 = document.querySelector(".soyInvi5");
let $soyInvi6 = document.querySelector(".soyInvi6");
let $soyInvi7 = document.querySelector(".soyInvi7");
let $noSoy = document.querySelector(".noSoy");
let $noSoy2 = document.querySelector(".noSoy2");
let $noSoy3 = document.querySelector(".noSoy3");
let $noSoy4 = document.querySelector(".noSoy4");
let $noSoy5 = document.querySelector(".noSoy5");
let $noSoy6 = document.querySelector(".noSoy6");
var timeoutID

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
    
    if(Math.round(Math.random()) === 0 && Math.round(Math.random()) === 0 ) {
      $soyInvi.style.display = "none"
      $soyInvi2.style.display = "none"
      $soyInvi3.style.display = "none"
      $soyInvi4.style.display = "none"
      $soyInvi5.style.display = "none"
      $soyInvi6.style.display = "none"
      $soyInvi7.style.display = "none"
      $noSoy.style.display = "flex"
      $noSoy2.style.display = "flex"
      $noSoy3.style.display = "flex"
      $noSoy4.style.display = "flex"
      $noSoy5.style.display = "flex"
      $noSoy6.style.display = "flex"
      $awooBody.classList.remove("awooBody")
      $awooBody.classList.add("monikaBack")
    } else {

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
                    location.reload()

                  }

                }
                
              }
            
            }

          }
        
        }
      }



        }
    }


})





