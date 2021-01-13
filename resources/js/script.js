experiences=[
  {post:"Junior Developer",details:"I have worked as a junior developer at St.Xaviers' college on the project Student Management System from September 2019 to till date."},
  {post:"Intern",details:"I have worked as an intern at OLE Nepal from June 2017 to Sept 2017 where I got the oppertunity to learn a work of an QA and several other networking things that were implemented by the organization" },
  {post:"President", details:"I have been contributing to Ekta Alumni Association as a President from the date October 2018 to till date"},
]

$(document).ready(function(){
  // use of loop to load the DOM contents
    $.each(experiences, function(number,experience){
      var post = experience.post;
      var details= experience.details;
      var h = "<p class='experience_post'><i class='fas fa-angle-down expButton'></i>"+ post+"</p>"+"<p class='experience_details'>"+details+"</p>"
      console.log(h)
      $(".experiences").append("<div class='experience'>"+h+"</div>")

    })
    //use of jquery DOM Manipulation
    $(".pdButton").click(function(){
      $(".pd").slideToggle(400,function(){

        var button = $(this).parent().children().first().children().first()
        if(button.hasClass("fa-angle-down")){
          button.removeClass("fa-angle-down");
          button.addClass("fa-angle-right");
        }else{
          button.removeClass("fa-angle-right");
          button.addClass("fa-angle-down")
        }
      });
    })
    $(".expButton").click(function(){
      $(this).parent().siblings().slideToggle(400,function(){
        var button = $(this).siblings().children()
        if(button.hasClass("fa-angle-down")){
          button.removeClass("fa-angle-down");
          button.addClass("fa-angle-right");
        }else{
          button.removeClass("fa-angle-right");
          button.addClass("fa-angle-down")
        }
      })
    })
})
