var MessagesView = {

  $chats: $('#chats'),


  //TODO: add reference to data that you want from parse server (USE UNDERSCORE HERE) and set it equal to some variable. reference that variable as second argument in initialize...load.

  // data: Parse.readAll.data.text,

  initialize: function() {
    // MessagesView.$chats.load(Parse.server, Parse.readAll);

    Parse.readAll((data) => MessagesView.render(data));
  },

  render: function(data) {

    // console.log(data.index[0].text); //vanilla for loop, or .each();
    $.each(data.results, function(index, value) {
      //index is position of object in array (from 0 to 100)
      //value is the object itself which contains properties such as username, message, etc.
      MessagesView.$chats.append(MessageView.render({name: value.username, chatlog: value.text}));
      //currently this is going to send a username value and a text value to messageView.
      //Rely on messageView to modify that data into a nice html template package, and RETURN
      //THAT PACKAGE.
      //Next, as part of MessagesView.render, append the returned package to $chats.
    });
  }

};