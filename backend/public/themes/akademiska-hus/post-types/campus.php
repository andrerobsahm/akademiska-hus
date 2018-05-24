<?php
declare(strict_types=1);
add_action('init', function () {
    register_post_type('campus', [
        'has_archive' => true,
        'labels' => [
          'add_new_item' => __('Lägg till campus'),
          'edit_item' => __('Ändra ett campus'),
          'name' => __('Campus'),
          'search_items' => __('Sök campus'),
          'singular_name' => __('campus'),
        ],
        'menu_icon' => 'dashicons-admin-multisite',
        'menu_position' => 20,
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
    ]);
});
