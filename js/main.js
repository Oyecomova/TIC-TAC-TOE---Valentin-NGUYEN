$(document).ready(function() {
var oldcolor;
var tour = "j1";
scoreX = 0;
score0 = 0;
gagne = false;

  $('td').hover(function(){
          oldcolor = $(this).css('color');
          oldbackground = $(this).css('background');
          if(tour=="j1")
          {
            $(this).css({
                'background' : 'navy',
                'color'      : 'white'
            });
          }
          else
          {
            $(this).css({
                'background' : 'darkred',
                'color'      : 'white'
            });
          }
        },
      function(){
          $(this).css({
            'color' : oldcolor,
            'background' : oldbackground
          });
        }
);


      $('td').click(function() {
        if(gagne == false)
        {
          if (tour=="j1")
          {
              $(".cj2").css({'color' : "red"});
              $(".cj1").css({'color' : "black"});
              if ($(this).is(':empty')){
              $(this).html("X");
              $(this).css({
                'color' : 'white',
                'background' : 'blue'
              });
              tour = "j2";
              if (($("#1").html() === "X" && $("#2").html() === "X" && $("#3").html() === "X")
                || ($("#4").html() === "X" && $("#5").html() === "X" && $("#6").html() === "X")
                || ($("#7").html() === "X" && $("#8").html() === "X" && $("#9").html() === "X")
                || ($("#1").html() === "X" && $("#4").html() === "X" && $("#7").html() === "X")
                || ($("#2").html() === "X" && $("#5").html() === "X" && $("#8").html() === "X")
                || ($("#3").html() === "X" && $("#6").html() === "X" && $("#9").html() === "X")
                || ($("#1").html() === "X" && $("#5").html() === "X" && $("#9").html() === "X")
                || ($("#3").html() === "X" && $("#5").html() === "X" && $("#7").html() === "X")
                 )
                  {
                    alert("Le joueur 1 a gagné");
                    scoreX = $(".resj1").html();
                    scoreX++;
                    $(".resj1").html(scoreX);
                    gagne = true;
                    //tour = "";
                  }
                }
          }
          else if (tour=="j2")
          {
              $(".cj2").css({'color' : "black"});
              $(".cj1").css({'color' : "blue"});
              if ($(this).is(':empty')){
              $(this).html("O");
              $(this).css({
                'color' : 'white',
                'background' : 'red'
              });
              tour = "j1";
              if (($("#1").html() === "O" && $("#2").html() === "O" && $("#3").html() === "O")
                || ($("#4").html() === "O" && $("#5").html() === "O" && $("#6").html() === "O")
                || ($("#7").html() === "O" && $("#8").html() === "O" && $("#9").html() === "O")
                || ($("#1").html() === "O" && $("#4").html() === "O" && $("#7").html() === "O")
                || ($("#2").html() === "O" && $("#5").html() === "O" && $("#8").html() === "O")
                || ($("#3").html() === "O" && $("#6").html() === "O" && $("#9").html() === "O")
                || ($("#1").html() === "O" && $("#5").html() === "O" && $("#9").html() === "O")
                || ($("#3").html() === "O" && $("#5").html() === "O" && $("#7").html() === "O")
                 )
                  {
                    alert("Le joueur 2 a gagné");
                    scoreO = $(".resj2").html();
                    scoreO++;
                    $(".resj2").html(scoreO);
                    gagne=true;
                    //tour = "";
                  }
                }
          }
        }
      });
});


function reset () 
      {
      $(this).css({
                'color' : 'black',
                'background' : 'white'
              });
      $("td").html("");
      gagne=false;
      }