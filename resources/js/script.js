experiences=[
  {post:"[Junior Developer]",institute:"[St.Xavier's College]",workedOn:"[Student Management System]", date:"[September 2019 - Running]"},
  {post:"[Intern]", institute:"[OLE Nepal]", workedOn:"[Epaath]",date:"[June 2017 - Sept 2017]" },
  {post:"[President]", institute:"[Ekta Alumni Association]",workedOn:"",date:"[October 2018 - Till Date]"},
  {post:"[Executive Member]", institute:"[Leo Club of Kathmandu Uttarbahini]",workedOn:"",date:"[August 2018 - Sept 2019]"}
]

$(document).ready(function(){
  // use of loop to load the DOM contents
    $.each(experiences, function(number,experience){
      var post = experience.post;
      var institute = experience.institute;
      var workedOn = experience.workedOn;
      var date = experience.date;
      var h = "<p class='post subheading'>"+post+"</p>"+"<p class='institute'>"+ institute+"</p>" +"<p class='workedOn'>"+ workedOn+"</p>" +"<p class='expdate'>" + date + "</p>"
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
})
