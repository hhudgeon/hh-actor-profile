<?php
// This file is generated. Do not modify it manually.
return array(
	'hh-actor-profile' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hh/hh-actor-profile',
		'version' => '0.1.0',
		'title' => 'Actor Profile Card',
		'category' => 'design',
		'icon' => 'id',
		'description' => 'Display an actor profile with headshot, bio, and key details.',
		'keywords' => array(
			'stagesharehub'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'hh-actor-profile',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'actorName' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => '.actor-name'
			),
			'skills' => array(
				'type' => 'string',
				'default' => ''
			),
			'availability' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => '.actor-availability'
			),
			'imageURL' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.actor-photo img',
				'attribute' => 'src'
			),
			'layoutClass' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => '#722f37'
			),
			'showSkills' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showAvailability' => array(
				'type' => 'boolean',
				'default' => true
			)
		)
	)
);
