define([
        'backbone',
        'src/models/places'
    ], function (Backbone, PlacesModel) {
        'use strict';

        var PlacesCollection = Backbone.Collection.extend({
            model: PlacesModel
        });

        return PlacesCollection;
    });