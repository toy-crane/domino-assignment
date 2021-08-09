let tableBody = document.getElementById("tbody");

fetch(
	"https://raw.githubusercontent.com/weffwd/take-home-assessment/main/data.json"
)
	.then((response) => response.json())
	.then((transactions) => {
		let trs = "";
		transactions.map((transaction, index) => {
			let className = "";
			if (index % 2 === 0) {
				className = "stock-table__row--even";
			} else {
				className = "stock-table__row--odd";
			}
			trs += `<tr class=${className}><td>${transaction.stock.name}</td><td>${transaction.price}</td></tr>`;
		});
		tableBody.innerHTML += trs;
	});
