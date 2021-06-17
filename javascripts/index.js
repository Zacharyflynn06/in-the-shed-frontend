form = document.querySelectorAll('.full-chord')

const toggleNavBar = () => {
    if(navBar().className === "closed"){
        navBar().className = "open"
    } else if(navBar().className === "open") {
        navBar().className = "closed"
    }
}

const addCrudButtons = () => {

    const addSave = document.createElement("input")
    addSave.type = "button"
    addSave.id = "save-button"
    addSave.value = "Save"

    const addDelete = document.createElement("input")
    addDelete.type = "button"
    addDelete.id = "delete-button"
    addDelete.value = "Delete"

    buttonsContainer().appendChild(addSave)
    buttonsContainer().appendChild(addDelete)

    const saveBtn = () => document.querySelector('#save-button')
    const deleteBtn = () => document.querySelector('#delete-button')


    // saveBtn().addEventListener('click', )
    // deleteBtn().addEventListener('click', )
}

