<?php
declare(strict_types=1);

$fields = [
  acf_text([
    'label' => 'Byggnad',
    'name' => 'byggnad',
    'required' => true,
    'placeholder' => '',
    'instructions' => 'Byggnadsbeteckning (ex. JSP2)'
  ]),
  acf_text([
    'label' => 'Bild',
    'name' => 'bild',
    'required' => true,
    'placeholder' => '',
    'instructions' => 'Bild på campus'
  ]),
  acf_text([
    'label' => 'Karta',
    'name' => 'karta',
    'required' => true,
    'placeholder' => '',
    'instructions' => ''
  ]),
  acf_text([
    'label' => 'Salar',
    'name' => 'salar',
    'required' => true,
    'instructions' => 'Sal'
  ]),
  acf_text([
    'label' => 'Våningar',
    'name' => 'vaningar',
    'required' => false,
    'instructions' => 'Våning på byggnaden'
  ]),
];

$location = [
  [
    acf_location('post_type', 'campus')
  ]
];

acf_field_group([
  'title' => 'Lägg till campus',
  'fields' => $fields,
  'style' => 'seamless',
  'location' => $location
]);
