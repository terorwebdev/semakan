var script_url = "https://script.google.com/macros/s/AKfycbwcefMY6iW2mvWJATRZ0zxq7auCAYjcp8IF6td7lPdxBGa78w0/exec";

function insert_value() {

    $("#re").css("visibility", "hidden");
    document.getElementById("loader").style.visibility = "visible";
    $('#mySpinner').addClass('spinner');

    var id1 = $("#id").val();
    s
    var name = $("#name").val();


    var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&action=insert";


    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });

}

function update_value() {
    $("#re").css("visibility", "hidden");
    document.getElementById("loader").style.visibility = "visible";


    var id1 = $("#id").val();
    var name = $("#name").val();

    var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&action=update";

    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });


}


function delete_value() {
    $("#re").css("visibility", "hidden");
    document.getElementById("loader").style.visibility = "visible";
    $('#mySpinner').addClass('spinner');
    var id1 = $("#id").val();
    var name = $("#name").val();


    var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&action=delete";


    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });

}

// print the returned data
function ctrlq(e) {

    $("#re").html(e.result);
    $("#re").css("visibility", "visible");
    read_value();

}

function clear_data() {
    var html_0 = "";
    $("#tab_userdetails").html(html_0);
}

function read_value() {
    clear_data();
    var html_0 = "";
    var id_pengguna = $("#id_pengguna").val();

    var url = script_url + "?id=" + id_pengguna + "&action=read";

    $.getJSON(url, function(json) {
        var data = json.user
        if (!data.ic_no) {
            alert("Ralat. Kad Pengenalan Tiada Dalam System");
        } else {


            var in_data = {
                //Details Ahli
                in_nama_penuh: data.name,
                in_ic_no: data.ic_no,
                in_alamat: data.alamat,
                in_acc1: data.no_acc,
                in_bank1: data.bank,
                in_status_bankrup: data.status_bankrup,

                //First payout
                in_raya: data.raya,
                in_saguhati_vvip: data.saguhati_vvip,
                in_durian_runtuh: data.durian_runtuh,
                in_cash_out: data.cash_out,
                in_sumbangan_1: data.sumbangan_1,
                in_bonus_1: data.bonus_1,
                in_total_1: data.total_1,

                //proxy ozana
                in_plan_hangus: data.plan_hangus,
                in_token_akhir: data.token_akhir,
                in_portion_19: data.portion_19,
                in_pioneer: data.pioneer,
                in_total_2: data.total_2,

                //proxy amir
                in_offline_1: data.offline_1,
                in_offline_2: data.offline_2,
                in_offline_3: data.offline_3,
                in_plan_loyal: data.plan_loyal,
                in_planta: data.planta,
                in_sumbangan_2: data.sumbangan_2,
                in_total_3: data.total_3,

                //vvip maya
                in_token_vaganza: data.token_vaganza,
                in_last_call: data.last_call,
                in_bantuan_1: data.bantuan_1,
                in_tambahan: data.tambahan,
                in_consultant: data.consultant,
                in_last_mission: data.last_mission,
                in_bantuan_khas_2: data.bantuan_khas_2,
                in_office: data.office,
                in_token: data.token,
                in_bonus_2: data.bonus_2,
                in_boarding: data.boarding,
                in_total_4: data.total_4,

                //proxy boss
                in_swap_1: data.swap_1,
                in_swap_2: data.swap_2,
                in_plan_kilat: data.plan_kilat,
                in_total_5: data.total_5,

                //jumlah keseluruhan
                in_grand_total: data.grand_total,

                //pakej percuma offile 1
                in_pakej_percutian: data.pakej_percutian,

                //pakej percuma sumbangan
                in_pakej_umrah: data.pakej_umrah,

                //plan baucer
                in_telefon: data.telefon,
                in_kereta: data.kereta,
                in_rumah: data.rumah,
                in_barangan_kemas: data.barangan_kemas,
                in_percutian: data.percutian
            };

            /*
            var in_nama_penuh = data.name;
            var in_ic_no = data.ic_no;
            var in_alamat = data.alamat;
            var in_acc1 = data.no_acc;
            var in_bank1 = data.bank;
            var in_status_bankrup = data.status_bankrup;
            */
            var total = (parseInt(data.jumlah_po));

            //Details Ahli
            html_0 += '<tr><td><b>Nama Penuh</b></td>';
            html_0 += '<td>' + in_data.in_nama_penuh + '</td></tr>';
            html_0 += '<tr><td><b>No. Kad Pengenalan</b></td>';
            html_0 += '<td>' + in_data.in_ic_no + '</td></tr>';
            html_0 += '<tr><td><b>Alamat</b></td>';
            html_0 += '<td>' + in_data.in_alamat + '</td></tr>';
            html_0 += '<tr><td><b>Bank</b></td>';
            html_0 += '<td>' + in_data.in_bank1 + '</td></tr>';
            html_0 += '<tr><td><b>Bank Akaun</b></td>';
            html_0 += '<td>' + in_data.in_acc1 + '</td></tr>';
            html_0 += '<tr><td><b>Status Bankrup</b></td>';
            html_0 += '<td>' + in_data.in_status_bankrup + '</td></tr>';

            //First payout
            html_0 += '<tr><th colspan="2" style="background: burlywood;">A. FIRST PAYOUT</th></tr>';
            html_0 += '<tr><td><b>Raya</b></td>';
            html_0 += '<td>' + in_data.in_raya + '</td></tr>';
            html_0 += '<tr><td><b>Saguhati VVIP</b></td>';
            html_0 += '<td>' + in_data.in_saguhati_vvip + '</td></tr>';
            html_0 += '<tr><td><b>Durian Runtuh</b></td>';
            html_0 += '<td>' + in_data.in_durian_runtuh + '</td></tr>';
            html_0 += '<tr><td><b>Cash Out</b></td>';
            html_0 += '<td>' + in_data.in_cash_out + '</td></tr>';
            html_0 += '<tr><td><b>Sumbangan</b></td>';
            html_0 += '<td>' + in_data.in_sumbangan_1 + '</td></tr>';
            html_0 += '<tr><td><b>Bonus</b></td>';
            html_0 += '<td>' + in_data.in_bonus_1 + '</td></tr>';
            html_0 += '<tr><td><b>Total</b></td>';
            html_0 += '<td>' + in_data.in_total_1 + '</td></tr>';

            //proxy ozana
            html_0 += '<tr><th colspan="2" style="background: burlywood;">B. VVIP OZANA</th></tr>';
            html_0 += '<tr><td><b>Plan Hangus</b></td>';
            html_0 += '<td>' + in_data.in_plan_hangus + '</td></tr>';
            html_0 += '<tr><td><b>Token Akhir</b></td>';
            html_0 += '<td>' + in_data.in_token_akhir + '</td></tr>';
            html_0 += '<tr><td><b>Portion 19</b></td>';
            html_0 += '<td>' + in_data.in_portion_19 + '</td></tr>';
            html_0 += '<tr><td><b>Pioneer</b></td>';
            html_0 += '<td>' + in_data.in_pioneer + '</td></tr>';
            html_0 += '<tr><td><b>Total</b></td>';
            html_0 += '<td>' + in_data.in_total_2 + '</td></tr>';

            //proxy amir
            html_0 += '<tr><th colspan="2" style="background: burlywood;">C. PROXY AMIR</th></tr>';
            html_0 += '<tr><td><b>Offline 1</b></td>';
            html_0 += '<td>' + in_data.in_offline_1 + '</td></tr>';
            html_0 += '<tr><td><b>Offline 2</b></td>';
            html_0 += '<td>' + in_data.in_offline_2 + '</td></tr>';
            html_0 += '<tr><td><b>Offline 3</b></td>';
            html_0 += '<td>' + in_data.in_offline_3 + '</td></tr>';
            html_0 += '<tr><td><b>Plan Loyal</b></td>';
            html_0 += '<td>' + in_data.in_plan_loyal + '</td></tr>';
            html_0 += '<tr><td><b>Planta</b></td>';
            html_0 += '<td>' + in_data.in_planta + '</td></tr>';
            html_0 += '<tr><td><b>Po Sumbangan</b></td>';
            html_0 += '<td>' + in_data.in_sumbangan_2 + '</td></tr>';
            html_0 += '<tr><td><b>Total</b></td>';
            html_0 += '<td>' + in_data.in_total_3 + '</td></tr>';

            //vvip maya
            html_0 += '<tr><th colspan="2" style="background: burlywood;">D. VVIP MAYA</th></tr>';
            html_0 += '<tr><td><b>Token Vaganza</b></td>';
            html_0 += '<td>' + in_data.in_token_vaganza + '</td></tr>';
            html_0 += '<tr><td><b>Last Call</b></td>';
            html_0 += '<td>' + in_data.in_last_call + '</td></tr>';
            html_0 += '<tr><td><b>Bantuan</b></td>';
            html_0 += '<td>' + in_data.in_bantuan_1 + '</td></tr>';
            html_0 += '<tr><td><b>Tambahan</b></td>';
            html_0 += '<td>' + in_data.in_tambahan + '</td></tr>';
            html_0 += '<tr><td><b>Consultant</b></td>';
            html_0 += '<td>' + in_data.in_consultant + '</td></tr>';
            html_0 += '<tr><td><b>Last Mission</b></td>';
            html_0 += '<td>' + in_data.in_last_mission + '</td></tr>';
            html_0 += '<tr><td><b>Bantuan Khas 2</b></td>';
            html_0 += '<td>' + in_data.in_bantuan_khas_2 + '</td></tr>';
            html_0 += '<tr><td><b>Office</b></td>';
            html_0 += '<td>' + in_data.in_office + '</td></tr>';
            html_0 += '<tr><td><b>SSB Token</b></td>';
            html_0 += '<td>' + in_data.in_token + '</td></tr>';
            html_0 += '<tr><td><b>SSB Bonus</b></td>';
            html_0 += '<td>' + in_data.in_bonus_2 + '</td></tr>';
            html_0 += '<tr><td><b>Total</b></td>';
            html_0 += '<td>' + in_data.in_total_4 + '</td></tr>';

            //proxy boss
            html_0 += '<tr><th colspan="2" style="background: burlywood;">E. PROXY BOSS</th></tr>';
            html_0 += '<tr><td><b>Swap 1</b></td>';
            html_0 += '<td>' + in_data.in_swap_1 + '</td></tr>';
            html_0 += '<tr><td><b>Swap 2</b></td>';
            html_0 += '<td>' + in_data.in_swap_2 + '</td></tr>';
            html_0 += '<tr><td><b>Kilat</b></td>';
            html_0 += '<td>' + in_data.in_plan_kilat + '</td></tr>';
            html_0 += '<tr><td><b>Total</b></td>';
            html_0 += '<td>' + in_data.in_total_5 + '</td></tr>';

            //Jumlah Keseluruhan
            html_0 += '<tr><th colspan="2" style="background: burlywood;">F. JUMLAH KESELURUHAN</th></tr>';
            html_0 += '<tr><td colspan="2" style="text-align: center;">' + in_data.in_grand_total + '</td></tr>';

            //pakej percuma offline 1
            html_0 += '<tr><th colspan="2" style="background: burlywood;">G. PAKEJ PERCUMA OFFLINE 1</th></tr>';
            html_0 += '<tr><td colspan="2" style="text-align: center;">' + in_data.in_pakej_percutian + '</td></tr>';

            //PAKEJ PERCUMA SUMBANGAN
            html_0 += '<tr><th colspan="2" style="background: burlywood;">H. PAKEJ PERCUMA SUMBANGAN</th></tr>';
            html_0 += '<tr><td colspan="2" style="text-align: center;">' + in_data.in_pakej_umrah + '</td></tr>';

            //plan caucer
            html_0 += '<tr><th colspan="2" style="background: burlywood;">I. PLAN BAUCER</th></tr>';
            html_0 += '<tr><td><b>Telefon</b></td>';
            html_0 += '<td>' + in_data.in_telefon + '</td></tr>';
            html_0 += '<tr><td><b>Kereta</b></td>';
            html_0 += '<td>' + in_data.in_kereta + '</td></tr>';
            html_0 += '<tr><td><b>Rumah</b></td>';
            html_0 += '<td>' + in_data.in_rumah + '</td></tr>';
            html_0 += '<tr><td><b>Barangan Kemas</b></td>';
            html_0 += '<td>' + in_data.in_barangan_kemas + '</td></tr>';
            html_0 += '<tr><td><b>Percutian</b></td>';
            html_0 += '<td>' + in_data.in_percutian + '</td></tr>';

            //html_0 += '<tr><td><b>Jumlah</b></td>';
            //html_0 += '<td>' + (total + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + '</td></tr>';

            $("#tab_userdetails").html(html_0);

        }
        console.log(json.user);
    });

}