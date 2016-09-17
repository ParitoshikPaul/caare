<?php

/**
 * @file
 * Provides the HappyCaptcha administration settings.
 */

/**
 * Form callback; administrative settings for HappyCaptcha.
 */
function happycaptcha_admin_settings() {

  $form = array();

  $form['happycaptcha_css_location'] = array(
    '#type' => 'textfield',
    '#default_value' => variable_get('happycaptcha_css_location', 'http://happycaptcha.com/css/happycaptcha.css'),
    '#title' => t('CSS location'),
    '#required' => TRUE,
  );

  $form['happycaptcha_challenge_fg'] = array(
    '#field_prefix' => '#',
    '#type' => 'textfield',
    '#default_value' => variable_get('happycaptcha_challenge_fg', 'FEFEFE'),
    '#title' => t('Challenge text color HEX value, FEFEFE for example'),
    '#required' => TRUE,
    '#element_validate' => array('happycaptcha_color_validate'),
  );
  $form['happycaptcha_challenge_bg'] = array(
    '#field_prefix' => '#',
    '#type' => 'textfield',
    '#default_value' => variable_get('happycaptcha_challenge_bg', 'B36347'),
    '#title' => t('Challenge text background color HEX value, B36347 for example'),
    '#required' => TRUE,
    '#element_validate' => array('happycaptcha_color_validate'),
  );
  $form['happycaptcha_timeout'] = array(
    '#type' => 'textfield',
    '#default_value' => variable_get('happycaptcha_timeout', '5'),
    '#title' => t('Service Timeout'),
    '#required' => TRUE,
    '#element_validate' => array('happycaptcha_timeout_validate'),
  );
  return system_settings_form($form);
}

/**
 * Check timeout value.
 */
function happycaptcha_timeout_validate($element, &$form_state, $form) {
  if (intval($element['#value']) < 1) {
    form_error($element, t('Bad timeout value'));
  }
}

/**
 * Check color value.
 */
function happycaptcha_color_validate($element, &$form_state, $form) {
  if (!preg_match('/^[a-f0-9]{6}$/i', $element['#value'])) {
    form_error($element, t('Bad color value'));
  }
}
