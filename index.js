
let frameFourStarted = false;


function frameFour() {
    const imgPlaceHolder = document.getElementById("frameFour");

    if (document.querySelector(".fourthFramePic")) return;

    const images = [
        'pics/fourthframe-firstshot.jpg',
        'pics/frame4-secondshot.webp',
        'pics/frame4-thirdshot.jpeg',
        'pics/fourthframe-fithshot.jpg',
        ''
    ];

    const script = [
        'Design',
        'Performance',
        'Status',
        'All in One',
        'All in Porsche'
    ];

    let index = 1;

    
    const slideshowImg = document.createElement("img");
    slideshowImg.className = "fourthFramePic";
    slideshowImg.style.transition = "opacity 0.5s ease-in-out";
    slideshowImg.src = images[0];
    imgPlaceHolder.appendChild(slideshowImg);

    
    const scriptShow = document.createElement("p");
    scriptShow.textContent = script[0];
    scriptShow.style.transition = "opacity 0.5s ease-in-out";
    imgPlaceHolder.appendChild(scriptShow);

    
    setInterval(() => {
        slideshowImg.style.opacity = 0;
        scriptShow.style.opacity = 0;

        setTimeout(() => {
            slideshowImg.src = images[index];
            scriptShow.textContent = script[index];
            slideshowImg.style.opacity = 1;
            scriptShow.style.opacity = 1;

            index = (index + 1) % images.length;
        }, 700);
    }, 1500);
}

window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    

    const frameThreeImg = document.getElementById("frameThreeImg");

    
    if (scrollY >= 1300) {
        setTimeout(() => {
            frameThreeImg.style.transition = "2s";
            frameThreeImg.style.transform = "translateX(400px)";
        }, 500);
    }

    
    if (scrollY >= 1300 && !frameFourStarted) {
        frameFour();
        frameFourStarted = true;
    }

    
    
    
});

const frameTwoDisplay = document.getElementById("frameTwo");
const frameTwoImg = document.getElementById("frameTwoImg");
frameTwoImg.style.transition = "1s";

let frameTwoAdded = false;
const frameTwoContainer = document.createElement("div");

frameTwoDisplay.addEventListener("mouseover", () => {
    setTimeout(() => {
        frameTwoImg.style.transform = "translateX(-500px)";

        if (!frameTwoAdded) {
            const heading = document.createElement("h2");
            heading.textContent = "Who are we?";
            heading.style.color = "#EBD698";
            heading.style.fontSize = "60px";
            heading.style.textAlign = "center";

            const p = document.createElement("p");
            p.textContent = "Porsche is a world-renowned German automobile manufacturer known for producing high-performance sports cars, SUVs, and sedans. Founded in 1931 by Ferdinand Porsche, the brand has built a legacy rooted in innovation, precision engineering, and racing success. The iconic 911 model exemplifies Porsche’s commitment to design excellence and driving pleasure. Over the years, Porsche has successfully blended luxury with performance, making it a symbol of prestige and speed. With advancements in electric technology like the Taycan, Porsche continues to push boundaries while honoring its heritage. Whether on the racetrack or city streets, a Porsche delivers a thrilling and unforgettable experience.";
            p.style.color = "white";
            p.style.fontSize = "25px";
            p.style.wordSpacing = "0.5px";
            p.style.textAlign = "center";

            frameTwoContainer.style.width = "600px";
            frameTwoContainer.style.position = "absolute";
            frameTwoContainer.style.right = "10%";
            frameTwoContainer.style.paddingTop = "5%";

            frameTwoContainer.appendChild(heading);
            frameTwoContainer.appendChild(p);
            frameTwoDisplay.appendChild(frameTwoContainer);
            frameTwoAdded = true;
        }
    }, 100);
});

frameTwoDisplay.addEventListener("mouseout", () => {
    setTimeout(() => {
        frameTwoImg.style.transform = "translateX(0px)";
        if (frameTwoAdded) {
            frameTwoDisplay.removeChild(frameTwoContainer);
            frameTwoContainer.innerHTML = "";
            frameTwoAdded = false;
        }
    }, 100);
});
