module.exports = {
  routes: [
    {
      method: "GET",
      path: "/rapats/public",
      handler: "rapat.getPublicRapat",
    },
    {
      method: "GET",
      path: "/rapats/public/:slug",
      handler: "rapat.getRapatByURL",
    },
    {
      method: "GET",
      path: "/rapats/upcoming",
      handler: "rapat.getUpcomingRapats",
    },
    {
      method: "GET",
      path: "/rapats/upcomingv2",
      handler: "rapat.getUpcomingRapatsV2",
    },

    {
      method: "GET",
      path: "/rapats/count",
      handler: "rapat.getCountRapat",
    },
    {
      method: "GET",
      path: "/rapats/rekap-presensi/:slug",
      handler: "rapat.getRekapPresensi",
    },
  ],
};
