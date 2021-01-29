$(() => {
  // Insert a new css class
  $(
    "<style type='text/css'> .highlight{ background-color: yellow; color: black; font-weight: bold;} </style>"
  ).appendTo('head');

  // Get p as a cache variable
  $p = $('p');

  // Get all words of p
  $words = $p.html().trim().split(' ');

  // Clean <p>
  $p.html(' ');

  // Insert all words again but surrounded by some cool spans
  for (const word of $words) {
    if (word.length > 0) {
      $p.append(`<span>${word.trim()}</span> `);
    }
  }

  // Add eventlistener on click to every word (selected by span)
  $p.children('span').each((index, word) => {
    $(word).on('click', function (event) {
      event.preventDefault();

      //$(this).toggleClass('highlight'); // Change status of the class. Is not required but it would be cooler...
      $(this).addClass('highlight'); // Just add the class :(
    });
  });
});
