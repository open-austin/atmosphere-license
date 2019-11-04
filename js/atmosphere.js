const isNotChecked = function (target) {
    return !target.checked
}

const toggleDash = function () {
    dash = Array.from(document.getElementsByClassName("any-options"))
    dash.forEach(function (element) {
        element.hidden = provisionCheckboxes.every(isNotChecked)
    })
}

const toggleProvisions = function (target) {
    clauses = Array.from(document.getElementsByClassName(target.name))
    clauses.forEach(function (element) {
        element.hidden = isNotChecked(target)
    });
    toggleDash()
};


const toggleProvisionsFromEvent = function (e) {
    toggleProvisions(e.target)
}

let provisionCheckboxes = Array.from(document
    .getElementById('provision-toggle')
    .getElementsByTagName("input"));
provisionCheckboxes.forEach(function (element) {
    element.addEventListener('click', toggleProvisionsFromEvent)
});
provisionCheckboxes.forEach(toggleProvisions);