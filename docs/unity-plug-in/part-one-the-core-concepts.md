---
sidebar_position: 1
---

# Part 1: The Core Concepts

**How it Works**

Our system is built on four simple modules that work together on your AI-controlled object (AI Agent).

## 1. The Playtest Agent (script component):
This is the brain. It's the main component that connects to the Taru Tech AI server and acts as the central nervous system for your AI.

## 2. The Playtest Observer (script component):
These are the AI's senses. You build your AI's perception of the world by adding modular "Observation Sources" to a list. Want the AI to know its position? Add a Vector3Source. Want it to know the player's health? Add a FloatValueSource.   

## 3. The Player Input (if System Input is enabled) or Playtest Action Receiver (script component):
These are the AI's hands. When the AI decides to act, this component translates that decision into an action in your game. It uses standard Unity Events or Unity Input System, so you can easily hook up the AI's decisions to your existing game functions, like Player.Jump() or Enemy.FireWeapon().   

## 4. Gameplay Metrics Sender (script instance):
This sends a custom list of gameplay metrics to the trainer, which you can use to shape the AI's rewards and analyze its behavior on your Taru Tech dashboard.