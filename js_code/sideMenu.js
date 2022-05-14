sideMenu = [{
    "section": "PCs and Desktops",
    "subsection": [
        "APPLE products",
        "OTHERS BRANDS",
        "DESKTOPS",
        "COMPUTERS PARTS"
    ]
}, {
    "section": "PHONES",
    "subsection": [
        "IPHONES",
        "SAMSUNG",
        "HUWAWEI",
        "NOKIA",
        "XIAOMI",
        "SONY",
        "SCREENS"
    ]
}, {
    "section": "PRINTERS AND TONERS",
    "subsection": [
        "HP",
        "KONICA",
        "OTHER BRANDS",
        "TONERS AND INKs"
    ]
}, {
    "section": "ACCESSORIES",
    "subsection": [
        "PLUG ADAPTERS",
        "HEADPHONES",
        "EARPHONES",
        "PHONE CABLES",
        "PHONE CHARGERS",
        "USB FLASH DRIVE",
        "HARD DRIVES",
        "LAPTOP CHARGER",
        "CARD READER",
        "CDs & DVDs",
        "WEBCAM",
        "UPS SYSTEMS",
        "SELFIE STICK",
        "POWER BANKS",
        "BAGS"
    ]
}, {
    "section": "PRINTING SUPPLIES",
    "subsection": [
        "PAPER",
        "LIQUID, POWDER INK"
    ]
}, {
    "section": "NETWORKING",
    "subsection": [
        "ROUTERS",
        "RANGE EXTENDERS",
        "SWITCHES",
        "NETWORK ADAPTERS",
        "NETWORK CABLES"
    ]
}];
sideMenuContent = '';
$.each(sideMenu, function(index, element) {
    var subMenuOpen = '';
    var displayStyleNone = ' style="display:none"';
    if (index === 0) {
        subMenuOpen = ' open';
        displayStyleNone = '';
    }
    // apple.html
    // printers-hp.html
    // plug-adapters.html
    var subMenu_li = "";
    $.each(element.subsection, function(i, e) {
        var active_li = '';
        if (index === 0 && i == 0) {
            active_li = ' class="active" ';
        }
        subMenu_li += '<li>' + '<a' + active_li +
            // ' href="' + 'other-brands.html' + '"' +
            '>' +
            '<i class="icon-chevron-right"></i>' +
            e + '</a>' +
            '</li>';
    });
    sideMenuContent += '<li class="subMenu' + subMenuOpen + '">' +
        '<a>' + element.section + '</a>' +
        '<ul ' + displayStyleNone + '>' +
        subMenu_li +
        '</ul>' +
        '</li>';
});
const sidebar = document.getElementById('sidebar');
sidebar.innerHTML = '<ul id="sideManu" class="nav nav-tabs nav-stacked">' +
    sideMenuContent +
    '</ul > ';
document.body.appendChild(sidebar.content);