function getFormatedTime() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
     
    return day + "." + month + "." + year;
    
}

function getDate(str) {
    // let day = date.indexOf("-");
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();
     
    // return day + "." + month + "." + year;
    return str;
}

export default {getFormatedTime, getDate};