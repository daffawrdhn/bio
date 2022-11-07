$(document).ready(

    function(){

    let Hobby = ['Bersepeda', 'Balapan', 'Fotografi']

    Hobby.forEach(function(name,i) {
        // $('#hobbyL').append('<li id="hobby" class="list-group-item" >' + name + '</li> ');
        $('#hobbyL').append('<li data-id="h'+i+'" id="hobby" class="list-group-item" >' + name + '</li> <span data-id="h'+i+'" id="hobbyX"> X</span> ');

    });

    

    // HOBBY
    $('#buttonH').click( function(){
        var toAdd = $('input[name=hobbyI]').val();
        Hobby.push(toAdd);

        console.log(Hobby.length);

        $('input[name=hobbyI]').val('');

        if (toAdd != "") {
            $('#hobbyL').append('<li data-id="h'+ Hobby.length+1+'" id="hobby" class="list-group-item" >' + toAdd + '</li> <span data-id="h'+ Hobby.length+1+'" id="hobbyX"> X</span> ');
        } else {
            alert("Hobby Kosong");
        }
    });
    
    $("input[name=hobbyI]").keyup(function(event){
        if(event.keyCode == 13){
            $("#buttonH").click();
        }         
    });

    // remove / delete
    $(document).on('click','#hobbyX', function(){
       
        console.log($(this).data('id'));
        var index = $(this).data('id');

        $("#hobby[data-id="+index+"]").fadeOut('slow', function() {
            $("#hobby[data-id="+index+"]").remove();
            $("#hobbyX[data-id="+index+"]").remove();

        });
            
    });

    // edit
    $(document).on('click','#hobby', function(){

        var index = $(this).data('id');
        var nilai = $("[data-id="+index+"]").html();
        

        console.log(index);
        console.log(nilai);

        $("#hobbyX[data-id="+index+"]").remove();
        $(this).replaceWith('<input data-id="'+index +'" type="text" id="hobbyE" class="form-control" placeholder="Edit hobby" aria-label="Hobby" aria-describedby="button-addon2" value="' + nilai +'">');           
    });

    $(document).on('blur','#hobbyE', function(){
            var hobby = $(this).val();
            var index = $(this).data('id');
            $(this).replaceWith('<li data-id="'+ index +'" id="hobby" class="list-group-item" >' + hobby + '</li> <span data-id="'+ index +'" id="hobbyX"> X</span> ');  
            

    });








    let Skill = ['PHP', 'Bootstrap', 'Laravel', 'JS', 'jQuery', 'Arduino']
    
    Skill.forEach( function(name, i) {
        $('#skillL').append('<li data-id="s'+ i +'" id="skill" class="list-group-item" >' + name + '</li> <span data-id="s'+i+'" id="skillX"> X</span> ');
        // $('#skillL').append('<li id="skill" class="list-group-item" >' + name + '</li>');
    });

    // SKILL 
    $('#buttonS').click( function(){
        var toAddS = $('input[name=skillI]').val();
        Skill.push(toAddS);

        console.log(Skill.length);

        $('input[name=skillI]').val('');

        if (toAddS != "") {
            $('#skillL').append('<li data-id="s'+ Skill.length+1 +'" id="skill" class="list-group-item" >' + toAddS + '</li> <span data-id="s'+ Skill.length+1 +'" id="skillX"> X</span>');
        } else {
            alert("Skill Kosong");
        }
    });
    
    $("input[name=skillI]").keyup(function(event){
        if(event.keyCode == 13){
            $("#buttonS").click();
        }         
    });
    
   // remove / delete
   $(document).on('click','#skillX', function(){
       
    console.log($(this).data('id'));
    var index = $(this).data('id');

    $("#skill[data-id="+index+"]").fadeOut('slow', function() {
        $("#skill[data-id="+index+"]").remove();
        $("#skillX[data-id="+index+"]").remove();

    });
        
    });
    
    // edit
    $(document).on('click','#skill', function(){

        var index = $(this).data('id');

        var nilai = $("[data-id="+index+"]").html();
        

        console.log(index);
        console.log(nilai);

        $("#skillX[data-id="+index+"]").remove();
        $(this).replaceWith('<input data-id="'+index +'" type="text" id="skillE" class="form-control" placeholder="Edit skill" aria-label="Skill" aria-describedby="button-addon2" value="' + nilai +'">');           
    });

    $(document).on('blur','#skillE', function(){
        var skill = $(this).val();
        var index = $(this).data('id');
        $(this).replaceWith('<li data-id="'+ index +'" id="skill" class="list-group-item" >' + skill + '</li> <span data-id="'+ index +'" id="skillX"> X</span> ');  
        

});

    // $('li').hover(function (event) {
    //     $(this).toggleClass("active");
    // });
    
    }
);