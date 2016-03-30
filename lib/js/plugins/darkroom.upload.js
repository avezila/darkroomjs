(function() {
    'use strict';

    Darkroom.plugins['upload'] = Darkroom.Plugin.extend({
        
        initialize: function InitDarkroomUploadPlugin() {
            var buttonGroup = this.darkroom.toolbar.createButtonGroup();

            var uploadButton = buttonGroup.createButton({
                image: 'upload',
                tooltip: 'Upload'
            });

            uploadButton.addEventListener('click', this.upload.bind(this));

            if (!document.getElementById('darkroomFile')) {
                var field = document.createElement('input');
                field.type = 'file';
                field.name = 'darkroomFile';
                field.id = 'darkroomFile';
                field.style.opacity = 0;
                field.style.position = 'absolute';
                field.style.left = '-6000px';
                field.style.float = 'left';
                field.addEventListener('change', this.loadImage, false);
                document.body.appendChild(field);
            }
        },
        
        loadImage: function(e) {
            var reader = new FileReader();
            reader.onload = function(event) {
                var img = new Image();
                img.onload = function() {
                    dkrm.containerElement.parentNode.innerHTML = '<img id="target" src="" />';
                    document.getElementById('target').src = this.src;
                    imgEditor.init('#target');
                };
                img.src = event.target.result;      
            };
            reader.readAsDataURL(e.target.files[0]);
        },

        upload: function upload() {
            var el = document.getElementById('darkroomFile');
            if (el) {
                var evt;
                if (document.createEvent) {
                    evt = document.createEvent('MouseEvents');
                    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                }
                (evt) ? el.dispatchEvent(evt) : (el.click && el.click());
            }
        }

    });

})();
