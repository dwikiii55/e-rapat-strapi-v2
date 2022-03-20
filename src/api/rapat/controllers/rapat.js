"use strict";

/**
 *  rapat controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::rapat.rapat", ({ strapi }) => ({
  async getPublicRapat(ctx, next) {
    const entries = await strapi.db.query("api::rapat.rapat").findMany({
      select: ["id", "nama", "slug_rapat", ""],
      orderBy: { jadwal_rapat: "DESC" },
    });

    ctx.body = entries;
  },

  async getRapatByURL(ctx, next) {
    const { slug } = ctx.params;

    const entry = await strapi.db.query("api::rapat.rapat").findOne({
      select: ["id", "nama", "slug_rapat", "jadwal_rapat"],
      where: { slug_rapat: slug },
    });

    if (!entry) {
      return ctx.notFound("data tidak ditemukan", {
        pesan: "opps, data tidak ditemukan...yarn ",
      });
    }

    ctx.body = entry;
  },

  async getUpcomingRapats(ctx, next) {
    const now = new Date().toISOString();
    const entries = await strapi.db.query("api::rapat.rapat").findMany({
      select: ["id", "nama", "slug_rapat", "jadwal_rapat", "unit"],
      orderBy: { jadwal_rapat: "ASC" },
      where: {
        jadwal_rapat: {
          $gte: now,
        },
      },
    });

    ctx.body = entries;
  },

  async getUpcomingRapatsV2(ctx, next) {
    const now = new Date().toISOString();

    const [entries, count] = await strapi.db
      .query("api::rapat.rapat")
      .findWithCount({
        select: ["id", "nama", "slug_rapat", "jadwal_rapat"],
        orderBy: { jadwal_rapat: "ASC" },
        where: {
          jadwal_rapat: {
            $gte: now,
          },
        },
      });

    ctx.body = {
      data: entries,
      count: count,
    };
  },

  async getRekapPresensi(ctx, next) {
    const { slug } = ctx.params;

    const entry = await strapi.db.query("api::rapat.rapat").findOne({
      select: ["id", "nama", "slug_rapat", "jadwal_rapat", "unit"],
      where: { slug_rapat: slug },
      populate: ["presenses"],
    });

    if (!entry) {
      return ctx.notFound("data tidak ditemukan", {
        pesan: "opps, data tidak ditemukan...yarn ",
      });
    }

    ctx.body = entry;
  },

  async getCountRapat(ctx, next) {
    return strapi.entityService.count("api::rapat.rapat");
  },
}));
