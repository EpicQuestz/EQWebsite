$(document).ready( function () {
	$('#archive').DataTable({
		ajax: {
			url: "https://api.npoint.io/1cfe644e05ccb363a03e",
			dataType: "json"
		},
		columns: [
			{
				data: 'name'
			},
			{
				data: 'trailerLink',
				render: function (data, type, row, meta) {
					return `<a href="'+data+'">Trailer</a>`;
				}
			},
			{
				data: 'pmcLink'
			},
			{
				data: 'downloadJava'
			},
			{
			data: 'downloadBedrock'
			},
			{
			data: 'releaseDate'
			},
			{data: 'updateDate'}
		]
	});
} );