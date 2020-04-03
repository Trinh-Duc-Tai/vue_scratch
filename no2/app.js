footer = new Vue({
	el: "#footer",
	data: {
		date: new Date()
	},
	methods: {}
});

new Vue({
	el: "#app",
	data: {
		currencies: {},
		amount: 0,
		from: "EUR",
		to: "USD",
		result: 0
	},
	computed: {
		formattedCurrencies() {
			return Object.values(this.currencies);
    },
    calculateResult(){
      return (Number(this.amount) *this.result).toFixed(3); 
		},
		disabled(){
			return this.amount === 0;
		}
	},
	mounted() {
		this.getCurrencies();
	},
	methods: {
		getCurrencies() {
			const currencies = localStorage.getItem("currencies");
			if (currencies) {
				this.currencies = JSON.parse(currencies);
				return;
			}
			axios
				.get(
					"https://free.currconv.com/api/v7/currencies?apiKey=do-not-use-this-key"
				)
				.then(response => {
					console.log(response);
					this.currencies = response.data.results;
					localStorage.setItem(
						"currencies",
						JSON.stringify(response.data.results)
					);
				});
		},
		convertCurrency() {
			const key = `${this.from}_${this.to}`;
			axios
				.get(`https://free.currconv.com/api/v7/convert?q=${key}&compact=ultra&apiKey=eeb1166f13fc023f1cbe`)
				.then(response => {
					console.log(response);
					console.log(response.data[key]);
					this.result = response.data[key];
				});
		}
	}
});
