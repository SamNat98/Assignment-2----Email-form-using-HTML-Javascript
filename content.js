function emailSending(){

    var id1 = document.getElementById("e1").value;
    console.log(id1);

    var id2 = document.getElementById("e2").value;
    //console.log(id2);

    var id3 = document.getElementById("e3").value;
    console.log(id3);

    var id4 = document.getElementById("e4").value;
    console.log(id4);

    // var id5 = document.getElementById("e5").value;
    // console.log(id5);

    Email.send(
        {
            Host : "smtp.gmail.com",
            Username : "sameer@binmile.com",
            Password : "sameer_982003#natcorp",
            To : id2,
            From : id1,
            Subject : id3,
            Body : id4,
            Attachments : [
                {
                    name : "pexels-photo-2486168.jpeg",
                    path : "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?cs=srgb&dl=pexels-roberto-nickson-2486168.jpg&fm=jpg"
                }]
        }
    ).then(
        message => alert("Mail sent Successfully")
    );  

}