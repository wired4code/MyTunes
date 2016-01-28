// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();

    this.listenTo(this.collection,'add remove', this.render);

    //this.listenTo(this.collection,'remove', this.render);

  },

  render: function() {
    //return this.$el;
    console.log('trying to render');
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    )
  }

});
