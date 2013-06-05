/*jshint expr: true*/
define([
        'chai',
        'sinon-chai',
        'sinon',
        'jquery',
        'src/models/hello',
        'src/models/places',
        'src/collections/places',
        'src/views/places'
    ], function (chai, sinonChai, sinon, $, hello, PlacesModel, PlacesCollection, PlacesView) {
        'use strict';

        chai.use(sinonChai);
        var expect = chai.expect;

        describe('#Hello', function () {
            it('should return Hello World', function () {
                expect(hello()).to.equal('Hello World');
            });
        });

        describe('views.places', function () {
            before(function () {
                this.view = new PlacesView({
                    model: new PlacesModel({
                        id : '1',
                        name: 'Faro Colon',
                        description: 'Este es un lugar bonito',
                        point: {
                            lat: '10',
                            lng: '30'
                        },
                        image: 'bonito.jpg'
                    })
                });
            });

            after(function () {
                this.view.remove();
            });

            describe('DOM', function () {
                it('render data to HTML', function () {
                    var $item = this.view.render().$el;

                    expect($item.attr('id')).to.equal(this.view.model.id);
                    expect($item.find('figure').attr('data-lat')).to.equal('10');
                    expect($item.find('.name').text()).to.equal('Faro Colon');
                });
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

        describe('collection.places', function () {
            beforeEach(function () {
                this.server = sinon.fakeServer.create();
                this.server.autoRespond = true;
                this.places = new PlacesCollection();
            });

            afterEach(function () {
                this.server.restore();
            });

            describe('creation', function () {
                it('has values default', function () {
                    expect(this.places).to.be.ok;
                    expect(this.places).to.have.length(0);
                });

                it('should be empty on fetch', function (done) {
                    var places = this.places;

                    this.server.respondWith('GET', '/places', [
                        200,
                        {'Content-Type': 'application/json'},
                        '[]'
                    ]);

                    expect(places).to.be.ok;
                    expect(places).to.have.length(0);

                    places.once('reset', function () {
                        expect(places).to.have.length(0);
                        done();
                    });

                    places.fetch({reset: true});
                });

                it('has a single place', function (done) {
                    var places = this.places, place;

                    this.server.respondWith('GET', '/places', [
                        200,
                        {'Content-Type': 'application/json'},
                        JSON.stringify([{
                            id  : 1,
                            name: 'Faro Colon',
                            description: 'Este es un lugar bonito',
                            country: 'Republica Dominicana',
                            point: {
                                lat: 10,
                                lng: 30
                            }
                        }])
                    ]);

                    places.once('reset', function () {
                        expect(places).to.have.length(1);

                        place = places.at(0);
                        expect(place).to.be.ok;
                        expect(place.get('name')).to.contain('Faro');
                        expect(place.get('point').lat).to.equal(10);

                        done();
                    });

                    places.fetch({ reset: true });
                });
            });
        });
    });