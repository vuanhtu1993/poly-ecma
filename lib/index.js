const render = (component, dom) => {
    dom.innerHTML = component()
}

export {render}