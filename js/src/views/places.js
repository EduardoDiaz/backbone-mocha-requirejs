define([
        'backbone',
        'Handlebars',
        'text!templates/placesTemplate.html'
    ], function (Backbone, Handlebars, placesTemplate) {
        'use strict';

        var PlacesView = Backbone.View.extend({
            id: function () {
                return this.model.id;
            },

            tagName: 'article',

            className: 'elemList',

            template: Handlebars.compile(placesTemplate),

            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

        return PlacesView;
    });