$(document).ready(function () {

  $('#book-100-in-history').DataTable({
    'bPaginate': false, // Hide paginate
    "bLengthChange": false,
    "bInfo": false, // Hide entry text
    "bAutoWidth": false,
    "bFilter": false, // Hide search box
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }], // Hide sort icon on header of first column
    'aaSorting': [
      [3, 'asc']
    ], // Start to sort data in fourth column
  });

  $('#book-behind-the-scene').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [3, 'asc']
    ],
  });

  $('#book-big-ideas-simply-explained').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [3, 'asc']
    ],
  });

  $('#book-dk-essential-managers').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [3, 'asc']
    ],
  });

  $('#book-dk-life-stories').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [3, 'asc']
    ],
  });
  
});