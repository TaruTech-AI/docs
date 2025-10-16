---
sidebar_position: 3
---

# Part 3: Resetting Game Episodes

**Resetting Your Environment**

To alter the environment at the start of each episode, add your method that handles resetting the environment (e.g. `EnvironmentReset()`) to [`Academy`](https://docs.unity3d.com/Packages/com.unity.ml-agents@4.0/manual/Learning-Environment-Design.html#academy)'s `OnEnvironmentReset` Action. You might want to reset an agent to its starting position or move a goal to a random position, for example:

```csharp
using Unity.MLAgents;
public class MySceneBehavior : MonoBehaviour {
    public void Awake() {
        Academy.Instance.OnEnvironmentReset +=
            EnvironmentReset; }

    void EnvironmentReset() {
        // Reset the scene here
        // Reset the Agent to its starting position
        // Move a goal to a random position } }
```

:::warning[NOTE:]
When you reset an environment, consider the factors that should change so that training is generalizable to different conditions. For example, if you were training a maze-solving agent, you would probably want to change the maze itself for each training episode. Otherwise, the agent would probably learn to solve one particular maze, not mazes in general.
:::









