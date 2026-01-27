<?php
function kevin_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'kevin_theme_setup');

function kevin_theme_assets() {
    wp_enqueue_style('kevin-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'kevin_theme_assets');

function kevin_darkmode_script() {
    ?>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const btn = document.getElementById("darkToggle");
            btn.addEventListener("click", () => {
                document.body.classList.toggle("dark");
                localStorage.setItem(
                    "darkMode",
                    document.body.classList.contains("dark")
                );
            });

            if (localStorage.getItem("darkMode") === "true") {
                document.body.classList.add("dark");
            }
        });
    </script>
    <?php
}
add_action('wp_footer', 'kevin_darkmode_script');
