---
path: the-road-so-far
date: 2021-03-10T15:44:39.400Z
title: The Road So Far
description: Breakdown on where the project began and how's its progressed to
  it's current state
---
Welcome!



As the first devlog post to this site, I believe it's a great idea to begin with a synopsis of where we began and where we currently are in development.



Our original [](https://forums.tigsource.com/index.php?topic=69415.0)devlogs can be seen on [TigSource](https://forums.tigsource.com/index.php?topic=69415.0) and [FEUniverse](https://feuniverse.us/t/codename-mystery-babylon/11036) (and will likely continue to be updated in tandem with this main devlog).



The original game began as 32x32 sized game with much smaller sprites:



![Early Prototype Footage](https://i.imgur.com/ik0qlxN.gif "Early Prototype Footage")



Our grid system relied upon a third-party plugin for Unity called [Grids 2D](https://assetstore.unity.com/packages/tools/sprite-management/grids-2d-59981). While it was very good for rapid prototyping, it was rather overkill to support so many other grid types I would never use (such as isometric & hex grids). It comes with a rather decent A* implementation, as well.



However, our other programmer (Artemii on our [Team](https://mysterybabylon.io/team) page) rightfully decided we should do away with this party reliance for such a core mechanic and write our own implementation. So, we did!



We created a new grid system buillt upon Unity's built-in Grid component