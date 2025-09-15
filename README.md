# Search in maze

👋 Hello there!
Feel free to check out every single piece of this project.

## ✍️ Description

This is a project intended to implement in-graph-search algorithms to find a path in a given maze. Breadth-First search (BFS) and Deep-First search (DFS) are intended to be recreated by using relative data structures (Queue and List).

## 🛠️ Dependencies

This project, in essence, uses two main dependencies in order to properly serve content:

| Dependency | Version | Usage                                                                                         |
| ---------- | ------- | --------------------------------------------------------------------------------------------- |
| Node.js | `>=18` | Development enviroment. |
| Express    | `^5.1.0` | Create a server and make this project available to be hosted in a server with Node.js Support |
| Vite       | `^7.1.5` | Bundle all frontend-related files to allow express to serve public files.                     |
| dotenv | `^17.2.2` | Used to read `.env` file in root. <br> Just that.

## ⚙️ Workflow

In order to maintain an specific worflow, this repository is following a certain ruleset to be followed.

> [!NOTE]
> Following rules were created inspired from other repositories that have implemented the same workflow beforehead.

### Branching

All merges to `main` can only proceed from `development` branch after verifying that current changes are stable and ready for a production eviroment.

By the same way, all merges to `development` branch can only come from any `fix/...`, `hotfix/...` or `feature/...` branch.

Example:<br>
```
feature/server-configuration
````

### Contributing

In the context above, every feature or fix must be developed in a new branch with a clear and short description of it by using the form `type/desc` to name it.

`type` may be `fix`, `hotfix` or `feature`, and `desc` is a short description of the intended implementation. This new branch must be created from `development` branch

This kind of branches are denoted as "contribution branch".

> [!CAUTION]
> No merges to `main` from any _contribution branch_ or direct commits are allowed. <br>
> Only `development` branch can be merged to `main`

### Commiting

 In order to enhace contribution and errors tracking, it's important to write every commit with the form `[type]: [desc]`, where `[type]` may be `feat`, `fix` or any other one related to commited changes, and `[desc]` is only a short description of related changes.

 Example:
 
 ```
 git add .
 git commit -m "fix: list tile overflow hidden."
 git push
 ```