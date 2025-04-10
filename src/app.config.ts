export default defineAppConfig({
  pages: [
    'pages/splash/splash',
    "pages/index/index",
    "pages/job-detail/job-detail",
    "pages/proposal/proposal",
    "pages/profile/profile",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#108EE9",
    navigationBarTitleText: "Jobs Portal",
    navigationBarTextStyle: "white",
  },
  tabBar: {
    color: "#999999",
    selectedColor: "#108EE9",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "Jobs",
        iconPath: "assets/icons/job.png",
        selectedIconPath: "assets/icons/job-active.png"
      },
      {
        pagePath: "pages/profile/profile",
        text: "Profile",
        iconPath: "assets/icons/user.png",
        selectedIconPath: "assets/icons/user-active.png"
      }
    ]
  }
});
