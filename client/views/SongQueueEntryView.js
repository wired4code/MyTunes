// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.add();
      this.model.render(); //this didn't work to have queued songs appear on dom
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
