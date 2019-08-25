//database connection
var config = {
  apiKey: "AIzaSyDzmgR-NXRt7gDRmnf0oc2syzyQyurK2w8",
  authDomain: "countdown-7e29c.firebaseapp.com",
  databaseURL: "https://countdown-7e29c.firebaseio.com",
  projectId: "countdown-7e29c",
  storageBucket: "",
  messagingSenderId: "689671471261"
};
firebase.initializeApp(config);

var DB = firebase.database().ref('userData');
var refDetails = DB.child('details');

function tambahpengguna(){
  var data1 = document.getElementById("idnama").value;
  var data2 = document.getElementById("idkp").value;
  var data3 = document.getElementById("idalamat").value;
  var data4 = document.getElementById("idacc1").value;
  var data5 = document.getElementById("idnamabank1").value;
  var data6 = document.getElementById("idacc2").value;
  var data7 = document.getElementById("idnamabank2").value;
  var data8 = document.getElementById("idtvaganza").value;
  var data9 = document.getElementById("idthangus").value;
  var data10 = document.getElementById("idtakhir").value;

  var datamasuk = {
    nama_penuh : data1,
    nric : data2,
    alamat : data3,
    acc1 : data4,
    bank1 : data5,
    acc2 : data6,
    bank2 : data7,
    plan_hangus : data8,
    plan_token : data9,
    token_akhir : data10
  };
var txt;
if (confirm("Press OK to confirm")) {
    refDetails.push(datamasuk);
}

}

function kosongkan(){
document.getElementById("idnama").value = "";
document.getElementById("idkp").value = "";
document.getElementById("idalamat").value = "";
document.getElementById("idacc1").value = "";
document.getElementById("idnamabank1").value = "";
document.getElementById("idacc2").value = "";
document.getElementById("idnamabank2").value = "";
document.getElementById("idtvaganza").value = "";
document.getElementById("idthangus").value = "";
document.getElementById("idtakhir").value = "";
}

function searchbyNRIC(){
  var html_0 = "";
  var user_id = document.getElementById("id_pengguna").value;
  refDetails.orderByKey().on("child_added", function(data) {
      var in_nric = data.val().nric;
      if(parseInt(user_id) == parseInt(in_nric)){
        console.log(data.key);
        var in_nama_penuh = data.val().nama_penuh;
        var in_alamat = data.val().alamat;
        var in_acc1 = data.val().acc1;
        var in_bank1 = data.val().bank1;
        var in_acc2 = data.val().acc2;
        var in_bank2 = data.val().bank2;
        var in_plan_token = data.val().plan_token;
        var in_plan_hangus = data.val().plan_hangus;
        var in_plan_akhir = data.val().token_akhir;
        var total = (parseInt(in_plan_token)||0) + (parseInt(in_plan_hangus)||0) + (parseInt(in_plan_akhir)||0);

        html_0 += '<tr><td><b>Nama Penuh</b></td>';
        html_0 += '<td>'+ in_nama_penuh +'</td></tr>';
        html_0 += '<tr><td><b>No, Kad Pengenalan</b></td>';
        html_0 += '<td>'+ in_nric +'</td></tr>';
        html_0 += '<tr><td><b>Alamat</b></td>';
        html_0 += '<td>'+ in_alamat +'</td></tr>';
        html_0 += '<tr><td><b>Bank Info 1</b></td>';
        html_0 += '<td>'+ in_acc1 +' ('+ in_bank1 +')</td></tr>';
        html_0 += '<tr><td><b>Bank Info 2</b></td>';
        html_0 += '<td>'+ in_acc2 +' ('+ in_bank2 +')</td></tr>';
        html_0 += '<tr><td><b>Token Vaganza</b></td>';
        html_0 += '<td>'+ (in_plan_token + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +'</td></tr>';
        html_0 += '<tr><td><b>Token Hangus</b></td>';
        html_0 += '<td>'+ (in_plan_hangus + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +'</td></tr>';
        html_0 += '<tr><td><b>Token Akhir</b></td>';
        html_0 += '<td>'+ (in_plan_akhir + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +'</td></tr>';
        html_0 += '<tr><td><b>Total</b></td>';
        html_0 += '<td>'+ (total + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +'</td></tr>';
        $("#tab_userdetails").html(html_0);
      }

       }, function (error) {
    console.log("Error: " + error.code);
    alert("Maklumat Ralat!");

  });
}
