


// uploading photo
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#photoplayer')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}





/*

$('position').tagsinput({
    itemValue: 'text',
    itemText: 'text',
    typeahead: {
        source: function (query) {
            return $.getJSON('positions.json');
        }
    }
});


$('position').tagsinput('add', { "value": 1, "text": "PO" });
$('position').tagsinput('add', { "value": 2, "text": "DFD" });
$('position').tagsinput('add', { "value": 3, "text": "DFC" });
$('position').tagsinput('add', { "value": 4, "text": "DFI" });
$('position').tagsinput('add', { "value": 5, "text": "MCD" });
$('position').tagsinput('add', { "value": 6, "text": "MC" });
$('position').tagsinput('add', { "value": 7, "text": "MD" });
$('position').tagsinput('add', { "value": 8, "text": "MI" });
$('position').tagsinput('add', { "value": 9, "text": "MO" });
$('position').tagsinput('add', { "value": 10, "text": "EXD" });
$('position').tagsinput('add', { "value": 11, "text": "EXI" });
$('position').tagsinput('add', { "value": 12, "text": "SD" });
$('position').tagsinput('add', { "value": 13, "text": "DC" });
*/