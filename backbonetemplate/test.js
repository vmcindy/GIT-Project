$.support.cors = true;
constants = {
  DATA_CONTENT_TYPE: 'application/json',
  HTTP_GET_METHOD: 'GET'
}

var PersonView = Backbone.View.extend({
  el: '#personInfoTarget',
  template: _.template($('#personTemplate').html()),
  initialize: function(options) {
    var self = this;
    self.options = options;
    self.options.model.fetch({
      contentType: constants.DATA_CONTENT_TYPE,
      type: constants.HTTP_GET_METHOD,
      success: function(model, response) {
      	self.options.model.set({
          persons: response,
        }, {
          silent: true
        });
        console.log('Data is here', response);
        self.render();
      },
      error: function(model, response) {
        console.log("error");
      }
    });
    return this;
  },
  render: function() {
  	console.log('the data',this.options.model.toJSON())
  	if(this.options.model) 
    	this.$el.html(this.template(this.options.model.toJSON()));
    return this;
  }
});

var personDataModel = Backbone.Model.extend({
  url: 'http://localhost:3000/person',
  defaults: {
    personIndex: 0
  }
});

var personDataModelObj = new personDataModel();

$(document).ready(function() {
  new PersonView({
    model: personDataModelObj
  });
});