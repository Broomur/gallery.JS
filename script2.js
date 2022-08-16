/* ***************************************
***************  CLASSES  ****************
*************************************** */


class Page {
    constructor(url) {
        this.url = url;
    };
    displayImg(num) {
        root.innerHTML = null;
        for(let i = 0; i < num; i++) {
            let picture = new Picture(i);
            picture.getImg(this.url);
        };
    };
}

class Picture {
    constructor(id) {
        this.id = id;
    };
    async getImg(url) {
        const response = await fetch(url);
        const json = await response.json();
        let id = json[this.id].id;
        let src = `https://picsum.photos/id/${id}/300`;
        let img = document.createElement("img");
        img.setAttribute("src", src);
        img.setAttribute("class", "col-12 col-md-4 mb-3")
        root.appendChild(img);
    };
};

/* ***************************************
*************** FUNCTIONS ****************
*************************************** */

function getURL(numPage) {
    return `https://picsum.photos/v2/list?page=${numPage}&limit=6`;
}


function pagination(numPage) {
    numPage = parseInt(numPage);
    if (numPage == 1) {
        document.querySelector(".left").innerText = numPage;
        document.querySelector(".central").innerText = numPage +1;
        document.querySelector(".right").innerText = numPage +2;
    } else {
        document.querySelector(".left").innerText = numPage -1;
        document.querySelector(".central").innerText = numPage;
        document.querySelector(".right").innerText = numPage +1;
    }
}

/* ***************************************
*************** VARIABLES ****************
*************************************** */

let root = document.getElementById("root");
let btnContainer = document.getElementById("btnContainer");
let numPage = 1;
let url = getURL(numPage);
let page = new Page(url);
let pictures = page.displayImg(6);
let paginNb = document.querySelectorAll(".paginNb");

/* ***************************************
*************** LISTENERS ****************
*************************************** */

document.getElementById("previous").addEventListener("click", () => {
    if (numPage > 1) {
        numPage--;
        url = getURL(numPage);
        page = new Page(url);
        pictures = page.displayImg(6);
        pagination(numPage);
    }
})

document.getElementById("next").addEventListener("click", () => {
    if (numPage < 100) {
        numPage++;
        url = getURL(numPage);
        page = new Page(url);
        pictures = page.displayImg(6);
        pagination(numPage);
    };
});

paginNb.forEach(item => {
    item.addEventListener("click", () => {
        numPage = item.innerText;
        url = getURL(numPage);
        page = new Page(url);
        pictures = page.displayImg(6);
        pagination(numPage);
    });
});