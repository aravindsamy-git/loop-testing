const prevbtn = document.getElementById("prev-btn");
const nextbtn = document.getElementById("next-btn");
const radioButtons = document.querySelectorAll('input[type="radio"][name="slider"]');

function changePreviousImage() {
    const checkedInput = document.querySelector('input[type="radio"]:checked');
    if (checkedInput) {
        const currentIndex = parseInt(checkedInput.id.replace('item-', ''));
        if (currentIndex === 1) {
            radioButtons[radioButtons.length - 1].checked = true;
            setactiveindicator()
            return;
        }
        const previousIndex = currentIndex - 1;
        radioButtons[previousIndex - 1].checked = true;
        setactiveindicator()

    }
}

function changeNextImage() {
    const checkedInput = document.querySelector('input[type="radio"]:checked');
    if (checkedInput) {
        const currentIndex = parseInt(checkedInput.id.replace('item-', ''));
        if (currentIndex === radioButtons.length) {
            radioButtons[0].checked = true;
            setactiveindicator()
            return;
        }
        const nextIndex = currentIndex + 1;
        radioButtons[nextIndex - 1].checked = true;
        setactiveindicator()
    }
}

prevbtn.addEventListener("click", changePreviousImage)
nextbtn.addEventListener("click", changeNextImage)

function setactiveindicator() {
    const checkedInput = document.querySelector('input[type="radio"]:checked');
    const indicator1 = document.getElementById("indicator1");
    const indicator2 = document.getElementById("indicator2");
    const indicator3 = document.getElementById("indicator3");
    const indicator4 = document.getElementById("indicator4")
    const indicator5 = document.getElementById("indicator5")

    if (checkedInput.id === "item-1") {
        indicator1.classList.add('active');
    } else {
        indicator1.classList.remove('active');
    }

    if (checkedInput.id === "item-2") {
        indicator2.classList.add('active');
    } else {
        indicator2.classList.remove('active');
    }

    if (checkedInput.id === "item-3") {
        indicator3.classList.add('active');
    } else {
        indicator3.classList.remove('active');
    }

    if (checkedInput.id === "item-4") {
        indicator4.classList.add('active');
    } else {
        indicator4.classList.remove('active');
    }

    if (checkedInput.id === "item-5") {
        indicator5.classList.add('active');
    } else {
        indicator5.classList.remove('active');
    }
}

setactiveindicator()

const sliderimage1 = document.getElementById("sliderimage-1")
const sliderimage2 = document.getElementById("sliderimage-2")
const sliderimage3 = document.getElementById("sliderimage-3")
const sliderimage4 = document.getElementById("sliderimage-4")
const sliderimage5 = document.getElementById("sliderimage-5")


sliderimage1.addEventListener("click", setactiveindicator);
sliderimage2.addEventListener("click", setactiveindicator);
sliderimage3.addEventListener("click", setactiveindicator);
sliderimage4.addEventListener("click", setactiveindicator);
sliderimage5.addEventListener("click", setactiveindicator);
