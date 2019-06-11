
var wishes = [ "learn how to use JQuery", "build a website", "Become a Web Developer" ]

function addToList(item) {
  //$('#items').append("<li>" + item + "<span class='label pending'>Pending</span> <span class='label success'>success</span><span class='label pending'>sllccess</span></li>");

  $('#items').append("<li>"+item+" <select id=\"myselect\">\n" +
      "            <option value=\"default\">---Select---</option>\n" +
      "            <option value=\"pend\">Pending</option>\n" +
      "            <option value=\"done\">Completed</option>\n" +

      "            <option value=\"delete\" >Delete from List</option>\n</li>")


  //$('#items').append("<li>" + item + "<span class='label sel'> </span> </li>");

}


function updateTotal() {
  completed = $('.success').length;
  pending = $('.pending').length;

  if (completed > 0 || pending > 0) {
    $('.total').text(" Pending: " + pending + " Completed: " + completed);
  }
}

$(document).ready(function(){

  wishes.forEach(function(element) {
    addToList(element);


  });



  $("#myselect").change(function(){


    var selectedOption = $(this).children("option:selected").val();

    if(selectedOption=="pend"){
      $(this).parent().append("<span class='label pending'>Pending</span>");
      $(this).parent().attr("class", 'pending');
      updateTotal();

      $("option:selected").removeAttr("selected");

    }
    if(selectedOption=="done"){

      $(this).parent().append("<span class='label success'>Done!</span>");
      $(this).parent().attr("class", 'completed');
      updateTotal();

      $("option:selected").removeAttr("selected");
    }

    if(selectedOption=="delete"){

      item = $("#item").val();
     // $('#items').remove(item);
     // wishes=items;
     // $(this).parent().remove( item );
      $(this).parent().attr("class", 'completed');

      updateTotal();
      $(this).parent().remove();



      $("#item").val("");
      $("#item").focus();
      $("option:selected").removeAttr("selected");
     // updateTotal();

    }

  });




  $(document).on('click','#add-to-list',function(){
    item = $("#item").val();

    $("#item").val("");




    $("#item").focus();

    addToList(item);
    updateTotal();
  });


/*

  $(document).on('click','.pending',function(){
    $(this).parent().append("<span class='label success'>Done!</span>");
    $(this).parent().attr("class", 'completed');
    $(this).remove();
    updateTotal();
  });

 */
});
