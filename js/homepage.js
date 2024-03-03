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


const images = ['../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png', '../media/ssi.png',];
const swipesContainer = document.querySelector('.swipes');

images.forEach(image => {
    const swipe = document.createElement('div');
    swipe.classList.add('swipe');
    swipe.style.backgroundImage = `url('${image}')`;
    swipesContainer.appendChild(swipe);
});

// JavaScript
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


];

const partiesContainer = document.querySelector('.parties');

partiesData.forEach(data => {
    const partyDiv = document.createElement('div');
    partyDiv.classList.add('party');

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

document.addEventListener('DOMContentLoaded', function() {
    
    var leftarrow = document.getElementById('left-arrow')
    var rightarrow = document.getElementById('right-arrow')

    leftarrow.addEventListener('click',function(){
        console.log('clicked')
    })

    rightarrow.addEventListener('click',function(){
        console.log('clicked')
    })
});
