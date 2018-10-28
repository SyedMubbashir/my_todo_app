function update(){
    var sumid = + localStorage.getItem('idd');
    var title = JSON.parse(localStorage.getItem("alltitle"));
    var description = JSON.parse(localStorage.getItem('alldescriptions'));
    var location = JSON.parse(localStorage.getItem('alllocation'));
    var updatetitle = title.slice(sumid, sumid + 1);
    var updatedescription = description.slice(sumid, sumid + 1);
    var updatelocation = location.slice(sumid, sumid + 1);
    document.getElementById('title').value = updatetitle;
    document.getElementById('description').value = updatedescription;
    document.getElementById('location').value = updatelocation;
}
// updating values inlocalstprage
function update1(){
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var location = document.getElementById("location").value;

    alert(title)
    if (title == "" || description == "" || location == "") {
        // absolute div
        // var cls = document.getElementById('op');
        // cls.classList.add("show2");
        // var cls2 = document.getElementById('btn5');
        // cls2.style.cursor = "pointer";
        // document.getElementById("message").innerHTML = "All fields are required";
        return false;
    }

   else{
        // document.getElementById("message").innerHTML = "Task Updated Succesfully";
        var sumid = localStorage.getItem('idd');
        alert(sumid);
        var gettitle = JSON.parse(localStorage.getItem("alltitle"));
        var getdescription = JSON.parse(localStorage.getItem("alldescriptions"));
        var getlocation = JSON.parse(localStorage.getItem('alllocation'));
        alert(gettitle);
        gettitle.splice(sumid, 1, title);
        
        getdescription.splice(sumid, 1, description);
        getlocation.splice(sumid, 1, location);
        localStorage.setItem('alltitle', JSON.stringify(gettitle));
        localStorage.setItem('alldescriptions', JSON.stringify(getdescription));
        localStorage.setItem('alllocation', JSON.stringify(getlocation));
        return true;
   }
}