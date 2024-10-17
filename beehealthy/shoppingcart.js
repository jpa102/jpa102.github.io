/*
	shoppingcart.js
	adds functionality to increase the counter and to add items in the list
*/



let shopping_counter = 0;
var basket_counter_final = shopping_counter.toLocaleString();

function increaseCounterWhenClicked(task) {
	if (task == "initialize") {
		setTimeout(function() {
			document.querySelector("#cartCount").innerText = basket_counter_final;
		}, 1000);
	} else {
		shopping_counter++;
		basket_counter_final = shopping_counter.toLocaleString();
		document.querySelector("#cartCount").innerText = basket_counter_final;
	}
}



// TODO: add items to cart - code
