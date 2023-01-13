
$(document).ready(function(){


    $("button").click(function(){
   
        let container= $("<div> </div>")
     let toAdd = $("input").val();
   
    let task = $("<p>" +toAdd+"</p>");
     task.addClass("task");

let donebutton = $( "<button class='done done:hover'> Done</button>");
donebutton.click(function(){

$(this).parent().addClass("TaskDone");

});


let deletebutton =$( "<button class='delete delete:hover'>Delete</button>");

 deletebutton.click(function(){


    $(this).parent().remove();
 })   


 container.append(task, donebutton, deletebutton);

 $(".tasksBox").append(container);
 

    })
   
    
   });
   









