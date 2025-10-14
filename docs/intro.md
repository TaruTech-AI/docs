---
sidebar_position: 1
---

# Overview


**Taru Tech AI Playtest: From Zero to AI Player in Minutes**

Similar to humans that need to observe the game and interact with the game using provided interaction mechanisms, to enable your game to be playable for AI, game engines need to send observations to AI and receive input from the AI side. 

That's what the Taru Tech AI Playtest SDK is all about. We provide a suite of powerful, intuitive components that sit on top of Unity ML-Agents, letting you focus on your game's logic, not on the complexities of the framework….

![Process diagram](./Diagram_AI_process.png)

In this guide, we'll walk you through the entire process: setting up your project, turning a regular GameObject into a thinking AI (AI Agent), and connecting it to our cloud platform for training and playtesting. Let's get started.

**Part 1: The Core Concepts \- How it Works**

Our system is built on four simple modules that work together on your AI-controlled object (AI Agent).

1. The Playtest Agent (script component): This is the brain. It's the main component that connects to the Taru Tech AI server and acts as the central nervous system for your AI.

2. The Playtest Observer (script component): These are the AI's senses. You build your AI's perception of the world by adding modular "Observation Sources" to a list. Want the AI to know its position? Add a Vector3Source. Want it to know the player's health? Add a FloatValueSource.   
     
3. The Player Input (if System Input is enabled) or Playtest Action Receiver (script component): These are the AI's hands. When the AI decides to act, this component translates that decision into an action in your game. It uses standard Unity Events or Unity Input System, so you can easily hook up the AI's decisions to your existing game functions, like Player.Jump() or Enemy.FireWeapon().   
     
4. Gameplay Metrics Sender (script instance): This sends a custom list of gameplay metrics to the trainer, which you can use to shape the AI's rewards and analyze its behavior on your Taru Tech dashboard.










Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 20.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.


## New section 1

A new section which should appear in the submenu

## New section 2, same as above

But this seccion will have a subsection 3

### This is the subsection 3

Content of subsection 3
## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
