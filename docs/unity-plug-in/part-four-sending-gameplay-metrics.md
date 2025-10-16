---
sidebar_position: 4
---

# Part 4: Sending Gameplay Metrics

**Collect Gameplay Metrics**

Before you call the `endEpisode` event, send collected gameplay metrics from this episode to the AI server.

From any script in your code you can call `PlaytestMetricsManager.Instance.SendMetric()`. `SendMetric` function receives a list of values for metrics in string format.

For example:

```csharp
string sideChannelMsg = $"{episodeDuration}," +
$"{totalShotsOnGoal},{totalShotsAttempted},{avgShotDistance}," +
$"{totalSavesMade},{totalSuccessfulTackles},{totalInterceptions},{timeInOwnHalfPercentage}"
+ $"{totalDistanceTraveled}," +
$"{episode.purpleTeamMetrics.possessionPercentage},{episode.purpleTeamMetrics.ballInOpponentHalfPercentage}";

if (PlaytestMetricsManager.Instance != null) {
    PlaytestMetricsManager.Instance.SendMetric(sideChannelMsg); }
```
