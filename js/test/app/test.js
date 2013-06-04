/*jshint expr: true*/
define([
        'chai',
        'sinon',
        'src/models/hello',
        'src/models/places'
    ], function (chai, sinon, hello, PlacesModel) {
        'use strict';

        var expect = chai.expect;

        describe('#Hello', function () {
            it('should return Hello World', function () {
                expect(hello()).to.equal('Hello World');
            });
        });

        describe('models.places', function () {
            it('exist', function () {
                var places = new PlacesModel();

                expect(places).to.be.ok;
            });

            it('sets passed attributes', function () {
                var places = new PlacesModel({
                    name: 'Faro Colon',
                    lat : 40,
                    lng : 90,
                    country: 'Republica Dominicana'
                });

                expect(places.get('country')).equal('Republica Dominicana');
                expect(places.get('name')).equal('Faro Colon');
                expect(places.get('lat')).to.be.a('number');
            });
        });
    });