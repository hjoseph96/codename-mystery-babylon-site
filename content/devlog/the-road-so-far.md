---
path: the-road-so-far
date: 2021-03-10T15:44:39.400Z
title: "The Road So Far: 2D Tactical RPG Setup for Unity"
description: Breakdown on where the project began and how's its progressed to
  it's current state.
---
Welcome!

As the first devlog post to this site, I believe it's a great idea to begin with a synopsis of where we began and where we currently are in development.

Our original [](https://forums.tigsource.com/index.php?topic=69415.0)devlogs can be seen on [TigSource](https://forums.tigsource.com/index.php?topic=69415.0) and [FEUniverse](https://feuniverse.us/t/codename-mystery-babylon/11036) (and will likely continue to be updated in tandem with this main devlog).

The original game began as 32x32 sized game with much smaller sprites:

![Early Prototype Footage](https://i.imgur.com/ik0qlxN.gif "Early Prototype Footage")

Our grid system relied upon a third-party plugin for Unity called [Grids 2D](https://assetstore.unity.com/packages/tools/sprite-management/grids-2d-59981). While it was very good for rapid prototyping, it was rather overkill to support so many other grid types I would never use (such as isometric & hex grids). It comes with a rather decent A* implementation, as well.

However, our other programmer (Artemii on our [Team](https://mysterybabylon.io/team) page) rightfully decided we should do away with this party reliance for such a core mechanic and write our own implementation. So, we did!

We created a new grid system built upon Unity's built-in Grid component. This worked out very well, and was much clearer to both of us programmers now that the code was not abstracted away inside of a 3rd party asset in another folder -- but lived inside our own `Scripts/` folder.

Before our switch, I was using 2D Box Colliders with tags attached (ie: Land Obstacle, Air Obstacle) to set grid cells as passable or not. Not the optimal solution, but worked for rapid prototyping.

Our current solution is very similar to what is mentioned in this [article](https://medium.com/@allencoded/unity-tilemaps-and-storing-individual-tile-data-8b95d87e9f32). We create `TileConfigurations` that store relevant information about certain tiles. Here is an example of the data stored:

```
{

  "Filename": "GrassTile",
  "TerrainName": "Grass",
  "SurfaceType": "Grass",
  "TravelCost": {
    "All": 1,
    "Ground": 1,
    "Mounted": 1
  },
  "HasLightOfSight": true,
  "IsStairs": false,
  "StairsOrientation": "None",
  "BlockExit": {},
  "BlockEntrance": {}
}
```

But, how do we relate this data to specific tiles on our map? Well, we use [Tiled Map Editor](https://www.mapeditor.org/) for our level designs and [TMX Importer](https://assetstore.unity.com/packages/tools/sprite-management/tiled-tmx-importer-102928) to parse them into native Unity Tilemap layers. Tiled uses `.tmx` files to store a map's data and stores tileset data within `.tsx` files, which are related to the `.tmx` file.

Tiled support Custom Properties to be set on tiles within a tileset. This look like this:

![Tiled Custom Properties](https://feuniverse.us/uploads/default/original/3X/8/a/8a8a5ca03cadc7dd056ac642eab55bb42a657409.png "Tiled Custom Properties")

By setting a `Config` custom property that reference's a `TileConfiguration`'s `Filename`, we can assign the correct tile data to specific tiles. Within the `TMX Importer` plugin lives a `TSXImporter.cs` which imports tilesets from a map. Within this code, we added logic to parse each tile in a tileset for a `Config` custom property and assign it the relevant `TileConfiguration` when imported into Unity.

The result is a map that already has collision, line of sight, and what audio to play when the tile is traversed (based on `SurfaceType`). 

Not to mention, we added a heightmap feature which is central to combat gameplay. It's a rather simple system that works similarly to what I just described. There's a heightmap tileset with numbers (currently ranging from 1-30) and we create a Heightmap tile layer within Tiled to paint these numbers over the map. As you can see in the screenshot above of Tiled, each tile has an `int ID` within a `.tsx` tileset. Our heightmap tileset's IDs perfectly correspond to the number in the tileset, so the number 1 is also ID 1, and so on.

This makes it easy to parse the heightmap tile layer upon import (and via inspector button press, if changed from within Unity) and assign each tile a height number. This ties in directly to line of sight, as the LOS range increases when a Unit is higher up. Also, a Unit cannot "see" any tile that is greater than 2 of it's current tile height. So if I'm standing on a tile who's height is 1, I cannot see any tile that is \`3\` or greater.

These height rules are subject to change.

That about wraps up our Grid System. We moved from 32x32 to 16x16 at the same time we switched grid systems. The original tiles used in the 32x32 prototype were upscaled, and I wanted to preserve their original quality:

![Stair Shader](https://i.imgur.com/36nKil5.png "Highlight Shader")

Excuse the placeholder Suikoden rips at the time :)

Another great improvement we did was moving our highlight system into a shader which renders on a Canvas. We wanted to do away with square shaped highlights for slanted tiles, and we ended up creating this shader to better represent depth in a 2D world. Currently, it only checks for `IsStairs` & `StairsOrientation` fields within `TileConfiguration` to decide whether to render slanted or not.

From there, I went on to create the basis of our GUI and battle system:

![Inventory GUI](https://i.ibb.co/gPGBdv1/ezgif-3-0b34ff7b82a5.gif "Inventory GUI")

![Attack Forecast](https://i.imgur.com/9pAhlrk.png "Attack Forecast")

![Battle System](https://i.imgur.com/zx6sbtP.gif "Battle System")

Which brings us very close to current day.

Since then, I've continued work on this battle system. At least, until mod support up and smacked me in the face!

Being on FEUniverse, I found a very robust modding community around Fire Emblem's GBA roms. Not only there, there's another huge community around SRPG Studio. Seeing this, I came to believe offering mod support would be a wise choice.

To that end, we've been using `ScriptableObjects` internally for a great deal of our data storage. I came across this [article](https://www.turiyaware.com/blog/creating-a-moddable-unity-game), suggesting serialization into JSON. So, I began to write serializers for our `ScriptableObjects` that allow us to write to JSON and read JSON back into `ScriptableObjects`. A few examples:

A Sword Weapon:

```
{
  "WeaponType": "Sword",
  "DescriptionBroken": "A broken steel sword, nearly useless in battle. A blacksmith can repair it.",
  "MeleeSound": "swosh-05",
  "RequiredRank": "D",
  "AttackRange": {
    "Minimum": 1,
    "Maximum": 1
  },
  "Stats": {
    "Damage": 12,
    "Hit": 70,
    "CriticalHit": 9
  },
  "BrokenStats": {
    "Damage": 0,
    "Hit": 45,
    "CriticalHit": 9
  },
  "Weight": 8,
  "MaxDurability": 35,
  "Filename": "Steel Sword",
  "ItemName": "Steel Sword",
  "ItemType": "Weapon",
  "Description": "A durable steel sword.",
  "Pricing": {
    "Cost": 1000,
    "SaleValue": 600
  },
  "Icon": {
    "AtlasPath": "Assets/Sprites/GUI/UI Materials/Icons/assorted icons/heartamulet.spriteatlas",
    "SpriteName": "heartamulet_4"
  }
}
```

A Unit's class:

```
{
  "Filename": "Adept",
  "Title": "Adept",
  "RelativePower": 2,
  "BaseStats": {
    "Movement": {
      "Base": 10,
      "Growth Rate": 0
    },
    "MaxHealth": {
      "Base": 13,
      "Growth Rate": 40
    },
    "Strength": {
      "Base": 4,
      "Growth Rate": 15
    },
    "Speed": {
      "Base": 8,
      "Growth Rate": 60
    },
    "Skill": {
      "Base": 8,
      "Growth Rate": 70
    },
    "Magic": {
      "Base": 12,
      "Growth Rate": 70
    },
    "Luck": {
      "Base": 8,
      "Growth Rate": 50
    },
    "Resistance": {
      "Base": 10,
      "Growth Rate": 70
    },
    "Defense": {
      "Base": 4,
      "Growth Rate": 30
    },
    "Weight": {
      "Base": 11,
      "Growth Rate": 0
    },
    "Constitution": {
      "Base": 8,
      "Growth Rate": 0
    }
  },
  "MaxStats": {
    "Movement": 14,
    "MaxHealth": 50,
    "Strength": 16,
    "Speed": 20,
    "Skill": 25,
    "Magic": 25,
    "Luck": 20,
    "Resistance": 25,
    "Defense": 15,
    "Weight": 11,
    "Constitution": 10
  },
  "PromotedBonus": 1,
  "PromotionGains": {
    "Movement": 0,
    "MaxHealth": 2,
    "Strength": 0,
    "Speed": 1,
    "Skill": 2,
    "Magic": 3,
    "Luck": 0,
    "Resistance": 3,
    "Defense": 0,
    "Weight": 0,
    "Constitution": 0
  },
  "PromotionOptions": [
    "Invoker",
    "Sorcerer",
    "Angel Mage"
  ],
  "UsableWeapons": [],
  "UsableMagic": [
    "Elemental",
    "Divination",
    "Ceremonial",
    "Hedge"
  ]
}
```

And more to be done. Currently, I use ScriptableObjects internally and have them serialized to a folder in the game. From there, I create from JSON and set the references to any objects in the scene. I wrote `Repository` classes that handle the serialization and deserialization processes and expose their `public static` methods within Editor button operations (using Odin Inspector).

The end goal to have all data be editable by JSON and create external GUI tools that create these JSON files, similar to this:



![FEBuilder](https://feuniverse.us/uploads/default/original/2X/c/c91ef567497f50cca6fd7caa3d431d09fee74d5d.png "FEBuilder")



I imagine it'd be a suite of tools to edit preexisting and create new Units, Items, Maps, Classes, Abilities, etc. No level editor, but imports from Tiled.



This is a big Kickstarter goal for me, I'm merely setting the groundwork by having all data serialized into JSON.



That about wraps up our rather long synopsis! I'll be back with progress updates.