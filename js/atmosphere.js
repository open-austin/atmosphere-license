const isNotChecked = function (target) {
    return !target.checked
}

// include dash in version number only if at least one optional
// provision checkbox is checked

const toggleDash = async function () {

    let provisionCheckboxes = await Array.from(document
        .getElementById('provision-toggle')
        .getElementsByTagName("input"));
    dash = await Array.from(document.getElementsByClassName("any-options"))
    dash.forEach(function (element) {
        element.hidden = provisionCheckboxes.every(isNotChecked)
    })
}

// insert or remove text from introduction and license when
// optional provision checkbox is toggled.

const toggleProvisions = async function (target) {
    clauses = await Array.from(document.getElementsByClassName(target.name))
    clauses.forEach(function (element) {
        element.hidden = isNotChecked(target)
    });
    toggleDash()
};

// Remove brackets that are only used for the noninteractive
// version of the license

const removeBracketsFromOptionalText = function (target) {
    clauses = Array.from(document.getElementsByClassName(target.name))
    clauses.forEach(function (element) {
        element.innerHTML = element.innerHTML.replace("[[OPTIONAL: ", "").replace("]]", "")
    });
};


const toggleProvisionsOnClick = function (e) {
    toggleProvisions(e.target)
}

// make checkboxes interactive

async function initCheckboxes() {

    let provisionCheckboxes = await Array.from(document
        .getElementById('provision-toggle')
        .getElementsByTagName("input"));

    provisionCheckboxes.forEach(function (element) {
        element.addEventListener('click', toggleProvisionsOnClick)
    });
    provisionCheckboxes.forEach(function (element) {
        removeBracketsFromOptionalText(element)
    });
    provisionCheckboxes.forEach(toggleProvisions);
}

document.addEventListener("DOMContentLoaded", function (event) {
    // Show Javascript-only content
    document.getElementById("provision-toggle").hidden = false;
    initCheckboxes();
});

const markdownBox = document.getElementById("license-markdown-box")

const updateMarkdownLicense = async function (target) {
    var turndownService = await new TurndownService().addRule('hidden-nodes', {
        filter: function (node, options) {
        return (
        node.hidden
        )
    },
        replacement: function (content) {
        return ''
        }
    })

    let markdown = await turndownService.turndown(document.getElementById('license'));
    markdownBox.innerHTML = markdown;
}

licenseButton = document.getElementById("license-markdown-button")
licenseButton.addEventListener('click', updateMarkdownLicense);



