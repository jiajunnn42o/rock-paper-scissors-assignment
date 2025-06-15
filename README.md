This is the final version of the project.  
See GitHub [Releases](https://github.com/jiajunnn42o/rock-paper-scissors-assignment) for previous iterations: `v1.0`, `v1.1`, `v2.0`, `v3.0-preview`, `v3.0`.

# Rock Paper Scissors - Doraemon Theme

A browser-based Rock Paper Scissors game with Doraemon-themed design, sound effects and animations.

---

## Branching and Merging Strategy

To manage the development process effectively, we adopted a **feature-based branching strategy**:

- **Branches**  
  Each iteration was developed in its own branch (`iteration-1`, `iteration-2`, `iteration-3`) to keep the `main` branch clean and production-ready.

- **Merging**  
  After completing and testing the features of each iteration, we merged the corresponding branch into the `main` branch to ensure all work was integrated smoothly.

- **Tagging**  
  We used semantic version tags (e.g., `v1.0`, `v1.1`, `v2.0`, `v3.0-preview`, `v3.0`) to mark key milestones. This allowed us to track progress clearly and roll back if necessary.

> This structured approach helped maintain a stable codebase while allowing us to develop and test features incrementally during each phase of the project.

---

## Iteration Breakdown

### Iteration 1 - Basic Rock Paper Scissors Game

- User selects Rock, Paper or Scissors
- Computer randomly selects a move
- Game determines and displays the result (Win, lose or draw)
- Text-based output only (no images or animations)

### Iteration 2 – Score System Added 

- Score tracking for both players:
  - You +1 point when you win
  - Doraemon +1 point when you lose
- Scores shown in styled box next to title
- Game result displayed in two centered lines
- Layout refined for cleaner visual balance

### Iteration 3 - Result Animation & Sound Control

- Added visual result display with player and Doraemon hands
- Added Doraemon laughing / angry reactions for win/lose
- Animated pop-in hand icons
- Title replaced with animated GIF logo
- Background music toggle + sound effects
- Layout refined to simulate 2-page view (selection → result)

## Features

-  Doraemon-styled animated buttons
-  Background music with mute/unmute toggle
-  Randomized computer choice
-  Player vs Doraemon scoring system
-  Result screen with win/lose/draw reactions
-  Animated title and visual transitions
-  Responsive layout with CSS

---

##  How to Play

1. Choose rock, paper or scissors by clicking the button
2. Doraemon will choose randomly
3. See the result, score and animated reaction
4. Click **Try Again** to restart the round

---

## Tech Stack

- HTML / CSS / JavaScript
- Animated PNG assets
- Audio playback control (BGM)

---

## Version

| Version | Description                |
|---------|----------------------------|
| v1.0    | Basic game with logic only |
| v2.0    | Scoreboard + UI enhanced   |
| v3.0    | Full theme, audio, images  |

> The `main` branch reflects the final game version → **v3.0**

---

## How to Run Locally

1. Go to the repo  
2. Click green `Code` button → `Download ZIP`  
3. Extract the files  
4. Open `index.html` in your browser  
5. Optional: Open with VS Code if you want to explore the code

---

## Conclusion

Through an iterative development process, the Rock Paper Scissors game evolved from a basic prototype into a fully functional, interactive and visually appealing web application. From basic game logic to animated user interface components, scoring mechanisms and Doraemon-themed aesthetics, each iteration delivered meaningful improvements.

The final version provides a seamless user experience through background music, sound effects, animated transitions, and thematic responses that make the game both fun and unique. This project not only improved our front-end development skills, but also emphasized the value of structured development, version control, and creative design in web applications.

---

## Kanban Board Workflow

We used a Trello Kanban board to manage the development of this Rock Paper Scissors project. It was divided into five columns: `Backlog`, `To Do`, `In Progress`, `Testing`, and `Done`.

### Usage
- At the beginning, we added all tasks into the `Backlog` column, based on features we planned.
- During development, we moved tasks into `To Do` or `In Progress` depending on team assignment and current iteration focus.
- Features that were implemented were moved to `Testing`, then to `Done` once they passed testing.

### Effectiveness
By categorizing our work into `Backlog`, `To Do`, `In Progress`, `Testing` and `Done` columns, we are able to easily track what work needs to be started, what is currently under development, and what has been completed.

The visual nature of Kanban makes team collaboration much smoother as everyone can see what tasks are assigned to whom. It also encourages accountability within the group, as members can take on tasks independently without confusion or overlap.

Additionally, having a centralized Kanban board helps to plan ahead for iterations. We were able to pre-assign upcoming tasks, reprioritize as needed, and focus on completing one feature at a time without losing sight of the overall development process.

### Challenges
One of the main challenges we faced was task dependency - some tasks could not be started until others were completed. For example, we couldn't finalize the results screen animation until we confirmed the basic layout and button styles for the game. This occasionally created bottlenecks where certain team members had to wait before they could continue working.

Another challenge was time management. Sometimes we underestimated how long certain tasks (such as sound integration or image alignment) would take, which required us to realign projects between the “To Do” and “In Progress” columns.

In addition, we encountered some minor issues with Trello itself. For example, Trello sometimes restricts editing old cards or changing due dates, especially when cards are moved quickly between columns. This required us to find workarounds, such as copying cards or leaving comments, rather than changing dates directly.

Link to Kanban board: https://trello.com/b/VFgywmJo/rps-taskmanagement