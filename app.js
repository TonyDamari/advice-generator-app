const adviceID = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const btn = document.getElementById("get-advice");

async function getAdvice()  {

    const URL = "https://api.adviceslip.com/advice";

    try {
        const res = await fetch(URL);
        const data = await res.json();
       

      

        adviceID.innerText = `Advice #${data.slip.id}`
        adviceText.innerText = `"${data.slip.advice}"`
    } catch (error) {
        console.log("Error Message: ", error);
    }
}


btn.addEventListener('click', () => {
    getAdvice()
   
})
