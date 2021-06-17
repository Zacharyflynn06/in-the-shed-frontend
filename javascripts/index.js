form = document.querySelectorAll('.full-chord')

const toggleNavBar = () => {
    if(navBar().className === "closed"){
        navBar().className = "open"
    } else if(navBar().className === "open") {
        navBar().className = "closed"
    }
}

