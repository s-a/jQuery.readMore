mocha.setup('bdd');
 
function assert(expr, msg) {
  if (!expr) throw new Error(msg || 'failed');
} 
 
describe('jQuery.readMore tests', function(){

  describe('#size', function(){
    it('should not have overflowed containers', function(){
      $('.test__box').each(function (i,n) {
        var _overflowed = $.isOverflowed(n);
        assert( !_overflowed  );
      });
    });
  });

});
 