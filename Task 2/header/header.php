<div class="language-dropdown">
    <?php
    $languages = icl_get_languages();
    if (!empty($languages)) {
        echo '<select id="languageToggle">';
        foreach ($languages as $language) {
            echo '<option value="' . $language['url'] . '">' . $language['native_name'] . '</option>';
        }
        echo '</select>';
    }
    ?>
</div>