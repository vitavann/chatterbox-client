var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%=name%></div>
        <div class="chatlog"><%=chatlog%></div>
        <div></div>
      </div>
    `)
};

//executed by MessageView.render(name)