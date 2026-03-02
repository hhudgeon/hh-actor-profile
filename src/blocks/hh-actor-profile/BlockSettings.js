import React from "react";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	SelectControl,
	ColorPalette,
	ToggleControl,
} from "@wordpress/components";

export default function BlockSettings({ attributes, setAttributes }) {
	return (
		<InspectorControls>
			<PanelBody title="Actor Card Settings" initialOpen={true}>

				{/* Layout option via classname */}
				<PanelRow>
					<SelectControl
						label="Layout"
						value={attributes.layoutClass}
						onChange={(layoutClass) => setAttributes({ layoutClass })}
						options={[
							{ value: "", label: "Default (Image Top)" },
							{ value: "actor-card--layout-left", label: "Image Left" },
						]}
					/>
				</PanelRow>

				{/* Border color */}
				<PanelRow>
					Border Color
				</PanelRow>
				<PanelRow>
					<ColorPalette
						colors={[
							{ name: "Wine", color: "#722f37" },
							{ name: "Blue", color: "#1e40af" },
							{ name: "Black", color: "#111827" },
						]}
						value={attributes.borderColor}
						onChange={(borderColor) => setAttributes({ borderColor })}
						disableCustomColors
					/>
				</PanelRow>

				{/* Show / Hide toggles */}
				<PanelRow>
					<ToggleControl
						label="Show Skills"
						checked={ !!attributes.showSkills }
						onChange={ ( value ) => setAttributes( { showSkills: !!value } ) }
					/>
				</PanelRow>

				<PanelRow>
					<ToggleControl
						label="Show Availability"
						checked={ !!attributes.showAvailability }
						onChange={ ( value ) => setAttributes( { showAvailability: !!value } ) }
					/>
				</PanelRow>

			</PanelBody>
		</InspectorControls>
	);
}
