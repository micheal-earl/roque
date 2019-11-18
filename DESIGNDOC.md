## Gameplay
Plays like a traditional roguelike (DCSS, TOME, C:DDA): 8-way movement, bump combat, spells, etc. Anything you could do on a tile based grid will likely be implemented (Aoe spells, auras, line spells). There will be a crafting system inspired by C:DDA.  

Character creation will be similar to C:DDA with a point based system and flaws/boons that you can take. There will be less of a focus on "class" and more of a focus on specializing your character through choices made in game.

---

## Player Experience
_What is the player experience from character creation to end game?_

I would like to have a decent description of the gameplay process here, but that's a WIP. For now I would just like to say that I want a run to kind of _feel_ like a traditional xianxia story. For those of you who may have read popular xianxia novels (Renegade Immortal, I Shall Seal the Heavens, Panlong, Cradle, etc) I want each playthrough to kind of follow the general progression of those stories.

---

## Progression
_Progression will be decently different from other popular roguelikes. I'll do my best to explain it here._

Qi will be the primary metric of progression in the game. A more progressed character has more Qi and regens Qi more quickly.

A character will start with some amount of Qi, maybe 100/100. You can use that Qi to cast techniques (spells, etc) or perform spiritual feats. 

Your character can __meditate__ to increase the soft cap of their Qi. So if you meditate for 10 hours (in game) maybe you now have 110/110 Qi.

You can earn experience points through combat, quests, and crafting. If you meditate while you have available experience points you will consume those points and increase your Qi soft cap more quickly. (There are also other methods to up the rate in which you can increase your Qi soft cap)

Meditation will take real world time. In xianxia, many cultivators spend dozens of years in meditation before accumulating enough Qi to make a breakthrough. Time may not be 1:1 with the real world, but it would still take a LONG time waiting for your character to break through without experience. To mitigate this make sure you have plenty of experience and a strong Qi refinement method before attempting to break through.

Your Qi has a hard cap and when you reach that hard cap you can begin trying to "break through" to the next stage. You can only increase the hard cap of your Qi by breaking through to a new stage.

In xianxia novels, progression is usually related to a cultivation "stage" that your character has obtained. This roguelike will follow that formula. Instead of levels, you will have a cultivation stage. There will be 8 Major cultivation stages and each stage will contain a number of sub-stages. Xianxia novels get pretty out of hand with power growth. Usually a major stage is considered as an __order of magnitude or more__ powerful than the previous stage while sub stages represent linear growth of power within a major stage.

When you increase your stage within the game your stats will improve and you will be able to use more advanced techniques. (Will also have more Qi to spend on those techniques.)

Progression will revolve around an adventure > meditate > adventure > meditate cycle. The more progress and stuff you find during your adventures, the faster you will accumulate Qi during meditation.

---

## Character
_What makes up a player character (or a cultivator in general) within the game?_

#### Race
_Not 100% sure whether there will be races or not_
- Human
- Asura
- Deva

#### Stats
_Still need to make decisions on what each of these stats will actually. I'll probably prune some of them to reduce complexity._
- Strength
- Endurance
- Intellect
- Agility
- Spirit
- Charisma
- Luck

#### Crafting skills
_Crafting will be similar to C:DDA, players will be able to use objects surrounding their character to craft new things. There will be tools like Cauldrons with qualities (ex: Pill Distillation 2). These qualities + ingredients + the characters proficiency in the crafting category + known recipes determine what they can or cannot craft at any given moment._
- Pill refinement
  - Cauldron
  - Furnace
  - etc
- Weaponcraft
- Armorcraft
- Toolcraft
  - A support specialization to craft tools for other crafting specializations
- Formations
- Talismans
- Automatons (puppetcraft)
- Technique Crafting?

#### Qi
_There will be many kinds of Qi in the game. These Qi types can fuel certain techniques. A player can theoretically train in any number of Qi types, but will progress much more slowly than someone who chooses to focus on only a few._
- The Primary Elements
  - Fire
  - Water
  - Metal
  - Earth
  - Wood
