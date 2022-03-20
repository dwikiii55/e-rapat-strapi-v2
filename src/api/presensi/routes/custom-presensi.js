module.exports = {
  routes: [
    {
      method: "GET",
      path: "/presensis/rekap/:slug",
      handler: "presensi.getPresensiBySlugRapat",
    },
  ],
};
