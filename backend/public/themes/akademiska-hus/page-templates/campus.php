<?php /* Template Name: Campus */ ?>

<?php get_header(); ?>

<div class="row">
    <div class="col">
        <?php if (have_posts()) : ?>

            <?php while (have_posts()): the_post(); ?>

                <h1><?php the_title(); ?></h1>

                <?php the_content(); ?>

            <?php endwhile; ?>

        <?php endif; ?>
    </div><!-- /col -->
</div><!-- /row -->

<?php $schools = get_posts(['post_type' => 'campus']); ?>

<?php if (count($schools)): ?>
    <div class="row">
        <div class="col">
            <h2 class="h5">Campus</h2>
            <ul>
                <?php foreach ($schools as $school): ?>
                    <li>
                      <a href="<?php the_permalink($school); ?>"><?php echo $school->post_title; ?></a>
                      <?php var_dump($school); ?>
                    </li>
                    <img src="<?php echo $school->Bild; ?>"></img>
                <?php endforeach; ?>
            </ul>
        </div><!-- /col -->
    </div><!-- /row -->
<?php endif; ?>

<?php get_footer(); ?>
