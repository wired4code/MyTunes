// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      //this.model.play(); this needs to be someething else
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
