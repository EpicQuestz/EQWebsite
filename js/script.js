new DataTable('#archive', {
    ajax: 'https://api.jsonbin.io/v3/qs/64bd10709d312622a3836890',
 	columns: [
		{data: 'name'},
		{data: 'trailerLink'},
		{data: 'pmcLink'},
		{data: 'downloadJava'},
		{data: 'downloadBedrock'},
		{data: 'releaseDate'},
		{data: 'updateDate'}
	]
});