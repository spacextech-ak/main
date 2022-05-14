const footerSection = document.getElementById('footerSection');
footerSection.innerHTML = '' +
    '<div class="container">' +
    '<div class="row">' +
    '<div class="span3">' +
    '<h5>USEFUL LINKS</h5>' +
    // '<a style="font-size: 13px;" href="special_offer.html">SPECIAL OFFERS</a>' +
    '<a style="font-size: 13px;" href="services.html">SERVICES</a>' +
    '<a style="font-size: 13px;" href="contact.html">ABOUT US</a>' +
    '</div>' +
    '<div class="span3">' +
    '<h5>INFORMATION</h5>' +
    '<P>Al-Hamra , Abd-Alaziz Street' +
    '<BR> Abd-Alaziz building 108,Ground Floor' +
    '<BR> Beirut, Lebanon<br> PHONE : <a style="display: inline; font-size: 15px;" ' +
    'href="http://wa.me/096171567036" target="_blank">+961 71567036</a> <br> EMAIL : spacextechno@gmail.com' +
    '</P>' +
    '</div>' +
    '<div class="span3">' +
    // '<h5>ABOUT DESIGNER</h5>' +
    // '<p style="font-size: 15px;"> Website was designed by Fadi Haddad<br> for Space X Technology, you can contact the developer on this number<br><br>' +
    // '<a style="font-size: 14px;" href="http://wa.me/09681951577" target="_blank">+961-81951577</a>' +
    // '</p>' +
    // '<a href="http://wa.me/096171567036" target="_blank" class="whatsapp"><i class = "bx bxl-whatsapp" > < /i></a > ' +
    '</div>' +
    '<div id="socialMedia" class="span3 pull-right">' +
    '<h5>SOCIAL MEDIA </h5>' +
    '<a href="https://www.facebook.com/AKGROUP4BUISNESS/"><img width="60" height="60" src="themes/images/Facebook-icon.png" title="facebook" alt="facebook" /></a>' +
    '<a href="https://wa.me/096171567036"><img width="60" height="60" src="themes/images/whatsapp.png" title="whatsapp" alt="whatsapp" /></a>' +
    '<a href="https://instagram.com/spacexbeirut?igshid=191mpi7dcpluz"><img width="60" height="60" src="themes/images/Instagram.png" title="instagram" alt="instagram" /></a>' +
    '</div>' +
    '</div>' +
    '</div>';
document.body.appendChild(footerSection.content);