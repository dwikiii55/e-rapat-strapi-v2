'use strict';

/**
 * presensi service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::presensi.presensi');
