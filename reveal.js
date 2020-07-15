// Add attributes as title tooltip
document.querySelectorAll('input').forEach(function(element) {
    var attributes = [];
    for (i = 0; i < element.attributes.length; i++){
        if (element.attributes[i].nodeName.toLowerCase() === 'title') {
            continue;
        }
        if (element.attributes[i].nodeName.toLowerCase() === 'type' && typeof element.originalType !== 'undefined') {
            var value = element.originalType;
        } else {
            var value = element.attributes[i].nodeValue;
        }
        attributes.push(element.attributes[i].nodeName + '=' + value);
    }
    attributes.sort((a, b) => a.localeCompare(b));
    if (typeof element.originalTitle === 'undefined') {
        element.originalTitle = element.title;
    }
    element.title = element.originalTitle + "\n\nAttributes:\n" + attributes.join("\n");
});

// Reveal all hidden or masked fields
document.querySelectorAll('input[type=password],input[type=hidden]').forEach(function(element) {
    element.originalType = element.type;
    element.type = 'text';
    element.autocomplete = 'off';
    element.spellcheck = 'false';
});
