define([
        'chai',
        '../../../src/models/hello'
    ], function (chai, hello) {
        var expect = chai.expect;

        describe('#Hello', function () {
            it('should return Hello World', function () {
                expect(hello()).to.equal('Hello World');
            });

            it('should return 4', function () {
                expect(2+2).to.equal(4);
            });
        });
    });