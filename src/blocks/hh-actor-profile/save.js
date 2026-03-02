/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

// Using the reusable card component so the front-end matches the editor layout
import ActorCard from '../../components/ActorCard/ActorCard';

/**
 * This turns the block's data (name, skills, etc)
 * into the actual HTML that WordPress saves
 * and shows on the front end.
 *
 * edit() = how it works in the editor
 * save() = what gets stored + displayed
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	const { actorName, skills, availability, imageURL } = attributes;

	// Tiny fallback so the image doesn't break if someone never picks one
	const finalImageURL = imageURL ? imageURL : 'https://placehold.co/150';

	const imageSlot = (
		<div className="actor-photo">
			<img src={ finalImageURL } alt="Actor headshot" />
		</div>
	);

	const nameSlot = <p className="actor-name">{ actorName }</p>;

	const skillsSlot = (
		<div className="actor-skills">
			{ skills &&
				skills.split( ',' ).map( ( skill, index ) => (
					<span key={ index } className="actor-skill-pill">
						{ skill.trim() }
					</span>
				) ) }
		</div>
	);

	const availabilitySlot = (
		<div className="actor-availability">{ availability }</div>
	);

	return (
		<section { ...useBlockProps.save() }>
			<ActorCard
				image={ imageSlot }
				name={ nameSlot }
				skills={ skillsSlot }
				availability={ availabilitySlot }
			/>
		</section>
	);
}
