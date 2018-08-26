// width of hour pointer, minute pointer is 2/3
var pointWidth = 15;

linuxcn_logo = document.getElementById("linuxcn_logo");
// linuxcn_logo_pointer = linuxcn_logo.getElementById("linuxcn_logo_bigl");
linuxcn_logo_pointer = linuxcn_logo;

(function() {
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    el.setAttribute('id', 'central_point');
    el.setAttribute('cx', '256');
    el.setAttribute('cy', '256');
    el.setAttribute('r', '2');
    el.setAttribute('style', 'fill:#333333;fill-opacity:0.5;transition:1s;');
    linuxcn_logo_pointer.appendChild(el);

    var el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    el.setAttribute('id', 'second_point');
    el.setAttribute('cx', '256');
    el.setAttribute('cy', '20');
    el.setAttribute('r', '5');
    el.setAttribute('style', 'fill: #333333; fill-opacity: 0.7; stroke: #666666; stroke-width: 1; transition: 1s;')
    var el_a = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
    el_a.setAttribute('attributeName', 'none');
    el_a.setAttribute('type', 'rotate');
    el_a.setAttribute('dur', '60s');
    el_a.setAttribute('repeatCount', 'indefinite');
    el.appendChild(el_a);
    linuxcn_logo.appendChild(el);
})()

logo_h = linuxcn_logo_pointer.getElementById("linuxcn_h");
logo_m = linuxcn_logo_pointer.getElementById("linuxcn_m");
logo_point = linuxcn_logo_pointer.getElementsByClassName("logo_point");

logo_h_ani = logo_h.getElementsByTagName("animateTransform")[0];
logo_m_ani = logo_m.getElementsByTagName("animateTransform")[0];

point_s = linuxcn_logo.getElementById("second_point");
point_s_ani = point_s.getElementsByTagName("animateTransform")[0];

// for(var i = 0; i < logo_point.length; i++) {
//     logo_point[i].classList.add("point_rotate");
// }

logo_h.setAttribute('x', '254');
logo_h.setAttribute('y', (256 - pointWidth / 2).toString());
// logo_h.setAttribute('width', '128');
logo_h.setAttribute('height', pointWidth);
logo_m.setAttribute('x', (256 - pointWidth / 3).toString());
logo_m.setAttribute('y', (256 + 2 - logo_m.getAttribute('height')).toString());
logo_m.setAttribute('width', pointWidth * 2 / 3);
// logo_m.setAttribute('height', '4');

// get current time
nowh = (new Date()).getHours();
nowm = (new Date()).getMinutes();
nows = (new Date()).getSeconds();
// set rotate degree
rh = (nowh - 3 + nowm / 60 + nows / 60 / 60) / 12 * 360; // initial state is 90 deg
rm = (nowm + nows / 60) / 60 * 360;
rs = nows / 60 * 360;

logo_h_ani.setAttribute('from', rh.toString() + ' 256 256');
logo_h_ani.setAttribute('to', (rh + 360).toString() + ' 256 256');
logo_h_ani.setAttribute('attributeName', 'transform');
logo_m_ani.setAttribute('from', rm.toString() + ' 256 256');
logo_m_ani.setAttribute('to', (rm + 360).toString() + ' 256 256');
logo_m_ani.setAttribute('attributeName', 'transform');

point_s_ani.setAttribute('from', rs.toString() + ' 256 256');
point_s_ani.setAttribute('to', (rs + 360).toString() + ' 256 256');
point_s_ani.setAttribute('attributeName', 'transform');
