let page = 1;
let url = `https://picsum.photos/v2/list?page=${page}&limit=6`;

async function getImg(url) {
    for (let i = 0; i < 6; i++) {
        const response = await fetch(url);
        const json = await response.json();
        let id = json[i].id;
        let src = `https://picsum.photos/id/${id}/300`;
        let img = document.createElement("img");
        img.setAttribute("src", src);
        document.body.appendChild(img);
    }
};

function prevBTN() {
    let prevBtn = document.createElement("button");
    prevBtn.innerHTML = "previous";
    document.body.appendChild(prevBtn);
    prevBtn.addEventListener("click", () => {
        if (page != 1) {
            page--
        }
    })
};

function nextBTN() {
    let nexBtn = document.createElement("button");
    nexBtn.innerHTML = "next";
    document.body.appendChild(nexBtn);
    nexBtn.addEventListener("click", () => {
        if (page != 6) {
            page++
        }
    })
}



getImg(url)

let prevBtn = prevBTN();

let nexBtn = nextBTN();