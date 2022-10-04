// styel swicher

const styleSwitcherToggle = () =>{
    const styleSwitcher = document.querySelector(".js-style-switcher");
    const styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");
    styleSwitcherToggler.addEventListener("click", function(){
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("fa-times");
        this.querySelector("i").classList.toggle("fa-cog");
    });
}
styleSwitcherToggle();




// theme colors
const themeColor = () =>{
    const hueSlider =document.querySelector(".js-hue-slider");
    const html =document.querySelector("html");

    const setHue = (value) =>{
        html.style.setProperty("--hue", value);
        document.querySelector(".js-hue").innerHTML= value;
    }

    hueSlider.addEventListener("input", function(){
        setHue(this.value);

        // set the user preferne's in local storage
        localStorage.setItem("--hue", this.value);
    });

    const slider =( value) =>{
        hueSlider.value=value;
    }

    // check for save user preference if any on load of the website
    if(localStorage.getItem("--hue")!=null){
        setHue(localStorage.getItem("--hue"));
        slider(localStorage.getItem("--hue"));
    }
    else{
        // default value
        const hue =getComputedStyle(html).getPropertyValue("--hue");
        setHue(hue);
        slider(hue.split(" ").join(""));
     }
}
themeColor();


// dark them and light them code

const themeLightDark = () =>{
    const darkModeCheckBox = document.querySelector(".js-dark-mode");

    const themeMode = () =>{
        if(localStorage.getItem("dark-theme") === "false"){
            document.body.classList.remove("t-dark");
        }
        else{
            document.body.classList.add("t-dark");
        }
    }

    darkModeCheckBox.addEventListener("click",function(){
        // set the ueser prefernce in locat storage
        localStorage.setItem("dark-theme", this.checked);
        themeMode();
        console.log(this.checked);
    })

    // check for saced user preference if any on load the website
    if(localStorage.getItem("dark-theme") !==null){
        themeMode();
    }
    if(document.body.classList.contains("t-dark")){
        darkModeCheckBox.checked = true;
    }
} 

themeLightDark();