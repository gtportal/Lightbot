(function() {
  function LightBox(height, x, y) {
    this.lightOn = false;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  LightBox.prototype = new lightBot.Box();
  LightBox.prototype.constructor = LightBox;
  lightBot.LightBox = LightBox;
})();