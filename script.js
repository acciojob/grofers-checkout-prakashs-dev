const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const getSum = () => {
//Add your code here
	    const getPrices = document.querySelectorAll(".price");
        let sum = 0;
        for (let i = 0; i < getPrices.length; i++) {
          sum += parseInt(getPrices[i].innerText);
        }
        const table = document.querySelector("table");
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerText = "Total";
        cell2.innerText = sum;
	    getSumBtn.removeEventListener('click',getSum);
};

getSumBtn.addEventListener("click", getSum);

