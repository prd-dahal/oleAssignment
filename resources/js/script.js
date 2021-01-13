var experiences=[
  {post:"Junior Developer",details:"Working as a junior developer at St.Xaviers' college on the project Student Management System from September 2019."},
  {post:"Intern",details:"Worked as a QA intern at OLE Nepal from June 2017 to Sept 2017" },
  {post:"President", details:"Have been contributing to Ekta Alumni Association as a President from October 2018."},
];
var educations=[
  {courseName:"CSIT", institute:"St. Xavier's College", time:"2017 to Running"},
  {courseName:"+2 Science", institute:"White House Higher Secondary School and College", time:"2015 to 2017"},
  {courseName:"SLC", institute:"Ekta Academy",time:"Completed 2015"}
];
$(document).ready(function(){
  // use of loop to load the DOM contents
    $.each(experiences, function(number,experience){
      var post = experience.post;
      var details= experience.details;
      var h = "<p class='experience_post'><i class='fas fa-angle-down expButton'></i>"+ post+"</p>"+"<p class='experience_details'>"+details+"</p>"
      console.log(h)
      $(".experiences").append("<div class='experience'>"+h+"</div>")

    })
    $.each(educations, function(number,education){
      var courseName = education.courseName;
      var institute = education.institute;
      var time = education.time;
      console.log(courseName);
      console.log(institute);
      console.log(time);
      var h = "<p class='courseName'>"+courseName+"</p>"+"<p class='institute'>"+institute+"</p>"+"<p class='time'>"+time+"</p>"
      $(".educations").append("<div class='education'>"+h+"</div>")
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
