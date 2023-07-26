$(document).ready( function () {
	$('#archive').DataTable({
		ajax: {
			url: "https://api.npoint.io/3b1d77ebbac931da3567",
			dataType: "json"

		},
		columns: [		
			{
				data: 'name'
			},
			{
				data: 'trailerLink',
				render: function (data, type, row, meta) {
					{return (data == "") ? "Unavailable" : `<a href="` + data + `'">YouTube</a>`;}
				}
			},
			{
				data: 'pmcLink',
				render: function (data, type, row, meta) {
					{return (data == "") ? "Unavailable" : `<a href="` + data + `'">Link</a>`;}
				}
			},
			{
				data: 'downloadJava',
				render: function (data, type, row, meta) {
					{return (data == "") ? "Unavailable" : `<a href="` + data + `'">Download</a>`;}
				}
			},
			{
				data: 'downloadBedrock',
				render: function (data, type, row, meta) {
					{return (data == "") ? "Unavailable" : `<a href="` + data + `'">Download</a>`;}
				}
			},
			{
				data: 'releaseDate',
				render: function (data, type, row, meta) {
					{return (data == "") ? "Unknown" : data;}
				}
			},
			{
				data: 'updateDate',
				render: function (data, type, row, meta) {
					{return (data == "") ? "Not Updated" : data;}
				}
			}
		]
	});
} )