---
sidebar_position: 6
---

# Glossary

**Relevant Terms and Taxonomy**

- **Academy:** The Academy is a singleton which orchestrates Agents and their decision making processes. Only a single Academy exists at a time.

- **Agent:** An agent is an entity that can observe its environment, decide on the best course of action using those observations, and execute those actions within its environment.

- **Episode:** Episode is a sequence of states, and actions from a starting point to a terminal state. The episode ends when an agent either successfully completes its objective or fails irrevocably. For instance, in a scenario where an agent needs to reach a goal, the episode concludes when the agent touches the goal (success) or hits a wall (failure). To signify the end of an episode in these cases, the `EndEpisode()` function is called.

- **Gameplay metric:** Gameplay metrics are quantifiable data about user behavior and game-system interactions, collected during gameplay to help developers improve a game's design, performance, and monetization.

- **Vector observation:** The vector observation is a vector of floating point numbers which contain relevant information for the agent to make decisions.

- **Visual observation:** visual observations are images collected by an agent's sensors, such as cameras or render textures. These observations are converted into a 3D tensor, which is then fed into a convolutional neural network (CNN) to enable the agent to learn from spatial patterns in the images. This method of observation is particularly useful when it is difficult to describe the agent's state numerically (using Vector observation).