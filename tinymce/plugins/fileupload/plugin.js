/**
 * FileUpload - a TinyMCE image upload plugin
 * fileupload/plugin.js
 *
 * Author: Marius Gebhardt
 *
 * Version: 0.1
 */

tinymce.PluginManager.add('fileupload', function(editor, url) {
	
	function showDialog() {
		editor.windowManager.open({
			title: 'Upload an image',
			url: url + '/dialog.htm',
			width: 350,
			height: 135,
			buttons: [{
				text: 'Close',
				onclick: 'close'
			}]
		});
	}
	
	// Add a button that opens a window
	editor.addButton('fileupload', {
		tooltip: 'Upload an image',
		icon: 'image',
		onclick: showDialog
	});

	// Adds a menu item to the tools menu
	editor.addMenuItem('fileupload', {
		text: 'Upload image',
		icon : 'image',
		context: 'insert',
		onclick: showDialog
	});
});
