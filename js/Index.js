
console.log('hey hey hey')

$(function() {
  console.log( "ready!" );

//click a button and scroll to place on page features

  //contact button
  $('#contactButton').on('click', function() {
    console.log('clicked');
    //document.querySelector('.question').scrollIntoView( {behavior: "smooth"})
    window.scrollTo({top: 3350, behavior: 'smooth'})

  });

  //location/contact
  $('#locationSelector').on('click', function() {
    console.log('clicked location selector');
    //document.querySelector('.map').scrollIntoView( {behavior: "smooth"})
    window.scrollTo({top: 3350, behavior: 'smooth'})

  });

  //contact button
  $('#hoursSelector').on('click', function() {
    console.log('clicked');
    //document.querySelector('.hoursOfOperation').scrollIntoView( {behavior: "smooth"})
    window.scrollTo({top: 2760, behavior: 'smooth'})
  });

    //contact button
    $('#subscribeSelector').on('click', function() {
      console.log('clicked');
      //document.querySelector('.hoursOfOperation').scrollIntoView( {behavior: "smooth"})
      window.scrollTo({top: 6000, behavior: 'smooth'})
    });

//Top bar display

  $(document).on('scroll', function() {
    let y = $(this).scrollTop();
    if (y > 600) {
      $('.topBar').fadeIn();
    } else {
      $('.topBar').fadeOut();
    }
  })
});

