$(document).ready( function () {
	$('#archive').DataTable({
		ajax: {
			url: "https://downloads.epicquestz.com/files/maps.json",
			dataType: "json"

		},
		columns: [
			{
				data: 'pmcLink',
				render: function (data, type, row, meta) {
					{return (data == "") ? row.name : `<a href="` + data + `'">` + row.name + `</a>`;}
				}
			},
			{
				data: 'releaseDate',
				render: function (data, type, row, meta) {
					{return (data == "") ? "(Unknown)" : data;}
				}
			},
			{
				data: 'updateDate',
				render: function (data, type, row, meta) {
					{return (data == "") ? "" : data;}
				}
			},
			{
				data: 'trailerLink',
				render: function (data, type, row, meta) {
					{return (data == "") ? "(Unavailable)" : `<a href="` + data + `'">YouTube</a>`;}
				}
			},
			{
				data: 'downloadJava',
				render: function (data, type, row, meta) {
					{return (data == "") ? "" : (row.javaVersion == "") ? `<a href="` + data + `'">Download</a>` : `<a href="` + data + `'">Download (` + row.javaVersion + `)</a>`;}
				}
			},
			{
				data: 'downloadBedrock',
				render: function (data, type, row, meta) {
					{return (data == "") ? "" : (row.bedrockVersion == "") ? `<a href="` + data + `'">Download</a>` : `<a href="` + data + `'">Download (` + row.bedrockVersion + `)</a>`;}
				}
			}
		]
	});
} )

