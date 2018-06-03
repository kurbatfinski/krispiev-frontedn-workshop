
    var zbir = 0;
function dodaj(){

    var broj1 = document.getElementById('br1').value;
    zbir = zbir + parseInt(broj1);

    document.getElementById('br2').value = zbir;
    document.getElementById('br1').value = '';

    console.log(zbir);
};
