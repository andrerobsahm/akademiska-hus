<?php
declare(strict_types=1);
add_action('init', function () {
    register_post_type('currently', [
        'has_archive' => true,
        'labels' => [
          'add_new_item' => __('Lägg till en nyhet'),
          'edit_item' => __('Ändra en nyhet'),
          'name' => __('Aktuellt'),
          'search_items' => __('Sök nyhet'),
          'singular_name' => __('nyhet'),
        ],
        'menu_icon' => 'dashicons-megaphone',
        'menu_position' => 20,
        'public' => true,
        'show_in_rest' => true,
    ]);
});
