class Page {
    constructor(url) {
        this.url = url;
    };
    displayImg(num) {
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
        line.appendChild(img);
    };
}

function getURL(numPage) {
    return `https://picsum.photos/v2/list?page=${numPage}&limit=6`;
}

function previousBtn(numPage) {
    let prevBtn = document.createElement("button");
    prevBtn.innerHTML = "previous";
    document.body.appendChild(prevBtn);
    prevBtn.addEventListener("click", () => {
        if (numPage != 1) {
            line.innerHTML = null;
            numPage--;
            url = getURL(numPage);
            page = new Page(url);
            pictures = page.displayImg(6);
        }
    })
};
function nextBtn(numPage) {
    let nexBtn = document.createElement("button");
    nexBtn.innerHTML = "next";
    document.body.appendChild(nexBtn);
    nexBtn.addEventListener("click", () => {
        if (numPage != 6) {
            line.innerHTML = null;
            numPage++;
            url = getURL(numPage);
            page = new Page(url);
            page.displayImg(6);
        }
    })
}

let line = document.getElementById("line");
let numPage = 1;
let url = getURL(numPage);
let page = new Page(url);
let pictures = page.displayImg(6);
previousBtn(numPage);
nextBtn(numPage);