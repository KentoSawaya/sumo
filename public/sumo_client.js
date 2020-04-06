phina.globalize();

var SCREEN_X = 800;
var SCREEN_Y = 600;
var scale = 1;
var P_size = 48 * scale;

var ASSETS = {
  image: {
    'wrestler': './images/wrestler.png',
  },
};

phina.define('MainScene', {
  superClass: 'DisplayScene',

  init: function(option) {
    this.superInit(option);
    var wrestler = Sprite('wrestler')
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())
      .setScale(scale);
    this.backgroundColor = 'black';
  },
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
    width: SCREEN_X,
    height: SCREEN_Y,
    assets: ASSETS,
  });

  app.run();
});