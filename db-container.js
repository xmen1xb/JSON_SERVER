var bannerParent = require("./banner-parent.json");
var childrenProfiles = require("./children-profile.json");
var nearestSchedule = require("./nearest-schedule.json");
var classHistory = require("./class-history.json");
var login = require("./login.json");
var findById = require("./find-by-user-account-id.json");
var afterDscReportType = require("./after-dsc-report-type.json");
var customerNoti = require("./customer-notification.json");
var notificationAndReportType = require("./notification-and-report-type.json");
var reaction = require("./reaction.json");
var childrenPurchase = require("./children-purchase.json");
var currentLearningState = require("./current-learning-state.json");
var timeTable = require("./time-table.json");
var commonOptions = require("./parent/account-management/sale-common-options.json");
var studentProfile = require("./parent/account-management/student-profile.json");
var totalUpdatingTimes = require("./parent/account-management/total-updating-times.json");
var notificationList = require("./parent/notifications/notification-list.json");
var notificationClick = require("./parent/notifications/notification-click.json");
var notificationView = require("./parent/notifications/notification-view.json");
var packageType = require("./parent/package/package-type.json");
var packages = require("./parent/package/packages.json");
var onboardingState = require("./onboarding/onboarding-state.json");
var suggested = require("./teachers/suggest.json");
var quantity = require("./teachers/quantity.json");
var studentStatistics = require("./student-statistics.json");
var dscSessionGroups = require("./teachers/dsc-session-groups.json");
var sessionLearningCoach = require("./teachers/session-learning-coach.json");
var listAssignedSessionGroup = require("./teachers/list-assigned-get-session-group.json");
var dlgDetailReports = require("./parent/dlg-report/dlg-detail-report.json");
var saqpStudentStatistics = require("./parent/dlg-report/sagp-student-statistics.json");
const { studentApi } = require("./student");
const { teachers } = require("./teachers");
const parent = require("./parent");
const demo = require("./demo");
module.exports = function () {
  return {
    ...bannerParent,
    ...childrenProfiles,
    ...nearestSchedule,
    ...classHistory,
    ...login,
    ...studentProfile,
    ...findById,
    ...afterDscReportType,
    ...customerNoti,
    ...notificationAndReportType,
    ...reaction,
    ...childrenPurchase,
    ...currentLearningState,
    ...timeTable,
    ...commonOptions,
    ...totalUpdatingTimes,
    ...notificationList,
    ...packageType,
    ...packages,
    ...notificationClick,
    ...notificationView,
    ...onboardingState,
    ...suggested,
    ...quantity,
    ...studentStatistics,
    ...dscSessionGroups,
    ...sessionLearningCoach,
    ...listAssignedSessionGroup,
    ...dlgDetailReports,
    ...saqpStudentStatistics,
    ...studentApi,
    ...teachers,
    ...demo,
    ...parent,
  };
};
