---
sidebar_position: 2
---

# Game Observations

Observations are real-time inputs the AI agent receives while playing, forming the foundation for its decision-making.
- Visual inputs capture the game’s visual state (e.g., screenshots of the board or environment).
- Vector inputs provide numerical data like remaining moves or goals.
- Goal or style inputs guide agents toward specific play-styles or objectives.
These observations are processed to train agents that simulate gameplay. The resulting simulated sessions generate the metrics used for prediction and analysis.

Below are some example observations for a sample tower defense game called "Arena Masters":

## State Space (Vector Observations) for "Arena Masters"

### Player Resources

| Observation Name         | Type    | # of Values | Description                                                 |
| :----------------------- | :------ | :---------- | :---------------------------------------------------------- |
| Player Collected Gems    | Float   | 1           | Number of collected in-game currency.                       |
| Player Shards            | Integer | 1           | Total premium currency.                                     |
| Player Power Tokens      | Integer | 1           | Total power tokens for in-battle abilities.                 |

### Global Modifiers

| Observation Name           | Type    | # of Values | Description                                                 |
| :------------------------- | :------ | :---------- | :---------------------------------------------------------- |
| Global Damage Multiplier   | Float   | 1           | The global damage multiplier (e.g., 1.17x).                 |
| Global Defense Multiplier  | Float   | 1           | The global defense multiplier (e.g., 1.11x).                |

### Permanent Upgrades

| Observation Name         | Type    | # of Values | Description                                                 |
| :----------------------- | :------ | :---------- | :---------------------------------------------------------- |
| Resource Generation Rate | Float   | 1           | The current rate of primary resource generation (e.g., 0.54). |
| Fortress Health Max      | Float   | 1           | The current maximum health of the player's fortress (e.g., 21). |
| Current Era Level        | Integer | 1           | The current era of the player (e.g., 1 for Ancient Era).    |

### Unit-Specific Information
(Repeated for a fixed number of potential unit slots, e.g., 5)

| Observation Name    | Type    | # of Values | Description                       |
| :------------------ | :------ | :---------- | :-------------------------------- |
| Unit Defense Stat   | Float   | 1 per Unit  | The base defense of the unit.     |
| Unit Offensive Stat | Float   | 1 per Unit  | The base offensive power of the unit. |
| Enemy Unit Defense Stat | Float | 1 per Unit  | The base defense of the enemy unit. |
| Enemy Unit Offensive Stat | Float | 1 per Unit | The base offensive power of the enemy unit. |

### Core Battle State

| Observation Name             | Type    | # of Values | Description                                                 |
| :--------------------------- | :------ | :---------- | :---------------------------------------------------------- |
| Player Resources             | Float   | 1           | Current amount of resources for deploying units.            |
| Player Fortress Health %     | Float   | 1           | Normalized health of the player's fortress (0.0 to 1.0).    |
| Enemy Fortress Health %      | Float   | 1           | Normalized health of the enemy's fortress (0.0 to 1.0).     |
| Current Engagement Number    | Integer | 1           | The current engagement phase (1, 2, 3, etc.). Can use a special value for "Final Engagement". |

### Deployable Unit Information
(Repeated for each of the 3 available unit slots)

| Observation Name | Type    | # of Values | Description                                         |
| :--------------- | :------ | :---------- | :-------------------------------------------------- |
| Unit Deploy Cost | Integer | 1 per Unit  | The resource cost for this unit (e.g., 3, 5, 7). |

### Special Abilities & Power-ups

| Observation Name             | Type      | # of Values | Description                                                 |
| :--------------------------- | :-------- | :---------- | :---------------------------------------------------------- |
| Ability Is Ready             | Boolean   | 1 per Ability | 1 if the special ability (e.g., Shield, Rush, Strike) is off cooldown. |
| Power Tokens Available       | Integer   | 1           | Current count of power tokens. A player knows if they can afford an ability. |
| Is Free Resource Ad Available | Boolean   | 1           | 1 if the button to watch an ad for resources is active.     |
| Is Bonus Crate Present       | Boolean   | 1           | 1 if the falling bonus crate is currently on screen.        |
| Bonus Crate Position (X, Y) | Float     | 2           | The normalized screen coordinates of the bonus crate if it's present. |

### Representing Units on the Battlefield
(Abstract the battlefield into a set of numbers)

| Observation Name           | Type    | # of Values | Description                                                 |
| :------------------------- | :------ | :---------- | :---------------------------------------------------------- |
| Player Unit Type Count     | Integer | 1 per Unit  | The number of this type of player unit currently on the field. |
| Enemy Unit Type Count      | Integer | 1 per Unit  | The number of this type of enemy unit currently on the field. |
| Player Units Eliminated    | Integer | 1 per Unit  | Accumulative number of player's units eliminated in combat. |
| Enemy Units Eliminated     | Integer | 1 per Unit  | Accumulative number of enemy's units eliminated in combat.  |
| Player Unit in Sector      | Integer | 1 per Zone  | Divide distance between enemy and player fortresses to 5 sectors. |
| Enemy Unit in Sector       | Integer | 1 per Zone  | Divide distance between enemy and player fortresses to 5 sectors. |
| Average Player Unit Health % | Float   | 1 per Unit  | The average health percentage of all player units of this type. |
| Average Enemy Unit Health %  | Float   | 1 per Unit  | The average health percentage of all enemy units of this type. |

## Action Space for "Arena Masters"

| Action Index | Action Name                   | Description                                                 |
| :----------- | :---------------------------- | :---------------------------------------------------------- |
| 0            | No Operation (NOOP)           | The agent chooses to do nothing, saving resources for a later push. |
| 1            | Deploy Vanguard Unit          | Spends 3 resources to deploy a Vanguard unit.               |
| 2            | Deploy Skirmisher Unit        | Spends 5 resources to deploy a Skirmisher unit.             |
| 3            | Deploy Heavy Cavalry Unit     | Spends 7 resources to deploy a Heavy Cavalry unit.          |
| 4            | Activate Defensive Ability    | Activates the defensive/healing ability.                    |
| 5            | Activate Offensive Ability    | Activates the rage/damage ability.                          |
| 6            | Activate Area-Effect Ability  | Activates the meteor/area damage ability.                   |
| 7            | Interact with Bonus Crate     | If a bonus crate is on screen, the agent will try to click it. |
| 8            | Watch Ad for Free Resources   | Clicks the button to get a resource boost.                  |

