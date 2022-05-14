const header_component = document.getElementById('header_component');
header_component.innerHTML =
    '<div id="logoArea" class="navbar">' +
    '<a id="smallScreen" data-target="#topMenu" data-toggle="collapse" class="btn btn-navbar">' +
    '<span class="icon-bar"></span>' +
    '<span class="icon-bar"></span>' +
    '<span class="icon-bar"></span>' +
    '</a>' +
    '<div class="navbar-inner">' +
    '<a class="brand" style="width: 280px; height: 57px;" href="index.html"><img src="themes/img/spacex-logo.png" style="margin:-8px;" alt="Bootsshop" /></a>' +
    '<form class="form-inline navbar-search" method="post" action="products.html">' +
    // '<input id="srchFld" class="srchTxt" type="text" />' +
    // '<select class="srchTxt">' +
    // '<option>ITEMS </option>' +
    // '<option>CLOTHES </option>' +
    // '<option>FOOD AND BEVERAGES </option>' +
    // '<option>HEALTH & BEAUTY </option>' +
    // '<option>SPORTS & LEISURE </option>' +
    // '<option>BOOKS & ENTERTAINMENTS </option>' +
    // '</select>' +
    // '<button type="submit" id="submitButton" class="btn btn-primary">Go</button>' +
    '</form>' +
    '<ul id="topMenu" class="nav pull-right">' +
    // '<li class="" style="padding-right:15px;"><a href="special_offer.html">Special Offers</a></li>' +
    '<li class="" style="padding-right:15px;"><a href="services.html">Services</a></li>' +
    '<li class="" style="padding-right:15px;"><a href="contact.html">About Us</a></li>' +
    '<li style="padding-right:10px;">' +
    '<a href="http://wa.me/+96171567036" target="_blank"><img src="themes/img/whatsapp-icon.png" height="30px" width="30px" style="margin: auto;"></a>' +
    ' </li>' +
    ' <li style="display: inline-block; color: white; padding-top:5px">' +
    '<h5>CALL NOW</h5>' +
    '<h5 style="line-height:5px;">71 - 567036</h5>' +
    '</li>' +
    // '<div id="login" class="modal hide fade in" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="false" >' +
    // '<div class="modal-header">' +
    // '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
    // '<h3>Login Block</h3>' +
    // '</div>' +
    // '<div class="modal-body">' +
    // '<form class="form-horizontal loginFrm">' +
    // '<div class="control-group">	' +
    // '<input type="text" id="inputEmail" placeholder="Email">' +
    // '</div>' +
    // '<div class="control-group">' +
    // '<input type="password" id="inputPassword" placeholder="Password">' +
    // '</div>' +
    // '<div class="control-group">' +
    // '<label class="checkbox">' +
    // '<input type="checkbox"> Remember me' +
    // '</label>' +
    // '</div>' +
    // '</form>' +
    // '<button type="submit" class="btn btn-success">Sign in</button>' +
    // '<button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>' +
    // '</div>' +
    // '</div>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</div>';
document.body.appendChild(header_component.content);