export default (domName, attributes, text = "") => {
    const dom = document.createElement(domName);
    Object.entries(attributes).forEach(([key, val]) => {
        dom.setAttribute(key, val);
    })

    console.log(text)
    dom.textContent = text;
    return dom;
}