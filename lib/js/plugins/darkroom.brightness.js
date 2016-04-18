(function () {
  'use strict';

    var Brightness = Darkroom.Transformation.extend({
    brightness: 0,
    applyTransformation: function (canvas, image, next) {
      console.log(this.options.diff);
      this.brightness += this.options.diff;
      var filter = new fabric.Image.filters.Brightness({ brightness: this.brightness });
      image.filters.push(filter);
      image.applyFilters(canvas.renderAll.bind(canvas));
      next();
    }
  });

  Darkroom.plugins['brightness'] = Darkroom.Plugin.extend({

    initialize: function InitDarkroomBrightnessPlugin() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      var lessButton = buttonGroup.createButton({
        image: 'less-brightness',
        tooltip: 'Darken'
      });

      var moreButton = buttonGroup.createButton({
        image: 'more-brightness',
        tooltip: 'Brighten'
      });

      lessButton.addEventListener('click', this.lessBrightness.bind(this));
      moreButton.addEventListener('click', this.moreBrightness.bind(this));
    },

    lessBrightness: function lessBrightness() {
      this.brightness(-10);
    },

    moreBrightness: function moreBrightness() {
      this.brightness(10);
    },

    brightness: function brightness(value) {
      this.darkroom.applyTransformation(
        new Brightness({diff: value})
      );
    }

  });

})();
