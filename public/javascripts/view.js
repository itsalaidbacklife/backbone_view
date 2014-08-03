(function($) {
	console.log('attached');
	var ListView = Backbone.View.extend({
	  el: $('body'), //el ataches to body

	  events: {
	  'click button#add': 'addItem'
	  },

	  intitialize: function() {
	  	_.bindAll(this, 'render', 'addItem'); // allows render method to refer to the rendered ListView as this
	  	console.log('initializing');
	  	this.counter = 0; //total # of items
	  	this.str='blarg';
	  	this.render();
	  },

	  render: function() {
	  	console.log('rendering');
	  	$(this.el).append("<button id='add'>Add List Item</button>");
	  	$(this.el).append("<ul></ul>");
	  },

	  addItem: function() {
	  this.counter++;
	  $('ul', this.el).append("<li>hello world"+this.counter+"<li>");
	}
});

console.log('before new var');
var listView = new ListView();
console.log('after new var');
console.log(listView.str);
})(jQuery);