/*
	 $ is your scrape function that should be bound. You could wrap up jQuery's $ or some other way of 'searching a file'.
 */
module.exports = function($, val, scrape) {
	var scraped = {};
	for (var target in scrape) {
		var search = $(scrape[target]);
		scraped[target] = val(search);
	}	
	return scraped;
}
