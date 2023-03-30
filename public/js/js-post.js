(function(){
    $.ajax({
    type: "GET",
    url: 'http://localhost:5000/index.js',//"dataCon.php",
    // async: false,
    data: {
        "check": true
        // "date": new Date()
    },
    success: function(data){
        // alert(data !== undefined);
        // var data = JSON.parse(data);
        
        if(data !== null){
            // alert("if condition");
            $('#register').hide();
            $('#time-duration').val(data.replace(/\"/g, ""));
            updateDuration();
        //     // const updateDurationValue = setInterval('updateDuration', 1000);
        }
        else {
            // alert("else condition");
            $('#register').show();
        }
        // updateDuration();
        // if(data.duration == '9:00'){
        //     clearInterval(updateDurationValue);
        // }
    },
    error:function(){
        alert("error");
    }
 });


})();

function updateDuration() {
    let hh;
    let mm;
const updateDurationValue = setInterval((e) => {
    // alert("dsafsdf");

    let time = $('#time-duration').val();
    // console.log(typeof(time));
    // time = time.replace(/\"/g, "");
    let timearray = time.split(":");
    // console.log(typeof(timearray[0]));
    // console.log(typeof(timearray[1]));
    hh = parseInt(timearray[0]);
    mm = parseInt(timearray[1]);

    // console.log(hh + ":" + mm);
    if(mm <= 59){

        mm++;
        
    }
    if(mm > 59 ){
        hh++;
        mm = 0;
    }
    // else if(hh == 1 && mm == 0)
    // {
    //     $('#time-duration').val("00:00");
    // // }
    // else {
    //     mm++;
    // }

   
    hh = hh.toString();

    mm = mm.toString();

    // console.log("hh" + typeof(hh));
    // console.log("mm" + typeof(mm));


    time = hh+":"+mm;
    time = '"' + time.replace(/"/g, '') + '"'
    // console.log(time);

    
    $.ajax({
        type: "PUT",
        url: 'http://localhost:5000/index.js',//"dataCon.php",
        data: {
            "incre": true,
            "updateDuration": hh+":"+mm
        },
        success: function(data){
            // alert(data);
            
            $('#time-duration').val(data.replace(/\"/g, ""));
        }
    });

    console.log(hh + " " + mm);
    if(hh == '9' && mm == '0'){

        $('#time-duration').val("00:00");

        $.ajax({
            type: "DELETE",
            url: 'http://localhost:5000/index.js',//"dataCon.php",
            data: {
                "remove": true,
            },
            success: function(data){
                // alert(data);
                if(data == 1){
                    $('#register').show();
                    $('#task-status').text("Task Complete!");

                }
                // $('#time-duration').val(data.replace(/\"/g, ""));
            }
        });

        clearInterval(updateDurationValue);
    }
    
}, 60000);


}


$('#register').on('submit', function(e){
    e.preventDefault();
    var taskname = $('#task-name').val();
    var taskdescription = $('#task-description').val();
    var taskduration = $('#task-duration').val();
    if(taskduration == undefined || taskduration == null){
        taskduration = '00:00';
    }
    console.log(taskname + " " + taskdescription + " " + taskduration);
    if(taskname == "" || taskdescription == "" || taskname == undefined || taskdescription == undefined || taskname == undefined || taskdescription == undefined || taskname == null || taskdescription == null){
        var h1 = document.createElement("h1");
        var text = document.createTextNode("Please Provide task details");
        h1.appendChild(text);
        document.body.appendChild(h1);
    }else {
        $.ajax({
            type: "POST",
            url: './../index.js',//'dataCon.php',
            data: {
                "taskname": taskname,
                "taskdescription": taskdescription,
                "taskduration": taskduration 
            },
            success: function(data){
                // alert("data saved successfully" + data);
                $('#time-duration').val(data.replace(/\"/g, ""));
                $('#register').hide();
                updateDuration();
            },
            error: function(){
                alert("data not saved successfully!, try again");
            }
        });
    }
});
