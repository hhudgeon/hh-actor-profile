/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	PlainText,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';

/**
 * UI components.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import { RadioControl, Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 */
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { actorName, skills, availability, imageURL } = attributes;

	return (
		<section { ...useBlockProps() }>
			<div className="actor-header">
				<div className="actor-photo">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => {
								// Store ONLY the URL (matches what your teacher emphasized)
								setAttributes( { imageURL: media.url } );
							} }
							allowedTypes={ [ 'image' ] }
							render={ ( { open } ) => (
								<>
									<img
										src={ imageURL }
										alt="Actor headshot"
										onClick={ open }
										style={ { cursor: 'pointer' } }
									/>
									<div style={ { marginTop: '0.5rem' } }>
										<Button variant="secondary" onClick={ open }>
											Choose Image
										</Button>
									</div>
								</>
							) }
						/>
					</MediaUploadCheck>
				</div>

				<PlainText
					className="actor-name"
					placeholder="Actor Name"
					value={ actorName }
					onChange={ ( value ) => setAttributes( { actorName: value } ) }
				/>
			</div>

			<div className="actor-skills">
				<PlainText
					className="actor-skills-input"
					placeholder="Skills (comma separated)"
					value={ skills }
					onChange={ ( value ) => setAttributes( { skills: value } ) }
				/>
			</div>

			<div className="actor-availability">
				<RadioControl
					label="Availability"
					selected={ availability }
					options={ [
						{ value: 'Available', label: 'Available' },
						{ value: 'Limited Availability', label: 'Limited Availability' },
						{ value: 'Unavailable', label: 'Unavailable' },
					] }
					onChange={ ( value ) => setAttributes( { availability: value } ) }
				/>
			</div>
		</section>
	);
}
