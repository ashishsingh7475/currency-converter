let BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const dropdowns = document.querySelectorAll(".dropdowns select");



//for getting countries in the select dropdown
for(let select of dropdowns) {
   
        for(currCode in countryList) {
            let newOption = document.createElement("option");
            newOption.innerText = currCode;
            newOption.value = currCode;


            if(select.name ==="from" && currCode==="USD"){
                newOption.selected="selected";
                
            }else if(select.name ==="to" && currCode==="INR"){
                newOption.selected="selected";
            }
            select.append(newOption);         
        }
//for getting all the flags
        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target);
        });
    }
     const updateFlag = (element)=>{
       let currCode = element.value;
       let countryCode = countryList[currCode];
       let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
       let img = element.parentElement.querySelector("img");
       img.src = newSrc;
    }
//for the button actions    
     let btn = document.querySelector("button")
     btn.addEventListener("click",async(evt)=>{
        evt.preventDefault();
        let fromCurr = document.querySelector("#from")
        let toCurr = document.querySelector("#to")
        let input = document.querySelector("input")
        let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data[toCurr.value.toLowerCase()];
        let answer = rate*input.value;

        let msg = document.querySelector("#msg");
        msg.innerText = `${input.value} ${fromCurr.value} = ${answer} ${toCurr.value}`;
        
     })
    



