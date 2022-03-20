"use strict";

/**
 *  presensi controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::presensi.presensi",
  ({ strapi }) => ({
    async getPresensiBySlugRapat(ctx, next) {
      const { slug } = ctx.params;

      const entries = await strapi.db.query("api::presensi.presensi").findMany({
        where: { slug_rapat: slug },
      });

      const entry = await strapi.db.query("api::rapat.rapat").findOne({
        select: ["id", "nama", "slug_rapat", "jadwal_rapat", "unit"],
        where: { slug_rapat: slug },
      });

      if (!entry) {
        return ctx.notFound("data tidak ditemukan", {
          pesan: "opps, data tidak ditemukan... ",
        });
      }

      ctx.body = {
        rapat: entry,
        presensi: entries,
      };
    },
  })
);
