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

// Bringing in the reusable card layout
import ActorCard from '../../components/ActorCard/ActorCard';

import BlockSettings from './BlockSettings';

export default function Edit( { attributes, setAttributes } ) {
	const { actorName, skills, availability, imageURL } = attributes;

	// Image slot (no extra card/layout wrappers in here)
	const imageSlot = (
		<div className="actor-photo">
			<MediaUploadCheck>
				<MediaUpload
					onSelect={ ( media ) => {
						// Store ONLY the URL (this was super emphasized)
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
	);

	// Name slot (this belongs in the ActorCard name area)
	const nameSlot = (
		<PlainText
			className="actor-name"
			placeholder="Actor Name"
			value={ actorName }
			onChange={ ( value ) => setAttributes( { actorName: value } ) }
		/>
	);

	// Skills slot (just the input, no wrapper div)
	const skillsSlot = (
		<PlainText
			className="actor-skills-input"
			placeholder="Skills (comma separated)"
			value={ skills }
			onChange={ ( value ) => setAttributes( { skills: value } ) }
		/>
	);

	// Availability slot (just the control, no wrapper div)
	const availabilitySlot = (
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
	);

	return (
		<section { ...useBlockProps() }>
			<BlockSettings attributes={ attributes } setAttributes={ setAttributes } />
			<ActorCard
				image={ imageSlot }
				name={ nameSlot }
				skills={ skillsSlot }
				availability={ availabilitySlot }
			/>
		</section>
	);
}
