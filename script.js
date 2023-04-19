const themeCheckBox = document.querySelector("#checkbox-field");
const root = document.documentElement;

themeCheckBox.checked = false;/* To reset the checkbox when reloading the page */

themeCheckBox.addEventListener("click", (e) => {
    console.log(e.target.checked);
    if(e.target.checked){
        console.log("On");
        root.style.setProperty("--clr-bg", "hsl(230, 17%, 14%)");
        root.style.setProperty("--clr-bg-top", "hsl(232, 19%, 15%)");
        root.style.setProperty("--clr-bg-card", "hsl(228, 28%, 20%)");
        root.style.setProperty("--clr-text-prim", "hsl(0, 0%, 100%)");
        root.style.setProperty("--clr-text-sec", "hsl(228, 34%, 66%)");
        root.style.setProperty("--clr-hover", "hsl(230, 17%, 30%)");
    } else {
        console.log("Off");
        root.style.setProperty("--clr-bg", "hsl(0, 0%, 100%)");
        root.style.setProperty("--clr-bg-top", "hsl(225, 100%, 98%)");
        root.style.setProperty("--clr-bg-card", "hsl(227, 47%, 96%)");
        root.style.setProperty("--clr-text-prim", "hsl(230, 17%, 14%)");
        root.style.setProperty("--clr-text-sec", "hsl(228, 12%, 44%)");
        root.style.setProperty("--clr-hover", "hsl(227, 47%, 90%)");
    }
});