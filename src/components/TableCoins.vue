<template>
	<div class="container">
		<div class="row">
			<table class="table table-dark">
				<thead>
					<tr>
						<th v-for="(title, index) in titles" :key="index">{{ title }}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(coin, index) in filteredCoins" :key="coin.key">
						<td class="text-muted">{{ index }}</td>
						<td>
							<img class="me-2" :src="coin.image" :alt="coin.name" />
							<span>{{ coin.name }}</span>
							<span class="ms-2 text-uppercase text-muted">{{
								coin.symbol
							}}</span>
						</td>
						<td>$ {{ coin.current_price }}</td>
						<td
							:class="
								coin.price_change_percentage_24h >= 0
									? 'text-success'
									: 'text-danger'
							"
						>
							{{ coin.price_change_percentage_24h }}%
						</td>
						<td>$ {{ coin.total_volume.toLocaleString() }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import getCoinsgecko from "@/helpers/getCoinsGecko";

	export default {
		name: "TableCoin",

		props:{
			filter:{
				type: String,
				default: ''

			}	
		},

		data() {
			return {
				coins: [],
				titles: ["#", "Coin", "Price", "Prince Change", "24h Volume"]
			};
		},

        computed:{
            filteredCoins(){
                
                return this.coins.filter( coin => 
                            coin.name.toLowerCase().includes( this.filter.toLowerCase()) 
                            || coin.symbol.toLowerCase().includes(this.filter.toLowerCase()))
            }
        },

		async created() {
			const data = await getCoinsgecko();
			this.coins = data;
		},
	};
</script>

<style scoped>
	td img {
		width: 2rem;
	}
</style>