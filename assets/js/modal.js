
var modals = document.querySelectorAll(".modal");

var triggerDivs = document.querySelectorAll(".image");

var spans = document.querySelectorAll(".close");

function showModal(modal) {
    modal.classList.add("show");
    setTimeout(function() {
        modals[index].style.display = "flex"
    }, 10);
}

function hideModal(modal) {
    modal.classList.remove("show");
    setTimeout(function() {
        modals[index].style.display = "none"
    }, 300);
}

triggerDivs.forEach((triggerDiv, index) => {
    triggerDiv.onclick = function() {
        showModal(modals[index]);
    }
});

spans.forEach((span, index) => {
    span.onclick = function() {
        hideModal(modals[index]);
    }
});

window.onclick = function(event) {
    modals.forEach(modal => {
        if (event.target == modal) {
            hideModal(modal);
        }
    });
}