'use strict';

describe('Custom Page App test', function() {
  var scope;
  var ctrl;

  beforeEach(module('seed'));

  describe('AppCtrl', function() {
    beforeEach(inject(function($injector){
      scope = $injector.get('$rootScope');
      ctrl  = $injector.get('$controller')('AppCtrl', {
        $scope: scope
      });
    }));

    it('should have greetings', function() {
      expect(scope.greetings).toEqual('Hello Seed');
    });

  });
});
