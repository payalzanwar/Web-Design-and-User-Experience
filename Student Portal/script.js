//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

// Code for showing award details when clicked on image
var tabl = document.getElementById("myTable").getElementsByTagName("img");
for (i = 0; i < tabl.length; i++) {

  tabl[i].addEventListener("click", function () {
    var x = this.parentElement.parentElement.nextElementSibling.className;
    if (x == "dropDownTextArea") {
      if (this.parentElement.parentElement.nextElementSibling.style.display == 'none') {
        this.parentElement.parentElement.nextElementSibling.style.display = '';
      } else {
        this.parentElement.parentElement.nextElementSibling.style.display = 'none';
      }
    }
  });
}

// Code for showing delete button and highlighting the selected row
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
for (i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", function () {
    var checkcnt = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkcnt.length > 0) {
      document.getElementById("btn").disabled = false;

      document.getElementById("btn").style.backgroundColor = 'orange';
      document.getElementById("btn").style.borderColor = 'orange';
    }
    if (this.checked) {
      this.parentElement.parentElement.classList.toggle("mystyle");
      var d = this.parentElement.parentElement.lastElementChild.firstChild;
      if (d.className == "deletebtn") {
        d.style.display = "block";
      }
    }
    else {
      if (checkcnt.length == 0) {
        document.getElementById("btn").disabled = true;
        document.getElementById("btn").style.backgroundColor = '#777';
        document.getElementById("btn").style.borderColor = '#777';
      }
      this.parentElement.parentElement.classList.remove("mystyle");
      var d = this.parentElement.parentElement.lastElementChild.firstChild;
      if (d.className == "deletebtn") {
        d.style.display = "none";
      }

    }
  });

}


