
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });

  })

  window.onload = () => {
    let audio = document.getElementById("myAudio");
    let fakeButton = document.createElement("button");  
    fakeButton.style.display = "none"; // Tombolnya invisible
    document.body.appendChild(fakeButton);

    fakeButton.click(); // Pura-pura user ngeklik
    audio.play().catch(() => console.log("Autoplay gagal, butuh klik manual"));
};


function position(id){
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}