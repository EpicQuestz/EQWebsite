$(document).ready( function () {
	$('#archive').DataTable({
		ajax: {
			url: "https://downloads.epicquestz.com/files/maps.json",
			dataType: "json"

		},
		columns: [
			{
				data: 'name'
			},
			{
				data: 'trailerLink',
				render: function (data, type, row, meta) {
					{return (data == "") ? "Unavailable" : `<a href="` + data + `'"><img src="img/yt_logo.png" alt="YouTube" style="width: 100%"</a>`;}
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

