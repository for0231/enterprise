<?php

namespace Drupal\ip_plus\Entity;

use Drupal\views\EntityViewsData;

/**
 * Provides Views data for IP.
 */
class IPViewsData extends EntityViewsData {

  /**
   * {@inheritdoc}
   */
  public function getViewsData() {
    $data = parent::getViewsData();

    // Additional information for Views integration, such as table joins, can be
    // put here.

    return $data;
  }

}
