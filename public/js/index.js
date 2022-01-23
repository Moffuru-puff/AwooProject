let $imgAwoo2 = document.querySelector(".imgAwoo2")
let $imgAwoo3 = document.querySelector(".imgAwoo3")

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

