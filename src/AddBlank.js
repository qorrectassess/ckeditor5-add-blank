import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AddBlankEditing from './mediaarialabelediting';

export default class AddBlank extends Plugin {

	static get requires() {
		return [ AddBlankEditing];
    }
    
	static get pluginName() {
		return 'addBlank';
	}
}
