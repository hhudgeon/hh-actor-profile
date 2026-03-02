/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

	const { actorName, skills, availability, imageURL } = attributes;

	return (
		<section { ...useBlockProps.save() }>
			<div className="actor-header">
				<div className="actor-photo">
					<img
						src={ imageURL }
						alt="Actor headshot"
					/>
				</div>

				<p className="actor-name">{ actorName }</p>
			</div>

			<div className="actor-skills">
				{skills &&
					skills.split(',').map((skill, index) => (
						<span key={index} className="actor-skill-pill">
        {skill.trim()}
      </span>
					))
				}
			</div>

			<div className="actor-availability">{ availability }</div>
		</section>
	);
}
