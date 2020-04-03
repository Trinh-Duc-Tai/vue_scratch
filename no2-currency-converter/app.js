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
		result: 0,
		loading: false
	},
	computed: {
		formattedCurrencies() {
			return Object.values(this.currencies);
    },
    calculateResult(){
      return (Number(this.amount) *this.result).toFixed(3); 
		},
		disabled(){
			return this.amount === 0 || !this.amount || this.loading;
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
			this.loading = true;
			axios
				.get(`https://free.currconv.com/api/v7/convert?q=${key}&compact=ultra&apiKey=eeb1166f13fc023f1cbe`)
				.then(response => {
					this.loading = false;
					console.log(response);
					console.log(response.data[key]);
					this.result = response.data[key];
				});
		}
	},
	// watch để check nếu có sự thay đổi của biến from và to thì sẽ reset kết quả về 0
	watch:{
		from(){
			this.result = 0;
		},
		to(){
			this.result = 0;
		}
	}
});
