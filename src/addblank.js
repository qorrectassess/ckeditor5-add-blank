import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class AddBlank extends Plugin {

	static get pluginName() {
		return 'AddBlank';
	}

	init() {

		const editor = this.editor;

		editor.model.schema.extend('$text', { allowAttributes: ['fillBlankId', 'style', 'blankCkEditor'] });

		editor.conversion.for('downcast').attributeToElement({
			model: 'fillBlankId',
			view: (attributeValue, writer) => {
				return writer.createAttributeElement('a', { target: attributeValue, style: 'background-color:#e5efff;', class: 'blankCkEditor' }, { priority: 5 });
			},
			converterPriority: 'high'
		});

		editor.conversion.for('upcast').attributeToAttribute({
			view: {
				name: 'a',
				key: 'target'
			},
			model: 'fillBlankId',
			converterPriority: 'high'
		},
			{

				view: {
					name: 'a',
					key: 'class'
				},
				model: 'fillBlankId',
				converterPriority: 'high'
			}
		);

	}
}
