var Messages = {
  $text: $('#message'),
  $roomname: $('#rooms'),
  $username: window.location.search.substr(10),

  post: function() {
    var messagePackage = {
      username: Messages.$username,
      text: Messages.$text.val(),
      roomname: Messages.$roomname.val()
    };
    Parse.create(messagePackage);
  }
};

$('form').on('submit', Messages.post);