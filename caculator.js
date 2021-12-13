Display_result=document.getElementById("manhinh_1");
Display_2=document.getElementById("manhinh_2");
var dulieu_nhap =[];
function num(so) {
    //reset lại phép toán mới khi có phép toán cũ đang hiện thị
    if (parseFloat(Display_2.value.lastIndexOf("="))>0) {
        Display_2.value=""
        Display_result.value=""
        dulieu_nhap =[]
    }
    //nhâp số và hiển thị ra màn hình
    Display_result.value=Display_result.value +so;
}
function pheptoan(toantu) {
    // dữ lại đáp an đang hiển thị với phép toán mới
    if (parseFloat(Display_2.value.lastIndexOf("="))>0) {
        Display_2.value=""
    }
    dulieu_nhap.push(Display_result.value,toantu);
    Display_2.value=Display_2.value+Display_result.value+toantu
    Display_result.value=""
}
//ấn dấu bằng để thưc hiện phép tính
function bang() {
    dulieu_nhap.push(Display_result.value)
    Display_2.value=Display_2.value+Display_result.value+"="
    result=parseFloat(dulieu_nhap[0]);
    for(i=0;i<dulieu_nhap.length;i++){
        if (dulieu_nhap[i]==="+") {
            result=result+parseFloat(dulieu_nhap[i+1])
        }
        if (dulieu_nhap[i]==="-") {
            result=result-parseFloat(dulieu_nhap[i+1])
        }
        if (dulieu_nhap[i]==="*") {
            result=result * parseFloat(dulieu_nhap[i+1])
        }
        if (dulieu_nhap[i]==="/") {
            result=result / parseFloat(dulieu_nhap[i+1])
        }

    }

    Display_result.value=result
}
function  xoa_manhinh () {
    Display_result.value = ""
    Display_2.value = "";
    dulieu_nhap=[]
}