//Code for deleting a row 
var del = document.getElementById("myTable").getElementsByTagName("button");
for (i = 0; i < del.length; i++) {
  del[i].addEventListener("click", function () {
    var x = this.parentElement.parentElement;
    var y = this.parentElement.parentElement.nextElementSibling;
    if (y.style.display != 'none') {
      y.style.display = 'none';
    }
    x.style.display = 'none';
  });
}













Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");
var cnt = 0;
function AddNewStudent() {
  var tableRef = document.getElementById("myTable");

  var count = tableRef.rows.length;
  if (count == 7) {
    cnt = count - 3;
  }
  else {
    cnt = cnt + 1;
  }
  //Adding Row in the tbody
  var newRow = tableRef.insertRow(tableRef.rows.length);

  // document.getElementById("demo").innerHTML= tableRef.rows.length;
  var columnCount = tableRef.rows[0].cells.length;
  for (var i = 0; i < columnCount; i++) {

    newRow.insertCell(i);

  }


  var Stud = {
    Student: "Student " + (cnt),
    Advisor: "Teacher " + (cnt),
    AwardStatus: "Approved",
    Semester: "Fall",
    Type: "TA",
    Budget: "12345",
    Percentage: "100%"
  };


  var num = tableRef.rows.length;
  // Creating detele button
  var btn = document.createElement("BUTTON");
  btn.textContent = "Delete";
  btn.setAttribute("class", "deletebtn");

  //Creating image for new row
  var im = document.createElement("IMG");
  im.setAttribute("tag", "img");
  im.setAttribute("src", "down.png");
  im.setAttribute("width", "25px");
  // im.setAttribute("class","dropDownTextArea");

  var imgbtn = document.createElement("BUTTON");
  imgbtn.append(im);

  // Creating checkbox for new row
  var check = document.createElement("INPUT");
  check.setAttribute("type", "checkbox");

  //Creating new row

  var t = document.createElement("TR");
  t.setAttribute("class", "dropDownTextArea");
  // document.getElementById("myTable").rows[newRow.length].append(t);
  document.getElementById("myTable").appendChild(t);

  var td1 = document.createElement("TD");

  t.appendChild(td1);
  td1.setAttribute("colspan", 9);

  var test = document.getElementById("myTable").getElementsByTagName("tr")[2];
  var clone = test.cloneNode(true);
  t.cells[0].innerHTML = clone.outerHTML;
  t.style.display = 'none';
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  newRow.cells[0].innerHTML += check.outerHTML + "<br><br>" + im.outerHTML;
  newRow.cells[1].innerHTML = Stud.Student;
  newRow.cells[2].innerHTML = Stud.Advisor;
  newRow.cells[3].innerHTML = Stud.AwardStatus;
  newRow.cells[4].innerHTML = Stud.Semester;
  newRow.cells[5].innerHTML = Stud.Type;
  newRow.cells[6].innerHTML = Stud.Budget;
  newRow.cells[7].innerHTML = Stud.Percentage;
  newRow.cells[8].innerHTML = btn.outerHTML;

  // Code for appearing delete button and highlighting dynamically added new row
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function () {
      var checkcnt = document.querySelectorAll('input[type="checkbox"]:checked');
      if (checkcnt.length > 0) {
        document.getElementById("btn").disabled = false;
        document.getElementById("btn").style.backgroundColor = 'orange';
        document.getElementById("btn").style.borderColor = 'orange';
      }
      if (this.checked) {
        // this.parentElement.parentElement.classList.toggle("mystyle");
        this.parentElement.parentElement.classList.add("mystyle");
        var d = this.parentElement.parentElement.lastElementChild.firstChild;
        if (d.className == "deletebtn") {
          d.style.display = "block";
        }
      }
      else {
        if (checkcnt.length == 0) {
          document.getElementById("btn").disabled = true;
          document.getElementById("btn").style.backgroundColor = '#777';
          document.getElementById("btn").style.borderColor = '#777';
        }
        this.parentElement.parentElement.classList.remove("mystyle");
        var d = this.parentElement.parentElement.lastElementChild.firstChild;
        if (d.className == "deletebtn") {
          d.style.display = "none";
        }
      }
    });
  }

  var del = document.getElementById("myTable").getElementsByTagName("button");
  for (i = 0; i < del.length; i++) {
    del[i].addEventListener("click", function () {


      // checkct[i].checked=false;
      // this.parentElement.parentElement.firstChild.getElementsByTagName("input").checked=false;


      var x = this.parentElement.parentElement;
      var y = x.rowIndex;
      // document.getElementById("dm1").innerHTML="dm1"+y;
      var reqdroprow = document.getElementById("myTable").rows[y + 1];
      // document.getElementById("demo").innerHTML= reqdroprow.rowIndex;
      if (reqdroprow.style.display != 'none') {
        reqdroprow.style.display = 'none';
      }





      x.style.display = 'none';
      // deleteRow(x);
      var checkct = document.querySelectorAll('input[type="checkbox"]:checked');
      if (checkct.length == 0) {
        document.getElementById("btn").disabled = true;
        document.getElementById("btn").style.backgroundColor = '#777';
        document.getElementById("btn").style.borderColor = '#777';
      }
      //  document.getElementById("sample").innerHTML="delete me "+checkct.length;



    });
  }

  //code for dropdown over image

  var tabl = document.getElementById("myTable").getElementsByTagName("img");
  for (i = 0; i < tabl.length; i++) {
    tabl[i].addEventListener("click", function () {
      var par = this.parentElement.parentElement;

      var rowpar = par.rowIndex;
      // document.getElementById("dm1").innerHTML="dm1"+y;
      var reqrow = document.getElementById("myTable").rows[rowpar + 1];
      if (reqrow.className == "dropDownTextArea") {

        // document.getElementById("demo").innerHTML= reqrow.rowIndex;
        if (reqrow.style.display == 'none') {
          reqrow.style.display = '';

        }
        else {
          reqrow.style.display = 'none';

        }
        // if(t.style.display=='none'){

        // t.style.display="";
        // }
        // else{
        //   t.style.display='none';
        // }

      }

    });
  }
}

function myFunction(checkboxname) {

  var text = " ";
  var count = 0;
  var cnt = 0;
  var tableRef = document.getElementById("myTable").getElementsByTagName("tr");


  for (i = 0; i < tableRef.length; i++) {
    var x = document.getElementById("myTable").getElementsByTagName("tr")[i];
    if (x.className == "dropDownTextArea") {
      if (x.style.display == 'none') {
        x.style.display = '';
      } else {
        x.style.display = 'none';
      }
    }

  }

  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  if (checkboxes.length > 0) {
    document.getElementById("btn").disabled = false;
  }
  else {
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").style.backgroundColor = '#777';
    document.getElementById("btn").style.borderColor = '#777';

  }

}