- The Tertiary Elements
  - Thunder
  - Wind
  - Poison
  - Ice
  - Blood
- The Martial Elements
  - Sword
  - Combat
  - Precision
  - Conqueror
  - Slaughter
- The Balance Elements
  - Karma
  - Death
  - Life
  - Yin
  - Yang

#### Qi Refining
_Qi refining will be one of the main progression tools in the game. You progress through the stages primarily through Qi refinement. The better your Qi refinement technique, the more quickly you can progress. However, not all Qi refinement techniques are made equal and some may require you to satisfy unique constraints to fully utilize them._  

_Qi refinement techniques are tied to one of the 4 main Qi groups (Primary, Tertiary, Martial, Balance) Example: If you have a primary Qi refinement technique it can increase your Qi in Fire, Water, Metal, Earth, or Wood._
- Standard Qi Refinement Techniques
- Unique Qi Refinement Techniques
  - Slaughter Refinement
    - You gain Qi cap faster based on how many innocents you've killed since the last time you meditated
  - Gourmand Refinement
    - You gain Qi cap faster based on how much food you've eaten since the last time you meditated

#### Meditation
_You can choose to meditate at any time out of combat. Meditation will slowly increase your maximum Qi cap. The speed at which meditation increases your Qi cap is based on how many experience points you've earned since the last time you've meditated and your Qi refinement technique_

#### Boons/Flaws
_During character creation you can take flaws to increase the number of points you have to work with. These flaws could be anything from reducing your baseline reputation with every sect to taking penalties on ranged attack checks. Boons will effectively be the opposite of flaws and cost character creation points instead of granting them._
- Boons
  - ?
    - ?
- Flaws
  - Disreputable
    - Your base reputation with every sect has been reduced

#### Cultivation Stages
_You can increase in cultivation current stages once you reach your stages maximum possible Qi cap._
- Qi Condensation
  - 9 Substages
- Foundation Establishment
  - 3 Substages
- Core Formation
  - 3 Substages
- Nascent Soul
  - 3 Substages
- Dao Seeking
  - 3 Substages
- Immortal
  - 3 Substages
- Dao Realm
  - 3 Substages
- Samsara Severing
  - ?

#### Body Cultivation Stages
_This may or may not be a thing, think physical strength and endurance_
- Body Refinement
- Power Establishment
- Strength Formation
- Nascent Body
- Dao Body
- Immortal Body
- Dao Realm Body

#### Techniques
_Your character will slowly accrue many techniques as you play the game. But, they take time and effort to train in. It will be up to you (and your Qi types) to decide which techniques you will train and use. The plan is to have hundreds of techniques to find in game, some super unique, others pretty generic._

#### The Dao
_This idea is a little underdeveloped. The Dao will be a central "belief" of your character and some late game progress will rely on you fulfilling or discovering more about your dao. These daos could be something like "I will vanquish evil!" which may give you stat bonus when fighting "evil" enemies._
- Start with a dao, refine it in dao seeking stage
- I don't know what they do yet, unique techniques, stat bonuses, etc

#### Karmic Balance
- Good/evil deeds etc.

#### Reputation
- Reputation matrix

---

## Crafting

---

## Artifacts

---

## World
_The world should slowly open up as your character progresses. The earlier the stage, the smaller the world should feel. This fits with the standard xianxia theme. Eventually as you progress you will even be able to travel to other planets in the solar system._

---

## Spiritual Beasts
- Unique Tier
  - The Azure Dragon (Wood)
  - The Vermillion Bird (Fire)
  - The Yellow Dragon (Earth)
  - The White Tiger (Metal)
  - The Black Tortoise (Water)
  
- S Tier
  - Kun Peng
  - Qilin

- A Tier

- B Tier

- C Tier

---

## Enemies
- Cultivators
- Spiritual Beasts

