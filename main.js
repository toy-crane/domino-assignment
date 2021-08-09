function createNode(element) {
	return document.createElement(element);
}

function appendElement(parent, el) {
	return parent.appendChild(el);
}

const createTableRowElement = (transactions) => {
	let trs = [];
	transactions.map((transaction, index) => {
		let className = "";
		if (index % 2 === 0) {
			className = "stock-table__row--even";
		} else {
			className = "stock-table__row--odd";
		}
		const newTr = createNode("tr");
		newTr.className = className;
		const stockNameTd = createNode("td");
		stockNameTd.innerHTML = `${transaction.stock.name}`;
		const stockPriceTd = createNode("td");
		stockPriceTd.innerHTML = `${transaction.price}`;
		appendElement(newTr, stockNameTd);
		appendElement(newTr, stockPriceTd);
		trs.push(newTr);
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
		trs.map((tr) => appendElement(tableBody, tr));
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
			trs.map((tr) => appendElement(tableBody, tr));
		});
};

const descOrderingButton = document.getElementById("ordering-button__desc");
descOrderingButton.addEventListener("click", handleOrdering);
