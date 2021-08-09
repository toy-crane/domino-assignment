const createTableRowElement = (transactions) => {
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
	return trs;
};

fetch(
	"https://raw.githubusercontent.com/weffwd/take-home-assessment/main/data.json"
)
	.then((response) => response.json())
	.then((transactions) => {
		let tableBody = document.getElementById("stock-table__body");
		tableBody.innerHTML = "";
		let trs = createTableRowElement(transactions);
		tableBody.innerHTML += trs;
	});

const handleOrdering = () => {
	fetch(
		"https://raw.githubusercontent.com/weffwd/take-home-assessment/main/data.json"
	)
		.then((response) => response.json())
		.then((transactions) => {
			let tableBody = document.getElementById("stock-table__body");
			const sortedTransactions = transactions.sort((a, b) =>
				a.price > b.price ? -1 : 1
			);
			tableBody.innerHTML = "";
			let trs = createTableRowElement(sortedTransactions);
			tableBody.innerHTML += trs;
		});
};

const descOrderingButton = document.getElementById("ordering-button__desc");
descOrderingButton.addEventListener("click", handleOrdering);
