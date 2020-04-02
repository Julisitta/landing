window.onload = function() {
    document.querySelector('.little-photo').addEventListener('click', fTabs)
}

function fTabs(event) {
    if (event.target.className == 'tab-h'){
    var dataTab = event.target.getAttribute ('data-tab');
        var tabBody = document.getElementsByClassName('tab-b');
        for (var i=0; i<tabBody.length; i++) {
            if  (dataTab == i) {
                tabBody[i].style.display = 'block';
                tabBody[i].style.display = 'flex';
            }
            else {
                tabBody[i].style.display = 'none';
            }
        }
    }
}

