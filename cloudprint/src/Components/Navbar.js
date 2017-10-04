var React = require('react');
var createReactClass = require('create-react-class');

// create classes
var Navbar = createReactClass({
    render: function() {
        return (
            <div>
                <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="Login">CRM</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="Login">Home</a></li>
      <li><a href="Login">About</a></li>
      <li><a href="Login">Guide</a></li>
      <li><a href="Login">Contact</a></li>
    </ul>
  </div>
</nav>
            </div>
        );
    }
});

module.exports = Navbar;