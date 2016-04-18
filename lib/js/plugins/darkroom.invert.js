(function() {
    'use strict';

    Darkroom.plugins['invert'] = Darkroom.Plugin.extend({
        
        initialize: function InitDarkroomInvertPlugin() {
            var buttonGroup = this.darkroom.toolbar.createButtonGroup();

            this.invertButton = buttonGroup.createButton({
                image: 'invert',
                tooltip: 'Invert'
            });

            this.invertButton.addEventListener('click', function(e) {
                dkrm.image.filters.push(new fabric.Image.filters.Invert());
                dkrm.image.applyFilters(dkrm.canvas.renderAll.bind(dkrm.canvas));
            });
        },
    });

})();