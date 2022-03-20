'use strict';

/**
 * app-const service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-const.app-const');
