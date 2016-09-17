<?php
// $Id: template.php,v 1.10.4.3 2010/12/14 03:30:39 danprobo Exp $
function danland_page_class($sidebar_first, $sidebar_second) {
	if ($sidebar_first && $sidebar_second) {
		$id = 'layout-type-2';	
	}
	else if ($sidebar_first || $sidebar_second) {
		$id = 'layout-type-1';
	}

	if(isset($id)) {
		print ' id="'. $id .'"';
	}
}

function danland_preprocess_html(&$vars) {
  // Add conditional CSS for IE6.
drupal_add_css(path_to_theme() . '/style.ie6.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'IE 6', '!IE' => FALSE), 'preprocess' => FALSE));
}

function danland_preprocess_maintenance_page(&$variables) {
  if (!$variables['db_is_active']) {
    unset($variables['site_name']);
  }
  drupal_add_css(drupal_get_path('theme', 'danland') . '/maintenance.css');
  drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/jquery.cycle.all.js');
}

if (drupal_is_front_page()) {
  drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/jquery.cycle.all.js');
  drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/jquery.min.js');
  drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/map-config.js');
  drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/pin-config.js');
  drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/map-interact.js');
}

if(current_path() == "node/244"){
  drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/jquery.min.js');
  drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/agentslist/map-config.js');
  drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/agentslist/pin-config.js');
  drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/map-interact.js');
}

if(current_path() == "node/143"){
	drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/jquery.min.js');
	drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/IndependentTitleCompanies/map-config.js');
	drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/IndependentTitleCompanies/pin-config.js');
	drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/map-interact.js');
}

if(current_path() == "node/245"){
	drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/jquery.min.js');
	drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/BuyerAgentsWhoDiscount/map-config.js');
	drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/BuyerAgentsWhoDiscount/pin-config.js');
	drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/map-interact.js');
}

if(current_path() == "node/287"){
	drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/jquery.min.js');
	drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/seller-brokers-who-discount/map-config.js');
	drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/seller-brokers-who-discount/pin-config.js');
	drupal_add_js(drupal_get_path('theme', 'danland') . '/scripts/map-interact.js');
}


