var MessagesView = {

  $chats: $('#chats'),


  //TODO: add reference to data that you want from parse server (USE UNDERSCORE HERE) and set it equal to some variable. reference that variable as second argument in initialize...load.

  // data: Parse.readAll.data.text,

  initialize: function() {
    MessagesView.$chats.load(Parse.server, Parse.readAll);
  },

  render: function() {
  }

};