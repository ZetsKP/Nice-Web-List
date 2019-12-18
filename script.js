/* ----------------------------- All JavaScript ----------------------------- */

$(document).ready(function () {

  //---------- jQuery Flip Js

  $("#card1").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card2").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card3").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card4").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card5").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card6").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  //---------- Slick JS

  $('.slick-js').slick({
    dots: true,
    arrows: false,
    draggable: true
  });

  $('.slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{
        breakpoint: 995,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 771,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 531,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

  //---------- Sweet Alert Js

  $(".alert-show").click(function () {
    Swal.fire({
      // icon: 'info',
      title: 'Hello my friend!',
      text: 'To get examples of works, you can contact me 😊👌',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: "Okay",
    })
  })

  $(".alert-show-2a").click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚙️ Front-End Dev.',
      text: '𝐇𝐓𝐌𝐋𝟓 & 𝐂𝐒𝐒𝟑 for describing and styling the structure of web pages.',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: "Okay",
    })
  })

  $(".alert-show-2b").click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚙️ Front-End Dev.',
      text: '𝐁𝐄𝐌, 𝐒𝐀𝐒𝐒, 𝐁𝐨𝐨𝐭𝐬𝐭𝐫𝐚𝐩 for CSS architecture, preprocessors and frameworks.',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: "Okay",
    })
  })

  $(".alert-show-2c").click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚙️ Front-End Dev.',
      text: '𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭 for web interaction with users. 𝐣𝐐𝐮𝐞𝐫𝐲 & 𝐕𝐮𝐞.𝐣𝐬 for main javascript library and frameworks.',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: "Okay",
    })
  })

  $(".alert-show-2d").click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚙️ Front-End Dev.',
      text: '𝐑𝐞𝐬𝐩𝐨𝐧𝐬𝐢𝐯𝐞 𝐖𝐞𝐛𝐬𝐢𝐭𝐞 for provide optimal viewing on variety devices (mobile, tablet, desktop)',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: "Okay",
    })
  })

  $(".alert-show-3a").click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚔️ Tools',
      text: '𝐓𝐚𝐬𝐤𝐚𝐝𝐞 for task management. 𝐖𝐡𝐢𝐦𝐬𝐢𝐜𝐚𝐥 for collaborative flowcharts, wireframes, sticky notes and mind maps.',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: "Okay",
    })
  })

  $(".alert-show-3b").click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚔️ Tools',
      text: '𝐅𝐈𝐆𝐌𝐀 & 𝐀𝐝𝐨𝐛𝐞 𝐗𝐃 for vector-based design tools plus prototyping (visual design, UX, UI, illustration, logo, etc.)',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: "Okay",
    })
  })

  $(".alert-show-3c").click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚔️ Tools',
      text: '𝐀𝐝𝐨𝐛𝐞 𝐏𝐡𝐨𝐭𝐨𝐬𝐡𝐨𝐩, 𝐈𝐥𝐥𝐮𝐬𝐭𝐫𝐚𝐭𝐨𝐫 & 𝐆𝐫𝐚𝐯𝐢𝐭 𝐃𝐞𝐬𝐢𝐠𝐧𝐞𝐫 as an alternative tool for vector-based design and image manipulation.',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: "Okay",
    })
  })

  $(".alert-show-3d").click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚔️ Tools',
      text: '𝐕𝐢𝐬𝐮𝐚𝐥 𝐒𝐭𝐮𝐝𝐢𝐨 𝐂𝐨𝐝𝐞 for a lightweight and reliable text editor for programming purposes.',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: "Okay",
    })
  })

  //---------- Web Animation & Hummber & Muuri Js

  var grid = null,
    wrapper = document.querySelector('.grid-wrapper'),
    searchField = wrapper.querySelector('.search-field'),
    filterField = wrapper.querySelector('.filter-field'),
    sortField = wrapper.querySelector('.sort-field'),
    gridElem = wrapper.querySelector('.grid'),
    searchAttr = 'data-title',
    filterAttr = 'data-color',
    searchFieldValue,
    filterFieldValue,
    sortFieldValue,
    dragOrder = [];

  // Init the grid layout
  grid = new Muuri(gridElem, {
    dragEnabled: true
  });

  // Set inital search query, active filter, active sort value and active layout.
  searchFieldValue = searchField.value.toLowerCase();
  filterFieldValue = filterField.value;
  sortFieldValue = sortField.value;

  // Search field event binding
  searchField.addEventListener('keyup', function () {
    var newSearch = searchField.value.toLowerCase();
    if (searchFieldValue !== newSearch) {
      searchFieldValue = newSearch;
      filter();
    }
  });

  // Filter field event binding
  filterField.addEventListener('change', filter);

  // Sort field event binding
  sortField.addEventListener('change', sort);

  // Filtering
  function filter() {
    filterFieldValue = filterField.value;
    grid.filter(function (item) {
      var element = item.getElement(),
        isSearchMatch = !searchFieldValue ? true : (element.getAttribute(searchAttr) || '').toLowerCase().indexOf(searchFieldValue) > -1,
        isFilterMatch = !filterFieldValue ? true : (element.getAttribute(filterAttr) || '') === filterFieldValue;
      return isSearchMatch && isFilterMatch;
    });
  }

  // Sorting
  function sort() {
    // Do nothing if sort value did not change.
    var currentSort = sortField.value;
    if (sortFieldValue === currentSort) {
      return;
    }

    // If we are changing from "order" sorting to something else
    // let's store the drag order.
    if (sortFieldValue === 'order') {
      dragOrder = grid.getItems();
    }

    // Sort the items.
    grid.sort(
      currentSort === 'title' ? compareItemTitle :
      currentSort === 'color' ? compareItemColor :
      dragOrder
    );
    sortFieldValue = currentSort;
  }

  // Compare data-title
  function compareItemTitle(a, b) {
    var aVal = a.getElement().getAttribute(searchAttr) || '';
    var bVal = b.getElement().getAttribute(searchAttr) || '';
    return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;

  }

  // Compare data-color
  function compareItemColor(a, b) {
    var aVal = a.getElement().getAttribute(filterAttr) || '';
    var bVal = b.getElement().getAttribute(filterAttr) || '';
    return aVal < bVal ? -1 : aVal > bVal ? 1 : compareItemTitle(a, b);
  }

  //---------- Muuri Js for Imag Dragger

  var grid = new Muuri({
    container: document.getElementsByClassName('grid')[0],
    items: [].slice.call(document.getElementsByClassName('item')),
    dragEnabled: true
  });

  // Prevent native image drag for images inside items.
  var images = document.querySelectorAll('.item img');
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('dragstart', function (e) {
      e.preventDefault();
    }, false);
  }

  // Refresh item dimensions and do layout after all images have loaded.
  window.addEventListener('load', function () {
    grid.refresh();
    grid.layout();
  });

});