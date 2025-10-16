---
sidebar_position: 1
---

# Game Metrics

Gameplay metrics are aggregated data summarizing how players and AI agents perform across game sessions or levels. They help predict key player experience indicators such as pass rate (difficulty) and churn rate (engagement).
- Metrics include averages or percentiles of success rates, moves left, or goals achieved.
- Metrics help define target play styles (e.g., attack frequency, item usage), allowing agents to emulate specific player types or population behaviors.

The selected metrics are designed to be:
- Summarizable: They can be aggregated over an entire level (e.g., counts, averages, ratios).
- Discriminatory: They help differentiate between distinct player strategies (e.g., an aggressive player vs. a defensive/economic player).
- Actionable: They provide clear, understandable feedback for game designers (e.g., "players who favor a specific game feature are struggling on this level").
- Relative: Many metrics are framed as ratios or per-time-unit values to normalize for game length and make them comparable across different levels.


Below are some example metrics for a sample tower defense game called "Arena Masters":

## Gameplay Metrics for "Arena Masters"

### Category 1: Unit & Combat Strategy
(These metrics define the player's tactical approach to combat)

| Metric Name                  | Description & Rationale                    | Unit    |
| :--------------------------- | :----------------------------------------- | :------ |
| unit_spawn_basic             | Basic unit type spawned                    | Count   |
| unit_spawn_advanced          | Advanced unit type spawned                 | Count   |
| unit_spawn_special           | Special unit type spawned                  | Count   |
| total_currency_spent         | Total in-game currency spent               | Count   |
| spawn_rate_per_engagement    | Total units deployed per engagement phase. Measures overall aggression and army build-up speed. | Units/engagement |

### Category 2: Economic Strategy
(These metrics capture the player's investment in long-term growth vs. immediate power)

| Metric Name                  | Description & Rationale                    | Unit    |
| :--------------------------- | :----------------------------------------- | :------ |
| average_unspent_currency     | The average currency balance held by the player during an engagement phase. High values may indicate saving for expensive units or indecisiveness. | Currency |
| level_end_currency_balance   | Amount of currency the player has when the level ends. Measures resource management vs. expenditure behavior. | Currency |

### Category 3: Combat Performance & Efficiency
(These metrics measure how effectively the player is executing their chosen strategy)

| Metric Name                      | Description & Rationale                                                                      | Unit |
| :------------------------------- | :------------------------------------------------------------------------------------------- | :--- |
| player_fortress_damage_taken_per_engagement | Total health lost by the player's fortress in an engagement phase. Measures defensive effectiveness. | HP   |
| enemy_fortress_damage_dealt_per_engagement  | Total health lost by the opponent's fortress in an engagement phase. Measures offensive pressure.    | HP   |
| unit_elimination_ratio           | (Total Enemy Units Eliminated) / (Total Player Units Lost).                                  | Ratio |
| currency_return_on_investment    | (Currency Gained from Eliminations) / (Currency Cost of Lost Units). Measures the return on investment for deployed units. | Currency/Currency |
| level_outcome_status             | The final outcome of the level.                                                              | Win / Loss / Draw |

### Category 4: Meta-Progression & Monetization Engagement
(These metrics track long-term goals and interaction with optional content)

| Metric Name                         | Description & Rationale                                                                        | Unit  |
| :---------------------------------- | :--------------------------------------------------------------------------------------------- | :---- |
| initial_bonus_resource_watch        | If the player watched the initial advertisement for free bonus resources.                      | Count |
| reward_multiplier_engagement        | Number of times the player engaged with an advertisement to double end-of-level rewards.       | Count |
| power_up_usage                      | Total number of premium power-ups (e.g., Might, Agility, Protection) used per level.          | Count |
| supply_drop_engagement              | Number of times the player engaged with a supply drop advertisement for free bonus resources. | Count |
