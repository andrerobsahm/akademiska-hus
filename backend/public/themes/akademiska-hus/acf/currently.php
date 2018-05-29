<?php

declare(strict_types=1);

$fields = [
  acf_true_false([
    'label' => 'Finished',
    'name' => 'finished',
    'instructions' => '',
    'required' => true,
    'default' => false,
  ]),
  acf_file([
    'label' => 'Image',
    'name' => 'image',
    'instructions' => '',
    'required' => true,
  ]),
  acf_text([
    'label' => 'Description',
    'name' => 'description',
    'instructions' => '',
    'required' => true,
  ]),
];

$location = [
  [
    acf_location('post_type', 'currently')
  ]
];

acf_field_group([
  'title' => 'Currently titel functions.php',
  'fields' => $fields,
  'style' => 'seamless',
  'location' => $location
]);
