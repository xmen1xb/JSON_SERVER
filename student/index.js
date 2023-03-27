const assignedMissions = require("./assignedMissions");
const checkMission = require("./checkMission");
const dailyScheduledClass = require("./daily-scheduled-class");
const dailyScheduledTestprepClass = require("./dailyScheduledTestprepClass");
const info = require("./info");
const joinGetClass = require("./join-get-class.json");
const receiveRewards = require("./receiveRewards");
const studentApi = {
  "daily-scheduled-class": dailyScheduledClass,
  ...joinGetClass,
  info: info,
  "daily-scheduled-testprep-class": dailyScheduledTestprepClass,
  "check-mission-state": checkMission,
  "assigned-missions": assignedMissions,
  "receive-rewards": receiveRewards,
};
module.exports = { studentApi };
