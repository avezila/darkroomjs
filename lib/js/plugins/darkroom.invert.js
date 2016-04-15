(function() {
    'use strict';

    Darkroom.plugins['invert'] = Darkroom.Plugin.extend({
        
        invert: function() {
            var filter = new fabric.Image.filters.Invert();
            dkrm.sourceImage.filters.push(filter);
            dkrm.sourceImage.applyFilters(dkrm.sourceCanvas.renderAll.bind(dkrm.sourceCanvas));    
        },
        
        initialize: function InitializeDarkroomInvertPlugin() {
            var buttonGroup = this.darkroom.toolbar.createButtonGroup();

            this.invertButton = buttonGroup.createButton({
                image: 'invert',
                tooltip: 'Invert'
            });

            this.invertButton.addEventListener('click', this.invert());
        }
    });

})();