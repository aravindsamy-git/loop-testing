document.addEventListener("DOMContentLoaded", function () {
    const images = ['../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png'];
    images.forEach(image => {
        const swipe = document.createElement('div');
        swipe.classList.add('cCarousel-item');
        swipe.style.backgroundImage = `url('${image}')`;
        document.getElementById("cCarousel-inner").appendChild(swipe);
    });
    calculateRemainingWidthPercentage();

    const prev = document.querySelector("#left-arrow");
    const next = document.querySelector("#right-arrow");

    let carouselVp = document.querySelector("#carousel-vp");

    let cCarouselInner = document.querySelector("#cCarousel-inner");
    let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

    let leftValue = 0;

    const totalMovementSize =
        parseFloat(
            document.querySelector(".cCarousel-item").getBoundingClientRect().width,
            10
        ) +
        parseFloat(
            window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
            10
        );

    prev.addEventListener("click", () => {
        if (!leftValue == 0) {
            leftValue -= -totalMovementSize;
            cCarouselInner.style.left = leftValue + "px";
        }
    });

    next.addEventListener("click", () => {
        const carouselVpWidth = carouselVp.getBoundingClientRect().width;
        if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
            leftValue -= totalMovementSize;
            cCarouselInner.style.left = leftValue + "px";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const partiesData = [
        {
            image1: "../media/spi.png",
            mainText: "coffee?",
            subText: "Join us",
            images2: ["../media/smi1.png", "../media/smi2.png", "../media/smi3.png"]
        },
        {
            image1: "../media/spi.png",
            mainText: "coffee?",
            subText: "Join us",
            images2: ["../media/smi1.png", "../media/smi2.png", "../media/smi3.png"]
        },

        {
            image1: "../media/spi.png",
            mainText: "coffee?",
            subText: "Join us",
            images2: ["../media/smi1.png", "../media/smi2.png", "../media/smi3.png"]
        },

        {
            image1: "../media/spi.png",
            mainText: "coffee?",
            subText: "Join us",
            images2: ["../media/smi1.png", "../media/smi2.png", "../media/smi3.png"]
        },

        {
            image1: "../media/spi.png",
            mainText: "coffee?",
            subText: "Join us",
            images2: ["../media/smi1.png", "../media/smi2.png", "../media/smi3.png"]
        },

        {
            image1: "../media/spi.png",
            mainText: "coffee?",
            subText: "Join us",
            images2: ["../media/smi1.png", "../media/smi2.png", "../media/smi3.png"]
        },
        {
            image1: "../media/spi.png",
            mainText: "coffee?",
            subText: "Join us",
            images2: ["../media/smi1.png", "../media/smi2.png", "../media/smi3.png"]
        },

        {
            image1: "../media/spi.png",
            mainText: "coffee?",
            subText: "Join us",
            images2: ["../media/smi1.png", "../media/smi2.png", "../media/smi3.png"]
        },

        {
            image1: "../media/spi.png",
            mainText: "coffee?",
            subText: "Join us",
            images2: ["../media/smi1.png", "../media/smi2.png", "../media/smi3.png"]
        },

        {
            image1: "../media/spi.png",
            mainText: "coffee?",
            subText: "Join us",
            images2: ["../media/smi1.png", "../media/smi2.png", "../media/smi3.png"]
        }
    ];

    const partiesContainer = document.querySelector('.parties-cCarousel-inner');

    partiesData.forEach(data => {
        const partyDiv = document.createElement('div');
        partyDiv.classList.add('parties-cCarousel-item');

        const partyElementsDiv = document.createElement('div');
        partyElementsDiv.classList.add('party-elements');

        const partyDiv1 = document.createElement('div');
        partyDiv1.classList.add('partydiv1');
        const img1 = document.createElement('img');
        img1.src = data.image1;
        img1.alt = "Party Image 1";
        const mainText = document.createElement('p');
        mainText.classList.add('party-maintext');
        mainText.textContent = data.mainText;
        const subText = document.createElement('p');
        subText.classList.add('partystext');
        subText.textContent = data.subText;
        partyDiv1.appendChild(img1);
        partyDiv1.appendChild(mainText);
        partyDiv1.appendChild(subText);

        const partyDiv2 = document.createElement('div');
        partyDiv2.classList.add('partydiv2');
        data.images2.forEach(imageSrc => {
            const img2 = document.createElement('img');
            img2.src = imageSrc;
            img2.alt = "Party Image 2";
            partyDiv2.appendChild(img2);
        });

        partyElementsDiv.appendChild(partyDiv1);
        partyElementsDiv.appendChild(partyDiv2);

        partyDiv.appendChild(partyElementsDiv);

        partiesContainer.appendChild(partyDiv);
    });



    calculateRemainingWidthPercentage();

    const partiesprev = document.querySelector("#parties-left-arrow");
    const partiesnext = document.querySelector("#parties-right-arrow");

    let partiescarouselVp = document.querySelector("#parties-carousel-vp");

    let partiescCarouselInner = document.querySelector("#parties-cCarousel-inner");
    let partiescarouselInnerWidth = partiescCarouselInner.getBoundingClientRect().width;

    let leftValue = 0;

    const totalMovementSize =
        parseFloat(
            document.querySelector(".parties-cCarousel-item").getBoundingClientRect().width,
            10
        ) +
        parseFloat(
            window.getComputedStyle(partiescCarouselInner).getPropertyValue("gap"),
            10
        );

    partiesprev.addEventListener("click", () => {
        if (!leftValue == 0) {
            leftValue -= -totalMovementSize;
            partiescCarouselInner.style.left = leftValue + "px";
        }
    });

    partiesnext.addEventListener("click", () => {
        const partiescarouselVpWidth = partiescarouselVp.getBoundingClientRect().width;
        if (partiescarouselInnerWidth - Math.abs(leftValue) > partiescarouselVpWidth) {
            leftValue -= totalMovementSize;
            partiescCarouselInner.style.left = leftValue + "px";
        }
    });
});

function calculateRemainingWidthPercentage() {
    var screenWidth = window.innerWidth;
    var remainingWidth = screenWidth - 350;
    var swipes = document.getElementById("cCarousel");
    var parties = document.getElementById("parties-cCarousel");

    if (screenWidth > 1000) {
        swipes.style.maxWidth = remainingWidth + 'px';
        parties.style.maxWidth = remainingWidth + 'px';
    } else {
        swipes.style.maxWidth = '100%';
        parties.style.maxWidth = '100%';
    }
}

window.addEventListener('resize', calculateRemainingWidthPercentage);

const imageUrls = ['../media/smi1.png', '../media/smi2.png', '../media/smi3.png', '../media/smi4.png', '../media/smi5.png'];
const messageInner = document.querySelector('.message-inner');
imageUrls.forEach(url => {
    const messageProfile = document.createElement('div');
    messageProfile.classList.add('messageprofile');
    messageProfile.style.backgroundImage = `url('${url}')`;
    messageInner.appendChild(messageProfile);
});

const userData = {
    profileImageUrl: "../media/sui.png",
    username: "John Doe",
    userstatus: "Busy"
};

const userDetailsDiv = document.querySelector('.userdetails');
const userProfileImg = document.createElement('img');
const userDetailsTextDiv = document.createElement('div');
const usernameParagraph = document.createElement('p');
const userstatusParagraph = document.createElement('p');

userProfileImg.classList.add('userprofile');
userProfileImg.src = userData.profileImageUrl;
userProfileImg.alt = "User Profile Image";
usernameParagraph.classList.add('username');
usernameParagraph.textContent = userData.username;
userstatusParagraph.classList.add('userstatus');
userstatusParagraph.textContent = userData.userstatus;

userDetailsTextDiv.appendChild(usernameParagraph);
userDetailsTextDiv.appendChild(userstatusParagraph);
userDetailsDiv.appendChild(userProfileImg);
userDetailsDiv.appendChild(userDetailsTextDiv);


const userdetailoptiondiv = document.getElementById("userdetailsoption")
const userProfileImgo = document.createElement('img');
const userDetailsTextDivo = document.createElement('div');
const usernameParagrapho = document.createElement('p');
const userstatusParagrapho = document.createElement('p');

userProfileImgo.classList.add('userprofileo');
userProfileImgo.src = userData.profileImageUrl;
userProfileImgo.alt = "User Profile Image";
usernameParagrapho.classList.add('usernameo');
usernameParagrapho.textContent = userData.username;
userstatusParagrapho.classList.add('userstatuso');
userstatusParagrapho.textContent = userData.userstatus;

userDetailsTextDivo.appendChild(usernameParagrapho);
userDetailsTextDivo.appendChild(userstatusParagrapho);
userdetailoptiondiv.appendChild(userProfileImgo);
userdetailoptiondiv.appendChild(userDetailsTextDivo);


function calculateMainElementHeight() {
    const mainElement = document.getElementById('main-element');
    const mainelement = document.getElementById("elements")
    const addvertiseelement = document.getElementById("addvertise-element")
    
    var screenWidth = window.innerWidth;

    const mainHeight = mainElement.offsetHeight;
    const elementheight = mainelement.offsetHeight;
    const addvertiseelementheight = mainHeight - elementheight


    if(screenWidth > 668){
        addvertiseelement.style.height = addvertiseelementheight + "px"
    }
    else{
        addvertiseelement.style.height = "100%"
    }
    
}

calculateMainElementHeight()

window.addEventListener('resize', calculateMainElementHeight);

document.addEventListener("DOMContentLoaded" , function(){

    const arrowsvg = document.getElementById("arrowsvg")

    arrowsvg.addEventListener("click" , function(){
        
    })
})