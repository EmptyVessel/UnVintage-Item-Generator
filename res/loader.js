// JavaScript Document
const itemNames = {
"TF_Weapon_Bat": "Bat",
"TF_Weapon_Bottle": "Bottle",
"TF_Weapon_FireAxe": "Fire Axe",
"TF_Weapon_Club": "Kukri",
"TF_Weapon_Crowbar": "Crowbar",
"TF_Weapon_Bonesaw": "Bonesaw",
"TF_Weapon_FlameThrower": "Flame Thrower",
"TF_Weapon_FlameThrower_desc": "Afterburn reduces Medi Gun healing and resist shield effects.\nAlt-Fire: Release a blast of air that pushes enemies and projectiles and extinguishes teammates that are on fire.",
"TF_Weapon_GrenadeLauncher": "Grenade Launcher",
"TF_Weapon_PipebombLauncher": "Stickybomb Launcher",
"TF_Weapon_PipebombLauncher_desc": "Alt-Fire: Detonate all stickybombs",
"TF_Weapon_Knife": "Knife",
"TF_Weapon_Knife_desc": "Attack an enemy from behind to Backstab them for a one hit kill.",
"TF_Weapon_Medikit": "Medikit",
"TF_Weapon_Minigun": "Minigun",
"TF_Weapon_Pistol": "Pistol",
"TF_Weapon_Fists": "Fists",
"TF_Weapon_Revolver": "Revolver",
"TF_Weapon_RocketLauncher": "Rocket Launcher",
"TF_Weapon_Shotgun": "Shotgun",
"TF_Weapon_Shotgun_Primary": "Shotgun",
"TF_Weapon_Shovel": "Shovel",
"TF_Weapon_SMG": "SMG",
"TF_Weapon_SniperRifle": "Sniper Rifle",
"TF_Weapon_SuperSMG": "Super SMG",
"TF_Weapon_StickybombLauncher": "Stickybomb Launcher",
"TF_Weapon_Tranq": "Tranquilizer Gun",
"TF_Weapon_Wrench": "Wrench",
"TF_Weapon_Wrench_Desc": "Upgrades, repairs and speeds up construction of friendly buildings on hit",
"TF_Weapon_ObjectSelection": "Build",
"TF_Weapon_PDA_Engineer_Builder": "Construction PDA",
"TF_Weapon_PDA_Engineer_Destroyer": "Destruction PDA",
"TF_Weapon_PDA_Engineer": "PDA",
"TF_Weapon_Disguise_Kit": "Disguise Kit",
"TF_Weapon_Disguise_Kit_Type": "...Cigarette Case?",
"TF_Weapon_Spy_Sapper": "Sapper",
"TF_Weapon_Spy_Sapper_desc": "Place on enemy buildings to disable and slowly drain away its health.  Placing a sapper does not remove your disguise",
"TF_Weapon_Nailgun": "Nail Gun",
"TF_Weapon_Medigun": "Medi Gun",
"TF_Weapon_Medigun_Prototype": "Medi Gun Prototype",
"TF_Weapon_Scattergun": "Scattergun",
"TF_Weapon_SyringeGun": "Syringe Gun",
"TF_Weapon_SyringeGun_Prototype": "Syringe Gun Prototype",
"TF_Weapon_Watch": "Invis Watch",
"TF_Weapon_Watch_desc": "Alt-Fire: Turn invisible.  Cannot attack while invisible.  Bumping in to enemies will make you slightly visible to enemies",
"TF_Weapon_FlareGun": "Flare Gun",
"TF_Weapon_Flaregun": "Flare Gun",
"TF_Unique_Achievement_Flaregun": "Flare Gun",
"TF_Weapon_LunchBox": "Lunch Box",
"TF_Weapon_SoldierSashimono": "Sashimono",
"TF_Weapon_Gunbai": "Gunbai",
"TF_Weapon_Kunai": "Kunai",
"TF_Weapon_SoldierKatana": "Katana",
"TF_Weapon_Jar": "Jar Based Karate",
"TF_Weapon_Jar_Milk": "Non-Milk Substance",
"TF_Weapon_Jar_Gas": "Gas-Like Substance",
"TF_Weapon_Jar_Cleaver": "Cleaver",
"TF_Weapon_CompoundBow": "Bow",
"TF_Weapon_Battle_Banner": "Battle Banner",
"TF_Weapon_Sword": "Sword",
"TF_Weapon_Axe": "Axe",
"TF_Weapon_Pickaxe": "Pickaxe",
"TF_Weapon_Laser_Pointer": "Laser Pointer",
"TF_Weapon_SledgeHammer": "Sledgehammer",
"TF_Weapon_MakeshiftClub": "Makeshift Club",
"TF_Weapon_Robot_Arm": "Robot Arm",
"TF_Weapon_Peppergun": "Peppergun",
"TF_Weapon_Fish": "Fish",
"TF_Weapon_FryingPan": "Frying Pan",
"TF_Weapon_GoldFryingPan": "Golden Frying Pan",
"TF_Weapon_Gloves": "Boxing Gloves",
"TF_Weapon_Crossbow": "Crossbow",
"TF_Weapon_StickBomb": "Stick Bomb",
"TF_Weapon_GardenRake": "Garden Rake",
"TF_Weapon_RiftFireAxe": "RIFT Fire Axe",
"TF_Weapon_RiftFireMace": "RIFT Fire Mace",
"TF_Weapon_RocketPack": "Rocket Pack",
"TF_Weapon_Sign": "Sign",
"TF_Weapon_Staff": "Staff",
"TF_Weapon_Cleaver": "Cleaver",
"TF_Weapon_Camera": "Camera",
"TF_Weapon_Medigun_Resist": "Vaccinator",
"TF_Weapon_Cannon": "Loose Cannon",
"TF_Weapon_Cannon_desc": "Double Donk! Bomb explosions after a cannon ball impact will deal mini-crits to impact victims",
"TF_Weapon_Shotgun_Building_Rescue": "Rescue Ranger",
"TF_Weapon_Ap_Sap": "Ap-Sap",
"TF_Weapon_Ap_Sap_desc": "Mann Co. got a great deal from a nice lady in an abandoned science facility on a warehouse full of slightly used, possibly mildly defective sappers. Unlike our other sappers, the Ap-Sap is sentient, and will provide hours of lively, one-sided conversation while you're trying to work. ",
"TF_Weapon_Pork_Product": "Pork Product",
"TF_Weapon_Severed_Arm": "Severed Arm",
"TF_Weapon_Parachute": "Parachute",
"TF_Weapon_Hammer": "Hammer",
"TF_Weapon_Machete": "Machete",
"TF_Weapon_Skullbat": "Skull Bat",
"TF_Weapon_HotHand": "Hot Hand",
"TF_Weapon_HotHand_Desc": "This melee slap tells your opponent, and anyone watching the kill feed, that your hand just gave some lucky face the gift of slapping it stupid.",
"TF_Weapon_Slap": "Slap",
"TF_Weapon_FireballLauncher": "Flame Launcher",
"TF_Weapon_DragonsFury": "Dragon's Fury",
"TF_Weapon_DragonsFury_Desc": "This powerful, single-shot flamethrower rewards consecutive hits with faster reloads and bonus damage.",
"TF_Weapon_DragonsFury_NeutralDesc": "Uses a shared pressure tank for Primary Fire and Alt-Fire.\n\nPrimary Fire: Launches a fast-moving projectile that briefly ignites enemies\n\nAlt-Fire: Release a blast of air that pushes enemies and projectiles, and extinguishes teammates that are on fire.",
"TF_Weapon_DragonsFury_PositiveDesc": "Deals 300% damage to burning players\n+50% repressurization rate on hit",
"TF_Weapon_DragonsFury_NegativeDesc": "-50% repressurization rate on Alt-Fire",
"TF_ThermalThruster": "Thermal Thruster",
"TF_ThermalThruster_Desc": "Death from above! Fires a short-duration blast that launches the Pyro in the direction they are aiming. Deal 3x falling damage to anyone you land on!",
"TF_Weapon_Award": "Award",
"TF_Weapon_Minigun_Festive2011": "Festive Minigun",
"TF_Weapon_Medigun_Festive2011": "Festive Medi Gun",
"TF_Weapon_RocketLauncher_Festive2011": "Festive Rocket Launcher",
"TF_Weapon_Flamethrower_Festive2011": "Festive Flame Thrower",
"TF_Weapon_Scattergun_Festive2011": "Festive Scattergun",
"TF_Weapon_StickybombLauncher_Festive2011": "Festive Stickybomb Launcher",
"TF_Weapon_StickybombLauncher_Festive2011_Style0": "Festive",
"TF_Weapon_StickybombLauncher_Festive2011_Style1": "Festivest",
"TF_Weapon_Wrench_Festive2011": "Festive Wrench",
"TF_Weapon_SniperRifle_Festive2011": "Festive Sniper Rifle",
"TF_Weapon_Knife_Festive2011": "Festive Knife",
"TF_Weapon_Bat_Festive2011": "Festive Bat",
"TF_Weapon_FestiveShotgun": "Festive Shotgun",
"TF_Weapon_FestiveRevolver": "Festive Revolver",
"TF_Weapon_FestiveBonesaw": "Festive Bonesaw",
"TF_Weapon_FestiveTarge": "Festive Chargin' Targe",
"TF_Weapon_FestiveBonk": "Festive Bonk! Atomic Punch",
"TF_Weapon_FestiveBackburner": "Festive Backburner",
"TF_Weapon_FestiveSMG": "Festive SMG",
"TF_Weapon_Minigun_IntermediateMVMLoot": "Rust Botkiller Minigun Mk.I",
"TF_Weapon_Medigun_IntermediateMVMLoot": "Rust Botkiller Medi Gun Mk.I",
"TF_Weapon_RocketLauncher_IntermediateMVMLoot": "Rust Botkiller Rocket Launcher Mk.I",
"TF_Weapon_Flamethrower_IntermediateMVMLoot": "Rust Botkiller Flame Thrower Mk.I",
"TF_Weapon_Scattergun_IntermediateMVMLoot": "Rust Botkiller Scattergun Mk.I",
"TF_Weapon_StickybombLauncher_IntermediateMVMLoot": "Rust Botkiller Stickybomb Launcher Mk.I",
"TF_Weapon_Wrench_IntermediateMVMLoot": "Rust Botkiller Wrench Mk.I",
"TF_Weapon_SniperRifle_IntermediateMVMLoot": "Rust Botkiller Sniper Rifle Mk.I",
"TF_Weapon_Knife_IntermediateMVMLoot": "Rust Botkiller Knife Mk.I",
"TF_Weapon_Minigun_IntermediateMVMRareLoot": "Blood Botkiller Minigun Mk.I",
"TF_Weapon_Medigun_IntermediateMvMRareLoot": "Blood Botkiller Medi Gun Mk.I",
"TF_Weapon_RocketLauncher_IntermediateMvMRareLoot": "Blood Botkiller Rocket Launcher Mk.I",
"TF_Weapon_Flamethrower_IntermediateMvMRareLoot": "Blood Botkiller Flame Thrower Mk.I",
"TF_Weapon_Scattergun_IntermediateMvMRareLoot": "Blood Botkiller Scattergun Mk.I",
"TF_Weapon_StickybombLauncher_IntermediateMvMRareLoot": "Blood Botkiller Stickybomb Launcher Mk.I",
"TF_Weapon_Wrench_IntermediateMvMRareLoot": "Blood Botkiller Wrench Mk.I",
"TF_Weapon_SniperRifle_IntermediateMvMRareLoot": "Blood Botkiller Sniper Rifle Mk.I",
"TF_Weapon_Knife_IntermediateMvMRareLoot": "Blood Botkiller Knife Mk.I",
"TF_Weapon_Minigun_AdvancedMVMLoot": "Silver Botkiller Minigun Mk.I",
"TF_Weapon_Medigun_AdvancedMVMLoot": "Silver Botkiller Medi Gun Mk.I",
"TF_Weapon_RocketLauncher_AdvancedMVMLoot": "Silver Botkiller Rocket Launcher Mk.I",
"TF_Weapon_Flamethrower_AdvancedMVMLoot": "Silver Botkiller Flame Thrower Mk.I",
"TF_Weapon_Scattergun_AdvancedMVMLoot": "Silver Botkiller Scattergun Mk.I",
"TF_Weapon_StickybombLauncher_AdvancedMVMLoot": "Silver Botkiller Stickybomb Launcher Mk.I",
"TF_Weapon_Wrench_AdvancedMVMLoot": "Silver Botkiller Wrench Mk.I",
"TF_Weapon_SniperRifle_AdvancedMVMLoot": "Silver Botkiller Sniper Rifle Mk.I",
"TF_Weapon_Knife_AdvancedMVMLoot": "Silver Botkiller Knife Mk.I",
"TF_Weapon_Minigun_AdvancedMVMRareLoot": "Gold Botkiller Minigun Mk.I",
"TF_Weapon_Medigun_AdvancedMVMRareLoot": "Gold Botkiller Medi Gun Mk.I",
"TF_Weapon_RocketLauncher_AdvancedMVMRareLoot": "Gold Botkiller Rocket Launcher Mk.I",
"TF_Weapon_Flamethrower_AdvancedMVMRareLoot": "Gold Botkiller Flame Thrower Mk.I",
"TF_Weapon_Scattergun_AdvancedMVMRareLoot": "Gold Botkiller Scattergun Mk.I",
"TF_Weapon_StickybombLauncher_AdvancedMVMRareLoot": "Gold Botkiller Stickybomb Launcher Mk.I",
"TF_Weapon_Wrench_AdvancedMVMRareLoot": "Gold Botkiller Wrench Mk.I",
"TF_Weapon_SniperRifle_AdvancedMVMRareLoot": "Gold Botkiller Sniper Rifle Mk.I",
"TF_Weapon_Knife_AdvancedMVMRareLoot": "Gold Botkiller Knife Mk.I",
"TF_Weapon_Minigun_ExpertMVMLoot": "Carbonado Botkiller Minigun Mk.I",
"TF_Weapon_Medigun_ExpertMVMLoot": "Carbonado Botkiller Medi Gun Mk.I",
"TF_Weapon_RocketLauncher_ExpertMVMLoot": "Carbonado Botkiller Rocket Launcher Mk.I",
"TF_Weapon_Flamethrower_ExpertMVMLoot": "Carbonado Botkiller Flame Thrower Mk.I",
"TF_Weapon_Scattergun_ExpertMVMLoot": "Carbonado Botkiller Scattergun Mk.I",
"TF_Weapon_StickybombLauncher_ExpertMVMLoot": "Carbonado Botkiller Stickybomb Launcher Mk.I",
"TF_Weapon_Wrench_ExpertMVMLoot": "Carbonado Botkiller Wrench Mk.I",
"TF_Weapon_SniperRifle_ExpertMVMLoot": "Carbonado Botkiller Sniper Rifle Mk.I",
"TF_Weapon_Knife_ExpertMVMLoot": "Carbonado Botkiller Knife Mk.I",
"TF_Weapon_Minigun_ExpertMVMRareLoot": "Diamond Botkiller Minigun Mk.I",
"TF_Weapon_Medigun_ExpertMVMRareLoot": "Diamond Botkiller Medi Gun Mk.I",
"TF_Weapon_RocketLauncher_ExpertMVMRareLoot": "Diamond Botkiller Rocket Launcher Mk.I",
"TF_Weapon_Flamethrower_ExpertMVMRareLoot": "Diamond Botkiller Flame Thrower Mk.I",
"TF_Weapon_Scattergun_ExpertMVMRareLoot": "Diamond Botkiller Scattergun Mk.I",
"TF_Weapon_StickybombLauncher_ExpertMVMRareLoot": "Diamond Botkiller Stickybomb Launcher Mk.I",
"TF_Weapon_Wrench_ExpertMVMRareLoot": "Diamond Botkiller Wrench Mk.I",
"TF_Weapon_SniperRifle_ExpertMVMRareLoot": "Diamond Botkiller Sniper Rifle Mk.I",
"TF_Weapon_Knife_ExpertMVMRareLoot": "Diamond Botkiller Knife Mk.I",
"TF_Weapon_Minigun_AdvancedMVMLoot_Engineer": "Silver Botkiller Minigun Mk.II",
"TF_Weapon_Medigun_AdvancedMVMLoot_Engineer": "Silver Botkiller Medi Gun Mk.II",
"TF_Weapon_RocketLauncher_AdvancedMVMLoot_Engineer": "Silver Botkiller Rocket Launcher Mk.II",
"TF_Weapon_Flamethrower_AdvancedMVMLoot_Engineer": "Silver Botkiller Flame Thrower Mk.II",
"TF_Weapon_Scattergun_AdvancedMVMLoot_Engineer": "Silver Botkiller Scattergun Mk.II",
"TF_Weapon_StickybombLauncher_AdvancedMVMLoot_Engineer": "Silver Botkiller Stickybomb Launcher Mk.II",
"TF_Weapon_Wrench_AdvancedMVMLoot_Engineer": "Silver Botkiller Wrench Mk.II",
"TF_Weapon_SniperRifle_AdvancedMVMLoot_Engineer": "Silver Botkiller Sniper Rifle Mk.II",
"TF_Weapon_Knife_AdvancedMVMLoot_Engineer": "Silver Botkiller Knife Mk.II",
"TF_Weapon_Minigun_AdvancedMVMRareLoot_Engineer": "Gold Botkiller Minigun Mk.II",
"TF_Weapon_Medigun_AdvancedMVMRareLoot_Engineer": "Gold Botkiller Medi Gun Mk.II",
"TF_Weapon_RocketLauncher_AdvancedMVMRareLoot_Engineer": "Gold Botkiller Rocket Launcher Mk.II",
"TF_Weapon_Flamethrower_AdvancedMVMRareLoot_Engineer": "Gold Botkiller Flame Thrower Mk.II",
"TF_Weapon_Scattergun_AdvancedMVMRareLoot_Engineer": "Gold Botkiller Scattergun Mk.II",
"TF_Weapon_StickybombLauncher_AdvancedMVMRareLoot_Engineer": "Gold Botkiller Stickybomb Launcher Mk.II",
"TF_Weapon_Wrench_AdvancedMVMRareLoot_Engineer": "Gold Botkiller Wrench Mk.II",
"TF_Weapon_SniperRifle_AdvancedMVMRareLoot_Engineer": "Gold Botkiller Sniper Rifle Mk.II",
"TF_Weapon_Knife_AdvancedMVMRareLoot_Engineer": "Gold Botkiller Knife Mk.II",
"TF_Weapon_GrapplingHook": "Grappling Hook",
"TF_Trial_UpgradeItem": "Free Trial Premium Upgrade",
"TF_TournamentMedal_Empty": "Tournament Medal",
"TF_TournamentMedal_Empty_Desc": "",
"TF_TournamentMedal_GWJ_1st": "First Place - Gamers With Jobs Tournament",
"TF_TournamentMedal_GWJ_2nd": "Second Place - Gamers With Jobs Tournament",
"TF_TournamentMedal_GWJ_3rd": "Participant - Gamers With Jobs Tournament",
"TF_TournamentMedal_ETF2LHL_1st": "First Place - ETF2L Highlander Tournament",
"TF_TournamentMedal_ETF2LHL_2nd": "Second Place - ETF2L Highlander Tournament",
"TF_TournamentMedal_ETF2LHL_3rd": "Third Place - ETF2L Highlander Tournament",
"TF_TournamentMedal_ETF2LHL_4th": "Participant - ETF2L Highlander Tournament",
"TF_TournamentMedal_UGCHL_Participant": "UGC Highlander Participant",
"TF_TournamentMedal_UGCHL_EuroPlatinum": "UGC Highlander Euro Platinum",
"TF_TournamentMedal_UGCHL_EuroSilver": "UGC Highlander Euro Silver",
"TF_TournamentMedal_UGCHL_EuroIron": "UGC Highlander Euro Iron",
"TF_TournamentMedal_UGCHL_EuroParticipant": "UGC Highlander Euro Participant",
"TF_TournamentMedal_UGCHL_Platinum_1st": "UGC Highlander Platinum 1st Place",
"TF_TournamentMedal_UGCHL_Platinum_2nd": "UGC Highlander Platinum 2nd Place",
"TF_TournamentMedal_UGCHL_Platinum_3rd": "UGC Highlander Platinum 3rd Place",
"TF_TournamentMedal_UGCHL_Platinum_Participant": "UGC Highlander Platinum Participant",
"TF_TournamentMedal_UGCHL_Gold_1st": "UGC Highlander Gold 1st Place",
"TF_TournamentMedal_UGCHL_Gold_2nd": "UGC Highlander Gold 2nd Place",
"TF_TournamentMedal_UGCHL_Gold_3rd": "UGC Highlander Gold 3rd Place",
"TF_TournamentMedal_UGCHL_Gold_Participant": "UGC Highlander Gold Participant",
"TF_TournamentMedal_UGCHL_Main_1st": "UGC Highlander Main 1st Place",
"TF_TournamentMedal_UGCHL_Main_2nd": "UGC Highlander Main 2nd Place",
"TF_TournamentMedal_UGCHL_Main_3rd": "UGC Highlander Main 3rd Place",
"TF_TournamentMedal_UGCHL_Main_Participant": "UGC Highlander Main Participant",
"TF_TournamentMedal_UGCHL_Silver_1st": "UGC Highlander Silver 1st Place",
"TF_TournamentMedal_UGCHL_Silver_2nd": "UGC Highlander Silver 2nd Place",
"TF_TournamentMedal_UGCHL_Silver_3rd": "UGC Highlander Silver 3rd Place",
"TF_TournamentMedal_UGCHL_Silver_Participant": "UGC Highlander Silver Participant",
"TF_TournamentMedal_UGCHL_Steel_1st": "UGC Highlander Steel 1st Place",
"TF_TournamentMedal_UGCHL_Steel_2nd": "UGC Highlander Steel 2nd Place",
"TF_TournamentMedal_UGCHL_Steel_3rd": "UGC Highlander Steel 3rd Place",
"TF_TournamentMedal_UGCHL_Steel_Participant": "UGC Highlander Steel Participant",
"TF_TournamentMedal_UGCHL_Iron_1st": "UGC Highlander Iron 1st Place",
"TF_TournamentMedal_UGCHL_Iron_2nd": "UGC Highlander Iron 2nd Place",
"TF_TournamentMedal_UGCHL_Iron_3rd": "UGC Highlander Iron 3rd Place",
"TF_TournamentMedal_UGCHL_Iron_Participant": "UGC Highlander Iron Participant",
"TF_TournamentMedal_UGCHL_Tin_1st": "UGC Highlander Tin 1st Place",
"TF_TournamentMedal_UGCHL_Tin_2nd": "UGC Highlander Tin 2nd Place",
"TF_TournamentMedal_UGCHL_Tin_3rd": "UGC Highlander Tin 3rd Place",
"TF_TournamentMedal_UGCHL_1st": "UGC Highlander 1st Place",
"TF_TournamentMedal_UGCHL_2nd": "UGC Highlander 2nd Place",
"TF_TournamentMedal_UGCHL_3rd": "UGC Highlander 3rd Place",
"TF_TournamentMedal_UGCHL_Premium_Participant": "UGC Highlander Premium Participant",
"TF_TournamentMedal_UGCHL_Admin": "UGC League Contributor and Admin",
"TF_TournamentMedal_UGC6v6_Platinum_1st": "UGC 6vs6 Platinum 1st Place",
"TF_TournamentMedal_UGC6v6_Platinum_2nd": "UGC 6vs6 Platinum 2nd Place",
"TF_TournamentMedal_UGC6v6_Platinum_3rd": "UGC 6vs6 Platinum 3rd Place",
"TF_TournamentMedal_UGC6v6_Platinum_Participant": "UGC 6vs6 Platinum Participant",
"TF_TournamentMedal_UGC6v6_Gold_1st": "UGC 6vs6 Gold 1st Place",
"TF_TournamentMedal_UGC6v6_Gold_2nd": "UGC 6vs6 Gold 2nd Place",
"TF_TournamentMedal_UGC6v6_Gold_3rd": "UGC 6vs6 Gold 3rd Place",
"TF_TournamentMedal_UGC6v6_Gold_Participant": "UGC 6vs6 Gold Participant",
"TF_TournamentMedal_UGC6v6_Silver_1st": "UGC 6vs6 Silver 1st Place",
"TF_TournamentMedal_UGC6v6_Silver_2nd": "UGC 6vs6 Silver 2nd Place",
"TF_TournamentMedal_UGC6v6_Silver_3rd": "UGC 6vs6 Silver 3rd Place",
"TF_TournamentMedal_UGC6v6_Silver_Participant": "UGC 6vs6 Silver Participant",
"TF_TournamentMedal_UGC6v6_Steel_1st": "UGC 6vs6 Steel 1st Place",
"TF_TournamentMedal_UGC6v6_Steel_2nd": "UGC 6vs6 Steel 2nd Place",
"TF_TournamentMedal_UGC6v6_Steel_3rd": "UGC 6vs6 Steel 3rd Place",
"TF_TournamentMedal_UGC6v6_Steel_Participant": "UGC 6vs6 Steel Participant",
"TF_TournamentMedal_UGC6v6_Iron_Participant": "UGC 6vs6 Iron Participant",
"TF_TournamentMedal_UGC6v6_European_Participant": "UGC 6vs6 European Participant",
"TF_TournamentMedal_UGC4v4_Gold_1st": "UGC 4vs4 Gold 1st Place",
"TF_TournamentMedal_UGC4v4_Gold_2nd": "UGC 4vs4 Gold 2nd Place",
"TF_TournamentMedal_UGC4v4_Gold_3rd": "UGC 4vs4 Gold 3rd Place",
"TF_TournamentMedal_UGC4v4_Gold_Participant": "UGC 4vs4 Gold Participant",
"TF_TournamentMedal_UGC4v4_Silver_1st": "UGC 4vs4 Silver 1st Place",
"TF_TournamentMedal_UGC4v4_Silver_2nd": "UGC 4vs4 Silver 2nd Place",
"TF_TournamentMedal_UGC4v4_Silver_3rd": "UGC 4vs4 Silver 3rd Place",
"TF_TournamentMedal_UGC4v4_Silver_Participant": "UGC 4vs4 Silver Participant",
"TF_TournamentMedal_UGC4v4_Steel_1st": "UGC 4vs4 Steel 1st Place",
"TF_TournamentMedal_UGC4v4_Steel_2nd": "UGC 4vs4 Steel 2nd Place",
"TF_TournamentMedal_UGC4v4_Steel_3rd": "UGC 4vs4 Steel 3rd Place",
"TF_TournamentMedal_UGC4v4_Steel_Participant": "UGC 4vs4 Steel Participant",
"TF_TournamentMedal_UGC4v4_Iron_Participant": "UGC 4vs4 Iron Participant",
"TF_TournamentMedal_UGCUltiduo_Platinum_1st": "UGC Ultiduo Platinum 1st Place",
"TF_TournamentMedal_UGCUltiduo_Platinum_2nd": "UGC Ultiduo Platinum 2nd Place",
"TF_TournamentMedal_UGCUltiduo_Platinum_3rd": "UGC Ultiduo Platinum 3rd Place",
"TF_TournamentMedal_UGCUltiduo_Platinum_Participant": "UGC Ultiduo Platinum Participant",
"TF_TournamentMedal_UGCUltiduo_Steel_1st": "UGC Ultiduo Steel 1st Place",
"TF_TournamentMedal_UGCUltiduo_Steel_2nd": "UGC Ultiduo Steel 2nd Place",
"TF_TournamentMedal_UGCUltiduo_Steel_3rd": "UGC Ultiduo Steel 3rd Place",
"TF_TournamentMedal_UGCUltiduo_Steel_Participant": "UGC Ultiduo Steel Participant",
"TF_TournamentMedal_UGCHL_League_Admin": "UGC League Admin and Contributor",
"TF_TournamentMedal_Winners_Desc": "Given to the winners!",
"TF_TournamentMedal_2nd_Desc": "Given to the second place team!",
"TF_TournamentMedal_3rd_Desc": "Given to the third place team!",
"TF_TournamentMedal_Runnerups_Desc": "Given to the runner-ups!",
"TF_TournamentMedal_Participants_Desc": "Given to the players who participated in the tournament.",
"TF_TournamentMedal_Fall2011": "Fall 2011",
"TF_TournamentMedal_Autumn2011": "Autumn 2011",
"TF_TournamentMedal_UGC_1st_NA_Platinum": "UGC Highlander 1st Place North American Platinum",
"TF_TournamentMedal_UGC_2nd_NA_Platinum": "UGC Highlander 2nd Place North American Platinum",
"TF_TournamentMedal_UGC_3rd_NA_Platinum": "UGC Highlander 3rd Place North American Platinum",
"TF_TournamentMedal_UGC_1st_Europe_Platinum": "UGC Highlander 1st Place European Platinum",
"TF_TournamentMedal_UGC_2nd_Europe_Platinum": "UGC Highlander 2nd Place European Platinum",
"TF_TournamentMedal_UGC_3rd_Europe_Platinum": "UGC Highlander 3rd Place European Platinum",
"TF_TournamentMedal_UGC_1st_SA_Platinum": "UGC Highlander 1st Place South American Platinum",
"TF_TournamentMedal_UGC_2nd_SA_Platinum": "UGC Highlander 2nd Place South American Platinum",
"TF_TournamentMedal_UGC_3rd_SA_Platinum": "UGC Highlander 3rd Place South American Platinum",
"TF_TournamentMedal_UGC_1st_NA_Silver": "UGC Highlander 1st Place North American Silver",
"TF_TournamentMedal_UGC_2nd_NA_Silver": "UGC Highlander 2nd Place North American Silver",
"TF_TournamentMedal_UGC_3rd_NA_Silver": "UGC Highlander 3rd Place North American Silver",
"TF_TournamentMedal_UGC_1st_Europe_Silver": "UGC Highlander 1st Place European Silver",
"TF_TournamentMedal_UGC_2nd_Europe_Silver": "UGC Highlander 2nd Place European Silver",
"TF_TournamentMedal_UGC_3rd_Europe_Silver": "UGC Highlander 3rd Place European Silver",
"TF_TournamentMedal_UGC_1st_NA_Steel": "UGC Highlander 1st Place North American Steel",
"TF_TournamentMedal_UGC_2nd_NA_Steel": "UGC Highlander 2nd Place North American Steel",
"TF_TournamentMedal_UGC_3rd_NA_Steel": "UGC Highlander 3rd Place North American Steel",
"TF_TournamentMedal_UGC_1st_Europe_Steel": "UGC Highlander 1st Place European Steel",
"TF_TournamentMedal_UGC_2nd_Europe_Steel": "UGC Highlander 2nd Place European Steel",
"TF_TournamentMedal_UGC_3rd_Europe_Steel": "UGC Highlander 3rd Place European Steel",
"TF_TournamentMedal_UGC_1st_SA_Steel": "UGC Highlander 1st Place South American Steel",
"TF_TournamentMedal_UGC_2nd_SA_Steel": "UGC Highlander 2nd Place South American Steel",
"TF_TournamentMedal_UGC_3rd_SA_Steel": "UGC Highlander 3rd Place South American Steel",
"TF_TournamentMedal_UGC_Highlander_Platinum": "UGC Highlander Platinum Participant",
"TF_TournamentMedal_UGC_Highlander_Silver": "UGC Highlander Silver Participant",
"TF_TournamentMedal_UGC_Highlander_Steel": "UGC Highlander Steel Participant",
"TF_TournamentMedal_ESL_SeasonVI_Premier_1st": "ESL Season VI Premier Division 1st Place",
"TF_TournamentMedal_ESL_SeasonVI_Premier_2nd": "ESL Season VI Premier Division 2nd Place",
"TF_TournamentMedal_ESL_SeasonVI_Premier_3rd": "ESL Season VI Premier Division 3rd Place",
"TF_TournamentMedal_ESL_SeasonVI_Premier_Participant": "ESL Season VI Premier Division Participant",
"TF_TournamentMedal_ESL_SeasonVI_Div1_1st": "ESL Season VI Division 1 1st Place",
"TF_TournamentMedal_ESL_SeasonVI_Div1_2nd": "ESL Season VI Division 1 2nd Place",
"TF_TournamentMedal_ESL_SeasonVI_Div1_3rd": "ESL Season VI Division 1 3rd Place",
"TF_TournamentMedal_ESL_SeasonVI_Div1_Participant": "ESL Season VI Division 1 Participant",
"TF_TournamentMedal_ESL_SeasonVI_Div2_1st": "ESL Season VI Division 2 1st Place",
"TF_TournamentMedal_ESL_SeasonVI_Div2_2nd": "ESL Season VI Division 2 2nd Place",
"TF_TournamentMedal_ESL_SeasonVI_Div2_3rd": "ESL Season VI Division 2 3rd Place",
"TF_TournamentMedal_ESL_SeasonVI_Div2_Participant": "ESL Season VI Division 2 Participant",
"TF_TournamentMedal_ESL_SeasonVI_Div3_1st": "ESL Season VI Division 3 1st Place",
"TF_TournamentMedal_ESL_SeasonVI_Div3_2nd": "ESL Season VI Division 3 2nd Place",
"TF_TournamentMedal_ESL_SeasonVI_Div3_3rd": "ESL Season VI Division 3 3rd Place",
"TF_TournamentMedal_ESL_SeasonVI_Div3_Participant": "ESL Season VI Division 3 Participant",
"TF_TournamentMedal_ESL_SeasonVI_Div4_1st": "ESL Season VI Division 4 1st Place",
"TF_TournamentMedal_ESL_SeasonVI_Div4_2nd": "ESL Season VI Division 4 2nd Place",
"TF_TournamentMedal_ESL_SeasonVI_Div4_3rd": "ESL Season VI Division 4 3rd Place",
"TF_TournamentMedal_ESL_SeasonVI_Div4_Participant": "ESL Season VI Division 4 Participant",
"TF_TournamentMedal_ESL_SeasonVI_Div5_1st": "ESL Season VI Division 5 1st Place",
"TF_TournamentMedal_ESL_SeasonVI_Div5_2nd": "ESL Season VI Division 5 2nd Place",
"TF_TournamentMedal_ESL_SeasonVI_Div5_3rd": "ESL Season VI Division 5 3rd Place",
"TF_TournamentMedal_ESL_SeasonVI_Div5_Participant": "ESL Season VI Division 5 Participant",
"TF_TournamentMedal_ESL_SeasonVI_Premier": "",
"TF_TournamentMedal_ESL_SeasonVI_Div1": "",
"TF_TournamentMedal_ESL_SeasonVI_Div2": "",
"TF_TournamentMedal_ESL_SeasonVI_Div3": "",
"TF_TournamentMedal_ESL_SeasonVI_Div4": "",
"TF_TournamentMedal_ESL_SeasonVI_Div5": "",
"TF_TournamentMedal_ESL_SeasonVII_Premiership_1st": "ESL Season VII Premiership Division 1st Place",
"TF_TournamentMedal_ESL_SeasonVII_Premiership_2nd": "ESL Season VII Premiership Division 2nd Place",
"TF_TournamentMedal_ESL_SeasonVII_Premiership_3rd": "ESL Season VII Premiership Division 3rd Place",
"TF_TournamentMedal_ESL_SeasonVII_Premiership_Participant": "ESL Season VII Premiership Division Participant",
"TF_TournamentMedal_ESL_SeasonVII_Div1_1st": "ESL Season VII Division 1 1st Place",
"TF_TournamentMedal_ESL_SeasonVII_Div1_2nd": "ESL Season VII Division 1 2nd Place",
"TF_TournamentMedal_ESL_SeasonVII_Div1_3rd": "ESL Season VII Division 1 3rd Place",
"TF_TournamentMedal_ESL_SeasonVII_Div2_1st": "ESL Season VII Division 2 1st Place",
"TF_TournamentMedal_ESL_SeasonVII_Div2_2nd": "ESL Season VII Division 2 2nd Place",
"TF_TournamentMedal_ESL_SeasonVII_Div2_Participant": "ESL Season VII Division 2 Participant",
"TF_TournamentMedal_ESL_SeasonVII_Div3_Participant": "ESL Season VII Division 3 Participant",
"TF_TournamentMedal_ESL_SeasonVII_Div4_1st": "ESL Season VII Division 4 1st Place",
"TF_TournamentMedal_ESL_SeasonVII_Div4_2nd": "ESL Season VII Division 4 2nd Place",
"TF_TournamentMedal_ESL_SeasonVII_Div4_3rd": "ESL Season VII Division 4 3rd Place",
"TF_TournamentMedal_ESL_SeasonVII_Div4_Participant": "ESL Season VII Division 4 Participant",
"TF_TournamentMedal_ESL_SeasonVII_Div5_1st": "ESL Season VII Division 5 1st Place",
"TF_TournamentMedal_ESL_SeasonVII_Div5_2nd": "ESL Season VII Division 5 2nd Place",
"TF_TournamentMedal_ESL_SeasonVII_Div5_3rd": "ESL Season VII Division 5 3rd Place",
"TF_TournamentMedal_ESL_SeasonVII_Div5_Participant": "ESL Season VII Division 5 Participant",
"TF_TournamentMedal_ESL_SeasonVII_Premiership": "",
"TF_TournamentMedal_ESL_SeasonVII_Div1": "",
"TF_TournamentMedal_ESL_SeasonVII_Div2": "",
"TF_TournamentMedal_ESL_SeasonVII_Div3": "",
"TF_TournamentMedal_ESL_SeasonVII_Div4": "",
"TF_TournamentMedal_ESL_SeasonVII_Div5": "",
"TF_TournamentMedal_ESL_MonthyChallenge_1st": "ESL TF2 Monthly Challenge Final 1st Place",
"TF_TournamentMedal_ESL_MonthyChallenge_2nd": "ESL TF2 Monthly Challenge Final 2nd Place",
"TF_TournamentMedal_ESL_MonthyChallenge_3rd": "ESL TF2 Monthly Challenge Final 3rd Place",
"TF_TournamentMedal_Ready_Steady_Pan_First_Place": "Ready Steady Pan First Place",
"TF_TournamentMedal_Ready_Steady_Pan_Second_Place": "Ready Steady Pan Second Place",
"TF_TournamentMedal_Ready_Steady_Pan_Third_Place": "Ready Steady Pan Third Place",
"TF_TournamentMedal_Ready_Steady_Pan_Helper": "Ready Steady Pan Helper",
"TF_TournamentMedal_Ready_Steady_Pan_Participant": "Ready Steady Pan Participant",
"TF_TournamentMedal_Ready_Steady_Pan_Helper_Season1": "Season 1\nThanks for Helping!",
"TF_TournamentMedal_Ready_Steady_Pan_Helper_Season2": "Season 2\nThanks for Helping!",
"TF_TournamentMedal_Ready_Steady_Pan_Winner": "Ready Steady Pan Winner",
"TF_TournamentMedal_Ready_Steady_Pan_WinnerS3": "Finalist Fryer",
"TF_TournamentMedal_Ready_Steady_Pan_WinnerS3_Desc": "A token to warn others: if they see you pulling out a Frying Pan, they better start running. Congratulations on placing top three in Ready Steady Pan Season 3!",
"TF_TournamentMedal_Ready_Steady_Pan_ParticipantS3": "Ready Steady Pan Panticipant",
"TF_TournamentMedal_Ready_Steady_Pan_ParticipantS3_Desc": "You gathered six people together for the sole purpose of hitting others with Frying Pans, and we appreciate you for it. Thanks for participating in Ready Steady Pan Season 3!",
"TF_TournamentMedal_Ready_Steady_Pan_PlayoffS3": "Pantastic Playoff Champ",
"TF_TournamentMedal_Ready_Steady_Pan_PlayoffS3_Desc": "Getting into the playoffs of a competitive Frying Pan tournament is a rather prestigious accomplishment. Congratulations on your performance in Ready Steady Pan Season 3!",
"TF_TournamentMedal_Ready_Steady_Pan_HelperS3_Desc": "Thanks for the hard work and dedication you've put into making Ready Steady Pan Season 3 a reality! You're the real MVP (Most Valuable Panner).",
"TF_TournamentMedal_Ready_Steady_Pan_FirstS4": "Finalist Fry Hard",
"TF_TournamentMedal_Ready_Steady_Pan_FirstS4_Desc": "This season you have ruled with an iron feast. Challenging one of these players is a great whisk, and is a recipe for disaster. Congratulations on your supper performance in the fourth seasoning of Ready Steady Pan!",
"TF_TournamentMedal_Ready_Steady_Pan_SecondS4": "Second Seasonal Stomper",
"TF_TournamentMedal_Ready_Steady_Pan_SecondS4_Desc": "This medal is no ordinary medal, it's non-stick too! Due to your hard efforts in cooking ware and pan-handling you earned the a-peeling title of The Second Seasonal Stomper in the fourth seasoning of Ready Steady Pan!",
"TF_TournamentMedal_Ready_Steady_Pan_ThirdS4": "Third Thyme Champ",
"TF_TournamentMedal_Ready_Steady_Pan_ThirdS4_Desc": "You might have come in yeast place along our winners, but you are still one of our e-steamed and crock-pot players. Well done in the fourth seasoning of Ready Steady Pan!",
"TF_TournamentMedal_Ready_Steady_Pan_PlayoffS4": "Ready Steady Pan-tastic Playoffs",
"TF_TournamentMedal_Ready_Steady_Pan_PlayoffS4_Desc": "Look at how far you got with your trusty pan, you beeted all those weaker stick pans with a pretty decent non-stick pan! I have to say not just rare but well done!",
"TF_TournamentMedal_Ready_Steady_Pan_ParticipantS4": "Fourth Seasoning Pan-ticipant",
"TF_TournamentMedal_Ready_Steady_Pan_ParticipantS4_Desc": "Congrats to your achievement of a-salting people with cooking ware during the Fourth Seasoning of Ready Steady Pan!",
"TF_TournamentMedal_Ready_Steady_Pan_HelperS4": "Eggcellent Helper",
"TF_TournamentMedal_Ready_Steady_Pan_HelperS4_Desc": "You were quite the helpful egg! Thanks for scrambling around and making the fourth seasoning of Ready Steady Pan into reality! You're the real MVP (Most Valuable Panner).",
"TF_TournamentMedal_Ready_Steady_Pan_First_S5": "Hotplate Hero",
"TF_TournamentMedal_Ready_Steady_Pan_First_S5_Desc": "Congratulations on winning Ready Steady Pan Season 5 with your soup-er panformance. Challenging the wielder is not something one does ingest. Players that do should prepare to wok with god. Because you don't get mad, you get oven.",
"TF_TournamentMedal_Ready_Steady_Pan_Second_S5": "Sous-Chef",
"TF_TournamentMedal_Ready_Steady_Pan_Second_S5_Desc": "Second place isn't as bad is it steams. When poach comes to shove, you don't stick around. Players that want a pizza you should prepare to get burned. Feast your eyes on the second place medal for Ready Steady Pan Season 5!",
"TF_TournamentMedal_Ready_Steady_Pan_Third_S5": "Three Star Tipper",
"TF_TournamentMedal_Ready_Steady_Pan_Third_S5_Desc": "While you placed third in Ready Steady Pan Season 5, the com-pan-ion of this medal is a feast-ful opponent. Fight with them and prepare to smell the flours.",
"TF_TournamentMedal_Ready_Steady_Pan_Participant_S5": "Ready Steady Pan Panticipant",
"TF_TournamentMedal_Ready_Steady_Pan_Participant_S5_Desc": "Challengers of this medal should run as fast as their legs can curry them as this player was a participant of Ready Steady Pan Season 5!",
"TF_TournamentMedal_Ready_Steady_Pan_Playoffs_S5": "Ready Steady Pan-tastic Playoffs",
"TF_TournamentMedal_Ready_Steady_Pan_Playoffs_S5_Desc": "Even though things didn't pan out as you hoped, you're still our crockpot hero. Congratulations on making it to playoffs in Ready Steady Pan Season 5 and butter luck next season!",
"TF_TournamentMedal_Ready_Steady_Pan_Tier1_Donor_S5": "Ready Steady Pan Tier I Donor",
"TF_TournamentMedal_Ready_Steady_Pan_Tier1_Donor_S5_Desc": "A-pear-ances aren't always what they steam. We adough you for your donation towards a good cause during Ready Steady Pan Season 5!",
"TF_TournamentMedal_Ready_Steady_Pan_Tier2_Donor_S5": "Ready Steady Pan Tier II Donor",
"TF_TournamentMedal_Ready_Steady_Pan_Tier2_Donor_S5_Desc": "Donating to a good cause makes you a knife person. Or a Spy main. If you're the former, thanks for your help during Ready Steady Pan Season 5! If you're the later, go play highlander.",
"TF_TournamentMedal_ETF2L_6v6_Premier_Division_Gold": "ETF2L 6v6 Premier Division Gold Medal",
"TF_TournamentMedal_ETF2L_6v6_Premier_Division_Silver": "ETF2L 6v6 Premier Division Silver Medal",
"TF_TournamentMedal_ETF2L_6v6_Premier_Division_Bronze": "ETF2L 6v6 Premier Division Bronze Medal",
"TF_TournamentMedal_ETF2L_6v6_Division1_Group_Winner": "ETF2L 6v6 Division 1 Group Winner",
"TF_TournamentMedal_ETF2L_6v6_Division2_Group_Winner": "ETF2L 6v6 Division 2 Group Winner",
"TF_TournamentMedal_ETF2L_6v6_Division3_Group_Winner": "ETF2L 6v6 Division 3 Group Winner",
"TF_TournamentMedal_ETF2L_6v6_Division4_Group_Winner": "ETF2L 6v6 Division 4 Group Winner",
"TF_TournamentMedal_ETF2L_6v6_Division5_Group_Winner": "ETF2L 6v6 Division 5 Group Winner",
"TF_TournamentMedal_ETF2L_6v6_Division6_Group_Winner": "ETF2L 6v6 Division 6 Group Winner",
"TF_TournamentMedal_ETF2L_6v6_Premier_Division_Participation": "ETF2L 6v6 Premier Division Participation Medal",
"TF_TournamentMedal_ETF2L_6v6_Division1_Participation": "ETF2L 6v6 Division 1 Participation Medal",
"TF_TournamentMedal_ETF2L_6v6_Division2_Participation": "ETF2L 6v6 Division 2 Participation Medal",
"TF_TournamentMedal_ETF2L_6v6_Division3_Participation": "ETF2L 6v6 Division 3 Participation Medal",
"TF_TournamentMedal_ETF2L_6v6_Division4_Participation": "ETF2L 6v6 Division 4 Participation Medal",
"TF_TournamentMedal_ETF2L_6v6_Division5_Participation": "ETF2L 6v6 Division 5 Participation Medal",
"TF_TournamentMedal_ETF2L_6v6_Division6_Participation": "ETF2L 6v6 Division 6 Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division1_Gold": "ETF2L Highlander Division 1 Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division1_Silver": "ETF2L Highlander Division 1 Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division1_Bronze": "ETF2L Highlander Division 1 Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division2_Gold": "ETF2L Highlander Division 2 Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division2_Silver": "ETF2L Highlander Division 2 Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division2_Bronze": "ETF2L Highlander Division 2 Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division3_Gold": "ETF2L Highlander Division 3 Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division3_Silver": "ETF2L Highlander Division 3 Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division3_Bronze": "ETF2L Highlander Division 3 Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division4_Gold": "ETF2L Highlander Division 4 Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division4_Silver": "ETF2L Highlander Division 4 Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division4_Bronze": "ETF2L Highlander Division 4 Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division5_Gold": "ETF2L Highlander Division 5 Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division5_Silver": "ETF2L Highlander Division 5 Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division5_Bronze": "ETF2L Highlander Division 5 Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_Premier_Division_Gold": "ETF2L Highlander Premier Division Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_Premier_Division_Silver": "ETF2L Highlander Premier Division Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_Premier_Division_Bronze": "ETF2L Highlander Premier Division Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division1_Group_Winner": "ETF2L Highlander Division 1 Group Winner",
"TF_TournamentMedal_ETF2L_Highlander_Division2_Group_Winner": "ETF2L Highlander Division 2 Group Winner",
"TF_TournamentMedal_ETF2L_Highlander_Division3_Group_Winner": "ETF2L Highlander Division 3 Group Winner",
"TF_TournamentMedal_ETF2L_Highlander_Division4_Group_Winner": "ETF2L Highlander Division 4 Group Winner",
"TF_TournamentMedal_ETF2L_Highlander_Division5_Group_Winner": "ETF2L Highlander Division 5 Group Winner",
"TF_TournamentMedal_ETF2L_Highlander_Division6_Group_Winner": "ETF2L Highlander Division 6 Group Winner",
"TF_TournamentMedal_ETF2L_Highlander_Premier_Division_Participation": "ETF2L Highlander Premier Division Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division1_Participation": "ETF2L Highlander Division 1 Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division2_Participation": "ETF2L Highlander Division 2 Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division3_Participation": "ETF2L Highlander Division 3 Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division4_Participation": "ETF2L Highlander Division 4 Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division5_Participation": "ETF2L Highlander Division 5 Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Division6_Participation": "ETF2L Highlander Division 6 Participation Medal",
"TF_TournamentMedal_ETF2L_Ultiduo1_Gold_Medal": "ETF2L Ultiduo #1 Gold Medal",
"TF_TournamentMedal_ETF2L_Ultiduo2_Gold_Medal": "ETF2L Ultiduo #2 Gold Medal",
"TF_TournamentMedal_ETF2L_Ultiduo3_Gold_Medal": "ETF2L Ultiduo #3 Gold Medal",
"TF_TournamentMedal_ETF2L_Ultiduo4_Gold_Medal": "ETF2L Ultiduo #4 Gold Medal",
"TF_TournamentMedal_ETF2L_Ultiduo5_Gold_Medal": "ETF2L Ultiduo #5 Gold Medal",
"TF_TournamentMedal_ETF2L_Ultiduo5_Silver_Medal": "ETF2L Ultiduo #5 Silver Medal",
"TF_TournamentMedal_ETF2L_Ultiduo5_Bronze_Medal": "ETF2L Ultiduo #5 Bronze Medal",
"TF_TournamentMedal_ETF2L_Ultiduo5_Participation_Medal": "ETF2L Ultiduo #5 Participation Medal",
"TF_TournamentMedal_ETF2L_Ultiduo6_Gold_Medal": "ETF2L Ultiduo #6 Gold Medal",
"TF_TournamentMedal_ETF2L_Ultiduo6_Silver_Medal": "ETF2L Ultiduo #6 Silver Medal",
"TF_TournamentMedal_ETF2L_Ultiduo6_Bronze_Medal": "ETF2L Ultiduo #6 Bronze Medal",
"TF_TournamentMedal_ETF2L_Ultiduo6_Participation_Medal": "ETF2L Ultiduo #6 Participation Medal",
"TF_TournamentMedal_ETF2L_Ultiduo7_Gold_Medal": "ETF2L Ultiduo #7 Gold Medal",
"TF_TournamentMedal_ETF2L_Ultiduo7_Silver_Medal": "ETF2L Ultiduo #7 Silver Medal",
"TF_TournamentMedal_ETF2L_Ultiduo7_Bronze_Medal": "ETF2L Ultiduo #7 Bronze Medal",
"TF_TournamentMedal_ETF2L_Ultiduo7_Participation_Medal": "ETF2L Ultiduo #7 Participation Medal",
"TF_TournamentMedal_ESH_Ultiduo1_Gold_Medal": "ESH Ultiduo #1 Gold Medal",
"TF_TournamentMedal_ESH_Ultiduo2_Gold_Medal": "ESH Ultiduo #2 Gold Medal",
"TF_TournamentMedal_ESH_Ultiduo3_Gold_Medal": "ESH Ultiduo #3 Gold Medal",
"TF_TournamentMedal_ESH_Ultiduo4_Gold_Medal": "ESH Ultiduo #4 Gold Medal",
"TF_TournamentMedal_ESH_Ultiduo5_Gold_Medal": "ESH Ultiduo #5 Gold Medal",
"TF_TournamentMedal_ESH_Ultiduo6_Gold_Medal": "ESH Ultiduo #6 Gold Medal",
"TF_TournamentMedal_ESH_Ultiduo7_Gold_Medal": "ESH Ultiduo #7 Gold Medal",
"TF_TournamentMedal_ETF2L_Participation_Style0": "ETF2L",
"TF_TournamentMedal_ETF2L_Participation_Style1": "Demoman",
"TF_TournamentMedal_ETF2L_Participation_Style2": "Engineer",
"TF_TournamentMedal_ETF2L_Participation_Style3": "Heavy",
"TF_TournamentMedal_ETF2L_Participation_Style4": "Medic",
"TF_TournamentMedal_ETF2L_Participation_Style5": "Pyro",
"TF_TournamentMedal_ETF2L_Participation_Style6": "Scout",
"TF_TournamentMedal_ETF2L_Participation_Style7": "Sniper",
"TF_TournamentMedal_ETF2L_Participation_Style8": "Soldier",
"TF_TournamentMedal_ETF2L_Participation_Style9": "Spy",
"TF_TournamentMedal_ETF2L_6v6_Premiership_Gold": "ETF2L 6v6 Premiership Gold Medal",
"TF_TournamentMedal_ETF2L_6v6_Premiership_Silver": "ETF2L 6v6 Premiership Silver Medal",
"TF_TournamentMedal_ETF2L_6v6_Premiership_Bronze": "ETF2L 6v6 Premiership Bronze Medal",
"TF_TournamentMedal_ETF2L_6v6_Premiership_Participation": "ETF2L 6v6 Premiership Participation Medal",
"TF_TournamentMedal_ETF2L_6v6_Division1_Gold": "ETF2L 6v6 Division 1 Gold Medal",
"TF_TournamentMedal_ETF2L_6v6_Division1_Silver": "ETF2L 6v6 Division 1 Silver Medal",
"TF_TournamentMedal_ETF2L_6v6_Division1_Bronze": "ETF2L 6v6 Division 1 Bronze Medal",
"TF_TournamentMedal_ETF2L_6v6_Division2_Gold": "ETF2L 6v6 Division 2 Gold Medal",
"TF_TournamentMedal_ETF2L_6v6_Division2_Silver": "ETF2L 6v6 Division 2 Silver Medal",
"TF_TournamentMedal_ETF2L_6v6_Division2_Bronze": "ETF2L 6v6 Division 2 Bronze Medal",
"TF_TournamentMedal_ETF2L_6v6_Division3_Gold": "ETF2L 6v6 Division 3 Gold Medal",
"TF_TournamentMedal_ETF2L_6v6_Division3_Silver": "ETF2L 6v6 Division 3 Silver Medal",
"TF_TournamentMedal_ETF2L_6v6_Division3_Bronze": "ETF2L 6v6 Division 3 Bronze Medal",
"TF_TournamentMedal_ETF2L_6v6_Division4_Gold": "ETF2L 6v6 Division 4 Gold Medal",
"TF_TournamentMedal_ETF2L_6v6_Division4_Silver": "ETF2L 6v6 Division 4 Silver Medal",
"TF_TournamentMedal_ETF2L_6v6_Division4_Bronze": "ETF2L 6v6 Division 4 Bronze Medal",
"TF_TournamentMedal_ETF2L_6v6_Division5_Gold": "ETF2L 6v6 Division 5 Gold Medal",
"TF_TournamentMedal_ETF2L_6v6_Division5_Silver": "ETF2L 6v6 Division 5 Silver Medal",
"TF_TournamentMedal_ETF2L_6v6_Division5_Bronze": "ETF2L 6v6 Division 5 Bronze Medal",
"TF_TournamentMedal_ETF2L_6v6_High_Gold": "ETF2L 6v6 High Gold Medal",
"TF_TournamentMedal_ETF2L_6v6_High_Silver": "ETF2L 6v6 High Silver Medal",
"TF_TournamentMedal_ETF2L_6v6_High_Bronze": "ETF2L 6v6 High Bronze Medal",
"TF_TournamentMedal_ETF2L_6v6_High_Playoff": "ETF2L 6v6 High Playoff Medal",
"TF_TournamentMedal_ETF2L_6v6_High_Participation": "ETF2L 6v6 High Participation Medal",
"TF_TournamentMedal_ETF2L_6v6_Mid_Gold": "ETF2L 6v6 Mid Gold Medal",
"TF_TournamentMedal_ETF2L_6v6_Mid_Silver": "ETF2L 6v6 Mid Silver Medal",
"TF_TournamentMedal_ETF2L_6v6_Mid_Bronze": "ETF2L 6v6 Mid Bronze Medal",
"TF_TournamentMedal_ETF2L_6v6_Mid_Playoff": "ETF2L 6v6 Mid Playoff Medal",
"TF_TournamentMedal_ETF2L_6v6_Mid_Participation": "ETF2L 6v6 Mid Participation Medal",
"TF_TournamentMedal_ETF2L_6v6_Open_Gold": "ETF2L 6v6 Open Gold Medal",
"TF_TournamentMedal_ETF2L_6v6_Open_Silver": "ETF2L 6v6 Open Silver Medal",
"TF_TournamentMedal_ETF2L_6v6_Open_Bronze": "ETF2L 6v6 Open Bronze Medal",
"TF_TournamentMedal_ETF2L_6v6_Open_Playoff": "ETF2L 6v6 Open Playoff Medal",
"TF_TournamentMedal_ETF2L_6v6_Open_Participation": "ETF2L 6v6 Open Participation Medal",
"TF_TournamentMedal_ETF2L_6v6_Low_Gold": "ETF2L 6v6 Low Gold Medal",
"TF_TournamentMedal_ETF2L_6v6_Low_Silver": "ETF2L 6v6 Low Silver Medal",
"TF_TournamentMedal_ETF2L_6v6_Low_Bronze": "ETF2L 6v6 Low Bronze Medal",
"TF_TournamentMedal_ETF2L_6v6_Low_Playoff": "ETF2L 6v6 Low Playoff Medal",
"TF_TournamentMedal_ETF2L_6v6_Low_Participation": "ETF2L 6v6 Low Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Premiership_Gold": "ETF2L Highlander Premiership Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_Premiership_Silver": "ETF2L Highlander Premiership Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_Premiership_Bronze": "ETF2L Highlander Premiership Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_Premiership_Participation": "ETF2L Highlander Premiership Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_High_Gold": "ETF2L Highlander High Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_High_Silver": "ETF2L Highlander High Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_High_Bronze": "ETF2L Highlander High Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_High_Playoff": "ETF2L Highlander High Playoff Medal",
"TF_TournamentMedal_ETF2L_Highlander_High_Participation": "ETF2L Highlander High Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_HighMid_Gold": "ETF2L Highlander High/Mid Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_HighMid_Silver": "ETF2L Highlander High/Mid Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_HighMid_Bronze": "ETF2L Highlander High/Mid Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_HighMid_Playoff": "ETF2L Highlander High/Mid Playoff Medal",
"TF_TournamentMedal_ETF2L_Highlander_HighMid_Participation": "ETF2L Highlander High/Mid Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Mid_Gold": "ETF2L Highlander Mid Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_Mid_Silver": "ETF2L Highlander Mid Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_Mid_Bronze": "ETF2L Highlander Mid Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_Mid_Playoff": "ETF2L Highlander Mid Playoff Medal",
"TF_TournamentMedal_ETF2L_Highlander_Mid_Participation": "ETF2L Highlander Mid Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Low_Gold": "ETF2L Highlander Low Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_Low_Silver": "ETF2L Highlander Low Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_Low_Bronze": "ETF2L Highlander Low Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_Low_Playoff": "ETF2L Highlander Low Playoff Medal",
"TF_TournamentMedal_ETF2L_Highlander_Low_Participation": "ETF2L Highlander Low Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open_Gold": "ETF2L Highlander Open Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open_Silver": "ETF2L Highlander Open Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open_Bronze": "ETF2L Highlander Open Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open_Playoff": "ETF2L Highlander Open Playoff Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open_Participation": "ETF2L Highlander Open Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open_1st": "ETF2L Highlander Open 1st Place",
"TF_TournamentMedal_ETF2L_Highlander_Open_2nd": "ETF2L Highlander Open 2nd Place",
"TF_TournamentMedal_ETF2L_Highlander_Open_3rd": "ETF2L Highlander Open 3rd Place",
"TF_TournamentMedal_ETF2L_Highlander_Open_Participant": "ETF2L Highlander Open Participant",
"TF_TournamentMedal_ETF2L_Highlander_Open2_Gold": "ETF2L Highlander Open 2 Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open2_Silver": "ETF2L Highlander Open 2 Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open2_Bronze": "ETF2L Highlander Open 2 Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open2_Participation": "ETF2L Highlander Open 2 Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open3_Gold": "ETF2L Highlander Open 3 Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open3_Silver": "ETF2L Highlander Open 3 Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open3_Bronze": "ETF2L Highlander Open 3 Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open3_Participation": "ETF2L Highlander Open 3 Participation Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open4_Gold": "ETF2L Highlander Open 4 Gold Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open4_Silver": "ETF2L Highlander Open 4 Silver Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open4_Bronze": "ETF2L Highlander Open 4 Bronze Medal",
"TF_TournamentMedal_ETF2L_Highlander_Open4_Participation": "ETF2L Highlander Open 4 Participation Medal",
"TF_TournamentMedal_ETF2L_Meat_Challenge_Gold": "ETF2L Fresh Meat Challenge Gold Medal",
"TF_TournamentMedal_ETF2L_Meat_Challenge_Silver": "ETF2L Fresh Meat Challenge Silver Medal",
"TF_TournamentMedal_ETF2L_Meat_Challenge_Bronze": "ETF2L Fresh Meat Challenge Bronze Medal",
"TF_TournamentMedal_ETF2L_Meat_Challenge_Participant": "ETF2L Fresh Meat Challenge Participation Medal",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Premier_Division_First_Place": "OWL 10 Premier Division First Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Premier_Division_Second_Place": "OWL 10 Premier Division Second Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Premier_Division_Third_Place": "OWL 10 Premier Division Third Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Premier_Division_Participant": "OWL 10 Premier Division Participant",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division2_First_Place": "OWL 10 Division 2 First Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division2_Second_Place": "OWL 10 Division 2 Second Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division2_Third_Place": "OWL 10 Division 2 Third Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division2_Participant": "OWL 10 Division 2 Participant",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division3_First_Place": "OWL 10 Division 3 First Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division3_Second_Place": "OWL 10 Division 3 Second Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division3_Third_Place": "OWL 10 Division 3 Third Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division3_Participant": "OWL 10 Division 3 Participant",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division4_First_Place": "OWL 10 Division 4 First Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division4_Second_Place": "OWL 10 Division 4 Second Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division4_Third_Place": "OWL 10 Division 4 Third Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division4_Participant": "OWL 10 Division 4 Participant",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division5_First_Place": "OWL 10 Division 5 First Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division5_Second_Place": "OWL 10 Division 5 Second Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division5_Third_Place": "OWL 10 Division 5 Third Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division5_Participant": "OWL 10 Division 5 Participant",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division6_First_Place": "OWL 10 Division 6 First Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division6_Second_Place": "OWL 10 Division 6 Second Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division6_Third_Place": "OWL 10 Division 6 Third Place",
"TF_TournamentMedal_OzFortress_OWL10_6v6_Division6_Participant": "OWL 10 Division 6 Participant",
"TF_TournamentMedal_OzFortress_Highlander_Community_First_Place": "AU Highlander Community League First Place",
"TF_TournamentMedal_OzFortress_Highlander_Community_Second_Place": "AU Highlander Community League Second Place",
"TF_TournamentMedal_OzFortress_Highlander_Community_Third_Place": "AU Highlander Community League Third Place",
"TF_TournamentMedal_OzFortress_Highlander_Community_Participant": "AU Highlander Community League Participant",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Premier_Division_First_Place": "OWL 11 Premier Division First Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Premier_Division_Second_Place": "OWL 11 Premier Division Second Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Premier_Division_Third_Place": "OWL 11 Premier Division Third Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Premier_Division_Participant": "OWL 11 Premier Division Participant",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division2_First_Place": "OWL 11 Division 2 First Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division2_Second_Place": "OWL 11 Division 2 Second Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division2_Third_Place": "OWL 11 Division 2 Third Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division2_Participant": "OWL 11 Division 2 Participant",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division3_First_Place": "OWL 11 Division 3 First Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division3_Second_Place": "OWL 11 Division 3 Second Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division3_Third_Place": "OWL 11 Division 3 Third Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division3_Participant": "OWL 11 Division 3 Participant",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division4_First_Place": "OWL 11 Division 4 First Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division4_Second_Place": "OWL 11 Division 4 Second Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division4_Third_Place": "OWL 11 Division 4 Third Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division4_Participant": "OWL 11 Division 4 Participant",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division5_First_Place": "OWL 11 Division 5 First Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division5_Second_Place": "OWL 11 Division 5 Second Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division5_Third_Place": "OWL 11 Division 5 Third Place",
"TF_TournamentMedal_OzFortress_OWL11_6v6_Division5_Participant": "OWL 11 Division 5 Participant",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Premier_Division_First_Place": "OWL 12 Premier Division First Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Premier_Division_Second_Place": "OWL 12 Premier Division Second Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Premier_Division_Third_Place": "OWL 12 Premier Division Third Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Premier_Division_Participant": "OWL 12 Premier Division Participant",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division2_First_Place": "OWL 12 Division 2 First Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division2_Second_Place": "OWL 12 Division 2 Second Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division2_Third_Place": "OWL 12 Division 2 Third Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division2_Participant": "OWL 12 Division 2 Participant",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division3_First_Place": "OWL 12 Division 3 First Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division3_Second_Place": "OWL 12 Division 3 Second Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division3_Third_Place": "OWL 12 Division 3 Third Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division3_Participant": "OWL 12 Division 3 Participant",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division4_First_Place": "OWL 12 Division 4 First Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division4_Second_Place": "OWL 12 Division 4 Second Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division4_Third_Place": "OWL 12 Division 4 Third Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division4_Participant": "OWL 12 Division 4 Participant",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division5_First_Place": "OWL 12 Division 5 First Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division5_Second_Place": "OWL 12 Division 5 Second Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division5_Third_Place": "OWL 12 Division 5 Third Place",
"TF_TournamentMedal_OzFortress_OWL12_6v6_Division5_Participant": "OWL 12 Division 5 Participant",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Premier_Division_First_Place": "OWL 13 Premier Division First Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Premier_Division_Second_Place": "OWL 13 Premier Division Second Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Premier_Division_Third_Place": "OWL 13 Premier Division Third Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Premier_Division_Participant": "OWL 13 Premier Division Participant",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division2_First_Place": "OWL 13 Division 2 First Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division2_Second_Place": "OWL 13 Division 2 Second Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division2_Third_Place": "OWL 13 Division 2 Third Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division2_Participant": "OWL 13 Division 2 Participant",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division3_First_Place": "OWL 13 Division 3 First Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division3_Second_Place": "OWL 13 Division 3 Second Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division3_Third_Place": "OWL 13 Division 3 Third Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division3_Participant": "OWL 13 Division 3 Participant",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division4_First_Place": "OWL 13 Division 4 First Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division4_Second_Place": "OWL 13 Division 4 Second Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division4_Third_Place": "OWL 13 Division 4 Third Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division4_Participant": "OWL 13 Division 4 Participant",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division5_First_Place": "OWL 13 Division 5 First Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division5_Second_Place": "OWL 13 Division 5 Second Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division5_Third_Place": "OWL 13 Division 5 Third Place",
"TF_TournamentMedal_OzFortress_OWL13_6v6_Division5_Participant": "OWL 13 Division 5 Participant",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Premier_First_Place": "OWL 14 Premier First Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Premier_Second_Place": "OWL 14 Premier Second Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Premier_Third_Place": "OWL 14 Premier Third Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Premier_Participant": "OWL 14 Premier Participant",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division2_First_Place": "OWL 14 Division 2 First Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division2_Second_Place": "OWL 14 Division 2 Second Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division2_Third_Place": "OWL 14 Division 2 Third Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division2_Participant": "OWL 14 Division 2 Participant",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division3_First_Place": "OWL 14 Division 3 First Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division3_Second_Place": "OWL 14 Division 3 Second Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division3_Third_Place": "OWL 14 Division 3 Third Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division3_Participant": "OWL 14 Division 3 Participant",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division4_First_Place": "OWL 14 Division 4 First Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division4_Second_Place": "OWL 14 Division 4 Second Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division4_Third_Place": "OWL 14 Division 4 Third Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division4_Participant": "OWL 14 Division 4 Participant",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division5_First_Place": "OWL 14 Division 5 First Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division5_Second_Place": "OWL 14 Division 5 Second Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division5_Third_Place": "OWL 14 Division 5 Third Place",
"TF_TournamentMedal_OzFortress_OWL14_6v6_Division5_Participant": "OWL 14 Division 5 Participant",
"TF_TournamentMedal_OzFortress_Premier_First_Place": "ozfortress Sixes Premier First Place",
"TF_TournamentMedal_OzFortress_Premier_Second_Place": "ozfortress Sixes Premier Second Place",
"TF_TournamentMedal_OzFortress_Premier_Third_Place": "ozfortress Sixes Premier Third Place",
"TF_TournamentMedal_OzFortress_Premier_Participant": "ozfortress Sixes Premier Participant",
"TF_TournamentMedal_OzFortress_High_First_Place": "ozfortress Sixes High First Place",
"TF_TournamentMedal_OzFortress_High_Second_Place": "ozfortress Sixes High Second Place",
"TF_TournamentMedal_OzFortress_High_Third_Place": "ozfortress Sixes High Third Place",
"TF_TournamentMedal_OzFortress_High_Participant": "ozfortress Sixes High Participant",
"TF_TournamentMedal_OzFortress_Intermediate_First_Place": "ozfortress Sixes Intermediate First Place",
"TF_TournamentMedal_OzFortress_Intermediate_Second_Place": "ozfortress Sixes Intermediate Second Place",
"TF_TournamentMedal_OzFortress_Intermediate_Third_Place": "ozfortress Sixes Intermediate Third Place",
"TF_TournamentMedal_OzFortress_Intermediate_Participant": "ozfortress Sixes Intermediate Participant",
"TF_TournamentMedal_OzFortress_Main_First_Place": "ozfortress Sixes Main First Place",
"TF_TournamentMedal_OzFortress_Main_Second_Place": "ozfortress Sixes Main Second Place",
"TF_TournamentMedal_OzFortress_Main_Third_Place": "ozfortress Sixes Main Third Place",
"TF_TournamentMedal_OzFortress_Main_Participant": "ozfortress Sixes Main Participant",
"TF_TournamentMedal_OzFortress_Open_First_Place": "ozfortress Sixes Open First Place",
"TF_TournamentMedal_OzFortress_Open_Second_Place": "ozfortress Sixes Open Second Place",
"TF_TournamentMedal_OzFortress_Open_Third_Place": "ozfortress Sixes Open Third Place",
"TF_TournamentMedal_OzFortress_Open_Participant": "ozfortress Sixes Open Participant",
"TF_TournamentMedal_OzFortress_SummerCup_First_Place": "ozfortress Summer Cup First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Second_Place": "ozfortress Summer Cup Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Third_Place": "ozfortress Summer Cup Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Participant": "ozfortress Summer Cup Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Division1_First_Place": "ozfortress Summer Cup Division 1 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Division1_Second_Place": "ozfortress Summer Cup Division 1 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Division1_Third_Place": "ozfortress Summer Cup Division 1 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Division1_Participant": "ozfortress Summer Cup Division 1 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Division2_First_Place": "ozfortress Summer Cup Division 2 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Division2_Second_Place": "ozfortress Summer Cup Division 2 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Division2_Third_Place": "ozfortress Summer Cup Division 2 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Division2_Participant": "ozfortress Summer Cup Division 2 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Division3_First_Place": "ozfortress Summer Cup Division 3 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Division3_Second_Place": "ozfortress Summer Cup Division 3 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Division3_Third_Place": "ozfortress Summer Cup Division 3 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Division3_Participant": "ozfortress Summer Cup Division 3 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Division4_First_Place": "ozfortress Summer Cup Division 4 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Division4_Second_Place": "ozfortress Summer Cup Division 4 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Division4_Third_Place": "ozfortress Summer Cup Division 4 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Division4_Participant": "ozfortress Summer Cup Division 4 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division1_First_Place": "ozfortress Summer Cup Sixes Division 1 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division1_Second_Place": "ozfortress Summer Cup Sixes Division 1 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division1_Third_Place": "ozfortress Summer Cup Sixes Division 1 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division1_Participant": "ozfortress Summer Cup Sixes Division 1 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division2_First_Place": "ozfortress Summer Cup Sixes Division 2 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division2_Second_Place": "ozfortress Summer Cup Sixes Division 2 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division2_Third_Place": "ozfortress Summer Cup Sixes Division 2 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division2_Participant": "ozfortress Summer Cup Sixes Division 2 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division3_First_Place": "ozfortress Summer Cup Sixes Division 3 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division3_Second_Place": "ozfortress Summer Cup Sixes Division 3 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division3_Third_Place": "ozfortress Summer Cup Sixes Division 3 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division3_Participant": "ozfortress Summer Cup Sixes Division 3 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division4_First_Place": "ozfortress Summer Cup Sixes Division 4 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division4_Second_Place": "ozfortress Summer Cup Sixes Division 4 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division4_Third_Place": "ozfortress Summer Cup Sixes Division 4 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division4_Participant": "ozfortress Summer Cup Sixes Division 4 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division5_First_Place": "ozfortress Summer Cup Sixes Division 5 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division5_Second_Place": "ozfortress Summer Cup Sixes Division 5 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division5_Third_Place": "ozfortress Summer Cup Sixes Division 5 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Sixes_Division5_Participant": "ozfortress Summer Cup Sixes Division 5 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Highlander_Division1_First_Place": "ozfortress Summer Cup Highlander Division 1 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Highlander_Division1_Second_Place": "ozfortress Summer Cup Highlander Division 1 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Highlander_Division1_Third_Place": "ozfortress Summer Cup Highlander Division 1 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Highlander_Division1_Participant": "ozfortress Summer Cup Highlander Division 1 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Highlander_Division2_First_Place": "ozfortress Summer Cup Highlander Division 2 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Highlander_Division2_Second_Place": "ozfortress Summer Cup Highlander Division 2 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Highlander_Division2_Third_Place": "ozfortress Summer Cup Highlander Division 2 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Highlander_Division2_Participant": "ozfortress Summer Cup Highlander Division 2 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Highlander_Division3_First_Place": "ozfortress Summer Cup Highlander Division 3 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Highlander_Division3_Second_Place": "ozfortress Summer Cup Highlander Division 3 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Highlander_Division3_Third_Place": "ozfortress Summer Cup Highlander Division 3 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Highlander_Division3_Participant": "ozfortress Summer Cup Highlander Division 3 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Fours_Division1_First_Place": "ozfortress Fours Summer Cup Division 1 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Fours_Division1_Second_Place": "ozfortress Fours Summer Cup Division 1 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Fours_Division1_Third_Place": "ozfortress Fours Summer Cup Division 1 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Fours_Division1_Participant": "ozfortress Fours Summer Cup Division 1 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Fours_Division2_First_Place": "ozfortress Fours Summer Cup Division 2 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Fours_Division2_Second_Place": "ozfortress Fours Summer Cup Division 2 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Fours_Division2_Third_Place": "ozfortress Fours Summer Cup Division 2 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Fours_Division2_Participant": "ozfortress Fours Summer Cup Division 2 Participant",
"TF_TournamentMedal_OzFortress_SummerCup_Fours_Division3_First_Place": "ozfortress Fours Summer Cup Division 3 First Place",
"TF_TournamentMedal_OzFortress_SummerCup_Fours_Division3_Second_Place": "ozfortress Fours Summer Cup Division 3 Second Place",
"TF_TournamentMedal_OzFortress_SummerCup_Fours_Division3_Third_Place": "ozfortress Fours Summer Cup Division 3 Third Place",
"TF_TournamentMedal_OzFortress_SummerCup_Fours_Division3_Participant": "ozfortress Fours Summer Cup Division 3 Participant",
"TF_TournamentMedal_OzFortress_Winter_Div1_First_Place": "ozfortress Winter League Division 1 First Place",
"TF_TournamentMedal_OzFortress_Winter_Div1_Second_Place": "ozfortress Winter League Division 1 Second Place",
"TF_TournamentMedal_OzFortress_Winter_Div1_Third_Place": "ozfortress Winter League Division 1 Third Place",
"TF_TournamentMedal_OzFortress_Winter_Div1_Participant": "ozfortress Winter League Division 1 Participant",
"TF_TournamentMedal_OzFortress_Winter_Div2_First_Place": "ozfortress Winter League Division 2 First Place",
"TF_TournamentMedal_OzFortress_Winter_Div2_Second_Place": "ozfortress Winter League Division 2 Second Place",
"TF_TournamentMedal_OzFortress_Winter_Div2_Third_Place": "ozfortress Winter League Division 2 Third Place",
"TF_TournamentMedal_OzFortress_Winter_Div2_Participant": "ozfortress Winter League Division 2 Participant",
"TF_TournamentMedal_OzFortress_Winter_Div3_First_Place": "ozfortress Winter League Division 3 First Place",
"TF_TournamentMedal_OzFortress_Winter_Div3_Second_Place": "ozfortress Winter League Division 3 Second Place",
"TF_TournamentMedal_OzFortress_Winter_Div3_Third_Place": "ozfortress Winter League Division 3 Third Place",
"TF_TournamentMedal_OzFortress_Winter_Div3_Participant": "ozfortress Winter League Division 3 Participant",
"TF_TournamentMedal_OzFortress_Winter_Div4_First_Place": "ozfortress Winter League Division 4 First Place",
"TF_TournamentMedal_OzFortress_Winter_Div4_Second_Place": "ozfortress Winter League Division 4 Second Place",
"TF_TournamentMedal_OzFortress_Winter_Div4_Third_Place": "ozfortress Winter League Division 4 Third Place",
"TF_TournamentMedal_OzFortress_Winter_Div4_Participant": "ozfortress Winter League Division 4 Participant",
"TF_TournamentMedal_OzFortress_Highlander_Premier_First_Place": "ozfortress Highlander Premier First Place",
"TF_TournamentMedal_OzFortress_Highlander_Premier_Second_Place": "ozfortress Highlander Premier Second Place",
"TF_TournamentMedal_OzFortress_Highlander_Premier_Third_Place": "ozfortress Highlander Premier Third Place",
"TF_TournamentMedal_OzFortress_Highlander_Premier_Participant": "ozfortress Highlander Premier Participant",
"TF_TournamentMedal_OzFortress_Highlander_Intermediate_First_Place": "ozfortress Highlander Intermediate First Place",
"TF_TournamentMedal_OzFortress_Highlander_Intermediate_Second_Place": "ozfortress Highlander Intermediate Second Place",
"TF_TournamentMedal_OzFortress_Highlander_Intermediate_Third_Place": "ozfortress Highlander Intermediate Third Place",
"TF_TournamentMedal_OzFortress_Highlander_Intermediate_Participant": "ozfortress Highlander Intermediate Participant",
"TF_TournamentMedal_OzFortress_Highlander_Open_First_Place": "ozfortress Highlander Open First Place",
"TF_TournamentMedal_OzFortress_Highlander_Open_Second_Place": "ozfortress Highlander Open Second Place",
"TF_TournamentMedal_OzFortress_Highlander_Open_Third_Place": "ozfortress Highlander Open Third Place",
"TF_TournamentMedal_OzFortress_Highlander_Open_Participant": "ozfortress Highlander Open Participant",
"TF_TournamentMedal_OzFortress_Highlander_Main_First_Place": "ozfortress Highlander Main First Place",
"TF_TournamentMedal_OzFortress_Highlander_Main_Second_Place": "ozfortress Highlander Main Second Place",
"TF_TournamentMedal_OzFortress_Highlander_Main_Third_Place": "ozfortress Highlander Main Third Place",
"TF_TournamentMedal_OzFortress_Highlander_Main_Participant": "ozfortress Highlander Main Participant",
"TF_TournamentMedal_OzFortress_ExpCup2_Div1_First_Place": "ozfortress Experimental Cup 2 Division 1 First Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div1_Second_Place": "ozfortress Experimental Cup 2 Division 1 Second Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div1_Third_Place": "ozfortress Experimental Cup 2 Division 1 Third Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div1_Participant": "ozfortress Experimental Cup 2 Division 1 Participant",
"TF_TournamentMedal_OzFortress_ExpCup2_Div2_First_Place": "ozfortress Experimental Cup 2 Division 2 First Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div2_Second_Place": "ozfortress Experimental Cup 2 Division 2 Second Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div2_Third_Place": "ozfortress Experimental Cup 2 Division 2 Third Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div2_Participant": "ozfortress Experimental Cup 2 Division 2 Participant",
"TF_TournamentMedal_OzFortress_ExpCup2_Div3_First_Place": "ozfortress Experimental Cup 2 Division 3 First Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div3_Second_Place": "ozfortress Experimental Cup 2 Division 3 Second Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div3_Third_Place": "ozfortress Experimental Cup 2 Division 3 Third Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div3_Participant": "ozfortress Experimental Cup 2 Division 3 Participant",
"TF_TournamentMedal_OzFortress_ExpCup2_Div4_First_Place": "ozfortress Experimental Cup 2 Division 4 First Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div4_Second_Place": "ozfortress Experimental Cup 2 Division 4 Second Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div4_Third_Place": "ozfortress Experimental Cup 2 Division 4 Third Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div4_Participant": "ozfortress Experimental Cup 2 Division 4 Participant",
"TF_TournamentMedal_OzFortress_ExpCup2_Div5_First_Place": "ozfortress Experimental Cup 2 Division 5 First Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div5_Second_Place": "ozfortress Experimental Cup 2 Division 5 Second Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div5_Third_Place": "ozfortress Experimental Cup 2 Division 5 Third Place",
"TF_TournamentMedal_OzFortress_ExpCup2_Div5_Participant": "ozfortress Experimental Cup 2 Division 5 Participant",
"TF_TournamentMedal_OzFortress_ExpCup3_Div1_First_Place": "ozfortress Experimental Cup 3 Division 1 First Place",
"TF_TournamentMedal_OzFortress_ExpCup3_Div1_Second_Place": "ozfortress Experimental Cup 3 Division 1 Second Place",
"TF_TournamentMedal_OzFortress_ExpCup3_Div1_Third_Place": "ozfortress Experimental Cup 3 Division 1 Third Place",
"TF_TournamentMedal_OzFortress_ExpCup3_Div1_Participant": "ozfortress Experimental Cup 3 Division 1 Participant",
"TF_TournamentMedal_OzFortress_ExpCup3_Div2_First_Place": "ozfortress Experimental Cup 3 Division 2 First Place",
"TF_TournamentMedal_OzFortress_ExpCup3_Div2_Second_Place": "ozfortress Experimental Cup 3 Division 2 Second Place",
"TF_TournamentMedal_OzFortress_ExpCup3_Div2_Third_Place": "ozfortress Experimental Cup 3 Division 2 Third Place",
"TF_TournamentMedal_OzFortress_ExpCup3_Div2_Participant": "ozfortress Experimental Cup 3 Division 2 Participant",
"TF_TournamentMedal_OzFortress_ExpCup3_Div3_First_Place": "ozfortress Experimental Cup 3 Division 3 First Place",
"TF_TournamentMedal_OzFortress_ExpCup3_Div3_Second_Place": "ozfortress Experimental Cup 3 Division 3 Second Place",
"TF_TournamentMedal_OzFortress_ExpCup3_Div3_Third_Place": "ozfortress Experimental Cup 3 Division 3 Third Place",
"TF_TournamentMedal_OzFortress_ExpCup3_Div3_Participant": "ozfortress Experimental Cup 3 Division 3 Participant",
"TF_TournamentMedal_OzFortress_ExpCup3_Div4_First_Place": "ozfortress Experimental Cup 3 Division 4 First Place",
"TF_TournamentMedal_OzFortress_ExpCup3_Div4_Second_Place": "ozfortress Experimental Cup 3 Division 4 Second Place",
"TF_TournamentMedal_OzFortress_ExpCup3_Div4_Third_Place": "ozfortress Experimental Cup 3 Division 4 Third Place",
"TF_TournamentMedal_OzFortress_ExpCup3_Div4_Participant": "ozfortress Experimental Cup 3 Division 4 Participant",
"TF_TournamentMedal_OzFortress_MayMadness_Finalist": "ozfortress May Madness Finalist",
"TF_TournamentMedal_OzFortress_MayMadness_Participant": "ozfortress May Madness Participant",
"TF_TournamentMedal_LBTF2_6v6_Elite_1st": "LBTF2 6v6 Elite 1st Place",
"TF_TournamentMedal_LBTF2_6v6_Elite_2nd": "LBTF2 6v6 Elite 2nd Place",
"TF_TournamentMedal_LBTF2_6v6_Elite_3rd": "LBTF2 6v6 Elite 3rd Place",
"TF_TournamentMedal_LBTF2_6v6_Elite_Participant": "LBTF2 6v6 Elite Participant",
"TF_TournamentMedal_LBTF2_6v6_Central_1st": "LBTF2 6v6 Central 1st Place",
"TF_TournamentMedal_LBTF2_6v6_Central_2nd": "LBTF2 6v6 Central 2nd Place",
"TF_TournamentMedal_LBTF2_6v6_Central_3rd": "LBTF2 6v6 Central 3rd Place",
"TF_TournamentMedal_LBTF2_6v6_Central_Participant": "LBTF2 6v6 Central Participant",
"TF_TournamentMedal_LBTF2_6v6_Access_1st": "LBTF2 6v6 Access 1st Place",
"TF_TournamentMedal_LBTF2_6v6_Access_2nd": "LBTF2 6v6 Access 2nd Place",
"TF_TournamentMedal_LBTF2_6v6_Access_3rd": "LBTF2 6v6 Access 3rd Place",
"TF_TournamentMedal_LBTF2_6v6_Access_Participant": "LBTF2 6v6 Access Participant",
"TF_TournamentMedal_LBTF2_6v6_Open_1st": "LBTF2 6v6 Open 1st Place",
"TF_TournamentMedal_LBTF2_6v6_Open_2nd": "LBTF2 6v6 Open 2nd Place",
"TF_TournamentMedal_LBTF2_6v6_Open_3rd": "LBTF2 6v6 Open 3rd Place",
"TF_TournamentMedal_LBTF2_6v6_Open_Participant": "LBTF2 6v6 Open Participant",
"TF_TournamentMedal_LBTF2_6v6_Beginner_1st": "LBTF2 6v6 Beginner 1st Place",
"TF_TournamentMedal_LBTF2_6v6_Beginner_2nd": "LBTF2 6v6 Beginner 2nd Place",
"TF_TournamentMedal_LBTF2_6v6_Beginner_3rd": "LBTF2 6v6 Beginner 3rd Place",
"TF_TournamentMedal_LBTF2_6v6_Beginner_Participant": "LBTF2 6v6 Beginner Participant",
"TF_TournamentMedal_LBTF2_Highlander_1st": "LBTF2 Highlander 1st Place",
"TF_TournamentMedal_LBTF2_Highlander_2nd": "LBTF2 Highlander 2nd Place",
"TF_TournamentMedal_LBTF2_Highlander_3rd": "LBTF2 Highlander 3rd Place",
"TF_TournamentMedal_LBTF2_Highlander_Participant": "LBTF2 Highlander Participant",
"TF_TournamentMedal_LBTF2_Highlander_Access_1st": "LBTF2 Highlander Access 1st Place",
"TF_TournamentMedal_LBTF2_Highlander_Access_2nd": "LBTF2 Highlander Access 2nd Place",
"TF_TournamentMedal_LBTF2_Highlander_Access_3rd": "LBTF2 Highlander Access 3rd Place",
"TF_TournamentMedal_LBTF2_Highlander_Access_Participant": "LBTF2 Highlander Access Participant",
"TF_TournamentMedal_LBTF2_Highlander_Principal_1st": "LBTF2 Highlander Principal 1st Place",
"TF_TournamentMedal_LBTF2_Highlander_Principal_2nd": "LBTF2 Highlander Principal 2nd Place",
"TF_TournamentMedal_LBTF2_Highlander_Principal_3rd": "LBTF2 Highlander Principal 3rd Place",
"TF_TournamentMedal_LBTF2_Highlander_Principal_Participant": "LBTF2 Highlander Principal Participant",
"TF_TournamentMedal_LBTF2_Highlander_Open_1st": "LBTF2 Highlander Open 1st Place",
"TF_TournamentMedal_LBTF2_Highlander_Open_2nd": "LBTF2 Highlander Open 2nd Place",
"TF_TournamentMedal_LBTF2_Highlander_Open_3rd": "LBTF2 Highlander Open 3rd Place",
"TF_TournamentMedal_LBTF2_Highlander_Open_Participant": "LBTF2 Highlander Open Participant",
"TF_TournamentMedal_LBTF2_Highlander_Main_1st": "LBTF2 Highlander Main 1st Place",
"TF_TournamentMedal_LBTF2_Highlander_Main_2nd": "LBTF2 Highlander Main 2nd Place",
"TF_TournamentMedal_LBTF2_Highlander_Main_3rd": "LBTF2 Highlander Main 3rd Place",
"TF_TournamentMedal_LBTF2_Highlander_Main_Participant": "LBTF2 Highlander Main Participant",
"TF_TournamentMedal_LBTF2_Highlander_Central_1st": "LBTF2 Highlander Central 1st Place",
"TF_TournamentMedal_LBTF2_Highlander_Central_2nd": "LBTF2 Highlander Central 2nd Place",
"TF_TournamentMedal_LBTF2_Highlander_Central_3rd": "LBTF2 Highlander Central 3rd Place",
"TF_TournamentMedal_LBTF2_Highlander_Central_Participant": "LBTF2 Highlander Central Participant",
"TF_TournamentMedal_LBTF2_Highlander_Elite_1st": "LBTF2 Highlander Elite 1st Place",
"TF_TournamentMedal_LBTF2_Highlander_Elite_2nd": "LBTF2 Highlander Elite 2nd Place",
"TF_TournamentMedal_LBTF2_Highlander_Elite_3rd": "LBTF2 Highlander Elite 3rd Place",
"TF_TournamentMedal_LBTF2_Highlander_Elite_Participant": "LBTF2 Highlander Elite Participant",
"TF_TournamentMedal_FBTF_Cup_6v6_Wastex_Miller_1st": "FBTF Cup 6v6 Wastex Miller 1st Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Wastex_Miller_2nd": "FBTF Cup 6v6 Wastex Miller 2nd Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Wastex_Miller_3rd": "FBTF Cup 6v6 Wastex Miller 3rd Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Wastex_Miller_Participant": "FBTF Cup 6v6 Wastex Miller Participant",
"TF_TournamentMedal_FBTF_Cup_6v6_Barts_Rimet_1st": "FBTF Cup 6v6 Barts Rimet 1st Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Barts_Rimet_2nd": "FBTF Cup 6v6 Barts Rimet 2nd Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Barts_Rimet_3rd": "FBTF Cup 6v6 Barts Rimet 3rd Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Barts_Rimet_Participant": "FBTF Cup 6v6 Barts Rimet Participant",
"TF_TournamentMedal_FBTF_Cup_6v6_Vic_Basten_1st": "FBTF Cup 6v6 Vic Basten 1st Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Vic_Basten_2nd": "FBTF Cup 6v6 Vic Basten 2nd Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Vic_Basten_3rd": "FBTF Cup 6v6 Vic Basten 3rd Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Vic_Basten_Participant": "FBTF Cup 6v6 Vic Basten Participant",
"TF_TournamentMedal_FBTF_Cup_6v6_Ghosten_Tuchel_1st": "FBTF Cup 6v6 Ghosten Tüchel 1st Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Ghosten_Tuchel_2nd": "FBTF Cup 6v6 Ghosten Tüchel 2nd Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Ghosten_Tuchel_3rd": "FBTF Cup 6v6 Ghosten Tüchel 3rd Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Ghosten_Tuchel_Participant": "FBTF Cup 6v6 Ghosten Tüchel Participant",
"TF_TournamentMedal_FBTF_Cup_6v6_Joten_Klopp_1st": "FBTF Cup 6v6 Jöten Klopp 1st Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Joten_Klopp_2nd": "FBTF Cup 6v6 Jöten Klopp 2nd Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Joten_Klopp_3rd": "FBTF Cup 6v6 Jöten Klopp 3rd Place",
"TF_TournamentMedal_FBTF_Cup_6v6_Joten_Klopp_Participant": "FBTF Cup 6v6 Jöten Klopp Participant",
"TF_TournamentMedal_FBTF2_4v4_Elite_1st": "FBTF 4v4 Elite 1st Place",
"TF_TournamentMedal_FBTF2_4v4_Elite_2nd": "FBTF 4v4 Elite 2nd Place",
"TF_TournamentMedal_FBTF2_4v4_Elite_3rd": "FBTF 4v4 Elite 3rd Place",
"TF_TournamentMedal_FBTF2_4v4_Elite_Participant": "FBTF 4v4 Elite Participant",
"TF_TournamentMedal_FBTF2_4v4_Access_1st": "FBTF 4v4 Access 1st Place",
"TF_TournamentMedal_FBTF2_4v4_Access_2nd": "FBTF 4v4 Access 2nd Place",
"TF_TournamentMedal_FBTF2_4v4_Access_3rd": "FBTF 4v4 Access 3rd Place",
"TF_TournamentMedal_FBTF2_4v4_Access_Participant": "FBTF 4v4 Access Participant",
"TF_TournamentMedal_FBTF2_4v4_Open_1st": "FBTF 4v4 Open 1st Place",
"TF_TournamentMedal_FBTF2_4v4_Open_2nd": "FBTF 4v4 Open 2nd Place",
"TF_TournamentMedal_FBTF2_4v4_Open_3rd": "FBTF 4v4 Open 3rd Place",
"TF_TournamentMedal_FBTF2_4v4_Open_Participant": "FBTF 4v4 Open Participant",
"TF_TournamentMedal_FBTF2_4v4_PassTime_1st": "FBTF 4v4 PASS Time 1st Place",
"TF_TournamentMedal_FBTF2_4v4_PassTime_2nd": "FBTF 4v4 PASS Time 2nd Place",
"TF_TournamentMedal_FBTF2_4v4_PassTime_3rd": "FBTF 4v4 PASS Time 3rd Place",
"TF_TournamentMedal_FBTF2_4v4_PassTime_Participant": "FBTF 4v4 PASS Time Participant",
"TF_TournamentMedal_Chapelaria_6v6_1st": "Chapelaria 6v6 1st Place",
"TF_TournamentMedal_Chapelaria_6v6_2nd": "Chapelaria 6v6 2nd Place",
"TF_TournamentMedal_Chapelaria_6v6_3rd": "Chapelaria 6v6 3rd Place",
"TF_TournamentMedal_Chapelaria_6v6_Participant": "Chapelaria 6v6 Participant",
"TF_TournamentMedal_Chapelaria_6v6_Legatus_1st": "Chapelaria 6v6 Legatus 1st Place",
"TF_TournamentMedal_Chapelaria_6v6_Legatus_2nd": "Chapelaria 6v6 Legatus 2nd Place",
"TF_TournamentMedal_Chapelaria_6v6_Legatus_3rd": "Chapelaria 6v6 Legatus 3rd Place",
"TF_TournamentMedal_Chapelaria_6v6_Legatus_Participant": "Chapelaria 6v6 Legatus Participant",
"TF_TournamentMedal_Chapelaria_6v6_Gladiator_1st": "Chapelaria 6v6 Gladiator 1st Place",
"TF_TournamentMedal_Chapelaria_6v6_Gladiator_2nd": "Chapelaria 6v6 Gladiator 2nd Place",
"TF_TournamentMedal_Chapelaria_6v6_Gladiator_3rd": "Chapelaria 6v6 Gladiator 3rd Place",
"TF_TournamentMedal_Chapelaria_6v6_Gladiator_Participant": "Chapelaria 6v6 Gladiator Participant",
"TF_TournamentMedal_Chapelaria_Ultiduo_Gladiator_1st": "Chapelaria Ultiduo Gladiator 1st Place",
"TF_TournamentMedal_Chapelaria_Ultiduo_Gladiator_2nd": "Chapelaria Ultiduo Gladiator 2nd Place",
"TF_TournamentMedal_Chapelaria_Ultiduo_Gladiator_3rd": "Chapelaria Ultiduo Gladiator 3rd Place",
"TF_TournamentMedal_Chapelaria_Ultiduo_Gladiator_Participant": "Chapelaria Ultiduo Gladiator Participant",
"TF_TournamentMedal_Chapelaria_Ultiduo_Brazuca_Winner": "Chapelaria Ultiduo Brazuca Winner",
"TF_TournamentMedal_Chapelaria_Ultiduo_Brazuca_Participant": "Chapelaria Ultiduo Brazuca Participant",
"TF_TournamentMedal_Chapelaria_Ultiduo_Hermanos_Winner": "Chapelaria Ultiduo Hermanos Winner",
"TF_TournamentMedal_Chapelaria_Ultiduo_Hermanos_Participant": "Chapelaria Ultiduo Hermanos Participant",
"TF_TournamentMedal_Chapelaria_Ultiduo_Legatus_1st": "Chapelaria Ultiduo Legatus 1st Place",
"TF_TournamentMedal_Chapelaria_Ultiduo_Legatus_2nd": "Chapelaria Ultiduo Legatus 2nd Place",
"TF_TournamentMedal_Chapelaria_Ultiduo_Legatus_3rd": "Chapelaria Ultiduo Legatus 3rd Place",
"TF_TournamentMedal_Chapelaria_Ultiduo_Legatus_Participant": "Chapelaria Ultiduo Legatus Participant",
"TF_TournamentMedal_RallyCall_Charity_2017_Gold": "Rally Call 2017 - 1st place Medal",
"TF_TournamentMedal_RallyCall_Charity_2017_Gold_Desc": "This prestigious piece of jacket jewellery was given to the winning team in the Rally Call Charity 6's Tournament. Fear them!",
"TF_TournamentMedal_RallyCall_Charity_2017_Silver": "Rally Call 2017 - 2nd Place Medal",
"TF_TournamentMedal_RallyCall_Charity_2017_Silver_Desc": "The owner of this medal got close to being in the winning team for Rally Call Charity 6's Tournament but couldn't cut it, maybe next time.",
"TF_TournamentMedal_RallyCall_Charity_2017_White": "Rally Call 2017 Participant/Helper Medal",
"TF_TournamentMedal_RallyCall_Charity_2017_White_Desc": "Losers say it's not winning but taking part that counts, well these guys certainly counted as they helped the event happen and deserve a pat on the back.",
"TF_TournamentMedal_RallyCall_Charity_2017_Purple": "Rally Call 2017 Donator Medal",
"TF_TournamentMedal_RallyCall_Charity_2017_Purple_Desc": "They say those that give are destined to receive, let's just hope it isn't a crit rocket.\nThe owner of this medal gave money to help animals around the world.",
"TF_TournamentMedal_RallyCall_Charity_2018_Whale": "Rally Call - Whale",
"TF_TournamentMedal_RallyCall_Charity_2018_WhaleDonor": "Rally Call - Whale Donor",
"TF_TournamentMedal_RGB_LAN_Gold": "RGB LAN 1st Place",
"TF_TournamentMedal_RGB_LAN_Silver": "RGB LAN 2nd Place",
"TF_TournamentMedal_RGB_LAN_Bronze": "RGB LAN 3rd Place",
"TF_TournamentMedal_RGB_LAN_Participant": "RGB LAN Participant",
"TF_TournamentMedal_RGB3_LAN_Gold": "RGB 3 LAN 1st Place",
"TF_TournamentMedal_RGB3_LAN_Silver": "RGB 3 LAN 2nd Place",
"TF_TournamentMedal_RGB3_LAN_Bronze": "RGB 3 LAN 3rd Place",
"TF_TournamentMedal_RGB3_LAN_Participant": "RGB 3 LAN Participant",
"TF_TournamentMedal_RGB4_LAN_Gold": "RGB 4 LAN 1st Place",
"TF_TournamentMedal_RGB4_LAN_Silver": "RGB 4 LAN 2nd Place",
"TF_TournamentMedal_RGB4_LAN_Bronze": "RGB 4 LAN 3rd Place",
"TF_TournamentMedal_RGB4_LAN_Participant": "RGB 4 LAN Participant",
"TF_TournamentMedal_RGB6_LAN_Gold": "RGB 6 LAN 1st Place",
"TF_TournamentMedal_RGB6_LAN_Silver": "RGB 6 LAN 2nd Place",
"TF_TournamentMedal_RGB6_LAN_Bronze": "RGB 6 LAN 3rd Place",
"TF_TournamentMedal_RGB6_LAN_Participant": "RGB 6 LAN Participant",
"TF_TournamentMedal_RGB7_LAN_Gold": "RGB 7 LAN 1st Place",
"TF_TournamentMedal_RGB7_LAN_Silver": "RGB 7 LAN 2nd Place",
"TF_TournamentMedal_RGB7_LAN_Bronze": "RGB 7 LAN 3rd Place",
"TF_TournamentMedal_RGB7_LAN_Participant": "RGB 7 LAN Participant",
"TF_TournamentMedal_Season1": "Season 1",
"TF_TournamentMedal_Season2": "Season 2",
"TF_TournamentMedal_Season3": "Season 3",
"TF_TournamentMedal_Season4": "Season 4",
"TF_TournamentMedal_Season5": "Season 5",
"TF_TournamentMedal_Season6": "Season 6",
"TF_TournamentMedal_Season7": "Season 7",
"TF_TournamentMedal_Season8": "Season 8",
"TF_TournamentMedal_Season9": "Season 9",
"TF_TournamentMedal_Season10": "Season 10",
"TF_TournamentMedal_Season11": "Season 11",
"TF_TournamentMedal_Season12": "Season 12",
"TF_TournamentMedal_Season13": "Season 13",
"TF_TournamentMedal_Season14": "Season 14",
"TF_TournamentMedal_Season15": "Season 15",
"TF_TournamentMedal_Season16": "Season 16",
"TF_TournamentMedal_Season17": "Season 17",
"TF_TournamentMedal_Season18": "Season 18",
"TF_TournamentMedal_Season19": "Season 19",
"TF_TournamentMedal_Season20": "Season 20",
"TF_TournamentMedal_Season21": "Season 21",
"TF_TournamentMedal_Season22": "Season 22",
"TF_TournamentMedal_Season23": "Season 23",
"TF_TournamentMedal_Season24": "Season 24",
"TF_TournamentMedal_Season25": "Season 25",
"TF_TournamentMedal_Season26": "Season 26",
"TF_TournamentMedal_Season27": "Season 27",
"TF_TournamentMedal_Season28": "Season 28",
"TF_TournamentMedal_Season29": "Season 29",
"TF_TournamentMedal_Season30": "Season 30",
"TF_TournamentMedal_Season31": "Season 31",
"TF_TournamentMedal_Season32": "Season 32",
"TF_TournamentMedal_Season33": "Season 33",
"TF_TournamentMedal_Season34": "Season 34",
"TF_TournamentMedal_Season35": "Season 35",
"TF_TournamentMedal_Season36": "Season 36",
"TF_TournamentMedal_Season37": "Season 37",
"TF_TournamentMedal_Season38": "Season 38",
"TF_TournamentMedal_Season39": "Season 39",
"TF_TournamentMedal_Season40": "Season 40",
"TF_TournamentMedal_Season41": "Season 41",
"TF_TournamentMedal_Season42": "Season 42",
"TF_TournamentMedal_Season43": "Season 43",
"TF_TournamentMedal_Season44": "Season 44",
"TF_TournamentMedal_Season45": "Season 45",
"TF_TournamentMedal_Season46": "Season 46",
"TF_TournamentMedal_Season47": "Season 47",
"TF_TournamentMedal_Season48": "Season 48",
"TF_TournamentMedal_Season49": "Season 49",
"TF_TournamentMedal_Season50": "Season 50",
"TF_TournamentMedal_2013": "2013",
"TF_TournamentMedal_2014": "2014",
"TF_TournamentMedal_2015": "2015",
"TF_TournamentMedal_2016": "2016",
"TF_TournamentMedal_2017": "2017",
"TF_TournamentMedal_2018": "2018",
"TF_TournamentMedal_2019": "2019",
"TF_TournamentMedal_2020": "2020",
"TF_TournamentMedal_2021": "2021",
"TF_TournamentMedal_2022": "2022",
"TF_TournamentMedal_2023": "2023",
"TF_TournamentMedal_2024": "2024",
"TF_TournamentMedal_2025": "2025",
"TF_TournamentMedal_2026": "2026",
"TF_TournamentMedal_2027": "2027",
"TF_TournamentMedal_Summer2017": "Summer 2017",
"TF_TournamentMedal_Winter2017": "Winter 2017",
"TF_TournamentMedal_Spring2018": "Spring 2018",
"TF_TournamentMedal_Summer2018": "Summer 2018",
"TF_TournamentMedal_Autumn2018": "Autumn 2018",
"TF_TournamentMedal_Winter2018": "Winter 2018",
"TF_TournamentMedal_Spring2019": "Spring 2019",
"TF_TournamentMedal_Summer2019": "Summer 2019",
"TF_TournamentMedal_Autumn2019": "Autumn 2019",
"TF_TournamentMedal_Winter2019": "Winter 2019",
"TF_TournamentMedal_Spring2020": "Spring 2020",
"TF_TournamentMedal_Summer2020": "Summer 2020",
"TF_TournamentMedal_Autumn2020": "Autumn 2020",
"TF_TournamentMedal_Winter2020": "Winter 2020",
"TF_TournamentMedal_Spring2021": "Spring 2021",
"TF_TournamentMedal_Summer2021": "Summer 2021",
"TF_TournamentMedal_Autumn2021": "Autumn 2021",
"TF_TournamentMedal_Winter2021": "Winter 2021",
"TF_TournamentMedal_Spring2022": "Spring 2022",
"TF_TournamentMedal_Summer2022": "Summer 2022",
"TF_TournamentMedal_Autumn2022": "Autumn 2022",
"TF_TournamentMedal_Winter2022": "Winter 2022",
"TF_TournamentMedal_Spring2023": "Spring 2023",
"TF_TournamentMedal_Summer2023": "Summer 2023",
"TF_TournamentMedal_Autumn2023": "Autumn 2023",
"TF_TournamentMedal_Winter2023": "Winter 2023",
"TF_TournamentMedal_Spring2024": "Spring 2024",
"TF_TournamentMedal_Summer2024": "Summer 2024",
"TF_TournamentMedal_Autumn2024": "Autumn 2024",
"TF_TournamentMedal_Winter2024": "Winter 2024",
"TF_TournamentMedal_Spring2025": "Spring 2025",
"TF_TournamentMedal_Summer2025": "Summer 2025",
"TF_TournamentMedal_Autumn2025": "Autumn 2025",
"TF_TournamentMedal_Winter2025": "Winter 2025",
"TF_TournamentMedal_Spring2026": "Spring 2026",
"TF_TournamentMedal_Summer2026": "Summer 2026",
"TF_TournamentMedal_Autumn2026": "Autumn 2026",
"TF_TournamentMedal_Winter2026": "Winter 2026",
"TF_TournamentMedal_April2019": "April 2019",
"TF_TournamentMedal_Cup1": "Cup 1",
"TF_TournamentMedal_Cup2": "Cup 2",
"TF_TournamentMedal_Cup3": "Cup 3",
"TF_TournamentMedal_Cup4": "Cup 4",
"TF_TournamentMedal_Cup5": "Cup 5",
"TF_TournamentMedal_AFC_Div1_1st": "AsiaFortress Cup Division 1 1st Place",
"TF_TournamentMedal_AFC_Div1_2nd": "AsiaFortress Cup Division 1 2nd Place",
"TF_TournamentMedal_AFC_Div1_3rd": "AsiaFortress Cup Division 1 3rd Place",
"TF_TournamentMedal_AFC_Div1_Participant": "AsiaFortress Cup Division 1 Participant",
"TF_TournamentMedal_AFC_Div2_1st": "AsiaFortress Cup Division 2 1st Place",
"TF_TournamentMedal_AFC_Div2_2nd": "AsiaFortress Cup Division 2 2nd Place",
"TF_TournamentMedal_AFC_Div2_3rd": "AsiaFortress Cup Division 2 3rd Place",
"TF_TournamentMedal_AFC_Div2_Participant": "AsiaFortress Cup Division 2 Participant",
"TF_TournamentMedal_AFC_Div3_1st": "AsiaFortress Cup Division 3 1st Place",
"TF_TournamentMedal_AFC_Div3_2nd": "AsiaFortress Cup Division 3 2nd Place",
"TF_TournamentMedal_AFC_Div3_3rd": "AsiaFortress Cup Division 3 3rd Place",
"TF_TournamentMedal_AFC_Div3_Participant": "AsiaFortress Cup Division 3 Participant",
"TF_TournamentMedal_AFC_Div4_1st": "AsiaFortress Cup Division 4 1st Place",
"TF_TournamentMedal_AFC_Div4_2nd": "AsiaFortress Cup Division 4 2nd Place",
"TF_TournamentMedal_AFC_Div4_3rd": "AsiaFortress Cup Division 4 3rd Place",
"TF_TournamentMedal_AFC_Div4_Participant": "AsiaFortress Cup Division 4 Participant",
"TF_TournamentMedal_AFC_MC_1st": "AsiaFortress Mercenaries Cup 1st Place",
"TF_TournamentMedal_AFC_MC_2nd": "AsiaFortress Mercenaries Cup 2nd Place",
"TF_TournamentMedal_AFC_MC_3rd": "AsiaFortress Mercenaries Cup 3rd Place",
"TF_TournamentMedal_AFC_MC_Participant": "AsiaFortress Mercenaries Cup Participant",
"TF_TournamentMedal_AF_LAN_1st": "AsiaFortress LAN 1st Place",
"TF_TournamentMedal_AF_LAN_2nd": "AsiaFortress LAN 2nd Place",
"TF_TournamentMedal_AF_LAN_3rd": "AsiaFortress LAN 3rd Place",
"TF_TournamentMedal_AF_LAN_Participant": "AsiaFortress LAN Participant",
"TF_TournamentMedal_AF_LAN_Attendee": "AsiaFortress LAN Attendee",
"TF_TournamentMedal_AF_Invite_1st": "AsiaFortress Invite 1st Place",
"TF_TournamentMedal_AF_Invite_1st_Summer2023": "Awarded to players of Xiao for achieving 1st place in the AsiaFortress Summer 2023 season",
"TF_TournamentMedal_AF_Invite_1st_Fall2023": "Awarded to players of Xiao for achieving 1st place in the AsiaFortress Fall 2023 season",
"TF_TournamentMedal_AF_Invite_2nd": "AsiaFortress Invite 2nd Place",
"TF_TournamentMedal_AF_Invite_2nd_Summer2023": "Awarded to players of Hong Hat Buff for achieving 2nd place in the AsiaFortress Summer 2023 season",
"TF_TournamentMedal_AF_Invite_2nd_Fall2023": "Awarded to players of Hong Hat Buff for achieving 2nd place in the AsiaFortress Fall 2023 season",
"TF_TournamentMedal_AF_Invite_3rd": "AsiaFortress Invite 3rd Place",
"TF_TournamentMedal_AF_Invite_3rd_Summer2023": "Awarded to players of United Beasts for achieving 3rd place in the AsiaFortress Summer 2023 season",
"TF_TournamentMedal_AF_Invite_3rd_Fall2023": "Awarded to players of Castelmaure for achieving 3rd place in the AsiaFortress Fall 2023 season",
"TF_TournamentMedal_AF_Invite_Participant": "AsiaFortress Invite Participant",
"TF_TournamentMedal_AF_Invite_Participant_Summer2023": "Awarded to players of teams who participated in the AsiaFortress Summer 2023 season",
"TF_TournamentMedal_AF_Invite_Participant_Fall2023": "Awarded to players of teams who participated in the AsiaFortress Fall 2023 season",
"TF_TournamentMedal_AF_Qualifiers_Participant": "AsiaFortress Qualifiers Participant",
"TF_TournamentMedal_AF_Qualifiers_Participant_Summer2023": "Awarded to players of teams who participated in the AsiaFortress Summer 2023 qualifiers",
"TF_TournamentMedal_AF_Qualifiers_Participant_Fall2023": "Awarded to players of teams who participated in the AsiaFortress Fall 2023 qualifiers",
"TF_TournamentMedal_AF_International_Jade": "AsiaFortress International Jade Medal",
"TF_TournamentMedal_AF_International_Jade_Summer2023": "Awarded to the winners of the AsiaFortress International Season 0",
"TF_TournamentMedal_AF_Liquidtf_Open_1st": "AsiaFortress Liquid.tf Open 1st Place",
"TF_TournamentMedal_AF_Liquidtf_Open_1st_Spring2024": "Awarded to the champions of AsiaFortress Liquid.tf Spring 2024 Open",
"TF_TournamentMedal_AF_Liquidtf_Open_1st_Fall2024": "Awarded to the champions of AsiaFortress Liquid.tf Fall 2024 Open",
"TF_TournamentMedal_AF_Liquidtf_Open_2nd": "AsiaFortress Liquid.tf Open 2nd Place",
"TF_TournamentMedal_AF_Liquidtf_Open_2nd_Spring2024": "Awarded to players who achieved 2nd in AsiaFortress Liquid.tf Spring 2024 Open",
"TF_TournamentMedal_AF_Liquidtf_Open_2nd_Fall2024": "Awarded to players who achieved 2nd in AsiaFortress Liquid.tf Fall 2024 Open",
"TF_TournamentMedal_AF_Liquidtf_Open_3rd": "AsiaFortress Liquid.tf Open 3rd Place",
"TF_TournamentMedal_AF_Liquidtf_Open_3rd_Spring2024": "Awarded to players who achieved 3rd in AsiaFortress Liquid.tf Spring 2024 Open",
"TF_TournamentMedal_AF_Liquidtf_Open_3rd_Fall2024": "Awarded to players who achieved 3rd in AsiaFortress Liquid.tf Fall 2024 Open",
"TF_TournamentMedal_AF_Liquidtf_Open_Participant": "AsiaFortress Liquid.tf Open Participant",
"TF_TournamentMedal_AF_Liquidtf_Open_Participant_Spring2024": "Awarded to players who participated in AsiaFortress Liquid.tf Spring 2024 Open",
"TF_TournamentMedal_AF_Liquidtf_Open_Participant_Spring2025": "Awarded to players who participated in AsiaFortress Liquid.tf Spring 2025 Open",
"TF_TournamentMedal_AF_Liquidtf_Main_1st": "AsiaFortress Liquid.tf Main 1st Place",
"TF_TournamentMedal_AF_Liquidtf_Main_1st_Spring2025": "Awarded to the champions of AsiaFortress Liquid.tf Spring 2025 Main",
"TF_TournamentMedal_AF_Liquidtf_Main_2nd": "AsiaFortress Liquid.tf Main 2nd Place",
"TF_TournamentMedal_AF_Liquidtf_Main_2nd_Spring2025": "Awarded to players who achieved 2nd in AsiaFortress Liquid.tf Spring 2025 Main",
"TF_TournamentMedal_AF_Liquidtf_Main_3rd": "AsiaFortress Liquid.tf Main 3rd Place",
"TF_TournamentMedal_AF_Liquidtf_Main_3rd_Spring2025": "Awarded to players who achieved 3rd in AsiaFortress Liquid.tf Spring 2025 Main",
"TF_TournamentMedal_AF_Liquidtf_Main_Participant": "AsiaFortress Liquid.tf Main Participant",
"TF_TournamentMedal_AF_Liquidtf_Main_Participant_Spring2025": "Awarded to players who participated in AsiaFortress Liquid.tf Spring 2025 Main",
"TF_TournamentMedal_AF_Liquidtf_Open_Participant_Fall2024": "Awarded to players who participated in AsiaFortress Liquid.tf Fall 2024 Open",
"TF_TournamentMedal_AF_Liquidtf_Invite_1st": "AsiaFortress Liquid.tf Invite 1st Place",
"TF_TournamentMedal_AF_Liquidtf_Invite_1st_Spring2024": "Awarded to players of Xiao, the champions of AsiaFortress Liquid.tf Spring 2024 Invite",
"TF_TournamentMedal_AF_Liquidtf_Invite_1st_Fall2024": "Awarded to players of Kankuay, the champions of AsiaFortress Liquid.tf Fall 2024 Invite",
"TF_TournamentMedal_AF_Liquidtf_Invite_1st_Spring2025": "Awarded to players of Heretics, the champions of AsiaFortress Liquid.tf Spring 2025 Invite",
"TF_TournamentMedal_AF_Liquidtf_Invite_2nd": "AsiaFortress Liquid.tf Invite 2nd Place",
"TF_TournamentMedal_AF_Liquidtf_Invite_2nd_Spring2024": "Awarded to players of Ex Nihilo, who achieved 2nd in AsiaFortress Liquid.tf Spring 2024 Invite",
"TF_TournamentMedal_AF_Liquidtf_Invite_2nd_Fall2024": "Awarded to players of Togenashi Togeari, who achieved 2nd in AsiaFortress Liquid.tf Fall 2024 Invite",
"TF_TournamentMedal_AF_Liquidtf_Invite_2nd_Spring2025": "Awarded to players of Ex Nihilo, who achieved 2nd in AsiaFortress Liquid.tf Spring 2025 Invite",
"TF_TournamentMedal_AF_Liquidtf_Invite_3rd": "AsiaFortress Liquid.tf Invite 3rd Place",
"TF_TournamentMedal_AF_Liquidtf_Invite_3rd_Spring2024": "Awarded to players of United Beasts, who achieved 3rd in AsiaFortress Liquid.tf Spring 2024 Invite",
"TF_TournamentMedal_AF_Liquidtf_Invite_3rd_Fall2024": "Awarded to players of HONGPRUMP, who achieved 3rd in AsiaFortress Liquid.tf Fall 2024 Invite",
"TF_TournamentMedal_AF_Liquidtf_Invite_3rd_Spring2025": "Awarded to players of MRST, who achieved 3rd in AsiaFortress Liquid.tf Spring 2025 Invite",
"TF_TournamentMedal_AF_Liquidtf_Invite_Participant": "AsiaFortress Liquid.tf Invite Participant",
"TF_TournamentMedal_AF_Liquidtf_Invite_Participant_Spring2024": "Awarded to players who participated in AsiaFortress Liquid.tf Spring 2024 Invite",
"TF_TournamentMedal_AF_Liquidtf_Invite_Participant_Fall2024": "Awarded to players who participated in AsiaFortress Liquid.tf Fall 2024 Invite",
"TF_TournamentMedal_AF_Liquidtf_Invite_Participant_Spring2025": "Awarded to players who participated in AsiaFortress Liquid.tf Spring 2025 Invite",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_1st": "AsiaFortress Liquid.tf Highlander Open 1st Place",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_1st_Summer2024": "Awarded to the champions of AsiaFortress Liquid.tf Summer 2024 Highlander Open",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_1st_Winter2024": "Awarded to the champions of AsiaFortress Liquid.tf Winter 2024 Highlander Open",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_1st_Summer2025": "Awarded to the champions of AsiaFortress Liquid.tf Summer 2025 Highlander Open",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_2nd": "AsiaFortress Liquid.tf Highlander Open 2nd Place",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_2nd_Summer2024": "Awarded to players who achieved 2nd in AsiaFortress Liquid.tf Summer 2024 Highlander Open",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_2nd_Winter2024": "Awarded to players who achieved 2nd in AsiaFortress Liquid.tf Winter 2024 Highlander Open",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_2nd_Summer2025": "Awarded to players who achieved 2nd in AsiaFortress Liquid.tf Summer 2025 Highlander Open",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_3rd": "AsiaFortress Liquid.tf Highlander Open 3rd Place",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_3rd_Summer2024": "Awarded to players who achieved 3rd in AsiaFortress Liquid.tf Summer 2024 Highlander Open",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_3rd_Winter2024": "Awarded to players who achieved 3rd in AsiaFortress Liquid.tf Winter 2024 Highlander Open",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_3rd_Summer2025": "Awarded to players who achieved 3rd in AsiaFortress Liquid.tf Summer 2025 Highlander Open",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_Participant": "AsiaFortress Liquid.tf Highlander Open Participant",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_Participant_Summer2024": "Awarded to players who participated in AsiaFortress Liquid.tf Summer 2024 Highlander Open",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_Participant_Winter2024": "Awarded to players who participated in AsiaFortress Liquid.tf Winter 2024 Highlander Open",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Open_Participant_Summer2025": "Awarded to players who participated in AsiaFortress Liquid.tf Summer 2025 Highlander Open",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Invite_1st": "AsiaFortress Liquid.tf Highlander Invite 1st Place",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Invite_1st_Summer2024": "Awarded to players of Elysium, the champions of AsiaFortress Liquid.tf Summer 2024 Highlander Invite",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Invite_1st_Winter2024": "Awarded to players of Austrasia, the champions of AsiaFortress Liquid.tf Winter 2024 Highlander",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Invite_2nd": "AsiaFortress Liquid.tf Highlander Invite 2nd Place",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Invite_2nd_Summer2024": "Awarded to players of Snacks On A Plane for the AsiaFortress Liquid.tf Summer 2024 Highlander Invite",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Invite_2nd_Winter2024": "Awarded to players of Ambulas for the AsiaFortress Liquid.tf Winter 2024 Highlander season",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Invite_3rd": "AsiaFortress Liquid.tf Highlander Invite 3rd Place",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Invite_3rd_Summer2024": "Awarded to players of Thai Resurgence for the AsiaFortress Liquid.tf Summer 2024 Highlander Invite",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Invite_3rd_Winter2024": "Awarded to players of Significant Otter for the AsiaFortress Liquid.tf Winter 2024 Highlander season",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Invite_Participant": "AsiaFortress Liquid.tf Highlander Invite Participant",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Invite_Participant_Summer2024": "Awarded to players who participated in AsiaFortress Liquid.tf Summer 2024 Highlander Invite",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Invite_Participant_Winter2024": "Awarded to players who participated in AsiaFortress Liquid.tf Winter 2024 Highlander Invite",
"TF_TournamentMedal_AF_Liquidtf_Highlander_Invite_Participant_Summer2025": "Awarded to players who participated in AsiaFortress Liquid.tf Summer 2025 Highlander Invite",
"TF_TournamentMedal_AF_Liquidtf_MercenaryMashup_Participant": "AsiaFortress Liquid.tf Mercenary Mashup",
"TF_TournamentMedal_AF_Liquidtf_MercenaryMashup_Participant_May2024": "MCM London May 2024",
"TF_TournamentMedal_AF_Liquidtf_NewbieCup_1st": "AsiaFortress Liquid.tf Newbie Cup 1st Place",
"TF_TournamentMedal_AF_Liquidtf_NewbieCup_2nd": "AsiaFortress Liquid.tf Newbie Cup 2nd Place",
"TF_TournamentMedal_AF_Liquidtf_NewbieCup_3rd": "AsiaFortress Liquid.tf Newbie Cup 3rd Place",
"TF_TournamentMedal_AF_Liquidtf_NewbieCup_Participant": "AsiaFortress Liquid.tf Newbie Cup Participant",
"TF_TournamentMedal_AF_Liquidtf_NewbieCup_Coach": "AsiaFortress Liquid.tf Newbie Cup Coach",
"TF_TournamentMedal_AF_Liquidtf_NewbieCup_9": "AsiaFortress Liquid.tf Newbie Cup 9",
"TF_TournamentMedal_AF_Liquidtf_NewbieCup_10": "AsiaFortress Liquid.tf Newbie Cup 10",
"TF_TournamentMedal_AF_Liquidtf_NewbieCup_11": "AsiaFortress Liquid.tf Newbie Cup 11",
"TF_TournamentMedal_AF_Liquidtf_GibusCup_1st": "AsiaFortress Liquid.tf Gibus Cup 1st Place",
"TF_TournamentMedal_AF_Liquidtf_GibusCup_2nd": "AsiaFortress Liquid.tf Gibus Cup 2nd Place",
"TF_TournamentMedal_AF_Liquidtf_GibusCup_3rd": "AsiaFortress Liquid.tf Gibus Cup 3rd Place",
"TF_TournamentMedal_AF_Liquidtf_GibusCup_Participant": "AsiaFortress Liquid.tf Gibus Cup Participant",
"TF_TournamentMedal_AF_Liquidtf_GibusCup_Coach": "AsiaFortress Liquid.tf Gibus Cup Coach",
"TF_TournamentMedal_AF_Liquidtf_GibusCup_1": "AsiaFortress Liquid.tf Gibus Cup 1",
"TF_TournamentMedal_AF_Liquidtf_ChampionsCup_Participant": "AsiaFortress Liquid.tf Champions Cup Participant",
"TF_TournamentMedal_AF_Liquidtf_ChampionsCup_Desc": "Awarded to participants of the AsiaFortress Liquid.tf Champions Cup",
"TF_RETF2_EE22_6v6_Winner": "RETF2 EE22 6v6 Winner",
"TF_RETF2_EE22_6v6_Participant": "RETF2 EE22 6v6 Participant",
"TF_RETF2_EE22_4v4_Winner": "RETF2 EE22 4v4 Winner",
"TF_RETF2_EE22_4v4_Participant": "RETF2 EE22 4v4 Participant",
"TF_RETF2_EE22_Dodgeball_Winner": "RETF2 EE22 Dodgeball Winner",
"TF_RETF2_EE22_Dodgeball_Participant": "RETF2 EE22 Dodgeball Participant",
"TF_RETF2_EE22_Pan_Tournament_Winner": "RETF2 EE22 Pan Tournament Winner",
"TF_RETF2_EE22_Pan_Tournament_Participant": "RETF2 EE22 Pan Tournament Participant",
"TF_RETF2_EE22_Contributor": "RETF2 EE22 Contributor",
"TF_RETF2_Ultiduo_Winner": "RETF2 Retrospective 2 Ultiduo Winner Season 2",
"TF_RETF2_Ultiduo_Finalist": "RETF2 Retrospective 2 Ultiduo Finalist Season 2",
"TF_RETF2_Ultiduo_Participant": "RETF2 Retrospective 2 Ultiduo Participant Season 2",
"TF_RETF2_6v6Newbie_Winner": "RETF2 Retrospective 2 6v6 Newbie Winner Season 2",
"TF_RETF2_6v6Newbie_Finalist": "RETF2 Retrospective 2 6v6 Newbie Finalist Season 2",
"TF_RETF2_6v6Newbie_Participant": "RETF2 Retrospective 2 6v6 Newbie Participant Season 2",
"TF_RETF2_ArenaRespawn_Winner": "RETF2 Retrospective 2 Arena: Respawn Winner Season 2",
"TF_RETF2_ArenaRespawn_Finalist": "RETF2 Retrospective 2 Arena: Respawn Finalist Season 2",
"TF_RETF2_ArenaRespawn_Participant": "RETF2 Retrospective 2 Arena: Respawn Participant Season 2",
"TF_RETF2_Highlander_Winner": "RETF2 Retrospective 2 Highlander Winner Season 2",
"TF_RETF2_Highlander_Finalist": "RETF2 Retrospective 2 Highlander Finalist Season 2",
"TF_RETF2_Highlander_Participant": "RETF2 Retrospective 2 Highlander Participant Season 2",
"TF_RETF2_RSP_Winner": "RETF2 Retrospective 2 Ready Steady Pan! Winner Season 2",
"TF_RETF2_RSP_Finalist": "RETF2 Retrospective 2 Ready Steady Pan! Finalist Season 2",
"TF_RETF2_RSP_Participant": "RETF2 Retrospective 2 Ready Steady Pan! Participant Season 2",
"TF_RETF2_6v6Senior_Winner": "RETF2 Retrospective 2 6v6 Senior Winner Season 2",
"TF_RETF2_6v6Senior_Finalist": "RETF2 Retrospective 2 6v6 Senior Finalist Season 2",
"TF_RETF2_6v6Senior_Participant": "RETF2 Retrospective 2 6v6 Senior Participant Season 2",
"TF_RETF2_Contributor": "RETF2 Retrospective 2 Contributor Season 2",
"TF_TournamentMedal_BETA_LAN_1st": "BETA LAN 1st Place",
"TF_TournamentMedal_BETA_LAN_2nd": "BETA LAN 2nd Place",
"TF_TournamentMedal_BETA_LAN_3rd": "BETA LAN 3rd Place",
"TF_TournamentMedal_BETA_LAN_Participant": "BETA LAN Participant",
"TF_TournamentMedal_GamersAssembly_Gold": "Gamers Assembly Gold Medal",
"TF_TournamentMedal_GamersAssembly_Silver": "Gamers Assembly Silver Medal",
"TF_TournamentMedal_GamersAssembly_Bronze": "Gamers Assembly Bronze Medal",
"TF_TournamentMedal_GamersAssembly_Participant": "Gamers Assembly Participant Badge",
"TF_TournamentMedal_GAlloween_Gold": "GA'lloween Gold Medal",
"TF_TournamentMedal_GAlloween_Silver": "GA'lloween Silver Medal",
"TF_TournamentMedal_GAlloween_Bronze": "GA'lloween Bronze Medal",
"TF_TournamentMedal_GAlloween_Participant": "GA'lloween Participant Badge",
"TF_TournamentMedal_PASSTime_Gold": "PASS Time Tournament Gold Medal",
"TF_TournamentMedal_PASSTime_Silver": "PASS Time Tournament Silver Medal",
"TF_TournamentMedal_PASSTime_Bronze": "PASS Time Tournament Bronze Medal",
"TF_TF2Connexion_Division_1_Gold": "TF2Connexion Division 1 Gold Medal",
"TF_TF2Connexion_Division_2_Gold": "TF2Connexion Division 2 Gold Medal",
"TF_TF2Connexion_Division_3_Gold": "TF2Connexion Division 3 Gold Medal",
"TF_TF2Connexion_Division_4_Gold": "TF2Connexion Division 4 Gold Medal",
"TF_TF2Connexion_Division_1_Silver": "TF2Connexion Division 1 Silver Medal",
"TF_TF2Connexion_Division_2_Silver": "TF2Connexion Division 2 Silver Medal",
"TF_TF2Connexion_Division_3_Silver": "TF2Connexion Division 3 Silver Medal",
"TF_TF2Connexion_Division_4_Silver": "TF2Connexion Division 4 Silver Medal",
"TF_TF2Connexion_Division_1_Bronze": "TF2Connexion Division 1 Bronze Medal",
"TF_TF2Connexion_Division_2_Bronze": "TF2Connexion Division 2 Bronze Medal",
"TF_TF2Connexion_Division_3_Bronze": "TF2Connexion Division 3 Bronze Medal",
"TF_TF2Connexion_Division_4_Bronze": "TF2Connexion Division 4 Bronze Medal",
"TF_TF2Connexion_Division_1_Participant": "TF2Connexion Division 1 Participant",
"TF_TF2Connexion_Division_2_Participant": "TF2Connexion Division 2 Participant",
"TF_TF2Connexion_Division_3_Participant": "TF2Connexion Division 3 Participant",
"TF_TF2Connexion_Division_4_Participant": "TF2Connexion Division 4 Participant",
"TF_TournamentMedal_OSLTF_First_Place": "OSL.tf 1st Place",
"TF_TournamentMedal_OSLTF_Second_Place": "OSL.tf 2nd Place",
"TF_TournamentMedal_OSLTF_Third_Place": "OSL.tf 3rd Place",
"TF_TournamentMedal_OSLTF_Participant": "OSL.tf Participant",
"TF_TournamentMedal_OSLTF_Cup1": "Cup #1",
"TF_TournamentMedal_armsrace_first": "Arms Race 1st Place Medal",
"TF_TournamentMedal_armsrace_second": "Arms Race 2nd Place Medal",
"TF_TournamentMedal_armsrace_third": "Arms Race 3rd Place Medal",
"TF_TournamentMedal_armsrace_participant": "Arms Race Participant Medal",
"TF_TournamentMedal_armsrace1": "Arms Race 1",
"TF_TournamentMedal_armsrace2": "Arms Race 2",
"TF_TournamentMedal_armsrace3": "Arms Race 3",
"TF_TournamentMedal_DeutschLAN_First_Place": "DeutschLAN 1st Place",
"TF_TournamentMedal_DeutschLAN_Second_Place": "DeutschLAN 2nd Place",
"TF_TournamentMedal_DeutschLAN_Third_Place": "DeutschLAN 3rd Place",
"TF_TournamentMedal_DeutschLAN_Participant": "DeutschLAN Participant",
"TF_TournamentMedal_DeutschLAN_Supporter": "DeutschLAN Supporter",
"TF_TournamentMedal_EdgeGamersUltiDuo_Participant": "EdgeGamers UltiDuo Participant",
"TF_TournamentMedal_TFCL_6v6_Alpha": "TFCL 6v6 Alpha",
"TF_TournamentMedal_TFCL_6v6_Gold": "TFCL 6v6 1st Place",
"TF_TournamentMedal_TFCL_6v6_Silver": "TFCL 6v6 2nd Place",
"TF_TournamentMedal_TFCL_6v6_Bronze": "TFCL 6v6 3rd Place",
"TF_TournamentMedal_TFCL_6v6_Participant": "TFCL 6v6 Participant",
"TF_TournamentMedal_TFCL_6v6_Invite_Gold": "TFCL 6v6 Invite 1st Place",
"TF_TournamentMedal_TFCL_6v6_Invite_Silver": "TFCL 6v6 Invite 2nd Place",
"TF_TournamentMedal_TFCL_6v6_Invite_Bronze": "TFCL 6v6 Invite 3rd Place",
"TF_TournamentMedal_TFCL_6v6_Invite_Participant": "TFCL 6v6 Invite Participant",
"TF_TournamentMedal_TFCL_6v6_Division2_Gold": "TFCL 6v6 Division 2 1st Place",
"TF_TournamentMedal_TFCL_6v6_Division2_Silver": "TFCL 6v6 Division 2 2nd Place",
"TF_TournamentMedal_TFCL_6v6_Division2_Bronze": "TFCL 6v6 Division 2 3rd Place",
"TF_TournamentMedal_TFCL_6v6_Division2_Participant": "TFCL 6v6 Division 2 Participant",
"TF_TournamentMedal_TFCL_6v6_Division3_Gold": "TFCL 6v6 Division 3 1st Place",
"TF_TournamentMedal_TFCL_6v6_Division3_Silver": "TFCL 6v6 Division 3 2nd Place",
"TF_TournamentMedal_TFCL_6v6_Division3_Bronze": "TFCL 6v6 Division 3 3rd Place",
"TF_TournamentMedal_TFCL_6v6_Division3_Participant": "TFCL 6v6 Division 3 Participant",
"TF_TournamentMedal_TFCL_6v6_Helper": "TFCL 6v6 Helper",
"TF_TournamentMedal_TFCL_6v6_2025_Desc": "Post Season Cup 2 2025",
"TF_TournamentMedal_TFCL_Ultiduo_Alpha": "TFCL Ultiduo Alpha",
"TF_TournamentMedal_TFCL_Ultiduo_Gold": "TFCL Ultiduo 1st Place",

"TF_TournamentMedal_TFCL_Ultiduo_Silver": "TFCL Ultiduo 2nd Place",
"TF_TournamentMedal_TFCL_Ultiduo_Bronze": "TFCL Ultiduo 3rd Place",
"TF_TournamentMedal_TFCL_Ultiduo_Participant": "TFCL Ultiduo Participant",
"TF_TournamentMedal_TFCL_Alpha_Season": "Alpha Season",
"TF_TournamentMedal_TFCL_Alpha_Desc": "Awarded to those who played in TFCL's earliest seasons",
"TF_TournamentMedal_TFCL_Highlander_Gold": "TFCL Highlander 1st Place",
"TF_TournamentMedal_TFCL_Highlander_Silver": "TFCL Highlander 2nd Place",
"TF_TournamentMedal_TFCL_Highlander_Bronze": "TFCL Highlander 3rd Place",
"TF_TournamentMedal_TFCL_Highlander_Participant": "TFCL Highlander Participant",
"TF_TournamentMedal_TFCL_4v4_Gold": "TFCL 4v4 1st Place",
"TF_TournamentMedal_TFCL_4v4_Silver": "TFCL 4v4 2nd Place",
"TF_TournamentMedal_TFCL_4v4_Bronze": "TFCL 4v4 3rd Place",
"TF_TournamentMedal_TFCL_4v4_Participant": "TFCL 4v4 Participant",
"TF_TournamentMedal_TFCL_bball_Gold": "TFCL bball 1st Place",
"TF_TournamentMedal_TFCL_bball_Silver": "TFCL bball 2nd Place",
"TF_TournamentMedal_TFCL_bball_Bronze": "TFCL bball 3rd Place",
"TF_TournamentMedal_TFCL_bball_Participant": "TFCL bball Participant",
"TF_TournamentMedal_TFCL_Alpha_FC": "TFCL frag_club 1st Place",
"TF_TournamentMedal_TFCL_Alpha_FC_Desc": "A special placement medal for the members of frag_club",
"TF_TournamentMedal_TFCL_Alpha_RK": "TFCL RoyalKeys 2nd Place",
"TF_TournamentMedal_TFCL_Alpha_RK_Desc": "A special placement medal for the members of RoyalKeys",
"TF_TournamentMedal_TFCL_Tester": "TFCL 2.0 Tester",
"TF_TournamentMedal_TFCL_Tester_Desc": "A special medal for those that helped test the second generation of TFCL",
"TF_TournamentMedal_TFCL_SummerCup_Gold": "TFCL Summer Cup 1st Place",
"TF_TournamentMedal_TFCL_SummerCup_Silver": "TFCL Summer Cup 2nd Place",
"TF_TournamentMedal_TFCL_SummerCup_Bronze": "TFCL Summer Cup 3rd Place",
"TF_TournamentMedal_TFCL_SummerCup_Participant": "TFCL Summer Cup Participant",
"TF_TournamentMedal_TFCL_Helper": "TFCL Helper",
"TF_TournamentMedal_TFCL_Helper_Desc": "You made a positive impact on TFCL, and now you've got a shiny medal to prove it!",
"TF_TournamentMedal_NHBL_Sasha_Season1": "NHBL 1st Sasha Cup Champion",
"TF_TournamentMedal_NHBL_Sasha_Season1_Desc": "Dr. Splints",
"TF_TournamentMedal_NHBL_Sasha_Season2": "NHBL 2nd Sasha Heavyweight Champion",
"TF_TournamentMedal_NHBL_Sasha_Season2_Desc": "White Russian Bear",
"TF_TournamentMedal_NHBL_Sasha_Season3": "NHBL 3rd Sasha Heavyweight Champion",
"TF_TournamentMedal_NHBL_Sasha_Season3_Desc": "WHOO! gotta be sneaky",
"TF_TournamentMedal_NHBL_Sasha_Season4": "NHBL 4th Sasha Heavyweight Champion",
"TF_TournamentMedal_NHBL_Sasha_Season4_Desc": "Leires",
"TF_TournamentMedal_NHBL_Sasha_Season5": "NHBL 5th Sasha Heavyweight Champion",
"TF_TournamentMedal_NHBL_Sasha_Season5_Desc": "Some Porcupine",
"TF_TournamentMedal_NHBL_Sasha_Season6": "NHBL 6th Sasha Heavyweight Champion",
"TF_TournamentMedal_NHBL_Sasha_Season6_Desc": "White Russian Bear",
"TF_TournamentMedal_NHBL_Natasha_Season7": "NHBL 1st Natascha Heavyweight Champion",
"TF_TournamentMedal_NHBL_Natasha_Season7_Desc": "Retro",
"TF_TournamentMedal_NHBL_Natasha_Season8": "NHBL 2nd Natascha Heavyweight Champion",
"TF_TournamentMedal_NHBL_Natasha_Season8_Desc": "Retro",
"TF_TournamentMedal_NHBL_Natasha_Season9": "NHBL 3rd Natascha Heavyweight Champion",
"TF_TournamentMedal_NHBL_Natasha_Season9_Desc": "Comfy Len",
"TF_TournamentMedal_NHBL_Natasha_Season10": "NHBL 4th Natascha Heavyweight Champion",
"TF_TournamentMedal_NHBL_Natasha_Season10_Desc": "BrightBoy",
"TF_TournamentMedal_NHBL_Participant": "NHBL Finals Participant",
"TF_TournamentMedal_NHBL_SecondPlace": "NHBL Finals 2nd Place",
"TF_TournamentMedal_NHBL_ThirdPlace": "NHBL Finals 3rd Place",
"TF_TournamentMedal_NHBL_FourthPlace": "NHBL Finals 4th Place",
"TF_TournamentMedal_NHBL_Sasha_Season7": "NHBL 7th Sasha Heavyweight Champion",
"TF_TournamentMedal_NHBL_Sasha_Season7_Desc": "Eiss",
"TF_TournamentMedal_NHBL_Sasha_Season8": "NHBL 8th Sasha Heavyweight Champion",
"TF_TournamentMedal_NHBL_Sasha_Season8_Desc": "Eiss",
"TF_TournamentMedal_NHBL_Sasha_Season9": "NHBL 9th Sasha Heavyweight Champion",
"TF_TournamentMedal_NHBL_Sasha_Season9_Desc": "Comfy Len",
"TF_TournamentMedal_NHBL_Sasha_Season10": "NHBL 10th Sasha Heavyweight Champion",
"TF_TournamentMedal_NHBL_Sasha_Season10_Desc": "BrightBoy",
"TF_TournamentMedal_UltimateUltiduo_First": "Ultimate Ultiduo 1st Place",
"TF_TournamentMedal_UltimateUltiduo_Second": "Ultimate Ultiduo 2nd Place",
"TF_TournamentMedal_UltimateUltiduo_Third": "Ultimate Ultiduo 3rd Place",
"TF_TournamentMedal_UltimateUltiduo_Participant": "Ultimate Ultiduo Participant",
"TF_TournamentMedal_UltimateUltiduo_Helper": "Ultimate Ultiduo Helper",
"TF_TournamentMedal_Palaise_Champion": "Palaise MGE Doubles Community Clash Champion",
"TF_TournamentMedal_Palaise_Champion_Desc": "Sure, some people may have better game sense, but you've proven that you don't need it to be the best. (Season 1)",
"TF_TournamentMedal_Palaise_RunnerUp": "Palaise MGE Doubles Community Clash Runner-Up",
"TF_TournamentMedal_Palaise_RunnerUp_Desc": "Don't tell your teammate this, but they are the reason you guys didn't come first. (Season 1)",
"TF_TournamentMedal_Palaise_Contestant": "Palaise MGE Doubles Community Clash Contestant",
"TF_TournamentMedal_Palaise_Contestant_Desc": "Why yes! I DO play this game competently! (Season 1)",
"TF_TournamentMedal_Palaise_Limitless_Champion": "Palaise Limitless 6v6 Champion",
"TF_TournamentMedal_Palaise_Limitless_Champion_Desc": "Others may have fame, fortune and health, but you have a 1st place badge and NO ONE can take that from you.",
"TF_TournamentMedal_Palaise_Limitless_RunnerUp": "Palaise Limitless 6v6 Runner-Up",
"TF_TournamentMedal_Palaise_Limitless_RunnerUp_Desc": "Not the victory you wanted, but a proud mark of your achievements so far, and defined obstacles yet to conquer.",
"TF_TournamentMedal_Palaise_Limitless_Participant": "Palaise Limitless 6v6 Participant",
"TF_TournamentMedal_Palaise_Limitless_Participant_Desc": "Blood, sweat and tears went into this medal. Wash with bleach before use.",
"TF_TournamentMedal_jtte_gold": "Journey to the East 1st Place",
"TF_TournamentMedal_jtte_silver": "Journey to the East 2nd Place",
"TF_TournamentMedal_jtte_bronze": "Journey to the East 3rd Place",
"TF_TournamentMedal_jtte_participant": "Journey to the East Participant",
"TF_TournamentMedal_jtte_winner_desc": "Awarded to winners of the Journey to the East contest",
"TF_TournamentMedal_jtte_participant_desc": "Awarded to participants of the Journey to the East contest",
"TF_TournamentMedal_NPC_gold": "Newbie Prolander Cup Gold Medal",
"TF_TournamentMedal_NPC_silver": "Newbie Prolander Cup Silver Medal",
"TF_TournamentMedal_NPC_bronze": "Newbie Prolander Cup Bronze Medal",
"TF_TournamentMedal_NPC_participant": "Newbie Prolander Cup Participant",
"TF_TournamentMedal_NHC_gold": "Newbie Highlander Cup Gold Medal",
"TF_TournamentMedal_NHC_silver": "Newbie Highlander Cup Silver Medal",
"TF_TournamentMedal_NHC_bronze": "Newbie Highlander Cup Bronze Medal",
"TF_TournamentMedal_NHC_participant": "Newbie Highlander Cup Participant",
"TF_TournamentMedal_GPC_gold": "Gibus Prolander Cup Gold Medal",
"TF_TournamentMedal_GPC_silver": "Gibus Prolander Cup Silver Medal",
"TF_TournamentMedal_GPC_bronze": "Gibus Prolander Cup Bronze Medal",
"TF_TournamentMedal_GPC_participant": "Gibus Prolander Cup Participant",
"TF_TournamentMedal_GHC_gold": "Gibus Highlander Cup Gold Medal",
"TF_TournamentMedal_GHC_silver": "Gibus Highlander Cup Silver Medal",
"TF_TournamentMedal_GHC_bronze": "Gibus Highlander Cup Bronze Medal",
"TF_TournamentMedal_GHC_participant": "Gibus Highlander Cup Participant",
"TF_TournamentMedal_HLMixes_First": "HLMixes Showdown 1st Place Medal",
"TF_TournamentMedal_HLMixes_Finalist": "HLMixes Showdown Finalist Medal",
"TF_TournamentMedal_HLMixes_Participant": "HLMixes Showdown Participant Medal",
"TF_TournamentMedal_HydroTF_Participant": "Hydro.tf Participant Medal",
"TF_TournamentMedal_HydroTF_Allstar": "Hydro.tf All-Star Medal",
"TF_TournamentMedal_Essentials_Monthly_Gold": "Essentials.TF Monthly Tournament Gold Medal",
"TF_TournamentMedal_Essentials_Monthly_Silver": "Essentials.TF Monthly Tournament Silver Medal",
"TF_TournamentMedal_Essentials_Monthly_Bronze": "Essentials.TF Monthly Tournament Bronze Medal",
"TF_TournamentMedal_Essentials_Monthly_Participant": "Essentials.TF Monthly Tournament Participant",
"TF_TournamentMedal_Essentials_Monthly_Contributor": "Essentials.TF Monthly Tournament Contributor",
"TF_TournamentMedal_DreamHack_Clash_Gold": "DreamHack Community Clash 1st Place",
"TF_TournamentMedal_DreamHack_Clash_Silver": "DreamHack Community Clash 2nd Place",
"TF_TournamentMedal_DreamHack_Clash_Bronze": "DreamHack Community Clash 3rd Place",
"TF_TournamentMedal_DreamHack_Clash_Participant": "DreamHack Community Clash Participant",
"TF_TournamentMedal_DreamHack_Clash_Staff": "DreamHack Community Clash Staff",
"TF_TournamentMedal_DreamHack_Atlanta_Gold": "DreamHack Atlanta 1st Place",
"TF_TournamentMedal_DreamHack_Atlanta_Silver": "DreamHack Atlanta 2nd Place",
"TF_TournamentMedal_DreamHack_Atlanta_Bronze": "DreamHack Atlanta 3rd Place",
"TF_TournamentMedal_DreamHack_Atlanta_Participant": "DreamHack Atlanta Participant",
"TF_TournamentMedal_DreamHack_Atlanta_Staff": "DreamHack Atlanta Staff",
"TF_Medal_6v9_Event": "Asymmetric Accolade",
"TF_Medal_6v9_Event_Desc": "Awarded to the participants of the Pubstars vs. Pros 6vs9 events",
"TF_Medal_HeartOfGold": "Heart of Gold",
"TF_Medal_HeartOfGold_Desc": "TF2mixup Community Event 2013",
"TF_Medal_ThoughtThatCounts": "Thought that Counts",
"TF_Medal_ThoughtThatCounts_Desc": "TF2mixup Community Event 2014",
"TF_Medal_JingleJam2015_Xephos": "Xephos' Philanthropic Physiognomy",
"TF_Medal_JingleJam2015_Xephos_Desc": "Yogscast Jingle Jam 2015 (Xephos edition)",
"TF_Medal_JingleJam2015_Honeydew": "Honeydew's Charitable Countenance",
"TF_Medal_JingleJam2015_Honeydew_Desc": "Yogscast Jingle Jam 2015 (Honeydew edition)",
"TF_Medal_JingleJam2016_Hannah": "Hannah's Altruistic Aspect",
"TF_Medal_JingleJam2016_Hannah_Desc": "Yogscast Jingle Jam 2016 (Hannah edition)",
"TF_Medal_JingleJam2016_Duncan": "Duncan's Kindhearted Kisser",
"TF_Medal_JingleJam2016_Duncan_Desc": "Yogscast Jingle Jam 2016 (Duncan edition)",
"TF_Medal_JingleJam2016_Sips": "Sips' Selfless Simulacrum",
"TF_Medal_JingleJam2016_Sips_Desc": "Yogscast Jingle Jam 2016 (Sips edition)",
"TF_Medal_JingleJam2016_Sjin": "Sjin's Generous Guise",
"TF_Medal_JingleJam2016_Sjin_Desc": "Yogscast Jingle Jam 2016 (Sjin edition)",
"TF_Medal_JingleJam2017_Mandrew": "Mandrew's Munificent Mug",
"TF_Medal_JingleJam2017_Mandrew_Desc": "Yogscast Jingle Jam 2017 (Mandrew edition)",
"TF_Medal_JingleJam2017_Israphel": "Israphel's Eleemosynary Expression",
"TF_Medal_JingleJam2017_Israphel_Desc": "Yogscast Jingle Jam 2017 (Israphel edition)",
"TF_Medal_InfoShow2014": "InfoShow TF2 Tournament Participant",
"TF_Medal_InfoShow2014_Desc": "InfoShow LAN Party 2014",
"TF_Medal_TipOfTheHats2015": "Jaunty Pin 2015",
"TF_Medal_TipOfTheHats2015_Desc": "Awarded to those who contributed to or participated in the Tip of the Hats charity event",
"TF_Medal_TipOfTheHatsTier1": "Jaunty Camper",
"TF_Medal_TipOfTheHatsTier2": "Jaunty Benefactor",
"TF_Medal_TipOfTheHatsTier3": "Jaunty Trailblazer",
"TF_Medal_TipOfTheHats2016_Desc": "Awarded to those who contributed to the Tip of the Hats 2016 charity event",
"TF_Medal_TipOfTheHatsTier1_2017": "Jaunty Adventurer",
"TF_Medal_TipOfTheHatsTier2_2017": "Jaunty Voyager",
"TF_Medal_TipOfTheHatsTier3_2017": "Jaunty Globetrotter",
"TF_Medal_TipOfTheHats2017_Desc": "Awarded to those who contributed to the Tip of the Hats 2017 charity event",
"TF_Medal_TipOfTheHatsTier1_2018": "Jaunty Explorer",
"TF_Medal_TipOfTheHatsTier2_2018": "Jaunty Ranger",
"TF_Medal_TipOfTheHatsTier3_2018": "Jaunty Mountaineer",
"TF_Medal_TipOfTheHats2018_Desc": "Awarded to those who contributed to the Tip of the Hats 2018 charity event",
"TF_Medal_TipOfTheHatsTier1_2019": "Jaunty Tipper",
"TF_Medal_TipOfTheHatsTier2_2019": "Jaunty Benefactor",
"TF_Medal_TipOfTheHatsTier3_2019": "Jaunty Philanthropist",
"TF_Medal_TipOfTheHats2019_Desc": "Awarded to those who contributed to the Tip of the Hats 2019 charity event",
"TF_Medal_SpecialSnowflake": "Special Snowflake",
"TF_Medal_SpecialSnowflake_Desc": "Tell Global Warming who's boss by wearing a fake snowflake on your chest. Awarded to the participants of the Workshop Wonderland 2015 community showcase!",
"TF_Medal_GiftOfGiving": "Gift of Giving",
"TF_Medal_GiftOfGiving_Desc": "Give a little, get a little. For the charitable hearts of gold during the charity drive of the Workshop Wonderland 2015 community showcase!",
"TF_Medal_SpecialSnowflake2016": "Special Snowflake 2016",
"TF_Medal_SpecialSnowflake2016_Desc": "Golden snow? No, no, don't worry, it's lemon! Awarded to the participants of the Workshop Wonderland 2016 community showcase!",
"TF_Medal_GiftOfGiving2016": "Gift of Giving 2016",
"TF_Medal_GiftOfGiving2016_Desc": "So everyone can game. For the charitable hearts of gold during the charity drive of the Workshop Wonderland 2016 community showcase!",
"TF_Medal_HugsTF_2017": "Heartfelt Hug",
"TF_Medal_HugsTF_2017_Desc": "Awarded to those who contributed to or participated in the Hugs.tf 2017 charity event",
"TF_Medal_HugsTF_2018": "Heartfelt Hero",
"TF_Medal_HugsTF_2018_Desc": "Awarded to those who contributed to or participated in the Hugs.tf 2018 charity event",
"TF_Medal_HeartfeltHug_2023": "Heartfelt Hug 2023",
"TF_Medal_HeartfeltHug_2023_Desc": "Once upon a time, a wise soul shared a secret with us: always give one warm embrace per day! Little did they know that we took it literally and began a global hugging frenzy.",
"TF_Medal_HeartfeltHero_2023": "Heartfelt Hero 2023",
"TF_Medal_HeartfeltHero_2023_Desc": "Okay fancy pants, we'll allow you to don the heroic cape this time. Just be sure to bring your extra-large feather duster and trusty sidekick.",
"TF_MapperMedal": "Map Maker's Medallion",
"TF_MapperMedal_Desc": "",
"TF_style0": "Style 1",
"TF_style1": "Style 2",
"TF_style2": "Style 3",
"TF_style3": "Style 4",
"TF_style0_normal": "Normal",
"TF_style1_gem_only": "Gem Only",
"TF_TournamentMedal_TumblrVsReddit": "Tumblr Vs Reddit Participant",
"TF_TournamentMedal_TumblrVsReddit_Season1": "Season 1",
"TF_TournamentMedal_TumblrVsReddit_Season2": "Season 2",
"TF_TournamentMedal_Florida_LAN_2014": "Florida LAN 2014",
"TF_TournamentMedal_Florida_LAN_2014_Desc": "Awarded to those who contributed to or participated in the Florida LAN 2014 event",
"TF_TournamentMedal_Florida_LAN_2015": "Florida LAN 2015",
"TF_TournamentMedal_Florida_LAN_2015_Desc": "Awarded to those who contributed to or participated in the Florida LAN 2015 event",
"TF_TournamentMedal_Florida_LAN_2016": "Florida LAN 2016",
"TF_TournamentMedal_Florida_LAN_2016_Desc": "Awarded to those who contributed to or participated in the Florida LAN 2016 event",
"TF_TournamentMedal_FLAN_Donator_2018": "Florida LAN 2018 Donator Medal",
"TF_TournamentMedal_FLAN_Donator_2018_Desc": "Awarded to people who donated to the Florida LAN 2018 event project.",
"TF_TournamentMedal_FLAN_Participant_2018": "Florida LAN 2018 Participant Medal",
"TF_TournamentMedal_FLAN_Participant_2018_Desc": "Awarded to people who participated in the Florida LAN 2018 event.",
"TF_TournamentMedal_FLAN_Contributor_2018": "Florida LAN 2018 Contributor Medal",
"TF_TournamentMedal_FLAN_Contributor_2018_Desc": "Awarded to people who worked behind the scenes to make it happen.",
"TF_TournamentMedal_72hr_winter_jimijam": "TF2Maps 72hr TF2Jam Winter Participant",
"TF_TournamentMedal_72hr_summer_jimijam": "TF2Maps 72hr TF2Jam Summer Participant",
"TF_TournamentMedal_72hr_jimijam": "TF2Maps 72hr TF2Jam Participant",
"TF_TournamentMedal_72hr_jimijam_style0": "Medal",
"TF_TournamentMedal_72hr_jimijam_style1": "Pin",
"TF2MapsCharitableHeart": "TF2Maps Charitable Heart 2017",
"TF2MapsCharitableHeart2017_Desc": "Awarded to donors during the Summer 2017 TF2Maps 72hr TF2Jam!",
"TF2MapsRayOfSunshine2018": "TF2Maps Ray of Sunshine 2018",
"TF2MapsRayOfSunshine2018_Desc": "Praise the sun and raise some funds! Awarded to donors during the TF2 Summer Jam 2018!",
"TF2MapsRayOfSunshine2019": "TF2Maps Ray of Sunshine 2019",
"TF2MapsRayOfSunshine2019_Desc": "Shine a little love on someone's life. Awarded to donors to the Trevor Project during the TF2 72hr Jam 2019!",
"TF2MapsRayOfSunshine2020": "TF2Maps Ray of Sunshine 2020",
"TF2MapsRayOfSunshine2020_Desc": "Make 'em happy when skies are gray. Awarded to donors during the TF2Maps 72hr TF2Jam 2020!",
"TF2MapsCharitableHeart2021": "TF2Maps Charitable Heart 2021",
"TF2MapsCharitableHeart2021_Desc": "Awarded to donors during the Winter 2021 TF2Maps 72hr TF2Jam!",
"TF2MapsRayOfSunshine2022": "TF2Maps Ray of Sunshine 2022",
"TF2MapsRayOfSunshine2022_Desc": "Make 'em happy when skies are gray. Awarded to donors during the TF2Maps 72hr TF2Jam 2022!",
"TF2MapsCharitableHeart2023": "TF2Maps Charitable Heart 2023",
"TF2MapsCharitableHeart2023_Desc": "Awarded to donors during the TF2Maps 72hr TF2Jam 2023!",
"TF2MapsCharitableHeart2024": "TF2Maps Charitable Heart 2024",
"TF2MapsCharitableHeart2024_Desc": "Awarded to donors during the TF2Maps 72hr TF2Jam 2024!",
"TF_TournamentMedal_MappersVsMachines_2017": "Mappers vs. Machines Participant Medal 2017",
"TF_TournamentMedal_MappersVsMachines_2017_Desc": "Are you Mann enough to hammer a ticking time bomb on your chest? Awarded to all participants of the 2017 TF2Maps.net community MvM mapping contest!",
"TF_TournamentMedal_CappingTV_SummerGold": "CappingTV Ultiduo Summer Brawl 1st Place",
"TF_TournamentMedal_CappingTV_SummerSilver": "CappingTV Ultiduo Summer Brawl 2nd Place",
"TF_TournamentMedal_CappingTV_SummerBronze": "CappingTV Ultiduo Summer Brawl 3rd Place",
"TF_TournamentMedal_CappingTV_SummerParticipant": "CappingTV Ultiduo Summer Brawl Participant",
"TF_TournamentMedal_CappingTV_WinterGold": "CappingTV Ultiduo Winter Chalice 1st Place",
"TF_TournamentMedal_CappingTV_WinterSilver": "CappingTV Ultiduo Winter Chalice 2nd Place",
"TF_TournamentMedal_CappingTV_WinterBronze": "CappingTV Ultiduo Winter Chalice 3rd Place",
"TF_TournamentMedal_CappingTV_WinterParticipant": "CappingTV Ultiduo Winter Chalice Participant",
"TF_TournamentMedal_CappingTV_SummerBrawl_1st": "CappingTV Summer Brawl 1st Place",
"TF_TournamentMedal_CappingTV_SummerBrawl_2nd": "CappingTV Summer Brawl 2nd Place",
"TF_TournamentMedal_CappingTV_SummerBrawl_3rd": "CappingTV Summer Brawl 3rd Place",
"TF_TournamentMedal_CappingTV_SummerBrawl_Participant": "CappingTV Summer Brawl Participant",
"TF_TournamentMedal_CappingTV_TF2_SummerBrawl_1st": "CappingTV Summer Brawl 1st Place",
"TF_TournamentMedal_CappingTV_TF2_SummerBrawl_2nd": "CappingTV Summer Brawl 2nd Place",
"TF_TournamentMedal_CappingTV_TF2_SummerBrawl_3rd": "CappingTV Summer Brawl 3rd Place",
"TF_TournamentMedal_CappingTV_TF2_SummerBrawl_Participant": "CappingTV Summer Brawl Participant",
"TF_TournamentMedal_CappingTV_PASS_Time_1st": "CappingTV PASS Time Championship 1st Place",
"TF_TournamentMedal_CappingTV_PASS_Time_2nd": "CappingTV PASS Time Championship 2nd Place",
"TF_TournamentMedal_CappingTV_PASS_Time_3rd": "CappingTV PASS Time Championship 3rd Place",
"TF_TournamentMedal_CappingTV_PASS_Time_Participant": "CappingTV PASS Time Championship Participant",
"TF_TournamentMedal_CappingTV_Gold": "CappingTV Ultiduo 1st Place",
"TF_TournamentMedal_CappingTV_Silver": "CappingTV Ultiduo 2nd Place",
"TF_TournamentMedal_CappingTV_Bronze": "CappingTV Ultiduo 3rd Place",
"TF_TournamentMedal_CappingTV_Participant": "CappingTV Ultiduo Participant",
"TF_TournamentMedal_CappingTV_SummerBrawl_2023": "Brisbane, Australia, 2023",
"TF_TournamentMedal_CappingTV_SummerBrawl_2024": "Brisbane, Australia, 2024",
"TF_TournamentMedal_CappingTV_SummerBrawl_2025": "Brisbane, Australia, 2025",
"TF_TournamentMedal_SnacksSummeryUltiduo_Gold": "Snack's Summery Ultiduo Siesta Gold Medal",
"TF_TournamentMedal_SnacksSummeryUltiduo_Silver": "Snack's Summery Ultiduo Siesta Silver Medal",
"TF_TournamentMedal_SnacksSummeryUltiduo_Bronze": "Snack's Summery Ultiduo Siesta Bronze Medal",
"TF_TournamentMedal_SnacksSummeryUltiduo_Participant": "Snack's Summery Ultiduo Siesta Participation Medal",
"TF_TournamentMedal_SnacksSummeryUltiduo_2017": "For your outstanding efforts in Snack's Summery Ultiduo Siesta II Feat. SVIFT - Summer 2017",
"TF_TournamentMedal_Insomnia61_Gold": "Insomnia 61 First Place",
"TF_TournamentMedal_Insomnia61_Silver": "Insomnia 61 Second Place",
"TF_TournamentMedal_Insomnia61_Bronze": "Insomnia 61 Third Place",
"TF_TournamentMedal_Insomnia61_Participant": "Insomnia 61 Participant",
"TF_TournamentMedal_Insomnia61_Contributor": "Insomnia 61 Contributor",
"TF_TournamentMedal_Insomnia63_Gold": "Insomnia 63 First Place",
"TF_TournamentMedal_Insomnia63_Silver": "Insomnia 63 Second Place",
"TF_TournamentMedal_Insomnia63_Bronze": "Insomnia 63 Third Place",
"TF_TournamentMedal_Insomnia63_Participant": "Insomnia 63 Participant",
"TF_TournamentMedal_Insomnia63_Contributor": "Insomnia 63 Contributor",
"TF_TournamentMedal_Insomnia65_Gold": "Insomnia 65 First Place",
"TF_TournamentMedal_Insomnia65_Silver": "Insomnia 65 Second Place",
"TF_TournamentMedal_Insomnia65_Bronze": "Insomnia 65 Third Place",
"TF_TournamentMedal_Insomnia65_Participant": "Insomnia 65 Participant",
"TF_TournamentMedal_Insomnia65_Contributor": "Insomnia 65 Contributor",
"TF_TournamentMedal_Insomnia69_Gold": "Insomnia 69 First Place",
"TF_TournamentMedal_Insomnia69_Silver": "Insomnia 69 Second Place",
"TF_TournamentMedal_Insomnia69_Bronze": "Insomnia 69 Third Place",
"TF_TournamentMedal_Insomnia69_Participant": "Insomnia 69 Participant",
"TF_TournamentMedal_Insomnia69_Staff": "Insomnia 69 Staff",
"TF_TournamentMedal_Insomnia71_Gold": "Insomnia 71 First Place",
"TF_TournamentMedal_Insomnia71_Silver": "Insomnia 71 Second Place",
"TF_TournamentMedal_Insomnia71_Bronze": "Insomnia 71 Third Place",
"TF_TournamentMedal_Insomnia71_Participant": "Insomnia 71 Participant",
"TF_TournamentMedal_Insomnia71_Staff": "Insomnia 71 Staff",
"TF_TournamentMedal_RGLgg_Prolander_Participant": "RGL.gg Pick/Ban Prolander Participant",
"TF_TournamentMedal_RGLgg_OneDayCup_NA": "RGL.gg One Day Prolander Cup - North America",
"TF_TournamentMedal_RGLgg_OneDayCup_Europe": "RGL.gg One Day Prolander Cup - Europe",
"TF_TournamentMedal_RGLgg_OneDayCup_Aus": "RGL.gg One Day Prolander Cup - Australia",
"TF_TournamentMedal_RGLgg_Invite_Champions": "RGL.gg - Invite Champions",
"TF_TournamentMedal_RGLgg_Invite_2nd": "RGL.gg - Invite 2nd Place",
"TF_TournamentMedal_RGLgg_Invite_3rd": "RGL.gg - Invite 3rd Place",
"TF_TournamentMedal_RGLgg_Invite_Participant": "RGL.gg - Invite Participant",
"TF_TournamentMedal_RGLgg_Advanced_Champions": "RGL.gg - Advanced Champions",
"TF_TournamentMedal_RGLgg_Advanced_2nd": "RGL.gg - Advanced 2nd Place",
"TF_TournamentMedal_RGLgg_Advanced_3rd": "RGL.gg - Advanced 3rd Place",
"TF_TournamentMedal_RGLgg_Advanced_Participant": "RGL.gg - Advanced Participant",
"TF_TournamentMedal_RGLgg_Main_Champions": "RGL.gg - Main Champions",
"TF_TournamentMedal_RGLgg_Main_2nd": "RGL.gg - Main 2nd Place",
"TF_TournamentMedal_RGLgg_Main_3rd": "RGL.gg - Main 3rd Place",
"TF_TournamentMedal_RGLgg_Main_Participant": "RGL.gg - Main Participant",
"TF_TournamentMedal_RGLgg_IM_Champions": "RGL.gg - IM Champions",
"TF_TournamentMedal_RGLgg_IM_2nd": "RGL.gg - IM 2nd Place",
"TF_TournamentMedal_RGLgg_IM_3rd": "RGL.gg - IM 3rd Place",
"TF_TournamentMedal_RGLgg_IM_Participant": "RGL.gg - IM Participant",
"TF_TournamentMedal_RGLgg_Div1_Champions": "RGL.gg - Div1 Champions",
"TF_TournamentMedal_RGLgg_Div1_2nd": "RGL.gg - Div1 2nd Place",
"TF_TournamentMedal_RGLgg_Div1_3rd": "RGL.gg - Div1 3rd Place",
"TF_TournamentMedal_RGLgg_Div1_Participant": "RGL.gg - Div1 Participant",
"TF_TournamentMedal_RGLgg_Div2_Champions": "RGL.gg - Div2 Champions",
"TF_TournamentMedal_RGLgg_Div2_2nd": "RGL.gg - Div2 2nd Place",
"TF_TournamentMedal_RGLgg_Div2_3rd": "RGL.gg - Div2 3rd Place",
"TF_TournamentMedal_RGLgg_Div2_Participant": "RGL.gg - Div2 Participant",
"TF_TournamentMedal_RGLgg_Div3_Champions": "RGL.gg - Div3 Champions",
"TF_TournamentMedal_RGLgg_Div3_2nd": "RGL.gg - Div3 2nd Place",
"TF_TournamentMedal_RGLgg_Div3_3rd": "RGL.gg - Div3 3rd Place",
"TF_TournamentMedal_RGLgg_Div3_Participant": "RGL.gg - Div3 Participant",
"TF_TournamentMedal_RGLgg_Rec_Participant": "RGL.gg - Rec Participant",
"TF_TournamentMedal_RGLgg_Open_Participant": "RGL.gg - Open Participant",
"TF_TournamentMedal_RGLgg_Amateur_Participant": "RGL.gg - Amateur Participant",
"TF_TournamentMedal_RGLgg_Newcomer_Participant": "RGL.gg - Newcomer Participant",
"TF_TournamentMedal_RGLgg_Invite_Champions_EU": "EU.RGL.gg - Invite Champions",
"TF_TournamentMedal_RGLgg_Invite_2nd_EU": "EU.RGL.gg - Invite 2nd Place",
"TF_TournamentMedal_RGLgg_Invite_3rd_EU": "EU.RGL.gg - Invite 3rd Place",
"TF_TournamentMedal_RGLgg_Invite_Participant_EU": "EU.RGL.gg - Invite Participant",
"TF_TournamentMedal_RGLgg_Div1_Champions_EU": "EU.RGL.gg - Div1 Champions",
"TF_TournamentMedal_RGLgg_Div1_2nd_EU": "EU.RGL.gg - Div1 2nd Place",
"TF_TournamentMedal_RGLgg_Div1_3rd_EU": "EU.RGL.gg - Div1 3rd Place",
"TF_TournamentMedal_RGLgg_Div1_Participant_EU": "EU.RGL.gg - Div1 Participant",
"TF_TournamentMedal_RGLgg_Div2_Champions_EU": "EU.RGL.gg - Div2 Champions",
"TF_TournamentMedal_RGLgg_Div2_2nd_EU": "EU.RGL.gg - Div2 2nd Place",
"TF_TournamentMedal_RGLgg_Div2_3rd_EU": "EU.RGL.gg - Div2 3rd Place",
"TF_TournamentMedal_RGLgg_Div2_Participant_EU": "EU.RGL.gg - Div2 Participant",
"TF_TournamentMedal_RGLgg_Div3_Champions_EU": "EU.RGL.gg - Div3 Champions",
"TF_TournamentMedal_RGLgg_Div3_2nd_EU": "EU.RGL.gg - Div3 2nd Place",
"TF_TournamentMedal_RGLgg_Div3_3rd_EU": "EU.RGL.gg - Div3 3rd Place",
"TF_TournamentMedal_RGLgg_Div3_Participant_EU": "EU.RGL.gg - Div3 Participant",
"TF_TournamentMedal_RGLgg_Open_Participant_EU": "EU.RGL.gg - Open Participant",
"TF_TournamentMedal_RGLgg_Highlander_Invite_Champions": "RGL.gg - Invite Champions - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Invite_2nd": "RGL.gg - Invite 2nd Place - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Invite_3rd": "RGL.gg - Invite 3rd Place - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Invite_Participant": "RGL.gg - Invite Participant - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Challenger_Champions": "RGL.gg - Challenger Champions - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Challenger_2nd": "RGL.gg - Challenger 2nd Place - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Challenger_3rd": "RGL.gg - Challenger 3rd Place - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Challenger_Participant": "RGL.gg - Challenger Participant - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Advanced_Champions": "RGL.gg - Advanced Champions - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Advanced_2nd": "RGL.gg - Advanced 2nd Place - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Advanced_3rd": "RGL.gg - Advanced 3rd Place - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Advanced_Participant": "RGL.gg - Advanced Participant - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Main_Champions": "RGL.gg - Main Champions - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Main_2nd": "RGL.gg - Main 2nd Place - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Main_3rd": "RGL.gg - Main 3rd Place - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Main_Participant": "RGL.gg - Main Participant - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Intermediate_Champions": "RGL.gg - Intermediate Champions - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Intermediate_2nd": "RGL.gg - Intermediate 2nd Place - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Intermediate_3rd": "RGL.gg - Intermediate 3rd Place - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Intermediate_Participant": "RGL.gg - Intermediate Participant - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Open_Participant": "RGL.gg - Open Participant - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Amateur_Participant": "RGL.gg - Amateur Participant - Highlander",
"TF_TournamentMedal_RGLgg_Highlander_Newcomer_Participant": "RGL.gg - Newcomer Participant - Highlander",
"TF_TournamentMedal_RGLgg_Div1_Champions_AU": "RGL.gg - Div1 Champions AU",
"TF_TournamentMedal_RGLgg_Div1_2nd_AU": "RGL.gg - Div1 2nd Place AU",
"TF_TournamentMedal_RGLgg_Div1_3rd_AU": "RGL.gg - Div1 3rd Place AU",
"TF_TournamentMedal_RGLgg_Div1_Participant_AU": "RGL.gg - Div1 Participant AU",
"TF_TournamentMedal_RGLgg_Div2_Champions_AU": "RGL.gg - Div2 Champions AU",
"TF_TournamentMedal_RGLgg_Div2_2nd_AU": "RGL.gg - Div2 2nd Place AU",
"TF_TournamentMedal_RGLgg_Div2_3rd_AU": "RGL.gg - Div2 3rd Place AU",
"TF_TournamentMedal_RGLgg_Div2_Participant_AU": "RGL.gg - Div2 Participant AU",
"TF_TournamentMedal_RGLgg_Staff_AU": "RGL.gg - Staff AU",
"TF_TournamentMedal_RGLgg_OneDayCup_NA_1": "RGL.gg One Day Prolander Cup - NA #1",
"TF_TournamentMedal_RGLgg_OneDayCup_NA_2": "RGL.gg One Day Prolander Cup - NA #2",
"TF_TournamentMedal_RGLgg_OneDayCup_NA_1_Staff": "RGL.gg Staff - One Day Prolander Cup - NA #1",
"TF_TournamentMedal_RGLgg_OneDayCup_NA_2_Staff": "RGL.gg Staff - One Day Prolander Cup - NA #2",
"TF_TournamentMedal_RGLgg_HighlanderCup_Exp": "RGL.gg Highlander Experimental Maps Cup",
"TF_TournamentMedal_RGLgg_OneDayCup": "RGL.gg One Day Prolander Cup",
"TF_TournamentMedal_RGLgg_Sixes_Invite_Champions": "RGL.gg - Invite Champions - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Invite_2nd": "RGL.gg - Invite 2nd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Invite_3rd": "RGL.gg - Invite 3rd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Invite_Participant": "RGL.gg - Invite Participant - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Div1_Champions": "RGL.gg - Div-1 Champions - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Div1_2nd": "RGL.gg - Div-1 2nd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Div1_3rd": "RGL.gg - Div-1 3rd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Div1_Participant": "RGL.gg - Div-1 Participant - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Div2_Champions": "RGL.gg - Div-2 Champions - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Div2_2nd": "RGL.gg - Div-2 2nd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Div2_3rd": "RGL.gg - Div-2 3rd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Div2_Participant": "RGL.gg - Div-2 Participant - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Div3_Champions": "RGL.gg - Div-3 Champions - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Div3_2nd": "RGL.gg - Div-3 2nd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Div3_3rd": "RGL.gg - Div-3 3rd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Div3_Participant": "RGL.gg - Div-3 Participant - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Advanced_Champions": "RGL.gg - Advanced Champions - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Advanced_2nd": "RGL.gg - Advanced 2nd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Advanced_3rd": "RGL.gg - Advanced 3rd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Advanced_Participant": "RGL.gg - Advanced Participant - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Main_Champions": "RGL.gg - Main Champions - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Main_2nd": "RGL.gg - Main 2nd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Main_3rd": "RGL.gg - Main 3rd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Main_Participant": "RGL.gg - Main Participant - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Intermediate_Champions": "RGL.gg - Intermediate Champions - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Intermediate_2nd": "RGL.gg - Intermediate 2nd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Intermediate_3rd": "RGL.gg - Intermediate 3rd Place - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Intermediate_Participant": "RGL.gg - Intermediate Participant - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Open_Participant": "RGL.gg - Open Participant - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_Sixes_Amateur_Participant": "RGL.gg - Amateur Participant - No Restriction Sixes",
"TF_TournamentMedal_RGLgg_6v6_Invite_Champions": "RGL.gg - Invite Champions - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Invite_2nd": "RGL.gg - Invite 2nd Place - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Invite_3rd": "RGL.gg - Invite 3rd Place - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Invite_Participant": "RGL.gg - Invite Participant - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Advanced_Champions": "RGL.gg - Advanced Champions - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Advanced_2nd": "RGL.gg - Advanced 2nd Place - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Advanced_3rd": "RGL.gg - Advanced 3rd Place - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Advanced_Participant": "RGL.gg - Advanced Participant - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Main_Champions": "RGL.gg - Main Champions - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Main_2nd": "RGL.gg - Main 2nd Place - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Main_3rd": "RGL.gg - Main 3rd Place - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Main_Participant": "RGL.gg - Main Participant - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Intermediate_Champions": "RGL.gg - Intermediate Champions - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Intermediate_2nd": "RGL.gg - Intermediate 2nd Place - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Intermediate_3rd": "RGL.gg - Intermediate 3rd Place - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Intermediate_Participant": "RGL.gg - Intermediate Participant - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Open_Participant": "RGL.gg - Open Participant - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Div1_Champions": "RGL.gg - Div-1 Champions - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Div1_2nd": "RGL.gg - Div-1 2nd Place - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Div1_3rd": "RGL.gg - Div-1 3rd Place - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Div1_Participant": "RGL.gg - Div-1 Participant - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Div2_Champions": "RGL.gg - Div-2 Champions - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Div2_2nd": "RGL.gg - Div-2 2nd Place - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Div2_3rd": "RGL.gg - Div-2 3rd Place - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Div2_Participant": "RGL.gg - Div-2 Participant - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Amateur_Participant": "RGL.gg - Amateur Participant - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Newcomer_Participant": "RGL.gg - Newcomer Participant - 6v6",
"TF_TournamentMedal_RGLgg_6v6_Newcomer_Cup": "RGL.gg - Newcomer Cup - 6v6",
"TF_TournamentMedal_TitaniumTank_Participant_2017": "Titanium Tank Participant 2017",
"TF_TournamentMedal_TitaniumTank_Participant_2017_Desc": "This badge is proof that you have earned your mettle against a raging horde of robots! Good job, sport! Awarded to all participants of Potato's MvM Server's community MvM events!",
"TF_TournamentMedal_TitaniumTank_Participant_2020": "Replica Titanium Tank 2020",
"TF_TournamentMedal_TitaniumTank_Participant_2020_Desc": "We fired up the medal presses and forged some replicas of this timeless classic just for you. The eggheads told us we couldn't afford it, but we'll be damned if we let you go unrewarded. Awarded to players of Potato's MvM Server's charity tour!",
"TF_TournamentMedal_TitaniumTank_Donator_2020": "Titanium Tank Gilded Giver 2020",
"TF_TournamentMedal_TitaniumTank_Donator_2020_Desc": "It takes a golden heart to breach quarantine and fight off hordes of killer robots in the midst of a coronavirus pandemic. For your heroic deeds, you've earned the right to finally leave your house. Awarded to donors of Potato's MvM Server's charity tour!",
"TF_TournamentMedal_TitaniumTank_Donator_Rainbow_2020": "Titanium Tank Chromatic Cardioid 2020",
"TF_TournamentMedal_TitaniumTank_Donator_Rainbow_2020_Desc": "Thanks to the full spectrum of players like you, we'll conquer this pandemic, just like you conquered endless waves of murderous robots. Awarded to donors of Potato's MvM Server's charity tour!",
"TF_rewind_lan_gold": "ESA Rewind 1st Place",
"TF_rewind_lan_silver": "ESA Rewind 2nd Place",
"TF_rewind_lan_bronze": "ESA Rewind 3rd Place",
"TF_rewind_lan_participant": "ESA Rewind Participant",
"TF_TournamentMedal_RewindII_DonorT1": "ESA Rewind II Tier 1 Donor",
"TF_TournamentMedal_RewindII_DonorT2": "ESA Rewind II Tier 2 Donor",
"TF_TournamentMedal_RewindII_DonorT3": "ESA Rewind II Tier 3 Donor",
"TF_TournamentMedal_RewindII_Donor_Desc": "Awarded to those who donated to the ESA Rewind II LAN 2018 prize pool.",
"TF_TournamentMedal_RewindII_Top8": "ESA Rewind II Top 8",
"TF_TournamentMedal_RewindII_Top8_Desc": "Awarded to those who placed in the Top 8 of the invite bracket for the ESA Rewind II 2018 LAN tournament.",
"TF_TournamentMedal_RewindII_Participant": "ESA Rewind II Participant",
"TF_TournamentMedal_RewindII_Participant_Desc": "Awarded to those who participated or contributed to the ESA Rewind II 2018 LAN tournament.",
"TF_TournamentMedal_Canteen_Crasher_Platinum": "Canteen Crasher Platinum Crit 2018",
"TF_TournamentMedal_Canteen_Crasher_Platinum_Desc": "You've proven yourself to excel at instantaneous problem-solving! Great work, merc! Awarded to participants of Potato's MvM Server's hybrid MvM contest!",
"TF_TournamentMedal_Canteen_Crasher_Gold": "Canteen Crasher Gold Über 2018",
"TF_TournamentMedal_Canteen_Crasher_Gold_Desc": "When the going gets tough, call for immortality from your nearest retailer! Awarded to participants of Potato's MvM Server's hybrid MvM contest!",
"TF_TournamentMedal_Canteen_Crasher_Silver": "Canteen Crasher Silver Building 2018",
"TF_TournamentMedal_Canteen_Crasher_Silver_Desc": "This wrench box has a timer and rumble feature for the best Sentry Buster experience! Awarded to participants of Potato's MvM Server's hybrid MvM contest!",
"TF_TournamentMedal_Canteen_Crasher_Bronze": "Canteen Crasher Bronze Ammo 2018",
"TF_TournamentMedal_Canteen_Crasher_Bronze_Desc": "Now here's a question for the ages: How do you use something encased in bronze? Awarded to participants of Potato's MvM Server's hybrid MvM contest!",
"TF_TournamentMedal_Canteen_Crasher_Iron": "Canteen Crasher Iron Recall 2018",
"TF_TournamentMedal_Canteen_Crasher_Iron_Desc": "Press this button to return to base and get free tetanus or a deadly power surge! Awarded to participants of Potato's MvM Server's hybrid MvM contest!",
"TF_TournamentMedal_Canteen_Crasher_Rust": "Canteen Crasher Rust Starter 2018",
"TF_TournamentMedal_Canteen_Crasher_Rust_Desc": "As a reward for showing up, we present to you something we found in our tool shed! Awarded to participants of Potato's MvM Server's hybrid MvM contest!",
"TF_TournamentMedal_HolographicHarvest_Carbon": "Holographic Harvest Carbon Compassion 2022",
"TF_TournamentMedal_HolographicHarvest_Carbon_Desc": "A sack full of these things showed up at our door with instructions to send them to coordinates in South America. Not sure why we got them and we definitely aren't giving them back! Awarded to donors of the Holographic Harvest charity drive!",
"TF_TournamentMedal_HolographicHarvest_Zebra": "Holographic Harvest Zebra Zirconia 2022",
"TF_TournamentMedal_HolographicHarvest_Zebra_Desc": "The nerds out there will tell you that zebras don't live in the rainforest, well go see for yourself! Over the past several years we've been quietly smuggling three zebras a week to Colombia.  Why did we do it? Why not! They'll be fine. Awarded to donors of the Holographic Harvest charity drive!",
"TF_TournamentMedal_HolographicHarvest_Lahsuniya": "Holographic Harvest Lahsuniya Ratna 2022",
"TF_TournamentMedal_HolographicHarvest_Lahsuniya_Desc": "Tigers are some of the most feared animals in the wild and let's face it, you probably wouldn't last long in a fight with one.  Don't worry though because you can do plenty of things a tiger can't, like show all your friends this very cool gem! Awarded to donors of the Holographic Harvest charity drive!",
"TF_TournamentMedal_HolographicHarvest_Canteen": "Holographic Harvest Haunted Scrap Canteen 2022",
"TF_TournamentMedal_HolographicHarvest_Canteen_Desc": "At first glance, this may seem like an ordinary canteen that has seen better days.  Once picked up, it becomes clear that something truly sinister has been entombed behind those welds.  It's probably for the best that this thing is rusted shut.  Awarded to the players of Potato MvM's Holographic Harvest event!",
"TF_TournamentMedal_Copenhagen_6v6_Gold": "Copenhagen Games 6v6 1st Place",
"TF_TournamentMedal_Copenhagen_6v6_Silver": "Copenhagen Games 6v6 2nd Place",
"TF_TournamentMedal_Copenhagen_6v6_Bronze": "Copenhagen Games 6v6 3rd Place",
"TF_TournamentMedal_Copenhagen_6v6_Iron": "Copenhagen Games 6v6 Participant",
"TF_TournamentMedal_Copenhagen_Highlander_Gold": "Copenhagen Games Highlander 1st Place",
"TF_TournamentMedal_Copenhagen_Highlander_Silver": "Copenhagen Games Highlander 2nd Place",
"TF_TournamentMedal_Copenhagen_Highlander_Bronze": "Copenhagen Games Highlander 3rd Place",
"TF_TournamentMedal_Copenhagen_Highlander_Iron": "Copenhagen Games Highlander Participant",
"TF_TournamentMedal_Copenhagen_Staff": "Copenhagen Games Staff",
"TF_TournamentMedal_Copenhagen_Participant": "Copenhagen Games Participant",
"TF_TournamentMedal_GIO_Champion": "Gette it Onne! Champion",
"TF_TournamentMedal_GIO_Playoffs": "Gette it Onne! Playoffs Participant",
"TF_TournamentMedal_GIO_Participant": "Gette it Onne! Participant",
"TF_TournamentMedal_GIO_Helper": "Gette it Onne! Helper",
"TF_TournamentMedal_HLPugs_Gold": "HLPugs.tf Highlander Cup 1st Place",
"TF_TournamentMedal_HLPugs_Silver": "HLPugs.tf Highlander Cup 2nd Place",
"TF_TournamentMedal_HLPugs_Bronze": "HLPugs.tf Highlander Cup 3rd Place",
"TF_TournamentMedal_HLPugs_Participant": "HLPugs.tf Highlander Cup Participant",
"TF_TournamentMedal_HLPugs_Contributor": "HLPugs.tf Highlander Cup Contributor",
"TF_TournamentMedal_Pure_Premier_First": "PURE League Premier Division 1st Place",
"TF_TournamentMedal_Pure_Premier_Second": "PURE League Premier Division 2nd Place",
"TF_TournamentMedal_Pure_Premier_Third": "PURE League Premier Division 3rd Place",
"TF_TournamentMedal_Pure_Premier_Participant": "PURE League Premier Division Participant",
"TF_TournamentMedal_Pure_Intermediate_First": "PURE League Intermediate Division 1st Place",
"TF_TournamentMedal_Pure_Intermediate_Second": "PURE League Intermediate Division 2nd Place",
"TF_TournamentMedal_Pure_Intermediate_Third": "PURE League Intermediate Division 3rd Place",
"TF_TournamentMedal_Pure_Intermediate_Participant": "PURE League Intermediate Division Participant",
"TF_TournamentMedal_Pure_Open_First": "PURE League Open Division 1st Place",
"TF_TournamentMedal_Pure_Open_Second": "PURE League Open Division 2nd Place",
"TF_TournamentMedal_Pure_Open_Third": "PURE League Open Division 3rd Place",
"TF_TournamentMedal_Pure_Open_Participant": "PURE League Open Division Participant",
"TF_TournamentMedal_Beginnings5_First": "Beginnings 5 First Place Medal",
"TF_TournamentMedal_Beginnings5_First_Desc": "Awarded to those who placed 1st in TF2RJweekly's 5th jumping competition.",
"TF_TournamentMedal_Beginnings5_Second": "Beginnings 5 Second Place Medal",
"TF_TournamentMedal_Beginnings5_Second_Desc": "Awarded to those who placed 2nd in TF2RJweekly's 5th jumping competition.",
"TF_TournamentMedal_Beginnings5_Third": "Beginnings 5 Third Place Medal",
"TF_TournamentMedal_Beginnings5_Third_Desc": "Awarded to those who placed 3rd in TF2RJweekly's 5th jumping competition.",
"TF_TournamentMedal_Beginnings5_Participant": "Beginnings 5 Participant Medal",
"TF_TournamentMedal_Beginnings5_Participant_Desc": "Awarded to those who participated in TF2RJweekly's 5th jumping competition.",
"TF_TournamentMedal_Beginnings5_Helper": "Beginnings 5 Helper Medal",
"TF_TournamentMedal_Beginnings5_Helper_Desc": "Awarded to those who helped out with TF2RJweekly's 5th jumping competition.",
"TF_TournamentMedal_Blapature2018_Tier1": "Blapature Co. Backer",
"TF_TournamentMedal_Blapature2018_Tier1_Desc": "The most important thing when making jam is to replace literally everything with avocados. Thank you for supporting the Blapature Co. Charity Bash 2018!",
"TF_TournamentMedal_Blapature2018_Tier2": "Blapature Co. Supporter",
"TF_TournamentMedal_Blapature2018_Tier2_Desc": "An avocado a day keeps the doctor away: you just have to hit them between the eyes. Thank you for supporting the Blapature Co. Charity Bash 2018!",
"TF_TournamentMedal_Blapature2018_Tier3": "Blapature Co. Benefactor",
"TF_TournamentMedal_Blapature2018_Tier3_Desc": "Distinguish yourself from Millennials by proudly proclaiming you eat avocado toast. Thank you for supporting the Blapature Co. Charity Bash 2018!",
"TF_TournamentMedal_Blapature2019_Tier1": "BlapBash Backer 2019",
"TF_TournamentMedal_Blapature2019_Tier1_Desc": "The most important thing when making jam is to crush the avocados and not the housing market. Thank you for supporting BlapBash 2019!",
"TF_TournamentMedal_Blapature2019_Tier2": "BlapBash Supporter 2019",
"TF_TournamentMedal_Blapature2019_Tier2_Desc": "An avocado a day keeps the doctor away: You just can't afford both. Thank you for supporting BlapBash 2019!",
"TF_TournamentMedal_Blapature2019_Tier3": "BlapBash Benefactor 2019",
"TF_TournamentMedal_Blapature2019_Tier3_Desc": "If avocado toast will result in unaffordable housing, then at least you'll have a splendid breakfast. Thank you for supporting BlapBash 2019!",
"TF_TournamentMedal_Blapature2021_Tier1": "BlapBash Backer 2021",
"TF_TournamentMedal_Blapature2021_Tier1_Desc": "The most important part of making jam isn't the way you make it, but to remember the totally inexpensive on-brand avocados. Thank you for supporting BlapBash 2021!",
"TF_TournamentMedal_Blapature2021_Tier2": "BlapBash Supporter 2021",
"TF_TournamentMedal_Blapature2021_Tier2_Desc": "An avocado a day keeps you healthy and curious as to where Blap-Chan went. Thank you for supporting BlapBash 2021!",
"TF_TournamentMedal_Blapature2021_Tier3": "BlapBash Benefactor 2021",
"TF_TournamentMedal_Blapature2021_Tier3_Desc": "Not only did you bring fresh avocado toast to the table, you also brought happiness to those who want to join in on the fun. Thank you for supporting BlapBash 2021!",
"TF_TournamentMedal_Blapature2022_Tier1": "BlapBash Backer 2022",
"TF_TournamentMedal_Blapature2022_Tier1_Desc": "The most important thing when making jam is ignoring the defeated stares from your loved ones as you serve it for the seventh week in a row. Thank you for supporting BlapBash 2022!",
"TF_TournamentMedal_Blapature2022_Tier2": "BlapBash Supporter 2022",
"TF_TournamentMedal_Blapature2022_Tier2_Desc": "An avocado a day ain't much, but it's honest fruit. Thank you for supporting BlapBash 2022!",
"TF_TournamentMedal_Blapature2022_Tier3": "BlapBash Benefactor 2022",
"TF_TournamentMedal_Blapature2022_Tier3_Desc": "When your brand surrounds avocados, be prepared to love Avocado toast for breakfast, lunch, dinner, and to cherish, until parted by financial death. Thank you for supporting BlapBash 2022!",
"TF_TournamentMedal_Blapature2022_Tier4": "BlapBash Advocator 2022",
"TF_TournamentMedal_Blapature2022_Tier4_Desc": "The best kind of jam is made from aged avocados. Thank you for supporting BlapBash 2022!",
"TF_TournamentMedal_Fresh_Meat_Prolander_Helper": "Fresh Meat Prolander Cup Helper",
"TF_TournamentMedal_Fresh_Meat_Prolander_Participant": "Fresh Meat Prolander Cup Participant",
"TF_TournamentMedal_Fresh_Meat_Prolander_1st": "Fresh Meat Prolander Cup 1st Place",
"TF_TournamentMedal_Fresh_Meat_Prolander_2nd": "Fresh Meat Prolander Cup 2nd Place",
"TF_TournamentMedal_Fresh_Meat_Prolander_3rd": "Fresh Meat Prolander Cup 3rd Place",
"TF_TournamentMedal_Fresh_Meat_Prolander_Amateur_1st": "Fresh Meat Prolander Cup Amateur 1st Place",
"TF_TournamentMedal_Fresh_Meat_Prolander_Amateur_2nd": "Fresh Meat Prolander Cup Amateur 2nd Place",
"TF_TournamentMedal_Fresh_Meat_Prolander_Amateur_3rd": "Fresh Meat Prolander Cup Amateur 3rd Place",
"TF_TournamentMedal_Fresh_Meat_Prolander_Elite_1st": "Fresh Meat Prolander Cup Elite 1st Place",
"TF_TournamentMedal_Fresh_Meat_Prolander_Elite_2nd": "Fresh Meat Prolander Cup Elite 2nd Place",
"TF_TournamentMedal_Fresh_Meat_Prolander_Elite_3rd": "Fresh Meat Prolander Cup Elite 3rd Place",
"TF_TournamentMedal_NewbiDuo_Cup_1st": "NewbiDuo Cup 1st Place",
"TF_TournamentMedal_NewbiDuo_Cup_2nd": "NewbiDuo Cup 2nd Place",
"TF_TournamentMedal_NewbiDuo_Cup_3rd": "NewbiDuo Cup 3rd Place",
"TF_TournamentMedal_NewbiDuo_Cup_Participant": "NewbiDuo Cup Participant",
"TF_TournamentMedal_NewbiDuo_Cup_Helper": "NewbiDuo Cup Helper",
"TF_TournamentMedal_PASSTime_Federation_1st": "PASS Time Federation 1st Place Medal",
"TF_TournamentMedal_PASSTime_Federation_2nd": "PASS Time Federation 2nd Place Medal",
"TF_TournamentMedal_PASSTime_Federation_3rd": "PASS Time Federation 3rd Place Medal",
"TF_TournamentMedal_PASSTime_Federation_Participant": "PASS Time Federation Participant",
"TF_TournamentMedal_PASSTime_Federation_Helper": "PASS Time Federation Helper",
"TF_TournamentMedal_PASSTime_Federation_Staff": "PASS Time Federation Staff Medal",
"TF_TournamentMedal_PASSTime_Federation_Volunteer": "PASS Time Federation Volunteer Medal",
"TF_TournamentMedal_PASSTime_Federation_EU_1st": "PASS Time Federation - EU - 1st Place Medal",
"TF_TournamentMedal_PASSTime_Federation_EU_2nd": "PASS Time Federation - EU - 2nd Place Medal",
"TF_TournamentMedal_PASSTime_Federation_EU_3rd": "PASS Time Federation - EU - 3rd Place Medal",
"TF_TournamentMedal_PASSTime_Federation_EU_Participant": "PASS Time Federation - EU - Participant",
"TF_TournamentMedal_PASSTime_Federation_NA_1st": "PASS Time Federation - NA - 1st Place Medal",
"TF_TournamentMedal_PASSTime_Federation_NA_2nd": "PASS Time Federation - NA - 2nd Place Medal",
"TF_TournamentMedal_PASSTime_Federation_NA_3rd": "PASS Time Federation - NA - 3rd Place Medal",
"TF_TournamentMedal_PASSTime_Federation_NA_Participant": "PASS Time Federation - NA - Participant",
"TF_TournamentMedal_PASSTime_Federation_Season3_1st_Desc": "Congratulations! You have clearly shown who is the master of sports. You know every move to take, angle to measure, breath to take and triggers to avoid. You have shown nothing but the best. Literally – you, you, you! People have earned your respect, and newcomers deserve to praise you. Use this as a bragging right to show that you know your ways!\n\nAwarded to PASS Time Federation 1st place winners during Season 3.",
"TF_TournamentMedal_PASSTime_Federation_Season3_2nd_Desc": "Listen up, mercenary. You see that pile of dead bodies that have fought over a pesky ball? Look how far you have come! You thought that you'd join the pile, but you are barely a part of that dumpster. You have shown real skill, true teamwork and friendship within your team. You have no reason to be ashamed of what you have done! You're a real mercenary who should be proud, still mentioned and given a handshake. Good job!\n\nAwarded to PASS Time Federation 2nd place winners during Season 3.",
"TF_TournamentMedal_PASSTime_Federation_Season3_3rd_Desc": "Feeling on edge? Fear not! You're the one who got yourself off that damn edge. You have managed to kick away every possible obstacle – balls, dust, branches, sweat and...rockets? I am not sure why explosives are involved in sports, but who cares? You have beaten that, champ!\n\nAwarded to PASS Time Federation 3rd place winners during Season 3.",
"TF_TournamentMedal_PASSTime_Federation_Season3_Participant_Desc": "You might have seen some folks kick the ball, punch it, throw it, or perhaps even chew it...eww. Maybe something else on the TV. Either way, you wanted to give it a shot (literally), and you did it! You've shown to others that you were not a coward but a mercenary who at least tried their best.\n\nAwarded to PASS Time Federation participants during Season 3.",
"TF_TournamentMedal_PASSTime_Federation_Season3_Staff_Desc": "You might have blown a whistle to players, shown yellow and red cards to rule breakers or yelled at the majority because you've been tired of the chaos, but you managed to get everyone together on the field. Without you, people would not be able to make their dreams come true. With your efforts, you might have gained some friends or foes, but you will always be remembered as the one who has helped organize the mess that is PASS Time.\n\nAwarded to PASS Time Federation staff members during Season 3.",
"TF_TournamentMedal_PASSTime_Federation_Season4_1st_Desc": "Congratulations! You've clearly demonstrated who the master of sports is. You know every move to make, angle to measure, breath to take, and trigger to avoid. Use this as your bragging right to showcase your mastery!\n\nAwarded to the 1st place winners of PASS Time Federation Season 4 - EU Region.",
"TF_TournamentMedal_PASSTime_Federation_Season4_2nd_Desc": "Listen up, mercenary. You've survived the battlefield where others fell. Your skill, teamwork, loyalty, and bond with your team have set you apart. Hold your head high - you've earned every bit of respect by kicking that ball. Well done!\n\nAwarded to the 2nd place winners of PASS Time Federation Season 4 - EU Region.",
"TF_TournamentMedal_PASSTime_Federation_Season4_3rd_Desc": "Feeling on edge? Fear not! You're the one who pulled yourself back from that brink. You've kicked away every obstacle — dust, branches, sweat, and... rockets? Not sure why explosives are part of sports, but who cares? You've beaten them all, champ!\n\nAwarded to the 3rd place winners of PASS Time Federation Season 4 - EU Region.",
"TF_TournamentMedal_PASSTime_Federation_Season4_Participant_Desc": "You might have seen folks kick, punch, or even chew the ball... eww. Whatever else was on TV, you decided to give it a shot (literally), and you did! You've shown everyone that you're no coward but a mercenary who truly gave their best!\n\nAwarded to PASS Time Federation participants during Season 4 – EU Region.",
"TF_TournamentMedal_PASSTime_Federation_Season4_Staff_Desc": "Whether you cheered, organized, or kept things running smoothly, your dedication made all the difference. You've helped make PASS Time a success and will be remembered as a true hero of the game. Thanks for all your hard work, comrade!\n\nAwarded to PASS Time Federation volunteers during Season 4 – EU Region.",
"TF_TournamentMedal_Chapelaria_Highlander_Gladiator_1st": "Chapelaria Highlander Gladiator 1st Place",
"TF_TournamentMedal_Chapelaria_Highlander_Gladiator_2nd": "Chapelaria Highlander Gladiator 2nd Place",
"TF_TournamentMedal_Chapelaria_Highlander_Gladiator_3rd": "Chapelaria Highlander Gladiator 3rd Place",
"TF_TournamentMedal_Chapelaria_Highlander_Gladiator_Participant": "Chapelaria Highlander Gladiator Participant",
"TF_TournamentMedal_Chapelaria_Highlander_Legatus_1st": "Chapelaria Highlander Legatus 1st Place",
"TF_TournamentMedal_Chapelaria_Highlander_Legatus_2nd": "Chapelaria Highlander Legatus 2nd Place",
"TF_TournamentMedal_Chapelaria_Highlander_Legatus_3rd": "Chapelaria Highlander Legatus 3rd Place",
"TF_TournamentMedal_Chapelaria_Highlander_Legatus_Participant": "Chapelaria Highlander Legatus Participant",
"TF_TournamentMedal_Chapelaria_Highlander_Season1": "Chapelaria SA Highlander League - Season 1",
"TF_TournamentMedal_Respawn_Highlander_1st": "Respawn League Highlander 1st Place",
"TF_TournamentMedal_Respawn_Highlander_2nd": "Respawn League Highlander 2nd Place",
"TF_TournamentMedal_Respawn_Highlander_3rd": "Respawn League Highlander 3rd Place",
"TF_TournamentMedal_Respawn_Highlander_Participant": "Respawn League Highlander Participant",
"TF_TournamentMedal_Respawn_Highlander_Founder": "Respawn League Highlander Founder",
"TF_TournamentMedal_Respawn_AusNz_4v4_1st": "Respawn League AUS/NZ 4v4 1st Place",
"TF_TournamentMedal_Respawn_AusNz_4v4_2nd": "Respawn League AUS/NZ 4v4 2nd Place",
"TF_TournamentMedal_Respawn_AusNz_4v4_3rd": "Respawn League AUS/NZ 4v4 3rd Place",
"TF_TournamentMedal_Respawn_AusNz_4v4_Participant": "Respawn League AUS/NZ 4v4 Participant",
"TF_TournamentMedal_Respawn_AusNz_Highlander_1st": "Respawn League AUS/NZ Highlander 1st Place",
"TF_TournamentMedal_Respawn_AusNz_Highlander_2nd": "Respawn League AUS/NZ Highlander 2nd Place",
"TF_TournamentMedal_Respawn_AusNz_Highlander_3rd": "Respawn League AUS/NZ Highlander 3rd Place",
"TF_TournamentMedal_Respawn_AusNz_Highlander_Participant": "Respawn League AUS/NZ Highlander Participant",
"TF_TournamentMedal_Respawn_AusNz_Highlander_Main_1st": "Respawn League AUS/NZ Highlander Main 1st Place",
"TF_TournamentMedal_Respawn_AusNz_Highlander_Main_2nd": "Respawn League AUS/NZ Highlander Main 2nd Place",
"TF_TournamentMedal_Respawn_AusNz_Highlander_Main_3rd": "Respawn League AUS/NZ Highlander Main 3rd Place",
"TF_TournamentMedal_Respawn_AusNz_Highlander_Main_Participant": "Respawn League AUS/NZ Highlander Main Participant",
"TF_TournamentMedal_Respawn_AusNz_Highlander_Premier_1st": "Respawn League AUS/NZ Highlander Premier 1st Place",
"TF_TournamentMedal_Respawn_AusNz_Highlander_Premier_2nd": "Respawn League AUS/NZ Highlander Premier 2nd Place",
"TF_TournamentMedal_Respawn_AusNz_Highlander_Premier_3rd": "Respawn League AUS/NZ Highlander Premier 3rd Place",
"TF_TournamentMedal_Respawn_AusNz_Highlander_Premier_Participant": "Respawn League AUS/NZ Highlander Premier Participant",
"TF_TournamentMedal_Respawn_AusNz_QuadlanderMain4v4_1st": "Respawn League AUS/NZ Quadlander Main 4v4 1st Place",
"TF_TournamentMedal_Respawn_AusNz_QuadlanderMain4v4_2nd": "Respawn League AUS/NZ Quadlander Main 4v4 2nd Place",
"TF_TournamentMedal_Respawn_AusNz_QuadlanderMain4v4_3rd": "Respawn League AUS/NZ Quadlander Main 4v4 3rd Place",
"TF_TournamentMedal_Respawn_AusNz_QuadlanderMain4v4_Participant": "Respawn League AUS/NZ Quadlander Main 4v4 Participant",
"TF_TournamentMedal_Respawn_AusNz_QuadlanderPremier4v4_1st": "Respawn League AUS/NZ Quadlander Premier 4v4 1st Place",
"TF_TournamentMedal_Respawn_AusNz_QuadlanderPremier4v4_2nd": "Respawn League AUS/NZ Quadlander Premier 4v4 2nd Place",
"TF_TournamentMedal_Respawn_AusNz_QuadlanderPremier4v4_3rd": "Respawn League AUS/NZ Quadlander Premier 4v4 3rd Place",
"TF_TournamentMedal_Respawn_AusNz_QuadlanderPremier4v4_Participant": "Respawn League AUS/NZ Quadlander Premier 4v4 Participant",
"TF_TournamentMedal_Respawn_AusNz_BBall_Main_1st": "Respawn League AUS/NZ BBall Main 1st Place",
"TF_TournamentMedal_Respawn_AusNz_BBall_Main_2nd": "Respawn League AUS/NZ BBall Main 2nd Place",
"TF_TournamentMedal_Respawn_AusNz_BBall_Main_3rd": "Respawn League AUS/NZ BBall Main 3rd Place",
"TF_TournamentMedal_Respawn_AusNz_BBall_Main_Participant": "Respawn League AUS/NZ BBall Main Participant",
"TF_TournamentMedal_Respawn_AusNz_BBall_Intermediate_1st": "Respawn League AUS/NZ BBall Intermediate 1st Place",
"TF_TournamentMedal_Respawn_AusNz_BBall_Intermediate_2nd": "Respawn League AUS/NZ BBall Intermediate 2nd Place",
"TF_TournamentMedal_Respawn_AusNz_BBall_Intermediate_3rd": "Respawn League AUS/NZ BBall Intermediate 3rd Place",
"TF_TournamentMedal_Respawn_AusNz_BBall_Intermediate_Participant": "Respawn League AUS/NZ BBall Intermediate Participant",
"TF_TournamentMedal_Respawn_AusNz_BBall_Premier_1st": "Respawn League AUS/NZ BBall Premier 1st Place",
"TF_TournamentMedal_Respawn_AusNz_BBall_Premier_2nd": "Respawn League AUS/NZ BBall Premier 2nd Place",
"TF_TournamentMedal_Respawn_AusNz_BBall_Premier_3rd": "Respawn League AUS/NZ BBall Premier 3rd Place",
"TF_TournamentMedal_Respawn_AusNz_BBall_Premier_Participant": "Respawn League AUS/NZ BBall Premier Participant",
"TF_TournamentMedal_Respawn_Asia_4v4_1st": "Respawn League ASIA 4v4 1st Place",
"TF_TournamentMedal_Respawn_Asia_4v4_2nd": "Respawn League ASIA 4v4 2nd Place",
"TF_TournamentMedal_Respawn_Asia_4v4_3rd": "Respawn League ASIA 4v4 3rd Place",
"TF_TournamentMedal_Respawn_Asia_4v4_Participant": "Respawn League ASIA 4v4 Participant",
"TF_TournamentMedal_Respawn_Asia_Highlander_1st": "Respawn League ASIA Highlander 1st Place",
"TF_TournamentMedal_Respawn_Asia_Highlander_2nd": "Respawn League ASIA Highlander 2nd Place",
"TF_TournamentMedal_Respawn_Asia_Highlander_3rd": "Respawn League ASIA Highlander 3rd Place",
"TF_TournamentMedal_Respawn_Asia_Highlander_Participant": "Respawn League ASIA Highlander Participant",
"TF_TournamentMedal_Respawn_Asia_BBall_Main_1st": "Respawn League Asia BBall Main 1st Place",
"TF_TournamentMedal_Respawn_Asia_BBall_Main_2nd": "Respawn League Asia BBall Main 2nd Place",
"TF_TournamentMedal_Respawn_Asia_BBall_Main_3rd": "Respawn League Asia BBall Main 3rd Place",
"TF_TournamentMedal_Respawn_Asia_BBall_Main_Participant": "Respawn League Asia BBall Main Participant",
"TF_TournamentMedal_Respawn_Asia_BBall_Premier_1st": "Respawn League Asia BBall Premier 1st Place",
"TF_TournamentMedal_Respawn_Asia_BBall_Premier_2nd": "Respawn League Asia BBall Premier 2nd Place",
"TF_TournamentMedal_Respawn_Asia_BBall_Premier_3rd": "Respawn League Asia BBall Premier 3rd Place",
"TF_TournamentMedal_Respawn_Asia_BBall_Premier_Participant": "Respawn League Asia BBall Premier Participant",
"TF_TournamentMedal_Respawn_APAC_4v4_1st": "Respawn League APAC 4v4 1st Place",
"TF_TournamentMedal_Respawn_APAC_4v4_2nd": "Respawn League APAC 4v4 2nd Place",
"TF_TournamentMedal_Respawn_APAC_4v4_3rd": "Respawn League APAC 4v4 3rd Place",
"TF_TournamentMedal_Respawn_APAC_4v4_Participant": "Respawn League APAC 4v4 Participant",
"TF_TournamentMedal_Moscow_LAN_1st": "Moscow LAN 1st Place",
"TF_TournamentMedal_Moscow_LAN_2nd": "Moscow LAN 2nd Place",
"TF_TournamentMedal_Moscow_LAN_3rd": "Moscow LAN 3rd Place",
"TF_TournamentMedal_Moscow_LAN_Participant": "Moscow LAN Participant",
"TF_TournamentMedal_Moscow_LAN_Helper": "Moscow LAN Staff",
"TF_TournamentMedal_TFNew_Gold": "TFNew Cup 1st Place",
"TF_TournamentMedal_TFNew_Gold_Desc": "Awarded to players or coaches whose team achieved 1st place in a TFNew 6v6 Newbie Cup",
"TF_TournamentMedal_TFNew_Silver": "TFNew Cup 2nd Place",
"TF_TournamentMedal_TFNew_Silver_Desc": "Awarded to players or coaches whose team achieved 2nd place in a TFNew 6v6 Newbie Cup",
"TF_TournamentMedal_TFNew_Bronze": "TFNew Cup 3rd Place",
"TF_TournamentMedal_TFNew_Bronze_Desc": "Awarded to players or coaches whose team achieved 3rd place in a TFNew 6v6 Newbie Cup",
"TF_TournamentMedal_TFNew_Participant": "TFNew Cup Participant",
"TF_TournamentMedal_TFNew_Participant_Desc": "Awarded to players or coaches who participated in a TFNew 6v6 newbie cup",
"TF_TournamentMedal_UDL_1st": "United Dodgeball League 1st Place",
"TF_TournamentMedal_UDL_2nd": "United Dodgeball League 2nd Place",
"TF_TournamentMedal_UDL_3rd": "United Dodgeball League 3rd Place",
"TF_TournamentMedal_UDL_Gold": "United Dodgeball League Gold Medal",
"TF_TournamentMedal_UDL_Gold_Spring2019": "Awarded to the winners of the United Dodgeball League Spring Cup 2019",
"TF_TournamentMedal_UDL_Silver": "United Dodgeball League Silver Medal",
"TF_TournamentMedal_UDL_Silver_Spring2019": "Awarded to the players that placed second in the United Dodgeball League Spring Cup 2019",
"TF_TournamentMedal_UDL_Bronze": "United Dodgeball League Bronze Medal",
"TF_TournamentMedal_UDL_Bronze_Spring2019": "Awarded to the players that placed third in the United Dodgeball League Spring Cup 2019",
"TF_TournamentMedal_UDL_Participant": "United Dodgeball League Participant",
"TF_TournamentMedal_UDL_Participant_Spring2019": "Awarded to participants of the United Dodgeball League Spring Cup 2019",
"TF_TournamentMedal_UDL_Supporter": "United Dodgeball League Supporter",
"TF_TournamentMedal_UDL_Supporter_Spring2019": "Awarded to valuable contributors of the United Dodgeball League Spring Cup 2019",
"TF_TournamentMedal_UDL_Gold_Summer2020": "Awarded to the winners of the United Dodgeball League Summer Cup 2020",
"TF_TournamentMedal_UDL_Silver_Summer2020": "Awarded to the players that placed second in the United Dodgeball League Summer Cup 2020",
"TF_TournamentMedal_UDL_Bronze_Summer2020": "Awarded to the players that placed third in the United Dodgeball League Summer Cup 2020",
"TF_TournamentMedal_UDL_Participant_Summer2020": "Awarded to participants of the United Dodgeball League Summer Cup 2020",
"TF_TournamentMedal_UDL_Supporter_Summer2020": "Awarded to valuable contributors of the United Dodgeball League Summer Cup 2020",
"TF_TournamentMedal_UDL_Gold_Winter2023": "Awarded to the winners of the United Dodgeball League Winter Cup 2023",
"TF_TournamentMedal_UDL_Silver_Winter2023": "Awarded to the players that placed second in the United Dodgeball League Winter Cup 2023",
"TF_TournamentMedal_UDL_Bronze_Winter2023": "Awarded to the players that placed third in the United Dodgeball League Winter Cup 2023",
"TF_TournamentMedal_UDL_Participant_Winter2023": "Awarded to participants of the United Dodgeball League Winter Cup 2023",
"TF_TournamentMedal_UDL_Supporter_Winter2023": "Awarded to valuable contributors of the United Dodgeball League Winter Cup 2023",
"TF_TournamentMedal_ESEA_6s_first": "ESEA 6s Invite 1st Place",
"TF_TournamentMedal_ESEA_6s_second": "ESEA 6s Invite 2nd Place",
"TF_TournamentMedal_ESEA_6s_third": "ESEA 6s Invite 3rd Place",
"TF_TournamentMedal_ESEA_6s_participant": "ESEA 6s Invite Participant",
"TF_TournamentMedal_BrazilFortress_6s_first": "Brazil Fortress 6v6 First Place",
"TF_TournamentMedal_BrazilFortress_6s_second": "Brazil Fortress 6v6 Second Place",
"TF_TournamentMedal_BrazilFortress_6s_third": "Brazil Fortress 6v6 Third Place",
"TF_TournamentMedal_BrazilFortress_6s_participant": "Brazil Fortress 6v6 Participant",
"TF_TournamentMedal_BrazilFortress_6s_Open_first": "Brazil Fortress 6v6 Open First Place",
"TF_TournamentMedal_BrazilFortress_6s_Open_second": "Brazil Fortress 6v6 Open Second Place",
"TF_TournamentMedal_BrazilFortress_6s_Open_third": "Brazil Fortress 6v6 Open Third Place",
"TF_TournamentMedal_BrazilFortress_6s_Open_participant": "Brazil Fortress 6v6 Open Participant",
"TF_TournamentMedal_BrazilFortress_6s_Invite_first": "Brazil Fortress 6v6 Invite First Place",
"TF_TournamentMedal_BrazilFortress_6s_Invite_second": "Brazil Fortress 6v6 Invite Second Place",
"TF_TournamentMedal_BrazilFortress_6s_Invite_third": "Brazil Fortress 6v6 Invite Third Place",
"TF_TournamentMedal_BrazilFortress_6s_Invite_participant": "Brazil Fortress 6v6 Invite Participant",
"TF_TournamentMedal_BrazilFortress_6s_Div1_first": "Brazil Fortress 6v6 Division 1 First Place",
"TF_TournamentMedal_BrazilFortress_6s_Div1_second": "Brazil Fortress 6v6 Division 1 Second Place",
"TF_TournamentMedal_BrazilFortress_6s_Div1_third": "Brazil Fortress 6v6 Division 1 Third Place",
"TF_TournamentMedal_BrazilFortress_6s_Div1_participant": "Brazil Fortress 6v6 Division 1 Participant",
"TF_TournamentMedal_BrazilFortress_6s_Div2_first": "Brazil Fortress 6v6 Division 2 First Place",
"TF_TournamentMedal_BrazilFortress_6s_Div2_second": "Brazil Fortress 6v6 Division 2 Second Place",
"TF_TournamentMedal_BrazilFortress_6s_Div2_third": "Brazil Fortress 6v6 Division 2 Third Place",
"TF_TournamentMedal_BrazilFortress_6s_Div2_participant": "Brazil Fortress 6v6 Division 2 Participant",
"TF_TournamentMedal_BrazilFortress_6s_Academy_first": "Brazil Fortress 6v6 Academy First Place",
"TF_TournamentMedal_BrazilFortress_6s_Academy_second": "Brazil Fortress 6v6 Academy Second Place",
"TF_TournamentMedal_BrazilFortress_6s_Academy_third": "Brazil Fortress 6v6 Academy Third Place",
"TF_TournamentMedal_BrazilFortress_6s_Academy_participant": "Brazil Fortress 6v6 Academy Participant",
"TF_TournamentMedal_BrazilFortress_6s_Qualified_Stage_Champions": "Brazil Fortress 6v6 Qualified Stage Champions",
"TF_TournamentMedal_BrazilFortress_6s_Helper": "Brazil Fortress 6v6 Helper",
"TF_TournamentMedal_BrazilFortress_Jump_Soldier_Div1_1st": "Brazil Fortress Jump Cup Race Soldier Division 1 First Place",
"TF_TournamentMedal_BrazilFortress_Jump_Soldier_Div1_2nd": "Brazil Fortress Jump Cup Race Soldier Division 1 Second Place",
"TF_TournamentMedal_BrazilFortress_Jump_Soldier_Div1_3rd": "Brazil Fortress Jump Cup Race Soldier Division 1 Third Place",
"TF_TournamentMedal_BrazilFortress_Jump_Soldier_Div1_Participant": "Brazil Fortress Jump Cup Race Soldier Division 1 Participant",
"TF_TournamentMedal_BrazilFortress_Jump_Soldier_Div2_1st": "Brazil Fortress Jump Cup Race Soldier Division 2 First Place",
"TF_TournamentMedal_BrazilFortress_Jump_Soldier_Div2_2nd": "Brazil Fortress Jump Cup Race Soldier Division 2 Second Place",
"TF_TournamentMedal_BrazilFortress_Jump_Soldier_Div2_3rd": "Brazil Fortress Jump Cup Race Soldier Division 2 Third Place",
"TF_TournamentMedal_BrazilFortress_Jump_Soldier_Div2_Participant": "Brazil Fortress Jump Cup Race Soldier Division 2 Participant",
"TF_TournamentMedal_BrazilFortress_Jump_Demoman_1st": "Brazil Fortress Jump Cup Race Demoman First Place",
"TF_TournamentMedal_BrazilFortress_Jump_Demoman_2nd": "Brazil Fortress Jump Cup Race Demoman Second Place",
"TF_TournamentMedal_BrazilFortress_Jump_Demoman_3rd": "Brazil Fortress Jump Cup Race Demoman Third Place",
"TF_TournamentMedal_BrazilFortress_Jump_Demoman_Participant": "Brazil Fortress Jump Cup Race Demoman Participant",
"TF_TournamentMedal_BrazilFortress_Jump_Demoman_Div1_1st": "Brazil Fortress Jump Cup Race Demoman Division 1 First Place",
"TF_TournamentMedal_BrazilFortress_Jump_Demoman_Div1_2nd": "Brazil Fortress Jump Cup Race Demoman Division 1 Second Place",
"TF_TournamentMedal_BrazilFortress_Jump_Demoman_Div1_3rd": "Brazil Fortress Jump Cup Race Demoman Division 1 Third Place",
"TF_TournamentMedal_BrazilFortress_Jump_Demoman_Div1_Participant": "Brazil Fortress Jump Cup Race Demoman Division 1 Participant",
"TF_TournamentMedal_BrazilFortress_Jump_Demoman_Div2_1st": "Brazil Fortress Jump Cup Race Demoman Division 2 First Place",
"TF_TournamentMedal_BrazilFortress_Jump_Demoman_Div2_2nd": "Brazil Fortress Jump Cup Race Demoman Division 2 Second Place",
"TF_TournamentMedal_BrazilFortress_Jump_Demoman_Div2_3rd": "Brazil Fortress Jump Cup Race Demoman Division 2 Third Place",
"TF_TournamentMedal_BrazilFortress_Jump_Demoman_Div2_Participant": "Brazil Fortress Jump Cup Race Demoman Division 2 Participant",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Soldier_1st": "Brazil Fortress Jump Cup Speed Run Soldier First Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Soldier_2nd": "Brazil Fortress Jump Cup Speed Run Soldier Second Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Soldier_3rd": "Brazil Fortress Jump Cup Speed Run Soldier Third Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Soldier_Participant": "Brazil Fortress Jump Cup Speed Run Soldier Participant",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Demoman_1st": "Brazil Fortress Jump Cup Speed Run Demoman First Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Demoman_2nd": "Brazil Fortress Jump Cup Speed Run Demoman Second Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Demoman_3rd": "Brazil Fortress Jump Cup Speed Run Demoman Third Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Demoman_Participant": "Brazil Fortress Jump Cup Speed Run Demoman Participant",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Soldier_Div1_1st": "Brazil Fortress Jump Cup Speed Run Soldier Division 1 First Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Soldier_Div1_2nd": "Brazil Fortress Jump Cup Speed Run Soldier Division 1 Second Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Soldier_Div1_3rd": "Brazil Fortress Jump Cup Speed Run Soldier Division 1 Third Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Soldier_Div1_Participant": "Brazil Fortress Jump Cup Speed Run Soldier Division 1 Participant",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Soldier_Div2_1st": "Brazil Fortress Jump Cup Speed Run Soldier Division 2 First Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Soldier_Div2_2nd": "Brazil Fortress Jump Cup Speed Run Soldier Division 2 Second Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Soldier_Div2_3rd": "Brazil Fortress Jump Cup Speed Run Soldier Division 2 Third Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Soldier_Div2_Participant": "Brazil Fortress Jump Cup Speed Run Soldier Division 2 Participant",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Demoman_Div1_1st": "Brazil Fortress Jump Cup Speed Run Demoman Division 1 First Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Demoman_Div1_2nd": "Brazil Fortress Jump Cup Speed Run Demoman Division 1 Second Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Demoman_Div1_3rd": "Brazil Fortress Jump Cup Speed Run Demoman Division 1 Third Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Demoman_Div1_Participant": "Brazil Fortress Jump Cup Speed Run Demoman Division 1 Participant",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Demoman_Div2_1st": "Brazil Fortress Jump Cup Speed Run Demoman Division 2 First Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Demoman_Div2_2nd": "Brazil Fortress Jump Cup Speed Run Demoman Division 2 Second Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Demoman_Div2_3rd": "Brazil Fortress Jump Cup Speed Run Demoman Division 2 Third Place",
"TF_TournamentMedal_BrazilFortress_Jump_SpeedRun_Demoman_Div2_Participant": "Brazil Fortress Jump Cup Speed Run Demoman Division 2 Participant",
"TF_TournamentMedal_BrazilFortress_Jump_Helper": "Brazil Fortress Jump Cup Helper",
"TF_TournamentMedal_BrazilFortress_Hwn_First": "First Scary",
"TF_TournamentMedal_BrazilFortress_Hwn_First_Desc": "The true champions of this haunted competition. Scarier than ever, the best during the 1st season of Brasil Fortress Halloween 2018.",
"TF_TournamentMedal_BrazilFortress_Hwn_Second": "Second Spell",
"TF_TournamentMedal_BrazilFortress_Hwn_Second_Desc": "In the dark of the night, powerful spells were used to eliminate monsters and reach this remarkable place in Brasil Fortress Halloween 2018.",
"TF_TournamentMedal_BrazilFortress_Hwn_Third": "Third Monstrosity",
"TF_TournamentMedal_BrazilFortress_Hwn_Third_Desc": "Ripped apart but brought back to life, you made your creator proud with all this killing in Brasil Fortress Halloween 2018.",
"TF_TournamentMedal_BrazilFortress_Hwn_Playoffs": "Friday's Playoff",
"TF_TournamentMedal_BrazilFortress_Hwn_Playoffs_Desc": "Murdering them, one by one, you tried hard and got far, but your boat flipped and your dreams were drowned in Brasil Fortress Halloween 2018.",
"TF_TournamentMedal_BrazilFortress_Hwn_Participant": "Vampiric Participant",
"TF_TournamentMedal_BrazilFortress_Hwn_Participant_Desc": "You didn't suck nor starved, and lots of blood were spilled thanks to your presence in Brasil Fortress Halloween 2018.",
"TF_TournamentMedal_BrazilFortress_Hwn_Assistant": "Cursed Assistant",
"TF_TournamentMedal_BrazilFortress_Hwn_Assistant_Desc": "Hearing voices from the beyond all night long, you made Brasil Fortress Halloween 2018 happen. They won't touch you, but their curse won't let you rest in peace.",
"TF_TournamentMedal_BrazilFortress_Hwn_Scary_First": "Brazil Fortress Halloween - Scary Group First Place",
"TF_TournamentMedal_BrazilFortress_Hwn_Scary_Second": "Brazil Fortress Halloween - Scary Group Second Place",
"TF_TournamentMedal_BrazilFortress_Hwn_Scary_Third": "Brazil Fortress Halloween - Scary Group Third Place",
"TF_TournamentMedal_BrazilFortress_Hwn_Scary_Participant": "Brazil Fortress Halloween - Scary Group Participant",
"TF_TournamentMedal_BrazilFortress_Hwn_Haunted_Winner": "Brazil Fortress Halloween - Haunted Group Winner",
"TF_TournamentMedal_BrazilFortress_Hwn_Haunted_First": "Brazil Fortress Halloween - Haunted Group First Place",
"TF_TournamentMedal_BrazilFortress_Hwn_Haunted_Second": "Brazil Fortress Halloween - Haunted Group Second Place",
"TF_TournamentMedal_BrazilFortress_Hwn_Haunted_Third": "Brazil Fortress Halloween - Haunted Group Third Place",
"TF_TournamentMedal_BrazilFortress_Hwn_Haunted_Participant": "Brazil Fortress Halloween - Haunted Group Participant",
"TF_TournamentMedal_BrazilFortress_Hwn_Ghastly_Winner": "Brazil Fortress Halloween - Ghastly Group Winner",
"TF_TournamentMedal_BrazilFortress_Hwn_Ghastly_First": "Brazil Fortress Halloween - Ghastly Group First Place",
"TF_TournamentMedal_BrazilFortress_Hwn_Ghastly_Second": "Brazil Fortress Halloween - Ghastly Group Second Place",
"TF_TournamentMedal_BrazilFortress_Hwn_Ghastly_Third": "Brazil Fortress Halloween - Ghastly Group Third Place",
"TF_TournamentMedal_BrazilFortress_Hwn_Ghastly_Participant": "Brazil Fortress Halloween - Ghastly Group Participant",
"TF_TournamentMedal_BrazilFortress_Hwn_Helper": "Brazil Fortress Halloween - Helper",
"TF_TournamentMedal_SacredScouts_6v6_Gold": "Sacred Scouts 6v6 Gold Medal",
"TF_TournamentMedal_SacredScouts_6v6_Silver": "Sacred Scouts 6v6 Silver Medal",
"TF_TournamentMedal_SacredScouts_6v6_Bronze": "Sacred Scouts 6v6 Bronze Medal",
"TF_TournamentMedal_SacredScouts_6v6_Participant": "Sacred Scouts 6v6 Participant",
"TF_TournamentMedal_LAN_Downunder_1st": "LAN Downunder 1st Place",
"TF_TournamentMedal_LAN_Downunder_2nd": "LAN Downunder 2nd Place",
"TF_TournamentMedal_LAN_Downunder_3rd": "LAN Downunder 3rd Place",
"TF_TournamentMedal_LAN_Downunder_Participant": "LAN Downunder Participant",
"TF_TournamentMedal_LAN_Downunder_Champion": "LAN Downunder Champion",
"TF_TournamentMedal_LAN_Downunder_2024": "Melbourne, Australia, 2024",
"TF_TournamentMedal_LAN_Downunder_2025": "Melbourne, Australia, 2025",
"TF_TournamentMedal_RussianHighlander_1st": "Russian Highlander 1st Place",
"TF_TournamentMedal_RussianHighlander_2nd": "Russian Highlander 2nd Place",
"TF_TournamentMedal_RussianHighlander_3rd": "Russian Highlander 3rd Place",
"TF_TournamentMedal_RussianHighlander_Participant": "Russian Highlander Participant",
"TF_TournamentMedal_RussianHighlander_Staff": "Russian Highlander Staff",
"TF_TournamentMedal_Streamer_Gold": "Streamer Cup Gold Medal",
"TF_TournamentMedal_Streamer_Silver": "Streamer Cup Silver Medal",
"TF_TournamentMedal_Streamer_Bronze": "Streamer Cup Bronze Medal",
"TF_TournamentMedal_Streamer_Participant": "Streamer Cup Participant",
"TF_TournamentMedal_Streamer_Staff": "Streamer Cup Staff",
"TF_TournamentMedal_EuMixes_1st": "Eu Mixes 1st Place",
"TF_TournamentMedal_EuMixes_2nd": "Eu Mixes 2nd Place",
"TF_TournamentMedal_EuMixes_3rd": "Eu Mixes 3rd Place",
"TF_TournamentMedal_EuMixes_Playoff": "Eu Mixes Playoff",
"TF_TournamentMedal_EuMixes_Participant": "Eu Mixes Participant",
"TF_TournamentMedal_EuMixes_Staff": "Eu Mixes Staff",
"TF_TournamentMedal_KnightComp_Gold": "KnightComp Gold Medal",
"TF_TournamentMedal_KnightComp_Silver": "KnightComp Silver Medal",
"TF_TournamentMedal_KnightComp_Bronze": "KnightComp Bronze Medal",
"TF_TournamentMedal_KnightComp_Participant": "KnightComp Participant",
"TF_TournamentMedal_KnightComp_Helper": "KnightComp Helper",
"TF_TournamentMedal_Madness_Iron_2019": "Madness vs Machines Burnished Beryl 2019",
"TF_TournamentMedal_Madness_Iron_2019_Desc": "Had this little rock been larger, it would've made one amazing belt buckle. Walking would be unpleasant, but that's the price of fashion. Awarded to players of Potato's MvM Server's co-op campaign!",
"TF_TournamentMedal_Madness_Bronze_2019": "Madness vs Machines Grandiose Garnet 2019",
"TF_TournamentMedal_Madness_Bronze_2019_Desc": "Originally cut into its six-corner shape to reduce air resistance, workers used it as recreational equipment. Then the ball was invented. Awarded to players of Potato's MvM Server's co-op campaign!",
"TF_TournamentMedal_Madness_Silver_2019": "Madness vs Machines Tempered Tourmaline 2019",
"TF_TournamentMedal_Madness_Silver_2019_Desc": "Polished to a deep luster, this glimmering gem shines like no other. You could almost use it as a mirror, albeit a tiny hand-sized one. Awarded to players of Potato's MvM Server's co-op campaign!",
"TF_TournamentMedal_Madness_Gold_2019": "Madness vs Machines Royal Rhodonite 2019",
"TF_TournamentMedal_Madness_Gold_2019_Desc": "Known as the Judgment Stone, the unworthy often receive deep lacerations due to its distinct sharpness. Good thing you're not holding it! Awarded to players of Potato's MvM Server's co-op campaign!",
"TF_TournamentMedal_Madness_Platinum_2019": "Madness vs Machines Chaotic Crystal 2019",
"TF_TournamentMedal_Madness_Platinum_2019_Desc": "Power beyond your imagination, compressed into a diamond shell. Simply holding it to your chest fills your soul with unlimited potential. Awarded to players of Potato's MvM Server's co-op campaign!",
"TF_TournamentMedal_Madness_Donator_2019": "Madness vs Machines Hopeful Heart 2019",
"TF_TournamentMedal_Madness_Donator_2019_Desc": "How does donating to charity help stop the robot menace? A soldier with no heart is just another robot, so thank you for not becoming one! Awarded to donors of Potato's MvM Server's co-op charity!",
"TF_TournamentMedal_Madness_Donator_Rainbow_2019": "Madness vs Machines Boundless Heart 2019",
"TF_TournamentMedal_Madness_Donator_Rainbow_2019_Desc": "The entire visible light spectrum emanating from the jewel symbolizes a tempered balance of kindness and ferocity that knows no bounds! Awarded to donors of Potato's MvM Server's co-op charity!",
"TF_TournamentMedal_Madness_Creator_2019": "Madness vs Machines Pinnacle of Ingenuity 2019",
"TF_TournamentMedal_Madness_Creator_2019_Desc": "Making something top-notch was never easy. Yet you knew how to make it satisfying, challenging and, above all, enjoyable. Thank you for creating the campaign for Potato's MvM Server's co-op contest!",
"TF_TournamentMedal_Hexadecimal_Donator_Rainbow_2021": "Hexadecimal Horrors Macabre Memento 2021",
"TF_TournamentMedal_Hexadecimal_Donator_Rainbow_2021_Desc": "Not even the darkest and most corrupt zombie-robot forces can dull the somber shine of this heart that we stole off of one of their corpses. Awarded to donors of Potato MvM's charity drive for The Trevor Project!",
"TF_TournamentMedal_Hexadecimal_Donator_2021": "Hexadecimal Horrors Moonlit Magnate 2021",
"TF_TournamentMedal_Hexadecimal_Donator_2021_Desc": "A beacon of hope and generosity amidst the doom and gloom of the night. And endless hordes of killer robots masquerading as zombies, of course! Awarded to donors of Potato MvM's charity drive for The Trevor Project!",
"TF_TournamentMedal_PeculiarPandemonium_Tungsten2022": "Peculiar Pandemonium Tungsten Robot of Leaded Lunacy",
"TF_TournamentMedal_PeculiarPandemonium_Tungsten2022_Desc": "Not Every Vehicular Eliminator Relies Greatly On Nonsensical Neurotic Automatons. Awarded to players of Moonlight MvM's April Fools 2022 charity tour!",
"TF_TournamentMedal_PeculiarPandemonium_Lepidolite2022": "Peculiar Pandemonium Luxurious Lepidolite",
"TF_TournamentMedal_PeculiarPandemonium_Lepidolite2022_Desc": "Marketing surveyed our customers on which precious mineral they wanted, and everyone requested that they be pink. So we bought a few tons of the cheapest, lowest-grade lepidolite we could find and nobody was ever the wiser. Awarded to donors of Moonlight MvM's April Fools 2022 charity tour!",
"TF_TournamentMedal_PeculiarPandemonium_Morganite2022": "Peculiar Pandemonium Mesmerizing Morganite",
"TF_TournamentMedal_PeculiarPandemonium_Morganite2022_Desc": "The Morganite is the pinnacle of gemcraft. Few people can appreciate all its value. Unfortunately, we do not represent anyone who can, so you'll have to do. Awarded to donors of Moonlight MvM's April Fools 2022 charity tour!",
"TF_TournamentMedal_PeculiarPandemonium_Diamond2022": "Peculiar Pandemonium Pink Diamond",
"TF_TournamentMedal_PeculiarPandemonium_Diamond2022_Desc": "Formed under the immense pressure of the Earth, this gemstone has many deformations in its crystalline structure. And yet, these deformations make it all the more desirable. Awarded to donors of Moonlight MvM's April Fools 2022 charity tour!",
"TF_TournamentMedal_RewiredRampage_Ruby_2022": "Rewired Rampage Reverse-Engineered Ruby",
"TF_TournamentMedal_RewiredRampage_Ruby_2022_Desc": "Taking a time-proven concept and flipping it on its head is no easy task, yet you managed to make it both enjoyable and memorable! Awarded to content creators of Potato MvM's Rewired Rampage campaign!",
"TF_TournamentMedal_RewiredRampage_Quartz_2022": "Rewired Rampage Quarrelous Quartz",
"TF_TournamentMedal_RewiredRampage_Quartz_2022_Desc": "A true Gentle Manne knows that any contribution to something larger than themselves can make all the difference in the world. Awarded to donors of Potato MvM's Rewired Rampage charity event!",
"TF_TournamentMedal_RewiredRampage_Peridot_2022": "Rewired Rampage Perilous Peridot",
"TF_TournamentMedal_RewiredRampage_Peridot_2022_Desc": "The peridot is known as the stone of compassion, and your contribution has shown that you are truly deserving of this one. Awarded to donors of Potato MvM's Rewired Rampage charity event!",
"TF_TournamentMedal_RewiredRampage_Sapphire_2022": "Rewired Rampage Sophisticated Sapphire",
"TF_TournamentMedal_RewiredRampage_Sapphire_2022_Desc": "Curious onlookers at first may not notice the resilience and natural beauty of this carefully shaped stone, but you did, and for that you have been rewarded. Awarded to donors of Potato MvM's Rewired Rampage charity event!",
"TF_TournamentMedal_RewiredRampage_Generosity_2022": "Rewired Rampage Gem of Generosity",
"TF_TournamentMedal_RewiredRampage_Generosity_2022_Desc": "You've shown yourself to be a beacon of generosity no matter the circumstances. Let this flawless gemstone serve as just one example of your altruism. Awarded to donors of Potato MvM's Rewired Rampage charity event!",
"TF_TournamentMedal_Anniversary_Annihilation_Participation": "Anniversary Annihilation Participation Trophy 2022",
"TF_TournamentMedal_Anniversary_Annihilation_Participation_Desc": "We would congratulate you on your efforts, but you didn't exactly do much to get a pat on the back. So instead, try to enjoy this rusted metal on that scrawny chest of yours. Awarded to players of Moonlight MvM's summer charity tour!",
"TF_TournamentMedal_Anniversary_Annihilation_Galvanized": "Anniversary Annihilation Galvanized Goblet 2022",
"TF_TournamentMedal_Anniversary_Annihilation_Galvanized_Desc": "You didn't think we'd send you into an army of robots without a reward, would you? Just for you, we have some spare galvanized beauties that were definitely not taken off dead mercs who failed before you. Awarded to players of Moonlight MvM's summer charity tour!",
"TF_TournamentMedal_Anniversary_Annihilation_SoulBinding": "Anniversary Annihilation Soul-Binding Star 2022",
"TF_TournamentMedal_Anniversary_Annihilation_SoulBinding_Desc": "Many have tried to capture the soul of a mission in the form of a gemstone, but the stone always breaks upon capturing a single mission. This star-shaped stone, however, is capable of holding the souls of every mission in this event. Awarded to players of Moonlight MvM's summer charity tour!",
"TF_TournamentMedal_Anniversary_Annihilation_Caregiving": "Anniversary Annihilation Caregiving Corundum 2022",
"TF_TournamentMedal_Anniversary_Annihilation_Caregiving_Desc": "While we don't give credit, you came back when you were richer and gave some of that wealth to help out animals in need. Awarded to donors of Moonlight MvM's summer charity tour!",
"TF_TournamentMedal_Anniversary_Annihilation_Heroistic": "Anniversary Annihilation Heroistic Heart 2022",
"TF_TournamentMedal_Anniversary_Annihilation_Heroistic_Desc": "Your bottomless heart has assisted many animals in need, and while we couldn't revive the yetis Hale punched into extinction, you did your part for the remaining animals. Awarded to donors of Moonlight MvM's summer charity tour!",
"TF_TournamentMedal_Anniversary_Annihilation_Dastardly": "Anniversary Annihilation Dastardly Diamond 2022",
"TF_TournamentMedal_Anniversary_Annihilation_Dastardly_Desc": "The legendary accursed diamond is the subject of countless mythologies. This isn't that diamond; it's just something our specially trained truffle hogs sniffed out of a diamond mine in Arkansas. Awarded to donors of Moonlight MvM's summer charity tour!",
"TF_TournamentMedal_Ghoulish_Corrupted_2024": "Ghoulish Gambit Corrupted Crystal 2024",
"TF_TournamentMedal_Ghoulish_Corrupted_2024_Desc": "This gem pulsates with an unknown force in your hand. Part of you thinks it should be left alone. A more stylish part of you thinks it would be really cool to wear on your chest. Awarded to the donors of Potato MvM's Ghoulish Gambit event!",
"TF_TournamentMedal_Ghoulish_Uncorrupted_2024": "Ghoulish Gambit Uncorrupted Crystal 2024",
"TF_TournamentMedal_Ghoulish_Uncorrupted_2024_Desc": "Pristine and undamaged, kept safely away from zombies and robots. Keep it close, these things are hard to come by. Awarded to the donors of Potato MvM's Ghoulish Gambit event!",
"TF_TournamentMedal_Ghoulish_Mostly_2024": "Ghoulish Gambit Mostly-Corrupted Crystal 2024",
"TF_TournamentMedal_Ghoulish_Mostly_2024_Desc": "Good vs evil, light vs dark, Yin vs Yang... Well one of the souls trapped in here was named Yang, the other guy's name might've been Craig. Awarded to the donors of Potato MvM's Ghoulish Gambit event!",
"TF_TournamentMedal_Ghoulish_Haunted_2024": "Ghoulish Gambit Haunted Tank 2024",
"TF_TournamentMedal_Ghoulish_Haunted_2024_Desc": "This thing would've been way scarier if we didn't run out of purple paint. Awarded to the players of Potato MvM's Ghoulish Gambit event!",
"TF_TournamentMedal_Ghoulish_Poisonous_2024": "Ghoulish Gambit Poisonous Potato 2024",
"TF_TournamentMedal_Ghoulish_Poisonous_2024_Desc": "A trinket most foul, even being near it is a blight on your sanity. Definitely don't eat it or it'll be a blight on your intestines too. Awarded to the players of Potato MvM's Ghoulish Gambit event!",
"TF_TournamentMedal_Bolted_Quintuple_2025": "Bolted Barbecue Quintuple-Baked Potato 2025",
"TF_TournamentMedal_Bolted_Quintuple_2025_Desc": "Everyone knows the only thing better than a baked potato is a twice-baked potato, but what's better than that? We gathered the smartest folks we could find to answer that exact question. Turns out \"just keep baking it\" wasn't the answer, now we've got tens of thousands of these things. Maybe those guys weren't as smart as we thought. Awarded to the players of Potato MvM's Bolted Barbecue event!",
"TF_TournamentMedal_Bolted_Parched_2025": "Bolted Barbecue Parched Patriot Canteen 2025",
"TF_TournamentMedal_Bolted_Parched_2025_Desc": "After a long summer day there's nothing better than a nice cold glass of water. Unfortunately, we ran out of glasses, bottles too... Hey, as long as it holds water it's good enough for us, just make sure to get your tetanus shots before you use this thing. Awarded to the players of Potato MvM's Bolted Barbecue event!",
"TF_TournamentMedal_Bolted_Barbecued_2025": "Bolted Barbecue Barbecued Buster 2025",
"TF_TournamentMedal_Bolted_Barbecued_2025_Desc": "A reward reserved for the most dedicated mercenaries out there. Wear it as a badge of honor to show the world your bravery, perseverance, and lacking social life. Safe to say you earned this one. From the looks of it you've also earned some beauty sleep and a shower too. Awarded to the players of Potato MvM's Bolted Barbecue event!",
"TF_TournamentMedal_Bolted_Generous_2025": "Bolted Barbecue Generous Gemstone 2025",
"TF_TournamentMedal_Bolted_Generous_2025_Desc": "Any cause worth supporting is a cause worth celebrating, and what better way to celebrate than with a carefully chiseled gemstone the size of your fist. You could definitely use this thing as a weapon, but we hope the irony in hitting someone with a symbol of your benevolence stops you from doing that. Awarded to the donors of Potato MvM's Bolted Barbecue event!",
"TF_TournamentMedal_Bolted_Star_2025": "Bolted Barbecue Star of the Summer Solstice 2025",
"TF_TournamentMedal_Bolted_Star_2025_Desc": "Forged under the heat and pressure of a thousand suns across countless sunny days and moonlit nights, shaped to perfection by the earth itself. If you leave it out in the sun too long you can almost feel those thousands of suns yourself, probably want to wear gloves if you do that. Awarded to the donors of Potato MvM's Bolted Barbecue event!",
"TF_TournamentMedal_Bolted_Heart_2025": "Bolted Barbecue Heart of The Lake 2025",
"TF_TournamentMedal_Bolted_Heart_2025_Desc": "Hold it close to your ear and you can hear the birds singing above, frogs ribbiting by the water, calm streams flowing...  Hold it closer, you can almost feel the gentle breeze on your face. That's what the guy outside our office said when we gave him one, pretty poetic stuff. He also said \"give me your wallet\" and screamed incoherently, wasn't as poetic. Awarded to the donors of Potato MvM's Bolted Barbecue event!",
"TF_TournamentMedal_FruitMixes_Gold": "Fruit Mixes Highlander Gold Medal",
"TF_TournamentMedal_FruitMixes_Silver": "Fruit Mixes Highlander Silver Medal",
"TF_TournamentMedal_FruitMixes_Bronze": "Fruit Mixes Highlander Bronze Medal",
"TF_TournamentMedal_FruitMixes_Participant": "Fruit Mixes Highlander Participant",
"TF_TournamentMedal_FruitMixes_Staff": "Fruit Mixes Highlander Staff",
"TF_TournamentMedal_FruitMixes_High_Gold": "Fruit Mixes Highlander High/Prem Gold Medal",
"TF_TournamentMedal_FruitMixes_High_Silver": "Fruit Mixes Highlander High/Prem Silver Medal",
"TF_TournamentMedal_FruitMixes_High_Bronze": "Fruit Mixes Highlander High/Prem Bronze Medal",
"TF_TournamentMedal_FruitMixes_High_Participant": "Fruit Mixes Highlander High/Prem Participant",
"TF_TournamentMedal_FruitMixes_LowMid_Gold": "Fruit Mixes Highlander Low/Mid Gold Medal",
"TF_TournamentMedal_FruitMixes_LowMid_Silver": "Fruit Mixes Highlander Low/Mid Silver Medal",
"TF_TournamentMedal_FruitMixes_LowMid_Bronze": "Fruit Mixes Highlander Low/Mid Bronze Medal",
"TF_TournamentMedal_FruitMixes_LowMid_Participant": "Fruit Mixes Highlander Low/Mid Participant",
"TF_TournamentMedal_FruitMixes_Mid_Gold": "Fruit Mixes Highlander Mid Gold Medal",
"TF_TournamentMedal_FruitMixes_Mid_Silver": "Fruit Mixes Highlander Mid Silver Medal",
"TF_TournamentMedal_FruitMixes_Mid_Bronze": "Fruit Mixes Highlander Mid Bronze Medal",
"TF_TournamentMedal_FruitMixes_Mid_Participant": "Fruit Mixes Highlander Mid Participant",
"TF_TournamentMedal_FruitMixes_Low_Gold": "Fruit Mixes Highlander Low Gold Medal",
"TF_TournamentMedal_FruitMixes_Low_Silver": "Fruit Mixes Highlander Low Silver Medal",
"TF_TournamentMedal_FruitMixes_Low_Bronze": "Fruit Mixes Highlander Low Bronze Medal",
"TF_TournamentMedal_FruitMixes_Low_Participant": "Fruit Mixes Highlander Low Participant",
"TF_TournamentMedal_FruitMixes_Open_Gold": "Fruit Mixes Highlander Open Gold Medal",
"TF_TournamentMedal_FruitMixes_Open_Silver": "Fruit Mixes Highlander Open Silver Medal",
"TF_TournamentMedal_FruitMixes_Open_Bronze": "Fruit Mixes Highlander Open Bronze Medal",
"TF_TournamentMedal_FruitMixes_Open_Participant": "Fruit Mixes Highlander Open Participant",
"TF_TournamentMedal_NCC_1st": "New Caps Cup 1st Place",
"TF_TournamentMedal_NCC_2nd": "New Caps Cup 2nd Place",
"TF_TournamentMedal_NCC_3rd": "New Caps Cup 3rd Place",
"TF_TournamentMedal_NCC_Participant": "New Caps Cup Participant",
"TF_TournamentMedal_Rlx_1st": "Rasslabyxa Cup 1st Place",
"TF_TournamentMedal_Rlx_2nd": "Rasslabyxa Cup 2nd Place",
"TF_TournamentMedal_Rlx_3rd": "Rasslabyxa Cup 3rd Place",
"TF_TournamentMedal_Rlx_Participant": "Rasslabyxa Cup Participant",
"TF_TournamentMedal_Rlx_Helper": "Rasslabyxa Cup Helper",
"TF_TournamentMedal_AHH_Champion": "Australian Hightower Highjinx Champion",
"TF_TournamentMedal_AHH_Participant": "Australian Hightower Highjinx Participant",
"TF_TournamentMedal_AHH_Donor": "Australian Hightower Highjinx Donor",
"TF_TournamentMedal_AHH_Helper": "Australian Hightower Highjinx Helper",
"TF_TournamentMedal_AHH_Royalty": "Australian Hightower Highjinx Royalty",
"TF_TournamentMedal_AHH_Royalty2022": "You have managed to climb to the top of the tower in terms of your bountiful donations or your sheer competitive spirit! You've come far, soldier! Congratulations on seeing the summit, but don't forget to keep flying higher and higher. As there are many more towers to climb out there. Thanks for coming around for the AHH ride in 2022! We're Proud of you!",
"TF_TournamentMedal_AHH_Participant2022": "You and 8 others found the will to play Hightower for the sake of pursuing in mad Highjinx, turmoil and maybe to simply have fun. Thank you for being a part of AHH in 2022!",
"TF_TournamentMedal_AHH_Donor2022": "Whether you came to donate for a cause or show your love for Hightower you proved that you are the best of the best. Congrats on being a part of AHH in 2022!",
"TF_TournamentMedal_AHH_Helper2022": "This medal recognizes those that kept the Highjinx under control, made sure casualties were set to a minimum, and made the cogs in the tower run smoothly through all the Highjinx in 2022!",
"TF_TournamentMedal_SA_Vanilla_6v6_Invite_First": "South American Vanilla Fortress 6v6 Invite 1st Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Invite_Second": "South American Vanilla Fortress 6v6 Invite 2nd Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Invite_Third": "South American Vanilla Fortress 6v6 Invite 3rd Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Invite_Participant": "South American Vanilla Fortress 6v6 Invite Participant",
"TF_TournamentMedal_SA_Vanilla_6v6_Intermediate_First": "South American Vanilla Fortress 6v6 Intermediate 1st Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Intermediate_Second": "South American Vanilla Fortress 6v6 Intermediate 2nd Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Intermediate_Third": "South American Vanilla Fortress 6v6 Intermediate 3rd Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Intermediate_Participant": "South American Vanilla Fortress 6v6 Intermediate Participant",
"TF_TournamentMedal_SA_Vanilla_6v6_Open_First": "South American Vanilla Fortress 6v6 Open 1st Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Open_Second": "South American Vanilla Fortress 6v6 Open 2nd Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Open_Third": "South American Vanilla Fortress 6v6 Open 3rd Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Open_Participant": "South American Vanilla Fortress 6v6 Open Participant",
"TF_TournamentMedal_SA_Vanilla_6v6_Elite_First": "South American Vanilla Fortress 6v6 Elite 1st Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Elite_Second": "South American Vanilla Fortress 6v6 Elite 2nd Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Elite_Third": "South American Vanilla Fortress 6v6 Elite 3rd Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Elite_Participant": "South American Vanilla Fortress 6v6 Elite Participant",
"TF_TournamentMedal_SA_Vanilla_6v6_Central_First": "South American Vanilla Fortress 6v6 Central 1st Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Central_Second": "South American Vanilla Fortress 6v6 Central 2nd Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Central_Third": "South American Vanilla Fortress 6v6 Central 3rd Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Central_Participant": "South American Vanilla Fortress 6v6 Central Participant",
"TF_TournamentMedal_SA_Vanilla_6v6_Access_First": "South American Vanilla Fortress 6v6 Access 1st Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Access_Second": "South American Vanilla Fortress 6v6 Access 2nd Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Access_Third": "South American Vanilla Fortress 6v6 Access 3rd Place",
"TF_TournamentMedal_SA_Vanilla_6v6_Access_Participant": "South American Vanilla Fortress 6v6 Access Participant",
"TF_TournamentMedal_SA_Vanilla_6v6_Supporter": "South American Vanilla Fortress 6v6 Supporter",
"TF_TournamentMedal_SA_Vanilla_Highlander_Invite_First": "South American Vanilla Fortress Highlander Invite 1st Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Invite_Second": "South American Vanilla Fortress Highlander Invite 2nd Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Invite_Third": "South American Vanilla Fortress Highlander Invite 3rd Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Invite_Participant": "South American Vanilla Fortress Highlander Invite Participant",
"TF_TournamentMedal_SA_Vanilla_Highlander_Intermediate_First": "South American Vanilla Fortress Highlander Intermediate 1st Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Intermediate_Second": "South American Vanilla Fortress Highlander Intermediate 2nd Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Intermediate_Third": "South American Vanilla Fortress Highlander Intermediate 3rd Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Intermediate_Participant": "South American Vanilla Fortress Highlander Intermediate Participant",
"TF_TournamentMedal_SA_Vanilla_Highlander_Open_First": "South American Vanilla Fortress Highlander Open 1st Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Open_Second": "South American Vanilla Fortress Highlander Open 2nd Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Open_Third": "South American Vanilla Fortress Highlander Open 3rd Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Open_Participant": "South American Vanilla Fortress Highlander Open Participant",
"TF_TournamentMedal_SA_Vanilla_Highlander_Elite_First": "South American Vanilla Fortress Highlander Elite 1st Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Elite_Second": "South American Vanilla Fortress Highlander Elite 2nd Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Elite_Third": "South American Vanilla Fortress Highlander Elite 3rd Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Elite_Participant": "South American Vanilla Fortress Highlander Elite Participant",
"TF_TournamentMedal_SA_Vanilla_Highlander_Central_First": "South American Vanilla Fortress Highlander Central 1st Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Central_Second": "South American Vanilla Fortress Highlander Central 2nd Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Central_Third": "South American Vanilla Fortress Highlander Central 3rd Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Central_Participant": "South American Vanilla Fortress Highlander Central Participant",
"TF_TournamentMedal_SA_Vanilla_Highlander_Access_First": "South American Vanilla Fortress Highlander Access 1st Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Access_Second": "South American Vanilla Fortress Highlander Access 2nd Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Access_Third": "South American Vanilla Fortress Highlander Access 3rd Place",
"TF_TournamentMedal_SA_Vanilla_Highlander_Access_Participant": "South American Vanilla Fortress Highlander Access Participant",
"TF_TournamentMedal_SA_Vanilla_Highlander_Supporter": "South American Vanilla Fortress Highlander Supporter",
"TF_TournamentMedal_Asia_BBall_1st": "Asia BBall Cup 1st Place",
"TF_TournamentMedal_Asia_BBall_2nd": "Asia BBall Cup 2nd Place",
"TF_TournamentMedal_Asia_BBall_3rd": "Asia BBall Cup 3rd Place",
"TF_TournamentMedal_Asia_BBall_Participant": "Asia BBall Cup Participant",
"TF_TournamentMedal_Asia_BBall_Invite_1st": "Asia BBall Cup Invite 1st Place",
"TF_TournamentMedal_Asia_BBall_Invite_2nd": "Asia BBall Cup Invite 2nd Place",
"TF_TournamentMedal_Asia_BBall_Invite_3rd": "Asia BBall Cup Invite 3rd Place",
"TF_TournamentMedal_Asia_BBall_Invite_Participant": "Asia BBall Cup Invite Participant",
"TF_TournamentMedal_Asia_BBall_Main_1st": "Asia BBall Cup Main 1st Place",
"TF_TournamentMedal_Asia_BBall_Main_2nd": "Asia BBall Cup Main 2nd Place",
"TF_TournamentMedal_Asia_BBall_Main_3rd": "Asia BBall Cup Main 3rd Place",
"TF_TournamentMedal_Asia_BBall_Main_Participant": "Asia BBall Cup Main Participant",
"TF_TournamentMedal_CLTF2_Gold": "CLTF2 Prolander Tournament Gold Medal",
"TF_TournamentMedal_CLTF2_Silver": "CLTF2 Prolander Tournament Silver Medal",
"TF_TournamentMedal_CLTF2_Bronze": "CLTF2 Prolander Tournament Bronze Medal",
"TF_TournamentMedal_CLTF2_Participant": "CLTF2 Prolander Tournament Participant",
"TF_TournamentMedal_CLTF2_Prolander_Supporter": "CLTF2 Prolander Tournament Supporter",
"TF_TournamentMedal_CLTF2_Supporter": "CLTF2 Tournament Supporter",
"TF_TournamentMedal_CLTF2_Supporter_Desc": "Medal for those who have helped support CLTF2",
"TF_TournamentMedal_CLTF2_OneDayCup": "One Day Cup",
"TF_TournamentMedal_CLTF2_6v6_High_Gold": "CLTF2 6v6 High - No Restrictions Tournament Gold",
"TF_TournamentMedal_CLTF2_6v6_High_Silver": "CLTF2 6v6 High - No Restrictions Tournament Silver",
"TF_TournamentMedal_CLTF2_6v6_High_Bronze": "CLTF2 6v6 High - No Restrictions Tournament Bronze",
"TF_TournamentMedal_CLTF2_6v6_High_Participant": "CLTF2 6v6 High - No Restrictions Tournament Participant",
"TF_TournamentMedal_CLTF2_6v6_Mid_Gold": "CLTF2 6v6 Mid - No Restrictions Tournament Gold",
"TF_TournamentMedal_CLTF2_6v6_Mid_Silver": "CLTF2 6v6 Mid - No Restrictions Tournament Silver",
"TF_TournamentMedal_CLTF2_6v6_Mid_Bronze": "CLTF2 6v6 Mid - No Restrictions Tournament Bronze",
"TF_TournamentMedal_CLTF2_6v6_Mid_Participant": "CLTF2 6v6 Mid - No Restrictions Tournament Participant",
"TF_TournamentMedal_CLTF2_6v6_Open_Gold": "CLTF2 6v6 Open - No Restrictions Tournament Gold",
"TF_TournamentMedal_CLTF2_6v6_Open_Silver": "CLTF2 6v6 Open - No Restrictions Tournament Silver",
"TF_TournamentMedal_CLTF2_6v6_Open_Bronze": "CLTF2 6v6 Open - No Restrictions Tournament Bronze",
"TF_TournamentMedal_CLTF2_6v6_Open_Participant": "CLTF2 6v6 Open - No Restrictions Tournament Participant",
"TF_TournamentMedal_CLTF2_NoRestriction_6v6_Gold": "CLTF2 No Restriction 6v6 Tournament Gold Medal",
"TF_TournamentMedal_CLTF2_NoRestriction_6v6_Silver": "CLTF2 No Restriction 6v6 Tournament Silver Medal",
"TF_TournamentMedal_CLTF2_NoRestriction_6v6_Bronze": "CLTF2 No Restriction 6v6 Tournament Bronze Medal",
"TF_TournamentMedal_CLTF2_NoRestriction_6v6_Participant": "CLTF2 No Restriction 6v6 Tournament Participant",
"TF_TournamentMedal_CLTF2_NoRestriction_6v6_Supporter": "CLTF2 No Restriction 6v6 Tournament Supporter",
"TF_TournamentMedal_CLTF2_6v6_Gold": "CLTF2 6v6 Tournament Gold Medal",
"TF_TournamentMedal_CLTF2_6v6_Silver": "CLTF2 6v6 Tournament Silver Medal",
"TF_TournamentMedal_CLTF2_6v6_Bronze": "CLTF2 6v6 Tournament Bronze Medal",
"TF_TournamentMedal_CLTF2_6v6_Participant": "CLTF2 6v6 Tournament Participant",
"TF_TournamentMedal_CLTF2_6v6_Staff": "CLTF2 6v6 Tournament Staff Medal",
"TF_TournamentMedal_CLTF2_Cup2": "Cup #2",
"TF_TournamentMedal_CLTF2_4v4_Premiership_Gold": "CLTF2 4v4 Premiership Champions",
"TF_TournamentMedal_CLTF2_4v4_Premiership_Silver": "CLTF2 4v4 Premiership 2nd Place",
"TF_TournamentMedal_CLTF2_4v4_Premiership_Bronze": "CLTF2 4v4 Premiership 3rd Place",
"TF_TournamentMedal_CLTF2_4v4_Premiership_Participant": "CLTF2 4v4 Premiership Participant",
"TF_TournamentMedal_CLTF2_4v4_Division1_Gold": "CLTF2 4v4 Division 1 Champions",
"TF_TournamentMedal_CLTF2_4v4_Division1_Silver": "CLTF2 4v4 Division 1 2nd Place",
"TF_TournamentMedal_CLTF2_4v4_Division1_Bronze": "CLTF2 4v4 Division 1 3rd Place",
"TF_TournamentMedal_CLTF2_4v4_Division1_Participant": "CLTF2 4v4 Division 1 Participant",
"TF_TournamentMedal_CLTF2_4v4_Division2_Gold": "CLTF2 4v4 Division 2 Champions",
"TF_TournamentMedal_CLTF2_4v4_Division2_Silver": "CLTF2 4v4 Division 2 2nd Place",
"TF_TournamentMedal_CLTF2_4v4_Division2_Bronze": "CLTF2 4v4 Division 2 3rd Place",
"TF_TournamentMedal_CLTF2_4v4_Division2_Participant": "CLTF2 4v4 Division 2 Participant",
"TF_TournamentMedal_CLTF2_4v4_Division3_Gold": "CLTF2 4v4 Division 3 Champions",
"TF_TournamentMedal_CLTF2_4v4_Division3_Silver": "CLTF2 4v4 Division 3 2nd Place",
"TF_TournamentMedal_CLTF2_4v4_Division3_Bronze": "CLTF2 4v4 Division 3 3rd Place",
"TF_TournamentMedal_CLTF2_4v4_Division3_Participant": "CLTF2 4v4 Division 3 Participant",
"TF_TournamentMedal_CLTF2_4v4_Division4_Gold": "CLTF2 4v4 Division 4 Champions",
"TF_TournamentMedal_CLTF2_4v4_Division4_Silver": "CLTF2 4v4 Division 4 2nd Place",
"TF_TournamentMedal_CLTF2_4v4_Division4_Bronze": "CLTF2 4v4 Division 4 3rd Place",
"TF_TournamentMedal_CLTF2_4v4_Division4_Participant": "CLTF2 4v4 Division 4 Participant",
"TF_TournamentMedal_CLTF2_4v4_Division5_Gold": "CLTF2 4v4 Division 5 Champions",
"TF_TournamentMedal_CLTF2_4v4_Division5_Silver": "CLTF2 4v4 Division 5 2nd Place",
"TF_TournamentMedal_CLTF2_4v4_Division5_Bronze": "CLTF2 4v4 Division 5 3rd Place",
"TF_TournamentMedal_CLTF2_4v4_Division5_Participant": "CLTF2 4v4 Division 5 Participant",
"TF_TournamentMedal_CLTF2_Ultiduo_Cup_Gold": "CLTF2 Ultiduo Cup Champions",
"TF_TournamentMedal_CLTF2_Ultiduo_Cup_Silver": "CLTF2 Ultiduo Cup 2nd Place",
"TF_TournamentMedal_CLTF2_Ultiduo_Cup_Bronze": "CLTF2 Ultiduo Cup 3rd Place",
"TF_TournamentMedal_CLTF2_Ultiduo_Cup_Participant": "CLTF2 Ultiduo Cup Participant",
"TF_TournamentMedal_CLTF2_Fall2024": "Fall 2024",
"TF_TournamentMedal_CLTF2_Fall2024_Ultiduo": "Ultiduo Cup - Fall 2024",
"TF_TournamentMedal_MvM_Memes_Player": "Memes vs. Machines Baked Potato 2019",
"TF_TournamentMedal_MvM_Memes_Player_Desc": "A potato is a great way to help forget the terrible events you witnessed. Just shove one in your mouth and silently scream your insanity away. Awarded to players of Potato's MvM Server's April Fools tour!",
"TF_TournamentMedal_MvM_Memes_Creator": "Memes vs. Machines PotatOS Server 2019",
"TF_TournamentMedal_MvM_Memes_Creator_Desc": "Your chest is the perfect place to install additional bootleg servers. Don't worry, you rarely used that valuable storage space anyway. Awarded to creators of Potato's MvM Server's April Fools contest!",
"TF_TournamentMedal_MvM_Mashed_Player": "Mashed Mediocrity Potato 2020",
"TF_TournamentMedal_MvM_Mashed_Player_Desc": "This year-old potato may not be edible, but it sure makes for a snazzy chest accessory! Awarded to players of Potato's MvM Server's April Fools tour!",
"TF_TournamentMedal_MvM_Mashed_Creator": "Mashed Mediocrity Super Potato 2020",
"TF_TournamentMedal_MvM_Mashed_Creator_Desc": "In 1845, Ireland went through the Great Potato Famine. Rouse their ire by sticking some computer parts into a potato and wearing it as a medal! Awarded to creators of Potato's MvM Server's April Fools contest!",
"TF_TournamentMedal_MvM_Mashed_Helper": "Mashed Mediocrity Memer Motherboard 2020",
"TF_TournamentMedal_MvM_Mashed_Helper_Desc": "Maniacal mind manifesting menacing mechanical massacres merits mythical meme medal. Marvelous masterpiece, maker! Awarded to helpers of Potato's MvM Server's April Fools event!",
"TF_TournamentMedal_StarchedSilliness_Player": "Starched Silliness Potato Lookalike 2021",
"TF_TournamentMedal_StarchedSilliness_Player_Desc": "Sometimes, a potato is just a potato. However, this is actually not a potato, but rather a stone fetched from a nearby river that has been painted beige. Awarded to players of Tindall Berry's 2021 April Fools MvM charity tour!",
"TF_TournamentMedal_StarchedSilliness_Creator": "Starched Silliness Super Spud 2021",
"TF_TournamentMedal_StarchedSilliness_Creator_Desc": "Strictly speaking, sometimes superfluously silly submissions surprising simple souls still shine. Some stolen starch-styled stones shall sufficiently show service. Awarded to creators of Tindall Berry's 2021 April Fools MvM charity tour!",
"TF_TournamentMedal_StarchedSilliness_Donor": "Starched Silliness Curious Carbon 2021",
"TF_TournamentMedal_StarchedSilliness_Donor_Desc": "Someone gave you this shiny rock that they claim to have found while mining to the bottom of the world when they learned that you gave away money to help stop a rampaging virus. You rock! Awarded to donors of Tindall Berry's 2021 April Fools MvM charity tour!",
"TF_TournamentMedal_Potato_Labor": "Potato of Labor",
"TF_TournamentMedal_Potato_Labor_Desc": "Sometimes it feels like every stone has been turned and every idea has been tried, until someone like you comes along with something truly special. For your creativity and hard work, you are rewarded with a reward most powerful. Just make sure it doesn't overheat. Awarded to Potato.TF event contributors!",
"TF_TournamentMedal_TFArena_6v6_Gold": "TFArena Gold Medal",
"TF_TournamentMedal_TFArena_6v6_EliteDivision_Gold": "TFArena Elite Division Champions",
"TF_TournamentMedal_TFArena_6v6_ExperiencedDivision_Gold": "TFArena Experienced Division Champions",
"TF_TournamentMedal_TFArena_6v6_RookieDivision_Gold": "TFArena Rookie Division Champions",
"TF_TournamentMedal_TFArena_6v6_Gold_Cup1_Desc": "TFArena 6v6 Arena Mode Cup 1 First Place",
"TF_TournamentMedal_TFArena_6v6_Gold_Cup2_Desc": "TFArena 6v6 Arena Mode Cup 2 First Place",
"TF_TournamentMedal_TFArena_6v6_Gold_Cup3_Desc": "TFArena 6v6 Arena Mode Cup 3 First Place",
"TF_TournamentMedal_TFArena_6v6_Gold_Cup4_Desc": "TFArena 6v6 Arena Mode Cup 4 Champions",
"TF_TournamentMedal_TFArena_6v6_Silver": "TFArena Silver Medal",
"TF_TournamentMedal_TFArena_6v6_EliteDivision_Silver": "TFArena Elite Division 2nd Place",
"TF_TournamentMedal_TFArena_6v6_ExperiencedDivision_Silver": "TFArena Experienced Division 2nd Place",
"TF_TournamentMedal_TFArena_6v6_RookieDivision_Silver": "TFArena Rookie Division 2nd Place",
"TF_TournamentMedal_TFArena_6v6_Silver_Cup1_Desc": "TFArena 6v6 Arena Mode Cup 1 Second Place",
"TF_TournamentMedal_TFArena_6v6_Silver_Cup2_Desc": "TFArena 6v6 Arena Mode Cup 2 Second Place",
"TF_TournamentMedal_TFArena_6v6_Silver_Cup3_Desc": "TFArena 6v6 Arena Mode Cup 3 Second Place",
"TF_TournamentMedal_TFArena_6v6_Silver_Cup4_Desc": "TFArena 6v6 Arena Mode Cup 4 Second Place",
"TF_TournamentMedal_TFArena_6v6_Bronze": "TFArena Bronze Medal",
"TF_TournamentMedal_TFArena_6v6_EliteDivision_Bronze": "TFArena Elite Division 3rd Place",
"TF_TournamentMedal_TFArena_6v6_ExperiencedDivision_Bronze": "TFArena Experienced Division 3rd Place",
"TF_TournamentMedal_TFArena_6v6_RookieDivision_Bronze": "TFArena Rookie Division 3rd Place",
"TF_TournamentMedal_TFArena_6v6_Bronze_Cup1_Desc": "TFArena 6v6 Arena Mode Cup 1 Third Place",
"TF_TournamentMedal_TFArena_6v6_Bronze_Cup2_Desc": "TFArena 6v6 Arena Mode Cup 2 Third Place",
"TF_TournamentMedal_TFArena_6v6_Bronze_Cup3_Desc": "TFArena 6v6 Arena Mode Cup 3 Third Place",
"TF_TournamentMedal_TFArena_6v6_Bronze_Cup4_Desc": "TFArena 6v6 Arena Mode Cup 4 Third Place",
"TF_TournamentMedal_TFArena_6v6_Participant": "TFArena Participation Medal",
"TF_TournamentMedal_TFArena_6v6_EliteDivision_Participant": "TFArena Elite Division Participant",
"TF_TournamentMedal_TFArena_6v6_ExperiencedDivision_Participant": "TFArena Experienced Division Participant",
"TF_TournamentMedal_TFArena_6v6_RookieDivision_Participant": "TFArena Rookie Division Participant",
"TF_TournamentMedal_TFArena_6v6_Participant_Cup1_Desc": "TFArena 6v6 Arena Mode Cup 1 Participant",
"TF_TournamentMedal_TFArena_6v6_Participant_Cup2_Desc": "TFArena 6v6 Arena Mode Cup 2 Participant",
"TF_TournamentMedal_TFArena_6v6_Participant_Cup3_Desc": "TFArena 6v6 Arena Mode Cup 3 Participant",
"TF_TournamentMedal_TFArena_6v6_Participant_Cup4_Desc": "TFArena 6v6 Arena Mode Cup 4 Participant",
"TF_TournamentMedal_TFArena_6v6_Helper": "TFArena Helper Medal",
"TF_TournamentMedal_TFArena_6v6_Helper_Cup1_Desc": "TFArena 6v6 Arena Mode Cup 1 Contributor",
"TF_TournamentMedal_TFArena_6v6_Helper_Cup2_Desc": "TFArena 6v6 Arena Mode Cup 2 Contributor",
"TF_TournamentMedal_TFArena_6v6_Helper_Cup3_Desc": "TFArena 6v6 Arena Mode Cup 3 Contributor",
"TF_TournamentMedal_TFArena_6v6_Helper_Cup4_Desc": "TFArena 6v6 Arena Mode Cup 4 Contributor",
"TF_TournamentMedal_TFArena_6v6_Platinum_Gold": "TFArena Platinum Division Champions",
"TF_TournamentMedal_TFArena_6v6_Platinum_Silver": "TFArena Platinum Division 2nd Place",
"TF_TournamentMedal_TFArena_6v6_Platinum_Bronze": "TFArena Platinum Division 3rd Place",
"TF_TournamentMedal_TFArena_6v6_Platinum_Participant": "TFArena Platinum Division Participant",
"TF_TournamentMedal_TFArena_6v6_Gold_Gold": "TFArena Gold Division Champions",
"TF_TournamentMedal_TFArena_6v6_Gold_Silver": "TFArena Gold Division 2nd Place",
"TF_TournamentMedal_TFArena_6v6_Gold_Bronze": "TFArena Gold Division 3rd Place",
"TF_TournamentMedal_TFArena_6v6_Gold_Participant": "TFArena Gold Division Participant",
"TF_TournamentMedal_TFArena_6v6_Silver_Gold": "TFArena Silver Division Champions",
"TF_TournamentMedal_TFArena_6v6_Silver_Silver": "TFArena Silver Division 2nd Place",
"TF_TournamentMedal_TFArena_6v6_Silver_Bronze": "TFArena Silver Division 3rd Place",
"TF_TournamentMedal_TFArena_6v6_Silver_Participant": "TFArena Silver Division Participant",
"TF_TournamentMedal_TFArena_6v6_Steel_Gold": "TFArena Steel Division Champions",
"TF_TournamentMedal_TFArena_6v6_Steel_Silver": "TFArena Steel Division 2nd Place",
"TF_TournamentMedal_TFArena_6v6_Steel_Bronze": "TFArena Steel Division 3rd Place",
"TF_TournamentMedal_TFArena_6v6_Steel_Participant": "TFArena Steel Division Participant",
"TF_TournamentMedal_TFArena_6v6_Iron_Gold": "TFArena Iron Division Champions",
"TF_TournamentMedal_TFArena_6v6_Iron_Silver": "TFArena Iron Division 2nd Place",
"TF_TournamentMedal_TFArena_6v6_Iron_Bronze": "TFArena Iron Division 3rd Place",
"TF_TournamentMedal_TFArena_6v6_Iron_Participant": "TFArena Iron Division Participant",
"TF_TournamentMedal_TFArena_6v6_Spring2025": "Spring 2025 6v6 2-Day Cup",
"TF_TournamentMedal_CTC_1st": "Cap that Cup 1st Place",
"TF_TournamentMedal_CTC_1st_Desc": "The 12-year-old profession of stealing briefcases containing classified information, food recipes, and pictures of your mother has been done by many, but you have proven to be the best at it.",
"TF_TournamentMedal_CTC_2nd": "Cap that Cup 2nd Place",
"TF_TournamentMedal_CTC_2nd_Desc": "You fought hard, gave it your all and did your job well - you almost made it to the top! Although there were some that did it better, you still did one hell of a job!",
"TF_TournamentMedal_CTC_3rd": "Cap that Cup 3rd Place",
"TF_TournamentMedal_CTC_3rd_Desc": "While some have been better at this job than you, you gave some of the biggest corporations lots of valuable information to smear their enemies with, and for that, your efforts have been rewarded!",
"TF_TournamentMedal_CTC_Participant": "Cap that Cup Participant",
"TF_TournamentMedal_CTC_Participant_Desc": "Not much can be said here - you were instructed to steal the briefcase, and you did what you were told to do.",
"TF_TournamentMedal_CTC_Staff": "Cap that Cup Staff",
"TF_TournamentMedal_CTC_Staff_Desc": "What would work be without it being overseen by higher-ups? That's right, a battlefield - and that's what it was, but at least that battlefield was managed by someone from above.",
"TF_TournamentMedal_CTCharity_1st": "Cap that Charity 1st Place",
"TF_TournamentMedal_CTCharity_1st_Desc": "You have now stirred the international pot so many times that you are practically a connoisseur when it comes to juicy world agendas and reserved governmental tidbits. Forget the Cambridge Five, you guys have acquired the title of the 2Fort Six.\n\nThank you for helping the event raise £1,749.22 in the fight against breast cancer!",
"TF_TournamentMedal_CTCharity_2nd": "Cap that Charity 2nd Place",
"TF_TournamentMedal_CTCharity_2nd_Desc": "The guys at the top might think they got you beat, but what they don't realize is that you keep your gloved fingers on the pulse of the stock market and one of your insiders recently informed you that gold prices are going to crash while silver is going to be the new black. So while they actually won, you still get to have the last, wealthy laugh.\n\nThank you for helping the event raise £1,749.22 in the fight against breast cancer!",
"TF_TournamentMedal_CTCharity_3rd": "Cap that Charity 3rd Place",
"TF_TournamentMedal_CTCharity_3rd_Desc": "Being upset about this position is a big Dr. No-No. Don't forget that the Majesty's Secret Service paid you in advance and that your license to kill still is validated. Even if you feel that the world isn't enough, diamonds are forever and you are free to wake up to the living daylights and die another day in peace.\n\nThank you for helping the event raise £1,749.22 in the fight against breast cancer!",
"TF_TournamentMedal_CTCharity_Participant": "Cap that Charity Participant",
"TF_TournamentMedal_CTCharity_Participant_Desc": "You might not be called-up when the big shots require concealed information on international affairs, but you can be sure your local burger joint will give you a call when they want to find out what hot sauce the rival fast food chain is using. So don't be too disappointed in yourself; you can still make a change for the small fries.\n\nThank you for helping the event raise £1,749.22 in the fight against breast cancer!",
"TF_TournamentMedal_CTCharity_Donor": "Cap that Charity Donor",
"TF_TournamentMedal_CTCharity_Donor_Desc": "Years of deceit, falsification and secret discoveries can leave you with a lot you just want to get off your chest. With this understanding, and a lot of generosity, you have paved the way for a lot of other people to get a burden off their chest too. So thank you for taking part in this little charity event!\n\nThank you for helping the event raise £1,749.22 in the fight against breast cancer!",
"TF_TournamentMedal_EuroLander_Premier_Gold": "EuroLander Premier Gold Medal",
"TF_TournamentMedal_EuroLander_Premier_Silver": "EuroLander Premier Silver Medal",
"TF_TournamentMedal_EuroLander_Premier_Bronze": "EuroLander Premier Bronze Medal",
"TF_TournamentMedal_EuroLander_Premier_Participant": "EuroLander Premier Participant",
"TF_TournamentMedal_EuroLander_Main_Gold": "EuroLander Main Gold Medal",
"TF_TournamentMedal_EuroLander_Main_Silver": "EuroLander Main Silver Medal",
"TF_TournamentMedal_EuroLander_Main_Bronze": "EuroLander Main Bronze Medal",
"TF_TournamentMedal_EuroLander_Main_Participant": "EuroLander Main Participant",
"TF_TournamentMedal_EuroLander_Open_Gold": "EuroLander Open Gold Medal",
"TF_TournamentMedal_EuroLander_Open_Silver": "EuroLander Open Silver Medal",
"TF_TournamentMedal_EuroLander_Open_Bronze": "EuroLander Open Bronze Medal",
"TF_TournamentMedal_EuroLander_Open_Participant": "EuroLander Open Participant",
"TF_TournamentMedal_EuroLander_Supporter": "EuroLander Supporter",
"TF_TournamentMedal_EuroLander_Supporter_Desc": "Awarded to those who have helped support EuroLander",
"TF_TournamentMedal_MGE_Cup_Gold": "Classic MGE Cup 1st Place",
"TF_TournamentMedal_MGE_Cup_Silver": "Classic MGE Cup 2nd Place",
"TF_TournamentMedal_MGE_Cup_Bronze": "Classic MGE Cup 3rd Place",
"TF_TournamentMedal_MGE_Cup_Participant": "Classic MGE Cup Participant",
"TF_TournamentMedal_MGE_Cup_Advanced_Gold": "Classic MGE Cup Advanced 1st Place",
"TF_TournamentMedal_MGE_Cup_Advanced_Silver": "Classic MGE Cup Advanced 2nd Place",
"TF_TournamentMedal_MGE_Cup_Advanced_Bronze": "Classic MGE Cup Advanced 3rd Place",
"TF_TournamentMedal_MGE_Cup_Advanced_Participant": "Classic MGE Cup Advanced Participant",
"TF_TournamentMedal_MGE_Cup_Open_Gold": "Classic MGE Cup Open 1st Place",
"TF_TournamentMedal_MGE_Cup_Open_Silver": "Classic MGE Cup Open 2nd Place",
"TF_TournamentMedal_MGE_Cup_Open_Bronze": "Classic MGE Cup Open 3rd Place",
"TF_TournamentMedal_MGE_Cup_Open_Participant": "Classic MGE Cup Open Participant",
"TF_TournamentMedal_MGE_Cup_Helper": "Classic MGE Cup Helper",
"TF_TournamentMedal_MGE_EU_2v2_Premier_Gold": "MGE.tf EU 2v2 Premier 1st Place",
"TF_TournamentMedal_MGE_EU_2v2_Premier_Silver": "MGE.tf EU 2v2 Premier 2nd Place",
"TF_TournamentMedal_MGE_EU_2v2_Premier_Bronze": "MGE.tf EU 2v2 Premier 3rd Place",
"TF_TournamentMedal_MGE_EU_2v2_Premier_Participant": "MGE.tf EU 2v2 Premier Participant",
"TF_TournamentMedal_MGE_EU_2v2_Intermediate_Gold": "MGE.tf EU 2v2 Intermediate 1st Place",
"TF_TournamentMedal_MGE_EU_2v2_Intermediate_Silver": "MGE.tf EU 2v2 Intermediate 2nd Place",
"TF_TournamentMedal_MGE_EU_2v2_Intermediate_Bronze": "MGE.tf EU 2v2 Intermediate 3rd Place",
"TF_TournamentMedal_MGE_EU_2v2_Intermediate_Participant": "MGE.tf EU 2v2 Intermediate Participant",
"TF_TournamentMedal_MGE_EU_2v2_Open_Gold": "MGE.tf EU 2v2 Open 1st Place",
"TF_TournamentMedal_MGE_EU_2v2_Open_Silver": "MGE.tf EU 2v2 Open 2nd Place",
"TF_TournamentMedal_MGE_EU_2v2_Open_Bronze": "MGE.tf EU 2v2 Open 3rd Place",
"TF_TournamentMedal_MGE_EU_2v2_Open_Participant": "MGE.tf EU 2v2 Open Participant",
"TF_TournamentMedal_MGE_EU_2v2_Helper": "MGE.tf EU 2v2 Helper",
"TF_TournamentMedal_MGE_1v1_World_Gold": "MGE.tf 1v1 World Championship 1st Place",
"TF_TournamentMedal_MGE_1v1_World_Silver": "MGE.tf 1v1 World Championship 2nd Place",
"TF_TournamentMedal_MGE_1v1_World_Bronze": "MGE.tf 1v1 World Championship 3rd Place",
"TF_TournamentMedal_MGE_1v1_World_Participant": "MGE.tf 1v1 World Championship Participant",
"TF_TournamentMedal_MGE_1v1_World_Helper": "MGE.tf 1v1 World Championship Helper",
"TF_TournamentMedal_Late_Night_Gold": "Late Night TF2 Cup Gold Medal",
"TF_TournamentMedal_Late_Night_Silver": "Late Night TF2 Cup Silver Medal",
"TF_TournamentMedal_Late_Night_Bronze": "Late Night TF2 Cup Bronze Medal",
"TF_TournamentMedal_Late_Night_Participant": "Late Night TF2 Cup Participant",
"TF_TournamentMedal_Late_Night_Helper": "Late Night TF2 Cup Helper",
"TF_TournamentMedal_Late_Night_Gold_Desc_Autumn2019": "With sheer skill, or luck, you've found yourself on top. Congratulations. Awarded during the Autumn 2019 event.",
"TF_TournamentMedal_Late_Night_Silver_Desc_Autumn2019": "Although many have fallen before you, sleep tight knowing that no one will do so after you. Awarded during the Autumn 2019 event.",
"TF_TournamentMedal_Late_Night_Bronze_Desc_Autumn2019": "What is better: Being the worst of the best or best of the worst? You came first place in that question at least. Awarded during the Autumn 2019 event.",
"TF_TournamentMedal_Late_Night_Participant_Desc_Autumn2019": "There may be many medals that look the same, but this one is yours. Awarded during the Autumn 2019 event.",
"TF_TournamentMedal_Late_Night_Helper_Desc_Autumn2019": "Can a battlefield function without someone on the top giving orders? It can't, and that's why you have this shiny medal as a reminder of that. Awarded during the Autumn 2019 event.",
"TF_TournamentMedal_EBL_1st": "EBL 1st Place Medal",
"TF_TournamentMedal_EBL_Invite_1st": "EBL Invite 1st Place Medal",
"TF_TournamentMedal_EBL_Main_1st": "EBL Main 1st Place Medal",
"TF_TournamentMedal_EBL_Open_1st": "EBL Open 1st Place Medal",
"TF_TournamentMedal_EBL_2nd": "EBL 2nd Place Medal",
"TF_TournamentMedal_EBL_Invite_2nd": "EBL Invite 2nd Place Medal",
"TF_TournamentMedal_EBL_Main_2nd": "EBL Main 2nd Place Medal",
"TF_TournamentMedal_EBL_Open_2nd": "EBL Open 2nd Place Medal",
"TF_TournamentMedal_EBL_3rd": "EBL 3rd Place Medal",
"TF_TournamentMedal_EBL_Invite_3rd": "EBL Invite 3rd Place Medal",
"TF_TournamentMedal_EBL_Main_3rd": "EBL Main 3rd Place Medal",
"TF_TournamentMedal_EBL_Open_3rd": "EBL Open 3rd Place Medal",
"TF_TournamentMedal_EBL_Participant": "EBL Participant",
"TF_TournamentMedal_EBL_Invite_Participant": "EBL Invite Participant",
"TF_TournamentMedal_EBL_Main_Participant": "EBL Main Participant",
"TF_TournamentMedal_EBL_Open_Participant": "EBL Open Participant",
"TF_TournamentMedal_EBL_Staff": "EBL Staff",
"TF_TournamentMedal_EBL_OpenDayCup_Participant": "EBL One Day Cup Participant",
"TF_TournamentMedal_EBL_Cup1": "Cup 1",
"TF_TournamentMedal_Bball_One_Day_Cup_First": "BBall One Day Cup First Place",
"TF_TournamentMedal_Bball_One_Day_Cup_Second": "BBall One Day Cup Second Place",
"TF_TournamentMedal_Bball_One_Day_Cup_Third": "BBall One Day Cup Third Place",
"TF_TournamentMedal_Bball_One_Day_Cup_Participant": "BBall One Day Cup Participant",
"TF_TournamentMedal_Bball_One_Day_Cup_Staff": "BBall One Day Cup Staff",
"TF_TournamentMedal_Bball_One_Day_Cup_Desc": "One Day Cup",
"TF_TournamentMedal_PUG_HL_First": "Pugiklander 1st Place",
"TF_TournamentMedal_PUG_HL_Second": "Pugiklander 2nd Place",
"TF_TournamentMedal_PUG_HL_Third": "Pugiklander 3rd Place",
"TF_TournamentMedal_PUG_HL_Participant": "Pugiklander Participant",
"TF_TournamentMedal_PUG_HL_Premier_First": "Pugiklander Premier 1st Place",
"TF_TournamentMedal_PUG_HL_Premier_Second": "Pugiklander Premier 2nd Place",
"TF_TournamentMedal_PUG_HL_Premier_Third": "Pugiklander Premier 3rd Place",
"TF_TournamentMedal_PUG_HL_Premier_Participant": "Pugiklander Premier Participant",
"TF_TournamentMedal_PUG_HL_Experienced_First": "Pugiklander Experienced 1st Place",
"TF_TournamentMedal_PUG_HL_Experienced_Second": "Pugiklander Experienced 2nd Place",
"TF_TournamentMedal_PUG_HL_Experienced_Third": "Pugiklander Experienced 3rd Place",
"TF_TournamentMedal_PUG_HL_Experienced_Participant": "Pugiklander Experienced Participant",
"TF_TournamentMedal_PUG_HL_Beginner_First": "Pugiklander Beginner 1st Place",
"TF_TournamentMedal_PUG_HL_Beginner_Second": "Pugiklander Beginner 2nd Place",
"TF_TournamentMedal_PUG_HL_Beginner_Third": "Pugiklander Beginner 3rd Place",
"TF_TournamentMedal_PUG_HL_Beginner_Participant": "Pugiklander Beginner Participant",
"TF_TournamentMedal_PUG_HL_Staff": "Pugiklander Staff",
"TF_TournamentMedal_PUG_HL_Helper": "Pugiklander Helper",
"TF_TournamentMedal_MidNight_Gold": "MidNight Moon 1st Place",
"TF_TournamentMedal_MidNight_Silver": "MidNight Moon 2nd Place",
"TF_TournamentMedal_MidNight_Bronze": "MidNight Moon 3rd Place",
"TF_TournamentMedal_MidNight_Participant": "MidNight Moon Participant",
"TF_TournamentMedal_MidNight_Staff": "MidNight Moon Staff",
"TF_TournamentMedal_Binary_Blackout_Gold": "Binary Blackout Golden Great 2021",
"TF_TournamentMedal_Binary_Blackout_Gold_Desc": "Don't let the name fool you: this canteen is made of 100% pure steel. The best we could do was paint it gold due to budgeting. Awarded to players of Moonlight MvM's winter charity tour!",
"TF_TournamentMedal_Binary_Blackout_Silver": "Binary Blackout Silver Soldier 2021",
"TF_TournamentMedal_Binary_Blackout_Silver_Desc": "Marketing accidentally wrote \"silverware\" instead of \"silver\" when commissioning these canteens. We now have a surplus of canteens made from knives and forks. Awarded to players of Moonlight MvM's winter charity tour!",
"TF_TournamentMedal_Binary_Blackout_Bronze": "Binary Blackout Bronze Beginner 2021",
"TF_TournamentMedal_Binary_Blackout_Bronze_Desc": "Well done rookie! Your bravery in downgrading the robot threat from \"major problem\" to just \"problem\" was recognized and has earned you this standard-issue canteen. Awarded to players of Moonlight MvM's winter charity tour!",
"TF_TournamentMedal_Binary_Blackout_Jade": "Binary Blackout Juvenile's Jade 2021",
"TF_TournamentMedal_Binary_Blackout_Jade_Desc": "You have proven that, even in the heat of battle, you can still look out for the children, and for that we award you with this neat little stone we stole from New Zealand! Awarded to donors of Moonlight MvM's winter charity tour!",
"TF_TournamentMedal_Binary_Blackout_Moonstone": "Binary Blackout Marvellous Moonstone 2021",
"TF_TournamentMedal_Binary_Blackout_Moonstone_Desc": "It's rumored that this stone was found somewhere on the moon. A more likely theory is that it's just a chunk of stained glass. Awarded to donors of Moonlight MvM's winter charity tour!",
"TF_TournamentMedal_Auspicious_Automaton_Accolade": "Auspicious Automaton Assembler's Accolade",
"TF_TournamentMedal_Auspicious_Automaton_Accolade_Desc": "Not everyone has what it takes to create a challenge that is also fun. Great job blowing it out of the water, merc! Awarded to content creators of Moonlight MvM's events!",
"TF_TournamentMedal_LastLaugh_Copper": "Last Laugh Copper Chicanery 2023",
"TF_TournamentMedal_LastLaugh_Copper_Desc": "This 99.1% pure chunk of copper(II) sulfate isn't toxic enough to make you think you're allergic to electricity, but there's something strange about it that you can't quite put your finger on. Awarded to players of Moonlight MvM's April Fools 2023 charity tour!",
"TF_TournamentMedal_LastLaugh_Happy": "Last Laugh Happy Spud 2023",
"TF_TournamentMedal_LastLaugh_Happy_Desc": "Your benevolent gift hasn't gone unnoticed! As a reminder of your contribution, here's a potato made out of food-grade plastic. And no, you can't eat it. Awarded to donors of Moonlight MvM's April Fools 2023 charity tour!",
"TF_TournamentMedal_LastLaugh_Bruised": "Last Laugh Bruised Johnstone 2023",
"TF_TournamentMedal_LastLaugh_Bruised_Desc": "This gemstone can allegedly turn into a liquid at any time. Management needs to stop listening to the crazy balding Italians they stumble across on the street. Awarded to donors of Moonlight MvM's April Fools 2023 charity tour!",
"TF_TournamentMedal_LastLaugh_Caustic": "Last Laugh Caustic Container 2023",
"TF_TournamentMedal_LastLaugh_Caustic_Desc": "This nickel-covered canteen would be an eye-catching trinket to wear around, if not for its carcinogenic properties. Still better than being out of style! Awarded to donors of Moonlight MvM's April Fools 2023 charity tour!",
"TF_TournamentMedal_LastLaugh_Alluring": "Last Laugh Alluring Artifact 2023",
"TF_TournamentMedal_LastLaugh_Alluring_Desc": "Those who wear this medal report feeling as if they could control time itself. Little do they know, it's actually radiation poisoning from the pure uranium that it's made of. Awarded to donors of Moonlight MvM's April Fools 2023 charity tour!",
"TF_TournamentMedal_Voltaic_Violence_Vanity_2023": "Voltaic Violence Verdant Vexatious Vivianite of Vanity 2023",
"TF_TournamentMedal_Voltaic_Violence_Vanity_2023_Desc": "After opening up a mine in California, we had a massive surplus of these greenish-black stones. You'll be quite vexed to know that they break easily. Awarded to players of Moonlight MvM's summer charity tour!",
"TF_TournamentMedal_Voltaic_Violence_Valor_2023": "Voltaic Violence Volcanic Vesuvianite of Valor 2023",
"TF_TournamentMedal_Voltaic_Violence_Valor_2023_Desc": "Forged from the fires of the great Mount Vesuvius, this gemstone is said to contain a great deal of power. The Romans never figured that out though, instead using the nearby ash to make concrete. Awarded to players of Moonlight MvM's summer charity tour!",
"TF_TournamentMedal_Voltaic_Violence_Vitality_2023": "Voltaic Violence Virtual Vascular Vitality 2023",
"TF_TournamentMedal_Voltaic_Violence_Vitality_2023_Desc": "While this badge may look innocent, it's actually holding a secret: there's a still-beating human heart inside of it. How do you think we made it light up? Awarded to donors of Moonlight MvM's summer charity tour!",
"TF_reddit_random_acts": "Altruist's Adornment",
"TF_reddit_random_acts_Desc": "A medal to recognize the generous gifters of the Random Acts of TF2 group",
"TF_reddit_random_acts2": "Philanthropist's Indulgence",
"TF_reddit_random_acts2_Desc": "A medal to recognize the generous gifters of the Random Acts of TF2 group",
"TF_spectral_snowflake": "Spectral Snowflake",
"TF_spectral_snowflake_Desc": "Oh, the weather outside is frightful. Awarded to the participants of the Nightmare Before Smissmas 2017 community showcase!",
"TF_TournamentMedal_Blapature2017": "Blapature Co. Contributor",
"TF_TournamentMedal_Blapature2017_Desc": "The best kind of jam is made from avocados. Thank you for supporting the Blapature Co. Summer Jam 2017!",
"TF_TournamentMedal_Galvanized_Shimmering": "Galvanized Gauntlet Shimmering Souvenir 2023",
"TF_TournamentMedal_Galvanized_Shimmering_Desc": "Imbued with the power of the elements, this gem is said to grant its wearer unparalleled strength. In reality, it's just a really shiny rock that looks cool on your chest. But hey, at least it'll make you feel like a hero! Awarded to donors of Potato MvM's Galvanized Gauntlet event!",
"TF_TournamentMedal_Galvanized_Bejeweled": "Galvanized Gauntlet Bejeweled Bounty 2023",
"TF_TournamentMedal_Galvanized_Bejeweled_Desc": "Retrieved from an undisclosed mine in the heart of Australia, perfectly shaped and potentially radioactive. We're just gonna assume it's safe to wear on your chest. Awarded to donors of Potato MvM's Galvanized Gauntlet event!",
"TF_TournamentMedal_Galvanized_Opulent": "Galvanized Gauntlet Opulent Ornament 2023",
"TF_TournamentMedal_Galvanized_Opulent_Desc": "Some may tell us to put this gem in a museum, where its natural beauty can be admired by anyone. To hell with that! Your generosity and philanthropic ways are unmatched. Awarded to the highest tier donors of Potato MvM's Galvanized Gauntlet event!",
"TF_TournamentMedal_Galvanized_Soldiers": "Galvanized Gauntlet Soldiers Spoils 2023",
"TF_TournamentMedal_Galvanized_Soldiers_Desc": "This medal isn't just a symbol of duty and honor - it's also a sign of your skills on the battlefield. Wear it as a reminder of the seemingly endless army of robots you've defeated. Awarded to the players of Potato MvM's Galvanized Gauntlet event!",
"TF_TournamentMedal_Firmware_Star": "Firmware Frenzy Star of the Company 2023",
"TF_TournamentMedal_Firmware_Star_Desc": "The star shines brighter as your hopes wither. Its gentle sound shall grant you immeasurable strength against the remaining waves of machines. You shall return an eternal star. Awarded to players of Moonlight MvM's November 2023 charity tour!",
"TF_TournamentMedal_Firmware_Purehearted": "Firmware Frenzy Purehearted Purple 2023",
"TF_TournamentMedal_Firmware_Purehearted_Desc": "The color purple is often associated with wealth and royalty. You can now feel wealthy too with this purple hunk of scrap pinned to your chest. Awarded to donors of Moonlight MvM's November 2023 charity tour!",
"TF_TournamentMedal_Firmware_Bountiful": "Firmware Frenzy Bountiful Benevolence 2023",
"TF_TournamentMedal_Firmware_Bountiful_Desc": "Having a reward for donating to a good cause has always been a strange case. On one hand, you're being incentivized to give to a charitable cause for a reward. On the other hand, those in need aren't complaining! Awarded to donors of Moonlight MvM's November 2023 charity tour!",
"TF_TournamentMedal_Firmware_Giver": "Firmware Frenzy Giver in Gold 2023",
"TF_TournamentMedal_Firmware_Giver_Desc": "To have a heart of gold is to demonstrate immense compassion for others. You can now simulate that feeling with this special canteen that turns your heart into literal gold. Awarded to donors of Moonlight MvM's November 2023 charity tour!",
"TF_TournamentMedal_Firmware_Supercritical": "Firmware Frenzy Supercritical Selflessness 2023",
"TF_TournamentMedal_Firmware_Supercritical_Desc": "A canteen filled with an unusual green fluid. It's said to remember the body of the user, reversing any damage dealt and effectively granting invulnerability. Unfortunately, the cap seems to be welded shut. Awarded to donors of Moonlight MvM's November 2023 charity tour!",
"TF_TournamentMedal_Magnetic_Fiendish_2024": "Magnetic Mayhem Fiendish Fuchsite 2024",
"TF_TournamentMedal_Magnetic_Fiendish_2024_Desc": "Gravel Co. must be running out of capital; robots have started dropping these rather than the money they usually run on. So many of them have been found, but we don't think corporate would notice if you kept one. Awarded to players of Moonlight MvM's spring charity tour!",
"TF_TournamentMedal_Magnetic_Megalomaniacal_2024": "Magnetic Mayhem Monstrous Megalomaniacal Mastodon 2024",
"TF_TournamentMedal_Magnetic_Megalomaniacal_2024_Desc": "You set a trap for those fishy businessmen at Gray Gravel Co., and they fell for it hook, line, and sinker. Intel says they're still reeling at the news of their failure. Awarded to players of Moonlight MvM's spring charity tour!",
"TF_TournamentMedal_Magnetic_Humanitarian_2024": "Magnetic Mayhem Humanitarian Hiddenite 2024",
"TF_TournamentMedal_Magnetic_Humanitarian_2024_Desc": "With a name like \"Hiddenite\" you might think this gem is particularly rare. But in reality, it is not: the name comes from someone with a last name Hidden. It's still a highly sought after gem, so you should probably keep it hidden. Awarded to donors of Moonlight MvM's spring charity tour!",
"TF_TournamentMedal_Magnetic_Barely_2024": "Magnetic Mayhem Barely Benign Bismutotantalite 2024",
"TF_TournamentMedal_Magnetic_Barely_2024_Desc": "Our scientists couldn't agree on how to pronounce the name of this gemstone. They called linguists to help them, but their disagreements were only louder. They did agree on one thing; they've never seen a gem quite like this one. Awarded to donors of Moonlight MvM's spring charity tour!",
"TF_TournamentMedal_Magnetic_Treasured_2024": "Magnetic Mayhem Treasured Tourmaline 2024",
"TF_TournamentMedal_Magnetic_Treasured_2024_Desc": "As you affix the gem that shines bright hues,\nA power flows through you from head to shoes.\nYour generosity will know no bounds,\nThe thankfulness of those you helped impounds!\nAwarded to donors of Moonlight MvM's spring charity tour!",
"TF_TournamentMedal_Osmium_Ordinance_Pyrite": "Osmium Ordinance Pyrite Pint 2024",
"TF_TournamentMedal_Osmium_Ordinance_Pyrite_Desc": "Look, we wanted to use real gold for this one, but the bean counters are really breathing down our necks here. Just keep it clean and it'll look like the real deal. Awarded to the donors of Potato MvM's Osmium Ordinance event!",
"TF_TournamentMedal_Osmium_Ordinance_Platinum": "Osmium Ordinance Platinum Pitcher 2024",
"TF_TournamentMedal_Osmium_Ordinance_Platinum_Desc": "Forget about all that talk about humility and modesty, you don't need any encouragement to show that you're clearly a person of expensive taste. Wear it on your chest. Use it as a mirror to admire yourself. If you're feeling extra fancy, shave some flakes off of it to decorate your next meal. Awarded to the donors of Potato MvM's Osmium Ordinance event!",
"TF_TournamentMedal_Osmium_Ordinance_Tungsten": "Osmium Ordinance Tungsten Tank 2024",
"TF_TournamentMedal_Osmium_Ordinance_Tungsten_Desc": "We surveyed as many people as we could to find out the worst material to make a medal with and every single person said tungsten. In hindsight, we probably should've run that survey before making about twenty thousand of these things. Try not to let the sheer weight of it rip your shirt off. Awarded to the players of Potato MvM's Osmium Ordinance event!",
"TF_TournamentMedal_Osmium_Ordinance_Bohrium": "Osmium Ordinance Bohrium Buster 2024",
"TF_TournamentMedal_Osmium_Ordinance_Bohrium_Desc": "Hard to find, probably not radioactive, and really hard to purchase. Those are the words we'd use to describe both this medal, and everyone who's earned it! Don't ask how we got our hands on this stuff, we don't know either. Awarded to the players of Potato MvM's Osmium Ordinance event!",
"TF_TournamentMedal_Osmium_Ordinance_Cobalt": "Osmium Ordinance Cobalt Keepsake 2024",
"TF_TournamentMedal_Osmium_Ordinance_Cobalt_Desc": "Lesser men would look at a fine trinket like this, cash in hand, and scoff at its modesty. \"You think I'd be caught dead wearing a hunk of metal like that? Who do you think I am!?\". You're not so picky though, knowing that humility is a virtue of its own. Awarded to the donors of Potato MvM's Osmium Ordinance event!",
"TF_TournamentMedal_Supreme_Strategist": "Supreme Strategist's Sigil of Status",
"TF_TournamentMedal_Supreme_Strategist_Desc": "A special medal given by the CEO of Gray Gravel Co. for those loyal to his cause. Only those who are extremely skilled in the art of commanding his armies have ever laid their hands upon it. He doesn't recommend wearing it in public. Awarded to content creators of Moonlight MvM's events!",
"TF_heals4reals_gold": "Heals for Reals Event 1st Place",
"TF_heals4reals_silver": "Heals for Reals Event 2nd Place",
"TF_heals4reals_bronze": "Heals for Reals Event 3rd Place",
"TF_heals4reals_participant": "Heals for Reals Event Participant",
"TF_heals4reals_donor": "Heals for Reals Donor",
"TF_MapToken": "Map Stamp",
"TF_Wearable_CosmeticItem": "Cosmetic Item",
"TF_Wearable_TournamentMedal": "Tournament Medal",
"TF_Wearable_CommunityMedal": "Community Medal",
"TF_Wearable_Suit": "Suit",
"TF_Wearable_Shield": "Shield",
"TF_Wearable_Backpack": "Backpack",
"TF_Wearable_Medallion": "Medallion",
"TF_Wearable_Hat": "Hat",
"TF_Wearable_FacialHair": "Facial Hair",
"TF_Wearable_Boots": "Boots",
"TF_Wearable_Medal": "Medal",
"TF_Wearable_Badge": "Badge",
"TF_Wearable_Holiday_Hat": "Holiday Hat",
"TF_Wearable_HonestyHalo": "Aura of Incorruptibility",
"TF_Wearable_Glasses": "Glasses",
"TF_Wearable_Apparel": "Apparel",
"TF_Wearable_Spurs": "Spurs",
"TF_Wearable_Conscience": "Conscience",
"TF_Wearable_Flair": "Flair!",
"TF_Wearable_Blueprints": "Blueprints",
"TF_Wearable_Uniform": "Uniform",
"TF_Wearable_Towels": "Beach Towel",
"TF_Wearable_FlipFlops": "Flip-Flops",
"TF_Wearable_Shoes": "Shoes",
"TF_Wearable_Scarf": "Scarf",
"TF_Wearable_L4DHat": "Veteran's Beret",
"TF_Wearable_Headgear": "Headgear",
"TF_Wearable_Necklace": "Necklace",
"TF_Wearable_PocketSquare": "Pocket Square",
"TF_Wearable_Stethoscope": "Stethoscope",
"TF_Wearable_Bombs": "Decorative Bombs",
"TF_Wearable_Mask": "Mask",
"TF_Wearable_Costume": "Costume Piece",
"TF_Wearable_FuelTank": "Fuel Tank",
"TF_Wearable_Lunchbox": "Lunchbox",
"TF_Wearable_PocketBuddy": "Pocket Buddy",
"TF_Wearable_Coat": "Coat",
"TF_Wearable_Stocking": "Stocking",
"TF_Wearable_Armband": "Armband",
"TF_Wearable_Bells": "Bells",
"TF_Wearable_Ring": "Ring",
"TF_Wearable_Boombox": "Futuristic Sound Device",
"TF_Wearable_MysticalLamp": "Mystical Lamp",
"TF_Wearable_Photograph": "Photograph",
"TF_Wearable_MapperMedal": "Func_Medal",
"TF_Wearable_Shirt": "Shirt",
"TF_Wearable_Pipe": "Pipe",
"TF_Wearable_Robot": "Robot",
"TF_Wearable_ScienceProject": "Science Project",
"TF_Wearable_Satchel": "Satchel",
"TF_Wearable_Lantern": "Lantern",
"TF_Wearable_Treasure": "Treasure",
"TF_Wearable_Bongos": "Bongos",
"TF_Wearable_Tattoos": "Tattoos",
"TF_Wearable_Cigar": "Cigar",
"TF_Wearable_Botkiller": "Botkiller",
"TF_Wearable_Hair": "Hair",
"TF_Wearable_Bones": "Bones",
"TF_Wearable_Armor": "Cosmetic Armor",
"TF_Wearable_Wings": "Wings",
"TF_Wearable_Cape": "Cape",
"TF_Wearable_Balloon": "Balloon",
"TF_Wearable_Ghost": "Ghost",
"TF_Wearable_Duck": "Duck",
"TF_Wearable_Spikes": "Spikes",
"TF_Wearable_Tuxedo": "Tuxedo",
"TF_Wearable_Pin": "Pin",
"TF_Wearable_Kilt": "Kilt",
"TF_Wearable_Gloves": "Gloves",
"TF_Wearable_Mascot": "Mascot",
"TF_Wearable_Bandages": "Bandages",
"TF_Wearable_Axe": "Cosmetic Axe",
"TF_Wearable_Headset": "Headset",
"TF_Wearable_Cooler": "Cooler",
"TF_Wearable_GolfClubs": "Golf Clubs",
"TF_Wearable_Skateboard": "Skateboard",
"TF_Wearable_Refreshment": "Refreshment",
"TF_Wearable_ChampionshipBelt": "Championship Belt",
"TF_Wearable_Glove": "Glove",
"TF_Wearable_Bandolier": "Bandolier",
"TF_Wearable_Supplies": "Supplies",
"TF_Wearable_Augmentation": "Cosmetic Augmentation",
"TF_Wearable_PuffyShirt": "Puffy Shirt",
"TF_Wearable_SpiritAnimal": "Spirit Animal",
"TF_Wearable_Helmet": "Helmet",
"TF_Wearable_Poncho": "Poncho",
"TF_Wearable_Barbeque": "Barbeque",
"TF_Wearable_Towel": "Towel",
"TF_Wearable_Bandana": "Bandana",
"TF_Wearable_SafetyApparatus": "Safety Apparatus",
"TF_Wearable_ElectronicDevice": "Electronic Device",
"TF_Wearable_Coffin": "Coffin",
"TF_Wearable_Hooves": "Hooves",
"TF_Wearable_EyeStalks": "Eye Stalks",
"TF_Wearable_UndeadPet": "Undead Pet",
"TF_Wearable_SpookyCompanion": "Spooky Companion",
"TF_Wearable_BirdHead": "Bird Head",
"TF_Wearable_Tentacles": "Tentacles",
"TF_Wearable_Snowglobe": "Snow Globe",
"TF_Wearable_Sled": "Sled",
"TF_Wearable_Quiver": "Quiver",
"TF_Wearable_Apron": "Apron",
"TF_Wearable_Bottles": "Bottles",
"TF_Wearable_Socks": "Socks",
"TF_Wearable_ToolBelt": "Tool Belt",
"TF_Wearable_EyePatch": "Eye Patch",
"TF_Wearable_Chin": "Chin",
"TF_Wearable_Jacket": "Jacket",
"TF_Wearable_Balaclava": "Balaclava",
"TF_Wearable_Shorts": "Shorts",
"TF_Wearable_Sweater": "Sweater",
"TF_Wearable_Pants": "Pants",
"TF_Wearable_Vest": "Vest",
"TF_Wearable_Holster": "Holster",
"TF_Wearable_Horns": "Horns",
"TF_Wearable_Life_Support": "Life Support",
"TF_Wearable_Jetpack": "Jetpack",
"TF_Wearable_Pouch": "Pouch",
"TF_Wearable_Wingstick": "Wingstick",
"TF_Wearable_Rose": "Rose",
"TF_Wearable_Tools": "Tools",
"TF_Wearable_Package": "Package",
"TF_Wearable_Snowboard": "Snowboard",
"TF_Wearable_Provisions": "Provisions",
"TF_Wearable_CandyCanes": "Candy Canes",
"TF_Wearable_Guitar": "Guitar",
"TF_Wearable_Turntable": "Turntable",
"TF_Wearable_MailBag": "Mail Bag",
"TF_Wearable_Knife": "Decorative Knife",
"TF_Wearable_Idol": "Idol",
"TF_Wearable_Bagpipes": "Bagpipes",
"TF_Wearable_Hood": "Hood",
"TF_Wearable_Slippers": "Slippers",
"TF_Wearable_Headphones": "Headphones",
"TF_Wearable_FlowerPot": "Flower Pot",
"TF_Wearable_Bell": "Bell",
"TF_Wearable_ShoulderPads": "Shoulder Pads",
"TF_Wearable_Scar": "Scar",
"TF_Wearable_IceCreamCone": "Ice Cream Cone",
"TF_Wearable_Toaster": "Toaster",
"TF_Wearable_Eyes": "Eyes",
"TF_Wearable_Bread": "Bread",
"TF_Wearable_Muzzle": "Muzzle",
"TF_Wearable_Garland": "Garland",
"TF_Wearable_Speaker": "Speaker",
"TF_Wearable_Jars": "Jars",
"TF_Wearable_NeckBrace": "Neck Brace",
"TF_Wearable_Ears": "Ears",
"TF_Wearable_HandsomeHand": "Handsome Hand",
"TF_Wearable_TornPants": "Torn Pants",
"TF_Wearable_DogHead": "Dog Head",
"TF_Wearable_Cauldron": "Cauldron",
"TF_Wearable_PorkProduct": "Pork Product",
"TF_Wearable_Headband": "Headband",
"TF_Wearable_Antlers": "Antlers",
"TF_Wearable_PantsSlippers": "Pants and Slippers",
"TF_Wearable_Tie": "Tie",
"TF_Wearable_Fish": "Fish",
"TF_Wearable_Waders": "Waders",
"TF_Wearable_Snack": "Snack",
"TF_Wearable_DentedPan": "Dented Pan",
"TF_Wearable_Infestation": "Infestation",
"TF_Wearable_Goggles": "Goggles",
"TF_Wearable_Treats": "Treats",
"TF_Wearable_GoodSamaritan": "Good Samaritan",
"TF_Wearable_CandyCane": "Candy Cane",
"TF_Wearable_Bandanna": "Bandanna",
"TF_Wearable_Turtleneck": "Turtleneck",
"TF_Wearable_Pads": "Pads",
"TF_Wearable_RoboticHead": "Robotic Head",
"TF_Wearable_Cloak": "Cloak",
"TF_Wearable_DragonHead": "Dragon Head",
"TF_Wearable_BearHead": "Bear Head",
"TF_Wearable_ArcadeMachine": "Arcade Machine",
"TF_Wearable_Gambeson": "Gambeson",
"TF_Wearable_Medkit": "Decorative Medkit",
"TF_Wearable_Headache": "Headache",
"TF_Wearable_Shroud": "Shroud",
"TF_Wearable_Butler": "Butler",
"TF_Wearable_Wound": "Wound",
"TF_Wearable_DivingGear": "Diving Gear",
"TF_Wearable_Tunic": "Tunic",
"TF_Wearable_Wetsuit": "Wetsuit",
"TF_Wearable_Sombrero": "Sombrero",
"TF_Wearable_Bullets": "Decorative Bullets",
"TF_Wearable_LavaHead": "Lava Head",
"TF_Wearable_Visor": "Visor",
"TF_RobotPart_Type": "Robot Part",
"TF_CircuitBoard_Type": "Circuit Board",
"TF_TauntEnabler_Laugh": "Taunt: The Schadenfreude",
"TF_TauntEnabler_Laugh_Desc": "All Class Taunt\nShare a good natured laugh with everyone except that one guy you just shot.",
"TF_TauntEnabler_MedicHeroicPose": "Taunt: The Meet the Medic",
"TF_TauntEnabler_MedicHeroicPose_Desc": "Medic Taunt\nRemind those ungrateful bastards how valuable your Medic skills are by striking a heroic pose accompanied by an angelic choir, beams of divine light, and a flock of doves.",
"TF_Gift": "Gift",
"TF_Gift_EntireServer": "Pile o' Gifts",
"TF_Gift_EntireServer_Desc": "When used, this Action Item gives a random gift\nto up to 23 other people on the server!",
"TF_Gift_RandomPerson": "Secret Saxton",
"TF_Gift_RandomPerson_Desc": "When used, this Action Item gives a random gift\nto a random person on the server!",
"TF_Tool_Gift_Desc": "This item is a wrapped gift. You can give it to someone if you wrapped it, or unwrap it if you received it!",
"ToolAction_WeddingRing_AcceptReject": "Accept / Reject",
"TF_UseWeddingRing_Title": "Accept Proposal?",
"TF_UseWeddingRing_Text": "Do you want to accept this proposal from %proposer_name%?\n\nKeep in mind that this item can only be used this once. Diamonds are forever.",
"TF_WeddingRing_AcceptProposal": "I do!",
"TF_WeddingRing_RejectProposal": "Cancel",
"TF_WeddingRing_ClientMessageTitle": "Exciting news!",
"TF_WeddingRing_ClientMessageBody": "%receiver_name% has accepted %gifter_name%'s \"%ring_name%\"! Congratulations!",
"TF_WeddingRing": "Something Special For Someone Special",
"TF_WeddingRing_Desc": "An eternal symbol of affection and commitment and approximately two months salary.\n\nGift wrap this and give it to someone dear, giving them the opportunity to accept your proposal and announce your happiness to the whole world.",
"Attrib_AcceptedWeddingRingAccount1": "A perpetual bond of commitment between %s1",
"Attrib_AcceptedWeddingRingAccount2": "and %s1, forever and ever and ever. XoXoX",
"TF_NoiseMaker": "Noise Maker",
"TF_NoiseMaker_CrazyLaugh": "Noise Maker - Crazy Laugh",
"TF_NoiseMaker_Werewolf": "Noise Maker - Werewolf",
"TF_NoiseMaker_BlackCat": "Noise Maker - Black Cat",
"TF_NoiseMaker_Banshee": "Noise Maker - Banshee",
"TF_NoiseMaker_Witch": "Noise Maker - Witch",
"TF_NoiseMaker_Gremlin": "Noise Maker - Gremlin",
"TF_NoiseMaker_Stabby": "Noise Maker - Stabby",
"TF_NoiseMaker_Exhausted": "You have used all of your Noise Maker's charges.",
"TF_NoiseMaker_Shogun": "Noise Maker - Koto",
"TF_NoiseMaker_Charity_Bell": "Noise Maker - Bell",
"TF_NoiseMaker_Charity_Tingsha": "Noise Maker - Gong",
"TF_NoiseMaker_TFBirthday": "Noise Maker - TF Birthday",
"TF_NoiseMaker_Vuvuzela": "Noise Maker - Vuvuzela",
"TF_NoiseMaker_Winter2011": "Noise Maker - Winter Holiday",
"TF_BetaPocketRocketLauncher": "Beta Pocket Rocket Launcher",
"TF_BetaPocketRocketLauncher2": "Beta Pocket Rocket Launcher 2",
"TF_BetaPocketRocketLauncher3": "Beta Pocket Rocket Launcher 3",
"TF_BetaPocketShotgun": "Beta Pocket Shotgun",
"TF_BetaSplitEqualizer1": "Beta Split Equalizer 1",
"TF_BetaSplitEqualizer2": "Beta Split Equalizer 2",
"TF_BetaSniperRifle1": "Beta Sniper Rifle 1",
"TF_BetaSniperClub1": "Beta Sniper Club 1",
"TF_LordCockswainPith": "Lord Cockswain's Pith Helmet",
"TF_LordCockswainPith_Desc": "",
"TF_LordCockswainChops": "Lord Cockswain's Novelty Mutton Chops and Pipe",
"TF_LordCockswainChops_Desc": "",
"TF_LordCockswainChops_style0": "Helmet",
"TF_LordCockswainChops_style1": "No Helmet",
"TF_CowMangler": "Cow Mangler 5000",
"TF_CowMangler_Desc": "",
"TF_RighteousBison": "Righteous Bison",
"TF_RighteousBison_Desc": "",
"TF_Weapon_FocusedWaveProjector": "Focused Wave Projector",
"TF_Weapon_IndivisibleParticleSmasher": "Indivisible Particle Smasher",
"TF_DrGrordbortBadge": "Dr. Grordbort's Crest",
"TF_DrGrordbortBadge_Desc": "A symbol of service in the Venusian legions.",
"TF_Pomson": "Pomson 6000",
"TF_Pomson_Desc": "Being an innovative hand-held irradiating utensil capable of producing rapid pulses of high-amplitude radiation in sufficient quantity as to immolate, maim and otherwise incapacitate the Irish.",
"TF_Wrenchmotron": "Eureka Effect",
"TF_Wrenchmotron_Desc": "Being a tool that eliminates exertion by harnessing the electrical discharges of thunder-storms for the vigorous coercion of bolts, nuts, pipes and similar into their rightful places. May also be used to bludgeon.",
"TF_Brainiac": "Brainiac Hairpiece",
"TF_Brainiac_Style_Helmet": "With Helmet",
"TF_Brainiac_Style_NoHelmet": "Without Helmet",
"TF_Brainiac_Desc": "Being a maths-enhancing hairpiece that endeavors to heighten the senses of any soul, be he a gentle-man of leisure deserving of such a thing, or a loathsome tiller of the earth of whom a beating would not go unwarranted.",
"TF_Brainiac_Goggles": "Brainiac Goggles",
"TF_Brainiac_Goggles_Desc": "Being prescription shooting goggles that endeavor to relieve the eye from the reflection off one's gun barrel whilst also correcting Diplopia, Strabismus, 'Nervous Vision', Early-Onset Old-Eye, and several other varieties of structural defect.",
"TF_DRG_CopperBadge": "Dr. Grordbort's Copper Crest",
"TF_DRG_CopperBadge_Desc": "Being a water-soluble, highly poisonous copper crest offering mute testament to one's commitment to the sciences. Prolonged exposure may cause tissue putridity, muscle atrophy and bone softening in the infirm, elderly and those graced with child.",
"TF_Phlogistinator": "Phlogistinator",
"TF_Phlogistinator_Desc": "Being a revolutionary appliance capable of awakening the fire element phlogiston that exists in all combustible creatures, which is to say, all of them.",
"TF_ThirdDegree": "Third Degree",
"TF_ThirdDegree_Desc": "Being a boon to tree-fellers, backwoodsmen and atom-splitters the world over, this miraculous matter-hewing device burns each individual molecule as it cleaves it.",
"TF_ManMelter": "Manmelter",
"TF_ManMelter_Desc": "This weapon will reload automatically when not active.\n\nBeing a device that flouts conventional scientific consensus that the molecules composing the human body must be arranged \"just so\", and not, for example, across a square-mile radius.",
"TF_Bubble_Helmet": "Bubble Pipe",
"TF_Bubble_Helmet_Desc": "Being an invention that achieves the humanitarian goal of all great men of science, from Lord Holland to the Duke of Wellington, to allow a true gentle-man to smoke a pipe in space.",
"TF_GrordbortPyro_Tank": "Moonman Backpack",
"TF_GrordbortPyro_Tank_Desc": "Being a repository of the foundational ingredients necessary for a body to live a life of leisure in space—namely one part oxygen, one part mercury, and twelve parts laudanum.",
"TF_DRG_SilverBadge": "Dr. Grordbort's Silver Crest",
"TF_DRG_SilverBadge_Desc": "Being a highly malleable, thoroughly combustible silver crest that declares one's commitment, and intention, to immolate all creatures on God's Earth.",
"TF_ArmoredAuthority": "Armored Authority",
"TF_FancyDressUniform": "Fancy Dress Uniform",
"TF_Mantreads": "Mantreads",
"TF_DisciplinaryAction": "Disciplinary Action",
"TF_Overdose": "Overdose",
"TF_Overdose_Desc": "While active, movement speed increases based on ÜberCharge percentage to a maximum of +20%",
"TF_Weapon_Riding_Crop": "Riding Crop",
"TF_SodaPopper": "Soda Popper",
"TF_SodaPopper_Desc": "When Hype is full, Alt-Fire to activate Hype mode for multiple air jumps.\nThis weapon reloads its entire clip at once.",
"TF_Winger": "Winger",
"TF_Atomizer": "Atomizer",
"TF_BonkBoy": "Bonk Boy",
"TF_BonkBoy_Style_WithNoHat": "Aerodynamic Classic",
"TF_BonkBoy_Style_WithHat": "Tuned In",
"TF_CosaNostraCap": "Cosa Nostra Cap",
"TF_CosaNostraCap_Desc": "If looks could kill, this dapper fellow would make your head an accomplice to murder.",
"TF_Enforcer": "Enforcer",
"TF_BigEarner": "Big Earner",
"TF_MadeMan": "Made Man",
"TF_MadeMan_Desc": "A gentleman always has a flower handy to drop on an opponent's grave.",
"TF_ConjurersCowl": "Conjurer's Cowl",
"TF_ConjurersCowl_Desc": "I put on my wizard's hat.",
"TF_RFAHammer": "Maul",
"TF_RFAHammer_Desc": "Packs a devastating punch with a hint of Mars dust.",
"TF_MedicMtGHat": "Planeswalker Helm",
"TF_MedicMtGHat_Desc": "If anyone asks, tell them the tusks qualify you for veterinary work.",
"TF_ScoutMtGHat": "Planeswalker Goggles",
"TF_ScoutMtGHat_Desc": "No more bugs in your eyes as you blaze across the map.",
"TF_StatelySteelToe": "Stately Steel Toe",
"TF_CopGlasses": "Security Shades",
"TF_TamOShanter": "Tam O' Shanter",
"TF_RoguesColRoule": "Rogue's Col Roule",
"TF_HeelBiters": "Prairie Heel Biters",
"TF_CopHelmet": "Copper's Hard Top",
"TF_CopHelmet_Style0": "Peacekeeper",
"TF_CopHelmet_Style1": "Lawless",
"TF_SteelJaw": "Big Steel Jaw of Summer Fun",
"TF_SteelJaw_Desc": "Wee! It's summer! We're having fun!\nAH GOD IT'S BOLTED TO HIS HEAD!",
"TF_Summer_Shades": "Summer Shades",
"TF_Summer_Shades_Desc": "These are famous.",
"TF_Scout_FlipFlops": "Flip-Flops",
"TF_Scout_FlipFlops_Desc": "Only for those with manly adductor halluci.",
"TF_Scout_Towels": "Lucky No. 42",
"TF_Scout_Towels_Desc": "Why fight in the sun when you could lounge in the shade?",
"TF_SummerHat": "Summer Hat",
"TF_SummerHat_Desc": "E hele mākou i kahakai.",
"TF_NoiseMaker_Fireworks": "Noise Maker - Fireworks",
"TF_ToweringPillarOfSummerShades": "Towering Pillar of Summer Shades",
"TF_ToweringPillarOfSummerShades_Desc": "",
"TF_Summer2014_Level0": "Summer Starter Kit",
"TF_Summer2014_Level0_Desc": "Granted for participation in the Steam Summer Adventure 2014.\n\nThis contains a sampling of items and can be opened from your backpack screen!",
"TF_Summer2014_Level1": "Summer Adventure Pack",
"TF_Summer2014_Level1_Desc": "Granted for participation in the Steam Summer Adventure 2014.\n\nThis contains a sampling of items, including at least one special Summer cosmetic item, and can be opened from your backpack screen!",
"TF_ScoutBoombox": "Boston Boom-Bringer",
"TF_ScoutBoombox_Desc": "Walkin' down the street to the hardcore beat while his Mann Co. boom vibrates the concrete.",
"TF_DemoLamp": "Aladdin's Private Reserve",
"TF_DemoLamp_Desc": "Originally owned by some punk kid in Syria, this Arabian wish-granter is a lamp full of liquid courage. Simply rub, think liquory thoughts, and pour. Warning: don't think about anything else while rubbing, or you might not get booze.",
"TF_DemoSnappedPupil": "Snapped Pupil",
"TF_DemoSnappedPupil_Desc": "Be honest, lads. Ye cannae even tell, can ye?",
"TF_ScoutFancyShirt": "Paisley Pro",
"TF_ScoutFancyShirt_Desc": "",
"TF_ScoutFancyShoes": "Argyle Ace",
"TF_ScoutFancyShoes_Desc": "",
"TF_ScoutFancyHair": "Pomade Prince",
"TF_ScoutFancyHair_Desc": "",
"TF_DemoSombrero": "Allbrero",
"TF_DemoSombrero_Desc": "",
"TF_DemomanMargaritaShades": "Seeing Double",
"TF_DemomanMargaritaShades_Desc": "",
"TF_DemomanBeerGrenades": "Six Pack Abs",
"TF_DemomanBeerGrenades_Desc": "",
"TF_Bowtie": "Dr. Whoa",
"TF_Bowtie_Desc": "",
"TF_ClaimCode": "Claim Code",
"TF_Party_Favor": "Party Favor",
"TF_Armory_Item_Type_NoiseMaker": "Plays a themed sound when used. Equip this item in your Action slot and use it during a game. A charge will be consumed when the item is used.",
"TF_DeliverGiftDialog_Title": "Deliver a Gift",
"TF_DeliverGiftResultDialog_Title": "Gift Delivery",
"TF_DeliverGiftDialog_Random_Text": "Do you want to deliver this gift to a random online player?",
"TF_DeliverGiftDialog_Confirm": "Yes, Deliver",
"TF_DeliverGiftDialog_Cancel": "No",
"TF_DeliverGiftResultDialog_Success": "The gift has been delivered!",
"TF_DeliverGiftResultDialog_Success_WithAccount": "Your gift has been delivered to %receiver_account_name%!",
"TF_DeliverGiftResultDialog_Fail": "Unable to deliver the gift.",
"TF_DeliverGiftResultDialog_VAC": "The recipient does not have privileges to receive a gift.",
"TF_UseFail_NotInGame_Title": "Join A Game First!",
"TF_UseFail_NotInGame": "This item can only be used from within a game.",
"TF_UseFail_NotOnTeam_Title": "Join A Team First!",
"TF_UseFail_NotOnTeam": "This item can only be used after you have joined a team.",
"TF_UsableItem": "Usable Item",
"TF_Usable_PowerupBottle": "Power Up Canteen",
"TF_Usable_PowerupBottle_Desc": "Applies a bonus effect for a limited amount of time when used. Must first be filled at an Upgrade Station and can only be filled with one bonus type at a time.",
"TF_SelectPlayer_DuelClass": "Class Restriction: %s1",
"TF_SelectPlayer_DuelClass_None": "None",
"TF_SelectPlayer_Duel_AnyClass": "You and your opponent can compete using any class.",
"TF_SelectPlayer_Duel_PlayerClass": "You and your opponent must compete using your current class: %s1.",
"TF_Usable_Duel": "Dueling Mini-Game",
"TF_Usable_Duel_Desc": "Is an enemy player questioning your skills, personal hygiene, and/or ancestry?\nUse these stylish firearms to challenge them to a duel!\nSee the Mann Co. Catalog for full details.",
"TF_Duel_Request": "%initiator% has challenged you to a duel! Will you defend your honor?",
"TF_Duel_Request_Class": "%initiator% has challenged you to a %player_class% Class-Locked Duel! Will you defend your honor?",
"TF_Duel_Challenge": "%initiator% has challenged %target% to a duel!",
"TF_Duel_Challenge_Class": "%initiator% has challenged %target% to a %player_class% Class-Locked Duel!",
"TF_Duel_Accept": "%target% has agreed to duel with %initiator%!",
"TF_Duel_Decline": "Cowardly %target% has rejected a duel with the Honorable %initiator%!",
"TF_Duel_Decline2": "%target% is afraid to duel with %initiator% and rejects their challenge!",
"TF_Duel_Decline3": "%target% is no match for %initiator% and refuses to duel!",
"TF_Duel_Win": "%winner% defeated %loser% in a duel with a score of %winner_score% to %loser_score%!",
"TF_Duel_Win_SwappedTeams": "%winner% defeated %loser% in a duel because %loser% changed teams.",
"TF_Duel_Win_Disconnect": "%winner% defeated %loser% in a duel because %loser% left the game.",
"TF_Duel_Tie": "The duel between %initiator% and %target% ended in a draw with %score% points each! A Dueling Mini-Game owned by %initiator% has not been consumed.",
"TF_Duel_Refund_LevelShutdown": "The duel between %initiator% and %target% has ended, because the map has changed. A Dueling Mini-Game owned by %initiator% has not been consumed.",
"TF_Duel_Refund_ScoreTiedAtZero": "The duel between %initiator% and %target% has ended, because they tied at 0-0. A Dueling Mini-Game owned by %initiator% has not been consumed.",
"TF_Duel_Refund_Kicked": "The duel between %initiator% and %target% has ended, because a player has been kicked. A Dueling Mini-Game owned by %initiator% has not been consumed.",
"TF_Duel_Refund_ForceTeamSwap": "The duel between %initiator% and %target% has ended, because a player has been switched to another team. A Dueling Mini-Game owned by %initiator% has not been consumed.",
"TF_Duel_StatusKill": "Duel Status:\n%initiator%: %initiator_score%\n%target%: %target_score%",
"TF_Duel_StatusAssist": "Duel Status:\n%initiator%: %initiator_score%\n%target%: %target_score%",
"TF_Duel_StatusForChat_Kill": "Duel Status - %initiator%: %initiator_score% - %target%: %target_score%",
"TF_Duel_StatusForChat_Assist": "Duel Status - %initiator%: %initiator_score% - %target%: %target_score%",
"TF_Duel_Title": "Duel to the Death!",
"TF_Duel_JoinCancel": "No Thanks",
"TF_Duel_Cancelled": "The duel between %initiator% and %target% has been cancelled. A Dueling Mini-Game owned by %initiator% has not been consumed.",
"TF_Duel_InADuel_Initiator": "You have already challenged someone to a duel or are currently in a duel.",
"TF_Duel_InADuel_Target": "%target% is already in a duel.",
"TF_Duel_TempBanned_Initiator": "Your last duel ended unexpectedly, so you cannot duel again for at least ten minutes.",
"TF_Duel_TempBanned_Target": "%target% was last in a duel that ended unexpectedly, so they cannot duel again for at least ten minutes.",
"TF_Duel_UserTemporarilyUnavailable": "There was a temporary problem preventing the duel from starting. Please try again in a few minutes.",
"TF_Duel_CannotUse": "Cannot initiate a duel at this time.",
"TF_Duel_Medal_Bronze": "Bronze Dueling Badge",
"TF_Duel_Medal_Silver": "Silver Dueling Badge",
"TF_Duel_Medal_Gold": "Gold Dueling Badge",
"TF_Duel_Medal_Plat": "Platinum Dueling Badge",
"TF_Duel_Medal_Bronze_Desc": "This badge tracks your duel statistics.\nIncrease its level by winning duels!",
"TF_Duel_Medal_Silver_Desc": "Earned at level 25.\nThis badge tracks your duel statistics.\nIncrease its level by winning duels!",
"TF_Duel_Medal_Gold_Desc": "Earned at level 50.\nThis badge tracks your duel statistics.\nIncrease its level by winning duels!",
"TF_Duel_Medal_Plat_Desc": "Earned at level 75.\nThis badge tracks your duel statistics.\nIncrease its level by winning duels!",
"TF_Duel_Desc_Won": "Wins: %wins%\nLast Duel: You defeated %last_target%\non %last_date%",
"TF_Duel_Desc_Lost": "Wins: %wins%\nLast Duel: You lost to %last_target%\non %last_date%",
"TF_Duel_Desc_Tied": "Wins: %wins%\nLast Duel: You tied with %last_target%\non %last_date%",
"TF_DuelDialog_Title": "Challenge to a Duel",
"TF_Duel_WrongClass": "You must be playing as %player_class% to accept a Class-Locked Duel!",
"Store_FilterType_PlayerClass": "Class:",
"Store_FilterType_SlotType": "Slot type:",
"Store_SortBy": "Sort by:",
"Store_Filter_All": "All",
"Store_Sorter_ReleaseNewest": "Newest First",
"Store_Sorter_ReleaseOldest": "Oldest First",
"Store_Sorter_PriceHighest": "Highest Price",
"Store_Sorter_PriceLowest": "Lowest Price",
"Store_Sorter_Alphabetical": "Alphabetical",
"Store_Sorter_PlayerClassName": "Class",
"TF_StoreBundle": "Item Bundle",
"Store_AvailableStyles_Header": "Available Styles:",
"TF_Bundle_Polycount": "Polycount Pack",
"TF_Bundle_Polycount_Desc": "Includes all the Polycount Contest winning entries:",
"TF_Bundle_PolycountPyro": "The Gas Jockey's Gear",
"TF_Bundle_PolycountPyro_Desc": "Includes all the Polycount Pyro Items:",
"TF_Bundle_PolycountSpy": "The Saharan Spy",
"TF_Bundle_PolycountSpy_Desc": "Includes all the Polycount Spy Items:",
"TF_Bundle_PolycountSoldier": "The Tank Buster",
"TF_Bundle_PolycountSoldier_Desc": "Includes all the Polycount Soldier Items:",
"TF_Bundle_PolycountSniper": "The Croc-o-Style Kit",
"TF_Bundle_PolycountSniper_Desc": "Includes all the Polycount Sniper Items:",
"TF_Bundle_PolycountScout": "The Special Delivery",
"TF_Bundle_PolycountScout_Desc": "Includes all the Polycount Scout Items:",
"TF_Bundle_ExcessiveBundle": "A Bargaining Manne's Bundle of Bargains",
"TF_Bundle_ExcessiveBundle_Desc": "Includes all items from the Polycount Pack and the Winter Update Pack:",
"TF_Bundle_WinterUpdate": "Winter Update Pack",
"TF_Bundle_WinterUpdate_Desc": "Includes all of the Winter Update class set items:",
"TF_Bundle_MedievalMedic": "The Medieval Medic",
"TF_Bundle_MedievalMedic_Desc": "Includes these medieval themed Medic items:",
"TF_Bundle_HibernatingBear": "The Hibernating Bear",
"TF_Bundle_HibernatingBear_Desc": "Includes these Heavy items:",
"TF_Bundle_ExpertsOrdnance": "The Expert's Ordnance",
"TF_Bundle_ExpertsOrdnance_Desc": "Includes these Demoman items:",
"TF_Bundle_FancyHats": "Box of Fancy Hats",
"TF_Bundle_FancyHats_Desc": "Contains a variety of incredibly fancy hats:",
"TF_Bundle_NastyWeapons": "Pile of Nasty Weapons",
"TF_Bundle_NastyWeapons_Desc": "An assortment of particularly nasty weapons:",
"TF_Bundle_ScoutStarter": "Scout Starter Pack",
"TF_Bundle_ScoutStarter_Desc": "Want to play as Scout? We put every functionally unique weapon he's ever gotten into one handy, low-priced package.",
"TF_Bundle_SoldierStarter": "Soldier Starter Pack",
"TF_Bundle_SoldierStarter_Desc": "Want to play as Soldier? We put every functionally unique weapon he's ever gotten into one handy, low-priced package.",
"TF_Bundle_PyroStarter": "Pyro Starter Pack",
"TF_Bundle_PyroStarter_Desc": "Want to play as Pyro? We put every functionally unique weapon they've ever gotten into one handy, low-priced package.",
"TF_Bundle_DemomanStarter": "Demoman Starter Pack",
"TF_Bundle_DemomanStarter_Desc": "Want to play as Demoman? We put every functionally unique weapon he's ever gotten into one handy, low-priced package.",
"TF_Bundle_HeavyStarter": "Heavy Starter Pack",
"TF_Bundle_HeavyStarter_Desc": "Want to play as Heavy? We put every functionally unique weapon he's ever gotten into one handy, low-priced package.",
"TF_Bundle_EngineerStarter": "Engineer Starter Pack",
"TF_Bundle_EngineerStarter_Desc": "Want to play as Engineer? We put every functionally unique weapon he's ever gotten into one handy, low-priced package.",
"TF_Bundle_MedicStarter": "Medic Starter Pack",
"TF_Bundle_MedicStarter_Desc": "Want to play as Medic? We put every functionally unique weapon he's ever gotten into one handy, low-priced package.",
"TF_Bundle_SniperStarter": "Sniper Starter Pack",
"TF_Bundle_SniperStarter_Desc": "Want to play as Sniper? We put every functionally unique weapon he's ever gotten into one handy, low-priced package.",
"TF_Bundle_SpyStarter": "Spy Starter Pack",
"TF_Bundle_SpyStarter_Desc": "Want to play as Spy? We put every functionally unique weapon he's ever gotten into one handy, low-priced package.",
"TF_PurityFist_Promo": "Purity Fist Promo",
"TF_PurityFist_Promo_Desc": "",
"TF_Bundle_MobsterMonday": "Mobster Monday Bundle",
"TF_Bundle_MobsterMonday_Desc": "Load up on these Mafia themed items for the Heavy and Spy:",
"TF_Bundle_TimbukTuesday": "Timbuk-Tuesday Bundle",
"TF_Bundle_TimbukTuesday_Desc": "Load up on these (mostly) Mid-Eastern themed items for the Sniper, Scout, and Demoman:",
"TF_Bundle_WarWednesday": "World War Wednesday Bundle",
"TF_Bundle_WarWednesday_Desc": "Load up on these military themed items for the Soldier:",
"TF_Bundle_MeetTheMedic": "Meet the Medic! Bundle",
"TF_Bundle_MeetTheMedic_Desc": "Load up on these items celebrating the Meet the Medic video:",
"TF_Bundle_Uber": "The Über Update Bundle",
"TF_Bundle_Uber_Desc": "Get every new item in the Über Update in one massive bundle:",
"TF_Bundle_Summer2011": "Summer Sun Bundle",
"TF_Bundle_Summer2011_Desc": "The perfect set of items to enjoy the sun's warmth:",
"TF_Bundle_HalloweenNoiseMaker": "Noise Maker Bundle",
"TF_Bundle_HalloweenNoiseMaker_Desc": "Includes one of each Halloween Noise Maker. Each Noise Maker has 25 charges.",
"TF_Bundle_ShogunPromoComplete": "The Emperor's Assortment",
"TF_Bundle_ShogunPromoComplete_Desc": "Get all eight items.\nThis haiku is not lying.\nGet. All. Eight. Items:",
"TF_Bundle_JapanCharity": "Japan Charity Bundle",
"TF_Bundle_JapanCharity_Desc": "Limited-edition hats and noisemakers! All proceeds (net of applicable taxes) go directly to the American Red Cross for disaster relief in Japan.",
"TF_Bundle_MapTokens": "Map Stamps Collection",
"TF_Bundle_MapTokens_Desc": "Includes one stamp for each community-made map:",
"TF_Bundle_MapTokens_ToughBreak": "Tough Break Community Maps Bundle",
"TF_Bundle_MapTokens_ToughBreak_Desc": "Includes one Map Stamp and one Strange Filter for each community-made map from the Tough Break campaign.",
"TF_Bundle_DrGrordbortVictoryPack": "Dr. Grordbort's Victory Pack",
"TF_Bundle_DrGrordbortVictoryPack_Desc": "Grab the whole pack of Dr. Grordbort items for the Soldier, designed by WETA Workshop!",
"TF_Bundle_DrGrordbortBrainiacPack": "Dr. Grordbort's Brainiac Pack",
"TF_Bundle_DrGrordbortBrainiacPack_Desc": "Grab the whole pack of Dr. Grordbort items for the Engineer, designed by WETA Workshop!",
"TF_Bundle_DrGrordbortMoonmanPack": "Dr. Grordbort's Moonman Pack",
"TF_Bundle_DrGrordbortMoonmanPack_Desc": "Grab the whole pack of Dr. Grordbort items for the Pyro, designed by WETA Workshop!",
"TF_Bundle_DrGrordbortMoonbrainPack": "Dr. Grordbort's Moonbrain Double Pack",
"TF_Bundle_DrGrordbortMoonbrainPack_Desc": "Grab the whole pack of Dr. Grordbort items for the Pyro and the Engineer, designed by WETA Workshop!",
"TF_Bundle_Winter2011ScoutElf": "Santa's Little Accomplice Bundle",
"TF_Bundle_Winter2011ScoutElf_Desc": "As seen in the timeless holiday classic, A Smissmas Story:",
"TF_Bundle_DeusExPromo": "The Manno-Technology Bundle",
"TF_Bundle_DeusExPromo_Desc": "When will it be the future? Right now! See for yourself with these eight items:",
"TF_Bundle_SleepingDogsBundle": "Triad Bundle",
"TF_Bundle_SleepingDogsBundle_Desc": "Trick an incredibly violent and secretive underground Asian crime syndicate into thinking you're one of them! It's a well-known fact that the first thing you get when you join the Chinese mafia is a meat cleaver, a bunch of tattoos, and a special Chinese mafia helmet that will protect your head when you launch yourself at rival gangs out of an ancient Chinese crime cannon. Get in on the ground floor, though, because eventually the Chinese mafia is going to get wise to this bundle and change the contents of their complementary initiation gift basket.",
"TF_Bundle_QuakeCon2012Bundle": "QuakeCon Bundle",
"TF_Bundle_QuakeCon2012Bundle_Desc": "Celebrate QuakeCon 2012 with this assortment of iconic items from twenty years of gaming history.",
"TF_Bundle_FM2012Promo": "Footballer's Kit",
"TF_Bundle_FM2012Promo_Desc": "Pick a side and show your pride:",
"TF_Bundle_EqualizerEscape": "The Pickaxe Pack",
"TF_Bundle_EqualizerEscape_Desc": "Includes both the Equalizer and the Escape Plan:",
"TF_Bundle_LW_Weapons": "Love and War Weapons Bundle",
"TF_Bundle_LW_Weapons_Desc": "Includes the complete set of new gameplay weapons from the Love and War update:",
"TF_Bundle_LW_Taunts": "Love and War Taunts Bundle",
"TF_Bundle_LW_Taunts_Desc": "Celebrate with your friends and torment your enemies with these 15 taunts:",
"TF_Bundle_LW_Cosmetics": "Love and War Cosmetics Bundle",
"TF_Bundle_LW_Cosmetics_Desc": "All 44 new cosmetic items in one bundle so big it barely even fits:",
"TF_Bundle_Summer2012_UrbanProfessional": "Urban Professional Bundle",
"TF_Bundle_Summer2012_UrbanProfessional_Desc": "Nothing commands respect like a beanie, sunglasses and an incredibly large sniper rifle:",
"TF_Bundle_Summer2012_DumpsterDiver": "Dumpster Diver Bundle",
"TF_Bundle_Summer2012_DumpsterDiver_Desc": "Finally! Experience the thrill of being homeless from the comfort of your own home:",
"TF_Bundle_Summer2012_PublicEnemy": "Public Enemy Bundle",
"TF_Bundle_Summer2012_PublicEnemy_Desc": "Deciding whether or not to start your own crime syndicate? Test the gangster waters with the Public Enemy Bundle:",
"TF_Bundle_Summer2012_Pyromania": "Pyromania Mega Bundle",
"TF_Bundle_Summer2012_Pyromania_Desc": "If you bought all this gear separately, it would cost over $100. If you buy it all in this bundle, it would cost less. So we think the choice is clear: Buy them separately. Please?",
"TF_Bundle_Summer2012_Community": "Summer 2012 Community Bundle",
"TF_Bundle_Summer2012_Community_Desc": "The Summer 2012 Community Bundle is filled with amazing creations by members of the TF2 community. So if you happen to be on parole, this actually probably counts as community service:",
"TF_Bundle_DemoHalloween2011": "The Highland Hound Bundle",
"TF_Bundle_DemoHalloween2011_Desc": "Celebrate Halloween using these items:",
"TF_Bundle_ScoutHalloween2011": "The Curse-a-Nature Bundle",
"TF_Bundle_ScoutHalloween2011_Desc": "Celebrate Halloween using these items:",
"TF_Bundle_PyroHalloween2011": "The Infernal Imp Bundle",
"TF_Bundle_PyroHalloween2011_Desc": "Celebrate Halloween using these items:",
"TF_Bundle_MedicHalloween2011": "The Mad Doktor Bundle",
"TF_Bundle_MedicHalloween2011_Desc": "Celebrate Halloween using these items:",
"TF_Bundle_SoldierHalloween2011": "The Tin Soldier Bundle",
"TF_Bundle_SoldierHalloween2011_Desc": "Celebrate Halloween using these items:",
"TF_Bundle_SpyHalloween2011": "The Invisible Rogue Bundle",
"TF_Bundle_SpyHalloween2011_Desc": "Celebrate Halloween using these items:",
"TF_Bundle_HeavyHalloween2011": "The FrankenHeavy Bundle",
"TF_Bundle_HeavyHalloween2011_Desc": "Celebrate Halloween using these items:",
"TF_Bundle_SniperHalloween2011": "The Camper Van Helsing Bundle",
"TF_Bundle_SniperHalloween2011_Desc": "Celebrate Halloween using these items:",
"TF_Bundle_EngineerHalloween2011": "The Brundle Bundle Bundle",
"TF_Bundle_EngineerHalloween2011_Desc": "Celebrate Halloween using these items:",
"TF_Bundle_Halloween2011": "Halloween 2011 Costume Bundle of Bundles",
"TF_Bundle_Halloween2011_Desc": "Celebrate Halloween using these items:",
"TF_Bundle_HA_Gold": "Hero Academy Gold Pack",
"TF_Bundle_HA_Gold_Desc": "This heroic bundle contains a gift copy of Hero Academy with all DLC on Steam, as well as all four Hero Academy-themed hats:",
"TF_Halloween2012CommunityBundle": "Halloween 2012 Community Bundle",
"TF_Halloween2012CommunityBundle_Desc": "This spooky bundle contains more than twenty incredible items created by members of the TF2 community to celebrate the Fourth Annual Spectral Halloween Special:",
"TF_Bundle_Halloween2013Everything": "Halloween 2013 Community Bundle",
"TF_Bundle_Halloween2013Everything_Desc": "This spooky bundle contains more than a hundred incredible items created by members of the TF2 community to celebrate the Fifth Annual Spectral Halloween Special. There's no way to fit it all on one screen but we'll try:",
"TF_Bundle_Halloween2014Everything": "Halloween 2014 Community Bundle",
"TF_Bundle_Halloween2014Everything_Desc": "This creepy bundle contains FIFTY exquisite items created by members of the TF2 community to celebrate the Sixth Annual Scream Fortress event. There's no way to fit it all on one screen but we'll try:",
"TF_Bundle_Byzantine": "The Byzantine Bundle",
"TF_Bundle_Byzantine_Desc": "Why does the Roman Empire fall? So it can get back up again, courtesy of these era-appropriate duds (including the Romevision-creating Hardy Laurel).",
"TF_Spycrab_Promo": "Spycrab Promo",
"TF_Spycrab_Promo_Desc": "",
"TF_RPS_Promo": "RPS Promo",
"TF_RPS_Promo_Desc": "",
"TF_AI_Promo": "Alien: Isolation Promo",
"TF_AI_Promo_Desc": "",
"TF_Bundle_BatmanArkhamKnightPromo": "Batman Arkham Knight Promo",
"TF_Bundle_BatmanArkhamKnightPromo_Desc": "",
"SteamPackage_HA_Council": "Hero Academy with Council and TF2 Armies",
"SteamPackage_HA_DarkElves": "Hero Academy Dark Elves Army",
"SteamPackage_HA_Dwarves": "Hero Academy Dwarves Army",
"SteamPackage_HA_Tribe": "Hero Academy Tribe Army",
"SteamPackage_HA_GoldPack": "Hero Academy Gold Pack (all DLC)",
"TF_Bundle_ArchimedesPromo": "Archimedes Promo",
"TF_Bundle_ArchimedesPromo_Desc": "",
"TF_Pet_Balloonicorn_Promo": "Pet Balloonicorn Promo",
"TF_Pet_Balloonicorn_Promo_Desc": "",
"TF_Pet_BalloonicornPlush_Promo": "Pet Balloonicorn Promo",
"TF_Pet_BalloonicornPlush_Promo_Desc": "",
"TF_Sandvich_Promo": "Sandvich Promo",
"TF_Sandvich_Promo_Desc": "",
"TF_SandvichV2_Promo": "Sandvich Promo",
"TF_SandvichV2_Promo_Desc": "",
"TF_Sandvich_Promo_Package": "What's in the Sandvich Box?",
"TF_Sandvich_Promo_Package_Desc": "Open the Sandvich Box to reveal its contents.",
"TF_Companion_Square_Promo": "Companion Square Promo",
"TF_Companion_Square_Promo_Desc": "",
"TF_Companion_Square_Promo_Package": "What's in the Companion Square Box?",
"TF_Companion_Square_Promo_Package_Desc": "Open the Companion Square Box to reveal its contents.",
"TF_RobotChickenHat_Promo": "Robot Chicken Hat Promo",
"TF_RobotChickenHat_Promo_Desc": "",
"TF_Portal2_Soundtrack_Promo": "Portal 2 Soundtrack Promo",
"TF_Portal2_Soundtrack_Promo_Desc": "",
"TF_Portal2_Soundtrack_Promo_Package": "What's in the Portal 2 Soundtrack Box?",
"TF_Portal2_Soundtrack_Promo_Package_Desc": "Open the Portal 2 Soundtrack Box to reveal its contents.",
"TF_TeamFortress2_Soundtrack_Promo": "Team Fortress 2 Soundtrack Promo",
"TF_TeamFortress2_Soundtrack_Promo_Desc": "",
"TF_TeamFortress2_Soundtrack_Promo_Package": "What's in the Team Fortress 2 Soundtrack Box?",
"TF_TeamFortress2_Soundtrack_Promo_Package_Desc": "Open the Team Fortress 2 Soundtrack Box to reveal its contents.",
"TF_TotalWarBundle": "Total War Bundle",
"TF_TotalWarBundle_Desc": "",
"TF_RedHeavy_ActionFigure_Promo": "Red Heavy Action Figure Promo",
"TF_RedHeavy_ActionFigure_Promo_Desc": "",
"TF_RedPyro_ActionFigure_Promo": "Red Pyro Action Figure Promo",
"TF_RedPyro_ActionFigure_Promo_Desc": "",
"TF_RedDemo_ActionFigure_Promo": "Red Demoman Action Figure Promo",
"TF_RedDemo_ActionFigure_Promo_Desc": "",
"TF_RedSoldier_ActionFigure_Promo": "Red Soldier Action Figure Promo",
"TF_RedSoldier_ActionFigure_Promo_Desc": "",
"TF_BlueHeavy_ActionFigure_Promo": "Blue Heavy Action Figure Promo",
"TF_BlueHeavy_ActionFigure_Promo_Desc": "",
"TF_BluePyro_ActionFigure_Promo": "Blue Pyro Action Figure Promo",
"TF_BluePyro_ActionFigure_Promo_Desc": "",
"TF_BlueDemo_ActionFigure_Promo": "Blue Demoman Action Figure Promo",
"TF_BlueDemo_ActionFigure_Promo_Desc": "",
"TF_BlueSoldier_ActionFigure_Promo": "Blue Soldier Action Figure Promo",
"TF_BlueSoldier_ActionFigure_Promo_Desc": "",
"TF_RedEngineer_ActionFigure_Promo": "Red Engineer Action Figure Promo",
"TF_RedEngineer_ActionFigure_Promo_Desc": "",
"TF_BlueEngineer_ActionFigure_Promo": "Blue Engineer Action Figure Promo",
"TF_BlueEngineer_ActionFigure_Promo_Desc": "",
"TF_RedSpy_ActionFigure_Promo": "Red Spy Action Figure Promo",
"TF_RedSpy_ActionFigure_Promo_Desc": "",
"TF_BlueSpy_ActionFigure_Promo": "Blue Spy Action Figure Promo",
"TF_BlueSpy_ActionFigure_Promo_Desc": "",
"TF_RedSniper_ActionFigure_Promo": "Red Sniper Action Figure Promo",
"TF_RedSniper_ActionFigure_Promo_Desc": "",
"TF_BlueSniper_ActionFigure_Promo": "Blue Sniper Action Figure Promo",
"TF_BlueSniper_ActionFigure_Promo_Desc": "",
"TF_RedScout_ActionFigure_Promo": "Red Scout Action Figure Promo",
"TF_RedScout_ActionFigure_Promo_Desc": "",
"TF_BlueScout_ActionFigure_Promo": "Blue Scout Action Figure Promo",
"TF_BlueScout_ActionFigure_Promo_Desc": "",
"TF_RedMedic_ActionFigure_Promo": "Red Medic Action Figure Promo",
"TF_RedMedic_ActionFigure_Promo_Desc": "",
"TF_BlueMedic_ActionFigure_Promo": "Blue Medic Action Figure Promo",
"TF_BlueMedic_ActionFigure_Promo_Desc": "",
"TF_OculusRift_Promo": "Oculus Rift Promo",
"TF_OculusRift_Promo_Desc": "",
"TF_Chess_Promo": "Team Fortress Chess Promo",
"TF_Chess_Promo_Desc": "",
"TF_RobotHeavy_Promo": "Robot Heavy Collectible Figure Promo",
"TF_RobotHeavy_Promo_Desc": "",
"TF_RobotPyro_Promo": "Robot Pyro Collectible Figure Promo",
"TF_RobotPyro_Promo_Desc": "",
"TF_TF2mixup_Community_Event_2013_Promo": "TF2mixup Community Event 2013 Promo",
"TF_TF2mixup_Community_Event_2013_Promo_Desc": "",
"TF_TF2mixup_Community_Event_2014_Promo": "TF2mixup Community Event 2014 Promo",
"TF_TF2mixup_Community_Event_2014_Promo_Desc": "",
"TF_JingleJam_Community_Event_2015_Promo": "Yogscast Jingle Jam 2015 Promo",
"TF_JingleJam_Community_Event_2015_Promo_Desc": "",
"TF_JingleJam_Community_Event_2016_Promo": "Yogscast Jingle Jam 2016 Promo",
"TF_JingleJam_Community_Event_2016_Promo_Desc": "",
"TF_JingleJam_Community_Event_2017_Promo": "Yogscast Jingle Jam 2017 Promo",
"TF_JingleJam_Community_Event_2017_Promo_Desc": "",
"TF_ChefStepsJoulePromo": "ChefSteps Joule Promo",
"TF_ChefStepsJoulePromo_Desc": "",
"TF_Bundle_STSBundle": "Steam Translation Bundle",
"TF_Bundle_STSBundle_Desc": "",
"TF_RandomDroppablePaintPackage": "Mann Co. Painting Set",
"TF_RandomDroppablePaintPackage_Desc": "This Do-It-Yourself Mann Co. painting set comes with samples of a few different colors that are, legally-speaking, absolutely, definitely not giving off toxic fumes.",
"TF_HA_Demo": "Grenadier Helm",
"TF_HA_Demo_Desc": "Argghhh! You're angry! And you're small! And you need to convey these facts through a single accessory! Strap on the Grenadier Helm and send your enemies to whatever level of Dwarfish hell you deem appropriate.",
"TF_HA_Pyro": "Tribal Bones",
"TF_HA_Pyro_Desc": "No ritual that results in the senseless destruction of human life at the behest of an angry god is complete without a Tribal Bones necklace. Like all of our mothers weirdly happened to say, if you're going to do some human sacrifices, you gotta look the part.",
"TF_HA_Scout": "Void Monk Hair",
"TF_HA_Scout_Desc": "Channel all the elegance and mystique of an elf with only half the pretention with the Void Monk Hair. Also included with purchase: effeminate good looks. But you already had those, didn't you, you handsome devil.",
"TF_HA_Spy": "Ninja Cowl",
"TF_HA_Spy_Desc": "If there's one thing that the ladies/men love, it's mystery. And what's more mysterious than covering your entire face with a Ninja Cowl? \"Oh my, I can't see any of that man's face!\" they'll exclaim. \"He must have a terrible secret I will uncover with my love.\"",
"TF_Awes_Medal": "Awesomenauts Badge",
"TF_Awes_Medal_Desc": "This badge is a sign of acknowledgment from another mercenary group. Just acknowledgment, all right? It's not like they like you or anything. It's not like they wish you'd maybe follow up on that Merc Party Invite they sent you a couple weeks ago. They're stone cold killers, you understand? Also there will be spinach dip at the party.",
"TF_Awes_Sniper": "Lone Star",
"TF_Awes_Sniper_Desc": "You're runnin' the show in these here parts; you deserve a big hat with a star. The size of the hat is indicative of how much of the show you're running – which is all of it, by the way. Honestly, we really don't know how people get respect without this hat.",
"TF_Awes_Pyro": "Russian Rocketeer",
"TF_Awes_Pyro_Desc": "The latest in space-primate propulsion, this jet pack has been tested exclusively by apes! We can't stress enough how few human flight tests we've conducted with this product!",
"TF_SD_Sapper": "Red-Tape Recorder",
"TF_SD_Minigun": "Huo-Long Heater",
"TF_SD_Cleaver": "Flying Guillotine",
"TF_SD_Cleaver_Style0": "Thirsty",
"TF_SD_Cleaver_Style1": "Thirstier",
"TF_SD_Sign": "Neon Annihilator",
"TF_SD_Chain": "Triad Trinket",
"TF_SD_Chain_Desc": "Clothes make the man, and jewelry makes the man look ridiculous if not worn correctly. This understated gold chain strikes a perfect balance that says, \"Yes, I'm wearing a necklace, but I left the tiara at home.\"",
"TF_SD_Chain_Style0": "Bare",
"TF_SD_Chain_Style1": "Bear",
"TF_SD_Tattoos": "Champ Stamp",
"TF_SD_Tattoos_Desc": "Show Chinese organized crime gangs who's boss by wearing their cool tattoos without actually participating in any of their totally illegal criminal conspiracies! Note: DO NOT actually show your new tattoo to ANYONE in a Chinese organized crime gang.",
"TF_SD_Glasses": "Marxman",
"TF_SD_Glasses_Desc": "Everyone knows laughter is the best medicine. But did you know that laughter is also the best disguise? No? Well, good thing you're not a cop infiltrating the Chinese mafia, then. Oh wait you are. AND NOW YOU'RE DEAD. Look, rookie, these glasses are hilarious.",
"TF_SD_Glasses_Style0": "No Cigar",
"TF_SD_Glasses_Style1": "Yes, Cigar",
"TF_SD_Helmet": "Human Cannonball",
"TF_SD_Helmet_Desc": "Ask any daredevil what they strap onto their heads before getting shot out of a cannon and the answer will be the same: a glassy, unfocused stare from years of head trauma. Head trauma that could have been prevented with this sharp-looking crash helmet.",
"TF_SD_Helmet_Style0": "Crash",
"TF_SD_Helmet_Style1": "Burn",
"TF_SD_Helmet_Style2": "Override",
"TF_XCOM_Hair": "Crafty Hair",
"TF_XCOM_Hair_Desc": "If you're ever planning on fighting aliens, this is the hair to have. Aliens are afraid of angular, painstakingly coiffed hair, so the mere sight of you will send them running back to Mars. Or, alternatively, we're completely wrong and you're going to die. Either way, though, you're going to look stylin'.",
"TF_XCOM_Hair_Style0": "Yellow",
"TF_XCOM_Hair_Style1": "Brown",
"TF_XCOM_Pyro": "Area 451",
"TF_XCOM_Pyro_Desc": "If aliens ever invaded Badlands and used their special alien powers to make all of our heads look like alien heads, this is a scientifically accurate representation of what Pyro would look like. We tried doing similar mock-ups with the rest of the TF team, but we finished one of Heavy and haven't stopped crying and vomiting long enough to do the other ones.",
"TF_XCOM_Pin": "Vigilant Pin",
"TF_XCOM_Pin_Desc": "This pin proudly states to all that you are at least vaguely aware of the possibility that maybe aliens exist. You've been to some of those conventions; you've looked pensively into the sky; you've watched Signs a couple of times. If extraterrestrials ever show up, you can proudly show others this badge and proclaim that you once entertained the possibility that this was maybe going to happen one day. ",
"TF_Robot_Sandvich": "Robo-Sandvich",
"TF_Robot_Sandvich_Desc": "Robots don't just run off oil. They also run off metal things constructed to resemble human food. Why? Why don't you tell me, if you're so smart? If anything, eating a metal sandwich makes MORE sense. Why don't you and oil have a baby that you have shared custody of after you and oil have a messy divorce if you love oil so much?",
"TF_CompanionSquare_Badge": "Friends Forever Companion Square Badge",
"TF_CompanionSquare_Badge_Desc": "You are a grizzled friendship veteran. Your blood and sweat has been poured into countless blanket fort constructions. You've fought in hundreds of harrowing pillow wars. Let this Friends Forever badge be a reminder to all that you know what it means to be a bro.",
"TF_ThreeA_Badge": "Triple A Badge",
"TF_ThreeA_Badge_Desc": "The letter \"a\" is a great letter. We like it so much, we stuck it on a badge. And we thought this gas mask guy looked neat, so we put him on there too. We're going with our guts; it's working out pretty well. Our guts feel like the next item we ship will be...a hat of some kind. Yeah. We're feeling really good about this.",
"TF_COH2_Heavy": "Heavy Artillery Officer's Cap",
"TF_COH2_Heavy_Desc": "You never fought in the Big One like your great grandfather. But there's one thing you've got that he'll never have: GUTS. No wait. That's what he had. You get this hat.",
"TF_COH2_Medic": "Combat Medic's Crusher Cap",
"TF_COH2_Medic_Desc": "You never fought in the Big One like your great grandfather. But there's one thing you've got that he'll never have: GUTS. No wait. That's what he had. You get this hat.",
"TF_COH2_Badge": "Heroic Companion Badge",
"TF_COH2_Badge_Desc": "This badge certifies that you are in the company of heroes. Not that you ARE a hero, of course. Just that you know some, and occasionally they let you hang out with them.",
"TF_COH2_Badge_Style1": "Russian",
"TF_COH2_Badge_Style2": "German",
"TF_Dishonored_Badge": "Whale Bone Charm",
"TF_Dishonored_Badge_Desc": "Made of Dunwall's finest whalebone, this charm is guaranteed to be ten times as lucky as your other jewelry made of skeleton parts. Say goodbye to that annoying necklace of rabbit feet, bat wings and shriveled hands you usually wear to buy lottery tickets.",
"TF_Dishonored_Mask": "Lacking Moral Fiber Mask",
"TF_Dishonored_Mask_Desc": "This grifter's mask is perfect for running the oldest scam in the book: tricking people into thinking you're a down-on-his-luck, dishonored robot who's just had dental surgery, then getting them to lend you money. Also comes with eye-gun, so if the scam doesn't work, you can rob them.",
"TF_TW_Cape": "King of Scotland Cape",
"TF_TW_Cape_Desc": "Capes are worn by only the most prestigious individuals. Kings. Dracula. Teenagers pretending they're wizards. Now you can join their illustrious ranks with this King of Scotland Cape. Wear it with pride, and make those prepubescents proud.",
"TF_TW_Mask": "Menpo",
"TF_TW_Mask_Desc": "Discover the exciting world of the samurai! Speak quickly and angrily! Grow facial hair! Maybe if you kill another samurai and apologize after, you'll get to date his wife! The possibilities are endless!",
"TF_TW_Mask_Style1": "Yuurei",
"TF_TW_Mask_Style2": "Obake",
"TF_TW_Mask_Style3": "Youkai",
"TF_TW_Mask_Style4": "Azukiarai",
"TF_TW_Mane": "K-9 Mane",
"TF_TW_Mane_Desc": "The K-9 mane is perfect for tricky social situations. People will either only want to talk about the hat, which means they'll be distracted from that rash making its way up your jugular, or they'll avoid you altogether. It's a win/win!",
"TF_TW_Sniper_Hat": "Stovepipe Sniper Shako",
"TF_TW_Sniper_Hat_Desc": "This hat is perfect for the sniper who likes to hide in the shadows, then run suddenly from those shadows to go lead a parade.",
"TF_TW_Medic_Coat": "Foppish Physician",
"TF_TW_Medic_Coat_Desc": "Whether you're trepanning a skull to let out the sickness ghosts or attaching enough leeches to a patient that they'll pass out from blood loss before you cut off any suspicious-looking limbs, this dapper ruffed shirt and coat will assure your patients that they came to the right place for their dangerously insane 18th century medicine.",
"TF_TW_Medic_Coat_Style1": "Tie",
"TF_TW_Medic_Coat_Style2": "Epaulettes",
"TF_TW_Spy_Coat": "Distinguished Rogue",
"TF_TW_Spy_Coat_Desc": "This coat does so much of the heavy lifting to make you look like a sophisticated man of espionage, you won't need to wear anything else at all. Watch those heads turn the next time you attend a fancy gala completely nude except for a coat. So jealous. How about that guy calling the police? Is HE jealous? Yeah he is.",
"TF_TW_Spy_Coat_Style1": "Tie",
"TF_TW_Spy_Coat_Style2": "Epaulettes",
"TF_TW_Staff": "Freedom Staff",
"TF_TW_Staff_Desc": "Since America was founded over ten thousand years ago, the noble eagle has been its symbol of freedom. Show people how much you like freedom by clubbing them senseless with a golden eagle on a stick, just like Kofi Annan.",
"TF_tw_demobot_armor": "Demobot Armor",
"TF_tw_demobot_armor_Desc": "",
"TF_tw_demobot_helmet": "Demobot Helmet",
"TF_tw_demobot_helmet_Desc": "",
"TF_tw_engineerbot_armor": "Engineerbot Armor",
"TF_tw_engineerbot_armor_Desc": "",
"TF_tw_engineerbot_helmet": "Engineerbot Helmet",
"TF_tw_engineerbot_helmet_Desc": "",
"TF_tw_heavybot_armor": "Heavybot Armor",
"TF_tw_heavybot_armor_Desc": "",
"TF_tw_heavybot_helmet": "Heavybot Helmet",
"TF_tw_heavybot_helmet_Desc": "",
"TF_tw_medibot_chariot": "Medicbot Chariot",
"TF_tw_medibot_chariot_Desc": "",
"TF_tw_medibot_hat": "Medicbot Hat",
"TF_tw_medibot_hat_Desc": "",
"TF_tw_pyrobot_armor": "Pyrobot Armor",
"TF_tw_pyrobot_armor_Desc": "",
"TF_tw_pyrobot_helmet": "Pyrobot Helmet",
"TF_tw_pyrobot_helmet_Desc": "",
"TF_tw_scoutbot_armor": "Scoutbot Armor",
"TF_tw_scoutbot_armor_Desc": "",
"TF_tw_scoutbot_hat": "Scoutbot Hat",
"TF_tw_scoutbot_hat_Desc": "",
"TF_tw_sniperbot_armor": "Sniperbot Armor",
"TF_tw_sniperbot_armor_Desc": "",
"TF_tw_sniperbot_helmet": "Sniperbot Helmet",
"TF_tw_sniperbot_helmet_Desc": "",
"TF_tw_soldierbot_armor": "Soldierbot Armor",
"TF_tw_soldierbot_armor_Desc": "",
"TF_tw_soldierbot_helmet": "Soldierbot Helmet",
"TF_tw_soldierbot_helmet_Desc": "",
"TF_tw_spybot_armor": "Spybot Armor",
"TF_tw_spybot_armor_Desc": "",
"TF_tw_spybot_hood": "Spybot Hood",
"TF_tw_spybot_hood_Desc": "",
"TF_tw_sentrybuster": "Sentrybuster",
"TF_tw_sentrybuster_Desc": "",
"TF_HatAndHeadphones_Style": "Hat and Headphones",
"TF_NoHat_NoHeadphones_Style": "No Hat and No Headphones",
"TF_NoHat_Style": "No Hat",
"TF_Scout_Hat_1": "Batter's Helmet",
"TF_Scout_Hat_1_Desc": "You'll be batting a thousand (skulls in) when you don this red piece of plastic!",
"TF_Sniper_Hat_1": "Trophy Belt",
"TF_Sniper_Hat_1_Desc": "Any old sap can pull teeth from a dead crocodile.\nIt takes a man to pull teeth from a live one.",
"TF_Soldier_Hat_1": "Soldier's Stash",
"TF_Soldier_Hat_1_Desc": "This hat does not in any way, shape, or form, promote smoking or gambling.",
"TF_Demo_Hat_1": "Demoman's Fro",
"TF_Medic_Hat_1": "Prussian Pickelhaube",
"TF_Medic_Hat_1_Desc": "A relic from one war brought into another.\nYour enemy will get the point.",
"TF_Pyro_Hat_1": "Pyro's Beanie",
"TF_Heavy_Hat_1": "Football Helmet",
"TF_Engineer_Hat_1": "Mining Light",
"TF_Engineer_Hat_1_Desc": "For Engineers with bright ideas.",
"TF_Spy_Hat_1": "Fancy Fedora",
"TF_Spy_Hat_1_Desc": "This smooth, suave, silk-lined beauty can turn any amateur backstabber into a handsome rogue.",
"TF_Engineer_Cowboy_Hat": "Texas Ten Gallon",
"TF_Engineer_Cowboy_Hat_Desc": "Though it looks like a simple ten-gallon hat, this modern feat of engineering actually contains more moving parts than a level 2 Sentry Gun.",
"TF_Engineer_Train_Hat": "Engineer's Cap",
"TF_Heavy_Ushanka_Hat": "Officer's Ushanka",
"TF_Heavy_Ushanka_Hat_Desc": "This hat was made of bear hands.\nThat bear was killed with bare hands.",
"TF_Heavy_Stocking_cap": "Tough Guy's Toque",
"TF_Heavy_Stocking_cap_Desc": "Because when you're the toughest Mother Hubbard in the fort, nobody's criticizing your fashion sense.",
"TF_Soldier_Pot_Hat": "Stainless Pot",
"TF_Soldier_Pot_Hat_Desc": "Protects cranium from bullets and shrapnel.\nAlso heats soup.",
"TF_Soldier_Viking_Hat": "Tyrant's Helm",
"TF_Soldier_Viking_Hat_Desc": "I kicked your ass so hard it went back in time and got me this VIKING HAT.",
"TF_Demo_Scott_Hat": "Glengarry Bonnet",
"TF_Medic_Tyrolean_Hat": "Vintage Tyrolean",
"TF_Pyro_Chicken_Hat": "Respectless Rubber Glove",
"TF_Pyro_Chicken_Hat_Desc": "It doesn't matter how much people respect you when they're on fire.",
"TF_Spy_Camera_Beard": "Camera Beard",
"TF_Spy_Camera_Beard_Desc": "You wouldn't mind if I read this top secret document with my beard, would you?",
"TF_Medic_Mirror_Hat": "Otolaryngologist's Mirror",
"TF_Medic_Mirror_Hat_Desc": "We can't pronounce it either.",
"TF_Pyro_Fireman_Helmet": "Brigade Helm",
"TF_Scout_Bonk_Helmet": "Bonk Helm",
"TF_Scout_Bonk_Helmet_Desc": "When drinking one radioactive beverage at a time is not enough.",
"TF_Scout_Newsboy_Cap": "Ye Olde Baker Boy",
"TF_Scout_Newsboy_Cap_Desc": "Extra! Extra! You're frickin' dead!",
"TF_Spy_Derby_Hat": "Backbiter's Billycock",
"TF_Spy_Derby_Hat_Desc": "For when you wish your head was a little taller,\nbut just as round on top.",
"TF_Sniper_Straw_Hat": "Professional's Panama",
"TF_Sniper_Straw_Hat_Desc": "A polite, efficient hat to wear when killing everyone you meet.",
"TF_Sniper_Jarate_Headband": "Master's Yellow Belt",
"TF_Sniper_Jarate_Headband_Desc": "Only a master of Jarate earns the right to wear this once-white bandanna, stained yellow from the rigors of a harsh training regimen.",
"TF_Hatless_Scout": "Baseball Bill's Sports Shine",
"TF_Hatless_Scout_Desc": "Everyone knows that speed is a Scout's best friend. Why weigh yourself down with bulky hats when you can break the sound barrier without them?",
"TF_Hatless_Sniper": "Ritzy Rick's Hair Fixative",
"TF_Hatless_Sniper_Desc": "His bullet was close.\nI lost my hat.\nMy bullet was closer.\nHe lost his head.",
"TF_Hatless_Engineer": "Texas Slim's Dome Shine",
"TF_Hatless_Engineer_Desc": "Sometimes you just need a little less hat.",
"TF_Demo_Top_Hat": "Scotsman's Stove Pipe",
"TF_HonestyHalo": "Cheater's Lament",
"TF_HonestyHalo_Desc": "Though some would stop at nothing to achieve hats, you remained resolute and incorruptible in your quest for head decorations. For that, you have been rewarded.",
"TF_HonestyHalo_Style0": "No Hat",
"TF_HonestyHalo_Style1": "Hat",
"TF_Halloween_Hat": "Mildly Disturbing Halloween Mask",
"TF_Halloween_Hat_Desc": "Brown paper never looked so mildly disturbing.",
"TF_Halloween_Head": "Horseless Headless Horsemann's Head",
"TF_Halloween_Head_Desc": "He had one all along...",
"TF_Domination_Hat_Ghastlier": "Ghastlier Gibus",
"TF_Domination_Hat_Ghastlier_Desc": "Even more ghastly.",
"TF_Domination_Hat_Ghastly": "Ghastly Gibus",
"TF_Domination_Hat_Ghastly_Desc": "Elegant simplicity and old-world charm combined with the heady aromas of mould and grave dust.",
"TF_Domination_Hat_Ghastlierest": "Ghastlierest Gibus",
"TF_Domination_Hat_Ghastlierest_Desc": "Way way more ghastly.",
"TF_L4DHat": "Bill's Hat",
"TF_L4DHat_Desc": "Left 4 You.",
"TF_Domination_Hat_Ghostly": "Ghostly Gibus",
"TF_Domination_Hat_Ghostly_Desc": "Dominate a player wearing any achievement Gibus hat, collect the Ghostly Gibus, and take your rightful place on the Halloween-update-related-hat-throne.",
"TF_PropagandaContest_FirstPlace": "J.Axer's Dapper Topper",
"TF_PropagandaContest_FirstPlace_Desc": "First Place Winner, Propaganda Contest",
"TF_PropagandaContest_SecondPlace": "Amber's Rad As All Hell Hat",
"TF_PropagandaContest_SecondPlace_Desc": "First Runner-Up, Propaganda Contest",
"TF_PropagandaContest_ThirdPlace": "Uncle Sam",
"TF_PropagandaContest_ThirdPlace_Desc": "Second Runner-Up, Propaganda Contest",
"TF_ToweringPillar_Hat": "Towering Pillar of Hats",
"TF_ToweringPillar_Hat_Desc": "A-ha-ha! You are as PRESUMPTUOUS as you are POOR and IRISH. Tarnish notte the majesty of my TOWER of HATS.",
"TF_NobleAmassment_Hat": "Noble Amassment of Hats",
"TF_NobleAmassment_Hat_Desc": "For the Gentleman who believes even his hat deserves a hat.",
"TF_ModestPile_Hat": "Modest Pile of Hat",
"TF_ModestPile_Hat_Desc": "Because a Gentleman is not one without one.",
"TF_OSXItem": "Earbuds",
"TF_OSXItem_Desc": "OSX represent!",
"TF_LinuxItem": "Tux",
"TF_LinuxItem_Desc": "Linux represent!",
"TF_LinuxItem_Style0": "Normal",
"TF_LinuxItem_Style1": "Demoman",
"TF_LinuxItem_Style2": "Pyro",
"TF_MedicMask": "Physician's Procedure Mask",
"TF_MedicMask_Desc": "Scrub in... things are about to get messy.",
"TF_HeavyHair": "Hound Dog",
"TF_HeavyHair_Desc": "Your opponents will be all shook up when they see these sweet shades and coif.",
"TF_SoldierSashimono": "Concheror",
"TF_SoldierSashimono_Desc": "Provides group speed buff\nwith damage done giving health.\nGain rage with damage.",
"TF_Gunbai": "Fan O'War",
"TF_Gunbai_Desc": "Winds of Gravel Pit\nScout brings on his deadly fan!\nYou are Marked-For-Death",
"TF_Kunai": "Conniver's Kunai",
"TF_Kunai_Desc": "Start off with low health\nKill somebody with this knife\nSteal all of their health",
"TF_SpyOniMask": "Noh Mercy",
"TF_SpyOniMask_Desc": "Chain-smoking Frenchman\nSkulks in shadows, then attacks\nTerrifying mask",
"TF_MedicGeishaHair": "Geisha Boy",
"TF_MedicGeishaHair_Desc": "Frog leaps into pond\nLotus blossoms fall to earth\nMedic has girl's hair",
"TF_HeavyTopknot": "Dread Knot",
"TF_HeavyTopknot_Desc": "Crybabies cower\nAt the approach of fat man\nWith terrible hair",
"TF_SoldierKatana": "Half-Zatoichi",
"TF_SoldierKatana_Desc": "Soldiers and Demos\nCan duel with katanas\nFor a one-hit kill",
"TF_DemoKabuto": "Samur-Eye",
"TF_DemoKabuto_Desc": "One-eyed Scottish drunk\nDons his helmet for battle\nBlacks out, misses war",
"TF_DemomanHallmark": "Hustler's Hallmark",
"TF_SpyNobleHair": "Magistrate's Mullet",
"TF_SpyNobleHair_Desc": "They say justice is blind. What they don't tell you is that justice is also invisible, and also less interested in justice than murder.",
"TF_EngineerWeldingMask": "Hotrod",
"TF_EngineerWeldingMask_Desc": "Mock the sun with streaks of flame as the UV rays bounce harmlessly away from your eyeballs.",
"TF_ScoutBeanie": "Troublemaker's Tossle Cap",
"TF_ScoutBeanie_Desc": "Straight outta control point.",
"TF_PyroBrainSucker": "Triboniophorus Tyrannus",
"TF_PyroBrainSucker_Desc": "At least he's still telling you to burn things.",
"TF_SoldierSamurai": "Killer's Kabuto",
"TF_SoldierSamurai_Desc": "A Haiku for war.\nTo defeat one's enemies.\nHonor the crocket.",
"TF_SniperPithHelmet": "Shooter's Sola Topi",
"TF_SniperPithHelmet_Desc": "Perfect for exploring the outback and the inside of people's heads.",
"TF_TTG_MaxsHat": "Max's Severed Head",
"TF_ScoutWhoopee": "Whoopee Cap",
"TF_ScoutWhoopee_Desc": "You'd have to be a jughead not to realize this cap is the pinnacle of fashion for the discerning youth.",
"TF_Worms_Gear": "Lumbricus Lid",
"TF_Worms_Gear_Desc": "",
"TF_PyroMonocle": "Whiskered Gentleman",
"TF_PyroMonocle_Desc": "The most distinguished tape-on fire-retardant facial hair available, for the discerning gentleman of conflagration.",
"TF_MedicGoggles": "Ze Goggles",
"TF_MedicGoggles_Desc": "Nothing",
"TF_EngineerEarmuffs": "Safe'n'Sound",
"TF_EngineerEarmuffs_Desc": "It gets difficult trying to calculate the total external applied torque to a body's rotational motion through its moment of momentum vector while the distracting sounds of gunfire and death are all around you. Build a better, safer machine with the silence of the Safe'n'sound!",
"TF_DemomanTricorne": "Tippler's Tricorne",
"TF_DemomanTricorne_Desc": "Three sharp corners mean one sharp hat.\nDon't poke your eye out.",
"TF_DemomanPirate": "Rimmed Raincatcher",
"TF_DemomanPirate_Desc": "Because there's no alliteration\nlike alliteration with an 'ARR!'",
"TF_SpyBeret": "Frenchman's Beret",
"TF_SpyBeret_Desc": "Because real espionage is an artform.",
"TF_SniperFishingHat": "Bloke's Bucket Hat",
"TF_SniperFishingHat_Desc": "Gone Snipin'.",
"TF_PyroHelm": "Vintage Merryweather",
"TF_PyroHelm_Desc": "Pyro wears this in tribute to the many firefighters who have perished trying to quell his flames.",
"TF_SoldierDrillHat": "Sergeant's Drill Hat",
"TF_SoldierDrillHat_Desc": "This hat is a handy replacement for profanity-filled ranting when you don't feel like shouting yourself hoarse.",
"TF_MedicGatsby": "Gentleman's Gatsby",
"TF_MedicGatsby_Desc": "While lacking the cachet of other hats, the Gatsby nonetheless possesses its own sartorial elegance. Its understated and affable charm appeals to everyone, whether playing a round of golf with friends or performing non-elective surgery with a well-polished bonesaw.",
"TF_HeavyDorag": "Heavy Duty Rag",
"TF_HeavyDorag_Desc": "It costs $400,000 to wear this bandanna for 12 seconds.",
"TF_Parasite_Hat": "Alien Swarm Parasite",
"TF_Parasite_Hat_Desc": "This cute little guy was once the scourge of humanity in another time and place. Now he's content to ride on your head and keep the sun off.",
"TF_TheAttendant": "Attendant",
"TF_TheAttendant_Desc": "",
"TF_TheMilkman": "Milkman",
"TF_TheMilkman_Desc": "",
"TF_TheFamiliarFez": "Familiar Fez",
"TF_TheFamiliarFez_Desc": "",
"TF_TheGrenadiersSoftcap": "Grenadier's Softcap",
"TF_TheGrenadiersSoftcap_Desc": "",
"TF_Unique_Achievement_SoldierBuff_Desc": "Provides an offensive buff that causes\nnearby team members to do mini-crits.\nRage increases through damage done.",
"TF_TheBattalionsBackup_Desc": "Provides a defensive buff that protects\nnearby team members from crits,\nincoming sentry damage by 50%\nand 35% from all other sources.\nRage increases through damage done.",
"TF_OlSnaggletooth": "Ol' Snaggletooth",
"TF_OlSnaggletooth_Desc": "",
"TF_TheShortstop_Desc": "Holds a 4-shot clip and reloads its entire clip at once.\nAlt-Fire to reach and shove someone!\n\nMann Co.'s latest in high attitude\nbreak-action personal defense.",
"TF_TheHolyMackerel_Desc": "Getting hit by a fish has got to be humiliating.",
"TF_MadMilk_Desc": "Players heal 60% of the damage done\nto an enemy covered with milk.\nCan be used to extinguish fires.",
"TF_Weapon_RocketLauncher_Jump_Desc": "A special rocket launcher for learning\nrocket jump tricks and patterns.\nThis weapon deals ZERO damage.",
"TF_Weapon_StickyBomb_Jump_Desc": "A special no-damage stickybomb launcher for learning stickybomb jump tricks and patterns.",
"TF_Wrangler_Desc": "Take manual control of your Sentry Gun.\nWrangled sentries gain a shield that reduces\ndamage and repairs by 66%.\nSentries are disabled for 3 seconds after becoming unwrangled.",
"TF_ScoutBombingRun": "Bombing Run",
"TF_ScoutBombingRun_Desc": "Death from above!",
"TF_SoldierShako": "Stout Shako",
"TF_SoldierShako_Desc": "The grand achievement of\nVictorian military fashion.",
"TF_SoldierRomanHelmet": "Legionaire's Lid",
"TF_SoldierRomanHelmet_Desc": "An antique from the late\nImperial Gallic period.",
"TF_PyroFiestaSombrero": "Old Guadalajara",
"TF_PyroFiestaSombrero_Desc": "This hat adds spice to any occasion.",
"TF_PyroPlunger": "Handyman's Handle",
"TF_PyroPlunger_Desc": "Clears all sorts of blockage.",
"TF_DemoInquisitor": "Carouser's Capotain",
"TF_DemoInquisitor_Desc": "Suffer not a sentry to live.",
"TF_HeavyUmbrella": "Hard Counter",
"TF_HeavyUmbrella_Desc": "You can never be too careful\nwith Jarate around.",
"TF_DemoStuntHelmet": "Sober Stuntman",
"TF_DemoStuntHelmet_Desc": "A sticky-jumper's best friend.",
"TF_Seuss": "Dr's Dapper Topper",
"TF_Seuss_Desc": "",
"TF_PyroBeanie": "Napper's Respite",
"TF_PyroBeanie_Desc": "After a long day of burning scouts.",
"TF_HeavyPugilistProtector": "Pugilist's Protector",
"TF_HeavyPugilistProtector_Desc": "",
"TF_SoldierChiefRocketeer": "Chieftain's Challenge",
"TF_SoldierChiefRocketeer_Desc": "",
"TF_WikiCap": "Wiki Cap",
"TF_WikiCap_Desc": "Given to valuable contributors to the official TF2 wiki\nhttps:",
"TF_MannCoCap": "Mann Co. Cap",
"TF_MannCoCap_Desc": "",
"TF_MannCoOnlineCap": "Mann Co. Online Cap",
"TF_MannCoOnlineCap_Desc": "",
"TF_UnusualCap": "Unusual Cap",
"TF_UnusualCap_Desc": "",
"TF_Polycount_Pin": "Polycount Pin",
"TF_Polycount_Pin_Desc": "Awarded to participants of the Polycount contest.",
"TF_EllisHat": "Ellis' Cap",
"TF_FlippedTrilby": "Flipped Trilby",
"TF_GermanGonzila": "German Gonzila",
"TF_BuckaroosHat": "Buckaroo's Hat",
"TF_MadameDixie": "Madame Dixie",
"TF_DetectiveNoir": "Détective Noir",
"TF_CoupeDisaster": "Coupe D'isaster",
"TF_PartyPhantom": "Le Party Phantom",
"TF_ColoredLights": "Industrial Festivizer",
"TF_ExquisiteRack": "Exquisite Rack",
"TF_DefiantSpartan": "Defiant Spartan",
"TF_FestiveTree": "A Rather Festive Tree",
"TF_TavishCrown": "Prince Tavish's Crown",
"TF_HelpedNewUserHat": "Professor Speks",
"TF_HelpedNewUserHat_Desc": "Give your teacher the gift of insight, paper clip and rubber band included.",
"TF_Crocleather_Slouch": "Crocleather Slouch",
"TF_Crocleather_Slouch_Desc": "Made from Australia's only natural resource.",
"TF_Homefront_Blindfold": "Hero's Hachimaki",
"TF_Homefront_Blindfold_Desc": "",
"TF_CharityHat_A": "Humanitarian's Hachimaki",
"TF_CharityHat_B": "Benefactor's Kanmuri",
"TF_CharityHat_C": "Magnanimous Monarch",
"TF_CharityHat_Desc": "Supporting Japanese disaster relief",
"TF_MagnificentMongolian": "Magnificent Mongolian",
"TF_LarrikinRobin": "Larrikin Robin",
"TF_BlightedBeak": "Blighted Beak",
"TF_KF_Pyro_Mask": "Foster's Facade",
"TF_KF_Pyro_Tie": "Stockbroker's Scarf",
"TF_PyromancersMask": "Pyromancer's Mask",
"TF_PrancersPride": "Prancer's Pride",
"TF_Hwn_DemoHat": "Hair of the Dog",
"TF_Hwn_DemoHat_Desc": "",
"TF_Hwn_DemoMisc1": "Scottish Snarl",
"TF_Hwn_DemoMisc1_Desc": "",
"TF_Hwn_DemoMisc2": "Pickled Paws",
"TF_Hwn_DemoMisc2_Desc": "",
"TF_Hwn_ScoutHat": "Wrap Battler",
"TF_Hwn_ScoutHat_Desc": "",
"TF_Hwn_ScoutMisc1": "B-Ankh!",
"TF_Hwn_ScoutMisc1_Desc": "",
"TF_Hwn_ScoutMisc2": "Futankhamun",
"TF_Hwn_ScoutMisc2_Desc": "",
"TF_Hwn_PyroHat": "Blazing Bull",
"TF_Hwn_PyroHat_Desc": "",
"TF_Hwn_PyroMisc1": "Fallen Angel",
"TF_Hwn_PyroMisc1_Desc": "",
"TF_Hwn_PyroMisc2": "Tail from the Crypt",
"TF_Hwn_PyroMisc2_Desc": "",
"TF_Hwn_MedicHat": "Einstein",
"TF_Hwn_MedicHat_Desc": "",
"TF_Hwn_MedicMisc1": "Dr. Gogglestache",
"TF_Hwn_MedicMisc1_Desc": "",
"TF_Hwn_MedicMisc2": "Emerald Jarate",
"TF_Hwn_MedicMisc2_Desc": "",
"TF_Hwn_SoldierHat": "Idiot Box",
"TF_Hwn_SoldierHat_Desc": "",
"TF_Hwn_SoldierMisc1": "Steel Pipes",
"TF_Hwn_SoldierMisc1_Desc": "",
"TF_Hwn_SoldierMisc2": "Shoestring Budget",
"TF_Hwn_SoldierMisc2_Desc": "",
"TF_Hwn_SpyHat": "Under Cover",
"TF_Hwn_SpyHat_Desc": "",
"TF_Hwn_SpyMisc1": "Griffin's Gog",
"TF_Hwn_SpyMisc1_Desc": "",
"TF_Hwn_SpyMisc2": "Intangible Ascot",
"TF_Hwn_SpyMisc2_Desc": "",
"TF_Hwn_HeavyHat": "Can Opener",
"TF_Hwn_HeavyHat_Desc": "",
"TF_Hwn_HeavyMisc1": "Soviet Stitch-Up",
"TF_Hwn_HeavyMisc1_Desc": "",
"TF_Hwn_HeavyMisc2": "Steel-Toed Stompers",
"TF_Hwn_HeavyMisc2_Desc": "",
"TF_Hwn_SniperHat": "Holy Hunter",
"TF_Hwn_SniperHat_Desc": "",
"TF_Hwn_SniperMisc1": "Silver Bullets",
"TF_Hwn_SniperMisc1_Desc": "",
"TF_Hwn_SniperMisc2": "Garlic Flank Stake",
"TF_Hwn_SniperMisc2_Desc": "",

"TF_Hwn_EngineerHat": "Buzz Killer",
"TF_Hwn_EngineerHat_Desc": "",
"TF_Hwn_EngineerMisc1": "Frontier Flyboy",
"TF_Hwn_EngineerMisc1_Desc": "",
"TF_Hwn_EngineerMisc2": "Legend of Bugfoot",
"TF_Hwn_EngineerMisc2_Desc": "",
"TF_Hwn_PyroGasmask": "Last Breath",
"TF_Hwn_PyroGasmask_DESC": "",
"TF_UnarmedCombat": "Unarmed Combat",
"TF_UnarmedCombat_Desc": "So nice of the Spy to lend an arm...",
"TF_Ghost_Aspect": "Apparition's Aspect",
"TF_Ghost_Aspect_Desc": "",
"TF_VoodooPin": "Wanga Prick",
"TF_InfernalImpaler": "Infernal Impaler",
"TF_Nabler": "Nabler",
"TF_Nabler_Desc": "",
"TF_BigChief": "Big Chief",
"TF_BigChief_Desc": "",
"TF_CaponesCapper": "Capo's Capper",
"TF_CaponesCapper_Desc": "This dashing number will help you commit crimes of all kinds—except against fashion.",
"TF_BerlinersBucketHelm": "Berliner's Bucket Helm",
"TF_BerlinersBucketHelm_Desc": "",
"TF_ScotchBonnet": "Scotch Bonnet",
"TF_ScotchBonnet_Desc": "Don't let those ninnies take yer good eye!",
"TF_CameraHelm": "Frontline Field Recorder",
"TF_CameraHelm_Desc": "I'm the writer, the director, and the star.",
"TF_LargeLuchadore": "Large Luchador",
"TF_LargeLuchadore_Desc": "Wrestling's real, and now you can prove it.",
"TF_EngineerTopHat": "Western Wear",
"TF_EngineerTopHat_Desc": "The old West never saw this kind of class.",
"TF_Cadavers_Cranium": "Cadaver's Cranium",
"TF_Horrific_Headsplitter": "Horrific Headsplitter",
"TF_Horrific_Headsplitter_Desc": "When wearing such a piece of headgear it is best to keep an open mind.",
"TF_Halloween_Skullcap": "Spine-Chilling Skull",
"TF_Halloween_Skullcap_Desc": "Express your undying hatred for the living.",
"TF_Halloween_Voodoo": "Voodoo Juju",
"TF_Halloween_Voodoo_Desc": "Only the finest leather hats come with tattoos and piercings.",
"TF_TTG_PokerVisor": "Dealer's Visor",
"TF_TTG_PokerVisor_Desc": "Do not try to bluff Sasha.",
"TF_TTG_Glasses": "Dangeresque, Too?",
"TF_TTG_Glasses_Desc": "Splash the pot with all you got.",
"TF_TTG_Badge": "License to Maim",
"TF_TTG_Badge_Desc": "And kill, and break, and smash, and bite. Mainly maim, though.",
"TF_Halloween_Skullcap2011": "Spine-Chilling Skull 2011",
"TF_Halloween_Skullcap2011_Desc": "Re-express your undying hatred for the living annually with this skull-themed hate hat.",
"TF_Halloween_Skullcap2011_Style1": "Spine-Tingling Skull",
"TF_Halloween_Skullcap2011_Style1_Desc": "Express your dislike for the living.",
"TF_Halloween_Skullcap2011_Style2": "Spine-Cooling Skull",
"TF_Halloween_Skullcap2011_Style2_Desc": "Express your disdain for the living.",
"TF_Halloween_Skullcap2011_Style3": "Spine-Twisting Skull",
"TF_Halloween_Skullcap2011_Style3_Desc": "Express your discontent with the living.",
"TF_Halloween_Eyeball_Boss_Hat": "MONOCULUS!",
"TF_Halloween_Eyeball_Boss_Hat_Desc": "Celebrate the Demo's most serious childhood injury with this gruesome mask based on his missing, haunted eye.",
"TF_Halloween_Seal_Mask": "Seal Mask",
"TF_Halloween_Seal_Mask_Desc": "Turn routine melee attacks into environmental hate crimes with this adorable mask.",
"TF_Bombinomicon_Badge": "Bombinomicon",
"TF_Bombinomicon_Badge_Desc": "'If ye gaze upon one tome-themed badge this year, MAKE IT NOT THIS ONE!' - Merasmus the Magician'",
"TF_Halloween_MerasmusLoot_Hat": "Skull Island Topper",
"TF_Halloween_MerasmusLoot_Hat_Desc": "This terrifying (innocuous) witching cap was found by the all-powerful (mediocre) wizard Merasmus in the depths of the Hades Spiral (right near the entrance of the Hades Spiral).",
"TF_Doctors_Sack": "Doctor's Sack",
"TF_Doctors_Sack_Desc": "For when you've got that healin' fever.",
"TF_Ol_Geezer": "Ol' Geezer",
"TF_Ol_Geezer_Desc": "Get off mah land!",
"TF_DesertMarauder": "Desert Marauder",
"TF_Charmers_Chapeau": "Charmer's Chapeau",
"TF_Charmers_Chapeau_Desc": "It really is a chapeau. It's just in disguise.",
"TF_FuriousFukaamigasa": "Furious Fukaamigasa",
"TF_FuriousFukaamigasa_Desc": "You can't tell, but he's furious.",
"TF_Connoisseurs_Cap": "Connoisseur's Cap",
"TF_Connoisseurs_Cap_Desc": "You're today's theme ingredient...",
"TF_VillainsVeil": "Villain's Veil",
"TF_VillainsVeil_Desc": "The good, the bad, and the dead.",
"TF_PocketMedic": "Pocket Medic",
"TF_PocketMedic_Desc": "Keep little healing man close.",
"TF_HonchosHeadgear": "Honcho's Headgear",
"TF_HonchosHeadgear_Desc": "This hat has mean written all over it.\n(Note from Legal: This hat has nothing written on it.)",
"TF_Reggaelator": "Reggaelator",
"TF_Reggaelator_Desc": "Every little thing is gonna be alright.",
"TF_GooglyGazer": "Googly Gazer",
"TF_GooglyGazer_Desc": "Keep one eye on your enemy and\nthe other one on everything else.",
"TF_Private_Eye": "Private Eye",
"TF_Private_Eye_Desc": "A select style for the scrutinizing sleuth.",
"TF_SoreEyes": "Sight for Sore Eyes",
"TF_SoreEyes_Desc": "Humorously vellicating vitreous.",
"TF_TeddyRoosebelt": "Teddy Roosebelt",
"TF_TeddyRoosebelt_Desc": "A cute, plushy pocket buddy.\nAw, he even has his own hat!",
"TF_ProfessorHair": "Professor's Peculiarity",
"TF_ProfessorHair_Desc": "I think I can safely say that nobody understands quantum mechanics. Bullet mechanics? Well now that's a different thing entirely.",
"TF_ProfessorHair_Style0": "Manic",
"TF_ProfessorHair_Style1": "Tamed",
"TF_MountainCap": "Medic's Mountain Cap",
"TF_MountainCap_Desc": "The men in his unit called him 'The Bavarian Butcher'",
"TF_BigCountry": "Big Country",
"TF_BigCountry_Desc": "It'd be a damn shame to hide hair this handsome.",
"TF_BigCountry_Style0": "Nelson",
"TF_BigCountry_Style1": "Brooks",
"TF_GrimmHatte": "Grimm Hatte",
"TF_GrimmHatte_Desc": "Ye hae ne'er glympsed a hatte whych be\nas grimm as yonder hatte ye glympse upon.",
"TF_Resurrection_Associate_Pin": "Resurrection Associate Pin",
"TF_JumpersJeepcap": "Jumper's Jeepcap",
"TF_PotatoHat": "Aperture Labs Hard Hat",
"TF_PotatoHat_Desc": "Produce-powered personal illumination and cranial safety apparatus.\n\nNOT FOR USE OUTSIDE OFFICIAL APERTURE FACILITIES.",
"TF_PotatoHatStyle_Classified": "[classified]",
"TF_PotatoHatStyle_Logo": "Aperture Logo",
"TF_TeamCaptain": "Team Captain",
"TF_TeamCaptain_Desc": "Our lawyers say 'YES! YES!'",
"TF_HottiesHoodie": "Hottie's Hoodie",
"TF_HottiesHoodie_Desc": "If you've got it, flaunt it.\nIf you don't, hide it under this discreet hoodie.",
"TF_TowerHardhat": "Lo-Fi Longwave",
"TF_TowerHardhat_Desc": "Can't stop the signal.",
"TF_LoyaltyReward": "Proof of Purchase",
"TF_LoyaltyReward_Desc": "From another era.",
"TF_SpiralSallet": "Spiral Sallet",
"TF_SpiralSallet_Desc": "Little known fact: knights in chess travel over other pieces by rocket jumping.",
"TF_ScoutPrepShirt": "Fast Learner",
"TF_ScoutPrepShirt_Desc": "Read a book – or at least look like you can – with this vintage educational ensemble. Be the B.M.O.C. (Big Mouth on Campus) of your own make-believe Ivy League!",
"TF_CowboyBoots": "Teufort Tooth Kicker",
"TF_CowboyBoots_Desc": "These steel-toed dogs were scientifically engineered (in a wind tunnel) by America's foremost authorities on mouth-kicking to perfectly fit the inside of an idiot's mouth.",
"TF_MedicSmokingPipe": "Nine-Pipe Problem",
"TF_MedicSmokingPipe_Desc": "In the time it takes you to read this description, I've already übered a heavy, captured your base, solved a crime, and smoked three pipes.",
"TF_PyroCandle": "Waxy Wayfinder",
"TF_PyroCandle_Desc": "Finally live your life like a candle in the wind. (Wind not included.)",
"TF_ShootManyRobotsPack": "Scrap Pack",
"TF_ShootManyRobotsPack_Desc": "Why let your front have all the fun? Add more junk to the upper part of your trunk with this selection from the finest junkyards in Paris.",
"TF_CrimeCraftHelmet": "Bolt Action Blitzer",
"TF_CrimeCraftHelmet_Desc": "Take a knee, boys. Now, any helmet will protect your head when you're wearing it – but what about when you're NOT? The Bolt Action Blitzer solves that problem by securing it to your skull with three one-and-a-quarter-inch coarse-thread galvanized crown bolts. Make sure it's in your favorite color, 'cause you WILL be buried in it.",
"TF_EngineerChaps": "Texas Half-Pants",
"TF_EngineerChaps_Desc": "It's pants... Texas Style! These crotchless leather leggings are perfect if you already own pants. Note: To be used as auxiliary pants only. Please do not employ as primary source of pants.",
"TF_EngineerChaps_Style0": "Tan",
"TF_EngineerChaps_Style1": "Midnight",
"TF_HeavyBoxingTowel": "Toss-Proof Towel",
"TF_HeavyBoxingTowel_Desc": "Make sure you never throw in the towel, even accidentally, by keeping it nice and close, where it can't run off and surrender like a coward when you're not looking.",
"TF_SniperAppleArrow": "Fruit Shoot",
"TF_SniperAppleArrow_Desc": "This fun, all-ages activity brings history alive! All you need is a bow, an arrow, an apple, and an idiot.",
"TF_SniperAppleArrow_Style0": "Deadly",
"TF_SniperAppleArrow_Style1": "Dangerous",
"TF_SniperAppleArrow_Style2": "Tasty",
"TF_ScoutHeadband": "Front Runner",
"TF_ScoutHeadband_Desc": "This commemorative sweatband is a loving tribute to the heroes – and we don't use that word lightly – who live their lives like sweaty candles in the wind.",
"TF_ScoutHeadband_Style0": "Stylin'",
"TF_ScoutHeadband_Style1": "Indifferent",
"TF_SuperMNC_Pyro": "Triclops",
"TF_SuperMNC_Pyro_Desc": "Fool your enemies into thinking you can see better! Here's the trick: You won't be able to see at all!",
"TF_SuperMNC_Pyro_Style0": "Roasting",
"TF_SuperMNC_Pyro_Style1": "Blazing",
"TF_SuperMNC_Sniper": "Flamingo Kid",
"TF_SuperMNC_Sniper_Desc": "Are you man enough to wear this brightly colored cowboy hat? Just in case you're not, we slapped a half-a-skull on it to ease you into the exciting new world of wearing this hat.",
"TF_SpySpats": "Sneaky Spats of Sneaking",
"TF_SpySpats_Desc": "Sure, you're in the market for shoes to help you lurk in the shadows. But once you slip on these natty calf leather spatterdashes, you'll want EVERYONE to check you out.",
"TF_GRFS_1": "Cross-Comm Crash Helmet",
"TF_GRFS_1_Desc": "This purely cosmetic battlefield awareness accessory will fool everyone from the lowliest private to the mayor of the army into thinking you're probably in the army too.",
"TF_GRFS_2": "Cross-Comm Express",
"TF_GRFS_2_Desc": "This full spectrum battle monocle receives signals from a satellite at light speed, which means you may have to slow down a little so they can catch up to you.",
"TF_GRFS_3": "Doublecross-Comm",
"TF_GRFS_3_Desc": "This battlefield awareness bandanna is stitched with nanofibers that can download battlefields from Wikipedia straight to your face, so you will never not be aware of them.",
"TF_QC_Badge": "Atomic Accolade",
"TF_QC_Badge_Desc": "Skip past all the boring busywork of science and get right to the exciting part: the fabulous prizes! This prestigious ribbon certifies your bravery in the field of excellence.",
"TF_QC_Flasks": "Professor's Pineapple",
"TF_QC_Flasks_Desc": "We don't know what's in it, but we found it in some rusty drums buried in a shallow grave in a forest, so let's face it, you'll probably get super powers if you drink it.",
"TF_QC_MedicGlove": "Quadwrangler",
"TF_QC_MedicGlove_Desc": "This quantum-collared lab coat includes a handy rubber pipe that siphons blood from your heart, where it is not needed, to your shooting arm, where it is!",
"TF_MedicClipboard": "Surgeon's Side Satchel",
"TF_MedicClipboard_Desc": "This compact medical equipment bag makes the perfect accessory for the doctor on the go. Treat patients out of doors, in the fresh unsterile air of the battlefield.",
"TF_DemoTreasureChest": "Liquor Locker",
"TF_DemoTreasureChest_Desc": "The Demo keeps his fortune close to his chest: Specifically, on the other side of it, strapped to his back. You won't find money in it: Demo wisely invests in gold, which he then spends on rare cask-aged liquors, which he then usually drinks, which is why he keeps it locked and the key hidden.",
"TF_DemoTreasureChest_Style0": "Classic",
"TF_DemoTreasureChest_Style1": "Front",
"TF_DemoTreasureChest_Style2": "Right Hip",
"TF_DemoTreasureChest_Style3": "Left Hip",
"TF_Pet_Robro": "RoBro 3000",
"TF_Pet_Robro_Desc": "The RoBro 3000 doesn't just watch your back in battle! Whether you're on the battlefield, out on the town, sleeping in bed or on the toilet, you'll always have a friend in the RoBro, which comes with no \"OFF\" switch and cannot be shut down. The RoBro even tapes everything you do, whether you want it to or not. It's not even a feature we installed on the RoBro—it's just something it does for its own mysterious reasons!",
"TF_DemoBeardPipe": "Bearded Bombardier",
"TF_DemoBeardPipe_Desc": "Demo is already a lot like Santa Claus. They both have extensive knowledge of modern explosives, they both hate Judy Garland, and now, they can both sport a charming beard and corn cob pipe.",
"TF_DemoBeardPipe_Style0": "Whatever",
"TF_DemoBeardPipe_Style1": "Formal",
"TF_EngineerPocketCat": "Pocket Purrer",
"TF_EngineerPocketCat_Desc": "Little known fact: cats are fantastic engineers. Go ahead and ask about it next time you see one. In case you don't speak feline, \"meow\" means \"that cantilever is deflected over its g-type joist girder.\" It's probably going to say that a lot.",
"TF_HeavyMustacheHat": "Soviet Gentleman",
"TF_HeavyMustacheHat_Style1": "Normal",
"TF_HeavyMustacheHat_Style2": "Camo",
"TF_HeavyMustacheHat_Desc": "Heavy is a man of intrigue, and every intrigue-man worth his salt deserves a fine hat and moustache to sport. That way, people can excitedly whisper things like: \"I wonder how long it took him to grow that moustache\" and \"what do you think he keeps under his hat?\"",
"TF_MedicGasMask": "Medi-Mask",
"TF_MedicGasMask_Desc": "As a thought experiment, Medic has taken to wearing this mask, releasing innocuous gas into a room and screaming, \"Dear god – the poison tanker has burst!\" to see what people will do. So far, the tests have been inconclusive. Although, a couple people have died. So that's interesting.",
"TF_ScoutTrackJacket": "Track Terrorizer",
"TF_ScoutTrackJacket_Desc": "For a brief stint in high school, Scout joined the track team in one of his many schemes to pick up girls. He was kicked off the team after three days when everyone realized he was 23-years-old and also not enrolled in the school.",
"TF_SniperPocketKoala": "Koala Compact",
"TF_SniperPocketKoala_Desc": "Watch as your enemies quake in fear at the sight of this tiny koala! Hear them scream at his horrifying little hat! Smell them reel in alarm at how deviously small it is! Warning: You may not be able to stand the terror yourself!",
"TF_SniperPocketKoala_Style0": "Twins",
"TF_SniperPocketKoala_Style1": "Poor and Irish",
"TF_SoldierWarPig": "War Pig",
"TF_SoldierWarPig_Desc": "After complaints that obstructed vision was affecting his performance, Soldier slapped some goggles on a helmet and charged back into the fray. His performance did not improve, but on the upside, everyone has stopped expecting anything from him.",
"TF_SoldierWarPig_Style0": "Uninhibited",
"TF_SoldierWarPig_Style1": "Conspicuous",
"TF_SpyCardHat": "Hat of Cards",
"TF_SpyCardHat_Desc": "Why did we just take one of those cards out of our hats to blatantly cheat at poker? Maybe what you should be asking is this: why are our knives...in your gut?! You might also want to ask: where is the nearest hospital?! And: is blood as important as everyone claims?!",
"TF_Pyro_FireworksBag": "Pyrotechnic Tote",
"TF_Pyro_FireworksBag_Desc": "Any day can be the Fourth of July if you just believe. It also helps if you have a bag of fireworks – like the Pyrotechnic Tote - you can set off to distract people when they try to tell you that you can't take the day off to eat hot dogs and get drunk at the park. Is this not America, Samuel?  Do we not have the freedom to vomit in our own shoes?",
"TF_KillerExclusive": "Killer Exclusive",
"TF_KillerExclusive_Desc": "Break news, spirits and heads.",
"TF_Portal2_Pin": "Companion Cube Pin",
"TF_MNC_Hat": "The Athletic Supporter",
"TF_MNC_Hat_Desc": "[Insert Favorite Regional Team Here]",
"TF_MNC_Mascot_Hat": "The Superfan",
"TF_MNC_Mascot_Hat_Desc": "",
"TF_MNC_Mascot_Outfit": "The Essential Accessories",
"TF_MNC_Mascot_Outfit_Desc": "",
"TF_Halloween_Mask_Scout": "Scout Mask",
"TF_Halloween_Mask_Sniper": "Sniper Mask",
"TF_Halloween_Mask_Soldier": "Soldier Mask",
"TF_Halloween_Mask_Demoman": "Demoman Mask",
"TF_Halloween_Mask_Medic": "Medic Mask",
"TF_Halloween_Mask_Heavy": "Heavy Mask",
"TF_Halloween_Mask_Spy": "Spy Mask",
"TF_Halloween_Mask_Engineer": "Engineer Mask",
"TF_Halloween_Mask_Pyro": "Pyro Mask",
"TF_Halloween_Mask_SaxtonHale": "Saxton Hale Mask",
"TF_HalloweenCauldron2011": "Antique Halloween Goodie Cauldron",
"TF_HalloweenCauldron2011_Desc": "You can pry open the lid of this cauldron to see what strangeness lies within... from your backpack... IF YOU DARE.",
"TF_Luchador": "Cold War Luchador",
"TF_Luchador_Desc": "The most terrifying Soviet/Latino partnership since the Cuban Missile Crisis.",
"TF_Apocofists": "Apoco-Fists",
"TF_Apocofists_Desc": "Turn every one of your fingers into the Four Horsemen of the Apocalypse! That's over nineteen Horsemen of the Apocalypse per glove! The most Apocalypse we've ever dared attach to one hand!",
"TF_Saint_Pin": "Mark of the Saint",
"TF_Saint_Pin_Desc": "",
"TF_TrnHat": "Point and Shoot",
"TF_TrnHat_Desc": "The next time someone accuses you of not being a real wizard because you refuse to (read: can't) do spells, poke them in the eye with this magically blinding pointy hat and run.",
"TF_TrnHelmet": "War Head",
"TF_TrnHelmet_Desc": "Protect your thought-horde from dragons, sorcery, and other make-believe dangers with this spiky lead battle-mask.",
"TF_DashinHashshashin": "Dashin' Hashshashin",
"TF_DashinHashshashin_Desc": "When you need to go deep undercover, one disguise is not enough! Put a hood over that ski-mask, then wrap a towel around it. Boldly announce to the world that you are inconspicuous!",
"TF_SharpDresser": "Sharp Dresser",
"TF_SharpDresser_Desc": "Every merc's crazy for a sharp-dressed man. With 15th century murder-knives extruding from his cufflinks.",
"TF_TopNotch": "Top Notch",
"TF_TopNotch_Desc": "Welcome to a secret society so exclusive it makes the Illuminati look like a Costco. How exclusive? You are the only member. This is the only item of its kind in all of existence. So don't craft it, Miney.",
"TF_Jag_Badge": "Merc Medal",
"TF_Jag_Badge_Desc": "There exists an agency so secret that only three people on the planet even know of its existence. This is the medal they give each other when one of them does a great job.",
"TF_Jag_Haircut": "Battle Bob",
"TF_Jag_Haircut_Desc": "Simple and elegant, this slimming hair helmet will bring out the natural contours of your fearsome war face.",
"TF_Jag_Haircut_Style_NoHelmet": "Without Helmet",
"TF_Jag_Haircut_Style_WithHelmet": "With Helmet",
"TF_Jag_Shadow": "Bushman's Boonie",
"TF_Jag_Shadow_Desc": "Everybody knows that the head part of your body needs twice as much camouflage as all the other parts. Ask anyone in the army and they'll kill you and hide the body, because that widely-known information is CLASSIFIED.",
"TF_ManniversaryPaperHat": "Manniversary Paper Hat",
"TF_ManniversaryPackage": "Manniversary Package",
"TF_ManniversaryPackage_Desc": "From your fine friends at Mann Co., celebrating our one-year anniversary.\n\nThis contains a free sample from our fall lineup and can be opened from your backpack.",
"TF_TauntEnabler_HighFive": "Taunt: The High Five!",
"TF_TauntEnabler_HighFive_Desc": "All Class Taunt\nDon't leave your friends hanging.\n\nThis is a partner taunt. Press the taunt key to toggle.",
"TF_ConscientiousObjector": "Conscientious Objector",
"TF_ConscientiousObjector_Desc": "We gave peace a chance. It didn't work.\n\nCustom decals can be applied to this item.",
"TF_SniperHat1": "Your Worst Nightmare",
"TF_SniperHat1_Desc": "This bandanna will teach you to eat things that would make a billy goat puke. Like another billy goat.",
"TF_HeavyHat1": "One-Man Army",
"TF_HeavyHat1_Desc": "You send that many men against a bandanna like this, don't forget one thing: A good supply of body bags.",
"TF_SpyHat1": "Counterfeit Billycock",
"TF_SpyHat1_Desc": "This hat is a spy.",
"TF_HeavyHat2": "Outdoorsman",
"TF_HeavyHat2_Desc": "Chop wood. Eat syrup. Live in Canada. This hat lets you do it all.",
"TF_DemoHat1": "Tavish DeGroot Experience",
"TF_DemoHat1_Desc": "Hey, Joe, where you going with that sticky launcher in your hand?",
"TF_EngineerHat1": "Pencil Pusher",
"TF_EngineerHat1_Desc": "Measure twice, cut once, shoot first.",
"TF_EngineerBlueprints": "Builder's Blueprints",
"TF_EngineerBlueprints_Desc": "Never bring a gun to a blueprint fight.",
"TF_BuccaneersBicorne": "Buccaneer's Bicorne",
"TF_BuccaneersBicorne_Desc": "Hoist the mainsail! Buckle those swashes! Get into a swordfight! Pirate captains yell stuff like this all the time, and now you can too.",
"TF_Bootlegger": "Bootlegger",
"TF_Bootlegger_Desc": "Amaze your friends! Impress women! Walk with a limp for life! It's grotesque!",
"TF_ScottishHandshake": "Scottish Handshake",
"TF_ScottishHandshake_Desc": "Your enemies will think you're making peace, right up until the terrifying moment that their hand is very seriously cut! Here's the trick: It's a broken bottle!",
"TF_OldBrimstone": "A Whiff of the Old Brimstone",
"TF_OldBrimstone_Desc": "Your enemies will clap in delight at the cartoonish innocence of these old-timey bombs, making it that much sweeter when you blow their arms off.",
"TF_SoldierHat1": "Salty Dog",
"TF_SoldierHat1_Style0": "Salty",
"TF_SoldierHat1_Style1": "Smoky",
"TF_SoldierHat1_Desc": "Get all of a boat captain's respect without the crushing responsibility of actually captaining a boat or the enormous amount of ongoing maintenance a boat requires!",
"TF_PyroHat1": "Little Buddy",
"TF_PyroHat1_Desc": "People will think you're in the Navy. But the joke is on them, BECAUSE YOU'RE NOT! That is just one possible benefit of this tricky hat.",
"TF_HeavyHat3": "Gym Rat",
"TF_HeavyHat3_Desc": "Let's get physical. Physical.",
"TF_ScoutHat1": "Hot Dogger",
"TF_ScoutHat1_Desc": "There's been a terrible explosion at the hot dog factory! That's what you can tell people, and they'll believe you because you will look like an expert on hot dogs.",
"TF_PyroHat2": "Birdcage",
"TF_PyroHat2_Desc": "Everyone will wonder what the secret meaning of this mysterious hat is. The secret is you're an idiot.",
"TF_MedicHat1": "Surgeon's Stahlhelm",
"TF_MedicHat1_Desc": "Technically, field medics are protected as noncombatants under the Geneva Convention. The next time you get shot be sure to tell your killer. It's a conversation starter!",
"TF_ScoutHat2": "Backwards Ballcap",
"TF_ScoutHat2_Desc": "Stick it to Major League Baseball by not wearing their hat the right way.",
"TF_ScoutBackwardsCap_Style0": "I Can't Hear You",
"TF_ScoutBackwardsCap_Style1": "Headphones Disengaged",
"TF_SniperNecklace": "Crocodile Smile",
"TF_SniperNecklace_Desc": "How many crocodiles had to die to make this necklace? A lot. That's the point.",
"TF_FlairButtons": "Flair!",
"TF_FlairButtons_Desc": "Show enthusiasm! For your favorite things!\n\nCustom decals can be applied to this item.",
"TF_MedicPocketSquare": "Couvre Corner",
"TF_MedicPocketSquare_Desc": "Sometimes we put some jokes in these descriptions. But, no joke: This looks good. Really sharp.",
"TF_MedicStethoscope": "Surgeon's Stethoscope",
"TF_MedicStethoscope_Desc": "Look like you know what you're doing when you pronounce people dead.",
"TF_SpyHat2": "L'Inspecteur",
"TF_SpyHat2_Desc": "Nobody is not scared of a policeman from France. That is why this hat is so effective.",
"TF_PhotoBadge": "Photo Badge",
"TF_PhotoBadge_Desc": "Discourage identity theft.\n\nCustom decals can be applied to this item.",
"TF_StampableMedal": "Clan Pride",
"TF_StampableMedal_Desc": "Because it's cheaper and less painful than a tattoo.\n\nCustom decals can be applied to this item.",
"TF_SniperHat2": "Swagman's Swatter",
"TF_SniperHat2_Desc": "This is the best hat. We couldn't say it if it weren't true. This one's the best.",
"TF_PyroHat3": "Flamboyant Flamenco",
"TF_PyroHat3_Desc": "Help your enemies celebrate Day of the Dead by wearing this hat and then killing them.",
"TF_EngineerHat2": "Virtual Reality Headset",
"TF_EngineerHat2_Desc": "With these on, you can pretend you're winning.",
"TF_SpyGlasses": "Spectre's Spectacles",
"TF_SpyGlasses_Desc": "So mysterious. So deadly. So nearsighted.",
"TF_ScoutGlasses": "Stereoscopic Shades",
"TF_ScoutGlasses_Desc": "If you close an eye, one of the teams will disappear. So don't do that.",
"TF_SoldierHat2": "Hat with No Name",
"TF_SoldierHat2_Desc": "A nameless hat for a nameless man.",
"TF_PyroConscience": "Cremator's Conscience",
"TF_PyroConscience_Desc": "'Burn him with fire!' 'No, burn him with fire, then hit him with an axe!'",
"TF_ScoutHat3": "Hermes",
"TF_ScoutHat3_Desc": "Don't shoot the messenger. Actually, go ahead and try. Can't be done, pal! Too fast!",
"TF_Football_Boots": "Ball-Kicking Boots",
"TF_Football_Boots_Desc": "Show balls who is the boss.",
"TF_Football_Scarf": "Merc's Pride Scarf",
"TF_Football_Scarf_Desc": "Wear your loyalty like a brightly-colored noose around your neck.",
"TF_ShinyBauls": "Ornament Armament",
"TF_ShinyBauls_Desc": "Just like the Soldier's actual grenades, these shiny glass baubles are purely ornamental. ",
"TF_SandvichSafe": "Sandvich Safe",
"TF_SandvichSafe_Desc": "Keep sandvich safe with sandvich safe. Okay, is good, no more description. Buy.",
"TF_IncineratorsInsulator": "Head Warmer",
"TF_IncineratorsInsulator_Desc": "This incinerator's insulator keeps your head a perfect 105 degrees, while muffling the hallucinations brought on by wearing a hat that slowly cooks your brain.",
"TF_TouchingStory": "Outback Intellectual",
"TF_TouchingStory_Desc": "Argyle. Pipe-smoking. Individually, they make you look like an idiot. Together, they make you look smart AND stylish! Just like Umberto Eco!",
"TF_ItsyBitsySpyer": "Itsy Bitsy Spyer",
"TF_ItsyBitsySpyer_Desc": "Is that a miniature Spy in your pocket, or are you just happy to OH GOD STOP HITTING ME!",
"TF_AllFather": "All-Father",
"TF_AllFather_Style1": "Classic",
"TF_AllFather_Style2": "Thunderstruck",
"TF_AllFather_Desc": "Throughout the history of civilization, the white beard has come to symbolize wisdom and status. Show the world it's possible to be bearded AND stupid with this face-nest. Shove it, civilization!",
"TF_JingleHell": "Jingle Belt",
"TF_JingleHell_Desc": "Slay-bells will be ringing in the slow-roasted ears of your burn victims.",
"TF_Gifting_Badge": "Spirit of Giving",
"TF_Gifting_Badge_Desc": "The more gifts you give away, the bigger your heart will get! Get what gift-givers call \"the Smissmas spirit,\" and what cardiologists call hypertrophic cardiomyopathy.",
"TF_MasculineMittens": "Holiday Punch",
"TF_MasculineMittens_Desc": "Be the life of the war party with these laugh-inducing punch-mittens.",
"TF_Winter2011_EngineerStocking": "Stocking Stuffer",
"TF_Winter2011_EngineerStocking_Desc": "No need to hang this stocking over the mantle. It's already stuffed. Thanks for nothing, Santa.",
"TF_Winter2011_WinterFurCap": "Brown Bomber",
"TF_Winter2011_WinterFurCap_Desc": "Celebrate Canada's birthday, on whatever day that happens, with this commemorative Canadian Prime Minister's ceremonial dress hat.",
"TF_Winter2011_WinterFurCap_Style0": "Hunter",
"TF_Winter2011_WinterFurCap_Style1": "Hipster",
"TF_SoldierWinterCoat": "Kringle Collection",
"TF_SoldierWinterCoat_Desc": "Do the snow-pants dance with this stylish holiday ensemble from famed Arctic designer Kristoff Kringle.",
"TF_TheElf": "Big Elfin Deal",
"TF_TheElf_Style0": "North Pole",
"TF_TheElf_Style1": "South Pole",
"TF_TheElf_Desc": "You ask me if I wanna be a dentist one more time, pal, I'm gonna kick your teeth in.",
"TF_Scout_Elf_Boots": "Bootie Time",
"TF_Scout_Elf_Boots_Style0": "North Pole",
"TF_Scout_Elf_Boots_Style1": "South Pole",
"TF_Scout_Elf_Boots_Desc": "You dasher! You dancer! You prancer! You VIXEN! Pull Santa's sleigh all by yourself, you sexy little man.",
"TF_Winter2011_Ebenezer": "Ebenezer",
"TF_Winter2011_Ebenezer_Desc": "If you are visited by one piece of spectral headwear this night, make it the Ghost of Christmas Hats, donated in true Smissmas spirit by Steam User Jacen.",
"TF_Winter2011_GiftHat": "Holiday Headcase",
"TF_Winter2011_GiftHat_Desc": "Merry Smissmas, everyone! May all your miscellaneous holidays be happy (or somber, depending on your cultural traditions) with this ultra-rare TF item, donated by Steam User BANG!",
"TF_Winter2011_SantaHat": "B.M.O.C.",
"TF_Winter2011_SantaHat_Desc": "Be the Big Man of Christmas with this fur-fringed pom-pom hat!",
"TF_SpyCicle": "Spy-Cicle",
"TF_SpyCicle_Desc": "It's the perfect gift for the man who has everything: an icicle driven into their back. Even rich people can't buy that in stores.",
"TF_BallBuster": "Wrap Assassin",
"TF_BallBuster_Desc": "These lovely festive ornaments are so beautifully crafted, your enemies are going to want to see them close up. Indulge them by batting those fragile glass bulbs into their eyes at 90 mph.",
"TF_FoundryAchievementHat": "Full Head of Steam",
"TF_FoundryAchievementHat_Desc": "You never took a break from cp_foundry, and now you can prove it with the actual steam whistle used to call the breaks you never took!",
"TF_DoomsdayAchievementHat": "Gentle Munitionne of Leisure",
"TF_DoomsdayAchievementHat_Desc": "This snappy all-class stovepipe commemorates man and monkey's joint attempt to conquer the heavens with a built-in rocket that, every year on the anniversary of the launch, might violently explode.",
"TF_Winter2013_SpiritDispenser": "Portable Smissmas Spirit Dispenser",
"TF_Winter2013_SpiritDispenser_Desc": "Granted by crafting the Steam Holiday Sale 2013 badge.",
"TF_Winter2013_BattleHood": "War on Smissmas Battle Hood",
"TF_Winter2013_BattleHood_Desc": "Granted by crafting the Steam Holiday Sale 2013 badge.",
"TF_Winter2013_BattleHood_Style0": "No Helmet",
"TF_Winter2013_BattleHood_Style1": "Helmet",
"TF_Winter2013_BattleSocks": "War on Smissmas Battle Socks",
"TF_Winter2013_BattleSocks_Desc": "Granted by crafting the Steam Holiday Sale 2013 badge.",
"TF_Winter2013_SmissmasSack": "Sack Fulla Smissmas",
"TF_Winter2013_SmissmasSack_Desc": "Granted by crafting the Steam Holiday Sale 2013 badge.",
"TF_Winter2013_Caribou": "Smissmas Caribou",
"TF_Winter2013_Caribou_Desc": "Granted by crafting the Steam Holiday Sale 2013 badge.",
"TF_Winter2013_Randolph": "Randolph the Blood-Nosed Caribou",
"TF_Winter2013_Randolph_Desc": "Granted by crafting the Steam Holiday Sale 2013 badge.",
"TF_SomethingSpecial": "Something Special For Someone Special",
"TF_SomethingSpecial_Desc": "",
"TF_LuckyShot": "Lucky Shot",
"TF_LuckyShot_Desc": "Let's see you do that again, Private.",
"TF_Conquistador": "Conquistador",
"TF_Conquistador_Desc": "Make Spanish history come alive with this authentic conquistador's helmet, excavated from the actual grave of a sixteenth century French cosplayer.",
"TF_BlackRose": "Black Rose",
"TF_BlackRose_Desc": "Slay it with flowers.",
"TF_BlackRose_Style_TeamColors": "Mystery and True Love",
"TF_BlackRose_Style_Black": "Baccara",
"TF_WarswornHelmet": "Warsworn Helmet",
"TF_WarswornHelmet_Desc": "Whether you're a mercenary in the granaries and gravel pits of the Badlands or an immense fantasy world, this helmet tells potential employers everything they need to know: You will do horrible, horrible things for money.",
"TF_BolganHelmet": "Bolgan",
"TF_BolganHelmet_Desc": "Protect the all-important empty socket part of your face while giving enemies an irresistible target: unimportant exposed parts like your mouth, nose and generally all the non-socket parts of your face.",
"TF_ReckoningBadge": "Bolgan Family Crest",
"TF_ReckoningBadge_Desc": "This stylish bronze badge lets people know that at some crucial point in your family genealogy, one of your family members became intimately involved with a monster cyclops.",
"TF_Lollichop": "Lollichop",
"TF_Lollichop_Desc": "Fill (split) your buddies' tummies (skulls) with delicious candy (cold steel) with this oversized sugary treat. (Equips Pyrovision.)",
"TF_ScorchShot": "Scorch Shot",
"TF_ScorchShot_Desc": "This weapon will reload automatically when not active.",
"TF_Rainblower": "Rainblower",
"TF_Rainblower_Desc": "Your friends (enemies) will squeal with delight (be consumed with fire) when you cover them in sparkly rainbows (all-consuming fire). (Equips Pyrovision.)",
"TF_Pyrovision_Goggles": "Pyrovision Goggles",
"TF_Wearable_Pyrovision_Goggles_Type": "Pyrovision Goggles",
"TF_Pyrovision_Goggles_Desc": "Enter a world of imagination that's far superior to the crap-ass worlds of imagination you get from books. Pyrovision lets you see the TF2niverse from our favorite arsonist's perspective.",
"TF_Pet_Balloonicorn": "Balloonicorn",
"TF_Pet_Balloonicorn_Desc": "Oh my goodness! Is it Balloonicorn? The Mayor of Pyroland? Don't be ridiculous, we're talking about an inflatable unicorn. He's the Municipal Ombudsman. Between you and me, Balloonicorn's a joke down at City Hall. Gary Brottman, the inflatable Sewer Superintendent, is sleeping with Balloonicorn's wife. Anyway, when he's riding around on your shoulder don't mention ANY of this to him, because Balloonicorn is on a hair trigger and he's usually pretty drunk.",
"TF_PyroMusicDevice": "Infernal Orchestrina",
"TF_PyroMusicDevice_Desc": "Your BFFs (enemies) will turn their frowns upside down (confront their own mortality) as they dance a merry jig to (run in terror from) these cheery tunes (soul-destroying funeral dirges). (Equips Pyrovision.)",
"TF_PyroBongos": "Burning Bongos",
"TF_PyroBongos_Desc": "When you were a kid, all you wanted was to play the bongos. But then you grew up and, like all of us, realized you're not as good at bongos as Matthew McConaughey. Well, guess what, pal: Nobody is, or ever will be. (Equips Pyrovision.)",
"TF_Weapon_PEP_Scattergun": "Baby Face's Blaster",
"TF_Weapon_PEP_Scattergun_Desc": "",
"TF_Weapon_PEP_Pistol": "Pretty Boy's Pocket Pistol",
"TF_Weapon_PEP_Pistol_Desc": "",
"TF_PEP_ScoutHat": "Fed-Fightin' Fedora",
"TF_PEP_ScoutHat_Desc": "This hat commemorates that time you stuck it on a broom and tricked the Feds into shooting at it for an hour while you scooted off with all that bank money. Goes great with all those bullet wounds in your torso from that time you pulled the same trick on much smarter Feds.",
"TF_PEP_ScoutBag": "Dillinger's Duffel",
"TF_PEP_ScoutBag_Desc": "This duffel comes with leather straps so all your money doesn't fall out. The leather straps also don't tighten all the way, so some money WILL fall out, and ladies will know how rich you are. (Answer: Very. Also handsome.)",
"TF_DS_DumpsterDevice": "Beggar's Bazooka",
"TF_DS_DumpsterDevice_Desc": "",
"TF_DS_FootballHelmet": "Helmet without a Home",
"TF_DS_FootballHelmet_Desc": "Think of this helmet as a fortified, portable home for your head. It's also lined with tin foil, so nobody will be able to steal your valuable tramp-thoughts.",
"TF_DS_CanGrenades": "Captain's Cocktails",
"TF_DS_CanGrenades_Desc": "Attention, tramps! Are you MAN enough to carry around cans full of expired soup? Are you CRAZY enough to pretend they're grenades? Are you HUNGRY enough to probably eat the soup later, when nobody's looking? We bet yes!",
"TF_Pro_SniperRifle": "Hitman's Heatmaker",
"TF_Pro_SniperRifle_Desc": "\nHeads will roll.",
"TF_Pro_SMG": "Cleaner's Carbine",
"TF_Pro_SMG_Desc": "",
"TF_Pro_SniperHat": "Liquidator's Lid",
"TF_Pro_SniperHat_Desc": "This wool cap/granny glasses combo fits any assassin, whether he's saving orphans in heated gun battles with the mob or impersonating lead guitarists in world-famous Irish rock bands.",
"TF_PyroHazmat": "HazMat Headcase",
"TF_PyroHazmat_Desc": "This impermeable, gas-tight hood keeps your head at a comfortable 350-degree temperature throughout the day. The tinted visor lets you sweat off that unsightly face fat in the privacy of your own sweltering hell.",
"TF_PyroHazmat_Style0": "Safety First",
"TF_PyroHazmat_Style1": "Reinforced",
"TF_PyroHazmat_Style2": "Streamlined",
"TF_PyroHazmat_Style3": "A Serious Absence of Fear",
"TF_HeavyShirt": "Apparatchik's Apparel",
"TF_HeavyShirt_Desc": "Toting around a 150-kilogram minigun gives those forearm muscles a nice workout. Show them off with these rolled-sleeved shirts, in your choice of argyle, lumberjack, rugby stripe or vertical pinstripe.",
"TF_HeavyShirt_Style0": "Outdoorsmen",
"TF_HeavyShirt_Style1": "Blood Bin",
"TF_HeavyShirt_Style2": "Investor",
"TF_HeavyShirt_Style3": "J.R. Gyle",
"TF_DemoParrot": "Bird-Man of Aberdeen",
"TF_DemoParrot_Desc": "This shoulder-mounted feathered friend comes in any color you like, and is so full of whiskey it couldn't fly off if it wanted to. Great to have around if you decide to eat it—just turn your head and bite!",
"TF_DemoParrot_Style0": "Essential",
"TF_DemoParrot_Style1": "Distinguished",
"TF_DemoParrot_Style2": "Imbued",
"TF_Archimedes": "Archimedes",
"TF_Archimedes_Desc": "Before Archimedes came into the Medic's care, he made his living through wedding dovery. A lucrative trade, but he always felt something was missing. He looks back on the day that the Medic stole that catering van during the prime minister's wedding as the best day of his life. He's been burrowing into the chests of unwitting patients ever since.",
"TF_TheWinterWonderlandWrap": "Winter Wonderland Wrap",
"TF_TheWinterWonderlandWrap_Desc": "Just because you're an unknowable enigma doesn't mean you shouldn't bundle up. Remember what your mom told you... if you even HAVE one, you inscrutable person of mystery!",
"TF_TheWinterWonderlandWrap_Style0": "With Stripes",
"TF_TheWinterWonderlandWrap_Style1": "Without Stripes",
"TF_DerWintermantel": "Der Wintermantel",
"TF_DerWintermantel_Desc": "This fur-lined coat/sweater combo comes with Mann Co.'s guarantee that, as with all of our products, at least three endangered species went extinct during the making of this product. Note: fur is synthetic.",
"TF_DerWintermantel_Style0": "Gramma's Sweater Showing",
"TF_DerWintermantel_Style1": "Gramma's Sweater Hidden",
"TF_DocsHoliday": "Doc's Holiday",
"TF_DocsHoliday_Desc": "Comes in \"Fever\", \"Flu\", and \"Virus\" styles, depending on the epidemic you'd most like to embody while on vacation.",
"TF_DocsHoliday_Style0": "Fever",
"TF_DocsHoliday_Style1": "Flu",
"TF_DocsHoliday_Style2": "Virus",
"TF_ToughStuffMuffs": "Tough Stuff Muffs",
"TF_ToughStuffMuffs_Desc": "Frostbite of the ears halts blood flow, and leads to tissue death, gangrene, and infection. And nobody wants to look at your gangrenous infected ears. Cover up those frostbitten abominations with these stylish earmuffs.",
"TF_ToughStuffMuffs_Style0": "Montreal Style",
"TF_ToughStuffMuffs_Style1": "Boston Style",
"TF_ToughStuffMuffs_Style2": "Montreal Style (No Earmuffs)",
"TF_ToughStuffMuffs_Style3": "Boston Style (No Earmuffs)",
"TF_TheColdKiller": "Cold Killer",
"TF_TheColdKiller_Desc": "Melt into the wintry shadows with The Cold Killer, assuming the shadows are a mixture of white, red, brown and khaki.",
"TF_TheCutThroatConcierge": "Cut Throat Concierge",
"TF_TheCutThroatConcierge_Desc": "Trick your enemies into thinking you are the doorman at a classy hotel. By the time they get wise, you'll be miles away with their car and luggage, rummaging through their clothes and laughing at them. ",
"TF_TheCoolBreeze": "Cool Breeze",
"TF_TheCoolBreeze_Desc": "Forget coffee, lad. THIS'll wake ye up on a cold winter morning.",
"TF_SoldiersSlopeScopers": "Soldier's Slope Scopers",
"TF_SoldiersSlopeScopers_Desc": "These extreme pro ski goggles let folks know there're be no bunny slopes for this guy. Not with YOUR middling-to-average ski skills. No, YOU'LL be skiing on all the intermediate slopes you can find, thank you very much—hunting out those tasty gradual inclines.",
"TF_SoldiersSlopeScopers_Style0": "Amateur",
"TF_SoldiersSlopeScopers_Style1": "Pro",
"TF_TheDigitDivulger": "Digit Divulger",
"TF_TheDigitDivulger_Desc": "Keep your hands warm and your fingers freezing with these paintable leather and suede fingerless gloves.",
"TF_TheDigitDivulger_Style0": "Leather Open",
"TF_TheDigitDivulger_Style1": "Suede Open",
"TF_TheDigitDivulger_Style2": "Leather Closed",
"TF_TheDigitDivulger_Style3": "Suede Closed",
"TF_HeavysHockeyHair": "Heavy's Hockey Hair",
"TF_HeavysHockeyHair_Desc": "Commemorate the age-old tradition of pummelling your opponents senseless on ice by sporting the stylish and practical hairdo of goons and enforcers worldwide.",
"TF_TheMuttonMann": "Mutton Mann",
"TF_TheMuttonMann_Desc": "Enjoy the absolute cutting edge of nineteenth century sideburn fashion with these lustrous, face-hugging muttons. There's no meat in these chops, ladies—but there's plenty of beefcake.",
"TF_TheMercsMuffler": "Merc's Muffler",
"TF_TheMercsMuffler_Desc": "The perfect winter accessory for those times when your holiday fun escalates into a high-casualty firefight. 90% more blood-absorbent than any other scarf on the market!",
"TF_TheBarnstormer": "Barnstormer",
"TF_TheBarnstormer_Desc": "Step into the headgear and facial hair of America's favorite aviator/filmmaker/toenail-and-Jarate collector with this hotshot aviator hat and rakish movie star moustache.",
"TF_TheBarnstormer_Style0": "Bugscreen Up",
"TF_TheBarnstormer_Style1": "Bugscreen Down",
"TF_BooBalloon": "Boo Balloon",
"TF_BooBalloon_Desc": "These cheery (but terrifying!) balloons are made from the actual inflated faces of ghosts. Order now, before those uppity ghost rights activists get wind of this and shut it down.",
"TF_BooBalloon_Style0": "Haunting",
"TF_BooBalloon_Style1": "Please Help",
"TF_BooBalloon_Style2": "Hey Guys, What's Going On?",
"TF_BooBalloon_Style3": "Bone Party",
"TF_UnknownMonkeynaut": "Unknown Monkeynaut",
"TF_UnknownMonkeynaut_Desc": "Have an actual ghost of Mann Co.'s first doomed monkeynaut expedition haunt your shoulder! Unlike the many other doomed monkeynaut expeditions undertaken by Mann Co., Operation Banana Catapult was unique in that no space shuttles were even used.",
"TF_GrandDuchessTutu": "Grand Duchess Tutu",
"TF_GrandDuchessTutu_Desc": "Celebrate the life of Grand Duchess Anastasia Nikolaevna with this somber historical costume. Enjoy this replica of the tutu she wore while governing Russia from atop her hundred-foot-tall gumdrop throne.",
"TF_GrandDuchessFairyWings": "Grand Duchess Fairy Wings",
"TF_GrandDuchessFairyWings_Desc": "Celebrate the life of Grand Duchess Anastasia Nikolaevna with this somber historical costume. Enjoy this replica of the fairy wings she wore while governing Russia from atop her hundred-foot-tall gumdrop throne.",
"TF_GrandDuchessTiara": "Grand Duchess Tiara",
"TF_GrandDuchessTiara_Desc": "Celebrate the life of Grand Duchess Anastasia Nikolaevna with this somber historical costume. Enjoy this replica of the tiara she wore while governing Russia from atop her hundred-foot-tall gumdrop throne.",
"TF_DeadLittleBuddy": "Dead Little Buddy",
"TF_DeadLittleBuddy_Desc": "Take a hike, dogs--there's a new Man's Best Friend on the market. Your pet ghost is guaranteed to be loyal (he's dead! He doesn't know anybody else!), great around children (he used to be one!), and house-trained (ghosts don't poop).",
"TF_VoodooJuJu": "Voodoo JuJu (Slight Return)",
"TF_VoodooJuJu_Desc": "Bones: They hold your body up, keep all your meat in place, and they're all that separates us from jellyfish. Why keep them inside, where they can't get the acclaim they deserve? Here's to you, bones.",
"TF_SirHootsalot": "Sir Hootsalot",
"TF_SirHootsalot_desc": "If owls are so smart, why did this one let you glue it to your shoulder? Come to think of it, neither one of you is looking like a super-genius on this one.",
"TF_SirHootsalot_Style0": "Wilderness",
"TF_SirHootsalot_Style1": "Snowy",
"TF_MasterMind": "Master Mind",
"TF_MasterMind_Desc": "Science fact: the human brain is 70% more effective when exposed to oxygen. Fashion fact: the human brain is 90% cooler-looking when you glue lots of Radio Shack stuff to it. Finally, an item that capitalizes on both.",
"TF_Scarecrow": "Scarecrow",
"TF_Scarecrow_Desc": "Need a scarecrow but you're short on wood and straw? Why not capture the Spy, stitch his mouth shut, give him buttons for eyes and stick him in your corn field? He probably won't mind. Everybody likes corn.",
"TF_CronesDome": "Crone's Dome",
"TF_CronesDome_Desc": "For hundreds of years, women have enjoyed all the perks of being a witch (making potions, having warts, getting burned alive) while men stood on the sidelines. No longer! Break through that haunted glass ceiling with the Crone's Dome.",
"TF_Executioner": "Executioner",
"TF_Executioner_Desc": "Being an executioner is a lot more than just killing people. Sometimes you get to torture them first. Tip: To make things interesting, why not torture someone until they yell the secret word? (Hint: the secret word is \"Freedom\".)",
"TF_Bonedolier": "Bonedolier",
"TF_Bonedolier_Desc": "Scare your friends into thinking you're carrying around deadly grenades. Bask in their relief when it turns out they're only harmless human skulls.",
"TF_Plutonidome": "Plutonidome",
"TF_Plutonidome_Desc": "It's a well-known fact that we only use 10% of our brain power. Which means there's a 90% chance that anything you do to your brain is only going to make you smarter. Like letting it float around in plutonium. Let's be honest, doing nothing isn't making you any smarter.",
"TF_Plutonidome_Style0": "Functioning",
"TF_Plutonidome_Style1": "Broken",
"TF_Zipperface": "Zipperface",
"TF_Zipperface_Desc": "\"Daddy, what does your skull look like?\" \"I guess we'll never know, thanks to my stupid face.\" Pow-zoop! Zipperface! Never look like an idiot in front of your kids again!",
"TF_Exorcizor": "Exorcizor",
"TF_Exorcizor_Desc": "The power of Christ compels you... to get this snazzy exorcizing outfit!",
"TF_WraithWrap": "Wraith Wrap",
"TF_WraithWrap_Desc": "The perfect accessory for maintaining anonymity while stealing rings from midgets.",
"TF_CoffinKit": "Coffin Kit",
"TF_CoffinKit_Desc": "Unlike other survival packs, this handy last-aid kit rightly assumes that the moment you're in a survival situation, you are going to die. Just pull the ripcord to inflate the miniature coffin into a standard corpse-sized one that you can die right into.",
"TF_RumpoLantern": "Rump-o'-Lantern",
"TF_RumpoLantern_Desc": "Since time immemorial man has had two dreams: the dream of flying, and the dream of tricking people into thinking your ass is haunted. Airplanes took care of the easy dream. This miracle ass lantern tackles the other.",
"TF_SpookyShoes": "Spooky Shoes",
"TF_SpookyShoes_Desc": "From Hell! Size 666! Outside of Hell, that's a 5 1/2. Men's! Experience the agonizing terror of tiny man feet!.",
"TF_SpookySleeves": "Spooky Sleeves",
"TF_SpookySleeves_Desc": "Get these now, before Glenn Danzig finds out about them and buys them all! Seriously, you can have a world where these spooky sleeves are in stock, or a world where Glenn Danzig exists, but not both! Hurry! He's googling \"spooky sleeves\" RIGHT NOW!",
"TF_BatOuttaHell": "Bat Outta Hell",
"TF_BatOuttaHell_Style0": "Universal",
"TF_BatOuttaHell_Style1": "Scout",
"TF_BatOuttaHell_Style2": "Demoman",
"TF_BatOuttaHell_Style3": "Soldier",
"TF_MedicUshanka": "Gentleman's Ushanka",
"TF_MedicUshanka_Desc": "Made from genuine German rabbit fur, this military-grade trappers' hat makes the perfect complement to the Officer's Ushanka. Let the officer in your life know you'll always be right behind them, with a Medigun at the ready and a matching wardrobe.",
"TF_SpyOpenJacket": "Business Casual",
"TF_SpyOpenJacket_Desc": "It's casual business up front, and more casual business in the back. Now: check those sides. Yep. It's casual business there too. Cover all the casual business bases with this unbuttoned suit jacket.",
"TF_EngineerBlueprintsBack": "Idea Tube",
"TF_EngineerBlueprintsBack_Desc": "This handsome leather cylinder improves on the diary in every way. Do you have secret thoughts? Write 'em down, ball 'em up, and stuff 'em in the tube. It's incredibly easy to find a thought when you need it, too. Simply empty out the tube and there they all are. You're just one simple unballing away from remembering it.",
"TF_RobotChickenHat": "Robot Chicken Hat",
"TF_RobotChickenHat_Desc": "Why did the chicken REALLY cross the road? To get hit by a car, stolen by a mad scientist, and transformed into a terrifying cyborg that you can wear on your head. So the next time you hear someone telling you that joke, set that smug joke-teller straight, because you've got the FACTS.",
"TF_RobotChickenHat_Style0": "Normal",
"TF_RobotChickenHat_Style1": "Beakless",
"TF_Item_Goldfish_Burned": "Roasted Goldfish",
"TF_Item_Goldfish_Burned_Desc": "The Pyromania Update just got so hot, it burned up all of your mysterious treasures.\n\nThis item no longer has any use and is purely decorative.",
"TF_Item_PocketLint_Burned": "Charred Pocket Lint",
"TF_Item_PocketLint_Burned_Desc": "The Pyromania Update just got so hot, it burned up all of your mysterious treasures.\n\nThis item no longer has any use and is purely decorative.",
"TF_Item_CheeseWheel_Burned": "Smoked Cheese Wheel",
"TF_Item_CheeseWheel_Burned_Desc": "The Pyromania Update just got so hot, it burned up all of your mysterious treasures.\n\nThis item no longer has any use and is purely decorative.",
"TF_Item_BananaPeel_Burned": "Burned Banana Peel",
"TF_Item_BananaPeel_Burned_Desc": "The Pyromania Update just got so hot, it burned up all of your mysterious treasures.\n\nThis item no longer has any use and is purely decorative.",
"TF_Item_BarnDoorPlank_Burned": "Incinerated Barn Door Plank",
"TF_Item_BarnDoorPlank_Burned_Desc": "The Pyromania Update just got so hot, it burned up all of your mysterious treasures.\n\nThis item no longer has any use and is purely decorative.",
"TF_Item_DamagedCapacitor": "Barely-Melted Capacitor",
"TF_Item_DamagedCapacitor_Type": "Capacitor",
"TF_Item_DamagedCapacitor_Desc": "This damaged capacitor seems to be fire-proof as well as broken. Is there anything it CAN'T do (besides work)?",
"TF_Item_SecretDiary_FireProof": "Fireproof Secret Diary",
"TF_Item_SecretDiary_Type": "Secret Diary",
"TF_Item_SecretDiary_FireProof_Desc": "It's smoldering a little, but otherwise it seems okay. This thing must be built out of the same stuff they make ancient astronauts from.",
"RummageThroughAsh": "Rummage",
"TF_Ash_Type": "Ash",
"TF_PileOfAsh": "Pile of Ash",
"TF_PileOfAsh_Desc": "Looks like there's something in there...\n\nAfter 7/11/2012 this pile will disappear.",
"TF_Item_VoodooCursed_Armory": "Voodoo-Cursed Object",
"TF_Item_VoodooCursed_Armory_Desc": "Each voodoo-cursed object has a tiny amount of curse remaining in it. You can combine seven of these smaller items on the craft screen to get a larger curse. Anything could happen!",
"TF_Item_VoodooCursedOldBoot": "Voodoo-Cursed Old Boot",
"TF_Item_VoodooCursedOldBoot_Desc": "This boot has a tiny amount of curse remaining in it. You can craft together seven cursed items to get a larger curse. Anything could happen!",
"TF_Item_VoodooCursedSkeleton": "Voodoo-Cursed Skeleton",
"TF_Item_VoodooCursedSkeleton_Desc": "These bones have a tiny amount of curse remaining in them. You can craft together seven cursed items to get a larger curse. Anything could happen!",
"TF_Item_VoodooCursedQuicklime": "Voodoo-Cursed Bag of Quicklime",
"TF_Item_VoodooCursedQuicklime_Desc": "This bag has a tiny amount of curse remaining in it. You can craft together seven cursed items to get a larger curse. Anything could happen!",
"TF_Item_VoodooCursedRobotArm": "Voodoo-Cursed Robot Arm",
"TF_Item_VoodooCursedRobotArm_Desc": "This arm has a tiny amount of curse remaining in it. You can craft together seven cursed items to get a larger curse. Anything could happen!",
"TF_Item_VoodooCursedBass": "Voodoo-Cursed Novelty Bass",
"TF_Item_VoodooCursedBass_Desc": "For whatever reason, this fish has a tiny amount of curse remaining in it. You can craft together seven cursed items to get a larger curse. Anything could happen!",
"TF_Item_VoodooCursedStickyBomb": "Voodoo-Cursed Stickybomb",
"TF_Item_VoodooCursedStickyBomb_Desc": "This shrapnel has a tiny amount of curse remaining in it. You can craft together seven cursed items to get a larger curse. Anything could happen!",
"TF_Item_VoodooCursedNail": "Voodoo-Cursed Nail",
"TF_Item_VoodooCursedNail_Desc": "This nail has a tiny amount of curse remaining in it. You can craft together seven cursed items to get a larger curse. Anything could happen!",
"TF_Item_Zombie_Armory": "Voodoo-Cursed Soul",
"TF_Item_Zombie_Armory_Desc": "",
"TF_Item_ZombieScout": "Voodoo-Cursed Scout Soul",
"TF_Item_ZombieScout_Desc": "",
"TF_Item_ZombieSoldier": "Voodoo-Cursed Soldier Soul",
"TF_Item_ZombieSoldier_Desc": "",
"TF_Item_ZombieHeavy": "Voodoo-Cursed Heavy Soul",
"TF_Item_ZombieHeavy_Desc": "",
"TF_Item_ZombieDemoman": "Voodoo-Cursed Demoman Soul",
"TF_Item_ZombieDemoman_Desc": "",
"TF_Item_ZombieEngineer": "Voodoo-Cursed Engineer Soul",
"TF_Item_ZombieEngineer_Desc": "",
"TF_Item_ZombieMedic": "Voodoo-Cursed Medic Soul",
"TF_Item_ZombieMedic_Desc": "",
"TF_Item_ZombieSpy": "Voodoo-Cursed Spy Soul",
"TF_Item_ZombieSpy_Desc": "",
"TF_Item_ZombiePyro": "Voodoo-Cursed Pyro Soul",
"TF_Item_ZombiePyro_Desc": "",
"TF_Item_ZombieSniper": "Voodoo-Cursed Sniper Soul",
"TF_Item_ZombieSniper_Desc": "",
"RummageThroughCurses": "Reach In",
"TF_PileOfCurses": "Pile of Curses",
"TF_PileOfCurses_Desc": "It looks like there's something in there... IF YOU DARE!\n\nAfter 11/12/2014 this pile will disappear.",
"RI_VoodooCursedItem": "Cursed Object",
"TF_VoodooCursed_Type": "Cursed Object",
"TF_VoodooCursedSoul_Type": "Cursed Soul",
"TF_MvM_Badge_Intermediate1": "Operation Oil Spill Badge",
"TF_MvM_Badge_Intermediate1_Desc": "Your Mann Up progress through Operation Oil Spill is saved on this badge.",
"TF_MvM_Badge_Advanced1": "Operation Steel Trap Badge",
"TF_MvM_Badge_Advanced1_Desc": "Your Mann Up progress through Operation Steel Trap is saved on this badge.",
"TF_MvM_Badge_Expert1": "Operation Gear Grinder Badge",
"TF_MvM_Badge_Expert1_Desc": "Your Mann Up progress through Operation Gear Grinder is saved on this badge.",
"TF_MvM_Badge_Advanced2": "Operation Mecha Engine Badge",
"TF_MvM_Badge_Advanced2_Desc": "Your Mann Up progress through Operation Mecha Engine is saved on this badge.",
"TF_MvM_Badge_Advanced3": "Operation Two Cities Badge",
"TF_MvM_Badge_Advanced3_Desc": "Your Mann Up progress through Operation Two Cities is saved on this badge.",
"TF_Grandmaster": "Grandmaster",
"TF_Grandmaster_Desc": "Own the same novelty chess hat worn by Garry Kasparov when he beat Deep Blue to death using his world-famous Thai boxing moves.",
"TF_AudioFile": "Audio File",
"TF_AudioFile_Desc": "Made from scratch.",
"Econ_Style_Desc": "Style: %s1",
"TF_StovePipe_Style0": "Tasteful and Refined",
"TF_StovePipe_style1": "Garish and Overbearing",
"TF_Gibus_Style_Ghastly": "Ghastly",
"TF_Gibus_Style_Ghastlier": "Ghastlier",
"TF_Gibus_Style_Ghastlierest": "Ghastlierest",
"TF_Gibus_Style_Ghostly": "Ghostly",
"TF_Gazer_Style0": "Mad Science",
"TF_Gazer_Style1": "Machine in the Man",
"TF_SplendidScreen_Style1": "Classic",
"TF_SplendidScreen_Style2": "Spike",
"TF_SplendidScreen_Style3": "Arrow",
"TF_SplendidScreen_Style4": "Spike and Arrow",
"TF_Pyromancer_Style1": "Original",
"TF_Pyromancer_Style2": "Full Color Paint",
"TF_Pyromancer_Style3": "Stylish Paint",
"TF_ScoutBeanie_Style0": "New School",
"TF_ScoutBeanie_Style1": "Old School",
"TF_ScoutBeanie_Style2": "Older School",
"TF_ScoutBeanie_Style3": "Oldest School",
"TF_Luchadore_Style0": "El Macho",
"TF_Luchadore_Style1": "El Amor Ardiente",
"TF_Luchadore_Style2": "El Picante Grande",
"TF_BlightedBeak_Style1": "Yersinia Pestis",
"TF_BlightedBeak_Style2": "Vibrio Cholerae",
"TF_VillainsVeil_Style0": "Hired Gun",
"TF_VillainsVeil_Style1": "Smooth Assassin",
"TF_VillainsVeil_Style2": "Trained Killer",
"TF_SummerHat_Style0": "A Day at the Beach",
"TF_SummerHat_Style1": "Carefree Summer Nap",
"TF_SpineChillingSkull2011_Style1": "Spine-Tingling",
"TF_SpineChillingSkull2011_Style2": "Spine-Cooling",
"TF_SpineChillingSkull2011_Style3": "Spine-Twisting",
"TF_Birthday2011_Hat": "Party Hat",
"TF_Birthday2011_Hat_Desc": "",
"TF_Tropico4_Hat": "El Jefe",
"TF_Tropico4_Hat_Desc": "",
"TF_HerosTail_Style0": "Pigmentation Lost",
"TF_HerosTail_Style1": "Pigmentation Gained",
"TF_ScoutPrepShirt_Style0": "Summer",
"TF_ScoutPrepShirt_Style1": "Winter",
"TF_Reggaelator_Style0": "Original",
"TF_Reggaelator_Style1": "Burst",
"TF_Reggaelator_Style2": "Bones",
"TF_Reggaelator_Style3": "Designer",
"TF_MedicSmokingPipe_Style0": "Afternoon",
"TF_MedicSmokingPipe_Style1": "Evening",
"TF_SoldierCigar": "Soldier's Stogie",
"TF_SoldierCigar_Desc": "Sometimes a cigar is just a cigar. And sometimes, as is the case with this hand-rolled Soldier cigar, it's gravel, manure, human hair, and taco seasoning wrapped up in old band-aids.",
"Econ_Paint_Name": "Paint Color: %s1",
"TF_Clockwerk_Hat": "Clockwerk's Helm",
"TF_DotaSniper_Hat": "Sniper's Snipin' Glass",
"TF_Stormspirit_Hat": "Storm Spirit's Jolly Hat",
"TF_DotaGamescom2011_Hat_Desc": "DOTA 2 International Championship\nGamescom 2011",
"cp_fastlane_authors": "Arttu 'SK' Mäki",
"ctf_turbine_authors": "Flobster",
"cp_steel_authors": "Jamie 'Fishbus' Manson\nDan 'Irish Taxi Driver' Merboth\nFLOOR_MASTER",
"cp_egypt_final_authors": "Sean 'Heyo' Cutino",
"cp_junction_final_authors": "Sean 'Heyo' Cutino",
"arena_watchtower_authors": "Joshua 'JoshuaC' Shiflet",
"pl_hoodoo_final_authors": "Tim 'YM' Johnson\nJeroen 'Snipergen' Dessaux\nFay L. 'nineaxis' Fabry\nDrew 'Oxy' Fletcher",
"arena_offblast_final_authors": "Magnar 'insta' Jenssen",
"cp_yukon_final_authors": "Patrick 'MangyCarface' Mulholland\nFreya 'Acegikmo' Holmér",
"koth_harvest_final_authors": "Sean 'Heyo' Cutino",
"cp_freight_final1_authors": "Jamie 'Fishbus' Manson\nMitch 'ol' Robb",
"cp_coldfront_authors": "Eric 'Icarus' Wong\nDavid 'Selentic' Simon\nAeon 'Void' Bollig\nTim 'YM'Johnson",
"cp_mountainlab_authors": "Valentin '3DNJ' Levillain",
"cp_manor_event_authors": "Tim 'YM' Johnson\nAlex 'Rexy' Kreeger",
"plr_nightfall_authors": "Aaron 'Psy' Garcha\nPaul Good",
"pl_frontier_authors": "Patrick 'MangyCarface' Mulholland\nArhurt",
"koth_lakeside_authors": "Valentin '3DNJ' Levillain",
"cp_gullywash_final1_authors": "Jan 'Arnold' Laroy",
"koth_king_authors": "Valentin '3DNJ' Levillain",
"cp_process_final_authors": "Ian 'Scorpio Uprising' Cuslidge",
"cp_standin_final_authors": "Ian 'Scorpio Uprising' Cuslidge",
"cp_snakewater_final1_authors": "Toivo 'chojje' Sawen",
"cp_snowplow_authors": "Joe 'Fr0z3nR' Radak\nTim 'YM' Johnson\nJames 'McVee' McVinnie\nRebbacus\nZoey Smith\nDan Escobedo\nEd Harrison\nJohn Dekker",
"pl_borneo_authors": "Sean 'Heyo' Cutino\nMatt 'vhalin' Leahy",
"koth_suijin_authors": "Freyja\nE-Arkham\nKevin 'Ravidge' Brook\nMaxime 'Mimas Torres' Dupuis",
"ctf_2fort_invasion_authors": "Miguel 'BANG!' Melara\nThe Ronin\nMichael Egan\nAeon 'Void' Bollig\nMartin 'Chaofanatic' Ellis\nRyan 'Freeflow' Leitao\nHarlen 'UEAKCrash' Linke\nJames 'Retro' Wright\n",
"pd_watergate_authors": "Michael Egan\nLouie 'bakscratch' Turner\nIan 'Wgooch' Gooch\nNassim 'NassimO' Sadoun\nMiguel 'BANG!' Melara\nThijs 'Evil_Knevil' Van Gerrewey\nFissionMetroid101\nJennifer 'NeoDement' Burnett\nAeon 'Void' Bollig\nThe Ronin",
"arena_byre_authors": "Anya 'Idolon' Spadin\nGavin 'Equinoxo' Sawford\nGuy 'Gerbil' Ross\nHellJumper\nKevin 'Ravidge' Brook\nMatt 'Boylee' Boyle\nSebastian 'Seba' Grus\nUmbratile\nThe Ronin",
"koth_probed_authors": "Harlen 'UEAKCrash' Linke\nFissionMetroid101\nMiguel 'BANG!' Melara\nKevin 'Ravidge' Brook\nThe Ronin",
"cp_gorge_event_authors": "Paul 'puxorb' Broxup",
"cp_sunshine_event_authors": "Rebecca 'phi' Ailes\nKimberly 'iiboharz' Riswick\nHarlen 'UEAKCrash' Linke",
"koth_moonshine_event_authors": "Josh 'Hey You' Harris\nHarlen 'UEAKCrash' Linke\nJake 'Jukebox' Jackubowski\nPsyke",
"pl_millstone_event_authors": "Tomi 'ICS' Uurainen",
"pl_snowycoast_authors": "E-Arkham\nFissionMetroid101",
"cp_vanguard_authors": "Maxime 'Mimas Torres' Dupuis\nKevin 'Ravidge' Brook\nGavin 'Equinoxo' Sawford",
"ctf_landfall_authors": "Andrew 'Dr. Spud' Thompson\nFay L. 'nineaxis' Fabry\nMark 'Shmitz' Major",
"koth_highpass_authors": "Yannick 'Bloodhound' Milhahn\n'Psy'\nJesús 'Drawer' Vera",
"cp_sunshine_authors": "Rebecca 'phi' Ailes\nKimberly 'iiboharz' Riswick\nSebastian 'Seba' Grus\nMellowretro\nTim 'SediSocks' Brown Lees",
"cp_metalworks_authors": "Ian 'Scorpio Uprising' Cuslidge",
"pl_swiftwater_final1_authors": "Aaron 'Schwa' McCallen\nLemon",
"koth_maple_ridge_event_authors": "Sammy 'Berry' Bunting\nTheo 'TheoF114' Fletcher",
"pl_fifthcurve_event_authors": "Tomi 'ICS' Uurainen",
"pd_pit_of_death_authors": "Christian 'Roll' Richardson\nKenny 'Flip' Wheeler\nMichael Egan\nFissionMetroid101\nChristian James DeRosa",
"cp_mossrock_authors": "Freyja\nE-Arkham\nMichał 'AsG_Alligator' Byczko\nPEAR\nAndrew 'Dr. Spud' Thompson\nJake 'Xi.Cynx' Handlovic\nFuzzymellow\nAeon 'Void' Bollig\nNeal 'Blade x64' Smart\nHarlen 'UEAKCrash' Linke",
"koth_lazarus_authors": "Aeon 'Void' Bollig\nFuzzymellow\nTim 'SediSocks' Brown Lees\nSky\nBenjamin 'blaholtzen' Blåholtz\nStiffy360",
"plr_bananabay_authors": "Neal 'Blade x64' Smart\nJennifer 'NeoDement' Burnett\nPEAR\nStiffy360\nFuzzymellow\nAeon 'Void' Bollig\nFreyja",
"pl_enclosure_final_authors": "Michał 'AsG_Alligator' Byczko\nAeon 'Void' Bollig\nE-Arkham\nPEAR\nStiffy360\nAndrew 'Dr. Spud' Thompson\nFuzzymellow\nMaxime Dupuis\nFreyja\nIvan 'Crowbar' Sokolov",
"koth_brazil_authors": "Jérémie 'RaVaGe' Nicolas\nTyler 'Yyler' King\nSean 'Heyo' Cutino\nNassim 'NassimO' Sadoun\n",
"koth_bagel_event_authors": "Lauren 'Yrrzy' Godfrey\nHarlen 'UEAKCrash' Linke\nZach 'Exactol' Matuson\nSebastian 'Seba' Grus\nRebecca 'Phi' Ailes\nFreyja",
"pl_rumble_event_authors": "Tomi 'ICS' Uurainen\nRiley 'Sheltr' Aanestad\nMichał 'AsG_Alligator' Byczko\nZach 'Exactol' Matuson\nLiam 'Diva Dan' Moffitt",
"pd_monster_bash_authors": "Aeon 'Void' Bollig\nFuzzymellow\nPEAR\ndonhonk\nHarlen 'UEAKCrash' Linke\nTim 'SediSocks' Brown Lees\nLiam 'Diva Dan' Moffitt\nJennifer 'NeoDement' Burnett\nErik 'Colteh' Coltey",
"koth_slasher_authors": "Aeon 'Void' Bollig\nFuzzymellow\nTim 'SediSocks' Brown Lees\nKillohurtz\nMartin 'Chaofanatic' Ellis\nLauren 'Yrrzy' Godfrey\nAndrew 'Rogue13' Risch",
"pd_cursed_cove_event_authors": "Louie 'bakscratch' Turner\nJuha 'Jusa' Kuoppala\nSean 'boomsta' Troehler\nJordan 'hXX' LeBlanc\nEmNudge\nZach 'Exactol' Matuson\nNick 'Bobby BodyOdor' Baker\nDuncan 'Magnus' Welch\nNathan 'Yacan1' Dadey\nRoniña 'Py-Bun' Rodriguez\nStiffy360\nDeacon",
"koth_slaughter_event_authors": "Aeon 'Void' Bollig\nLiam 'Diva Dan' Moffitt\nFuzzymellow\nZoey Smith",
"pl_precipice_event_final_authors": "TheHorseStrangler\nTanookiSuit3",
"koth_megalo_authors": "Sammy 'Berry' Bunting\nChris 'Another Bad Pun' Williams\nLiam 'Diva Dan' Moffitt\nZach 'Exactol' Matuson\nAeon 'Void' Bollig\nChristoph 'Gadget' Manschitz\nIvan 'Crowbar' Sokolov\nKevin 'Ravidge' Brook\nTheo 'TheoF114' Fletcher",
"pl_hasslecastle_authors": "Smiley The Smile",
"pl_bloodwater_authors": "Ryan 'Chill' Foy\nElián 'iron' Rodríguez",
"koth_undergrove_event_authors": "Patrick 'Sweepertank' Preston\nAndrew 'Dr. Spud' Thompson\nE-Arkham\nLiam 'Diva Dan' Moffitt\nAeon 'Void' Bollig\nJuniper\nKevin 'Ravidge' Brook\nIvan 'Crowbar' Sokolov\nAlex 'MaccyF' MacFarquhar\nEm",
"pl_pier_authors": "Neal 'Blade x64' Smart\nBenjamin 'blaholtzen' Blåholtz\nErik 'Colteh' Coltey\nLiam 'Diva Dan' Moffitt\ndonhonk\nAndrew 'Dr. Spud' Thompson\nThijs 'Evil_Knevil' Van Gerrewey\nJuniper\nNassim 'NassimO' Sadoun\nDamian 'Populus' Błaszczyk\nKevin 'Ravidge' Brook\nTim 'SediSocks' Brown Lees\nSky\nAl 'Square' Rodgers\nAeon 'Void' Bollig\nZoey Smith",
"pd_snowville_event_authors": "Maxime 'Mimas Torres' Dupuis\nZach 'Exactol' Matuson\nVincent 'Vel0city' Swart\nJoe 'Fr0z3nR' Radak",
"ctf_snowfall_final_authors": "Nickolas 'Krazy' Fenech\nAndrew 'Dr. Spud' Thompson\nFay L. 'Nineaxis' Fabry\nMark 'Shmitz' Major\nZoey Smith\nTumby\nE-Arkham\ndonhonk\nLouie 'bakscratch' Turner\nNassim 'NassimO' Sadoun\nThijs 'Evil_Knevil' Van\nAeon 'Void' Bollig\nLauren 'Yrrzy' Godfrey\nZach 'Exactol' Matuson\nAlex 'Rexy' Kreeger\nTyler 'Yyler' King",
"pl_wutville_event_authors": "Andrew 'Rogue13' Risch",
"pd_farmageddon_authors": "Matthew 'MegapiemanPHD' Simmons\nPatrick 'Zeus' Hennessy\nAlex 'FGD5' Stewart\nBenjamin 'blaholtzen' Blåholtz\nAl 'Square' Rodgers\nTim 'SediSocks' Brown Lees\nJuniper\nAeon 'Void' Bollig\nSeb 'Tianes' Necula\nLiran 'Ducksink' Ohana",
"koth_synthetic_event_authors": "Matthew 'MegapiemanPHD' Simmons\nBenjamin 'blaholtzen' Blåholtz\nSeb 'Tianes' Necula\nAse 'Pont' Kirkham\nAlex 'FGD5' Stewart\nNick 'Frying Dutchman' Post\nLawrence 'hutty' Granroth",
"koth_los_muertos_authors": "Elián 'iron' Rodríguez\nRyan 'Chill' Foy\nMatthew 'Panckakebro' Hiller",
"cp_ambush_event_authors": "Tomi 'ICS' Uurainen\nTony 'Hakk1tus' Hakala",
"pl_terror_event_authors": "Tomi 'ICS' Uurainen",
"arena_lumberyard_event_authors": "Liam 'Diva Dan' Moffitt\nBenjamin 'blaholtzen' Blåholtz\nAlex 'FGD5' Stewart\nSeb 'Tianes' Necula\nAeon 'Void' Bollig\nErik 'Colteh' Coltey\nJuniper",
"pl_coal_event_authors": "Matthew 'Panckakebro' Hiller\nElián 'iron' Rodríguez\nPhe\nRyan 'Chill' Foy\nDenis 'xB33' Varchulik\nWilliam 'Cheesypuff' Bartley-Bolster\nOliver 'OverPovered' Pennanen",
"pl_breadspace_authors": "Bailey 'Glitch' Hodges\nJesse 'Custard1' Budd\nAlberto 'Petachepas' Zarzuela\nGrambee\nDylan 'doggoh' Lee\nOliver 'OverPovered' Pennanen\nChristoph 'Gadget' Manschitz\nPeter 'Tabby' Bryant\nWilliam 'Cheesypuff' Bartley-Bolster\nKirill 'Le Bruhe?' Ruzanov\nHugh 'HueZee_' Madoc Schneider\nBrandon 'Brantopias' Sinkovich\nhuman1",
"pl_chilly_authors": "Tomi 'ICS' Uurainen\nTyler 'Yyler' King\nAlex 'MaccyF' MacFarquhar",
"koth_cascade_authors": "Evan 'Defcon' LeBlanc\nAlex 'FGD5' Stewart\nLiam 'Diva Dan' Moffitt",
"cp_altitude_authors": "Evan 'Defcon' LeBlanc\nAlex 'FGD5' Stewart\nLiam 'Diva Dan' Moffitt",
"ctf_doublecross_snowy_authors": "Harlen 'UEAKCrash' Linke\nAeon 'Void' Bollig\nJuniper\nFreyja\nZoey Smith",
"koth_sawmill_event_authors": "Eric 'erk' Browning\nAeon 'Void' Bollig\nJuniper\nAlex 'FGD5' Stewart",
"ctf_helltrain_event_authors": "Matthew 'Panckakebro' Hiller\nElián 'iron' Rodríguez\nPhe\nDenis 'xB33' Varchulik\nRyan 'Chill' Foy\nCaleb 'Pixenal' Dawson\nWilliam 'Cheesypuff' Bartley-Bolster\nBattoign\nBailey 'Glitch2' Hodges\nEmNudge\nOliver 'OverPovered' Pennanen\nJames 'Piratefoodog' Russell",
"plr_hacksaw_event_authors": "Liam 'Diva Dan' Moffitt\nViscaedis\nAl 'Square' Rodgers\nE-Arkham\nSeb 'Tianes' Necula\nBenjamin 'blaholtzen' Blåholtz\nAeon 'Void' Bollig\nJuniper\nAlex 'FGD5' Stewart",
"ctf_crasher_authors": "Lauren 'Yrrzy' Godfrey\nAse 'pont' Kirkham\nLiam 'Diva Dan' Moffitt\nBenjamin 'Benjamoose' Rudman\nKimberly 'iiboharz' Riswick\nFreyja",
"pl_sludgepit_event_authors": "SirPontus\nMichał 'AsG_Alligator' Byczko\nWalter 'Waffe' Grönholm\nAlex 'Rexy' Kreeger",
"cp_spookeyridge_authors": "Harlen 'UEAKCrash' Linke\nJoshua 'HeyYou' Harris\nSeth 'xzzy' Graham\nPearForceOne\nFissionMetroid101\nAl 'Square' Rodgers\nLiam 'Diva Dan' Moffitt",
"cp_frostwatch_authors": "Elián 'iron' Rodríguez\nRyan 'Chill' Foy\nTristan 'Alox' Haguet\nBattoign\nLouie 'bakscratch' Turner",
"pl_frostcliff_authors": "Tomi 'ICS' Uurainen",
"pl_rumford_event_authors": "Neil 'Nesman' Stottler\nEric 'erk' Browning\nAeon 'Void' Bollig\nLouie 'bakscratch' Turner\nAlex 'FGD5' Stewart\nPatrick 'Zeus' Hennessy\nIzotope",
"ctf_frosty_authors": "Valentin 'ElectroSheep' Levillain\nSimon 'Em' Aublet",
"cp_gravelpit_snowy_authors": "Aaron 'Aar' Pearson\nJoel 'zythe_' Morscher\nLauren 'Yrrzy' Godfrey\nLiam 'Diva Dan' Moffitt\nHarlen 'UEAKCrash' Linke",
"koth_sharkbay_authors": "Vasilis 'Billo' Chatzikostas\nPatrick 'Zeus' Hennessy\nSeb 'Tianes' Necula\nBenjamin 'blaholtzen' Blåholtz\nNickolas 'KrazyZark' Fenech",
"koth_rotunda_authors": "Paul 'Brokk' Clausen\nRhafael 'Rhamkin' Oliveira\nAlex 'FGD5' Stewart\nRoman 'FanCyy' Malashkevich\nBertrand 'Tails8521' Penguilly\nLouie 'bakscratch' Turner\nChristoph 'Gadget' Manschitz\nKevin 'Ravidge' Brook\nAeon 'Void' Bollig\nJuniper\nJesse 'Custard1' Budd",
"pl_phoenix_authors": "Evan 'Defcon' LeBlanc\nLiam 'Diva Dan' Moffitt\nNickolas 'KrazyZark' Fenech\nNeal 'Blade x64' Smart\nStuffy360",
"pl_cashworks_authors": "Wojciech 'eerieone' Michalak\nMoritz 'moe012' Horn\nSean 'Artesia' Pennock",
"pl_venice_authors": "JimWood\nTanookiSuit3",
"cp_reckoner_authors": "Bec 'phi' Ailes\nKimberly 'iiboharz' Riswick\nFreyja\nE-Arkham\nMaxime 'Fubar' Dupuis\nZoey Smith\nJen 'NeoDement' Burnett\nAl 'Square' Rodgers\n'Rito\nAlex 'Rexy' Kreeger\nSebastian Grus",
"cp_sulfur_authors": "Freyja\nE-Arkham\nSarexicus\n'Rito\ndonhonk\nKimberly 'iiboharz' Riswick\nLauren 'Yrrzy' Godfrey\nMaxime 'Fubar' Dupuis",
"cp_hardwood_final_authors": "Ben 'Squishy' Dowman\nEmil Sharafeev\nFaye\nPuinguin \nLiam 'Diva Dan' Moffitt\nE-Arkham\nRoman 'FanCyy' Malashkevich",
"ctf_pelican_peak_authors": "Chris 'Another Bad Pun' Williams\nBec 'phi' Ailes\nJames 'chin' Hayes\nEric 'erk' Browning\nLiam 'Diva Dan' Moffitt\nStuffy360\nAeon 'Void' Bollig\nNickolas 'KrazyZark' Fenech\nEmil Sharafeev",
"pd_selbyen_authors": "Joel 'zythe_' Morscher\nRhafael 'Rhamkin' Oliveira\nAlex 'FGD5' Stewart\nBenjamin 'blaholtzen' Blåholtz\nMatthew 'MegapiemanPHD' Simmons\nLo-fi Longcat",
"vsh_tinyrock_authors": "Jess 'Muddy' Dabbs\nLizard of Oz\nJason 'Yaki' Herman\nSzabó 'Maxxy' Attila\nMaxim 'VellyVice' Streltsov\nJames M.\nJoaquim 'JPRAS' Silva\nMatthew 'MegapiemanPHD' Simmons",
"vsh_distillery_authors": "Phe\nLizard Of Oz\nSonoma 'Sono' Bryer\nSzabó 'Maxxy' Attila\nMatthew 'MegapiemanPHD' Simmons\nStuffy 360\nJason 'Yaki' Herman\nMaxim 'VellyVice' Streltsov\nJames M.\nJoaquim 'JPRAS' Silva\nAeon 'Void' Bollig",
"vsh_skirmish_authors": "John 'MilkMaster72' Worden\nLizard Of Oz\nJason 'Yaki' Herman\nSzabó 'Maxxy' Attila\nJoaquim 'JPRAS' Silva\nMatthew 'MegapiemanPHD' Simmons\nJames M.\nMaxim 'VellyVice' Streltsov\nAeon 'Void' Bollig\nLouie 'bakscratch' Turner",
"vsh_nucleus_authors": "John 'MilkMaster72' Worden\nLizard Of Oz\nJason 'Yaki' Herman\nSzabó 'Maxxy' Attila\nJoaquim 'JPRAS' Silva\nMatthew 'MegapiemanPHD' Simmons\nJames M.\nMaxim 'VellyVice' Streltsov\nAeon 'Void' Bollig",
"arena_perks_authors": "Philippe 'Le Codex' Lefebvre\nLiam 'Diva Dan' Moffitt\nDaniel 'DJ' Bennett\nSeb 'Tianes' Necula\nAse 'pont' Kirkham\nE-Arkham",
"koth_slime_authors": "Harlen 'UEAKCrash' Linke\nFreyja\nBenjamin 'blaholtzen' Blåholtz\nAl 'Square' Rodgers\nAlex 'FGD5' Stewart\nLizard of Oz\nJordan 'hXX' LeBlanc\nSeb 'Tianes' Necula",
"cp_lavapit_final_authors": "Stack Man",
"pd_mannsylvania_authors": "Phe\nArtemy 'FlowerShopGuy' Maltsev\nSonoma 'Sono' Bryer\nMatthew 'MegapiemanPHD' Simmons\nOliver 'OverPovered' Pennanen\nKirill 'BadassCook' Ruzanov",
"cp_degrootkeep_rats_authors": "Aeon 'Void' Bollig\nJuniper\nHarlen 'UEAKCrash' Linke\nZoey Smith\nAlex 'Rexy' Kreeger",
"pl_spineyard_authors": "Matthew 'Panckakebro' Hiller\nElián 'iron' Rodríguez\nDenis 'xB33' Varchulik\nNorman 'Mikusch' Masanek",
"pl_corruption_authors": "Eric 'erk' Browning\nMatthew 'MegapiemanPHD' Simmons\nRhafael 'Rhamkin' Oliveira\nMatthew 'Panckakebro' Hiller\nVasilis 'Billo' Chatzikostas",
"zi_murky_authors": "netmuck\nLiam 'Diva Dan' Moffitt\nE-Arkham",
"zi_atoll_authors": "Patrik 'Nat-Tea' Naplava\nEmil Sharafeev\nDanni 'AttaKat' Bestford\nBen 'Squishy' Dowman\nJesse 'Custard1' Budd\nAlex 'Zz' Elliott\nLiam 'Diva Dan' Moffitt\nnetmuck",
"zi_woods_authors": "George 'I dinne ken' Norman\nnetmuck\nLiam 'Diva Dan' Moffitt\nStuffy360\nAeon 'Void' Bollig\nEmil Sharafeev",
"zi_sanitarium_authors": "Matthew 'Panckakebro' Hiller\nnetmuck\nLiam 'Diva Dan' Moffitt\nStuffy360\nElián 'iron' Rodríguez\nLouie 'bakscratch' Turner",
"zi_devastation_final1_authors": "Jordan 'Ismaciodismorphus' La Rose\nnetmuck\nLiam 'Diva Dan' Moffitt\nAeon 'Void' Bollig\nAlex 'FGD5' Stewart",
"koth_snowtower_authors": "Aeon 'Void' Bollig\nAl 'Square' Rodgers\nEArkham\nKeldos\nKrazyZark\nMaxime 'fubar' Dupuis\nTim 'sedisocks' BL\nZach 'Exactol' Matuson",
"koth_krampus_authors": "Artur Eichmann\nJoel 'zythe_' Morscher\nPhe\nLizard Of Oz\nsky\nLothudus\nParker 'razoldon'\nIlia 'dotflare'\nYiming 'Coolchou' Zhao\nBen 'doctorsteen' Meyer\nLerd\nHirschVA",
"ctf_haarp_authors": "Andrew 'Dr. Spud' Thompson\nFay L. 'nineaxis' Fabry\nAlex 'Rexy' Kreeger\nJim 'Timberghost' Wiser",
"cp_brew_authors": "Liam 'Diva Dan' Moffitt\nEmil Sharafeev\nAlex 'FGD5' Stewart\nAeon 'Void' Bollig\nStuffy360\nTim 'Sedisocks' BL",
"plr_hacksaw_authors": "Liam 'Diva Dan' Moffitt\nViscaedis\nAl 'Square' Rodgers\nE-Arkham\nAeon 'Void' Bollig\nJuniper\nAlex 'FGD5' Stewart\nLauren 'Yrrzy' Godfrey",
"ctf_turbine_winter_authors": "Stuffy360\nBill Johnston\nChickenman\nAlex 'FGD5' Stewart",
"cp_carrier_authors": "John 'MilkMaster72' Worden\nLizard Of Oz\nAeon 'Void' Bollig\nJuniper\nYiming 'Coolchou' Zhao\ntheatreTECHIE\nPearForceOne\nHarlen 'UEAKCrash' Linke\nZoey Smith\nTim 'SediSocks' BL\nJen 'NeoDement' Burnett\nErik 'Colteh' Coltey\nPopulus\nAl 'Square' Rodgers\nBenjamin 'blaholtzen' Blåholtz\nLogan McCloud\ndonhonk",
"pd_galleria_authors": "Patrick 'Zeus' Hennessy\nJames Jameson\nGabriel 'MCL15' Macken\nAlex 'FGD5' Stewart\nPaul 'Brokk' Clausen\nChandler 'OctoBlitz' Dunaway\nStuffy360\nKirill 'BadassCook' Ruzanov\nBrandon 'Bonk Nickeltoon' Koller\nRobert 'Spleep' Chisholm",
"pl_emerge_authors": "Jess 'Muddy' Dabbs\nJoe 'FruitySnacks' Radak\nFreyja\nMinty 'Katsu! :3' Aulenrose",
"pl_camber_authors": "Louie 'bakscratch' Turner\nNick 'nickybakes' Baker\nLiam 'Diva Dan' Moffitt",
"pl_embargo_authors": "João 'Hoppkins' Marcos\nPatrick 'Zeus' Hennessy\nRodrigo 'Rapoza Dynamica' Carneri\nTorkil 'TheLazerSofa' Malvik Bidtnes\nLizard Of Oz\nVasilis 'Billo' Chatzikostas\nMaksim 'Velly' Streltsov\nSzabó 'Maxxy' Attila\nElian 'iron' Rodriguez\nSarah Jane Eve\nChandler 'OctoBlitz' Dunaway\nAlex 'FGD5' Stewart\nNick 'nickybakes' Baker\nAudionexx",
"pl_odyssey_authors": "Evan 'Defcon' LeBlanc\nNickolas 'KrazyZark' Fenech\nFreyja\nSarexicus",
"koth_megaton_authors": "Aeon 'Void' Bollig\nJuniper\nLiam 'Diva Dan' Moffitt\nSky\nFreyja\ndonhonk",
"koth_cachoeira_authors": "Aleksei 'Fiddleford' Istomin\nRhafael 'Rhamkin' Oliveira\nTorkil 'TheLazerSofa' Malvik Bidtnes\nRodrigo 'Rapoza Dynamica' Carneri\nPatrick 'Zeus' Hennessy\nOperabay\nSzabó 'Maxxy' Attila\nJonathan 'Setry' Gitlits\nArtemy 'FlowerShopGuy' Maltsev\nJustin 'Kerpongle' Lindstrom\nNickolas 'krazyZark' Fenech\n'Rito\nJuniper",
"cp_overgrown_authors": "Harlen 'UEAKCrash' Linke\nPearForceOne\nJuniper\nAeon 'Void' Bollig\nErik 'Colteh' Coltey\nFreyja\nE-Arkham",
"cp_hadal_authors": "Juha 'Jusa' Kuoppala\nMaxime 'Fubar' Dupuis",
"ctf_applejack_authors": "Rhafael 'Rhamkin' Oliveira\nAl 'Square' Rodgers\nYiming 'Coolchou' Zhao\nAlex 'FGD5' Stewart\nAeon 'Void' Bollig",
"pd_atom_smash_authors": "Aeon 'Void' Bollig\nJuniper\nMike 'CornetTheory' Hillard\nLiam 'Diva Dan' Moffitt\nSky\nFreyja\nZoey\nBenjamin 'blaholtzen' Blåholtz\nPearForceOne\nTim 'SediSocks' BL",
"cp_canaveral_5cp_authors": "Jesse 'Custard1' Budd\nPatrick 'Zeus' Hennessy\nWilliam 'Cheesypuff' Bartley-Bolster\nBrandon 'Bonk Nickeltoon' Koller\nBailey 'Glitch' Hodges\nNickolas 'KrazyZark' Fenech\nLouie 'bakscratch' Turner",
"cp_burghausen_authors": "Christoph 'Gadget' Manschitz",
"koth_toxic_authors": "Matthew 'Panckakebro' Hiller\nElián 'iron' Rodríguez\nDenis 'xB33' Varchulik\nPhe\nStuffy360\nLouie 'bakscratch' Turner",
"cp_darkmarsh_authors": "Elián 'iron' Rodríguez\nMatthew 'Panckakebro' Hiller\nRyan 'Chill' Foy",
"cp_freaky_fair_authors": "Emil Sharafeev\nGeorge 'I dinne ken' Norman\nLiam 'Diva Dan' Moffitt\nPatrik 'Nat-Tea' Naplava\nAeon 'Void' Bollig\nWilson\nStuffy360\nRanily",
"tow_dynamite_authors": "Will Alfred\nJordan 'Ismac' La Rose\nLizard Of Oz\nHaau\nAydan\nNeal 'Blade x64' Smart\nLiam 'Diva Dan' Moffitt",
"pd_circus_authors": "Liam 'Diva Dan' Moffitt\nAeon 'Void' Bollig\ndonhonk",
"vsh_outburst_authors": "Lizard Of Oz\nPhe\nSzabó 'Maxxy' Attila\nMaksim 'VellyVice' Streltsov\nMatthew 'MegapiemanPHD' Simmons\nJames M.\nJason 'Yaki' Herman\nJoaquim 'JPRAS' Silva\nStuffy360",
"zi_blazehattan_authors": "Emil Sharafeev\nPatrik 'Nat-Tea' Naplava\nAeon 'Void' Bollig\nLiam 'Diva Dan' Moffitt\nnetmuck",
"koth_overcast_final_authors": "Slowmotion Milk\nEthan Stokes\nDr Vlad Crazy",
"cp_fortezza_authors": "Josh 'Gruppy' Baughman\nNickolas 'KrazyZark' Fenech\nKubie\nAlien31",
"ctf_penguin_peak_authors": "Chris 'Another Bad Pun' Williams\nBec 'phi' Ailes\nJames 'chin' Hayes\nEric 'erk' Browning\nLiam 'Diva Dan' Moffitt\nStuffy360\nAeon 'Void' Bollig\nNickolas 'KrazyZark' Fenech\nAl 'Square' Rodgers\nSam D. Wich",
"pl_patagonia_authors": "Elián 'iron' Rodríguez\nMatthew 'Panckakebro' Hiller\nJoão 'Hoppkins' Marcos\nStuffy360",
"plr_cutter_authors": "Paul 'puxorb' Broxup\nBrie\nNickolas 'KrazyZark' Fenech\nLiam 'Diva Dan' Moffitt\nAeon 'Void' Bollig\nErik 'Colteh' Coltey\nExtra Ram\nMattie Konig\nTim 'Sedisocks' Brown Lees\nPatrick 'Zeus' Hennessy\nZoey Smith",
"vsh_maul_authors": "Matthew Scott 'MegapiemanPHD' Simmons\nBrandon 'Bonk Nickeltoon' Koller\nSzabó 'Maxxy' Attila\nPatrick 'Zeus' Hennessy\nLizard Of Oz\nStuffy360\nJames Jameson\nPhe\nMattie Konig\nAlex 'FGD5' Stewart\nMaksim 'Velly' Streltsov\nJason 'Yaki' Herman\nJesse 'Custard1' Budd\nJoaquim 'JPRAS' Silva\nSamuel 'ChargingTurnip' Turner\nAlex 'Lacry' Couto\nJames M.\nTorkil 'TheLazerSofa' Malvik Bidtnes\nSky",
"pl_citadel_authors": "Evan 'Defcon' LeBlanc\nNickolas 'KrazyZark' Fenech\nSarexicus\nFreyja\nFicool2",
"pl_aquarius_authors": "Alien31\nAndrew 'Bengali Hedgehog' Mishchuk\nChristoph 'Gadget' Manschitz\nDansky\nLogan 'Cipherlock' Eaton\nLucky\nMitchell 'AltraNade' Leyte\nNeal 'Blade x64' Smart\nSzabó 'Maxxy' Attila\nTorkil 'TheLazerSofa' Malvik Bidtnes\nMaxime 'Fubar' Dupuis",
"cp_fulgur_authors": "Michał 'AsG_Alligator' Byczko\nAeon 'Void' Bollig\nKimberly 'iiboharz' Riswick\nAlex 'Rexy' Kreeger\nJuniper\nBerry\nMaxime 'Fubar' Dupuis",
"cp_cargo_authors": "Phe\nJoel 'zythe_' Morscher\nIlija 'Potat Master' Radošević\nChristoph 'Gadget' Manschitz\nFreyja\nAlex 'FGD5' Stewart\nBenjamin 'blaholtzen' Blåholtz\nSonoma 'Sono' Bryer",
"cp_conifer_authors": "Michał 'AsG_Alligator' Byczko\nAeon 'Void' Bollig\nKimberly 'iiboharz' Riswick\nIvan 'Crowbar' Sokolov\nEArkham\nAlex 'MaccyF' MacFarquhar\nMaxime 'Fubar' Dupuis",
"koth_boardwalk_authors": "Aeon 'Void' Bollig\nJuniper\nCody 'MasterGir' Littlefield\nLiam 'Diva Dan' Moffitt\nFreyja\nZoey\nBenjamin 'blaholtzen' Blåholtz",
"koth_blowout_authors": "Joel 'zythe_' Morscher\nPhe\nAlex 'FGD5' Stewart\nBenjamin 'blaholtzen' Blåholtz\nLothudus\nMitchell 'AltraNade' Leyte",
"koth_mannhole_authors": "Harlen 'UEAKCrash' Linke\nAeon 'Void' Bollig\nBenjamin 'blaholtzen' Blåholtz\nAlex 'FGD5' Stewart\nAl 'Square' Rodgers\nNorman 'Mikusch' Masanek\nJuniper\ndonhonk\nFreyja",
"koth_demolition_authors": "Entropy Tempus\nAndrea 'DoctorDoomtrain64' DeStephan\nHunter 'Seacat08' Way\nGoobert",
"ctf_pressure_authors": "Mitchell 'AltraNade' Leyte\nMuhNamesGreen\nDansky\nJoel 'zythe_' Morscher\nJames 'lolripk' Stevens\nSzabó 'Maxxy' Attila\nJames 'McGuinnsBook' McGuinn\nAlien31\nPhe\nGlebotron",
"cp_cowerhouse_authors": "CanadianBill\nAlex 'FGD5' Stewart\nPatrick 'Zeus' Hennessy\nLiam 'Diva Dan' Moffitt\nPearForceOne",
"koth_dusker_authors": "Tristan 'Alox' Haguet\nJoel 'zythe_' Morscher\nAeon 'Void' Bollig\nLothudus\nStuffy360",
"arena_afterlife_authors": "John 'Piogre' Wolfe\nLizard of Oz\nMatvey 'ImAware' Usatov\nHirschVA\nIsaac 'IJCT' Cortissoz",
"ctf_doublecross_event_authors": "Harlen 'UEAKCrash' Linke\nLiam 'Diva Dan' Moffitt\nDaniel 'DJ' Bennett",
"sd_marshlands_authors": "Tristan 'Alox' Haguet\nLothudus",
"TF_YourStats": "Your Stats",
"TF_DuckPromoList": "-All-Class cosmetic with eleven styles\n-Tracks your stats during the End of the Line event\n-View leaderboards and compete with your friends\n-Sales support the End of the Line team",
"TF_GetDucky": "Get Ducky",
"TF_Contributed": "Thanks %playername% for supporting this map!",
"TF_DuelLeaderboard_Title": "Top Duel Wins",
"Attrib_duck_badge_level": "Duck Power : %s1 / 5",
"Attrib_duck_rating": "Duck XP Level : %s1",
"Attrib_eotl_early_supporter": "Early Supporter of End of the Line Community Update",
"Attrib_duckstreaks": "Duckstreaks Active",
"Duck_ViewLeaderboards": "View Leaderboards",
"ToolDuckTokenConfirm": "Are you sure you want to use the Duck Token\non this Duck Journal?",
"TF_Tool_DuckToken": "Duck Token",
"TF_Tool_DuckToken_Desc": "Use to increase the Power level of an existing Duck Journal.\nJournals have a MAX level of 5.\n\nHigher level badges can find more ducks.\nAfter January 5th, 2015, ducks can no longer be found.",
"TF_Item_DuckBadge": "Duck Journal",
"TF_Item_DuckBadge_Desc": "Equip in the ActionSlot to increase duck drops.\nUse Duck Tokens to increase power level.\nHigher levels give increased duck drops.",
"TF_Armory_Item_DuckBadge": "Equip in the ActionSlot to increase your ability to find ducks.\nUse Duck Tokens to increase the badges level to MAX 5.\n\nInspect in your backpack to view friend leaderboards.\nAfter January 5th, 2015, ducks cannot be found and leaderboards will be locked.\n\nSales support the End of the Line team.",
"TF_DuckBadge_Style0": "None",
"TF_DuckBadge_Style1": "Scout",
"TF_DuckBadge_Style2": "Sniper",
"TF_DuckBadge_Style3": "Soldier",
"TF_DuckBadge_Style4": "Demoman",
"TF_DuckBadge_Style5": "Medic",
"TF_DuckBadge_Style6": "Heavy",
"TF_DuckBadge_Style7": "Pyro",
"TF_DuckBadge_Style8": "Spy",
"TF_DuckBadge_Style9": "Engineer",
"TF_DuckBadge_Style10": "Quackston Hale",
"TF_Duck_Level": "Level",
"TF_Duck_XP": "Duck XP",
"TD_Duck_XPToNextLevel": "Duck XP to next level:",
"TF_DUCK_SCORING_OVERALL_RATING": "Duck Experience Points",
"TF_DUCK_SCORING_TEAM_PICKUP_MY_DUCKS": "Team Captured",
"TF_DUCK_SCORING_PERSONAL_PICKUP_DEFENDED": "Recovered",
"TF_DUCK_SCORING_PERSONAL_PICKUP_OFFENSE": "Captured",
"TF_DUCK_SCORING_PERSONAL_PICKUP_OBJECTIVE": "Objective",
"TF_DUCK_SCORING_PERSONAL_GENERATION": "Created",
"TF_DUCK_SCORING_PERSONAL_BONUS_PICKUP": "Quackston Hales",
"TF_Duck_Stats_Desc": "Your personal stats recorded during the End of the Line event that occurs between December 8, 2014, through January 5, 2015.",
"TF_DUCK_SCORING_OVERALL_RATING_desc": "Duck XP amongst you and your friends.",
"TF_DUCK_SCORING_TEAM_PICKUP_MY_DUCKS_desc": "Number of ducks your team picked up that you helped create.\n\n3 Duck XP each",
"TF_DUCK_SCORING_PERSONAL_PICKUP_DEFENDED_desc": "Number of ducks you picked up that were dropped by your team.\n\n1 Duck XP each",
"TF_DUCK_SCORING_PERSONAL_PICKUP_OFFENSE_desc": "Number of ducks you picked up that were dropped by the opposite team.\n\n3 Duck XP each",
"TF_DUCK_SCORING_PERSONAL_PICKUP_OBJECTIVE_desc": "Number of ducks you picked up spawned by doing objectives.\n\n3 Duck XP each",
"TF_DUCK_SCORING_PERSONAL_GENERATION_desc": "Number of ducks you helped make the enemy drop.\n\n3 Duck XP each",
"TF_DUCK_SCORING_PERSONAL_BONUS_PICKUP_desc": "Number of special ducks you picked up.\n\n50 Duck XP each",
"TF_MapAuthors_Community_Title": "A Community Map Made By",
"TF_MapDonators_Title": "Supporters (%s1 Worldwide!)",
"TF_WorldTraveler": "World Traveler's Hat",
"TF_WorldTraveler_Desc": "Given to generous souls who have donated to community map makers. The effect will only be visible while on a map that has been donated towards!",
"TF_Egypt": "Egypt",
"TF_MapToken_Egypt": "Map Stamp - Egypt",
"TF_MapToken_Egypt_Desc": "An Attack/Defend Control Point Map\n\nMade by Sean 'Heyo' Cutino\n\nPurchasing this item directly supports the creator of the Egypt community map.  Show your support today!",
"TF_Coldfront": "Coldfront",
"TF_MapToken_Coldfront": "Map Stamp - Coldfront",
"TF_MapToken_Coldfront_Desc": "A Control Point Map\n\nMade by Eric 'Icarus' Wong, David 'Selentic' Simon, Aeon 'Void' Bollig, and Tim 'YM'Johnson\n\nPurchasing this item directly supports the creators of the Coldfront community map.  Show your support today!",
"TF_Fastlane": "Fastlane",
"TF_MapToken_Fastlane": "Map Stamp - Fastlane",
"TF_MapToken_Fastlane_Desc": "A Control Point Map\n\nMade by Arttu 'SK' Mäki\n\nPurchasing this item directly supports the creator of the Fastlane community map.  Show your support today!",
"TF_Turbine": "Turbine",
"TF_MapToken_Turbine": "Map Stamp - Turbine",
"TF_MapToken_Turbine_Desc": "A Capture the Flag Map\n\nMade by Flobster\n\nPurchasing this item directly supports the creator of the Turbine community map.  Show your support today!",
"TF_Steel": "Steel",
"TF_MapToken_Steel": "Map Stamp - Steel",
"TF_MapToken_Steel_Desc": "An Attack/Defend Control Point Map\n\nMade by Jamie 'Fishbus' Manson, Dan 'Irish Taxi Driver' Merboth, and FLOOR_MASTER\n\nPurchasing this item directly supports the creators of the Steel community map.  Show your support today!",
"TF_Junction": "Junction",
"TF_MapToken_Junction": "Map Stamp - Junction",
"TF_MapToken_Junction_Desc": "An Attack/Defend Control Point Map\n\nMade by Sean 'Heyo' Cutino\n\nPurchasing this item directly supports the creator of the Junction community map.  Show your support today!",
"TF_Watchtower": "Watchtower",
"TF_MapToken_Watchtower": "Map Stamp - Watchtower",
"TF_MapToken_Watchtower_Desc": "An Arena Map\n\nMade by Joshua 'JoshuaC' Shiflet\n\nPurchasing this item directly supports the creator of the Watchtower community map.  Show your support today!",
"TF_Hoodoo": "Hoodoo",
"TF_MapToken_Hoodoo": "Map Stamp - Hoodoo",
"TF_MapToken_Hoodoo_Desc": "A Payload Map\n\nMade by Tim 'YM' Johnson, Jeroen 'Snipergen' Dessaux, Fay L. 'nineaxis' Fabry, and Drew 'Oxy' Fletcher\n\nPurchasing this item directly supports the creators of the Hoodoo community map.  Show your support today!",
"TF_Offblast": "Offblast",
"TF_MapToken_Offblast": "Map Stamp - Offblast",
"TF_MapToken_Offblast_Desc": "An Arena Map\n\nMade by Magnar 'insta' Jenssen\n\nPurchasing this item directly supports the creator of the Offblast community map.  Show your support today!",
"TF_Yukon": "Yukon",
"TF_MapToken_Yukon": "Map Stamp - Yukon",
"TF_MapToken_Yukon_Desc": "A Control Point Map\n\nMade by Patrick 'MangyCarface' Mulholland and Freya 'Acegikmo' Holmér\n\nPurchasing this item directly supports the creators of the Yukon community map.  Show your support today!",
"TF_Harvest": "Harvest",
"TF_MapToken_Harvest": "Map Stamp - Harvest",
"TF_MapToken_Harvest_Desc": "A King of the Hill Map\n\nMade by Sean 'Heyo' Cutino\n\nPurchasing this item directly supports the creator of the Harvest community map.  Show your support today!",
"TF_Freight": "Freight",
"TF_MapToken_Freight": "Map Stamp - Freight",
"TF_MapToken_Freight_Desc": "A Control Point Map\n\nMade by Jamie 'Fishbus' Manson and Mitch 'ol' Robb\n\nPurchasing this item directly supports the creators of the Freight community map.  Show your support today!",
"TF_MountainLab": "Mountain Lab",
"TF_MapToken_MountainLab": "Map Stamp - Mountain Lab",
"TF_MapToken_MountainLab_Desc": "An Attack/Defend Control Point Map\n\nMade by Valentin '3DNJ' Levillain\n\nPurchasing this item directly supports the creator of the Mountain Lab community map.  Show your support today!",
"TF_ManorEvent": "Mann Manor",
"TF_MapToken_ManorEvent": "Map Stamp - Mann Manor",
"TF_MapToken_ManorEvent_Desc": "An Attack/Defend Control Point Map\n\nMade by Tim 'YM' Johnson and Alex 'Rexy' Kreeger\n\nPurchasing this item directly supports the creators of the Mann Manor community map.  Show your support today!",
"TF_Nightfall": "Nightfall",
"TF_MapToken_Nightfall": "Map Stamp - Nightfall",
"TF_MapToken_Nightfall_Desc": "A Payload Race Map\n\nMade by Aaron 'Psy' Garcha and Paul Good\n\nPurchasing this item directly supports the creators of the Nightfall community map.  Show your support today!",
"TF_Frontier": "Frontier",
"TF_MapToken_Frontier": "Map Stamp - Frontier",
"TF_MapToken_Frontier_Desc": "A Payload Map\n\nMade by Patrick 'MangyCarface' Mulholland and Arhurt\n\nPurchasing this item directly supports the creators of the Frontier community map.  Show your support today!",
"TF_Lakeside": "Lakeside",
"TF_MapToken_Lakeside": "Map Stamp - Lakeside",
"TF_MapToken_Lakeside_Desc": "A King of the Hill Map\n\nMade by Valentin '3DNJ' Levillain\n\nPurchasing this item directly supports the creator of the Lakeside community map.  Show your support today!",
"TF_Gullywash": "Gullywash",
"TF_MapToken_Gullywash": "Map Stamp - Gullywash",
"TF_MapToken_Gullywash_Desc": "A Control Point Map\n\nMade by Jan 'Arnold' Laroy\n\nPurchasing this item directly supports the creator of the Gullywash community map.  Show your support today!",
"TF_KongKing": "Kong King",
"TF_MapToken_KongKing": "Map Stamp - Kong King",
"TF_MapToken_KongKing_Desc": "A King of the Hill Map\n\nMade by Valentin '3DNJ' Levillain\n\nPurchasing this item directly supports the creator of the Kong King community map.  Show your support today!",
"TF_Map_Process": "Process",
"TF_MapToken_Process": "Map Stamp - Process",
"TF_MapToken_Process_Desc": "A Control Point Map\n\nMade by Ian 'Scorpio Uprising' Cuslidge\n\nPurchasing this item directly supports the creator of the Process community map.  Show your support today!",
"TF_Map_Standin": "Standin",
"TF_MapToken_Standin": "Map Stamp - Standin",
"TF_MapToken_Standin_Desc": "A Control Point Map\n\nMade by Ian 'Scorpio Uprising' Cuslidge\n\nPurchasing this item directly supports the creator of the Standin community map.  Show your support today!",
"TF_Map_Snakewater": "Snakewater",
"TF_MapToken_Snakewater": "Map Stamp - Snakewater",
"TF_MapToken_Snakewater_Desc": "A Control Point Map\n\nMade by Toivo 'chojje' Sawen\n\nPurchasing this item directly supports the creator of the Snakewater community map.  Show your support today!",
"TF_Map_Snowplow": "Snowplow",
"TF_MapToken_Snowplow": "Map Stamp - Snowplow",
"TF_MapToken_Snowplow_Desc": "A Control Point Map\n\nMade by Joe 'Fr0z3nR' Radak, Tim 'YM' Johnson, James 'McVee' McVinnie, Rebbacus, Zoey 'Sexy Robot' Smith, Dan Escobedo, Ed Harrison, and John Dekker\n\nPurchasing this item directly supports the creators of the Snowplow community map.  Show your support today!",
"TF_MapToken_Snowplow_AdText": "-Purchasing this item directly supports the creators of the Snowplow community map.",
"TF_Map_Borneo": "Borneo",
"TF_MapToken_Borneo": "Map Stamp - Borneo",
"TF_MapToken_Borneo_Desc": "A Payload Map\n\nMade by Sean 'Heyo' Cutino and Matt 'vhalin' Leahy\n\nPurchasing this item directly supports the creators of the Borneo community map.  Show your support today!",
"TF_MapToken_Borneo_AdText": "-Purchasing this item directly supports the creators of the Borneo community map.",
"TF_Map_Suijin": "Suijin",
"TF_MapToken_Suijin": "Map Stamp - Suijin",
"TF_MapToken_Suijin_Desc": "A King of the Hill Map\n\nMade by Freyja, E-Arkham, Kevin 'Ravidge' Brook, and Maxime 'Fubar' Dupuis\n\nPurchasing this item directly supports the creators of the Suijin community map.  Show your support today!",
"TF_MapToken_Suijin_AdText": "-Purchasing this item directly supports the creators of the Suijin community map.",
"TF_Map_2FortInv": "2Fort Invasion",
"TF_MapToken_2FortInv": "Map Stamp - 2Fort Invasion",
"TF_MapToken_2FortInv_Desc": "A Capture the Flag Map\n\nMade by Miguel 'BANG!' Melara, The Ronin, Michael Egan, Aeon 'Void' Bollig, Martin 'Chaofanatic' Ellis, Ryan 'Freeflow' Leitao, Harlen 'UEAKCrash' Linke, and James 'Retro' Wright\n\nPurchasing this item directly supports the creators of the 2Fort Invasion community map.  Show your support today!",
"TF_MapToken_2FortInv_AdText": "-Purchasing this item directly supports the creators of the 2Fort Invasion community map.",
"TF_Map_Probed": "Probed",
"TF_MapToken_Probed": "Map Stamp - Probed",
"TF_MapToken_Probed_Desc": "A King of the Hill Map\n\nMade by Harlen 'UEAKCrash' Linke, FissionMetroid101, Miguel 'BANG!' Melara, Kevin 'Ravidge' Brook, and The Ronin\n\nPurchasing this item directly supports the creators of the Probed community map.  Show your support today!",
"TF_MapToken_Probed_AdText": "-Purchasing this item directly supports the creators of the Probed community map.",
"TF_Map_Watergate": "Watergate",
"TF_MapToken_Watergate": "Map Stamp - Watergate",
"TF_MapToken_Watergate_Desc": "A Player Destruction Map\n\nMade by Michael Egan, Louie 'bakscratch' Turner, Ian 'Wgooch' Gooch, Nassim 'NassimO' Sadoun, Miguel 'BANG!' Melara, Thijs 'Evil_Knevil' Van Gerrewey, FissionMetroid101, Jennifer 'NeoDement' Burnett, Aeon 'Void' Bollig, and The Ronin\n\nPurchasing this item directly supports the creators of the Watergate community map.  Show your support today!",
"TF_MapToken_Watergate_AdText": "-Purchasing this item directly supports the creators of the Watergate community map.",
"TF_Map_Byre": "Byre",
"TF_MapToken_Byre": "Map Stamp - Byre",
"TF_MapToken_Byre_Desc": "An Arena Map\n\nMade by Anya 'Idolon' Spadin, Gavin 'Equinoxo' Sawford, Guy 'Gerbil' Ross, HellJumper, Kevin 'Ravidge' Brook, Matt 'Boylee' Boyle, Sebastian 'Seba' Grus, Umbratile, and The Ronin\n\nPurchasing this item directly supports the creators of the Byre community map.  Show your support today!",
"TF_MapToken_Byre_AdText": "-Purchasing this item directly supports the creators of the Byre community map.",
"TF_Map_GorgeEvent": "Gorge Event",
"TF_MapToken_GorgeEvent": "Map Stamp - Gorge Event",
"TF_MapToken_GorgeEvent_Desc": "An Attack/Defend Control Point Map\n\nMade by Paul 'puxorb' Broxup\n\nPurchasing this item directly supports the creator of the Gorge Event community map.  Show your support today!",
"TF_MapToken_GorgeEvent_AdText": "-Purchasing this item directly supports the creators of the Gorge Event community map.",
"TF_Map_SunshineEvent": "Sinshine",
"TF_MapToken_SunshineEvent": "Map Stamp - Sinshine",
"TF_MapToken_SunshineEvent_Desc": "A Control Point Map\n\nMade by Rebecca 'phi' Ailes, Kimberly 'iiboharz' Riswick, and Harlen 'UEAKCrash' Linke\n\nPurchasing this item directly supports the creators of the Sinshine community map.  Show your support today!",
"TF_MapToken_SunshineEvent_AdText": "-Purchasing this item directly supports the creators of the Sinshine community map.",
"TF_Map_MoonshineEvent": "Moonshine Event",
"TF_MapToken_MoonshineEvent": "Map Stamp - Moonshine Event",
"TF_MapToken_MoonshineEvent_Desc": "A King of the Hill Map\n\nMade by Josh 'Hey You' Harris, Harlen 'UEAKCrash' Linke, Jake 'Jukebox' Jackubowski, and Psyke\n\nPurchasing this item directly supports the creators of the Moonshine Event community map.  Show your support today!",
"TF_MapToken_MoonshineEvent_AdText": "-Purchasing this item directly supports the creators of the Moonshine Event community map.",
"TF_Map_MillstoneEvent": "Hellstone",
"TF_MapToken_MillstoneEvent": "Map Stamp - Hellstone",
"TF_MapToken_MillstoneEvent_Desc": "A Payload Map\n\nMade by Tomi 'ICS' Uurainen\n\nPurchasing this item directly supports the creator of the Hellstone community map.  Show your support today!",
"TF_MapToken_MillstoneEvent_AdText": "-Purchasing this item directly supports the creators of the Hellstone community map.",
"TF_Map_Snowycoast": "Snowycoast",
"TF_MapToken_Snowycoast": "Map Stamp - Snowycoast",
"TF_MapToken_Snowycoast_Desc": "A Payload Map\n\nMade by E-Arkham and FissionMetroid101\n\nPurchasing this item directly supports the creators of the Snowycoast community map.  Show your support today!",
"TF_MapToken_Snowycoast_AdText": "-Purchasing this item directly supports the creators of the Snowycoast community map.",
"TF_Map_Vanguard": "Vanguard",
"TF_MapToken_Vanguard": "Map Stamp - Vanguard",
"TF_MapToken_Vanguard_Desc": "A Control Point Map\n\nMade by Maxime 'Fubar' Dupuis, Kevin 'Ravidge' Brook, and Gavin 'Equinoxo' Sawford\n\nPurchasing this item directly supports the creators of the Vanguard community map.  Show your support today!",
"TF_MapToken_Vanguard_AdText": "-Purchasing this item directly supports the creators of the Vanguard community map.",
"TF_Map_Landfall": "Landfall",
"TF_MapToken_Landfall": "Map Stamp - Landfall",
"TF_MapToken_Landfall_Desc": "A Capture the Flag Map\n\nMade by Andrew 'Dr. Spud' Thompson, Fay L. 'nineaxis' Fabry, and Mark 'Shmitz' Major\n\nPurchasing this item directly supports the creators of the Landfall community map.  Show your support today!",
"TF_MapToken_Landfall_AdText": "-Purchasing this item directly supports the creators of the Landfall community map.",
"TF_Map_Highpass": "Highpass",
"TF_MapToken_Highpass": "Map Stamp - Highpass",
"TF_MapToken_Highpass_Desc": "A King of the Hill Map\n\nMade by Yannick 'Bloodhound' Milhahn, 'Psy', and Jesús 'Drawer' Vera\n\nPurchasing this item directly supports the creators of the Highpass community map.  Show your support today!",
"TF_MapToken_Highpass_AdText": "-Purchasing this item directly supports the creators of the Highpass community map.",
"TF_Map_Sunshine": "Sunshine",
"TF_MapToken_Sunshine": "Map Stamp - Sunshine",
"TF_MapToken_Sunshine_Desc": "A Control Point Map\n\nMade by Rebecca 'phi' Ailes, Kimberly 'iiboharz' Riswick, Sebastian Grus, Mellowretro, and Tim 'SedimentarySocks' BL\n\nPurchasing this item directly supports the creators of the Sunshine community map.  Show your support today!",
"TF_MapToken_Sunshine_AdText": "-Purchasing this item directly supports the creators of the Sunshine community map.",
"TF_Map_Metalworks": "Metalworks",
"TF_MapToken_Metalworks": "Map Stamp - Metalworks",
"TF_MapToken_Metalworks_Desc": "A Control Point Map\n\nMade by Ian 'Scorpio Uprising' Cuslidge\n\nPurchasing this item directly supports the creator of the Metalworks community map.  Show your support today!",
"TF_MapToken_Metalworks_AdText": "-Purchasing this item directly supports the creator of the Metalworks community map.",
"TF_Map_Swiftwater": "Swiftwater",
"TF_MapToken_Swiftwater": "Map Stamp - Swiftwater",
"TF_MapToken_Swiftwater_Desc": "A Payload Map\n\nMade by Aaron 'Schwa' McCallen and Lemon\n\nPurchasing this item directly supports the creators of the Swiftwater community map.  Show your support today!",
"TF_MapToken_Swiftwater_AdText": "-Purchasing this item directly supports the creators of the Swiftwater community map.",
"TF_Map_MapleRidgeEvent": "Maple Ridge Event",
"TF_MapToken_MapleRidgeEvent": "Map Stamp - Maple Ridge Event",
"TF_MapToken_MapleRidgeEvent_Desc": "A King of the Hill Map\n\nMade by Sammy 'Berry' Bunting and Theo 'TheoF114' Fletcher\n\nPurchasing this item directly supports the creators of the Maple Ridge Event community map.  Show your support today!",
"TF_MapToken_MapleRidgeEvent_AdText": "-Purchasing this item directly supports the creators of the Maple Ridge Event community map.",
"TF_Map_FifthCurveEvent": "Brimstone",
"TF_MapToken_FifthCurveEvent": "Map Stamp - Brimstone",
"TF_MapToken_FifthCurveEvent_Desc": "A Payload Map\n\nMade by Tomi 'ICS' Uurainen\n\nPurchasing this item directly supports the creator of the Brimstone community map.  Show your support today!",
"TF_MapToken_FifthCurveEvent_AdText": "-Purchasing this item directly supports the creator of the Brimstone community map.",
"TF_Map_PitOfDeath": "Pit of Death",
"TF_MapToken_PitOfDeath": "Map Stamp - Pit of Death",
"TF_MapToken_PitOfDeath_Desc": "A Player Destruction Map\n\nMade by Christian 'Roll' Richardson, Kenny 'Flip' Wheeler, Michael Egan, FissionMetroid101, and Christian James DeRosa\n\nPurchasing this item directly supports the creators of the Pit of Death community map.  Show your support today!",
"TF_MapToken_PitOfDeath_AdText": "-Purchasing this item directly supports the creators of the Pit of Death community map.",
"TF_Map_Mossrock": "Mossrock",
"TF_MapToken_Mossrock": "Map Stamp - Mossrock",
"TF_MapToken_Mossrock_Desc": "An Attack/Defend Control Point Map\n\nMade by Freyja, E-Arkham, Michał 'AsG_Alligator' Byczko, PEAR, Andrew 'Dr. Spud' Thompson, Jake 'Xi.Cynx' Handlovic, Fuzzymellow, Aeon 'Void' Bollig, Neal 'Blade x64' Smart, and Harlen 'UEAKCrash' Linke\n\nPurchasing this item directly supports the creators of the Mossrock community map.  Show your support today!",
"TF_MapToken_Mossrock_AdText": "-Purchasing this item directly supports the creators of the Mossrock community map.",
"TF_Map_Lazarus": "Lazarus",
"TF_MapToken_Lazarus": "Map Stamp - Lazarus",
"TF_MapToken_Lazarus_Desc": "A King of the Hill Map\n\nMade by Aeon 'Void' Bollig, Fuzzymellow, Tim 'SedimentarySocks' BL, Sky, Benjamin 'blaholtzen' Blåholtz, and Stiffy360\n\nPurchasing this item directly supports the creators of the Lazarus community map.  Show your support today!",
"TF_MapToken_Lazarus_AdText": "-Purchasing this item directly supports the creators of the Lazarus community map.",
"TF_Map_BananaBay": "Banana Bay",
"TF_MapToken_BananaBay": "Map Stamp - Banana Bay",
"TF_MapToken_BananaBay_Desc": "A Payload Race Map\n\nMade by Neal 'Blade x64' Smart, Jennifer 'NeoDement' Burnett, PEAR, Stiffy360, Fuzzymellow, Aeon 'Void' Bollig, and Freyja\n\nPurchasing this item directly supports the creators of the Banana Bay community map.  Show your support today!",
"TF_MapToken_BananaBay_AdText": "-Purchasing this item directly supports the creators of the Banana Bay community map.",
"TF_Map_Enclosure": "Enclosure",
"TF_MapToken_Enclosure": "Map Stamp - Enclosure",
"TF_MapToken_Enclosure_Desc": "A Payload Map\n\nMade by Michał 'AsG_Alligator' Byczko, Aeon 'Void' Bollig, E-Arkham, PEAR, Stiffy360, Andrew 'Dr. Spud' Thompson, Fuzzymellow, Maxime Dupuis, Freyja, and Ivan 'Crowbar' Sokolov\n\nPurchasing this item directly supports the creators of the Enclosure community map.  Show your support today!",
"TF_MapToken_Enclosure_AdText": "-Purchasing this item directly supports the creators of the Enclosure community map.",
"TF_Map_Brazil": "Brazil",
"TF_MapToken_Brazil": "Map Stamp - Brazil",
"TF_MapToken_Brazil_Desc": "A King of the Hill Map\n\nMade by Jérémie 'RaVaGe' Nicolas, Tyler 'Yyler' King, Sean 'Heyo' Cutino, and Nassim 'NassimO' Sadoun\n\nPurchasing this item directly supports the creators of the Brazil community map.  Show your support today!",
"TF_MapToken_Brazil_AdText": "-Purchasing this item directly supports the creators of the Brazil community map.",
"TF_Map_BagelEvent": "Cauldron",
"TF_MapToken_BagelEvent": "Map Stamp - Cauldron",
"TF_MapToken_BagelEvent_Desc": "A King of the Hill Map\n\nMade by Lauren 'Yrrzy' Godfrey, Harlen 'UEAKCrash' Linke, Zach 'Exactol' Matuson, Sebastian 'Seba' Grus, Rebecca 'Phi' Ailes, and Freyja\n\nPurchasing this item directly supports the creators of the Cauldron community map.  Show your support today!",
"TF_MapToken_BagelEvent_AdText": "-Purchasing this item directly supports the creators of the Cauldron community map.",
"TF_Map_RumbleEvent": "Gravestone",
"TF_MapToken_RumbleEvent": "Map Stamp - Gravestone",
"TF_MapToken_RumbleEvent_Desc": "A Payload Map\n\nMade by Tomi 'ICS' Uurainen, Riley 'Sheltr' Aanestad, Michał 'AsG_Alligator' Byczko, Zach 'Exactol' Matuson, and Liam 'Diva Dan' Moffitt\n\nPurchasing this item directly supports the creators of the Gravestone community map.  Show your support today!",
"TF_MapToken_RumbleEvent_AdText": "-Purchasing this item directly supports the creators of the Gravestone community map.",
"TF_Map_MonsterBash": "Monster Bash",
"TF_MapToken_MonsterBash": "Map Stamp - Monster Bash",
"TF_MapToken_MonsterBash_Desc": "A Player Destruction Map\n\nMade by Aeon 'Void' Bollig, Fuzzymellow, PEAR, donhonk, Harlen 'UEAKCrash' Linke, Tim 'SediSocks' Brown Lees, Liam 'Diva Dan' Moffitt, Jennifer 'NeoDement' Burnett, and Erik 'Colteh' Coltey\n\nPurchasing this item directly supports the creators of the Monster Bash community map.  Show your support today!",
"TF_MapToken_MonsterBash_AdText": "-Purchasing this item directly supports the creators of the Monster Bash community map.",
"TF_Map_Slasher": "Slasher",
"TF_MapToken_Slasher": "Map Stamp - Slasher",
"TF_MapToken_Slasher_Desc": "A King of the Hill Map\n\nMade by Aeon 'Void' Bollig, Fuzzymellow, Tim 'SediSocks' Brown Lees, Killohurtz, Martin 'Chaofanatic' Ellis, Lauren 'Yrrzy' Godfrey, and Andrew 'Rogue13' Risch\n\nPurchasing this item directly supports the creators of the Slasher community map.  Show your support today!",
"TF_MapToken_Slasher_AdText": "-Purchasing this item directly supports the creators of the Slasher community map.",
"TF_Map_CursedCove": "Cursed Cove",
"TF_MapToken_CursedCove": "Map Stamp - Cursed Cove",
"TF_MapToken_CursedCove_Desc": "A Player Destruction Map\n\nMade by Louie 'bakscratch' Turner, Juha 'Jusa' Kuoppala, Sean 'boomsta' Troehler, Jordan 'Hex' LeBlanc, EmNudge, Zach 'Exactol' Matuson, Nick 'Bobby BodyOdor' Baker, Duncan 'Magnus' Welch, Nathan 'Yacan1' Dadey, Roniña 'Py-Bun' Rodriguez, Stiffy360, and Deacon\n\nPurchasing this item directly supports the creators of the Cursed Cove community map.  Show your support today!",
"TF_MapToken_CursedCove_AdText": "-Purchasing this item directly supports the creators of the Cursed Cove community map.",
"TF_Map_Laughter": "Laughter",
"TF_MapToken_Laughter": "Map Stamp - Laughter",
"TF_MapToken_Laughter_Desc": "A King of the Hill Map\n\nMade by Aeon 'Void' Bollig, Liam 'Diva Dan' Moffitt, Fuzzymellow, and Zoey 'Sexy Robot' Smith\n\nPurchasing this item directly supports the creators of the Laughter community map.  Show your support today!",
"TF_MapToken_Laughter_AdText": "-Purchasing this item directly supports the creators of the Laughter community map.",
"TF_Map_Precipice": "Precipice",
"TF_MapToken_Precipice": "Map Stamp - Precipice",
"TF_MapToken_Precipice_Desc": "A Payload Map\n\nMade by TheHorseStrangler and TanookiSuit3\n\nPurchasing this item directly supports the creators of the Precipice community map.  Show your support today!",
"TF_MapToken_Precipice_AdText": "-Purchasing this item directly supports the creators of the Precipice community map.",
"TF_Map_Megalo": "Megalo",
"TF_MapToken_Megalo": "Map Stamp - Megalo",
"TF_MapToken_Megalo_Desc": "A King of the Hill Map\n\nMade by Sammy 'Berry' Bunting, Chris 'Another Bad Pun' Williams, Liam 'Diva Dan' Moffitt, Zach 'Exactol' Matuson, Aeon 'Void' Bollig, Christoph 'Gadget' Manschitz, Ivan 'Crowbar' Sokolov, Kevin 'Ravidge' Brook, and Theo 'TheoF114' Fletcher\n\nPurchasing this item directly supports the creators of the Megalo community map.  Show your support today!",
"TF_MapToken_Megalo_AdText": "-Purchasing this item directly supports the creators of the Megalo community map.",
"TF_Map_HassleCastle": "Hassle Castle",
"TF_MapToken_HassleCastle": "Map Stamp - Hassle Castle",
"TF_MapToken_HassleCastle_Desc": "A Payload Map\n\nMade by Smiley The Smile\n\nPurchasing this item directly supports the creator of the Hassle Castle community map.  Show your support today!",
"TF_MapToken_HassleCastle_AdText": "-Purchasing this item directly supports the creator of the Hassle Castle community map.",
"TF_Map_Bloodwater": "Bloodwater",
"TF_MapToken_Bloodwater": "Map Stamp - Bloodwater",
"TF_MapToken_Bloodwater_Desc": "A Payload Map\n\nMade by Ryan 'Chill' Foy and Elián 'iron' Rodríguez\n\nPurchasing this item directly supports the creators of the Bloodwater community map.  Show your support today!",
"TF_MapToken_Bloodwater_AdText": "-Purchasing this item directly supports the creators of the Bloodwater community map.",
"TF_Map_UndergroveEvent": "Moldergrove",
"TF_MapToken_UndergroveEvent": "Map Stamp - Moldergrove",
"TF_MapToken_UndergroveEvent_Desc": "A King of the Hill Map\n\nMade by Patrick 'Sweepertank' Preston, Andrew 'Dr. Spud' Thompson, E-Arkham, Liam 'Diva Dan' Moffitt, Aeon 'Void' Bollig, juniper, Kevin 'Ravidge' Brook, Ivan 'Crowbar' Sokolov, Alex 'MaccyF' MacFarquhar, and Em\n\nPurchasing this item directly supports the creators of the Moldergrove community map.  Show your support today!",
"TF_MapToken_UndergroveEvent_AdText": "-Purchasing this item directly supports the creators of the Moldergrove community map.",
"TF_Map_Pier": "Pier",
"TF_MapToken_Pier": "Map Stamp - Pier",
"TF_MapToken_Pier_Desc": "A Payload Map\n\nMade by Neal 'Blade x64' Smart, Benjamin 'blaholtzen' Blåholtz, Erik 'Colteh' Coltey, Liam 'Diva Dan' Moffitt, donhonk, Andrew 'Dr. Spud' Thompson, Thijs 'Evil_Knevil' Van Gerrewey, Juniper, Nassim 'NassimO' Sadoun, Damian 'Populus' Błaszczyk, Kevin 'Ravidge' Brook, Tim 'SediSocks' Brown Lees, Sky, Al 'Square' Rodgers, Aeon 'Void' Bollig, and Zoey Smith\n\nPurchasing this item directly supports the creators of the Pier community map.  Show your support today!",
"TF_MapToken_Pier_AdText": "-Purchasing this item directly supports the creators of the Pier community map.",
"TF_Map_SnowVille": "SnowVille",
"TF_MapToken_SnowVille": "Map Stamp - SnowVille",
"TF_MapToken_SnowVille_Desc": "A Player Destruction Map\n\nMade by Maxime 'Mimas Torres' Dupuis, Zach 'Exactol' Matuson, Vincent 'Vel0city' Swart, and Joe 'Fr0z3nR' Radak\n\nPurchasing this item directly supports the creators of the SnowVille community map.  Show your support today!",
"TF_MapToken_SnowVille_AdText": "-Purchasing this item directly supports the creators of the SnowVille community map.",
"TF_Map_Snowfall": "Snowfall",
"TF_MapToken_Snowfall": "Map Stamp - Snowfall",
"TF_MapToken_Snowfall_Desc": "A Capture the Flag Map\n\nMade by Nickolas 'Krazy' Fenech, Andrew 'Dr. Spud' Thompson, Fay L. 'Nineaxis' Fabry, Mark 'Shmitz' Major, Zoey Smith, Tumby, E-Arkham, donhonk, Louie 'bakscratch' Turner, Nassim 'NassimO' Sadoun, Thijs 'Evil_Knevil' Van, Aeon 'Void' Bollig, Lauren 'Yrrzy' Godfrey, Zach 'Exactol' Matuson, Alex 'Rexy' Kreeger, and Tyler 'Yyler' King\n\nPurchasing this item directly supports the creators of the Snowfall community map.  Show your support today!",
"TF_MapToken_Snowfall_AdText": "-Purchasing this item directly supports the creators of the Snowfall community map.",
"TF_Map_Wutville": "Wutville",
"TF_MapToken_Wutville": "Map Stamp - Wutville",
"TF_MapToken_Wutville_Desc": "A Payload Map\n\nMade by Andrew 'Rogue13' Risch\n\nPurchasing this item directly supports the creator of the Wutville community map.  Show your support today!",
"TF_MapToken_Wutville_AdText": "-Purchasing this item directly supports the creator of the Wutville community map.",
"TF_Map_Farmageddon": "Farmageddon",
"TF_MapToken_Farmageddon": "Map Stamp - Farmageddon",
"TF_MapToken_Farmageddon_Desc": "A Player Destruction Map\n\nMade by Matthew 'MegapiemanPHD' Simmons, Patrick 'Zeus' Hennessy, Alex 'FGD5' Stewart, Benjamin 'blaholtzen' Blåholtz, Al 'Square' Rodgers, Tim 'SediSocks' Brown Lees, Juniper, Aeon 'Void' Bollig, Seb 'Tianes' Necula, and Liran 'Ducksink' Ohana\n\nPurchasing this item directly supports the creators of the Farmageddon community map.  Show your support today!",
"TF_MapToken_Farmageddon_AdText": "-Purchasing this item directly supports the creators of the Farmageddon community map.",
"TF_Map_Sinthetic": "Sinthetic",
"TF_MapToken_Sinthetic": "Map Stamp - Sinthetic",
"TF_MapToken_Sinthetic_Desc": "A King of the Hill Map\n\nMade by Matthew 'MegapiemanPHD' Simmons, Benjamin 'blaholtzen' Blåholtz, Seb 'Tianes' Necula, Ase 'Pont' Kirkham, Alex 'FGD5' Stewart, Nick 'Frying Dutchman' Post, and Lawrence 'hutty' Granroth\n\nPurchasing this item directly supports the creators of the Sinthetic community map.  Show your support today!",
"TF_MapToken_Sinthetic_AdText": "-Purchasing this item directly supports the creators of the Sinthetic community map.",
"TF_Map_LosMuertos": "Los Muertos",
"TF_MapToken_LosMuertos": "Map Stamp - Los Muertos",
"TF_MapToken_LosMuertos_Desc": "A King of the Hill Map\n\nMade by Elián 'iron' Rodríguez, Ryan 'Chill' Foy, and Matthew 'Panckakebro' Hiller\n\nPurchasing this item directly supports the creators of the Los Muertos community map.  Show your support today!",
"TF_MapToken_LosMuertos_AdText": "-Purchasing this item directly supports the creators of the Los Muertos community map.",
"TF_Map_Erebus": "Erebus",
"TF_MapToken_Erebus": "Map Stamp - Erebus",
"TF_MapToken_Erebus_Desc": "An Attack/Defend Control Point Map\n\nMade by Tomi 'ICS' Uurainen and Tony 'Hakk1tus' Hakala\n\nPurchasing this item directly supports the creators of the Erebus community map.  Show your support today!",
"TF_MapToken_Erebus_AdText": "-Purchasing this item directly supports the creators of the Erebus community map.",
"TF_Map_Terror": "Terror",
"TF_MapToken_Terror": "Map Stamp - Terror",
"TF_MapToken_Terror_Desc": "A Payload Map\n\nMade by Tomi 'ICS' Uurainen\n\nPurchasing this item directly supports the creator of the Terror community map.  Show your support today!",
"TF_MapToken_Terror_AdText": "-Purchasing this item directly supports the creator of the Terror community map.",
"TF_Map_Graveyard": "Graveyard",
"TF_MapToken_Graveyard": "Map Stamp - Graveyard",
"TF_MapToken_Graveyard_Desc": "An Arena Map\n\nMade by Liam 'Diva Dan' Moffitt, Benjamin 'blaholtzen' Blåholtz, Alex 'FGD5' Stewart, Seb 'Tianes' Necula, Aeon 'Void' Bollig, Erik 'Colteh' Coltey, and Juniper\n\nPurchasing this item directly supports the creators of the Graveyard community map.  Show your support today!",
"TF_MapToken_Graveyard_AdText": "-Purchasing this item directly supports the creators of the Graveyard community map.",
"TF_Map_Polar": "Polar",
"TF_MapToken_Polar": "Map Stamp - Polar",
"TF_MapToken_Polar_Desc": "A Payload Map\n\nMade by Matthew 'Panckakebro' Hiller, Elián 'iron' Rodríguez, Phe, Ryan 'Chill' Foy, Denis 'xB33' Varchulik, William 'Cheesypuff' Bartley-Bolster, and Oliver 'OverPovered' Pennanen\n\nPurchasing this item directly supports the creators of the Polar community map.  Show your support today!",
"TF_MapToken_Polar_AdText": "-Purchasing this item directly supports the creators of the Polar community map.",
"TF_Map_BreadSpace": "Bread Space",
"TF_MapToken_BreadSpace": "Map Stamp - Bread Space",
"TF_MapToken_BreadSpace_Desc": "A Payload Map\n\nMade by Bailey 'Glitch' Hodges, Jesse 'Custard1' Budd, Alberto 'Petachepas' Zarzuela, Grambee, Dylan 'doggoh' Lee, Oliver 'OverPovered' Pennanen, Christoph 'Gadget' Manschitz, Peter 'Tabby' Bryant, William 'Cheesypuff' Bartley-Bolster, Kirill 'Le Bruhe?' Ruzanov, Hugh 'HueZee_' Madoc Schneider, Brandon 'Brantopias' Sinkovich, and human1\n\nPurchasing this item directly supports the creators of the Bread Space community map.  Show your support today!",
"TF_MapToken_BreadSpace_AdText": "-Purchasing this item directly supports the creators of the Bread Space community map.",
"TF_Map_Chilly": "Chilly",
"TF_MapToken_Chilly": "Map Stamp - Chilly",
"TF_MapToken_Chilly_Desc": "A Payload Map\n\nMade by Tomi 'ICS' Uurainen, Tyler 'Yyler' King, and Alex 'MaccyF' MacFarquhar\n\nPurchasing this item directly supports the creators of the Chilly community map.  Show your support today!",
"TF_MapToken_Chilly_AdText": "-Purchasing this item directly supports the creators of the Chilly community map.",
"TF_Map_Cascade": "Cascade",
"TF_MapToken_Cascade": "Map Stamp - Cascade",
"TF_MapToken_Cascade_Desc": "A King of the Hill Map\n\nMade by Evan 'Defcon' LeBlanc, Alex 'FGD5' Stewart, and Liam 'Diva Dan' Moffitt\n\nPurchasing this item directly supports the creators of the Cascade community map.  Show your support today!",
"TF_MapToken_Cascade_AdText": "-Purchasing this item directly supports the creators of the Cascade community map.",
"TF_Map_Altitude": "Altitude",
"TF_MapToken_Altitude": "Map Stamp - Altitude",
"TF_MapToken_Altitude_Desc": "An Attack/Defend Control Point Map\n\nMade by Evan 'Defcon' LeBlanc, Alex 'FGD5' Stewart, and Liam 'Diva Dan' Moffitt\n\nPurchasing this item directly supports the creators of the Altitude community map.  Show your support today!",
"TF_MapToken_Altitude_AdText": "-Purchasing this item directly supports the creators of the Altitude community map.",
"TF_Map_Doublefrost": "Doublefrost",
"TF_MapToken_Doublefrost": "Map Stamp - Doublefrost",
"TF_MapToken_Doublefrost_Desc": "A Capture the Flag Map\n\nMade by Harlen 'UEAKCrash' Linke, Aeon 'Void' Bollig, Juniper, Freyja, and Zoey Smith\n\nPurchasing this item directly supports the creators of the Doublefrost community map.  Show your support today!",
"TF_MapToken_Doublefrost_AdText": "-Purchasing this item directly supports the creators of the Doublefrost community map.",
"TF_Map_SoulMill": "Soul-Mill",
"TF_MapToken_SoulMill": "Map Stamp - Soul-Mill",
"TF_MapToken_SoulMill_Desc": "A King of the Hill Map\n\nMade by Eric 'erk' Browning, Aeon 'Void' Bollig, Juniper, and Alex 'FGD5' Stewart\n\nPurchasing this item directly supports the creators of the Soul-Mill community map.  Show your support today!",
"TF_MapToken_SoulMill_AdText": "-Purchasing this item directly supports the creators of the Soul-Mill community map.",
"TF_Map_Helltrain": "Helltrain",
"TF_MapToken_Helltrain": "Map Stamp - Helltrain",
"TF_MapToken_Helltrain_Desc": "A Capture the Flag Map\n\nMade by Matthew 'Panckakebro' Hiller, Elián 'iron' Rodríguez, Phe, Denis 'xB33' Varchulik, Ryan 'Chill' Foy, Caleb 'Pixenal' Dawson, William 'Cheesypuff' Bartley-Bolster, Battoign, Bailey 'Glitch2' Hodges, EmNudge, Oliver 'OverPovered' Pennanen, and James 'Piratefoodog' Russell\n\nPurchasing this item directly supports the creators of the Helltrain community map.  Show your support today!",
"TF_MapToken_Helltrain_AdText": "-Purchasing this item directly supports the creators of the Helltrain community map.",
"TF_Map_Bonesaw": "Bonesaw",
"TF_MapToken_Bonesaw": "Map Stamp - Bonesaw",
"TF_MapToken_Bonesaw_Desc": "A Payload Race Map\n\nMade by Liam 'Diva Dan' Moffitt, Viscaedis, Al 'Square' Rodgers, E-Arkham, Seb 'Tianes' Necula, Benjamin 'blaholtzen' Blåholtz, Aeon 'Void' Bollig, Juniper, and Alex 'FGD5' Stewart\n\nPurchasing this item directly supports the creators of the Bonesaw community map.  Show your support today!",
"TF_MapToken_Bonesaw_AdText": "-Purchasing this item directly supports the creators of the Bonesaw community map.",
"TF_Map_Crasher": "Crasher",
"TF_MapToken_Crasher": "Map Stamp - Crasher",
"TF_MapToken_Crasher_Desc": "A Capture the Flag Map\n\nMade by Lauren 'Yrrzy' Godfrey, Ase 'pont' Kirkham, Liam 'Diva Dan' Moffitt, Benjamin 'Benjamoose' Rudman, Kimberly 'iiboharz' Riswick, and Freyja\n\nPurchasing this item directly supports the creators of the Crasher community map.  Show your support today!",
"TF_MapToken_Crasher_AdText": "-Purchasing this item directly supports the creators of the Crasher community map.",
"TF_Map_Ghoulpit": "Ghoulpit",
"TF_MapToken_Ghoulpit": "Map Stamp - Ghoulpit",
"TF_MapToken_Ghoulpit_Desc": "A Payload Map\n\nMade by SirPontus, Michał 'AsG_Alligator' Byczko, Walter 'Waffe' Grönholm, and Alex 'Rexy' Kreeger\n\nPurchasing this item directly supports the creators of the Ghoulpit community map.  Show your support today!",
"TF_MapToken_Ghoulpit_AdText": "-Purchasing this item directly supports the creators of the Ghoulpit community map.",
"TF_Map_Spookeyridge": "Spookeyridge",
"TF_MapToken_Spookeyridge": "Map Stamp - Spookeyridge",
"TF_MapToken_Spookeyridge_Desc": "An Attack/Defend Control Point Map\n\nMade by Harlen 'UEAKCrash' Linke, Joshua 'HeyYou' Harris, Seth 'xzzy' Graham, PearForceOne, FissionMetroid101, Al 'Square' Rodgers, and Liam 'Diva Dan' Moffitt\n\nPurchasing this item directly supports the creators of the Spookeyridge community map.  Show your support today!",
"TF_MapToken_Spookeyridge_AdText": "-Purchasing this item directly supports the creators of the Spookeyridge community map.",
"TF_Map_Frostwatch": "Frostwatch",
"TF_MapToken_Frostwatch": "Map Stamp - Frostwatch",
"TF_MapToken_Frostwatch_Desc": "An Attack/Defend Control Point Map\n\nMade by Elián 'iron' Rodríguez, Ryan 'Chill' Foy, Tristan 'Alox' Haguet, Battoign, and Louie 'bakscratch' Turner\n\nPurchasing this item directly supports the creators of the Frostwatch community map.  Show your support today!",
"TF_MapToken_Frostwatch_AdText": "-Purchasing this item directly supports the creators of the Frostwatch community map.",
"TF_Map_Frostcliff": "Frostcliff",
"TF_MapToken_Frostcliff": "Map Stamp - Frostcliff",
"TF_MapToken_Frostcliff_Desc": "A Payload Map\n\nMade by Tomi 'ICS' Uurainen\n\nPurchasing this item directly supports the creator of the Frostcliff community map.  Show your support today!",
"TF_MapToken_Frostcliff_AdText": "-Purchasing this item directly supports the creator of the Frostcliff community map.",
"TF_Map_Rumford": "Rumford",
"TF_MapToken_Rumford": "Map Stamp - Rumford",
"TF_MapToken_Rumford_Desc": "A Payload Map\n\nMade by Neil 'Nesman' Stottler, Eric 'erk' Browning, Aeon 'Void' Bollig, Louie 'bakscratch' Turner, Alex 'FGD5' Stewart, Patrick 'Zeus' Hennessy, and Izotope\n\nPurchasing this item directly supports the creators of the Rumford community map.  Show your support today!",
"TF_MapToken_Rumford_AdText": "-Purchasing this item directly supports the creators of the Rumford community map.",
"TF_Map_Frosty": "Frosty",
"TF_MapToken_Frosty": "Map Stamp - Frosty",
"TF_MapToken_Frosty_Desc": "A Capture the Flag Map\n\nMade by Valentin 'ElectroSheep' Levillain and Simon 'Em' Aublet\n\nPurchasing this item directly supports the creators of the Frosty community map.  Show your support today!",
"TF_MapToken_Frosty_AdText": "-Purchasing this item directly supports the creators of the Frosty community map.",
"TF_Map_CoalPit": "Coal Pit",
"TF_MapToken_CoalPit": "Map Stamp - Coal Pit",
"TF_MapToken_CoalPit_Desc": "An Attack/Defend Control Point Map\n\nMade by Aaron 'Aar' Pearson, Joel 'zythe_' Morscher, Lauren 'Yrrzy' Godfrey, Liam 'Diva Dan' Moffitt, and Harlen 'UEAKCrash' Linke\n\nPurchasing this item directly supports the creators of the Coal Pit community map.  Show your support today!",
"TF_MapToken_CoalPit_AdText": "-Purchasing this item directly supports the creators of the Coal Pit community map.",
"TF_Map_Sharkbay": "Sharkbay",
"TF_MapToken_Sharkbay": "Map Stamp - Sharkbay",
"TF_MapToken_Sharkbay_Desc": "A King of the Hill Map\n\nMade by Vasilis 'Billo' Chatzikostas, Patrick 'Zeus' Hennessy, Seb 'Tianes' Necula, Benjamin 'blaholtzen' Blåholtz, and Nickolas 'KrazyZark' Fenech\n\nPurchasing this item directly supports the creators of the Sharkbay community map.  Show your support today!",
"TF_MapToken_Sharkbay_AdText": "-Purchasing this item directly supports the creators of the Sharkbay community map.",
"TF_Map_Rotunda": "Rotunda",
"TF_MapToken_Rotunda": "Map Stamp - Rotunda",
"TF_MapToken_Rotunda_Desc": "A King of the Hill Map\n\nMade by Paul 'Brokk' Clausen, Rhafael 'Rhamkin' Oliveira, Alex 'FGD5' Stewart, Roman 'FanCyy' Malashkevich, Bertrand 'Tails8521' Penguilly, Louie 'bakscratch' Turner, Christoph 'Gadget' Manschitz, Kevin 'Ravidge' Brook, Aeon 'Void' Bollig, Juniper, and Jesse 'Custard1' Budd\n\nPurchasing this item directly supports the creators of the Rotunda community map.  Show your support today!",
"TF_MapToken_Rotunda_AdText": "-Purchasing this item directly supports the creators of the Rotunda community map.",
"TF_Map_Phoenix": "Phoenix",
"TF_MapToken_Phoenix": "Map Stamp - Phoenix",
"TF_MapToken_Phoenix_Desc": "A Payload Map\n\nMade by Evan 'Defcon' LeBlanc, Liam 'Diva Dan' Moffitt, Nickolas 'KrazyZark' Fenech, Neal 'Blade x64' Smart, and Stuffy360\n\nPurchasing this item directly supports the creators of the Phoenix community map.  Show your support today!",
"TF_MapToken_Phoenix_AdText": "-Purchasing this item directly supports the creators of the Phoenix community map.",
"TF_Map_Cashworks": "Cashworks",
"TF_MapToken_Cashworks": "Map Stamp - Cashworks",
"TF_MapToken_Cashworks_Desc": "A Payload Map\n\nMade by Wojciech 'eerieone' Michalak, Moritz 'moe012' Horn, and Sean 'Artesia' Pennock\n\nPurchasing this item directly supports the creators of the Cashworks community map.  Show your support today!",
"TF_MapToken_Cashworks_AdText": "-Purchasing this item directly supports the creators of the Cashworks community map.",
"TF_Map_Venice": "Venice",
"TF_MapToken_Venice": "Map Stamp - Venice",
"TF_MapToken_Venice_Desc": "A Payload Map\n\nMade by JimWood and TanookiSuit3\n\nPurchasing this item directly supports the creators of the Venice community map.  Show your support today!",
"TF_MapToken_Venice_AdText": "-Purchasing this item directly supports the creators of the Venice community map.",
"TF_Map_Reckoner": "Reckoner",
"TF_MapToken_Reckoner": "Map Stamp - Reckoner",
"TF_MapToken_Reckoner_Desc": "A Control Point Map\n\nMade by Bec 'phi' Ailes, Kimberly 'iiboharz' Riswick, Freyja, E-Arkham, Maxime 'Fubar' Dupuis, Zoey Smith, Jen 'NeoDement' Burnett, Al 'Square' Rodgers, 'Rito, Alex 'Rexy' Kreeger, and Sebastian Grus\n\nPurchasing this item directly supports the creators of the Reckoner community map.  Show your support today!",
"TF_MapToken_Reckoner_AdText": "-Purchasing this item directly supports the creators of the Reckoner community map.",
"TF_Map_Sulfur": "Sulfur",
"TF_MapToken_Sulfur": "Map Stamp - Sulfur",
"TF_MapToken_Sulfur_Desc": "An Attack/Defend Control Point Map\n\nMade by Freyja, E-Arkham, Sarexicus, 'Rito, donhonk, Kimberly 'iiboharz' Riswick, Lauren 'Yrrzy' Godfrey, and Maxime 'Fubar' Dupuis\n\nPurchasing this item directly supports the creators of the Sulfur community map.  Show your support today!",
"TF_MapToken_Sulfur_AdText": "-Purchasing this item directly supports the creators of the Sulfur community map.",
"TF_Map_Hardwood": "Hardwood",
"TF_MapToken_Hardwood": "Map Stamp - Hardwood",
"TF_MapToken_Hardwood_Desc": "An Attack/Defend Control Point Map\n\nMade by Ben 'Squishy' Dowman, Emil Sharafeev, Faye, Puinguin, Liam 'Diva Dan' Moffitt, E-Arkham, and Roman 'FanCyy' Malashkevich\n\nPurchasing this item directly supports the creators of the Hardwood community map.  Show your support today!",
"TF_MapToken_Hardwood_AdText": "-Purchasing this item directly supports the creators of the Hardwood community map.",
"TF_Map_PelicanPeak": "Pelican Peak",
"TF_MapToken_PelicanPeak": "Map Stamp - Pelican Peak",
"TF_MapToken_PelicanPeak_Desc": "A Capture the Flag Map\n\nMade by Chris 'Another Bad Pun' Williams, Bec 'phi' Ailes, James 'chin' Hayes, Eric 'erk' Browning, Liam 'Diva Dan' Moffitt, Stuffy360, Aeon 'Void' Bollig, Nickolas 'KrazyZark' Fenech, and Emil Sharafeev\n\nPurchasing this item directly supports the creators of the Pelican Peak community map.  Show your support today!",
"TF_MapToken_PelicanPeak_AdText": "-Purchasing this item directly supports the creators of the Pelican Peak community map.",
"TF_Map_Selbyen": "Selbyen",
"TF_MapToken_Selbyen": "Map Stamp - Selbyen",
"TF_MapToken_Selbyen_Desc": "A Player Destruction Map\n\nMade by Joel 'zythe_' Morscher, Rhafael 'Rhamkin' Oliveira, Alex 'FGD5' Stewart, Benjamin 'blaholtzen' Blåholtz, Matthew 'MegapiemanPHD' Simmons, and Lo-fi Longcat\n\nPurchasing this item directly supports the creators of the Selbyen community map.  Show your support today!",
"TF_MapToken_Selbyen_AdText": "-Purchasing this item directly supports the creators of the Selbyen community map.",
"TF_Map_TinyRock": "Tiny Rock (VSH)",
"TF_MapToken_TinyRock": "Map Stamp - Tiny Rock (VSH)",
"TF_MapToken_TinyRock_Desc": "A Versus Saxton Hale (Community) Map\n\nMade by Jess 'Muddy' Dabbs, Lizard of Oz, Jason 'Yaki' Herman, Szabó 'Maxxy' Attila, Maxim 'VellyVice' Streltsov, James M., Joaquim 'JPRAS' Silva, and Matthew 'MegapiemanPHD' Simmons\n\nPurchasing this item directly supports the creators of the Tiny Rock community map.  Show your support today!",
"TF_MapToken_TinyRock_AdText": "-Purchasing this item directly supports the creators of the Tiny Rock (VSH) community map.",
"TF_Map_Distillery": "Distillery (VSH)",
"TF_MapToken_Distillery": "Map Stamp - Distillery (VSH)",
"TF_MapToken_Distillery_Desc": "A Versus Saxton Hale (Community) Map\n\nMade by Phe, Lizard Of Oz, Sonoma 'Sono' Bryer, Szabó 'Maxxy' Attila, Matthew 'MegapiemanPHD' Simmons, Stuffy 360, Jason 'Yaki' Herman, Maxim 'VellyVice' Streltsov, James M., Joaquim 'JPRAS' Silva, and Aeon 'Void' Bollig\n\nPurchasing this item directly supports the creators of the Distillery community map.  Show your support today!",
"TF_MapToken_Distillery_AdText": "-Purchasing this item directly supports the creators of the Distillery (VSH) community map.",
"TF_Map_Skirmish": "Skirmish (VSH)",
"TF_MapToken_Skirmish": "Map Stamp - Skirmish (VSH)",
"TF_MapToken_Skirmish_Desc": "A Versus Saxton Hale (Community) Map\n\nMade by John 'MilkMaster72' Worden, Lizard Of Oz, Jason 'Yaki' Herman, Szabó 'Maxxy' Attila, Joaquim 'JPRAS' Silva, Matthew 'MegapiemanPHD' Simmons, James M., Maxim 'VellyVice' Streltsov, Aeon 'Void' Bollig, and Louie 'bakscratch' Turner\n\nPurchasing this item directly supports the creators of the Skirmish community map.  Show your support today!",
"TF_MapToken_Skirmish_AdText": "-Purchasing this item directly supports the creators of the Skirmish (VSH) community map.",
"TF_Map_Nucleus": "Nucleus (VSH)",
"TF_MapToken_Nucleus": "Map Stamp - Nucleus (VSH)",
"TF_MapToken_Nucleus_Desc": "A Versus Saxton Hale (Community) Map\n\nMade by John 'MilkMaster72' Worden, Lizard Of Oz, Jason 'Yaki' Herman, Szabó 'Maxxy' Attila, Joaquim 'JPRAS' Silva, Matthew 'MegapiemanPHD' Simmons, James M., Maxim 'VellyVice' Streltsov, and Aeon 'Void' Bollig\n\nPurchasing this item directly supports the creators of the Nucleus VSH community map.  Show your support today!",
"TF_MapToken_Nucleus_AdText": "-Purchasing this item directly supports the creators of the Nucleus (VSH) community map.",
"TF_Map_Perks": "Perks",
"TF_MapToken_Perks": "Map Stamp - Perks",
"TF_MapToken_Perks_Desc": "An Arena Map\n\nMade by Philippe 'Le Codex' Lefebvre, Liam 'Diva Dan' Moffitt, Daniel 'DJ' Bennett, Seb 'Tianes' Necula, Ase 'pont' Kirkham, and E-Arkham\n\nPurchasing this item directly supports the creators of the Perks community map.  Show your support today!",
"TF_MapToken_Perks_AdText": "-Purchasing this item directly supports the creators of the Perks community map.",
"TF_Map_Slime": "Slime",
"TF_MapToken_Slime": "Map Stamp - Slime",
"TF_MapToken_Slime_Desc": "A King of the Hill Map\n\nMade by Harlen 'UEAKCrash' Linke, Freyja, Benjamin 'blaholtzen' Blåholtz, Al 'Square' Rodgers, Alex 'FGD5' Stewart, Lizard of Oz, Jordan 'hXX' LeBlanc, and Seb 'Tianes' Necula\n\nPurchasing this item directly supports the creators of the Slime community map.  Show your support today!",
"TF_MapToken_Slime_AdText": "-Purchasing this item directly supports the creators of the Slime community map.",
"TF_Map_LavaPit": "Lava Pit",
"TF_MapToken_LavaPit": "Map Stamp - Lava Pit",
"TF_MapToken_LavaPit_Desc": "An Attack/Defend Control Point Map\n\nMade by Stack Man\n\nPurchasing this item directly supports the creator of the Lava Pit community map.  Show your support today!",
"TF_MapToken_LavaPit_AdText": "-Purchasing this item directly supports the creator of the Lava Pit community map.",
"TF_Map_Mannsylvania": "Mannsylvania",
"TF_MapToken_Mannsylvania": "Map Stamp - Mannsylvania",
"TF_MapToken_Mannsylvania_Desc": "A Player Destruction Map\n\nMade by Phe, Artemy 'FlowerShopGuy' Maltsev, Sonoma 'Sono' Bryer, Matthew 'MegapiemanPHD' Simmons, Oliver 'OverPovered' Pennanen, and Kirill 'BadassCook' Ruzanov\n\nPurchasing this item directly supports the creators of the Mannsylvania community map.  Show your support today!",
"TF_MapToken_Mannsylvania_AdText": "-Purchasing this item directly supports the creators of the Mannsylvania community map.",
"TF_Map_Sandcastle": "Sandcastle",
"TF_MapToken_Sandcastle": "Map Stamp - Sandcastle",
"TF_MapToken_Sandcastle_Desc": "A Medieval Attack/Defend Control Point Map\n\nMade by Aeon 'Void' Bollig, Juniper, Harlen 'UEAKCrash' Linke, Zoey Smith, and Alex 'Rexy' Kreeger\n\nPurchasing this item directly supports the creators of the Sandcastle community map.  Show your support today!",
"TF_MapToken_Sandcastle_AdText": "-Purchasing this item directly supports the creators of the Sandcastle community map.",
"TF_Map_Spineyard": "Spineyard",
"TF_MapToken_Spineyard": "Map Stamp - Spineyard",
"TF_MapToken_Spineyard_Desc": "A Payload Map\n\nMade by Matthew 'Panckakebro' Hiller, Elián 'iron' Rodríguez, Denis 'xB33' Varchulik, and Norman 'Mikusch' Masanek\n\nPurchasing this item directly supports the creators of the Spineyard community map.  Show your support today!",
"TF_MapToken_Spineyard_AdText": "-Purchasing this item directly supports the creators of the Spineyard community map.",
"TF_Map_Corruption": "Corruption",
"TF_MapToken_Corruption": "Map Stamp - Corruption",
"TF_MapToken_Corruption_Desc": "A Payload Map\n\nMade by Eric 'erk' Browning, Matthew 'MegapiemanPHD' Simmons, Rhafael 'Rhamkin' Oliveira, Matthew 'Panckakebro' Hiller, and Vasilis 'Billo' Chatzikostas\n\nPurchasing this item directly supports the creators of the Corruption community map.  Show your support today!",
"TF_MapToken_Corruption_AdText": "-Purchasing this item directly supports the creators of the Corruption community map.",
"TF_Map_Murky": "Murky (ZI)",
"TF_MapToken_Murky": "Map Stamp - Murky (ZI)",
"TF_MapToken_Murky_Desc": "A Zombie Infection (Community) Map\n\nMade by netmuck, Liam 'Diva Dan' Moffitt, and E-Arkham\n\nPurchasing this item directly supports the creators of the Murky community map.  Show your support today!",
"TF_MapToken_Murky_AdText": "-Purchasing this item directly supports the creators of the Murky (ZI) community map.",
"TF_Map_Atoll": "Atoll (ZI)",
"TF_MapToken_Atoll": "Map Stamp - Atoll (ZI)",
"TF_MapToken_Atoll_Desc": "A Zombie Infection (Community) Map\n\nMade by Patrik 'Nat-Tea' Naplava, Emil Sharafeev, Danni 'AttaKat' Bestford, Ben 'Squishy' Dowman, Jesse 'Custard1' Budd, Alex 'Zz' Elliott, Liam 'Diva Dan' Moffitt, and netmuck\n\nPurchasing this item directly supports the creators of the Atoll community map.  Show your support today!",
"TF_MapToken_Atoll_AdText": "-Purchasing this item directly supports the creators of the Atoll (ZI) community map.",
"TF_Map_Woods": "Woods (ZI)",
"TF_MapToken_Woods": "Map Stamp - Woods (ZI)",
"TF_MapToken_Woods_Desc": "A Zombie Infection (Community) Map\n\nMade by George 'I dinne ken' Norman, netmuck, Liam 'Diva Dan' Moffitt, Stuffy360, Aeon 'Void' Bollig, and Emil Sharafeev\n\nPurchasing this item directly supports the creators of the Woods community map.  Show your support today!",
"TF_MapToken_Woods_AdText": "-Purchasing this item directly supports the creators of the Woods (ZI) community map.",
"TF_Map_Sanitarium": "Sanitarium (ZI)",
"TF_MapToken_Sanitarium": "Map Stamp - Sanitarium (ZI)",
"TF_MapToken_Sanitarium_Desc": "A Zombie Infection (Community) Map\n\nMade by Matthew 'Panckakebro' Hiller, netmuck, Liam 'Diva Dan' Moffitt, Stuffy360, Elián 'iron' Rodríguez, and Louie 'bakscratch' Turner\n\nPurchasing this item directly supports the creators of the Sanitarium community map.  Show your support today!",
"TF_MapToken_Sanitarium_AdText": "-Purchasing this item directly supports the creators of the Sanitarium (ZI) community map.",
"TF_Map_Devastation": "Devastation (ZI)",
"TF_MapToken_Devastation": "Map Stamp - Devastation (ZI)",
"TF_MapToken_Devastation_Desc": "A Zombie Infection (Community) Map\n\nMade by Jordan 'Ismaciodismorphus' La Rose, netmuck, Liam 'Diva Dan' Moffitt, Aeon 'Void' Bollig, and Alex 'FGD5' Stewart\n\nPurchasing this item directly supports the creators of the Devastation community map.  Show your support today!",
"TF_MapToken_Devastation_AdText": "-Purchasing this item directly supports the creators of the Devastation (ZI) community map.",
"TF_Map_Snowtower": "Snowtower",
"TF_MapToken_Snowtower": "Map Stamp - Snowtower",
"TF_MapToken_Snowtower_Desc": "A King of the Hill Map\n\nMade by Aeon 'Void' Bollig, Al 'Square' Rodgers, EArkham, Keldos, KrazyZark, Maxime 'fubar' Dupuis, Tim 'sedisocks' BL, and Zach 'Exactol' Matuson\n\nPurchasing this item directly supports the creators of the Snowtower community map.  Show your support today!",
"TF_MapToken_Snowtower_AdText": "-Purchasing this item directly supports the creators of the Snowtower community map.",
"TF_Map_Krampus": "Krampus",
"TF_MapToken_Krampus": "Map Stamp - Krampus",
"TF_MapToken_Krampus_Desc": "A King of the Hill Map\n\nMade by Artur Eichmann, Joel 'zythe_' Morscher, Phe, Lizard Of Oz, sky, Lothudus, Parker 'razoldon', Ilia 'dotflare', Yiming 'Coolchou' Zhao, Ben 'doctorsteen' Meyer, Lerd, and HirschVA\n\nPurchasing this item directly supports the creators of the Krampus community map.  Show your support today!",
"TF_MapToken_Krampus_AdText": "-Purchasing this item directly supports the creators of the Krampus community map.",
"TF_Map_Haarp": "Haarp",
"TF_MapToken_Haarp": "Map Stamp - Haarp",
"TF_MapToken_Haarp_Desc": "An Attack/Defend Capture the Flag Map\n\nMade by Andrew 'Dr. Spud' Thompson, Fay L. 'nineaxis' Fabry, Alex 'Rexy' Kreeger, and Jim 'Timberghost' Wiser\n\nPurchasing this item directly supports the creators of the Haarp community map.  Show your support today!",
"TF_MapToken_Haarp_AdText": "-Purchasing this item directly supports the creators of the Haarp community map.",
"TF_Map_Brew": "Brew",
"TF_MapToken_Brew": "Map Stamp - Brew",
"TF_MapToken_Brew_Desc": "An Attack/Defend Control Point Map\n\nMade by Liam 'Diva Dan' Moffitt, Emil Sharafeev, Alex 'FGD5' Stewart, Aeon 'Void' Bollig, Stuffy360, and Tim 'Sedisocks' BL\n\nPurchasing this item directly supports the creators of the Brew community map.  Show your support today!",
"TF_MapToken_Brew_AdText": "-Purchasing this item directly supports the creators of the Brew community map.",
"TF_Map_Hacksaw": "Hacksaw",
"TF_MapToken_Hacksaw": "Map Stamp - Hacksaw",
"TF_MapToken_Hacksaw_Desc": "A Payload Race Map\n\nMade by Liam 'Diva Dan' Moffitt, Viscaedis, Al 'Square' Rodgers, E-Arkham, Aeon 'Void' Bollig, Juniper, Alex 'FGD5' Stewart, and Lauren 'Yrrzy' Godfrey\n\nPurchasing this item directly supports the creators of the Hacksaw community map.  Show your support today!",
"TF_MapToken_Hacksaw_AdText": "-Purchasing this item directly supports the creators of the Hacksaw community map.",
"TF_Map_TurbineEvent": "Turbine Center",
"TF_MapToken_TurbineEvent": "Map Stamp - Turbine Center",
"TF_MapToken_TurbineEvent_Desc": "A Capture the Flag Map\n\nMade by Stuffy360, Bill Johnston, Chickenman, and Alex 'FGD5' Stewart\n\nPurchasing this item directly supports the creators of the Turbine Center community map.  Show your support today!",
"TF_MapToken_TurbineEvent_AdText": "-Purchasing this item directly supports the creators of the Turbine Center community map.",
"TF_Map_Carrier": "Carrier",
"TF_MapToken_Carrier": "Map Stamp - Carrier",
"TF_MapToken_Carrier_Desc": "A Capture the Flag Map\n\nMade by John 'MilkMaster72' Worden, Lizard Of Oz, Aeon 'Void' Bollig, Juniper, Yiming 'Coolchou' Zhao, theatreTECHIE, PearForceOne, Harlen 'UEAKCrash' Linke, Zoey Smith, Tim 'SediSocks' BL, Jen 'NeoDement' Burnett, Erik 'Colteh' Coltey, Populus, Al 'Square' Rodgers, Benjamin 'blaholtzen' Blåholtz, Logan McCloud, and donhonk\n\nPurchasing this item directly supports the creators of the Carrier community map.  Show your support today!",
"TF_MapToken_Carrier_AdText": "-Purchasing this item directly supports the creators of the Carrier community map.",
"TF_Map_Galleria": "Galleria",
"TF_MapToken_Galleria": "Map Stamp - Galleria",
"TF_MapToken_Galleria_Desc": "A Player Destruction Map\n\nMade by Patrick 'Zeus' Hennessy, James Jameson, Gabriel 'MCL15' Macken, Alex 'FGD5' Stewart, Paul 'Brokk' Clausen, Chandler 'OctoBlitz' Dunaway, Stuffy360, Kirill 'BadassCook' Ruzanov, Brandon 'Bonk Nickeltoon' Koller, and Robert 'Spleep' Chisholm\n\nPurchasing this item directly supports the creators of the Galleria community map.  Show your support today!",
"TF_MapToken_Galleria_AdText": "-Purchasing this item directly supports the creators of the Galleria community map.",
"TF_Map_Emerge": "Emerge",
"TF_MapToken_Emerge": "Map Stamp - Emerge",
"TF_MapToken_Emerge_Desc": "A Payload Map\n\nMade by Jess 'Muddy' Dabbs, Joe 'FruitySnacks' Radak, Freyja, and Minty 'Katsu! :3' Aulenrose\n\nPurchasing this item directly supports the creators of the Emerge community map.  Show your support today!",
"TF_MapToken_Emerge_AdText": "-Purchasing this item directly supports the creators of the Emerge community map.",
"TF_Map_Camber": "Camber",
"TF_MapToken_Camber": "Map Stamp - Camber",
"TF_MapToken_Camber_Desc": "A Payload Map\n\nMade by Louie 'bakscratch' Turner, Nick 'nickybakes' Baker, and Liam 'Diva Dan' Moffitt\n\nPurchasing this item directly supports the creators of the Camber community map.  Show your support today!",
"TF_MapToken_Camber_AdText": "-Purchasing this item directly supports the creators of the Camber community map.",
"TF_Map_Embargo": "Embargo",
"TF_MapToken_Embargo": "Map Stamp - Embargo",
"TF_MapToken_Embargo_Desc": "A Payload Map\n\nMade by João 'Hoppkins' Marcos, Patrick 'Zeus' Hennessy, Rodrigo 'Rapoza Dynamica' Carneri, Torkil 'TheLazerSofa' Malvik Bidtnes, Lizard Of Oz, Vasilis 'Billo' Chatzikostas, Maksim 'Velly' Streltsov, Szabó 'Maxxy' Attila, Elian 'iron' Rodriguez, Sarah Jane Eve, Chandler 'OctoBlitz' Dunaway, Alex 'FGD5' Stewart, Nick 'nickybakes' Baker, and Audionexx\n\nPurchasing this item directly supports the creators of the Embargo community map.  Show your support today!",
"TF_MapToken_Embargo_AdText": "-Purchasing this item directly supports the creators of the Embargo community map.",
"TF_Map_Odyssey": "Odyssey",
"TF_MapToken_Odyssey": "Map Stamp - Odyssey",
"TF_MapToken_Odyssey_Desc": "A Payload Map\n\nMade by Evan 'Defcon' LeBlanc, Nickolas 'KrazyZark' Fenech, Freyja, and Sarexicus\n\nPurchasing this item directly supports the creators of the Odyssey community map.  Show your support today!",
"TF_MapToken_Odyssey_AdText": "-Purchasing this item directly supports the creators of the Odyssey community map.",
"TF_Map_Megaton": "Megaton",
"TF_MapToken_Megaton": "Map Stamp - Megaton",
"TF_MapToken_Megaton_Desc": "A King of the Hill Map\n\nMade by Aeon 'Void' Bollig, Juniper, Liam 'Diva Dan' Moffitt, Sky, Freyja, and donhonk\n\nPurchasing this item directly supports the creators of the Megaton community map.  Show your support today!",
"TF_MapToken_Megaton_AdText": "-Purchasing this item directly supports the creators of the Megaton community map.",
"TF_Map_Cachoeira": "Cachoeira",
"TF_MapToken_Cachoeira": "Map Stamp - Cachoeira",
"TF_MapToken_Cachoeira_Desc": "A King of the Hill Map\n\nMade by Aleksei 'Fiddleford' Istomin, Rhafael 'Rhamkin' Oliveira, Torkil 'TheLazerSofa' Malvik Bidtnes, Rodrigo 'Rapoza Dynamica' Carneri, Patrick 'Zeus' Hennessy, Operabay, Szabó 'Maxxy' Attila, Jonathan 'Setry' Gitlits, Artemy 'FlowerShopGuy' Maltsev, Justin 'Kerpongle' Lindstrom, Nickolas 'krazyZark' Fenech, 'Rito, and Juniper\n\nPurchasing this item directly supports the creators of the Cachoeira community map.  Show your support today!",
"TF_MapToken_Cachoeira_AdText": "-Purchasing this item directly supports the creators of the Cachoeira community map.",
"TF_Map_Overgrown": "Overgrown",
"TF_MapToken_Overgrown": "Map Stamp - Overgrown",
"TF_MapToken_Overgrown_Desc": "An Attack/Defend Control Point Map\n\nMade by Harlen 'UEAKCrash' Linke, PearForceOne, Juniper, Aeon 'Void' Bollig, Erik 'Colteh' Coltey, Freyja, and E-Arkham\n\nPurchasing this item directly supports the creators of the Overgrown community map.  Show your support today!",
"TF_MapToken_Overgrown_AdText": "-Purchasing this item directly supports the creators of the Overgrown community map.",
"TF_Map_Hadal": "Hadal",
"TF_MapToken_Hadal": "Map Stamp - Hadal",
"TF_MapToken_Hadal_Desc": "An Attack/Defend Control Point Map\n\nMade by Juha 'Jusa' Kuoppala and Maxime 'Fubar' Dupuis\n\nPurchasing this item directly supports the creators of the Hadal community map.  Show your support today!",
"TF_MapToken_Hadal_AdText": "-Purchasing this item directly supports the creators of the Hadal community map.",
"TF_Map_Applejack": "Applejack",
"TF_MapToken_Applejack": "Map Stamp - Applejack",
"TF_MapToken_Applejack_Desc": "A Capture the Flag Map\n\nMade by Rhafael 'Rhamkin' Oliveira, Al 'Square' Rodgers, Yiming 'Coolchou' Zhao, Alex 'FGD5' Stewart, and Aeon 'Void' Bollig\n\nPurchasing this item directly supports the creators of the Applejack community map.  Show your support today!",
"TF_MapToken_Applejack_AdText": "-Purchasing this item directly supports the creators of the Applejack community map.",
"TF_Map_AtomSmash": "Atom Smash",
"TF_MapToken_AtomSmash": "Map Stamp - Atom Smash",
"TF_MapToken_AtomSmash_Desc": "A Player Destruction Map\n\nMade by Aeon 'Void' Bollig, Juniper, Mike 'CornetTheory' Hillard, Liam 'Diva Dan' Moffitt, Sky, Freyja, Zoey, Benjamin 'blaholtzen' Blåholtz, PearForceOne, and Tim 'SediSocks' BL\n\nPurchasing this item directly supports the creators of the Atom Smash community map.  Show your support today!",
"TF_MapToken_AtomSmash_AdText": "-Purchasing this item directly supports the creators of the Atom Smash community map.",
"TF_Map_Canaveral": "Canaveral",
"TF_MapToken_Canaveral": "Map Stamp - Canaveral",
"TF_MapToken_Canaveral_Desc": "A Control Point Map\n\nMade by Jesse 'Custard1' Budd, Patrick 'Zeus' Hennessy, William 'Cheesypuff' Bartley-Bolster, Brandon 'Bonk Nickeltoon' Koller, Bailey 'Glitch' Hodges, Nickolas 'krazyZark' Fenech, and Louie 'bakscratch' Turner\n\nPurchasing this item directly supports the creators of the Canaveral community map.  Show your support today!",
"TF_MapToken_Canaveral_AdText": "-Purchasing this item directly supports the creators of the Canaveral community map.",
"TF_Map_Burghausen": "Burghausen",
"TF_MapToken_Burghausen": "Map Stamp - Burghausen",
"TF_MapToken_Burghausen_Desc": "A Medieval Attack/Defend Control Point Map\n\nMade by Christoph 'Gadget' Manschitz\n\nPurchasing this item directly supports the creator of the Burghausen community map.  Show your support today!",
"TF_MapToken_Burghausen_AdText": "-Purchasing this item directly supports the creator of the Burghausen community map.",
"TF_Map_Toxic": "Toxic",
"TF_MapToken_Toxic": "Map Stamp - Toxic",
"TF_MapToken_Toxic_Desc": "A King of the Hill Map\n\nMade by Matthew 'Panckakebro' Hiller, Elián 'iron' Rodríguez, Denis 'xB33' Varchulik, Phe, Stuffy360, and Louie 'bakscratch' Turner\n\nPurchasing this item directly supports the creators of the Toxic community map.  Show your support today!",
"TF_MapToken_Toxic_AdText": "-Purchasing this item directly supports the creators of the Toxic community map.",
"TF_Map_Darkmarsh": "Darkmarsh",
"TF_MapToken_Darkmarsh": "Map Stamp - Darkmarsh",
"TF_MapToken_Darkmarsh_Desc": "An Attack/Defend Control Point Map\n\nMade by Elián 'iron' Rodríguez, Matthew 'Panckakebro' Hiller, and Ryan 'Chill' Foy\n\nPurchasing this item directly supports the creators of the Darkmarsh community map.  Show your support today!",
"TF_MapToken_Darkmarsh_AdText": "-Purchasing this item directly supports the creators of the Darkmarsh community map.",
"TF_Map_FreakyFair": "Freaky Fair",
"TF_MapToken_FreakyFair": "Map Stamp - Freaky Fair",
"TF_MapToken_FreakyFair_Desc": "A Control Point Map\n\nMade by Emil Sharafeev, George 'I dinne ken' Norman, Liam 'Diva Dan' Moffitt, Patrik 'Nat-Tea' Naplava, Aeon 'Void' Bollig, Wilson, Stuffy360, and Ranily\n\nPurchasing this item directly supports the creators of the Freaky Fair community map.  Show your support today!",
"TF_MapToken_FreakyFair_AdText": "-Purchasing this item directly supports the creators of the Freaky Fair community map.",
"TF_Map_Dynamite": "Dynamite",
"TF_MapToken_Dynamite": "Map Stamp - Dynamite",
"TF_MapToken_Dynamite_Desc": "A Tug of War (Community) Map\n\nMade by Will Alfred, Jordan 'Ismac' La Rose, Lizard Of Oz, Haau, Aydan, Neal 'Blade x64' Smart, and Liam 'Diva Dan' Moffitt\n\nPurchasing this item directly supports the creators of the Dynamite community map.  Show your support today!",
"TF_MapToken_Dynamite_AdText": "-Purchasing this item directly supports the creators of the Dynamite community map.",
"TF_Map_Circus": "Circus",
"TF_MapToken_Circus": "Map Stamp - Circus",
"TF_MapToken_Circus_Desc": "A Player Destruction Map\n\nMade by Liam 'Diva Dan' Moffitt, Aeon 'Void' Bollig, and donhonk\n\nPurchasing this item directly supports the creators of the Circus community map.  Show your support today!",
"TF_MapToken_Circus_AdText": "-Purchasing this item directly supports the creators of the Circus community map.",
"TF_Map_Outburst": "Outburst (VSH)",
"TF_MapToken_Outburst": "Map Stamp - Outburst (VSH)",
"TF_MapToken_Outburst_Desc": "A Versus Saxton Hale (Community) Map\n\nMade by Lizard Of Oz, Phe, Szabó 'Maxxy' Attila, Maksim 'VellyVice' Streltsov, Matthew 'MegapiemanPHD' Simmons, James M., Jason 'Yaki' Herman, Joaquim 'JPRAS' Silva, and Stuffy360\n\nPurchasing this item directly supports the creators of the Outburst community map.  Show your support today!",
"TF_MapToken_Outburst_AdText": "-Purchasing this item directly supports the creators of the Outburst (VSH) community map.",
"TF_Map_Blazehattan": "Blazehattan (ZI)",
"TF_MapToken_Blazehattan": "Map Stamp - Blazehattan (ZI)",
"TF_MapToken_Blazehattan_Desc": "A Zombie Infection (Community) Map\n\nMade by Emil Sharafeev, Patrik 'Nat-Tea' Naplava, Aeon 'Void' Bollig, Liam 'Diva Dan' Moffitt, and netmuck\n\nPurchasing this item directly supports the creators of the Blazehattan community map.  Show your support today!",
"TF_MapToken_Blazehattan_AdText": "-Purchasing this item directly supports the creators of the Blazehattan (ZI) community map.",
"TF_Map_Overcast": "Overcast",
"TF_MapToken_Overcast": "Map Stamp - Overcast",
"TF_MapToken_Overcast_Desc": "A King of the Hill Map\n\nMade by Slowmotion Milk, Ethan Stokes, and Dr Vlad Crazy\n\nPurchasing this item directly supports the creators of the Overcast community map.  Show your support today!",
"TF_MapToken_Overcast_AdText": "-Purchasing this item directly supports the creators of the Overcast community map.",
"TF_Map_Fortezza": "Fortezza",
"TF_MapToken_Fortezza": "Map Stamp - Fortezza",
"TF_MapToken_Fortezza_Desc": "An Attack/Defend Control Point Map\n\nMade by Josh 'Gruppy' Baughman, Nickolas 'KrazyZark' Fenech, Kubie, and Alien31\n\nPurchasing this item directly supports the creators of the Fortezza community map.  Show your support today!",
"TF_MapToken_Fortezza_AdText": "-Purchasing this item directly supports the creators of the Fortezza community map.",
"TF_Map_PenguinPeak": "Penguin Peak",
"TF_MapToken_PenguinPeak": "Map Stamp - Penguin Peak",
"TF_MapToken_PenguinPeak_Desc": "A Capture the Flag Map\n\nMade by Chris 'Another Bad Pun' Williams, Bec 'phi' Ailes, James 'chin' Hayes, Eric 'erk' Browning, Liam 'Diva Dan' Moffitt, Stuffy360, Aeon 'Void' Bollig, Nickolas 'KrazyZark' Fenech, Al 'Square' Rodgers, and Sam D. Wich\n\nPurchasing this item directly supports the creators of the Penguin Peak community map.  Show your support today!",
"TF_MapToken_PenguinPeak_AdText": "-Purchasing this item directly supports the creators of the Penguin Peak community map.",
"TF_Map_Patagonia": "Patagonia",
"TF_MapToken_Patagonia": "Map Stamp - Patagonia",
"TF_MapToken_Patagonia_Desc": "A Payload Map\n\nMade by Elián 'iron' Rodríguez, Matthew 'Panckakebro' Hiller, João 'Hoppkins' Marcos, and Stuffy360\n\nPurchasing this item directly supports the creators of the Patagonia community map.  Show your support today!",
"TF_MapToken_Patagonia_AdText": "-Purchasing this item directly supports the creators of the Patagonia community map.",
"TF_Map_Cutter": "Cutter",
"TF_MapToken_Cutter": "Map Stamp - Cutter",
"TF_MapToken_Cutter_Desc": "A Payload Race Map\n\nMade by Paul 'puxorb' Broxup, Brie, Nickolas 'KrazyZark' Fenech, Liam 'Diva Dan' Moffitt, Aeon 'Void' Bollig, Erik 'Colteh' Coltey, Extra Ram, Mattie Konig, Tim 'Sedisocks' Brown Lees, Patrick 'Zeus' Hennessy, and Zoey Smith\n\nPurchasing this item directly supports the creators of the Cutter community map.  Show your support today!",
"TF_MapToken_Cutter_AdText": "-Purchasing this item directly supports the creators of the Cutter community map.",
"TF_Map_Maul": "Maul (VSH)",
"TF_MapToken_Maul": "Map Stamp - Maul (VSH)",
"TF_MapToken_Maul_Desc": "A Versus Saxton Hale (Community) Map\n\nMade by Matthew Scott 'MegapiemanPHD' Simmons, Brandon 'Bonk Nickeltoon' Koller, Szabó 'Maxxy' Attila, Patrick 'Zeus' Hennessy, Lizard Of Oz, Stuffy360, James Jameson, Phe, Mattie Konig, Alex 'FGD5' Stewart, Maksim 'Velly' Streltsov, Jason 'Yaki' Herman, Jesse 'Custard1' Budd, Joaquim 'JPRAS' Silva, Samuel 'ChargingTurnip' Turner, Alex 'Lacry' Couto, James M., Torkil 'TheLazerSofa' Malvik Bidtnes, and Sky\n\nPurchasing this item directly supports the creators of the Maul community map.  Show your support today!",
"TF_MapToken_Maul_AdText": "-Purchasing this item directly supports the creators of the Maul (VSH) community map.",
"TF_Map_Citadel": "Citadel",
"TF_MapToken_Citadel": "Map Stamp - Citadel",
"TF_MapToken_Citadel_Desc": "A Payload Map\n\nMade by Evan 'Defcon' LeBlanc, Nickolas 'KrazyZark' Fenech, Sarexicus, Freyja, and Ficool2\n\nPurchasing this item directly supports the creators of the Citadel community map.  Show your support today!",
"TF_MapToken_Citadel_AdText": "-Purchasing this item directly supports the creators of the Citadel community map.",
"TF_Map_Aquarius": "Aquarius",
"TF_MapToken_Aquarius": "Map Stamp - Aquarius",
"TF_MapToken_Aquarius_Desc": "A Payload Map\n\nMade by Alien31, Andrew 'Bengali Hedgehog' Mishchuk, Christopher 'Gadget' Manschitz, Dansky, Logan 'Cipherlock' Eaton, Lucky, Mitchell 'AltraNade' Leyte, Neal 'Blade x64' Smart, Szabó 'Maxxy' Attila, Torkil 'TheLazerSofa' Malvik Bidtnes, and Maxime 'Fubar' Dupuis\n\nPurchasing this item directly supports the creators of the Aquarius community map.  Show your support today!",
"TF_MapToken_Aquarius_AdText": "-Purchasing this item directly supports the creators of the Aquarius community map.",
"TF_Map_Fulgur": "Fulgur",
"TF_MapToken_Fulgur": "Map Stamp - Fulgur",
"TF_MapToken_Fulgur_Desc": "An Attack/Defend Control Point Map\n\nMade by Michał 'AsG_Alligator' Byczko, Aeon 'Void' Bollig, Kimberly 'iiboharz' Riswick, Alex 'Rexy' Kreeger, Juniper, Berry, and Maxime 'Fubar' Dupuis\n\nPurchasing this item directly supports the creators of the Fulgur community map.  Show your support today!",
"TF_MapToken_Fulgur_AdText": "-Purchasing this item directly supports the creators of the Fulgur community map.",
"TF_Map_Cargo": "Cargo",
"TF_MapToken_Cargo": "Map Stamp - Cargo",
"TF_MapToken_Cargo_Desc": "An Attack/Defend Control Point Map\n\nMade by Phe, Joel 'zythe_' Morscher, Ilija 'Potat Master' Radošević, Christoph 'Gadget' Manschitz, Freyja, Alex 'FGD5' Stewart, Benjamin 'blaholtzen' Blåholtz, and Sonoma 'Sono' Bryer\n\nPurchasing this item directly supports the creators of the Cargo community map.  Show your support today!",
"TF_MapToken_Cargo_AdText": "-Purchasing this item directly supports the creators of the Cargo community map.",
"TF_Map_Conifer": "Conifer",
"TF_MapToken_Conifer": "Map Stamp - Conifer",
"TF_MapToken_Conifer_Desc": "An Attack/Defend Control Point Map\n\nMade by Michał 'AsG_Alligator' Byczko, Aeon 'Void' Bollig, Kimberly 'iiboharz' Riswick, Ivan 'Crowbar' Sokolov, EArkham, Alex 'MaccyF' MacFarquhar, and Maxime 'Fubar' Dupuis\n\nPurchasing this item directly supports the creators of the Conifer community map.  Show your support today!",
"TF_MapToken_Conifer_AdText": "-Purchasing this item directly supports the creators of the Conifer community map.",
"TF_Map_Boardwalk": "Boardwalk",
"TF_MapToken_Boardwalk": "Map Stamp - Boardwalk",
"TF_MapToken_Boardwalk_Desc": "A King of the Hill Map\n\nMade by Aeon 'Void' Bollig, Juniper, Cody 'MasterGir' Littlefield, Liam 'Diva Dan' Moffitt, Freyja, Zoey, and Benjamin 'blaholtzen' Blåholtz\n\nPurchasing this item directly supports the creators of the Boardwalk community map.  Show your support today!",
"TF_MapToken_Boardwalk_AdText": "-Purchasing this item directly supports the creators of the Boardwalk community map.",
"TF_Map_Blowout": "Blowout",
"TF_MapToken_Blowout": "Map Stamp - Blowout",
"TF_MapToken_Blowout_Desc": "A King of the Hill Map\n\nMade by Joel 'zythe_' Morscher, Phe, Alex 'FGD5' Stewart, Benjamin 'blaholtzen' Blåholtz, Lothudus, and Mitchell 'AltraNade' Leyte\n\nPurchasing this item directly supports the creators of the Blowout community map.  Show your support today!",
"TF_MapToken_Blowout_AdText": "-Purchasing this item directly supports the creators of the Blowout community map.",
"TF_Map_Mannhole": "Mannhole",
"TF_MapToken_Mannhole": "Map Stamp - Mannhole",
"TF_MapToken_Mannhole_Desc": "A King of the Hill Map\n\nMade by Harlen 'UEAKCrash' Linke, Aeon 'Void' Bollig, Benjamin 'blaholtzen' Blåholtz, Alex 'FGD5' Stewart, Al 'Square' Rodgers, Norman 'Mikusch' Masanek, Juniper, donhonk, and Freyja\n\nPurchasing this item directly supports the creators of the Mannhole community map.  Show your support today!",
"TF_MapToken_Mannhole_AdText": "-Purchasing this item directly supports the creators of the Mannhole community map.",
"TF_Map_Demolition": "Demolition",
"TF_MapToken_Demolition": "Map Stamp - Demolition",
"TF_MapToken_Demolition_Desc": "A King of the Hill Map\n\nMade by Entropy Tempus, Andrea 'DoctorDoomtrain64' DeStephan, Hunter 'Seacat08' Way, and Goobert\n\nPurchasing this item directly supports the creators of the Demolition community map.  Show your support today!",
"TF_MapToken_Demolition_AdText": "-Purchasing this item directly supports the creators of the Demolition community map.",
"TF_Map_Pressure": "Pressure",
"TF_MapToken_Pressure": "Map Stamp - Pressure",
"TF_MapToken_Pressure_Desc": "A Capture the Flag Map\n\nMade by Mitchell 'AltraNade' Leyte, MuhNamesGreen, Dansky, Joel 'zythe_' Morscher, James 'lolripk' Stevens, Szabó 'Maxxy' Attila, James 'McGuinnsBook' McGuinn, Alien31, Phe, and Glebotron\n\nPurchasing this item directly supports the creators of the Pressure community map.  Show your support today!",
"TF_MapToken_Pressure_AdText": "-Purchasing this item directly supports the creators of the Pressure community map.",
"TF_Map_Cowerhouse": "Cowerhouse",
"TF_MapToken_Cowerhouse": "Map Stamp - Cowerhouse",
"TF_MapToken_Cowerhouse_Desc": "A Control Point Map\n\nMade by CanadianBill, Alex 'FGD5' Stewart, Patrick 'Zeus' Hennessy, Liam 'Diva Dan' Moffitt, and PearForceOne\n\nPurchasing this item directly supports the creators of the Cowerhouse community map.  Show your support today!",
"TF_MapToken_Cowerhouse_AdText": "-Purchasing this item directly supports the creators of the Cowerhouse community map.",
"TF_Map_Dusker": "Dusker",
"TF_MapToken_Dusker": "Map Stamp - Dusker",
"TF_MapToken_Dusker_Desc": "A King of the Hill Map\n\nMade by Tristan 'Alox' Haguet, Joel 'zythe_' Morscher, Aeon 'Void' Bollig, Lothudus, and Stuffy360\n\nPurchasing this item directly supports the creators of the Dusker community map.  Show your support today!",
"TF_MapToken_Dusker_AdText": "-Purchasing this item directly supports the creators of the Dusker community map.",
"TF_Map_Afterlife": "Afterlife",
"TF_MapToken_Afterlife": "Map Stamp - Afterlife",
"TF_MapToken_Afterlife_Desc": "An Arena Map\n\nMade by John 'Piogre' Wolfe, Lizard of Oz, Matvey 'ImAware' Usatov, HirschVA, and Isaac 'IJCT' Cortissoz\n\nPurchasing this item directly supports the creators of the Afterlife community map.  Show your support today!",
"TF_MapToken_Afterlife_AdText": "-Purchasing this item directly supports the creators of the Afterlife community map.",
"TF_Map_Devilcross": "Devilcross",
"TF_MapToken_Devilcross": "Map Stamp - Devilcross",
"TF_MapToken_Devilcross_Desc": "A Capture the Flag Map\n\nMade by Harlen 'UEAKCrash' Linke, Liam 'Diva Dan' Moffitt, and Daniel 'DJ' Bennett\n\nPurchasing this item directly supports the creators of the Devilcross community map.  Show your support today!",
"TF_MapToken_Devilcross_AdText": "-Purchasing this item directly supports the creators of the Devilcross community map.",
"TF_Map_Marshlands": "Marshlands",
"TF_MapToken_Marshlands": "Map Stamp - Marshlands",
"TF_MapToken_Marshlands_Desc": "A Hold the Flag (Community) Map\n\nMade by Tristan 'Alox' Haguet and Lothudus\n\nPurchasing this item directly supports the creators of the Marshlands community map.  Show your support today!",
"TF_MapToken_Marshlands_AdText": "-Purchasing this item directly supports the creators of the Marshlands community map.",
"TF_Map_Unknown": "Map not found!",
"TF_Map_cp_powerhouse": "Powerhouse",
"TF_Map_cp_dustbowl": "Dustbowl",
"TF_Map_cp_gorge": "Gorge",
"TF_Map_cp_gravelpit": "Gravelpit",
"TF_Map_ctf_2fort": "2Fort",
"TF_Map_ctf_doublecross": "Doublecross",
"TF_Map_ctf_sawmill": "Sawmill",
"TF_Map_ctf_well": "Well",
"TF_Map_cp_5gorge": "5Gorge",
"TF_Map_cp_badlands": "Badlands",
"TF_Map_cp_granary": "Granary",
"TF_Map_cp_well": "Well",
"TF_Map_cp_foundry": "Foundry",
"TF_Map_koth_badlands": "Badlands",
"TF_Map_koth_nucleus": "Nucleus",
"TF_Map_koth_sawmill": "Sawmill",
"TF_Map_koth_viaduct": "Viaduct",
"TF_Map_pl_badwater": "Badwater",
"TF_Map_pl_goldrush": "Goldrush",
"TF_Map_pl_thundermountain": "Thundermountain",
"TF_Map_pl_upward": "Upward",
"TF_Map_pl_barnblitz": "Barnblitz",
"TF_Map_pl_cactuscanyon": "Cactus Canyon - BETA",
"TF_Map_plr_hightower": "Hightower",
"TF_Map_plr_pipeline": "Pipeline",
"TF_Map_sd_doomsday": "Doomsday",
"TF_Map_koth_lakeside_event": "Ghost Fort",
"TF_Map_koth_viaduct_event": "Eyeaduct",
"TF_Map_plr_hightower_event": "Helltower",
"TF_Map_koth_harvest_event": "Harvest Event",
"TF_Map_sd_doomsday_event": "Carnival of Carnage",
"TF_Map_arena_badlands": "Badlands Arena",
"TF_Map_arena_granary": "Granary Arena",
"TF_Map_arena_lumberyard": "Lumberyard Arena",
"TF_Map_arena_nucleus": "Nucleus Arena",
"TF_Map_arena_ravine": "Ravine Arena",
"TF_Map_arena_sawmill": "Sawmill Arena",
"TF_Map_arena_well": "Well Arena",
"TF_Map_rd_asteroid": "RD Asteroid - BETA",
"TF_Map_powerup_ctf_foundry": "Foundry",
"TF_Map_powerup_ctf_gorge": "Gorge",
"TF_Map_powerup_ctf_thundermountain": "Thundermountain",
"TF_Map_powerup_ctf_hellfire": "Hellfire",
"TF_Map_pass_brickyard": "Brickyard",
"TF_Map_pass_timbertown": "Timbertown",
"TF_Map_pass_district": "District",
"TF_Map_tc_hydro": "Hydro",
"TF_Map_cp_degrootkeep": "DeGroot Keep",
"TF_Map_tr_dustbowl": "Dustbowl (Training)",
"TF_Map_tr_target": "Target (Training)",
"TF_Map_cp_mercenarypark": "Mercenary Park",
"TF_Egypt_StrangePrefix": " Egyptian",
"TF_Junction_StrangePrefix": " Technical",
"TF_MountainLab_StrangePrefix": " Rugged",
"TF_Steel_StrangePrefix": " Rigid",
"TF_Gullywash_StrangePrefix": " Sophisticated",
"TF_Turbine_StrangePrefix": " Hydraulic",
"TF_Coldfront_StrangePrefix": " Frosty",
"TF_Fastlane_StrangePrefix": " Outlaw",
"TF_Freight_StrangePrefix": " Locomotive",
"TF_Yukon_StrangePrefix": " Canadian",
"TF_Harvest_StrangePrefix": " Fresh",
"TF_Lakeside_StrangePrefix": " Sun-Kissed",
"TF_KongKing_StrangePrefix": " MennKo",
"TF_Frontier_StrangePrefix": " Wild",
"TF_Hoodoo_StrangePrefix": " Psychadelic",
"TF_Nightfall_StrangePrefix": " Dazzling",
"TF_WatchTower_StrangePrefix": " Vigilant",
"TF_Offblast_StrangePrefix": " Covert",
"TF_ManorEvent_StrangePrefix": " Spooky",
"TF_Map_Process_StrangePrefix": " Efficient",
"TF_Map_Standin_StrangePrefix": " Chaotic",
"TF_Map_Snakewater_StrangePrefix": " Venomous",
"TF_Map_Snowplow_StrangePrefix": " Frozen",
"TF_Map_Borneo_StrangePrefix": " Tropical",
"TF_Map_Suijin_StrangePrefix": " Water-Logged",
"TF_Map_2FortInv_StrangePrefix": " Andromedan",
"TF_Map_Watergate_StrangePrefix": " Reptiloid",
"TF_Map_Byre_StrangePrefix": " Unidentified",
"TF_Map_Probed_StrangePrefix": " Classified",
"TF_Map_GorgeEvent_StrangePrefix": " Gluttonous",
"TF_Map_SunshineEvent_StrangePrefix": " Sinful",
"TF_Map_MoonshineEvent_StrangePrefix": " Gibbous",
"TF_Map_MillstoneEvent_StrangePrefix": " Infernal",
"TF_Map_Snowycoast_StrangePrefix": " Chilled",
"TF_Map_Vanguard_StrangePrefix": " Hammered",
"TF_Map_Landfall_StrangePrefix": " Rustic",
"TF_Map_Highpass_StrangePrefix": " Sun-Baked",
"TF_Map_Sunshine_StrangePrefix": " Sunburned",
"TF_Map_Metalworks_StrangePrefix": " Drop-Forged",
"TF_Map_Swiftwater_StrangePrefix": " Breathtaking",
"TF_Map_MapleRidgeEvent_StrangePrefix": " Sinister",
"TF_Map_Brimstone_StrangePrefix": " Infernal",
"TF_Map_PitofDeath_StrangePrefix": " Plunging",
"TF_Map_Mossrock_StrangePrefix": " Blooming",
"TF_Map_Lazarus_StrangePrefix": " Resurrecting",
"TF_Map_BananaBay_StrangePrefix": " Ripe",
"TF_Map_Enclosure_StrangePrefix": " Feral",
"TF_Map_Brazil_StrangePrefix": " Verde",
"TF_Map_2Fort_StrangePrefix": " Classic",
"TF_Map_Dustbowl_StrangePrefix": " Dirty",
"TF_Map_Upward_StrangePrefix": " Ascending",
"TF_Map_Badwater_StrangePrefix": " Contaminated",
"TF_Map_Hightower_StrangePrefix": " Towering",
"TF_Map_Goldrush_StrangePrefix": " Prospecting",
"TF_Map_DegrootKeep_StrangePrefix": " Medieval",
"TF_Map_ThunderMountain_StrangePrefix": " Rumbling",
"TF_Map_Coaltown_StrangePrefix": " Combustible",
"TF_Map_Mannhattan_StrangePrefix": " Empiric",
"TF_Map_BagelEvent_StrangePrefix": " Scalding",
"TF_Map_RumbleEvent_StrangePrefix": " Haunted",
"TF_Map_MonsterBash_StrangePrefix": " Experimental",
"TF_Map_Slasher_StrangePrefix": " Slashing",
"TF_Map_CursedCove_StrangePrefix": " Cursed",
"TF_Map_Laughter_StrangePrefix": " Laughing",
"TF_Map_Precipice_StrangePrefix": " Threatening",
"TF_Map_Megalo_StrangePrefix": " Monstrous",
"TF_Map_HassleCastle_StrangePrefix": " Harassing",
"TF_Map_Bloodwater_StrangePrefix": " Bloodthirsty",
"TF_Map_UndergroveEvent_StrangePrefix": " Decomposing",
"TF_Map_Pier_StrangePrefix": " Entertaining",
"TF_Map_SnowVille_StrangePrefix": " Frostbitten",
"TF_Map_Snowfall_StrangePrefix": " Snowy",
"TF_Map_Wutville_StrangePrefix": " Vibrant",
"TF_Map_Farmageddon_StrangePrefix": " Agrarian",
"TF_Map_Sinthetic_StrangePrefix": " Malicious",
"TF_Map_LosMuertos_StrangePrefix": " Calavera",
"TF_Map_Erebus_StrangePrefix": " Underworldly",
"TF_Map_Terror_StrangePrefix": " Terrifying",
"TF_Map_Graveyard_StrangePrefix": " Grave-Robbed",
"TF_Map_Polar_StrangePrefix": " Arctic",
"TF_Map_BreadSpace_StrangePrefix": " Lunar",
"TF_Map_Chilly_StrangePrefix": " Invigorating",
"TF_Map_Cascade_StrangePrefix": " Mountaineering",
"TF_Map_Altitude_StrangePrefix": " Alpine",
"TF_Map_Doublefrost_StrangePrefix": " Frosted",
"TF_Map_SoulMill_StrangePrefix": " Soulful",
"TF_Map_Helltrain_StrangePrefix": " Diabolic",
"TF_Map_Bonesaw_StrangePrefix": " Blazed",
"TF_Map_Crasher_StrangePrefix": " Big",
"TF_Map_Ghoulpit_StrangePrefix": " Fiendish",
"TF_Map_Spookeyridge_StrangePrefix": " Otherworldly",
"TF_Map_Frostwatch_StrangePrefix": " Freezing",
"TF_Map_Frostcliff_StrangePrefix": " Chilling",
"TF_Map_Rumford_StrangePrefix": " Chipped",
"TF_Map_Frosty_StrangePrefix": " Ice-Cold",
"TF_Map_CoalPit_StrangePrefix": " Naughty",
"TF_Map_Sharkbay_StrangePrefix": " Infested",
"TF_Map_Rotunda_StrangePrefix": " Rotund",
"TF_Map_Phoenix_StrangePrefix": " Reborn",
"TF_Map_Cashworks_StrangePrefix": " Legal Tendered",
"TF_Map_Venice_StrangePrefix": " Venetian",
"TF_Map_Reckoner_StrangePrefix": " Cultivated",
"TF_Map_Sulfur_StrangePrefix": " Zen",
"TF_Map_Hardwood_StrangePrefix": " Lumbering",
"TF_Map_PelicanPeak_StrangePrefix": " Peaked",
"TF_Map_Selbyen_StrangePrefix": " Souvenir",
"TF_Map_TinyRock_StrangePrefix": " Tiny",
"TF_Map_Distillery_StrangePrefix": " Distilled",
"TF_Map_Skirmish_StrangePrefix": " Yeti-Fighting",
"TF_Map_Nucleus_StrangePrefix": " Radioactive",
"TF_Map_Perks_StrangePrefix": " Perky",
"TF_Map_Slime_StrangePrefix": " Slimy",
"TF_Map_LavaPit_StrangePrefix": " Volcanic",
"TF_Map_Mannsylvania_StrangePrefix": " Vampiric",
"TF_Map_Sandcastle_StrangePrefix": " Fun Sized",
"TF_Map_Spineyard_StrangePrefix": " Rattled",
"TF_Map_Corruption_StrangePrefix": " Corrupted",
"TF_Map_Murky_StrangePrefix": " Ellis' Own",
"TF_Map_Atoll_StrangePrefix": " Stranded",
"TF_Map_Woods_StrangePrefix": " Sticky",
"TF_Map_Sanitarium_StrangePrefix": " Crazy",
"TF_Map_Devastation_StrangePrefix": " Devastating",
"TF_Map_Snowtower_StrangePrefix": " Towering",
"TF_Map_Krampus_StrangePrefix": " Wicked",
"TF_Map_Haarp_StrangePrefix": " Electromagnetic",
"TF_Map_Brew_StrangePrefix": " Intoxicating",
"TF_Map_Hacksaw_StrangePrefix": " Hacked",
"TF_Map_TurbineEvent_StrangePrefix": " Turbulent",
"TF_Map_Carrier_StrangePrefix": " Giant",
"TF_Map_Galleria_StrangePrefix": " Discounted",
"TF_Map_Emerge_StrangePrefix": " Muddy",
"TF_Map_Camber_StrangePrefix": " Arched",
"TF_Map_Embargo_StrangePrefix": " Cuban",
"TF_Map_Odyssey_StrangePrefix": " Gallant",
"TF_Map_Megaton_StrangePrefix": " Mega",
"TF_Map_Cachoeira_StrangePrefix": " Bloodstained",
"TF_Map_Overgrown_StrangePrefix": " Overgrown",
"TF_Map_Hadal_StrangePrefix": " Submerged",
"TF_Map_Applejack_StrangePrefix": " Jacked",
"TF_Map_AtomSmash_StrangePrefix": " Atomic",
"TF_Map_Canaveral_StrangePrefix": " Orbital",
"TF_Map_Burghausen_StrangePrefix": " Feudal",
"TF_Map_Toxic_StrangePrefix": " Toxic",
"TF_Map_Darkmarsh_StrangePrefix": " Gothic",
"TF_Map_FreakyFair_StrangePrefix": " Freaky",
"TF_Map_Dynamite_StrangePrefix": " Bombastic",
"TF_Map_Circus_StrangePrefix": " Funny",
"TF_Map_Outburst_StrangePrefix": " Evil",
"TF_Map_Blazehattan_StrangePrefix": " Blazing",
"TF_Map_Overcast_StrangePrefix": " Boreal",
"TF_Map_Fortezza_StrangePrefix": " Dusty",
"TF_Map_PenguinPeak_StrangePrefix": " Slippery",
"TF_Map_Patagonia_StrangePrefix": " Argentinian",
"TF_Map_Cutter_StrangePrefix": " Cutting Edge",
"TF_Map_Maul_StrangePrefix": " Overpriced",
"TF_Map_Citadel_StrangePrefix": " Fortified",
"TF_Map_Aquarius_StrangePrefix": " Progressive",
"TF_Map_Fulgur_StrangePrefix": " Blinding",
"TF_Map_Cargo_StrangePrefix": " Imported",
"TF_Map_Conifer_StrangePrefix": " Coniferous",
"TF_Map_Boardwalk_StrangePrefix": " Prize-Winning",
"TF_Map_Blowout_StrangePrefix": " Oily",
"TF_Map_Mannhole_StrangePrefix": " Stinky",
"TF_Map_Demolition_StrangePrefix": " Blasted",
"TF_Map_Pressure_StrangePrefix": " Pressurized",
"TF_Map_Cowerhouse_StrangePrefix": " Cowering",
"TF_Map_Dusker_StrangePrefix": " Crimson",
"TF_Map_Afterlife_StrangePrefix": " Revenant",
"TF_Map_Devilcross_StrangePrefix": " Devilish",
"TF_Map_Marshlands_StrangePrefix": " Grimy",
"TF_MapDonationLevel_Bronze": "Bronze:",
"TF_MapDonationLevel_Silver": "Silver:",
"TF_MapDonationLevel_Gold": "Gold:",
"TF_MapDonationLevel_Platinum": "Platinum:",
"TF_MapDonationLevel_Diamond": "Diamond:",
"TF_MapDonationLevel_Australium1": "12-karat Australium:",
"TF_MapDonationLevel_Australium2": "18-karat Australium:",
"TF_MapDonationLevel_Australium3": "24-karat Australium:",
"TF_MapDonationLevel_Unobtainium": "Unobtanium:",

"Humiliation_Count": "x%s1",
"Humiliation_Kill": "FISH KILL!",
"TF_Domination_Hat": "Ghastlier Gibus",
"TF_Domination_Hat_2010": "Ghastly Gibus",
"TF_Domination_Hat_2010_Desc": "Elegant simplicity and old-world charm combined with the heady aromas of mould and grave dust.",
"TF_Domination_Hat_Desc": "Even more ghastly.",
"TF_Gibus_Style_2009": "Ghastlier",
"TF_Gibus_Style_2010": "Ghastly",
"TF_ItemExpiration": "This item will expire on %s1.",
"TF_Style_Desc": "Style: %s1",
"TF_Weapon_Flag": "Flag",
"cp_mountainlab": "Valentin '3DNJ' Levillain",
	

"TF_Unique_Prepend_Proper":"The ",
"TF_Unique_Prepend_Proper_Quality":"The",
"TF_NonUnique_Prepend_Proper":"A",
"TF_NonUnique_Append_Proper":"(%s1)",
"TF_Unique_Achievement_Medigun1":"Kritzkrieg",
"TF_Unique_Achievement_Syringegun1":"Blutsauger",
"TF_Unique_Achievement_Bonesaw1":"Übersaw",
"TF_Unique_Achievement_FireAxe1":"Axtinguisher",
"TF_Unique_Achievement_FlareGun":"Flare Gun",
"TF_Unique_Achievement_Flaregun_desc":"This weapon will reload when not active",
"TF_Unique_Achievement_Flamethrower":"Backburner",
"TF_Unique_Achievement_LunchBox":"Sandvich",
"TF_Sandvich_desc":"Eat to regain up to 300 health.\nAlt-fire: Share a Sandvich with a friend (Medium Health Kit)",
"TF_Unique_Achievement_Minigun":"Natascha",
"TF_Unique_Achievement_Fists":"Killing Gloves of Boxing",
"TF_Unique_Achievement_Bat":"Sandman",
"TF_Unique_Achievement_Scattergun_Double":"Force-A-Nature",
"TF_Unique_Achievement_Scattergun_Double_desc":"This weapon reloads its entire clip at once",
"TF_Unique_Achievement_EnergyDrink":"Bonk! Atomic Punch",
"TF_Unique_Achievement_EnergyDrink_desc":"Drink to become invulnerable for 8 seconds.  Cannot attack during this time.\nDamage absorbed will slow you when the effect ends.",
"TF_Unique_Achievement_SniperRifle":"Walkabout",
"TF_Unique_Achievement_CloakWatch":"Cloak and Dagger",
"TF_Unique_Achievement_FeignWatch":"Dead Ringer",
"TF_Unique_Achievement_Revolver":"Ambassador",
"TF_Unique_Backstab_Shield":"Razorback",
"TF_Unique_Achievement_Jar":"Jarate",
"TF_Unique_Achievement_CompoundBow":"Huntsman",
"TF_Unique_Achievement_SoldierBuff":"Buff Banner",
"TF_Unique_Achievement_Pickaxe":"Equalizer",
"TF_Unique_Pickaxe_EscapePlan":"Escape Plan",
"TF_Unique_Achievement_RocketLauncher":"Direct Hit",
"TF_Unique_Achievement_StickyLauncher":"Scottish Resistance",
"TF_Unique_Achievement_Shield":"Chargin' Targe",
"TF_Unique_Achievement_Sword":"Eyelander",
"TF_Unique_Blast_Boots":"Gunboats",
"TF_Unique_Sentry_Shotgun":"Frontier Justice",
"TF_Unique_Achievement_Laser_Pointer":"Wrangler",
"TF_Unique_Robot_Arm":"Gunslinger",
"TF_Unique_SledgeHammer":"Homewrecker",
"TF_Unique_Makeshiftclub":"Pain Train",
"TF_Unique_Lunchbox_Chocolate":"Dalokohs Bar",
"TF_Lunchbox_Chocolate_desc":"Eat to gain up to 100 health.\nAlt-fire: Share chocolate with a friend (Small Health Kit)",
"TF_Unique_Lunchbox_Banana":"Second Banana",
"TF_Lunchbox_Banana_desc":"Eat to gain health.\nAlt-fire: Share banana with a friend (Small Health Kit)",
"TF_TTG_MaxGun":"Lugermorph",
"TF_TTG_SamRevolver":"Big Kill",
"TF_Unique_EnergyDrink_CritCola":"Crit-a-Cola",
"TF_Unique_Golden_Wrench":"Golden Wrench",
"TF_Unique_TribalmanKukri":"Tribalman's Shiv",
"TF_Unique_BattleAxe":"Scotsman's Skullcutter",
"TF_Unique_BattleSaw":"Vita-Saw",
"TF_Unique_BattleSaw_Desc":"A percentage of your ÜberCharge level is retained on death, based on the number of organs harvested (15% per). Total ÜberCharge retained on spawn caps at 60%.",
"TF_Unique_Combat_Wrench":"Southern Hospitality",
"TF_Unique_MediGun_QuickFix":"Quick-Fix",
"TF_Unique_MediGun_Resist":"Vaccinator",
"TF_ThePowerjack":"Powerjack",
"TF_TheDegreaser":"Degreaser",
"TF_TheShortstop":"Shortstop",
"TF_LEtranger":"L'Etranger",
"TF_EternalReward":"Your Eternal Reward",
"TF_TheBattalionsBackup":"Battalion's Backup",
"TF_TheBlackBox":"Black Box",
"TF_SydneySleeper":"Sydney Sleeper",
"TF_DarwinsDangerShield":"Darwin's Danger Shield",
"TF_TheBushwacka":"Bushwacka",
"TF_TheHolyMackerel":"Holy Mackerel",
"TF_MadMilk":"Mad Milk",
"TF_Weapon_RocketLauncher_Jump":"Rocket Jumper",
"TF_Weapon_StickyBomb_Jump":"Sticky Jumper",
"TF_Unique_FryingPan":"Frying Pan",
"TF_Gold_FryingPan":"Golden Frying Pan",
"TF_HalloweenBoss_Axe":"Horseless Headless Horsemann's Headtaker",
"TF_Iron_Curtain":"Iron Curtain",
"TF_TTG_Watch":"Enthusiast's Timepiece",
"TF_Amputator":"Amputator",
"TF_CrusadersCrossbow":"Crusader's Crossbow",
"TF_CrusadersCrossbow_desc":"Fires special bolts that heal teammates and deals damage\nbased on distance traveled\nThis weapon will reload automatically when not active",
"TF_UllapoolCaber":"Ullapool Caber",
"TF_LochNLoad":"Loch-n-Load",
"TF_BuffaloSteak":"Buffalo Steak Sandvich",
"TF_GatlingGun":"Brass Beast",
"TF_WarriorsSpirit":"Warrior's Spirit",
"TF_CandyCane":"Candy Cane",
"TF_Jag":"Jag",
"TF_Claidheamohmor":"Claidheamh Mòr",
"TF_BackScratcher":"Back Scratcher",
"TF_BostonBasher":"Boston Basher",
"TF_FistsOfSteel":"Fists of Steel",
"TF_TreasureHat_1":"Bounty Hat",
"TF_TreasureHat_2":"Treasure Hat",
"TF_TreasureHat_3":"Hat of Undeniable Wealth and Respect",
"TF_TreasureHat_3_Style":"H.O.U.W.A.R.",
"TF_Unique_RiftFireAxe":"Sharpened Volcano Fragment",
"TF_Unique_RiftFireMace":"Sun-on-a-Stick",
"TF_Shahanshah":"Shahanshah",
"TF_BazaarBargain":"Bazaar Bargain",
"TF_BazaarBargain_Desc":"Each scoped headshot kill increases the weapon's charge rate by 25% up to 200%.",
"TF_PersianPersuader":"Persian Persuader",
"TF_Ali_Babas_Wee_Booties":"Ali Baba's Wee Booties",
"TF_SultansCeremonial":"Sultan's Ceremonial",
"TF_SplendidScreen":"Splendid Screen",
"TF_SplendidScreen_desc":"Alt-Fire: Charge toward your enemies and remove debuffs.\nGain a critical melee strike after impacting an enemy.",
"TF_MarketGardener":"Market Gardener",
"TF_ReserveShooter":"Reserve Shooter",
"TF_LibertyLauncher":"Liberty Launcher",
"TF_Weapon_Flaregun_Detonator":"Detonator",
"TF_Weapon_Flaregun_Detonator_Desc":"Alt-Fire: Detonate flare.\nThis weapon will reload automatically when not active.",
"TF_Tomislav":"Tomislav",
"TF_RussianRiot":"Family Business",
"TF_EvictionNotice":"Eviction Notice",
"TF_Minigun_Deflector":"Deflector",
"TF_Saxxy":"Saxxy",
"TF_SolemnVow":"Solemn Vow",
"TF_SolemnVow_Desc":"'Do no harm.'",
"TF_Weapon_Bust":"Bust of Hippocrates",
"TF_NineIron":"Nessie's Nine Iron",
"TF_NineIron_Desc":"Gives increased speed and health\nwith every head you take.",
"TF_Weapon_GolfClub":"Golf Club",
"TF_Mailbox":"Postal Pummeler",
"TF_Weapon_Mailbox":"Mailbox",
"TF_TheOriginal":"Original",
"TF_MaskOfTheShaman":"Mask of the Shaman",
"TF_MaskOfTheShaman_Desc":"An invincibility mask made by the Ancients. It hasn't worked in a long, long time.",
"TF_Pilotka":"Pilotka",
"TF_RO_SoldierHelmet":"Stahlhelm",
"TF_Pipboy":"Pip-Boy",
"TF_Pipboy_Desc":"Using modern super-deluxe resolution graphics!",
"TF_BrinkHood":"Anger",
"TF_DragonbornHelmet":"Dragonborn Helmet",
"TF_DragonbornHelmet_Desc":"Designed to inspire fear, the dragons this helm was based on were less than impressed.",
"TF_Wingstick":"Wingstick",
"TF_DEX_Helmet":"Nanobalaclava",
"TF_DEX_Helmet_Desc":"",
"TF_DEX_Glasses":"Deus Specs",
"TF_DEX_Glasses_Desc":"",
"TF_DEX_Hat":"Company Man",
"TF_DEX_Hat_Desc":"",
"TF_DEX_Arm":"Purity Fist",
"TF_DEX_Arm_Desc":"",
"TF_DEX_Revolver":"Diamondback",
"TF_DEX_Revolver_Desc":"",
"TF_DEX_Rifle":"Machina",
"TF_DEX_Rifle_Desc":"",
"TF_DEX_Shotgun":"Widowmaker",
"TF_DEX_Shotgun_Desc":"",
"TF_DEX_Pistol":"Short Circuit",
"TF_DEX_Pistol_Desc":"",
"TF_CozyCamper":"Cozy Camper",
"TF_CozyCamper_Desc":"",

"TF_SpaceChem_MoustachiumBar":"Moustachium Bar",
"TF_SpaceChem_MoustachiumBar_Desc":"Pure moustachium, harvested from all-natural sources deep within the Australian outback.",
"TF_SpaceChem_FishcakeFragmentType":"Fishcake Fragment",
"TF_SpaceChem_FishcakeFragment":"'Fish'",
"TF_SpaceChem_FishcakeFragment_Desc":"It's packed with protein.",
"TF_SpaceChem_PinFragmentType":"Pin Fragment",
"TF_SpaceChem_PinFragment":"Spacemetal Scrap",
"TF_SpaceChem_Pin":"SpaceChem Pin",
"TF_SpaceChem_Pin_Desc":"<no employment record found>",
"TF_SpaceChem_Fishcake_Type":"Fishcake",
"TF_SpaceChem_Fishcake":"Fishcake",
"TF_SpaceChem_Fishcake_Desc":"Eat to gain up to 100 health.\nAlt-fire: Share with a friend (Small Health Kit)\n\nVossler Industries All-Natural Artificial-Fish-Derived Food Product",

"TF_PolishWarBabushka":"Hetman's Headpiece",
"TF_PolishWarBabushka_Desc":"Cossacks and war go together like gołąbki and wódka.",
"TF_JanissaryHat":"Janissary Ketche",
"TF_JanissaryHat_Desc":"The first standing army to wear uniforms wanted to make damn sure everyone else knew it.",

"TF_BucketHat":"Brain Bucket",
"TF_BucketHat_Desc":"Zombie tested, braaaains approved.",
"TF_TrafficCone":"Dead Cone",
"TF_TrafficCone_Desc":"You'll stop them dead wearing this stylish traffic cone.",

"TF_ScoutSword":"Three-Rune Blade",
"TF_ScoutHair":"Hero's Tail",
"TF_ScoutHair_Desc":"Possibly the result of pigmentation loss due to horrible experiments. Possibly a mop of some kind.",
"TF_ScoutMedallion":"Sign of the Wolf's School",
"TF_ScoutMedallion_Desc":"One wolf, no moon. Collect all three!",

"TF_UllapoolCaber_Desc":"High-yield Scottish face removal.\nA sober person would throw it...\n\nThe first hit will cause an explosion",
"TF_BuffaloSteak_Desc":"After consuming, move speed is increased, attacks mini-crit, and the player may only use melee weapons. Lasts 16 seconds.\nAlt-fire: Share with a friend (Medium Health Kit)\n\nWho needs bread?",
"TF_TreasureHat_1_Desc":"Earned by completing 5 objectives in 'The Great Steam Treasure Hunt'",
"TF_TreasureHat_2_Desc":"Earned by completing 15 objectives in 'The Great Steam Treasure Hunt'",
"TF_TreasureHat_3_Desc":"Earned by completing 28 objectives in 'The Great Steam Treasure Hunt.'  Beware the Cephalopod padlock.",

"TF_Unique_Achievement_Sword_Desc":"Gives increased speed and health\nwith every head you take.",
"TF_Unique_Achievement_Shield_Desc":"Alt-Fire: Charge toward your enemies and remove debuffs.\nGain a critical melee strike after impacting an enemy at distance.",
"TF_Unique_EnergyDrink_CritCola_Desc":"While effect is active: Each attack mini-crits and sets Marked-For-Death for 5 seconds.",
"TF_Unique_MediGun_QuickFix_Desc":"Mirror the blast jumps and shield charges of patients.",
"TF_Unique_MediGun_Resist_Desc":"ÜberCharge provides a 2.5 second resistance bubble that blocks 75% base damage and 100% crit damage of the selected type to the Medic and Patient.",
"TF_HalloweenBoss_Axe_Desc":"Cursed by dark spirits similar to\nthose that dwell within the Eyelander.",
"TF_SacredMedicine_Desc":"While under the effects, damage done\nand damage taken will be mini-crits.\nYou will also move much faster.",

"TF_TTG_MaxGun_Desc":"The ultimate in semi-concealed weaponry. There's no question you need this gun, the only question is: where will you keep it?",
"TF_TTG_SamRevolver_Desc":"Combines style with stopping power. Long exclusive to Freelance Police, now available for other blood-thirsty mercenaries.",
"TF_TTG_MaxsHat_Desc":"Expertly crafted headwear from cruelty-free farms in the Philippines. Hollowed-out skull casing wicks moisture away when in the heat of battle.",
"TF_RiftFireAxe_Desc":"Improves upon Mother Nature's original design for volcanos by increasing portability. Modern science is unable to explain exactly where the lava is coming from.",
"TF_RiftFireMace_Desc":"Spiky end goes into other man.",

"TF_Unique_Gloves_of_Running_Urgently":"Gloves of Running Urgently",

"TF_TideTurner":"Tide Turner",
"TF_TideTurner_Desc":"Alt-Fire: Charge toward your enemies and remove debuffs.\nGain a mini-crit melee strike after impacting an enemy at distance.",
"TF_Weapon_BreadBite":"Bread Bite",
"TF_Weapon_BreadBite_Desc":"Inspired by the TF2 Movie 'Expiration Date'",
"TF_Weapon_SnackAttack":"Snack Attack",
"TF_Weapon_SnackAttack_Desc":"Inspired by the TF2 Movie 'Expiration Date'",
"TF_Weapon_SelfAwareBeautyMark":"Self-Aware Beauty Mark",
"TF_Weapon_SelfAwareBeautyMark_desc":"\nInspired by the TF2 Movie 'Expiration Date'",
"TF_Weapon_MutatedMilk":"Mutated Milk",
"TF_Weapon_MutatedMilk_desc":"Players heal 60% of the damage done to an enemy covered with milk.\n\nInspired by the TF2 Movie 'Expiration Date'",
"TF_Weapon_BaseJumper":"B.A.S.E. Jumper",
"TF_Weapon_BaseJumper_Desc":"Press 'JUMP' key in the air to deploy.\nDeployed Parachutes slow your descent.",
"TF_Weapon_BackScatter":"Back Scatter",
"TF_Weapon_BackScatter_Desc":"",
"Attrib_BackAttackMinicrits":"Mini-crits targets when fired at their back from close range",
"TF_Weapon_AirStrike":"Air Strike",
"TF_Weapon_AirStrike_Desc":"",
"TF_Weapon_Sticky_Quickie":"Quickiebomb Launcher",
"TF_Weapon_Iron_bomber":"Iron Bomber",
"TF_Weapon_PanicAttack":"Panic Attack",
"TF_GasPasser":"Gas Passer",
"TF_GasPasser_Desc":"Creates a horrific visible gas cloud that coats enemies with a flammable material, which then ignites into afterburn if they take damage (even enemy Pyros!)",
"TF_Gas":"Gas",
"TF_Pressure":"Pressure",
"TF_Unique_Headgear_Scout":"Batter's Helmet",
"TF_Unique_Headgear_Sniper":"Tooth Belt",
"TF_Unique_Headgear_Soldier":"Soldier's Helmet",
"TF_Unique_Headgear_Demoman":"Fro",
"TF_Unique_Headgear_Medic":"Medic's Helmet",
"TF_Unique_Headgear_Pyro":"Pyro's Helmet",
"TF_Unique_Headgear_Heavy":"Football Helmet",
"TF_Unique_Headgear_Engineer":"Mining Helmet",
"TF_Unique_Headgear_Spy":"Spy's Helmet",
"TF_Soldier_Medal_Web_Sleuth":"Gentle Manne's Service Medal",
"TF_Soldier_Medal_Web_Sleuth_Desc":"Given to those few brave soldiers whom stood guard valiantly without sleep, nourishment, or a social life.",
"TF_Employee_Badge_A":"Grizzled Veteran",
"TF_Employee_Badge_A_Desc":"Display this on your chest proudly, soldier. Each time you kill someone, they'll know they weren't the first.",
"TF_Employee_Badge_B":"Soldier of Fortune",
"TF_Employee_Badge_B_Desc":"Sure, some may have been doing it longer. But you've proven few can do it better.",
"TF_Employee_Badge_C":"Mercenary",
"TF_Employee_Badge_C_Desc":"Even though you were late to the party, you were still the life of it.",
"TF_Employee_Badge_Plat":"Primeval Warrior",
"TF_Employee_Badge_Plat_Desc":"A true warrior's medal, given to those who fought before the battle even started.",
	
"CI_Bar_A": "Scrap Metal",
"CI_Bar_B": "Reclaimed Metal",
"CI_Bar_C": "Refined Metal",
"CI_Bar_Ap": "Scrap Metal",
"CI_Bar_Bp": "Reclaimed Metal",
"CI_Bar_Cp": "Refined Metal",
"TF_CraftItem": "Craft Item",
"CI_T_C": "Class Token",
"CI_T_S": "Slot Token",
"CI_T_G": "Gadget Token",

"TF_Haunted_Metal": "Haunted Metal Scrap",
"TF_Haunted_Metal_Desc": "This is metal scrap taken from the Horseless Headless Horsemann. It whispers faintly...'heads'...",

"CI_T_C_1": "Class Token - Scout",
"CI_T_C_2": "Class Token - Sniper",
"CI_T_C_3": "Class Token - Soldier",
"CI_T_C_4": "Class Token - Demoman",
"CI_T_C_5": "Class Token - Heavy",
"CI_T_C_6": "Class Token - Medic",
"CI_T_C_7": "Class Token - Pyro",
"CI_T_C_8": "Class Token - Spy",
"CI_T_C_9": "Class Token - Engineer",

"CI_T_S_1": "Slot Token - Primary",
"CI_T_S_2": "Slot Token - Secondary",
"CI_T_S_3": "Slot Token - Melee",
"CI_T_S_4": "Slot Token - Grenade",
"CI_T_S_5": "Slot Token - Building",
"CI_T_S_6": "Slot Token - PDA",
"CI_T_S_7": "Slot Token - PDA2",
"CI_T_S_8": "Slot Token - Head",
	
"TF_T": "Tool",
"TF_T_Nt": "Name Tag",
"TF_T_Dt": "Description Tag",
"TF_Tool_Nametag_Desc": "Changes the name of an item in your backpack",
"TF_Tool_Desctag_Desc": "Changes the description of an item in your backpack",
"TF_Tool_DecoderRing": "Mann Co. Supply Crate Key",
"TF_Tool_DecoderRing_Desc": "Used to open locked supply crates.",
"TF_LockedCrate": "Supply Crate",
"TF_SupplyCrate": "Mann Co. Supply Crate",
"TF_SupplyCrate_Desc": "You need a Mann Co. Supply Crate Key to open this.\nYou can pick one up at the Mann Co. Store.",
"TF_SupplyCrateRare": "Salvaged Mann Co. Supply Crate",
"TF_SupplyCrateRare_Desc": "You need a Mann Co. Supply Crate Key to open this.\nYou can pick one up at the Mann Co. Store.",
"TF_SupplyCrateRare2": "Select Reserve Mann Co. Supply Crate",
"TF_SupplyCrateRare2_Desc": "You need a Mann Co. Supply Crate Key to open this.\nYou can pick one up at the Mann Co. Store.",
"TF_SupplyCrateRation": "Mann Co. Supply Munition",
"TF_Gift_Crate_EntireServer": "Pallet of Crates",
"TF_Gift_Crate_EntireServer_Desc": "When used, this Action Item drops a crate\non up to 23 other people on the server!",
"TF_CrateKey_BL": "Mann Co. Stockpile Crate Key",
"TF_CrateKey_BL_Desc": "Used to open locked Mann Co. Stockpile Crates.",
"TF_SupplyCrate_BL": "Mann Co. Stockpile Crate",
"TF_SupplyCrate_BL_Desc": "This crate contains four items randomly selected from a small set. You can adjust which four items are selected from your backpack.\n\nYou need a Mann Co. Stockpile Crate Key to open this. You can pick one up at the Mann Co. Store.",
"TF_SupplyCrate_BLTaunt": "Mann Co. Audition Reel",
"TF_SupplyCrate_BLTaunt_Desc": "This locked reel contains a random taunt from the Love And War update and also has a rare chance to contain an Unusual taunt with special effects!\n\nYou need a standard Mann Co. Supply Crate Key to open this. You can pick one up at the Mann Co. Store.",
"TF_SupplyCrate_ShuffleTaunt": "Mann Co. Director's Cut Reel",
"TF_SupplyCrate_ShuffleTaunt_Desc": "This crate contains four items randomly selected from a small set. You can adjust which four items are selected from your backpack.\n\nYou need a standard Mann Co. Supply Crate Key to open this. You can pick one up at the Mann Co. Store.",
"TF_Tool_WinterKey": "Festive Winter Crate Key",
"TF_Tool_WinterKey_Desc": "Used to open unusually festive locked winter crates.\nAfter 12/31/2010 this will turn into a normal key.",
"TF_Tool_SummerKey": "Refreshing Summer Cooler Key",
"TF_Tool_SummerKey_Desc": "Used to open unusually refreshing locked summer coolers.\nAfter 7/11/2011 this will turn into a normal key.",
"TF_Tool_WinterKey2011_Naughty": "Naughty Winter Crate Key",
"TF_Tool_WinterKey2011_Naughty_Desc": "Used to open unusually Naughty locked winter crates.\nThis key will not open Nice crates.\n\nAfter 1/1/2012 this will turn into a normal key.",
"TF_Tool_WinterKey2011_Nice": "Nice Winter Crate Key",
"TF_Tool_WinterKey2011_Nice_Desc": "Used to open unusually Nice locked winter crates.\nThis key will not open Naughty crates.\n\nAfter 1/1/2012 this will turn into a normal key.",
"TF_Tool_ScorchedKey": "Scorched Key",
"TF_Tool_ScorchedKey_Desc": "Used to open Scorched Crates.\n\nAfter 7/11/2012 this will turn into a normal key.",
"TF_Tool_FallKey2012": "Fall Key",
"TF_Tool_FallKey2012_Desc": "Used to open Fall Crates.\n\nAfter 9/20/2012 this will turn into a normal key.",
"TF_Tool_HalloweenKey2012": "Eerie Key",
"TF_Tool_HalloweenKey2012_Desc": "Used to open Eerie Crates. Eerie Crates contain\nHalloween-themed items that are only visible\nduring the Halloween event and full moons.\n\nAfter 11/08/2012 this will turn into a normal key.",
"TF_WinterCrate2011_Naughty": "Naughty Winter Crate",
"TF_WinterCrate2011_Naughty_Desc": "A memento from an age long past, this crate is purely decorative and can no longer be opened.",
"TF_WinterCrate2011_Nice": "Nice Winter Crate",
"TF_WinterCrate2011_Nice_Desc": "A memento from an age long past, this crate is purely decorative and can no longer be opened.",
"TF_WinterCrate2012_Naughty": "Naughty Winter Crate 2012",
"TF_WinterCrate2012_Naughty_Desc": "A memento from an age long past, this crate is purely decorative and can no longer be opened.",
"TF_WinterCrate2012_Nice": "Nice Winter Crate 2012",
"TF_WinterCrate2012_Nice_Desc": "A memento from an age long past, this crate is purely decorative and can no longer be opened.",
"TF_Tool_WinterKey2012_Naughty": "Naughty Winter Crate Key 2012",
"TF_Tool_WinterKey2012_Naughty_Desc": "Used to open Naughty Winter Crate 2012.\nThis key will not open Nice crates.\n\nAfter 1/3/2013 this will turn into a normal key.",
"TF_Tool_WinterKey2012_Nice": "Nice Winter Crate Key 2012",
"TF_Tool_WinterKey2012_Nice_Desc": "Used to open Nice Winter Crate 2012.\nThis key will not open Naughty crates.\n\nAfter 1/3/2013 this will turn into a normal key.",
"TF_WinterCrate2013_Naughty": "Naughty Winter Crate 2013",
"TF_WinterCrate2013_Naughty_Desc": "A memento from an age long past, this crate is purely decorative and can no longer be opened.",
"TF_WinterCrate2013_Nice": "Nice Winter Crate 2013",
"TF_WinterCrate2013_Nice_Desc": "A memento from an age long past, this crate is purely decorative and can no longer be opened.",
"TF_Tool_WinterKey2013_Naughty": "Naughty Winter Crate Key 2013",
"TF_Tool_WinterKey2013_Naughty_Desc": "Used to open Naughty Winter Crate 2013.\nThis key will not open Nice crates.\n\nAfter 1/6/2014 this will turn into a normal key.",
"TF_Tool_WinterKey2013_Nice": "Nice Winter Crate Key 2013",
"TF_Tool_WinterKey2013_Nice_Desc": "Used to open Nice Winter Crate 2013.\nThis key will not open Naughty crates.\n\nAfter 1/6/2014 this will turn into a normal key.",
"TF_StockingStuffer_2013": "Gift-Stuffed Stocking",
"TF_StockingStuffer_2017": "Gift-Stuffed Stocking 2017",
"TF_StockingStuffer_2018": "Gift-Stuffed Stocking 2018",
"TF_StockingStuffer_2019": "Gift-Stuffed Stocking 2019",
"TF_StockingStuffer_2020": "Gift-Stuffed Stocking 2020",
"TF_StockingStuffer_2021": "Gift-Stuffed Stocking 2021",
"TF_StockingStuffer_2022": "Gift-Stuffed Stocking 2022",
"TF_StockingStuffer_2023": "Gift-Stuffed Stocking 2023",
"TF_StockingStuffer_2024": "Gift-Stuffed Stocking 2024",
"TF_StockingStuffer_Desc": "Contains an assortment of goodies for good little Mercenaries.",
"TF_WinterCrate": "Festive Winter Crate",
"TF_WinterCrate_Desc": "A memento from an age long past, this festive crate can no longer be opened and is purely decorative.",
"TF_SummerCrate": "Refreshing Summer Cooler",
"TF_SummerCrate_Desc": "A memento from an age long past, this cooler is purely decorative and can no longer be opened.",
"TF_ScorchedCrate": "Scorched Crate",
"TF_ScorchedCrate_Desc": "A memento from an age long past, this crate is purely decorative and can no longer be opened.",
"TF_FallCrate2012": "Fall Crate",
"TF_FallCrate2012_Desc": "A memento from an age long past, this crate is purely decorative and can no longer be opened.",
"TF_HalloweenCrate2012": "Eerie Crate",
"TF_HalloweenCrate2012_Desc": "A memento from an age long past, this crate is purely decorative and can no longer be opened.",
"TF_Tool_ChristmasKey2010": "Stocking Stuffer Key",
"TF_Tool_ChristmasKey2010_Desc": "Someone left this key in your best pair of fightin' socks.\nIt looks like it will open any festive or normal crate.",
"TF_RoboCrate": "Robo Community Crate",
"TF_RoboCrate_Desc": "This crate is special.\nIts contents are unknown and requires a\nRobo Community Crate Key to unlock.\n\nThe Robo Community Crate contains Unusual effects that will only come from this crate.",
"TF_Tool_RoboKey2013": "Robo Community Crate Key",
"TF_Tool_RoboKey2013_Desc": "Used to open locked Robo Community Crates.",
"TF_Gift_RoboKey2013_RandomPerson": "A Random Robo Community Crate Key Gift",
"TF_Gift_RoboKey2013_RandomPerson_Desc": "When used, this Action Item gives one Robo Community Crate Key\nto a random person on the server!",
"TF_Gift_RoboKey2013_EntireServer": "Pile of Robo Community Crate Key Gifts",
"TF_Gift_RoboKey2013_EntireServer_Desc": "When used, this Action Item gives\none Robo Community Crate Key\nto up to 23 other people on the server!",
"TF_ClaimCheck_July2013": "Summer Claim Check",
"TF_ClaimCheck_July2013_Desc": "When used, you will receive\na random Summer 2013 Cooler.",
"TF_Jul2013Crate_Early": "Summer Appetizer Crate",
"TF_Jul2013Crate_Early_Desc": "Contains the first set of\nGold Star approved Community Items\nfrom the Workshop item import tool.",
"TF_Jul2013Key_Early": "Summer Appetizer Key",
"TF_Jul2013Key_Early_Desc": "Used to open locked Summer Appetizer Crates.",
"TF_Jul2013Crate_01": "Red Summer 2013 Cooler",
"TF_Jul2013Crate_01_Desc": "This crate is special.\nIt contains a unique selection of\nGold Star approved Community Items\nfrom the Summer 2013 event.\n\nThis crate contains a chance for an Exceedingly Rare Series #3 Unusual Hat!",
"TF_Jul2013Key_01": "Red Summer 2013 Cooler Key",
"TF_Jul2013Key_01_Desc": "Used to unlock a Red Summer 2013 Cooler.",
"TF_Jul2013Crate_02": "Orange Summer 2013 Cooler",
"TF_Jul2013Crate_02_Desc": "This crate is special.\nIt contains a unique selection of\nGold Star approved Community Items\nfrom the Summer 2013 event.\n\nThis crate contains a chance for an Exceedingly Rare Series #3 Unusual Hat!",
"TF_Jul2013Key_02": "Orange Summer 2013 Cooler Key",
"TF_Jul2013Key_02_Desc": "Used to unlock a Orange Summer 2013 Cooler.",
"TF_Jul2013Crate_03": "Yellow Summer 2013 Cooler",
"TF_Jul2013Crate_03_Desc": "This crate is special.\nIt contains a unique selection of\nGold Star approved Community Items\nfrom the Summer 2013 event.\n\nThis crate contains a chance for an Exceedingly Rare Series #3 Unusual Hat!",
"TF_Jul2013Key_03": "Yellow Summer 2013 Cooler Key",
"TF_Jul2013Key_03_Desc": "Used to unlock a Yellow Summer 2013 Cooler.",
"TF_Jul2013Crate_04": "Green Summer 2013 Cooler",
"TF_Jul2013Crate_04_Desc": "This crate is special.\nIt contains a unique selection of\nGold Star approved Community Items\nfrom the Summer 2013 event.\n\nThis crate contains a chance for an Exceedingly Rare Series #3 Unusual Hat!",
"TF_Jul2013Key_04": "Green Summer 2013 Cooler Key",
"TF_Jul2013Key_04_Desc": "Used to unlock a Green Summer 2013 Cooler.",
"TF_Jul2013Crate_05": "Aqua Summer 2013 Cooler",
"TF_Jul2013Crate_05_Desc": "This crate is special.\nIt contains a unique selection of\nGold Star approved Community Items\nfrom the Summer 2013 event.\n\nThis crate contains a chance for an Exceedingly Rare Series #3 Unusual Hat!",
"TF_Jul2013Key_05": "Aqua Summer 2013 Cooler Key",
"TF_Jul2013Key_05_Desc": "Used to unlock a Aqua Summer 2013 Cooler.",
"TF_Jul2013Crate_06": "Blue Summer 2013 Cooler",
"TF_Jul2013Crate_06_Desc": "This crate is special.\nIt contains a unique selection of\nGold Star approved Community Items\nfrom the Summer 2013 event.\n\nThis crate contains a chance for an Exceedingly Rare Series #3 Unusual Hat!",
"TF_Jul2013Key_06": "Blue Summer 2013 Cooler Key",
"TF_Jul2013Key_06_Desc": "Used to unlock a Blue Summer 2013 Cooler.",
"TF_Jul2013Crate_07": "Brown Summer 2013 Cooler",
"TF_Jul2013Crate_07_Desc": "This crate is special.\nIt contains a unique selection of\nGold Star approved Community Items\nfrom the Summer 2013 event.\n\nThis crate contains a chance for an Exceedingly Rare Series #3 Unusual Hat!",
"TF_Jul2013Key_07": "Brown Summer 2013 Cooler Key",
"TF_Jul2013Key_07_Desc": "Used to unlock a Brown Summer 2013 Cooler.",
"TF_Jul2013Crate_08": "Black Summer 2013 Cooler",
"TF_Jul2013Crate_08_Desc": "This crate is special.\nIt contains a unique selection of\nGold Star approved Community Items\nfrom the Summer 2013 event.\n\nThis crate contains a chance for an Exceedingly Rare Series #3 Unusual Hat!",
"TF_Jul2013Key_08": "Black Summer 2013 Cooler Key",
"TF_Jul2013Key_08_Desc": "Used to unlock a Black Summer 2013 Cooler.",
"TF_Gift_Jul2013_RandomPerson": "A Random Summer Cooler Key Gift",
"TF_Gift_Jul2013_RandomPerson_Desc": "When used, this Action Item gives\none Summer 2013 Cooler Key\nto a random person on the server!",
"TF_Gift_Jul2013_EntireServer": "Pile of Summer Cooler Key Gifts",
"TF_Gift_Jul2013_EntireServer_Desc": "When used, this Action Item gives\none random Summer 2013 Cooler Key\nto up to 23 other people on the server!",
"TF_Fall2013Crate_Acorns": "Fall 2013 Acorns Crate",
"TF_Fall2013Crate_Acorns_Desc": "Contains Gold Star approved Community Items\nfrom the Fall 2013 event.",
"TF_Fall2013Key_Acorns": "Fall 2013 Acorns Crate Key",
"TF_Fall2013Key_Acorns_Desc": "Used to unlock a Fall 2013 Acorns Crate.",
"TF_Fall2013Crate_Gourd": "Fall 2013 Gourd Crate",
"TF_Fall2013Crate_Gourd_Desc": "Contains Gold Star approved Community Items\nfrom the Fall 2013 event.",
"TF_Fall2013Key_Gourd": "Fall 2013 Gourd Crate Key",
"TF_Fall2013Key_Gourd_Desc": "Used to unlock a Fall 2013 Gourd Crate.",
"TF_Halloween2013_Crate": "Spooky Crate",
"TF_Halloween2013_Crate_Desc": "A memento from an age long past, this crate is purely decorative and can no longer be opened.",
"TF_Halloween2013_Key": "Spooky Key",
"TF_Halloween2013_Key_Desc": "Used to open Spooky Crates.\nSpooky Crates contain\nHalloween-themed items that are only visible\nduring the Halloween event and full moons.\n\nAfter 11/11/2013 this will turn into a normal key.",
"TF_StrongboxCrate": "Mann Co. Strongbox",
"TF_StrongboxCrate_Desc": "This crate is special.\nIts contents are unknown and requires a\nMann Co. Strongbox Key to unlock.\n\nThis crate contains a chance for an Exceedingly Rare Series #3 Unusual Hat!",
"TF_StrongboxKey": "Mann Co. Strongbox Key",
"TF_StrongboxKey_Desc": "Used to unlock a Mann Co. Strongbox.",
"TF_EOTL_Crate": "End of the Line Community Crate",
"TF_EOTL_Crate_Desc": "This crate is special.\nIts contents are unknown and requires a\nEnd of the Line Community Crate Key to unlock.\n\nItems found from an EOTL Community Crate before January 5th, 2015, will receive a commemorative early supporter tag.\n\nThe End of the Line Community Crate contains Unusual effects that will only come from this crate.",
"TF_EOTL_Key": "End of the Line Key",
"TF_EOTL_Key_Desc": "Used to unlock an End of the Line Community Crate.\nItems found from an EOTL Community Crate before January 5th, 2015, will receive a commemorative early supporter tag.",
"TF_Gift_EOTL_RandomPerson": "A Random End of the Line Key Gift",
"TF_Gift_EOTL_RandomPerson_Desc": "When used, this Action Item gives\none End of the Line Key\nto a random person on the server!",
"TF_Gift_EOTL_EntireServer": "Pile of End of the Line Key Gifts",
"TF_Gift_EOTL_EntireServer_Desc": "When used, this Action Item gives\none End of the Line Key\nto up to 23 other people on the server!",
"TF_Gift_DuckToken_EntireServer": "Pile of Duck Token Gifts",
"TF_Gift_DuckToken_EntireServer_Desc": "When used, this Action Item gives\none Duck Token\nto up to 23 other people on the server!",
"TF_Gift_DuckToken_RandomPerson": "A Random Duck Token Gift",
"TF_Gift_DuckToken_RandomPerson_Desc": "When used, this Action Item gives\none Duck Token\nto a random person on the server!",
"TF_BreadBox": "Bread Box",
"TF_BreadBox_Desc": "This limited time item can only be made by Crafting.\nCannot be created after July 9th, 2014.",
"Econ_Breadbox_Lootlist_Header": "Contains one of the following items\ninspired by the TF2 Movie 'Expiration Date'",
"Econ_Breadbox_Lootlist_Footer": "Some, but not all, of the items in this box are Strange...",
"TF_LimitedSummerCrate2014": "Limited Late Summer Crate",
"TF_LimitedSummerCrate2014_Desc": "This crate is special and requires a Limited Summer Key.\nIts contents will be limited and only come from this crate.\nSome, but not all, of the items in this crate are Strange...\n\nAfter 10/13/2014 this crate can no longer be opened.",
"TF_LimitedSummer_Loot_List_Header": "This crate contains one of the following limited items:",
"TF_LimitedSummer_Loot_List_Footer": "or an Exceedingly Rare Special item or Unusual Thirst Blood!\n",
"TF_LimitedSummerKey2014": "Limited Late Summer Crate Key",
"TF_LimitedSummerKey2014_Desc": "Used to open Limited Late Summer Crates.\nLate Summer Crates contain limited items that only come from it.\n\nAfter 10/13/2014 this will turn into a normal key.",
"TF_UnlockedCrate_Type": "Unlocked Crate",
"TF_Halloween2014Crate_Desc": "This creepy crate is only available for a\nlimited time. Some of the items inside are\nHaunted and Strange...\n\nIt's already unlocked and ready to open!",
"TF_HalloweenCauldron2014": "Halloween Gift Cauldron",
"TF_HalloweenCauldron2014_Desc": "You can pry open the lid of this cauldron to see what strangeness lies within... from your backpack... IF YOU DARE.",
"TF_SupplyCrate_Halloween2014_Scout": "Unlocked Creepy Scout Crate",
"TF_SupplyCrate_Halloween2014_Pyro": "Unlocked Creepy Pyro Crate",
"TF_SupplyCrate_Halloween2014_Heavy": "Unlocked Creepy Heavy Crate",
"TF_SupplyCrate_Halloween2014_Engineer": "Unlocked Creepy Engineer Crate",
"TF_SupplyCrate_Halloween2014_Spy": "Unlocked Creepy Spy Crate",
"TF_SupplyCrate_Halloween2014_Sniper": "Unlocked Creepy Sniper Crate",
"TF_SupplyCrate_Halloween2014_Soldier": "Unlocked Creepy Soldier Crate",
"TF_SupplyCrate_Halloween2014_Medic": "Unlocked Creepy Medic Crate",
"TF_SupplyCrate_Halloween2014_Demo": "Unlocked Creepy Demo Crate",
"TF_Halloween_Rare_Loot_List_Footer": "or an Exceedingly Rare Halloween-themed Special item!",
"TF_WinterCrate2014_Naughty": "Naughty Winter Crate 2014",
"TF_WinterCrate2014_Naughty_Desc": "A memento from an age long past, this crate is purely decorative and can no longer be opened.",
"TF_WinterCrate2014_Nice": "Nice Winter Crate 2014",
"TF_WinterCrate2014_Nice_Desc": "A memento from an age long past, this crate is purely decorative and can no longer be opened.",
"TF_Tool_WinterKey2014_Naughty": "Naughty Winter Crate Key 2014",
"TF_Tool_WinterKey2014_Naughty_Desc": "Used to open Naughty Winter Crate 2014.\nThis key will not open Nice crates.\n\nAfter 2/16/2015 this will turn into a normal key.",
"TF_Tool_WinterKey2014_Nice": "Nice Winter Crate Key 2014",
"TF_Tool_WinterKey2014_Nice_Desc": "Used to open Nice Winter Crate 2014.\nThis key will not open Naughty crates.\n\nAfter 2/16/2015 this will turn into a normal key.",
"TF_InactiveOperationPass": "Gun Mettle Campaign Pass",
"TF_InactiveOperationPass_desc": "The Gun Mettle Campaign ended on September 30, 2015.\n\nActivating the Gun Mettle Campaign Pass granted a Gun Mettle Campaign Coin that would grant access to contracts and track stats during the campaign.",
"TF_InactiveOperationPass_AdText": "-The Gun Mettle Campaign Coin\n-Contribute to community map makers\n-Access to contracts that reward event-exclusive items when completed",
"TF_ActivatedOperationPass": "Gun Mettle Campaign Coin",
"TF_ActivatedOperationPass_desc": "The Gun Mettle Campaign ended on September 30, 2015.\n\nThe Gun Mettle Campaign Coin granted access to contracts and tracked stats during the campaign. You could level up the coin by earning Contract Points from completed contracts. The coin would level up at 1000, 2000, and 3000 Contract Points.",
"TF_Tool_OperationSummer2015Key": "Gun Mettle Key",
"TF_Tool_OperationSummer2015Key_Desc": "Used to open The Concealed Killer\nor The Powerhouse Weapons Case.",
"TF_Tool_OperationSummer2015Key_AdText": "-Used to open The Concealed Killer or The Powerhouse Weapons Case\n-Cases may contain Strange and Unusual Weapons",
"TF_ConcealedKiller_Case": "The Concealed Killer Weapons Case",
"TF_ConcealedKiller_Case_Desc": "This Case is locked and requires a\nGun Mettle Key to open.\n\nContains an item from the Concealed Killer Collection.",
"TF_ConcealedKiller_Case_AdText": "-Gun Mettle Locked Case\n-May contain Strange and Unusual Weapons",
"TF_Powerhouse_Case": "The Powerhouse Weapons Case",
"TF_Powerhouse_Case_Desc": "This Case is locked and requires a\nGun Mettle Key to open.\n\nContains an item from the Powerhouse Collection.",
"TF_Powerhouse_Case_AdText": "-Gun Mettle Locked Case\n-May contain Strange and Unusual Weapons",
"TF_KeylessCosmetic_Crate_Scout": "Unlocked Cosmetic Crate Scout",
"TF_KeylessCosmetic_Crate_Pyro": "Unlocked Cosmetic Crate Pyro",
"TF_KeylessCosmetic_Crate_Heavy": "Unlocked Cosmetic Crate Heavy",
"TF_KeylessCosmetic_Crate_Engineer": "Unlocked Cosmetic Crate Engineer",
"TF_KeylessCosmetic_Crate_Spy": "Unlocked Cosmetic Crate Spy",
"TF_KeylessCosmetic_Crate_Sniper": "Unlocked Cosmetic Crate Sniper",
"TF_KeylessCosmetic_Crate_Soldier": "Unlocked Cosmetic Crate Soldier",
"TF_KeylessCosmetic_Crate_Medic": "Unlocked Cosmetic Crate Medic",
"TF_KeylessCosmetic_Crate_Demo": "Unlocked Cosmetic Crate Demo",
"TF_KeylessCosmetic_Crate_MultiClass": "Unlocked Cosmetic Crate Multi-Class",
"TF_KeylessCosmetic_Crate_Scout_desc": "Contains a random Scout only Cosmetic\n\nContents may be Strange\nor Unusual (hats only)",
"TF_KeylessCosmetic_Crate_Pyro_desc": "Contains a random Pyro only Cosmetic\n\nContents may be Strange\nor Unusual (hats only)",
"TF_KeylessCosmetic_Crate_Heavy_desc": "Contains a random Heavy only Cosmetic\n\nContents may be Strange\nor Unusual (hats only)",
"TF_KeylessCosmetic_Crate_Engineer_desc": "Contains a random Engineer only Cosmetic\n\nContents may be Strange\nor Unusual (hats only)",
"TF_KeylessCosmetic_Crate_Spy_desc": "Contains a random Spy only Cosmetic\n\nContents may be Strange\nor Unusual (hats only)",
"TF_KeylessCosmetic_Crate_Sniper_desc": "Contains a random Sniper only Cosmetic\n\nContents may be Strange\nor Unusual (hats only)",
"TF_KeylessCosmetic_Crate_Soldier_desc": "Contains a random Soldier only Cosmetic\n\nContents may be Strange\nor Unusual (hats only)",
"TF_KeylessCosmetic_Crate_Medic_desc": "Contains a random Medic only Cosmetic\n\nContents may be Strange\nor Unusual (hats only)",
"TF_KeylessCosmetic_Crate_Demo_desc": "Contains a random Demoman only Cosmetic\n\nContents may be Strange\nor Unusual (hats only)",
"TF_KeylessCosmetic_Crate_MultiClass_desc": "Contains a random Multi-Class Cosmetic\n\nContents may be Strange\nor Unusual (hats only)",
"TF_Crate_MomentoNote_Desc": "A memento from an age long past, this crate is purely decorative and can no longer be opened.",
// Collections
"Operation_gun_mettle_master_collection": "The Gun Mettle Collections",
"Concealedkiller_collection": "Concealed Killer Collection",
"Concealedkiller_collection_desc": "Items from the Concealed Killer Collection:",
"Craftsmann_collection": "Craftsmann Collection",
"Craftsmann_collection_desc": "Items from the Craftsmann Collection:",
"Teufort_collection": "Teufort Collection",
"Teufort_collection_desc": "Items from the Teufort Collection:",
"Powerhouse_collection": "Powerhouse Collection",
"Powerhouse_collection_desc": "Items from the Powerhouse Collection:",
"GunMettleCosmetics_collection": "Gun Mettle Cosmetics Collection",
"GunMettleCosmetics_collection_desc": "Items from the Gun Mettle Cosmetics Collection:",
"ToughBreakCosmetics_collection": "Tough Break Cosmetics Collection",
"ToughBreakCosmetics_collection_desc": "Items from the Tough Break Cosmetics Collection:",
"MayflowerCosmetics_collection": "Mayflower Cosmetics Collection",
"MayflowerCosmetics_collection_desc": "Items from the Mayflower Cosmetics Collection:",
"Winter2016Cosmetics_collection": "Winter 2016 Cosmetics Collection",
"Winter2016Cosmetics_collection_desc": "Items from the Winter 2016 Cosmetics Collection:",
"RainyDayCosmetics_collection": "Rainy Day Cosmetics Collection",
"RainyDayCosmetics_collection_desc": "Items from the Rainy Day Cosmetics Collection:",
"campaign3_master_collection": "The Jungle Inferno Collections",
"campaign3_master_collection_desc": "",
"Campaign3Cosmetics_Case1_collection": "Abominable Cosmetic Collection",
"Campaign3Cosmetics_Case1_collection_desc": "Items from the Abominable Cosmetic Collection:",
"Campaign3Cosmetics_Case2_collection": "Unleash the Beast Cosmetic Collection",
"Campaign3Cosmetics_Case2_collection_desc": "Items from the Unleash the Beast Cosmetic Collection:",
"Campaign3Paintkits_contract1_collection": "Decorated War Hero Collection",
"Campaign3Paintkits_contract1_collection_desc": "Items from the Decorated War Hero Collection:",
"Campaign3Paintkits_contract2_collection": "Contract Campaigner Collection",
"Campaign3Paintkits_contract2_collection_desc": "Items from the Contract Campaigner Collection:",
"Campaign3Paintkits_case1_collection": "Jungle Jackpot Collection",
"Campaign3Paintkits_case1_collection_desc": "Items from the Jungle Jackpot Collection:",
"Campaign3Paintkits_case2_collection": "Infernal Reward Collection",
"Campaign3Paintkits_case2_collection_desc": "Items from the Infernal Reward Collection:",
"UniqueSkins_collection": "Saxton Select Collection",
"UniqueSkins_collection_desc": "Items from the Saxton Select Collection:",
"UniqueFreeSkins_collection": "Mann Co. Events Collection",
"UniqueFreeSkins_collection_desc": "Items from the Mann Co. Events Collection:",
"Winter2017Paintkits_collection": "Winter 2017 Collection",
"Winter2017Paintkits_collection_desc": "Items from the Winter 2017 Collection:",
"Winter2017Cosmetics_collection": "Winter 2017 Cosmetics Collection",
"Winter2017Cosmetics_collection_desc": "Items from the Winter 2017 Cosmetics Collection:",
"BlueMoonCosmetics_collection": "Blue Moon Cosmetics Collection",
"BlueMoonCosmetics_collection_desc": "Items from the Blue Moon Cosmetics Collection:",
"Winter2018Cosmetics_collection": "Winter 2018 Cosmetics Collection",
"Winter2018Cosmetics_collection_desc": "Items from the Winter 2018 Cosmetics Collection:",
"Summer2019Cosmetics_collection": "Summer 2019 Cosmetics Collection",
"Summer2019Cosmetics_collection_desc": "Items from the Summer 2019 Cosmetics Collection:",
"Winter2019Cosmetics_collection": "Winter 2019 Cosmetics Collection",
"Winter2019Cosmetics_collection_desc": "Items from the Winter 2019 Cosmetics Collection:",
"Winter2019Paintkits_collection": "Winter 2019 Collection",
"Winter2019Paintkits_collection_desc": "Items from the Winter 2019 Collection:",
"Summer2020Cosmetics_collection": "Summer 2020 Cosmetics Collection",
"Summer2020Cosmetics_collection_desc": "Items from the Summer 2020 Cosmetics Collection:",
"Winter2020Cosmetics_collection": "Winter 2020 Cosmetics Collection",
"Winter2020Cosmetics_collection_desc": "Items from the Winter 2020 Cosmetics Collection:",
"Winter2020Paintkits_collection": "Winter 2020 Collection",
"Winter2020Paintkits_collection_desc": "Items from the Winter 2020 Collection:",
"Summer2021Cosmetics_collection": "Summer 2021 Cosmetics Collection",
"Summer2021Cosmetics_collection_desc": "Items from the Summer 2021 Cosmetics Collection:",
"Winter2021Cosmetics_collection": "Winter 2021 Cosmetics Collection",
"Winter2021Cosmetics_collection_desc": "Items from the Winter 2021 Cosmetics Collection:",
"Summer2022Cosmetics_collection": "Summer 2022 Cosmetics Collection",
"Summer2022Cosmetics_collection_desc": "Items from the Summer 2022 Cosmetics Collection:",
"Winter2022Cosmetics_collection": "Winter 2022 Cosmetics Collection",
"Winter2022Cosmetics_collection_desc": "Items from the Winter 2022 Cosmetics Collection:",
"Summer2023Cosmetics_collection": "Summer 2023 Cosmetics Collection",
"Summer2023Cosmetics_collection_desc": "Items from the Summer 2023 Cosmetics Collection:",
"Winter2023Cosmetics_collection": "Winter 2023 Cosmetics Collection",
"Winter2023Cosmetics_collection_desc": "Items from the Winter 2023 Cosmetics Collection:",
"Summer2024Cosmetics_collection": "Summer 2024 Cosmetics Collection",
"Summer2024Cosmetics_collection_desc": "Items from the Summer 2024 Cosmetics Collection:",
"Winter2024Cosmetics_collection": "Winter 2024 Cosmetics Collection",
"Winter2024Cosmetics_collection_desc": "Items from the Winter 2024 Cosmetics Collection:",
"Summer2025Cosmetics_collection": "Summer 2025 Cosmetics Collection",
"Summer2025Cosmetics_collection_desc": "Items from the Summer 2025 Cosmetics Collection:",
"Footer_GunMettleCosmetics": "Contents may be Strange or an Unusual Gun Mettle Hat",
"TF_GunMettleCosmeticCase": "Gun Mettle Cosmetic Case",
"TF_GunMettleCosmeticCase_desc": "This Case is locked and requires a\nGun Mettle Cosmetic Key to open.\n\nContains a community made item\nfrom the Gun Mettle Cosmetic Collection.",
"TF_GunMettleCosmeticCase_AdText": "-Gun Mettle Cosmetic Case\n-Contains Community Cosmetics\n-Requires a Gun Mettle Cosmetic Key to open\n-Contents may be Strange or an Unusual Gun Mettle Hat",
"TF_Tool_GunMettleCosmeticKey": "Gun Mettle Cosmetic Key",
"TF_Tool_GunMettleCosmeticKey_desc": "Used to Open a Gun Mettle Cosmetic Case",
"TF_Tool_GunMettleCosmeticKey_AdText": "-Used to open a Gun Mettle Cosmetic Case\n-Contents may be Strange or an Unusual Gun Mettle Hat",
"Footer_ToughBreakCosmetics": "Contents may be Strange or an Unusual Tough Break Hat",
"TF_ToughBreakCosmeticCase": "Tough Break Cosmetic Case",
"TF_ToughBreakCosmeticCase_desc": "This Case is locked and requires a\nTough Break Cosmetic Key to open.\n\nContains a community made item\nfrom the Tough Break Cosmetic Collection.",
"TF_ToughBreakCosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Tough Break Cosmetic Key to open\n-Contents may be Strange or an Unusual Tough Break Hat",
"TF_Tool_ToughBreakCosmeticKey": "Tough Break Cosmetic Key",
"TF_Tool_ToughBreakCosmeticKey_desc": "Used to Open a Tough Break Cosmetic Case",
"TF_Tool_ToughBreakCosmeticKey_AdText": "-Used to open a Tough Break Cosmetic Case\n-Contents may be Strange or an Unusual Tough Break Hat",
"Footer_MayflowerCosmetics": "Contents may be Strange or an Unusual Mayflower Hat",
"TF_MayflowerCosmeticCase": "Mayflower Cosmetic Case",
"TF_MayflowerCosmeticCase_desc": "This case is locked and requires a\nMayflower Cosmetic Key to open.\n\nContains a community made item\nfrom the Mayflower Cosmetic Collection.",
"TF_MayflowerCosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Mayflower Cosmetic Key to open\n-Contents may be Strange or an Unusual Mayflower Hat",
"TF_Tool_MayflowerCosmeticKey": "Mayflower Cosmetic Key",
"TF_Tool_MayflowerCosmeticKey_desc": "Used to open a Mayflower Cosmetic Case",
"TF_Tool_MayflowerCosmeticKey_AdText": "-Used to open a Mayflower Cosmetic Case\n-Contents may be Strange or an Unusual Mayflower Hat",
"Footer_Winter2017Cosmetics": "Contents may be Strange or an Unusual Winter 2017 Hat",
"TF_Winter2017CosmeticCase": "Winter 2017 Cosmetic Case",
"TF_Winter2017CosmeticCase_desc": "This case is locked and requires a\nWinter 2017 Cosmetic Key to open.\n\nContains a community made item\nfrom the Winter 2017 Cosmetic Collection.",
"TF_Winter2017CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Winter 2017 Cosmetic Key to open\n-Contents may be Strange or an Unusual Winter 2017 Hat",
"TF_Tool_Winter2017CosmeticKey": "Winter 2017 Cosmetic Key",
"TF_Tool_Winter2017CosmeticKey_desc": "Used to open a Winter 2017 Cosmetic Case",
"TF_Tool_Winter2017CosmeticKey_AdText": "-Used to open a Winter 2017 Cosmetic Case\n-Contents may be Strange or an Unusual Winter 2017 Hat",
"Footer_Winter2018Cosmetics": "Contents may be Strange or an Unusual Winter 2018 Hat",
"TF_Winter2018CosmeticCase": "Winter 2018 Cosmetic Case",
"TF_Winter2018CosmeticCase_desc": "This case is locked and requires a\nWinter 2018 Cosmetic Key to open.\n\nContains a community made item\nfrom the Winter 2018 Cosmetic Collection.",
"TF_Winter2018CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Winter 2018 Cosmetic Key to open\n-Contents may be Strange or an Unusual Winter 2018 Hat",
"TF_Tool_Winter2018CosmeticKey": "Winter 2018 Cosmetic Key",
"TF_Tool_Winter2018CosmeticKey_desc": "Used to open a Winter 2018 Cosmetic Case",
"TF_Tool_Winter2018CosmeticKey_AdText": "-Used to open a Winter 2018 Cosmetic Case\n-Contents may be Strange or an Unusual Winter 2018 Hat",
"Footer_Winter2019Cosmetics": "Contents may be Strange or an Unusual Winter 2019 Hat",
"TF_Winter2019CosmeticCase": "Winter 2019 Cosmetic Case",
"TF_Winter2019CosmeticCase_desc": "This case is locked and requires a\nWinter 2019 Cosmetic Key to open.\n\nContains a community made item\nfrom the Winter 2019 Cosmetic Collection.",
"TF_Winter2019CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Winter 2019 Cosmetic Key to open\n-Contents may be Strange or an Unusual Winter 2019 Hat",
"TF_Tool_Winter2019CosmeticKey": "Winter 2019 Cosmetic Key",
"TF_Tool_Winter2019CosmeticKey_desc": "Used to open a Winter 2019 Cosmetic Case",
"TF_Tool_Winter2019CosmeticKey_AdText": "-Used to open a Winter 2019 Cosmetic Case\n-Contents may be Strange or an Unusual Winter 2019 Hat",
"Footer_Summer2020Cosmetics": "Contents may be Strange or an Unusual Summer 2020 Hat",
"TF_Summer2020CosmeticCase": "Summer 2020 Cosmetic Case",
"TF_Summer2020CosmeticCase_desc": "This case is locked and requires a\nSummer 2020 Cosmetic Key to open.\n\nContains a community made item\nfrom the Summer 2020 Cosmetic Collection.",
"TF_Summer2020CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Summer 2020 Cosmetic Key to open\n-Contents may be Strange or an Unusual Summer 2020 Hat",
"TF_Tool_Summer2020CosmeticKey": "Summer 2020 Cosmetic Key",
"TF_Tool_Summer2020CosmeticKey_desc": "Used to open a Summer 2020 Cosmetic Case",
"TF_Tool_Summer2020CosmeticKey_AdText": "-Used to open a Summer 2020 Cosmetic Case\n-Contents may be Strange or an Unusual Summer 2020 Hat",
"Footer_Winter2020Cosmetics": "Contents may be Strange or an Unusual Winter 2020 Hat",
"TF_Winter2020CosmeticCase": "Winter 2020 Cosmetic Case",
"TF_Winter2020CosmeticCase_desc": "This case is locked and requires a\nWinter 2020 Cosmetic Key to open.\n\nContains a community made item\nfrom the Winter 2020 Cosmetic Collection.",
"TF_Winter2020CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Winter 2020 Cosmetic Key to open\n-Contents may be Strange or an Unusual Winter 2020 Hat",
"TF_Tool_Winter2020CosmeticKey": "Winter 2020 Cosmetic Key",
"TF_Tool_Winter2020CosmeticKey_desc": "Used to open a Winter 2020 Cosmetic Case",
"TF_Tool_Winter2020CosmeticKey_AdText": "-Used to open a Winter 2020 Cosmetic Case\n-Contents may be Strange or an Unusual Winter 2020 Hat",
"Footer_Summer2021Cosmetics": "Contents may be Strange or an Unusual Summer 2021 Hat",
"TF_Summer2021CosmeticCase": "Summer 2021 Cosmetic Case",
"TF_Summer2021CosmeticCase_desc": "This case is locked and requires a\nSummer 2021 Cosmetic Key to open.\n\nContains a community made item\nfrom the Summer 2021 Cosmetic Collection.",
"TF_Summer2021CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Summer 2021 Cosmetic Key to open\n-Contents may be Strange or an Unusual Summer 2021 Hat",
"TF_Tool_Summer2021CosmeticKey": "Summer 2021 Cosmetic Key",
"TF_Tool_Summer2021CosmeticKey_desc": "Used to open a Summer 2021 Cosmetic Case",
"TF_Tool_Summer2021CosmeticKey_AdText": "-Used to open a Summer 2021 Cosmetic Case\n-Contents may be Strange or an Unusual Summer 2021 Hat",
"Footer_Winter2021Cosmetics": "Contents may be Strange or an Unusual Winter 2021 Hat",
"TF_Winter2021CosmeticCase": "Winter 2021 Cosmetic Case",
"TF_Winter2021CosmeticCase_desc": "This case is locked and requires a\nWinter 2021 Cosmetic Key to open.\n\nContains a community made item\nfrom the Winter 2021 Cosmetic Collection.",
"TF_Winter2021CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Winter 2021 Cosmetic Key to open\n-Contents may be Strange or an Unusual Winter 2021 Hat",
"TF_Tool_Winter2021CosmeticKey": "Winter 2021 Cosmetic Key",
"TF_Tool_Winter2021CosmeticKey_desc": "Used to open a Winter 2021 Cosmetic Case",
"TF_Tool_Winter2021CosmeticKey_AdText": "-Used to open a Winter 2021 Cosmetic Case\n-Contents may be Strange or an Unusual Winter 2021 Hat",
"Footer_Summer2022Cosmetics": "Contents may be Strange or an Unusual Summer 2022 Hat",
"TF_Summer2022CosmeticCase": "Summer 2022 Cosmetic Case",
"TF_Summer2022CosmeticCase_desc": "This case is locked and requires a\nSummer 2022 Cosmetic Key to open.\n\nContains a community made item\nfrom the Summer 2022 Cosmetic Collection.",
"TF_Summer2022CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Summer 2022 Cosmetic Key to open\n-Contents may be Strange or an Unusual Summer 2022 Hat",
"TF_Tool_Summer2022CosmeticKey": "Summer 2022 Cosmetic Key",
"TF_Tool_Summer2022CosmeticKey_desc": "Used to open a Summer 2022 Cosmetic Case",
"TF_Tool_Summer2022CosmeticKey_AdText": "-Used to open a Summer 2022 Cosmetic Case\n-Contents may be Strange or an Unusual Summer 2022 Hat",
"Footer_Winter2022Cosmetics": "Contents may be Strange or an Unusual Winter 2022 Hat",
"TF_Winter2022CosmeticCase": "Winter 2022 Cosmetic Case",
"TF_Winter2022CosmeticCase_desc": "This case is locked and requires a\nWinter 2022 Cosmetic Key to open.\n\nContains a community made item\nfrom the Winter 2022 Cosmetic Collection.",
"TF_Winter2022CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Winter 2022 Cosmetic Key to open\n-Contents may be Strange or an Unusual Winter 2022 Hat",
"TF_Tool_Winter2022CosmeticKey": "Winter 2022 Cosmetic Key",
"TF_Tool_Winter2022CosmeticKey_desc": "Used to open a Winter 2022 Cosmetic Case",
"TF_Tool_Winter2022CosmeticKey_AdText": "-Used to open a Winter 2022 Cosmetic Case\n-Contents may be Strange or an Unusual Winter 2022 Hat",
"Footer_Summer2023Cosmetics": "Contents may be Strange or an Unusual Summer 2023 Hat",
"TF_Summer2023CosmeticCase": "Summer 2023 Cosmetic Case",
"TF_Summer2023CosmeticCase_desc": "This case is locked and requires a\nSummer 2023 Cosmetic Key to open.\n\nContains a community made item\nfrom the Summer 2023 Cosmetic Collection.",
"TF_Summer2023CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Summer 2023 Cosmetic Key to open\n-Contents may be Strange or an Unusual Summer 2023 Hat",
"TF_Tool_Summer2023CosmeticKey": "Summer 2023 Cosmetic Key",
"TF_Tool_Summer2023CosmeticKey_desc": "Used to open a Summer 2023 Cosmetic Case",
"TF_Tool_Summer2023CosmeticKey_AdText": "-Used to open a Summer 2023 Cosmetic Case\n-Contents may be Strange or an Unusual Summer 2023 Hat",
"Footer_Winter2023Cosmetics": "Contents may be Strange or an Unusual Winter 2023 Hat",
"TF_Winter2023CosmeticCase": "Winter 2023 Cosmetic Case",
"TF_Winter2023CosmeticCase_desc": "This case is locked and requires a\nWinter 2023 Cosmetic Key to open.\n\nContains a community made item\nfrom the Winter 2023 Cosmetic Collection.",
"TF_Winter2023CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Winter 2023 Cosmetic Key to open\n-Contents may be Strange or an Unusual Winter 2023 Hat",
"TF_Tool_Winter2023CosmeticKey": "Winter 2023 Cosmetic Key",
"TF_Tool_Winter2023CosmeticKey_desc": "Used to open a Winter 2023 Cosmetic Case",
"TF_Tool_Winter2023CosmeticKey_AdText": "-Used to open a Winter 2023 Cosmetic Case\n-Contents may be Strange or an Unusual Winter 2023 Hat",
"Footer_Summer2024Cosmetics": "Contents may be Strange or an Unusual Summer 2024 Hat",
"TF_Summer2024CosmeticCase": "Summer 2024 Cosmetic Case",
"TF_Summer2024CosmeticCase_desc": "This case is locked and requires a\nSummer 2024 Cosmetic Key to open.\n\nContains a community made item\nfrom the Summer 2024 Cosmetic Collection.",
"TF_Summer2024CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Summer 2024 Cosmetic Key to open\n-Contents may be Strange or an Unusual Summer 2024 Hat",
"TF_Tool_Summer2024CosmeticKey": "Summer 2024 Cosmetic Key",
"TF_Tool_Summer2024CosmeticKey_desc": "Used to open a Summer 2024 Cosmetic Case",
"TF_Tool_Summer2024CosmeticKey_AdText": "-Used to open a Summer 2024 Cosmetic Case\n-Contents may be Strange or an Unusual Summer 2024 Hat",
"Footer_Winter2024Cosmetics": "Contents may be Strange or an Unusual Winter 2024 Hat",
"TF_Winter2024CosmeticCase": "Winter 2024 Cosmetic Case",
"TF_Winter2024CosmeticCase_desc": "This case is locked and requires a\nWinter 2024 Cosmetic Key to open.\n\nContains a community made item\nfrom the Winter 2024 Cosmetic Collection.",
"TF_Winter2024CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Winter 2024 Cosmetic Key to open\n-Contents may be Strange or an Unusual Winter 2024 Hat",
"TF_Tool_Winter2024CosmeticKey": "Winter 2024 Cosmetic Key",
"TF_Tool_Winter2024CosmeticKey_desc": "Used to open a Winter 2024 Cosmetic Case",
"TF_Tool_Winter2024CosmeticKey_AdText": "-Used to open a Winter 2024 Cosmetic Case\n-Contents may be Strange or an Unusual Winter 2024 Hat",
"Footer_Summer2025Cosmetics": "Contents may be Strange or an Unusual Summer 2025 Hat",
"TF_Summer2025CosmeticCase": "Summer 2025 Cosmetic Case",
"TF_Summer2025CosmeticCase_desc": "This case is locked and requires a\nSummer 2025 Cosmetic Key to open.\n\nContains a community made item\nfrom the Summer 2025 Cosmetic Collection.",
"TF_Summer2025CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Summer 2025 Cosmetic Key to open\n-Contents may be Strange or an Unusual Summer 2025 Hat",
"TF_Tool_Summer2025CosmeticKey": "Summer 2025 Cosmetic Key",
"TF_Tool_Summer2025CosmeticKey_desc": "Used to open a Summer 2025 Cosmetic Case",
"TF_Tool_Summer2025CosmeticKey_AdText": "-Used to open a Summer 2025 Cosmetic Case\n-Contents may be Strange or an Unusual Summer 2025 Hat",
"Footer_RainyDayCosmetics": "Contents may be Strange or an Unusual Rainy Day Hat",
"TF_RainyDayCosmeticCase": "Rainy Day Cosmetic Case",
"TF_RainyDayCosmeticCase_desc": "This case is locked and requires a\nRainy Day Cosmetic Key to open.\n\nContains a community made item\nfrom the Rainy Day Cosmetic Collection.",
"TF_RainyDayCosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Rainy Day Cosmetic Key to open\n-Contents may be Strange or an Unusual Rainy Day Hat",
"TF_Tool_RainyDayCosmeticKey": "Rainy Day Cosmetic Key",
"TF_Tool_RainyDayCosmeticKey_desc": "Used to open a Rainy Day Cosmetic Case",
"TF_Tool_RainyDayCosmeticKey_AdText": "-Used to open a Rainy Day Cosmetic Case\n-Contents may be Strange or an Unusual Rainy Day Hat",
// Operation tough break
"operation_tough_break_master_collection": "The Tough Break Collections",
"tough_break_drop_collection_01": "Harvest Collection",
"tough_break_drop_collection_01_desc": "Items from the Harvest Collection",
"tough_break_drop_collection_02": "Gentlemanne's Collection",
"tough_break_drop_collection_02_desc": "Items from the Gentlemanne's Collection",
"tough_break_case_collection_01": "Pyroland Collection",
"tough_break_case_collection_01_desc": "Items from the Pyroland Collection",
"tough_break_case_collection_02": "Warbird Collection",
"tough_break_case_collection_02_desc": "Items from the Warbird Collection",
"TF_InactiveOperation2Pass": "Tough Break Campaign Pass",
"TF_InactiveOperation2Pass_desc": "The Tough Break Campaign ended on April 4, 2016.\n\nActivating the Tough Break Campaign Pass granted a Tough Break Campaign Stamp that would grant access to contracts and track stats during the campaign.",
"TF_InactiveOperation2Pass_AdText": "-Contribute to community map makers\n-Access to contracts that reward event-exclusive items when completed",
"TF_ActivatedOperation2Pass": "Tough Break Campaign Stamp",
"TF_ActivatedOperation2Pass_desc": "The Tough Break Campaign ended on April 4, 2016.\n\nThe Tough Break Campaign Stamp granted access to contracts and tracked stats during the campaign. You could level up the stamp by earning Contract Points from completed contracts. The stamp would level up at 1000, 2000, and 3000 Contract Points.",
"TF_ToughBreakCase01": "Pyroland Weapons Case",
"TF_ToughBreakCase01_Desc": "This Case is locked and requires a\nTough Break Key to open.\n\nContains an item from the Pyroland Collection.",
"TF_ToughBreakCase01_AdText": "-Tough Break Locked Case\n-May contain Strange and Unusual Weapons.",
"TF_ToughBreakCase02": "Warbird Weapons Case",
"TF_ToughBreakCase02_Desc": "This Case is locked and requires a\nTough Break Key to open.\n\nContains an item from the Warbird Collection.",
"TF_ToughBreakCase02_AdText": "-Tough Break Locked Case\n-May contain Strange and Unusual Weapons.",
"TF_Tool_ToughBreakKey": "Tough Break Key",
"TF_Tool_ToughBreakKey_Desc": "Used to open The Pyroland\nor The Warbird Weapons Case.",
"TF_Tool_ToughBreakKey_AdText": "-Used to open The Pyroland or The Warbird Weapons Case\n-Cases may contain Strange and Unusual Weapons.",
"TF_Winter_2015_Mystery": "Smissmas 2015 Festive Gift",
"TF_Winter_2015_Mystery_desc": "A festive gift from Mann Co.\nContains a Gun Mettle and Tough Break Festivizer\n\nMerry Smissmas!",
"TF_InactiveCampaign3Pass": "Jungle Inferno Campaign Pass",
"TF_InactiveCampaign3Pass_desc": "Activating the Jungle Inferno Campaign Pass grants a Jungle Inferno ConTracker that gives access to Jungle Inferno contracts, tracks your progress, and can be equipped in-game!",
"TF_InactiveCampaign3Pass_AdText": "-Contribute to community map makers\n-Access to contracts that reward exclusive items when completed!",
"TF_ActivatedCampaign3Pass": "Jungle Inferno ConTracker",
"TF_ActivatedCampaign3Pass_desc": "The Jungle Inferno ConTracker gives access to Jungle Inferno contracts, tracks your progress, and can be equipped in-game! You can level up your Jungle Inferno ConTracker by earning Contract Points from campaign contracts. The ConTracker will level up at 2500, 5000, and 6840 Contract Points.",
"TF_JungleInfernoContractsPass": "Jungle Inferno Contracts Pass",
"TF_JungleInfernoContractsPass_Desc": "The Jungle Inferno Campaign might be over, but you can still access the contracts! Activating the Jungle Inferno Contracts Pass grants a Jungle Inferno ConTracker that gives access to Jungle Inferno contracts, tracks your progress, and can be equipped in-game!\n\nYou do not need this pass if you already have access to the Jungle Inferno contracts.",
"TF_JungleInfernoContractsPass_AdText": "-Access to contracts that reward exclusive items when completed!\n\n-You do not need this pass if you already have access to the Jungle Inferno contracts.",
"Footer_Campaign3Cosmetics": "Contents may be Strange or an Unusual Jungle Inferno Hat",
"TF_Campaign3CosmeticCase1": "Abominable Cosmetic Case",
"TF_Campaign3CosmeticCase1_desc": "This Case is locked and requires an\nAbominable Cosmetic Key to open.\n\nContains a community made item\nfrom the Abominable Cosmetic Collection.",
"TF_Campaign3CosmeticCase1_AdText": "-Contains Community Cosmetics\n-Requires an Abominable Cosmetic Key to open\n-Contents may be Strange or an Unusual Jungle Inferno Hat",
"TF_Tool_Campaign3CosmeticKey1": "Abominable Cosmetic Key",
"TF_Tool_Campaign3CosmeticKey1_desc": "Used to Open an Abominable Cosmetic Case",
"TF_Tool_Campaign3CosmeticKey1_AdText": "-Used to open an Abominable Cosmetic Case\n-Contents may be Strange or an Unusual Jungle Inferno Hat",
"TF_Campaign3CosmeticCase2": "Unleash the Beast Cosmetic Case",
"TF_Campaign3CosmeticCase2_desc": "This Case is locked and requires an\nUnleash the Beast Cosmetic Key to open.\n\nContains a community made item\nfrom the Unleash the Beast Cosmetic Collection.",
"TF_Campaign3CosmeticCase2_AdText": "-Contains Community Cosmetics\n-Requires an Unleash the Beast Cosmetic Key to open\n-Contents may be Strange or an Unusual Jungle Inferno Hat",
"TF_Tool_Campaign3CosmeticKey2": "Unleash the Beast Cosmetic Key",
"TF_Tool_Campaign3CosmeticKey2_desc": "Used to Open an Unleash the Beast Cosmetic Case",
"TF_Tool_Campaign3CosmeticKey2_AdText": "-Used to open an Unleash the Beast Cosmetic Case\n-Contents may be Strange or an Unusual Jungle Inferno Hat",
"TF_Campaign3PaintkitCase1": "Jungle Jackpot War Paint Case",
"TF_Campaign3PaintkitCase1_desc": "Never bring an unpainted gun to a painted gunfight.\n\nContains an item from the Jungle Jackpot Collection.",
"TF_Campaign3PaintkitCase1_AdText": "-Contains a War Paint from the Jungle Jackpot War Paint Collection",
"TF_Tool_Campaign3PaintkitKey1": "Jungle Jackpot War Paint Key",
"TF_Tool_Campaign3PaintkitKey1_desc": "Used to Open a Jungle Jackpot War Paint Case",
"TF_Tool_Campaign3PaintkitKey1_AdText": "-Used to Open a Jungle Jackpot War Paint Case",
"TF_Campaign3PaintkitCase2": "Infernal Reward War Paint Case",
"TF_Campaign3PaintkitCase2_desc": "Paint your master piece with one of these community-made War Paints.\n\nContains an item from the Infernal Reward Collection.",
"TF_Campaign3PaintkitCase2_AdText": "-Contains a War Paint from the Infernal Reward War Paint Collection",
"TF_Tool_Campaign3PaintkitKey2": "Infernal Reward War Paint Key",
"TF_Tool_Campaign3PaintkitKey2_desc": "Used to Open an Infernal Reward War Paint Case",
"TF_Tool_Campaign3PaintkitKey2_AdText": "-Used to Open an Infernal Reward War Paint Case",
"TF_KeylessPaintkitBundle_Campaign3_Collection1_Tier1_Name": "'Decorated War Hero' War Paint\nCivilian Grade Keyless Case",
"TF_KeylessPaintkitBundle_Campaign3_Collection1_Tier2_Name": "'Decorated War Hero' War Paint\nFreelance Grade Keyless Case",
"TF_KeylessPaintkitBundle_Campaign3_Collection1_Tier3_Name": "'Decorated War Hero' War Paint\nMercenary Grade Keyless Case",
"TF_KeylessPaintkitBundle_Campaign3_Collection2_Tier1_Name": "'Contract Campaigner' War Paint\nCivilian Grade Keyless Case",
"TF_KeylessPaintkitBundle_Campaign3_Collection2_Tier2_Name": "'Contract Campaigner' War Paint\nFreelance Grade Keyless Case",
"TF_KeylessPaintkitBundle_Campaign3_Collection2_Tier3_Name": "'Contract Campaigner' War Paint\nMercenary Grade Keyless Case",
"TF_KeylessPaintkitBundle_Campaign3_Collection1_Tier1_Desc": "A Civilian Grade or better War Paint from the Decorated War Hero Collection",
"TF_KeylessPaintkitBundle_Campaign3_Collection1_Tier2_Desc": "A Freelance Grade or better War Paint from the Decorated War Hero Collection",
"TF_KeylessPaintkitBundle_Campaign3_Collection1_Tier3_Desc": "A Mercenary Grade or better War Paint from the Decorated War Hero Collection",
"TF_KeylessPaintkitBundle_Campaign3_Collection2_Tier1_Desc": "A Civilian Grade or better War Paint from the Contract Campaigner Collection",
"TF_KeylessPaintkitBundle_Campaign3_Collection2_Tier2_Desc": "A Freelance Grade or better War Paint from the Contract Campaigner Collection",
"TF_KeylessPaintkitBundle_Campaign3_Collection2_Tier3_Desc": "A Mercenary Grade or better War Paint from the Contract Campaigner Collection",
"TF_Winter2017WarPaintCase": "Winter 2017 War Paint Case",
"TF_Winter2017WarPaintCase_desc": "Paint your master piece with one of these community-made War Paints.\n\nContains an item from the Winter 2017 Collection.",
"TF_Winter2017WarPaintCase_AdText": "-Contains a War Paint from the Winter 2017 Collection",
"TF_Tool_Winter2017WarPaintKey": "Winter 2017 War Paint Key",
"TF_Tool_Winter2017WarPaintKey_desc": "Used to Open a Winter 2017 War Paint Case",
"TF_Tool_Winter2017WarPaintKey_AdText": "-Used to Open a Winter 2017 War Paint Case",
"TF_Winter2019WarPaintCase": "Winter 2019 War Paint Case",
"TF_Winter2019WarPaintCase_desc": "Paint your master piece with one of these community-made War Paints.\n\nContains an item from the Winter 2019 Collection.",
"TF_Winter2019WarPaintCase_AdText": "-Contains a War Paint from the Winter 2019 Collection",
"TF_Tool_Winter2019WarPaintKey": "Winter 2019 War Paint Key",
"TF_Tool_Winter2019WarPaintKey_desc": "Used to Open a Winter 2019 War Paint Case",
"TF_Tool_Winter2019WarPaintKey_AdText": "-Used to Open a Winter 2019 War Paint Case",
"TF_Winter2020WarPaintCase": "Winter 2020 War Paint Case",
"TF_Winter2020WarPaintCase_desc": "Paint your master piece with one of these community-made War Paints.\n\nContains an item from the Winter 2020 Collection.",
"TF_Winter2020WarPaintCase_AdText": "-Contains a War Paint from the Winter 2020 Collection",
"TF_Tool_Winter2020WarPaintKey": "Winter 2020 War Paint Key",
"TF_Tool_Winter2020WarPaintKey_desc": "Used to Open a Winter 2020 War Paint Case",
"TF_Tool_Winter2020WarPaintKey_AdText": "-Used to Open a Winter 2020 War Paint Case",
"Footer_BlueMoonCosmetics": "Contents may be Strange or an Unusual Blue Moon Hat",
"TF_BlueMoonCosmeticCase": "Blue Moon Cosmetic Case",
"TF_BlueMoonCosmeticCase_desc": "This case is locked and requires a\nBlue Moon Cosmetic Key to open.\n\nContains a community made item\nfrom the Blue Moon Cosmetic Collection.",
"TF_BlueMoonCosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Blue Moon Cosmetic Key to open\n-Contents may be Strange or an Unusual Blue Moon Hat",
"TF_Tool_BlueMoonCosmeticKey": "Blue Moon Cosmetic Key",
"TF_Tool_BlueMoonCosmeticKey_desc": "Used to open a Blue Moon Cosmetic Case",
"TF_Tool_BlueMoonCosmeticKey_AdText": "-Used to open a Blue Moon Cosmetic Case\n-Contents may be Strange or an Unusual Blue Moon Hat",
"TF_Halloween2018WarPaintCase": "Scream Fortress X War Paint Case",
"TF_Halloween2018WarPaintCase_desc": "Paint your master piece with one of these community-made War Paints.\n\nContains an item from the Scream Fortress X Collection.",
"TF_Halloween2018WarPaintCase_AdText": "-Contains a War Paint from the Scream Fortress X Paint Collection",
"TF_Tool_Halloween2018WarPaintKey": "Scream Fortress X War Paint Key",
"TF_Tool_Halloween2018WarPaintKey_desc": "Used to Open a Scream Fortress X War Paint Case",
"TF_Tool_Halloween2018WarPaintKey_AdText": "-Used to Open a Scream Fortress X War Paint Case",
"TF_Halloween2020WarPaintCase": "Scream Fortress XII War Paint Case",
"TF_Halloween2020WarPaintCase_desc": "Paint your master piece with one of these community-made War Paints.\n\nContains an item from the Scream Fortress XII Collection.",
"TF_Halloween2020WarPaintCase_AdText": "-Contains a War Paint from the Scream Fortress XII Paint Collection",
"TF_Tool_Halloween2020WarPaintKey": "Scream Fortress XII War Paint Key",
"TF_Tool_Halloween2020WarPaintKey_desc": "Used to Open a Scream Fortress XII War Paint Case",
"TF_Tool_Halloween2020WarPaintKey_AdText": "-Used to Open a Scream Fortress XII War Paint Case",
"TF_Halloween2021WarPaintCase": "Scream Fortress XIII War Paint Case",
"TF_Halloween2021WarPaintCase_desc": "Paint your master piece with one of these community-made War Paints.\n\nContains an item from the Scream Fortress XIII Collection.",
"TF_Halloween2021WarPaintCase_AdText": "-Contains a War Paint from the Scream Fortress XIII Paint Collection",
"TF_Tool_Halloween2021WarPaintKey": "Scream Fortress XIII War Paint Key",
"TF_Tool_Halloween2021WarPaintKey_desc": "Used to Open a Scream Fortress XIII War Paint Case",
"TF_Tool_Halloween2021WarPaintKey_AdText": "-Used to Open a Scream Fortress XIII War Paint Case",
"TF_Halloween2022WarPaintCase": "Scream Fortress XIV War Paint Case",
"TF_Halloween2022WarPaintCase_desc": "Paint your master piece with one of these community-made War Paints.\n\nContains an item from the Scream Fortress XIV Collection.",
"TF_Halloween2022WarPaintCase_AdText": "-Contains a War Paint from the Scream Fortress XIV Paint Collection",
"TF_Tool_Halloween2022WarPaintKey": "Scream Fortress XIV War Paint Key",
"TF_Tool_Halloween2022WarPaintKey_desc": "Used to Open a Scream Fortress XIV War Paint Case",
"TF_Tool_Halloween2022WarPaintKey_AdText": "-Used to Open a Scream Fortress XIV War Paint Case",
"TF_Summer2023WarPaintCase": "Summer 2023 War Paint Case",
"TF_Summer2023WarPaintCase_desc": "Paint your master piece with one of these community-made War Paints.\n\nContains an item from the Summer 2023 Collection.",
"TF_Summer2023WarPaintCase_AdText": "-Contains a War Paint from the Summer 2023 Paint Collection",
"TF_Tool_Summer2023WarPaintKey": "Summer 2023 War Paint Key",
"TF_Tool_Summer2023WarPaintKey_desc": "Used to Open a Summer 2023 War Paint Case",
"TF_Tool_Summer2023WarPaintKey_AdText": "-Used to Open a Summer 2023 War Paint Case",
"TF_Halloween2024WarPaintCase": "Scream Fortress XVI War Paint Case",
"TF_Halloween2024WarPaintCase_desc": "Paint your master piece with one of these community-made War Paints.\n\nContains an item from the Scream Fortress XVI Collection.",
"TF_Halloween2024WarPaintCase_AdText": "-Contains a War Paint from the Scream Fortress XVI Paint Collection",
"TF_Tool_Halloween2024WarPaintKey": "Scream Fortress XVI War Paint Key",
"TF_Tool_Halloween2024WarPaintKey_desc": "Used to Open a Scream Fortress XVI War Paint Case",
"TF_Tool_Halloween2024WarPaintKey_AdText": "-Used to Open a Scream Fortress XVI War Paint Case",
"TF_Tracker": "Tracker",
"TF_FestivizerTool": "Festivizer",
"TF_Festivizer": "Festivizer",
"TF_Festivizer_desc": "Used to festivize a weapon",
"TF_PaintKitTool": "War Paint",
"TF_PaintKitTool_desc": "Can be redeemed for an item with the same pattern.",
// Smissmas 2016
"TF_KeylessWinter2016_Case": "Unlocked Winter 2016 Cosmetic Case",
"TF_KeylessWinter2016_Case_desc": "This case is unlocked and does not require a key.\n\nContains a community made item\nfrom the Winter 2016 Cosmetics Collection.\n\nWill only be available for a limited time!",
"TF_KeylessWinter2016_Case_adtext": "-Unlocked and does not require a key\n-Contains Community Cosmetics\n-Contents may be Strange or an Unusual Hat\n-Includes a chance to find a Festivizer as a bonus drop!",
"Footer_KeylessWinter2016_Case": "Contents may be Strange or an Unusual Hat. Includes a chance to find a Festivizer as a bonus drop!",
"TF_ContractReward": "Contract Reward",
"TF_ContractReward_Desc": "Contains a Locked Craftsman Case\nor an item from the Commando Collection",
"TF_ContractReward_Ad": "This case contains 16 skinned weapons from the Commando Collection",
"TF_CraftsmanCase": "Locked Craftsman Case",
"TF_CraftsmanCase_Desc": "Locked Case that requires a Key.\nItem from Craftsman Collection",
"TF_CraftmansCase_Ad": "This case contains 16 skinned weapons from the Craftsman Collection",
"TF_PaintKit_ConcealedKiller": "Concealed Killer",
"TF_PaintKit_Craftsmann": "Craftsmann",
"TF_PaintKit_Teufort": "Teufort",
"TF_PaintKit_Powerhouse": "Powerhouse",
// Invasion Strings
"TF_InactiveInvasionPass": "Invasion Community Update Pass",
"TF_InactiveInvasionPass_Desc": "The Invasion Community Update ended on November 9, 2015.\n\nAll proceeds go to the Invasion Community Update team\n\nActivate to receive an Invasion Community Update Coin\nOnly one Invasion Community Update Coin can be active at a time\nGrants access to Invasion Community Update case drops through the end of 2015",
"TF_InactiveInvasionPass_AdText": "-All proceeds go to the Invasion Community Update team\n\n-Grants access to Invasion Community Update case drops through the end of 2015",
"TF_ActivatedInvasionPass": "Invasion Community Update Coin",
"TF_ActivatedInvasionPass_Desc": "The Invasion Community Update ended on November 9, 2015.\n\nThank you for supporting the Invasion Community Update Team\nGrants access to Invasion Community Update case drops through the end of 2015\n\nStats are tracked until November 9, 2015",
"TF_UseInvasionPass_Text": "Redeeming the pass grants an Invasion Community Update Coin and access to Invasion Community Update case drops through the end of 2015.\n\nThe coin cannot be traded or marketed.",
"TF_Tool_Invasion2015Key": "Invasion Community Update Key",
"TF_Tool_Invasion2015Key_Desc": "Used to Open The Quarantined Collection Case\nor The Confidential Collection Case",
"TF_Tool_Invasion2015Key_AdText": "-Used to Open The Quarantined Collection Case\nor The Confidential Collection Case\n-Contents may be Strange\n-Cases contain Invasion-themed Unusual effects",
"invasion_master_collection": "The Invasion Collections",
"Invasion_collection_01": "Quarantined Collection",
"Invasion_collection_02": "Confidential Collection",
"TF_Invasion2015Case01": "Quarantined Collection Case",
"TF_Invasion2015Case01_Desc": "Invasion Community Update Case\n\nRequires Invasion Community Update Key to open\n\nContains Invasion-themed Unusual effects",
"TF_Invasion2015Case01_AdText": "-Community case\n-Requires Invasion Community Update Key to open\n-Contents may be Strange\n-Contains Invasion-themed Unusual effects",
"TF_Invasion2015Case02": "Confidential Collection Case",
"TF_Invasion2015Case02_Desc": "Invasion Community Update Case\n\nRequires Invasion Community Update Key to open\n\nContains Invasion-themed Unusual effects",
"TF_Invasion2015Case02_AdText": "-Community case\n-Requires Invasion Community Update Key to open\n-Contents may be Strange\n-Contains Invasion-themed Unusual effects",
// Halloween Strings
"Halloween_master_collection": "The Scream Fortress Collections",
"TF_HalloweenPass": "Soul Gargoyle",
"TF_HalloweenPass_desc": "The Soul Gargoyle grants access to Merasmissions during the Scream Fortress event each year.\nYou can level up the gargoyle by collecting souls. Souls can be found by killing enemies, completing Merasmissions and finding Soul Gargoyles.\nLevels up at 666, 1337, 2000 and then every 2000 Souls.\n\nProvides access to Halloween transmutes where you can transmute 3 items for an untradable and unmarketable Halloween item from years past.\nA bonus is given for every 10 transmutes.",
"halloween2015_collection_name": "Gargoyle Collection",
"halloween2015_collection_case": "Gargoyle Case",
"halloween2015_collection_case_desc": "This Case is locked and requires a\nGargoyle Key to open.\n\nContains a community made item\nfrom the Gargoyle Collection.",
"halloween2015_collection_case_adtext": "-Contains Community Cosmetics from the Gargoyle Collection\n-Requires a Gargoyle Key to open\n-Contents may be Strange and hats may be Unusual.",
"halloween2015_collection_key": "Gargoyle Key",
"halloween2015_collection_key_desc": "Used to Open the Gargoyle Case",
"halloween2015_collection_key_adtext": "-Used to Open the Gargoyle Case\n-Contents may be Strange and hats may be Unusual.\n-Unusuals have effects unique to this case",
"halloween2015_collection_case_footer": "Contents may be Strange and hats may be Unusual with a Halloween 2015 effect",
"halloween2016_collection_name": "Creepy Crawly Collection",
"halloween2016_collection_case": "Creepy Crawly Case",
"halloween2016_collection_case_desc": "This Case is locked and requires a\nCreepy Crawly Key to open.\n\nContains a community made item\nfrom the Creepy Crawly Collection.",
"halloween2016_collection_case_adtext": "-Contains Community Cosmetics from the Creepy Crawly Collection\n-Requires a Creepy Crawly Key to open\n-Contents may be Strange and hats may be Unusual.",
"halloween2016_collection_key": "Creepy Crawly Key",
"halloween2016_collection_key_desc": "Used to Open the Creepy Crawly Case",
"halloween2016_collection_key_adtext": "-Used to Open the Creepy Crawly Case\n-Contents may be Strange and hats may be Unusual.",
"halloween2016_collection_case_footer": "Contents may be Strange and hats may be Unusual with a Halloween 2016 effect",
"halloween2016_event_footer": "During the Scream Fortress event, all Unusual items will come with a Halloween 2016 effect",
"halloween2018_collection_name": "Violet Vermin Collection",
"halloween2018_collection_case": "Violet Vermin Case",
"halloween2018_collection_case_desc": "This Case is locked and requires a\nViolet Vermin Key to open.\n\nContains a community made item\nfrom the Violet Vermin Collection.",
"halloween2018_collection_case_adtext": "-Contains Community Cosmetics from the Violet Vermin Collection\n-Requires a Violet Vermin Key to open\n-Contents may be Strange and hats may be Unusual.",
"halloween2018_collection_key": "Violet Vermin Key",
"halloween2018_collection_key_desc": "Used to Open the Violet Vermin Case",
"halloween2018_collection_key_adtext": "-Used to Open the Violet Vermin Case\n-Contents may be Strange and hats may be Unusual.",
"halloween2018_collection_case_footer": "Contents may be Strange and hats may be Unusual with a Halloween 2018 effect",
"halloween2018_event_footer": "During the Scream Fortress event, all Unusual items will come with a Halloween 2018 effect",
"Halloween2018Paintkits_collection": "Scream Fortress X Collection",
"Halloween2018Paintkits_collection_desc": "Items from the Scream Fortress X Collection:",
"Footer_Summer2019Cosmetics": "Contents may be Strange or an Unusual Summer 2019 Hat",
"TF_Summer2019CosmeticCase": "Summer 2019 Cosmetic Case",
"TF_Summer2019CosmeticCase_desc": "This case is locked and requires a\nSummer 2019 Cosmetic Key to open.\n\nContains a community made item\nfrom the Summer 2019 Cosmetic Collection.",
"TF_Summer2019CosmeticCase_AdText": "-Contains Community Cosmetics\n-Requires a Summer 2019 Cosmetic Key to open\n-Contents may be Strange or an Unusual Summer 2019 Hat",
"TF_Tool_Summer2019CosmeticKey": "Summer 2019 Cosmetic Key",
"TF_Tool_Summer2019CosmeticKey_desc": "Used to open a Summer 2019 Cosmetic Case",
"TF_Tool_Summer2019CosmeticKey_AdText": "-Used to open a Summer 2019 Cosmetic Case\n-Contents may be Strange or an Unusual Summer 2019 Hat",
"halloween2019_collection_name": "Spooky Spoils Collection",
"halloween2019_collection_case": "Spooky Spoils Case",
"halloween2019_collection_case_desc": "This Case is locked and requires a\nSpooky Spoils Key to open.\n\nContains a community made item\nfrom the Spooky Spoils Collection.",
"halloween2019_collection_case_adtext": "-Contains Community Cosmetics from the Spooky Spoils Collection\n-Requires a Spooky Spoils Key to open\n-Contents may be Strange and hats may be Unusual.",
"halloween2019_collection_key": "Spooky Spoils Key",
"halloween2019_collection_key_desc": "Used to Open the Spooky Spoils Case",
"halloween2019_collection_key_adtext": "-Used to Open the Spooky Spoils Case\n-Contents may be Strange and hats may be Unusual.",
"halloween2019_collection_case_footer": "Contents may be Strange and hats may be Unusual with a Halloween 2019 effect",
"halloween2019_event_footer": "During the Scream Fortress event, all Unusual items will come with a Halloween 2019 effect",
"halloween2020_collection_name": "Wicked Windfall Collection",
"halloween2020_collection_case": "Wicked Windfall Case",
"halloween2020_collection_case_desc": "This Case is locked and requires a\nWicked Windfall Key to open.\n\nContains a community made item\nfrom the Wicked Windfall Collection.",
"halloween2020_collection_case_adtext": "-Contains Community Cosmetics from the Wicked Windfall Collection\n-Requires a Wicked Windfall Key to open\n-Contents may be Strange and hats may be Unusual.",
"halloween2020_collection_key": "Wicked Windfall Key",
"halloween2020_collection_key_desc": "Used to Open the Wicked Windfall Case",
"halloween2020_collection_key_adtext": "-Used to Open the Wicked Windfall Case\n-Contents may be Strange and hats may be Unusual.",
"halloween2020_collection_case_footer": "Contents may be Strange and hats may be Unusual with a Halloween 2020 effect",
"halloween2020_event_footer": "During the Scream Fortress event, all Unusual items will come with a Halloween 2020 effect",
"Halloween2020Paintkits_collection": "Scream Fortress XII Collection",
"Halloween2020Paintkits_collection_desc": "Items from the Scream Fortress XII Collection:",
"halloween2021_collection_name": "Crimson Cache Collection",
"halloween2021_collection_case": "Crimson Cache Case",
"halloween2021_collection_case_desc": "This Case is locked and requires a\nCrimson Cache Key to open.\n\nContains a community made item\nfrom the Crimson Cache Collection.",
"halloween2021_collection_case_adtext": "-Contains Community Cosmetics from the Crimson Cache Collection\n-Requires a Crimson Cache Key to open\n-Contents may be Strange and hats may be Unusual.",
"halloween2021_collection_key": "Crimson Cache Key",
"halloween2021_collection_key_desc": "Used to Open the Crimson Cache Case",
"halloween2021_collection_key_adtext": "-Used to Open the Crimson Cache Case\n-Contents may be Strange and hats may be Unusual.",
"halloween2021_collection_case_footer": "Contents may be Strange and hats may be Unusual with a Halloween 2021 effect",
"halloween2021_event_footer": "During the Scream Fortress event, all Unusual items will come with a Halloween 2021 effect",
"Halloween2021Paintkits_collection": "Scream Fortress XIII Collection",
"Halloween2021Paintkits_collection_desc": "Items from the Scream Fortress XIII Collection:",
"halloween2022_collection_name": "Ghoulish Gains Collection",
"halloween2022_collection_case": "Ghoulish Gains Case",
"halloween2022_collection_case_desc": "This Case is locked and requires a\nGhoulish Gains Key to open.\n\nContains a community made item\nfrom the Ghoulish Gains Collection.",
"halloween2022_collection_case_adtext": "-Contains Community Cosmetics from the Ghoulish Gains Collection\n-Requires a Ghoulish Gains Key to open\n-Contents may be Strange and hats may be Unusual.",
"halloween2022_collection_key": "Ghoulish Gains Key",
"halloween2022_collection_key_desc": "Used to Open the Ghoulish Gains Case",
"halloween2022_collection_key_adtext": "-Used to Open the Ghoulish Gains Case\n-Contents may be Strange and hats may be Unusual.",
"halloween2022_collection_case_footer": "Contents may be Strange and hats may be Unusual with a Halloween 2022 effect",
"halloween2022_event_footer": "During the Scream Fortress event, all Unusual items will come with a Halloween 2022 effect",
"Halloween2022Paintkits_collection": "Scream Fortress XIV Collection",
"Halloween2022Paintkits_collection_desc": "Items from the Scream Fortress XIV Collection:",
"Summer2023Paintkits_collection": "Summer 2023 Collection",
"Summer2023Paintkits_collection_desc": "Items from the Summer 2023 Collection:",
"halloween2023_collection_name": "Bone-Chilling Bonanza Collection",
"halloween2023_collection_case": "Bone-Chilling Bonanza Case",
"halloween2023_collection_case_desc": "This Case is locked and requires a\nBone-Chilling Bonanza Key to open.\n\nContains a community made item\nfrom the Bone-Chilling Bonanza Collection.",
"halloween2023_collection_case_adtext": "-Contains Community Cosmetics from the Bone-Chilling Bonanza Collection\n-Requires a Bone-Chilling Bonanza Key to open\n-Contents may be Strange and hats may be Unusual.",
"halloween2023_collection_key": "Bone-Chilling Bonanza Key",
"halloween2023_collection_key_desc": "Used to Open the Bone-Chilling Bonanza Case",
"halloween2023_collection_key_adtext": "-Used to Open the Bone-Chilling Bonanza Case\n-Contents may be Strange and hats may be Unusual.",
"halloween2023_collection_case_footer": "Contents may be Strange and hats may be Unusual with a Halloween 2023 effect",
"halloween2023_event_footer": "During the Scream Fortress event, all Unusual items will come with a Halloween 2023 effect",
"halloween2024_collection_name": "Terrifying Trove Collection",
"halloween2024_collection_case": "Terrifying Trove Case",
"halloween2024_collection_case_desc": "This Case is locked and requires a\nTerrifying Trove Key to open.\n\nContains a community made item\nfrom the Terrifying Trove Collection.",
"halloween2024_collection_case_adtext": "-Contains Community Cosmetics from the Terrifying Trove Collection\n-Requires a Terrifying Trove Key to open\n-Contents may be Strange and hats may be Unusual.",
"halloween2024_collection_key": "Terrifying Trove Key",
"halloween2024_collection_key_desc": "Used to Open the Terrifying Trove Case",
"halloween2024_collection_key_adtext": "-Used to Open the Terrifying Trove Case\n-Contents may be Strange and hats may be Unusual.",
"halloween2024_collection_case_footer": "Contents may be Strange and hats may be Unusual with a Halloween 2024 effect",
"halloween2024_event_footer": "During the Scream Fortress event, all Unusual items will come with a Halloween 2024 effect",
"Halloween2024Paintkits_collection": "Scream Fortress XVI Collection",
"Halloween2024Paintkits_collection_desc": "Items from the Scream Fortress XVI Collection:",
"halloween2025_collection_name": "Spectral Stash Collection",
"halloween2025_collection_case": "Spectral Stash Case",
"halloween2025_collection_case_desc": "This Case is locked and requires a\nSpectral Stash Key to open.\n\nContains a community made item\nfrom the Spectral Stash Collection.",
"halloween2025_collection_case_adtext": "-Contains Community Cosmetics from the Spectral Stash Collection\n-Requires a Spectral Stash Key to open\n-Contents may be Strange and hats may be Unusual.",
"halloween2025_collection_key": "Spectral Stash Key",
"halloween2025_collection_key_desc": "Used to Open the Spectral Stash Case",
"halloween2025_collection_key_adtext": "-Used to Open the Spectral Stash Case\n-Contents may be Strange and hats may be Unusual.",
"halloween2025_collection_case_footer": "Contents may be Strange and hats may be Unusual with a Halloween 2025 effect",
"halloween2025_event_footer": "During the Scream Fortress event, all Unusual items will come with a Halloween 2025 effect",

	
"TF_Checkmark": "✔ ",
"TF_Checkmark_Unusual": "★ ",
"TF_LackOfCheckmark": "    ",
"Rarity_Spacer": " ",
"Strange_Spacer": " ",
"Rarity_Default": "Stock",
"Rarity_Default_Weapon": "Stock",
"Rarity_Common": "Civilian",
"Rarity_Common_Weapon": "Civilian",
"Rarity_Uncommon": "Freelance",
"Rarity_Uncommon_Weapon": "Freelance",
"Rarity_Rare": "Mercenary",
"Rarity_Rare_Weapon": "Mercenary",
"Rarity_Mythical": "Commando",
"Rarity_Mythical_Weapon": "Commando",
"Rarity_Legendary": "Assassin",
"Rarity_Legendary_Weapon": "Assassin",
"Rarity_Ancient": "Elite",
"Rarity_Ancient_Weapon": "Elite",
"Rarity_Contraband": "Immortal",
"Rarity_Contraband_Weapon": "Immortal",
"Footer_StrangeUnusualWeapon": "Contents may be Strange or Unusual",
"TFUI_InvTooltip_None": "",
"TFUI_InvTooltip_FactoryNew": "Factory New",
"TFUI_InvTooltip_MinimalWear": "Minimal Wear",
"TFUI_InvTooltip_FieldTested": "Field-Tested",
"TFUI_InvTooltip_WellWorn": "Well-Worn",
"TFUI_InvTooltip_BattleScared": "Battle Scarred",
"TFUI_InvTooltip_Rarity": "%s1 Grade %s2 (%s3)",
"TFUI_InvTooltip_RarityNoWear": "%s1 Grade %s2%s3",
"TFUI_InvTooltip_Wear": "Exterior:",
"TFUI_InvTooltip_ItemFound": "%s1%s2%s3%s4%s5",
"TFUI_InvTooltip_ItemFound_Itemname": "%s1 ",
"TFUI_InvTooltip_ItemFound_Wear": "(%s1) ",
"TFUI_InvTooltip_ItemFound_Rarity": "%s1 ",
"TFUI_InvTooltip_ItemFound_Strange": "%s1 ",
"TFUI_InvTooltip_ItemFound_Unusual": "%s1 ",
"TF_Tool_PaintCan": "Paint Can",
"TF_Tool_PaintCan_Desc": "Used to paint other items.",
"TF_Tool_PaintCan_TeamColor_Desc": "Used to paint other items the color of your current team.",
"TF_Tool_Giftwrap": "Gift Wrap",
"TF_Tool_Giftwrap_Desc": "Used to wrap tradable items for gifting.",
"TF_Tool_GiftWrap_Global": "Giftapult",
"TF_Tool_Giftwrap_Global_Desc": "Can be used to wrap one item for gifting. The gift will be distributed to a random Steam user currently playing TF2.",
"TF_Tool_Gift": "A Carefully Wrapped Gift",
"TF_Tool_Gift_Global": "Loaded Giftapult",
"TF_Tool_Gift_Global_Desc": "This Giftapult is prepped and ready for delivery. Use it from your backpack to deliver the contents to a random online player.",
"TF_Tool_Gift_Global_Received": "Delivered Giftapult Package",
"TF_Tool_Gift_Global_Received_Desc": "This package was delivered by Giftapult from a random online stranger. You can open it from your backpack.",
"TF_Tool_CustomTextureItem": "Decal Tool",
"TF_Tool_CustomTextureItem_Desc": "Add a custom decal to eligible items.",
"TF_Tool_BackpackExpander": "Backpack Expander",
"TF_Tool_BackpackExpander_Desc": "Add 100 extra slots to your backpack!\n(4000 spaces maximum)",
"TF_Tool_AccountUpgradeToPremium": "Upgrade to Premium Gift",
"TF_Tool_AccountUpgradeToPremium_Desc": "Trade away this item to a friend with a free account.  Once they use it, they'll automatically be converted to a premium account and enjoy perks such as extra backpack slots",
"TF_TauntEnabler": "Special Taunt",
"TF_TauntEnabler_Replay": "Taunt: The Director's Vision",
"TF_TauntEnabler_Replay_Desc": "All Class Taunt\nEquip this item in a Taunt Slot. Activate to tell your victims you are making a Replay of their pathetic demise to share with everyone.",
"TF_Tool_PaintCan_TeamColor": "Team Spirit",
"TF_Tool_PaintCan_TeamColor2": "Operator's Overalls",
"TF_Tool_PaintCan_TeamColor3": "Waterlogged Lab Coat",
"TF_Tool_PaintCan_TeamColor4": "Balaclavas Are Forever",
"TF_Tool_PaintCan_TeamColor5": "An Air of Debonair",
"TF_Tool_PaintCan_TeamColor6": "The Value of Teamwork",
"TF_Tool_PaintCan_TeamColor7": "Cream Spirit",
"TF_Tool_PaintCan_1": "Indubitably Green",
"TF_Tool_PaintCan_2": "Zepheniah's Greed",
"TF_Tool_PaintCan_3": "Noble Hatter's Violet",
"TF_Tool_PaintCan_4": "Color No. 216-190-216",
"TF_Tool_PaintCan_5": "A Deep Commitment to Purple",
"TF_Tool_PaintCan_6": "Mann Co. Orange",
"TF_Tool_PaintCan_7": "Muskelmannbraun",
"TF_Tool_PaintCan_8": "Peculiarly Drab Tincture",
"TF_Tool_PaintCan_9": "Radigan Conagher Brown",
"TF_Tool_PaintCan_10": "Ye Olde Rustic Colour",
"TF_Tool_PaintCan_11": "Australium Gold",
"TF_Tool_PaintCan_12": "Aged Moustache Grey",
"TF_Tool_PaintCan_13": "An Extraordinary Abundance of Tinge",
"TF_Tool_PaintCan_14": "A Distinctive Lack of Hue",
"TF_Tool_PaintCan_15": "Pink as Hell",
"TF_Tool_PaintCan_16": "A Color Similar to Slate",
"TF_Tool_PaintCan_17": "Drably Olive",
"TF_Tool_PaintCan_18": "The Bitter Taste of Defeat and Lime",
"TF_Tool_PaintCan_19": "The Color of a Gentlemann's Business Pants",
"TF_Tool_PaintCan_20": "Dark Salmon Injustice",
"TF_Tool_PaintCan_21": "A Mann's Mint",
"TF_Tool_PaintCan_22": "After Eight",
"TF_Tool_ClaimCode_Desc": "This item will grant you one claim code.",
"TF_RIFT_SpiderHat_ClaimCode": "RIFT Well Spun Hat Claim Code",
"TF_RIFT_SpiderHat_ClaimCode_Desc": "This item will grant you a code to receive a hat in Rift. Use it from your backpack to claim the code.",
"TF_RIFT_SpiderHat_ClaimType": "RIFT Well Spun Hat"

};

function getUnusual(ef){
	switch (ef){
		case 0:
			return "None";
		case 1:
			return "Particle I (Valve Flames)";
		case 2:
			return "Flying Bits";
		case 3:
			return "Nemesis Icon";
		case 4:
			return "Community Sparkle";
		case 5:
			return "Holy Glow";
		case 6:
			return "Green Confetti";
		case 7:
			return "Purple Confetti";
		case 8:
			return "Haunted Ghosts";
		case 9:
			return "Green Energy";
		case 10:
			return "Purple Energy";
		case 11:
			return "Circling TF Logo";
		case 12:
			return "Massed Flies";
		case 13:
			return "Burning Flames";
		case 14:
			return "Scorching Flames";
		case 15:
			return "Searing Plasma";
		case 16:
			return "Vivid Plasma";
		case 17:
			return "Sunbeams";
		case 18:
			return "Circling Peace Sign";
		case 19:
			return "Circling Heart";
		case 20:
			return "Map Stamps";
		case 28:
			return "Genteel Smoke";
		case 29:
			return "Stormy Storm";
		case 30:
			return "Blizzardy Storm";
		case 31:
			return "Nuts n' Bolts";
		case 32:
			return "Orbiting Planets";
		case 33:
			return "Orbiting Fire";
		case 34:
			return "Bubbling";
		case 35:
			return "Smoking";
		case 36:
			return "Steaming";
		case 37:
			return "Flaming Lantern";
		case 38:
			return "Cloudy Moon";
		case 39:
			return "Cauldron Bubbles";
		case 40:
			return "Eerie Orbiting Fire";
		case 43:
			return "Knifestorm";
		case 44:
			return "Misty Skull";
		case 45:
			return "Harvest Moon";
		case 46:
			return "It's A Secret To Everybody";
		case 47:
			return "Stormy 13th Hour";
		case 55:
			return "Aces High (BLU)";
		case 56:
			return "Kill-a-Watt";
		case 57:
			return "Terror-Watt";
		case 58:
			return "Cloud 9";
		case 59:
			return "Aces High (RED)";
		case 60:
			return "Dead Presidents";
		case 61:
			return "Miami Nights";
		case 62:
			return "Disco Beat Down";
		case 63:
			return "Phosphorous";
		case 64:
			return "Sulphurous";
		case 65:
			return "Memory Leak";
		case 66:
			return "Overclocked";
		case 67:
			return "Electrostatic";
		case 68:
			return "Power Surge";
		case 69:
			return "Anti-Freeze";
		case 70:
			return "Time Warp";
		case 71:
			return "Green Black Hole";
		case 72:
			return "Roboactive";
		case 73:
			return "Arcana";
		case 74:
			return "Spellbound";
		case 75:
			return "Chroptera Venenata";
		case 76:
			return "Poisoned Shadows";
		case 77:
			return "Something Burning This Way Comes";
		case 78:
			return "Hellfire";
		case 79:
			return "Darkblaze";
		case 80:
			return "Demonflame";
		case 81:
			return "Bonzo The All-Gwaning";
		case 82:
			return "Amaranthine";
		case 83:
			return "Stare From Beyond";
		case 84:
			return "The Ooze";
		case 85:
			return "Ghastly Ghosts Jr";
		case 86:
			return "Haunted Phantasm Jr";
		case 87:
			return "Frostbite";
		case 88:
			return "Molten Mallard";
		case 89:
			return "Morning Glory";
		case 90:
			return "Death at Dusk";
		case 91:
			return "Abduction";
		case 92:
			return "Atomic";
		case 93:
			return "Subatomic";
		case 94:
			return "Electric Hat Protector";
		case 95:
			return "Magnetic Hat Protector";
		case 96:
			return "Voltaic Hat Protector";
		case 97:
			return "Galactic Codex";
		case 98:
			return "Ancient Codex";
		case 99:
			return "Nebula";
		case 100:
			return "Death by Disco";
		case 101:
			return "It's a mystery to everyone";
		case 102:
			return "It's a puzzle to me";
		case 103:
			return "Ether Trail";
		case 104:
			return "Nether Trail";
		case 105:
			return "Ancient Eldritch";
		case 106:
			return "Eldritch Flame";
		case 107:
			return "Neutron Star";
		case 108:
			return "Tesla Coil";
		case 109:
			return "Starstorm Insomnia";
		case 110:
			return "Starstorm Slumber";
		case 111:
			return "Brain Drain";
		case 112:
			return "Open Mind";
		case 113:
			return "Head of Steam";
		case 114:
			return "Galactic Gateway";
		case 115:
			return "The Eldritch Opening";
		case 116:
			return "The Dark Doorway";
		case 117:
			return "Ring of Fire";
		case 118:
			return "Vicious Circle";
		case 119:
			return "White Lightning";
		case 120:
			return "Omniscient Orb";
		case 121:
			return "Clairvoyance";
		case 122:
			return "Fifth Dimension";
		case 123:
			return "Vicious Vortex";
		case 124:
			return "Menacing Miasma";
		case 125:
			return "Abyssal Aura";
		case 126:
			return "Wicked Wood";
		case 127:
			return "Ghastly Grove";
		case 128:
			return "Mystical Medley";
		case 129:
			return "Ethereal Essence";
		case 130:
			return "Twisted Radiance";
		case 131:
			return "Violet Vortex";
		case 132:
			return "Verdant Vortex";
		case 133:
			return "Valiant Vortex";
		case 134:
			return "Sparkling Lights";
		case 135:
			return "Frozen Icefall";
		case 136:
			return "Fragmented Gluons";
		case 137:
			return "Fragmented Quarks";
		case 138:
			return "Fragmented Photons";
		case 139:
			return "Defragmenting Reality (Red)";
		case 140:
			return "Defragmenting Reality (Blue)";
		case 141:
			return "Fragmenting Reality";
		case 142:
			return "Refragmenting Reality";
		case 143:
			return "Snowfallen";
		case 144:
			return "Snowblinded";
		case 145:
			return "Pyroland Daydream (Red)";
		case 146:
			return "Pyroland Daydream (Blue)";
		case 147:
			return "Verdatica";
		case 148:
			return "Aromatica";
		case 149:
			return "Chromatica";
		case 150:
			return "Prismatica";
		case 151:
			return "Bee Swarm";
		case 152:
			return "Frisky Fireflies";
		case 153:
			return "Smoldering Spirits";
		case 154:
			return "Wandering Wisps";
		case 155:
			return "Kaleidoscope";
		case 156:
			return "Green Giggler";
		case 157:
			return "Laugh-O-Lantern";
		case 158:
			return "Plum Prankster";
		case 159:
			return "Pyroland Nightmare";
		case 160:
			return "Gravelly Ghoul";
		case 161:
			return "Vexed Volcanics";
		case 162:
			return "Gourdian Angel";
		case 163:
			return "Pumpkin Party";
		case 164:
			return "Frozen Fractals";
		case 165:
			return "Lavender Landfall";
		case 166:
			return "Special Snowfall";
		case 167:
			return "Divine Desire";
		case 168:
			return "Distant Dream";
		case 169:
			return "Violent Wintertide";
		case 170:
			return "Blighted Snowstorm";
		case 171:
			return "Pale Nimbus";
		case 172:
			return "Genus Plasmos";
		case 173:
			return "Serenus Lumen";
		case 174:
			return "Ventum Maris";
		case 175:
			return "Mirthful Mistletoe (Red)";
		case 176:
			return "Mirthful Mistletoe (Blue)";
		case 177:
			return "Aggradation";
		case 178:
			return "Resonation";
		case 179:
			return "Lucidation";
		case 180:
			return "Stunning";
		case 181:
			return "Ardentum Saturnalis";
		case 182:
			return "Fragrancium Elementalis";
		case 183:
			return "Reverium Irregularis (Red)";
		case 184:
			return "Reverium Irregularis (Blue)";
		case 185:
			return "Perennial Petals";
		case 186:
			return "Flavorsome Sunset";
		case 187:
			return "Raspberry Bloom";
		case 188:
			return "Iridescence";
		case 189:
			return "Tempered Thorns";
		case 190:
			return "Devilish Diablo";
		case 191:
			return "Severed Serration";
		case 192:
			return "Shrieking Shades";
		case 193:
			return "Restless Wraiths (Red)";
		case 194:
			return "Restless Wraiths (Blue)";
		case 195:
			return "Infernal Wraith";
		case 196:
			return "Phantom Crown";
		case 197:
			return "Ancient Specter";
		case 198:
			return "Viridescent Peeper";
		case 199:
			return "Eyes of Molten";
		case 200:
			return "Ominous Stare";
		case 201:
			return "Pumpkin Moon";
		case 202:
			return "Frantic Spooker";
		case 203:
			return "Frightened Poltergeist";
		case 204:
			return "Energetic Haunter";
		case 205:
			return "Smissmas Tree";
		case 206:
			return "Hospitable Festivity";
		case 207:
			return "Condescending Embrace (Red)";
		case 208:
			return "Condescending Embrace (Blue)";
		case 209:
			return "Sparkling Spruce";
		case 210:
			return "Glittering Juniper";
		case 211:
			return "Prismatic Pine";
		case 212:
			return "Spiraling Lights";
		case 213:
			return "Twisting Lights";
		case 214:
			return "Stardust Pathway";
		case 215:
			return "Flurry Rush";
		case 216:
			return "Spark of Smissmas (Red)";
		case 217:
			return "Spark of Smissmas (Blue)";
		case 218:
			return "Polar Forecast";
		case 219:
			return "Shining Stag";
		case 220:
			return "Holiday Horns";
		case 221:
			return "Ardent Antlers (Red)";
		case 222:
			return "Ardent Antlers (Blue)";
		case 223:
			return "Festive Lights";
		case 224:
			return "Crustacean Sensation (Red)";
		case 225:
			return "Crustacean Sensation (Blue)";
		case 226:
			return "Frosted Decadence (Red)";
		case 227:
			return "Frosted Decadence (Blue)";
		case 228:
			return "Sprinkled Delights";
		case 229:
			return "Terrestrial Favor";
		case 230:
			return "Tropical Thrill";
		case 231:
			return "Flourishing Passion";
		case 232:
			return "Dazzing Fireworks";
		case 233:
			return "Blazing Fireworks";
		case 234:
			return "Shimmering Fireworks";
		case 235:
			return "Twinkling Fireworks";
		case 236:
			return "Sparkling Fireworks";
		case 237:
			return "Glowing Fireworks";
		case 238:
			return "Glimmering Fireworks";
		case 239:
			return "Flying Lights (Red)";
		case 240:
			return "Flying Lights (Blue)";
		case 241:
			return "Limelight";
		case 242:
			return "Shining Star";
		case 243:
			return "Cold Cosmos";
		case 244:
			return "Refracting Fractals";
		case 245:
			return "Startrance (Red)";
		case 246:
			return "Startrance (Blue)";
		case 247:
			return "Starlush";
		case 248:
			return "Starfire";
		case 249:
			return "Stardust";
		case 250:
			return "Contagious Eruption";
		case 251:
			return "Daydream Eruption";
		case 252:
			return "Volcanic Eruption";
		case 253:
			return "Divine Sunlight";
		case 254:
			return "Audiophile";
		case 255:
			return "Soundwave";
		case 256:
			return "Synesthesia";
		case 257:
			return "Haunted Kraken";
		case 258:
			return "Eerie Kraken";
		case 259:
			return "Soulful Slice";
		case 260:
			return "Horsemann's Hack";
		case 261:
			return "Haunted Forever! (Red)";
		case 262:
			return "Haunted Forever! (Blue)";
		case 263:
			return "Forever And Forever!";
		case 264:
			return "Cursed Forever!";
		case 265:
			return "Moth Plague";
		case 266:
			return "Malevolent Monoculi";
		case 267:
			return "Haunted Wick (Red)";
		case 268:
			return "Haunted Wick (Blue)";
		case 269:
			return "Wicked Wick";
		case 270:
			return "Spectral Wick";
		case 271:
			return "Musical Maelstrom";
		case 272:
			return "Verdant Virtuoso";
		case 273:
			return "Silver Serenade";
		case 274:
			return "Cosmic Constellations (Red)";
		case 275:
			return "Cosmic Constellations (Blue)";
		case 276:
			return "Dazzling Constellations";
		case 277:
			return "Tainted Frost";
		case 278:
			return "Starlight Haze";

		case 279:
			return "Hard Carry (Red)";
		case 280:
			return "Hard Carry (Blue)";
		case 281:
			return "Jellyfish Field (Red)";
		case 282:
			return "Jellyfish Field (Blue)";
		case 283:
			return "Jellyfish Hunter";
		case 284:
			return "Jellyfish Jam";
		case 285:
			return "Global Cluster";
		case 286:
			return "Celestial Starburst";
		case 287:
			return "Sylicone Succiducus";
		case 288:
			return "Sakura Smoke Bomb";
		case 289:
			return "Treasure Trove";
		case 290:
			return "Bubble Breeze";
		case 291:
			return "Firefiles";
		case 292:
			return "Mountain Halo";
		case 293:
			return "Celestial Summit";
		case 294:
			return "Stellar Ascent";
		case 295:
			return "Sapped (Red)";
		case 296:
			return "Sapped (Blue)";
		case 297:
			return "Hellspawned Horns (Red)";
		case 298:
			return "Hellspawned Horns (Blue)";
		case 299:
			return "Demonic Impaler";
		case 300:
			return "Revenant's Rack";
		case 301:
			return "Sixth Sense (Red)";
		case 302:
			return "Sixth Sense (Blue)";
		case 303:
			return "Amygdala";
		case 304:
			return "The Bone Zone";
		case 305:
			return "Arachne's Web";
		case 306:
			return "Acidic Climate";
		case 307:
			return "Otherworldly Weather";
		case 308:
			return "Nightmarish Storm";
		case 309:
			return "Icestruck (Red)";
		case 310:
			return "Icestruck (Blue)";
		case 311:
			return "Goldstruck";
		case 312:
			return "Radiant Rivalry (Red)";
		case 313:
			return "Radiant Rivalry (Blue)";
		case 314:
			return "Radiant Legacy";
		case 315:
			return "Frosty Flavours (Red)";
		case 316:
			return "Frosty Flavours (Blue)";
		case 317:
			return "Mint Frost";
		case 318:
			return "North Star (Red)";
		case 319:
			return "North Star (Blue)";
		case 320:
			return "Prettiest Star";
		case 321:
			return "Festive Falling Star";
		case 322:
			return "Lunar Lights (Red)";
		case 323:
			return "Lunar Lights (Blue)";
		case 324:
			return "Fairy Lights";
		case 325:
			return "Natural Lights";
		case 327:
			return "Loyalist's Coronet (Red)";
		case 328:
			return "Loyalist's Coronet (Blue)";
		case 329:
			return "Knight's Prideful Spirit";
		case 330:
			return "Baron's Cherished Chaplet";
		case 331:
			return "Lure of the Deep (Red)";
		case 332:
			return "Lure of the Deep (Blue)";
		case 333:
			return "Violent Viridian";
		case 334:
			return "Magenta Monstrum";
		case 335:
			return "Rainbow Reverie";
		case 336:
			return "Cuban Smoke";
		case 337:
			return "Melting Mohawk (Red)";
		case 338:
			return "Melting Mohawk (Blue)";
		case 339:
			return "Scorched Scalp";
		case 340:
			return "Ignited Crest";
		case 341:
			return "Rare Shine";
		case 342:
			return "Distant Drift (Red)";
		case 343:
			return "Distant Drift (Blue)";
		case 344:
			return "Warp Drive";
		case 345:
			return "Overdrive";
		case 346:
			return "Butterfly Season(Red)";
		case 347:
			return "Butterfly Season(Blue)";
		case 348:
			return "Psycho-delic";
		case 349:
			return "Bewitching Bugs";
		case 350:
			return "Spectral Fire";
		case 351:
			return "Galactic Flame";
		case 352:
			return "Revived Recharge";
		case 353:
			return "Undead Electricity";
		case 354:
			return "Frankencharged";
		case 355:
			return "Phantom Plague";
		case 356:
			return "Haunting Haze";
		case 357:
			return "Vicious Vampires";
		case 358:
			return "Ravenous Ravens";
		case 359:
			return "Delightful Doves";
		case 360:
			return "Searing Stove (Red)";
		case 361:
			return "Searing Stove (Blue)";
		case 362:
			return "Über Blaze (Red)";
		case 363:
			return "Über Blaze (Blue)";
		case 372:
			return "Frisky Morning";
		case 371:
			return "Playful Aurora";
		case 370:
			return "Shining Bokeh";
		case 369:
			return "Aurora Skies";
		case 368:
			return "Ghosts of Smissmas Time";
		case 367:
			return "Halcyon Halo";
		case 365:
			return "Crystal Crown (Red)";
		case 366:
			return "Crystal Crown (Blue)";
		case 364:
			return "Sizzling";
		case 373:
			return "Drunkard";
		case 374:
			return "Blades of Betrayal (Red)";
		case 375:
			return "Blades of Betrayal (Blue)";
		case 376:
			return "Death's Daggers";
		case 377:
			return "Fully Charged (Red)"
		case 378:
			return "Fully Charged (Blue)";
		case 379:
			return "Overcharged";
		case 380:
			return "Piercing Headache";
		case 381:
			return "Decimating Wind";
		case 382:
			return "Ocean Swirl (Red)";
		case 383:
			return "Ocean Swirl (Blue)";
		case 384:
			return "Toxic Swirl";
		case 385:
			return "Candle Flame (Red)";
		case 386:
			return "Candle Flame (Blue)";
		case 387:
			return "Sizzling Aroma (Red)";
		case 388:
			return "Sizzling Aroma (Blue)";
		case 389:
			return "Toxic Aroma";
		case 390:
			return "Current Conductor (Red)";
		case 391:
			return "Current Conductor (Blue)";
		case 392:
			return "Sandy";
		default:
			return "Unknown Effect";
		}
}

function getHexColor(hx){
	switch(hx){
		case '843CE54A':
			return '729E42';
		case '769E844A':
			return '424F3B';
		case '9470A24A':
			return '51384A';
		case 'D8BE584B':
			return 'D8BED8';
		case 'E230FA4A':
			return '7D4071';
		case '36734F4B':
			return 'CF7336';
		case '4575254B':
			return 'A57545';
		case '91AF454B':
			return 'C5AF91';
		case '749AD24A':
			return '694D3A';
		case 'AED8F84A':
			return '7C6C57';
		case '3BB5674B':
			return 'E7B53B';
		case 'FCFCFC4A':
			return '7E7E7E';
		case 'E6E6664B':
			return 'E6E6E6';
		case 'A0A0A049':
			return '141414';
		case 'B4697F4B':
			return 'FF69B4';
		case '3C3D3D4A':
			return '2F4F4F';
		case '0080004B':
			return '808000';
		case 'C8344B4A':
			return '32CD32';
		case '8CE6704B':
			return 'F0E68C';
		case '7A96694B':
			return 'E9967A';

	}
}

function setColor(name){
	switch (name){
		case "normal":
			return "#B2B2B2";
		case "unique":
			return "#FFD700";
		case "developer":
			return "#A50F79";
		case "strange":
			return "#CF6A32";
		case "rarity4":
			return "#8650AC";
		case "vintage":
			return "#476291";
		case "genuine":
			return "#4D7455";
		case "haunted":
			return "#38F3AB";
		case "decorated":
			return "#FAFAFA";
		case "selfmade":
			return "#70B04A";
		case "community":
			return "#70B04A";
		case "collectors":
			return "#AA0000";
		default:
			return "#FFFFFF";
	}
}

const content = document.getElementById("backpack");
const info = document.getElementById("infocont");
const drop1 = document.getElementById("drop1");
const drop2 = document.getElementById("drop2");
const drop3 = document.getElementById("drop3");
const effect = document.getElementById("effect");
const type = document.getElementById("itype");
const delBtn = document.getElementById("delete");
const iname = document.getElementById("iname");
const custname = document.getElementById("custname");
const inameCont = document.getElementById("inamecont");
const ilevel = document.getElementById("level");
const detailInfo = document.getElementById("details");
const sticky = document.getElementById("sticky");
const paintable = document.getElementById("paintable");
const search = document.getElementById("search");
const searchbar = document.getElementById("searchbar");
const searchFill = document.getElementById("searchfill");

const unusList = document.getElementById("list0");
const scoutList = document.getElementById("list1");
const soldierList = document.getElementById("list2");
const pyroList = document.getElementById("list3");
const demoList = document.getElementById("list4");
const heavyList = document.getElementById("list5");
const engiList = document.getElementById("list6");
const sniperList = document.getElementById("list7");
const medicList = document.getElementById("list8");
const spyList = document.getElementById("list9");
const multList = document.getElementById("list12");
const otherList = document.getElementById("list10");
const genOptions = document.getElementById("genOptions");

const pageno = document.getElementById("page");

const itemLabel = document.getElementById("item");
const infoPic = document.getElementById("infoPic");

const load = document.getElementById("load");
const warn = document.getElementById("warn");
const help = document.getElementById("help");

const classes = ["scout", "soldier", "pyro", "demoman", "heavy", "engineer", "sniper", "medic", "spy"]
const tables = [scoutList, soldierList, pyroList, demoList, heavyList, engiList, sniperList, medicList, spyList, multList, otherList]

let bpTable = [];

let curr = [-1, -1, -1, -1, -1, -1];
let copied = [];
let drag = '';
let dragpage = false;
let dragtimer = '';

let bp = [];
let file = '';
let data = '';
let items = '';
let qualities = '';
let unusual = '';
let prefabs = '';

let page = 1;
let maxpage = 4;
let pageIndex = 0;

let select = '';
let selectId = '';

let hasRenamed = false;
let hasError = false;

let gen = '';
let mark = 0;

let helpPage = 0;

setupGUI();

document.addEventListener('keydown', function(e){
	if(data != ''){
		if (select !== '' && !delBtn.disabled){
			if (e.key == 'Delete'){
				deleteItem();
			}

			if (e.ctrlKey && e.key == 'c'){
				copied = [];
				bpTable.forEach(cell => {
					if(cell.classList.contains("tdSel")){
						copied.push(bp[parseInt(cell.id) + ((page - 1) * 50)]);
					}
				});
			}

			if (e.ctrlKey && e.key == 'x'){
				copied = [];
				bpTable.forEach(cell => {
					if(cell.classList.contains("tdSel") && bp[cell.id][0] != -1){
						copied.push(bp[parseInt(cell.id) + ((page - 1) * 50)]);
					}
				});

				deleteItem();
			}

			if (e.ctrlKey && e.key == 'v'){
				for (let i = 0; i < copied.length; i++){
					bp[parseInt(select.id, 10) + ((page - 1) * 50) + i] = copied[i];
				}
				reloadPage();
				deselect(true);
				off(info);
			}
		}

		if (e.key == 'Tab' && !e.shiftKey){
			e.preventDefault();
			updatePage(1);
		}

		if (e.key == 'Tab' && e.shiftKey){
			e.preventDefault();
			updatePage(-1);
		}
	}
	
})

load.addEventListener('change', function(e){
	if(e.target.files.length == 0){
		return;
	}
	data = '';
	items = '';
	qualities = '';
	file = e.target.files[0];
	let reader = new FileReader();
	reader.onload = (function(){
		let contents = reader.result;
		convJson(contents);
	})
	reader.readAsText(file)
})

level.addEventListener('change', function(e){
	curr[1] = e.target.value;
	updateRecord();
})

custname.addEventListener('change', function(e){
	curr[5] = e.target.value;
	updateRecord();
})

searchbar.addEventListener('input', function(e){
	if (e.target.value == ''){
		searchFill.innerHTML = "No Items Found.";
		return;
	}
	searchFill.innerHTML = '';
	let count = 0;
	Object.keys(items).forEach(item => {
		if(items[item].name.toLowerCase().includes(e.target.value.toString().toLowerCase())){
			addSearch(item);
			count++;
		}
		else if(itemNames[properCase(items[item].item_name)] != undefined && itemNames[properCase(items[item].item_name)].toLowerCase().includes(e.target.value.toString().toLowerCase())){
			addSearch(item);
			count++;
		}
	})
	if (count == 0){
		searchFill.innerHTML = "No Items Found.";
		return;
	}
})

function addSearch(itm){
	let button = document.createElement('button');
	let item = JSON.parse(getPrefab(itm));
	if (itemNames[properCase(item.item_name)] != undefined){
		button.innerHTML = itemNames[properCase(item.item_name)];
	}
	else button.innerHTML = item.name;
	button.setAttribute("OnClick", `setItem(${itm}); off(search); updateHelp(1);`);
	searchFill.append(button);
}

function srch(){
	on(search);
	off(drop3);
	searchbar.value = '';
	searchfill.innerHTML = 'No item found.';
	if(helpPage == 5) updateHelp(1);
}

function updateHelp(num){
	helpPage += num;
	let pos = '';
	let rect = '';
	
	if (help.classList.contains('invisible')){
		return;
	}
	
	help.children[5].innerHTML = `${helpPage+1}/14`
	
	switch(helpPage){
		case 0:
			help.children[0].innerHTML = `Welcome!`;
			help.children[1].innerHTML = `Welcome to Empty Vessel's "UnVintage" Item Generator for Team Fortress 2!<br>Although simple, utilizing this tool can seem a little bit complicated to navigate, so let's help you find your way around and building your own inventory!`;
			on(help.children[4]);
			off(help.children[3]);
			
			help.style.left = '50%';
			help.style.top = '100px';
			break;
		case 1:
			help.children[2].disabled = false;
			
			help.children[0].innerHTML = `Overview`;
			help.children[1].innerHTML = `The purpose of this tool is to create inventories for older versions of TF2 that have been cracked using one of the many Steam emulators used during the late 2000s/early 2010s. This tool simulates TF2's backpack system and allows you to edit it freely.</br></br>In this tutorial, if you perform the actions discussed in each of the dialogues, it will automatically advance to the next page. Make sure you read everything before taking action!`;
			on(help.children[3]);
			
			help.style.top = '100px';
			help.style.left = '50%';
			break;
		case 2:
			help.children[0].innerHTML = `Getting Started`;
			help.children[1].innerHTML = `Let's start with the basics. Import your items_game.txt using the button below. This file contains all of the information for all of the items in the build you plan on using. You can find this file at the [root directory]/tf/scripts/items/ directory of your build of TF2.`;
			
			if(data == ''){
				help.children[2].disabled = true;
				help.children[1].innerHTML += `</br></br><span style="color: #b74936">To continue this help dialogue, select your items_game.txt file!</span>`
			}
			
			pos = content.getBoundingClientRect();
			
			help.style.top = (pos.bottom - help.clientHeight) + 'px';
			help.style.left = pos.left + 200 + 'px';
			break;
		case 3:
			help.children[2].disabled = false;
			
			help.children[0].innerHTML = `The Backpack`;
			help.children[1].innerHTML = `To the left is the backpack screen where all of your items are stored. By selecting any of the slots on the page, you will open the information screen off to the right. If an item already exists in this slot, the Information Screen will populate with all of the info for the item you've selected. Try clicking on one of the inventory slots!`
			
			pos = content.getBoundingClientRect();
			
			help.style.right = '';
			help.style.top = (pos.bottom - pos.clientHeight / 2) + 'px';
			help.style.left = (pos.right) + 'px';
			break;
		case 4:
			if(select == ''){
				for(i = 1; i < bp.length; i++){
					if(bp[i][0] != -1){
						select = document.getElementById(i.toString());
						select.classList.add("tdSel");
						selectId = parseInt(select.id, 10);
						setSelect();
						updateInfo();
					}
				}
				if(select == ''){
					select = document.getElementById('1');
					select.classList.add("tdSel");
					selectId = parseInt(select.id, 10);
					setSelect();
					updateInfo();
				}
			}
			help.children[0].innerHTML = `The Info Screen`;
			help.children[1].innerHTML = `The Information Screen on the right is where you will be editing what is inside of the backpack slot you have selected. Although there are several options here, you must first select an item from the item dropdown.`
			
			pos = info.getBoundingClientRect();
			
			help.style.top = pos.top + 'px';
			help.style.left = (pos.left - help.clientWidth - 10) + 'px';
			break;
		case 5:
			on(drop3);
			off(search);
			help.children[0].innerHTML = `Finding Your Items (1)`;
			help.children[1].innerHTML = `In this dropdown menu, you will see all of the items separated by class, and within those sub-menus, separated by Weapon, Cosmetic, Action, and Other where applicable. Selecting an item within this menu will populate the information screen with all of the details of the item, defaulting to <span style="color: ${setColor('unique')}; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">Unique</span> quality and the maximum possible level defined by the items_game.txt.`
			
			pos = drop3.getBoundingClientRect();
			
			help.style.top = (pos.top) + 'px';
			help.style.left = (pos.left - help.clientWidth - 10) + 'px';
			break;
		case 6:
			off(drop3);
			on(search);
			
			help.children[0].innerHTML = `Finding Your Items (2)`;
			help.children[1].innerHTML = `If text-based searching is more your speed, hit the "Search" button to at the top of the Item dropdown box to open a submenu for searching! Results are based on the name both external references (the name that appears in game), internal references (what the engine references for localization purposes), item type, and item slot.`
			
			pos = search.getBoundingClientRect();
			
			help.style.top = (pos.top) + 'px';
			help.style.left = (pos.left + search.clientWidth + 10) + 'px';
			break;
		case 7:
			if(select == ''){
				for(i = 1; i < bp.length; i++){
					if(bp[i][0] != -1){
						select = document.getElementById(i.toString());
						select.classList.add("tdSel");
						selectId = parseInt(select.id, 10);
						setSelect();
						updateInfo();
					}
				}
				if(select == ''){
					select = document.getElementById('1');
					select.classList.add("tdSel");
					selectId = parseInt(select.id, 10);
					setItem(35);
					setSelect();
					updateInfo();
				}
			}
			if(curr[0] == -1){
				setItem(35);
				setSelect();
				updateInfo();
			} 
			off(search);
			off(drop2);
			help.children[0].innerHTML = `Item Information`;
			help.children[1].innerHTML = `Now that you have an item selected, you can begin editing your item's various aspects! Do note that some items especially in earlier versions of Team Fortress 2 may or may not have item levels and, therefore, the item's level will not be able to be defined by you. That's okay! The file will still generate properly!`
			
			pos = info.getBoundingClientRect();
			
			help.style.top = (pos.top) + 'px';
			help.style.left = (pos.left - help.clientWidth - 10) + 'px';
			
			break;
		case 8:
			if(select == ''){
				for(i = 1; i < bp.length; i++){
					if(bp[i][0] != -1){
						select = document.getElementById(i.toString());
						select.classList.add("tdSel");
						selectId = parseInt(select.id, 10);
						setSelect();
						updateInfo();
					}
				}
				if(select == ''){
					select = document.getElementById('1');
					select.classList.add("tdSel");
					selectId = parseInt(select.id, 10);
					setItem(35);
					setSelect();
					updateInfo();
				}
			}
			
			on(drop2);
			
			help.children[0].innerHTML = `Qualities`;
			help.children[1].innerHTML = `Want your item to be of a different quality? Select the Qualities dropdown box and find the quality you want! All of the possible Unusual effects listed in the items_game.txt should be possible! Do note that additional attributes such as strange kill tracking and Valve items will <strong>NOT</strong> function as the defined "Valve Weapons" as it will not have the overpowered attributes. However, you are more than welcome to still add these attributes for your own sake anyway and they will display properly!</br>Note: If you are using a version of the game before items_game.txt (noted by the presence of .ctx files which MUST be decompiled using Vice), then Qualities will simply not appear. Everything should still work properly, however!`
			
			pos = drop2.getBoundingClientRect();
			
			help.style.top = (pos.top) + 'px';
			help.style.left = (pos.left - help.clientWidth - 20) + 'px';
			
			break;
		case 9:
			if(select == ''){
				for(i = 1; i < bp.length; i++){
					if(bp[i][0] != -1){
						select = document.getElementById(i.toString());
						select.classList.add("tdSel");
						selectId = parseInt(select.id, 10);
						setSelect();
						updateInfo();
					}
				}
				if(select == ''){
					select = document.getElementById('1');
					select.classList.add("tdSel");
					selectId = parseInt(select.id, 10);
					setItem(35);
					setSelect();
					updateInfo();
				}
			}
			
			help.children[0].innerHTML = `Renaming Items`;
			help.children[1].innerHTML = `If you want to rename your item, hit the button with the pencil next to the name and type in your own name there! Note that while many of the Steam emulators do support renaming, they tend to only support them within the purview of the game itself and NOT within the file. In these cases, use a Name Tag! The tool will warn you about this when you use it, and will add one to your inventory if you tell it you want that! However, if you deny the name tag, the warning will not reappear.`
			
			pos = info.getBoundingClientRect();
			
			help.style.top = (pos.top) + 'px';
			help.style.left = (pos.left - help.clientWidth - 10) + 'px';
			
			off(drop2);
			off(drop1);
			break;
		case 10:
			deselect(true);
			off(info);
			
			help.children[0].innerHTML = `Presets and Importing Files`;
			help.children[1].innerHTML = `If you've already used the tool (or are wanting to edit one of the files packaged with your version of RevEmu), you can always import your file using the Import button! If you don't already have a file, you can always use one of the presets built into the tool from the upper right-hand corner!</br></br><strong style="color: #b74936">WARNING: USING THIS FEATURE WILL DELETE YOUR CURRENT PROGRESS! MAKE SURE TO SAVE YOUR BACKPACK IF YOU WANT TO KEEP IT!</strong>`
			
			pos = drop1.getBoundingClientRect();
			
			help.style.top = pos.top + 'px';
			help.style.left = pos.left - help.clientWidth - 20 + 'px';
			
			on(drop1);
			off(genOptions);
			break;
		case 11:
			help.children[0].innerHTML = `Exporting Your File`
			help.children[1].innerHTML = `Finished editing your backpack? Great! It's time to generate your file! By selecting the Generate Items File button at the bottom of the screen, you will be met with a screen with options for each of the supported Steam emulators! Mousing over each button will give you more information for what file type is used where, so make sure you select the right generation method for your emulator!`
			
			pos = genOptions.getBoundingClientRect();
			
			help.style.top = pos.top + 20 + 'px';
			help.style.left = pos.right + 20 + 'px';
			
			off(drop1);
			on(genOptions);
			break;
		case 12:
			help.children[0].innerHTML = `Additional Notes`
			help.children[1].innerHTML = `Not all versions are going to be compatible with this tool. As time goes on, this tool may receive updates to add support for more versions of the game, different steam emulators, etc. but there are no guarantees on that. If you'd like to make a request, you can make it directly to Empty Vessel by contacting him on Discord (emptyvessel).`
			on(help.children[2]);
			
			help.style.left = '50%';
			help.style.top = '100px';
			off(genOptions);
			break;
		case 13:
			help.children[0].innerHTML = `Useful Hotkeys`
			help.children[1].innerHTML = `<strong>Ctrl + C</strong>: Copy</br><strong>Ctrl + X</strong>: Cut</br><strong>Ctrl + V</strong>: Paste</br><strong>Del</strong>: Delete</br><strong>Ctrl + A</strong>: Select All</br><strong>Tab</strong>: Next Page</br><strong>Shift + Tab</strong>: Prev. Page</br><strong>Shift + Click</strong>: Multiple Select</br><strong>Click and Drag</strong>: Move/Swap Item Slots</br>`
			off(help.children[2]);
			
			help.style.left = '50%';
			help.style.top = '100px';
			break;
		default:
			off(help);
			helpPage = 0;
			break;
	}
}

function checkName(){
	if (!hasRenamed){
		hasError = true;
		warn.innerHTML = '<p><span style="font-size: 40px">Warning</span><br><br><span style="font-family: TF2secondary;">Make sure that your emulator supports item renaming before you add a name to your item. Adding names to your items file can cause problems with item recognition in your Steam emulator.<br><br>Many versions of the Steam emulators this tool utilizes supports renaming with a Name Tag from the backpack itself, but this must be done every time you start the game. Only one Name Tag will be necessary as it will not be consumed upon usage.</span><br><br>Would you like to add a name tag to your backpack instead?</p><button OnClick="addNameTag()">Yes</button><button OnClick="tagWarnOff();">No</button>'
		on(warn);
	}
	else{
		off(iname.parentNode);
		on(custname.parentNode);
	}
}

var time;

function noItemWarning(){
	console.log("yeah");
	on(warn);
	warn.innerHTML = '<p style="font-size: 40px;">You must select an item first!</p>';
	clearTimeout(time);
	time = setTimeout(function() {off(warn)}, 3000);
}

function addNameTag(){
	deselect(true);
	for(i = 1; i < bp.length; i++){
		if(bp[i][0] == -1){
			bp[i][0] = '5020';
			bp[i][1] = items['5020'].max_ilevel;
			if(qualities != '') bp[i][2] = qualities.unique.value;
			else bp[i][2] = 3;
			reloadPage();
			i = bp.length;
		}
	}
	off(warn);
}

function tagWarnOff(){
	hasRenamed = true;
	hasError = false;
	off(warn);
	on(custname.parentNode);
	off(iname.parentNode);
}

function convJson(str) {
	let parsedJSON = `{\n${str}\n}`
	parsedJSON = parsedJSON.replaceAll(/\s*?\/\/.*\s*?/g, '');
	parsedJSON = parsedJSON.replaceAll(/"(.*?)"\s*?"(.*?)"/g, '"$1": "$2"');
	parsedJSON = parsedJSON.replaceAll(/\}\s*?\"/g, '},\n "');
	parsedJSON = parsedJSON.replaceAll(/"(.*?)"\s*?\"(.*?)"/g, '"$1",\n "$2"');
	parsedJSON = parsedJSON.replaceAll(/"(.*?)"\s*?\{/g, '"$1":\n {');
	parsedJSON = parsedJSON.replaceAll(/(.*?)\s\"(.*?)\t(.*?)\"\,/g, '$1\ \"$2\ $3\"\,');
	counter = 0;
	data = JSON.parse(parsedJSON);
	if(data.hasOwnProperty('items_game')){
		items = data.items_game.items;
		if(data.items_game.hasOwnProperty('qualities')) qualities = data.items_game.qualities;
		if(data.items_game.hasOwnProperty('prefabs')) prefabs = data.items_game.prefabs;
		unusual = data.items_game.attribute_controlled_attached_particles;
	}
	else items = data.items;
	off(warn);
	
	const buttons = document.querySelectorAll('button');
	buttons.forEach(button =>{
		if (button.id != "delete") button.disabled = false;
	})
	
	if(qualities != ''){
		setupDrop2();
	}
	else off(document.getElementById('quality'));
	setupDrop3();
	
	clearbp();
	
	if(helpPage == 2){
		updateHelp(1);
	}
	
	if(!items.hasOwnProperty('5020')) off(document.getElementById('inbutton'));
}

function setupGUI(){
	content.innerHTML = '';
	let tbl = document.createElement("table");
	tbl.id = "bpTable";
	for (let i=0; i<=4; i++){
		let row = document.createElement("tr");
			for(let c=1; c<=10; c++){
				let cell = document.createElement("td");
				let n = (i*10) + c;
				cell.id = n.toString();
				cell.setAttribute("onMouseOver", 'stickySet(this)');
				cell.setAttribute("onMouseOut", 'off(sticky)');
				cell.setAttribute("draggable", "true");
				row.append(cell);
				bpTable[(i*10) + c] = cell;
			}
		tbl.append(row);
	}
	content.append(tbl);
}

function clearbp(){
	maxpage = 4;
	bp = bp.slice(0, 200);
	for (let i = 0; i <= 50 * maxpage; i++){
		bp[i] = [-1, -1, -1, -1, -1, -1];
	}
	page = 1;
	maxpage = 4;
	updatePage(0);
	advPreset();
}

function setupDrop2(){
	drop2.innerHTML = '';
	if (qualities == ''){
		drop2.innerHTML = "NO QUALITIES";
		return;
	}
	for (const quality in qualities){
		let button = document.createElement("button");
		if(quality != "rarity4" && quality != "developer"){
			button.setAttribute("onClick", `setQuality(${qualities[quality].value}); off(this.parentNode);`);
			button.setAttribute("onMouseOver", 'setSelected(this, false)');
			button.innerHTML = quality.toString();
		}
		if(quality == "rarity4"){
			button.setAttribute("onMouseOver", 'on(list0); setSelected(this, false);');
			button.setAttribute("onMouseOut", 'off(list0);');
			button.innerHTML = "Unusual &#8203; &#9654;";
		}
		if(quality == "developer"){
			button.setAttribute("onClick", `setQuality(${qualities[quality].value}); off(this.parentNode);`);
			button.setAttribute("onMouseOver", 'setSelected(this, false)');
			button.innerHTML = "Valve";
		}
		button.setAttribute("style", `color: ${setColor(quality)}`);
		drop2.append(button);
	}
	
	if(!qualities.hasOwnProperty('rarity4')) return;
	
	unusList.children[0].setAttribute("onClick", `setUnusual(-1); setQuality(${qualities[`rarity4`].value}); off(this.parentNode); off(drop2);`);
	
	if(unusual.hasOwnProperty('cosmetic_unusual_effects')){
		for (const effect in unusual.other_particles) {
			let button = document.createElement("button");
			button.setAttribute("onClick", `setUnusual(${effect}); setQuality(${qualities[`rarity4`].value}); off(this.parentNode); off(drop2);`);
			button.innerHTML = getUnusual(parseInt(effect, 10));
			unusList.append(button);
		}
		for (const effect in unusual.cosmetic_unusual_effects) {
			let button = document.createElement("button");
			button.setAttribute("onClick", `setUnusual(${effect}); setQuality(${qualities[`rarity4`].value}); off(this.parentNode); off(drop2);`);
			button.innerHTML = getUnusual(parseInt(effect, 10));
			unusList.append(button);
		}
	}
	else{
		for (const effect in unusual) {
			let button = document.createElement("button");
			button.setAttribute("onClick", `setUnusual(${effect}); setQuality(${qualities[`rarity4`].value}); off(this.parentNode); off(drop2);`);
			button.innerHTML = getUnusual(parseInt(effect, 10));
			unusList.append(button);
		}
	}
}

function setUnusual(num){
	curr[3] = num;
	updateSelect();
	updateRecord();
	updateInfo();
}

function setPaintColor(hx){
	curr[4] = hx;
	updateSelect();
	updateRecord();
	updateInfo();
}

function clearName(){
	curr[5] = -1;
	custname.value = '';
	updateRecord();
}

function stickySet(elm){
	if (data == '') return;
	if (bp[parseInt(elm.id, 10) + ((page - 1) * 50)][0] == -1) return;
	let item = bp[parseInt(elm.id, 10) + ((page - 1) * 50)];
	
	let pos = elm.getBoundingClientRect();
	
	let title = '';
	let subtitle = '';
	
	let qual = getQuality(item[2]);
	
	sticky.style.top = pos.bottom + "px";
	sticky.style.left = pos.left - (sticky.clientWidth / 2) + (pos.width / 2) + "px";
	on(sticky);
	
	if (item[5] != -1){
		title = `"${item[5]}"`;
	}
	else{
		if(itemNames.hasOwnProperty(properCase(items[item[0]].item_name)) == false){
			title = items[item[0]].name;
		}
		else title = itemNames[properCase(items[item[0]].item_name)];

		sticky.children[0].setAttribute("style", `color: ${setColor(qual)}`);

		if (qual == "rarity4") qual = "Unusual";
		if (qual == "developer") qual = "Valve";

		if (qual !== "unique" & qual !== "normal"){
			title = `${qual} ${title}`;
		}
	}
	
	subtitle = `Level ${item[1]} `;
	
	try{
			subtitle = subtitle + itemNames[properCase(items[item[0]].item_type_name)];
		}
		catch (error){
			subtitle = subtitle + "Unknown";
	}
	
	if(item[3] != -1){
		subtitle = `${subtitle}<br>Effect: ${getUnusual(item[3])}`;
	}
	
	sticky.children[0].innerHTML = title;
	
	sticky.children[1].innerHTML = subtitle;
}

function setSelected(elm, clr){
	if (elm.nodeType == 3) return;
	if (elm.classList.contains("selectedDrop")) return;
	
	let chld = elm.parentNode.childNodes;
	
	for (let i=0; i < chld.length; i++){
		if(chld[i].nodeName == "BUTTON"){
			if(chld[i].classList.contains("selectedDrop")) chld[i].classList.remove("selectedDrop");
		}
	}
	if (!clr) elm.classList.add("selectedDrop");
	
	tables.forEach(table => {
		table.scrollTo(0, 0);
	})
}

document.addEventListener("dragstart", function(e){
	if (e.target.nodeName == "TD"){
		drag = parseInt(e.target.id, 10) + ((page - 1) * 50);
	}
	deselect(true);
	off(info);
})

document.addEventListener("dragover", function(e){
	if (e.target.nodeName == "TD"){
		off(sticky);
	}
	if (e.clientX > content.getBoundingClientRect().right && dragpage == false){
		dragpage = true;
		dragtimer = setTimeout(function() {dragpage = false}, 1000);
		updatePage(1);
	}
	if (e.clientX < content.getBoundingClientRect().left && dragpage == false){
		dragpage = true;
		dragtimer = setTimeout(function() {dragpage = false}, 1000);
		updatePage(-1);
	}
})

document.addEventListener("dragend", function(e){
	if (e.target.nodeName == "TD" && data != '' && document.elementFromPoint(e.clientX, e.clientY).nodeName == "TD"){
		let pass = parseInt(document.elementFromPoint(e.clientX, e.clientY).id, 10);
		
		pass += ((page - 1) * 50);
		let dest = [bp[pass][0], bp[pass][1], bp[pass][2]];
		let src = [bp[drag][0], bp[drag][1], bp[drag][2]];
		
		bp[pass][0] = src[0];
		bp[pass][1] = src[1];
		bp[pass][2] = src[2];
		
		bp[drag][0] = dest[0];
		bp[drag][1] = dest[1];
		bp[drag][2] = dest[2];
		
		reloadPage();
		drag = '';
	}
})

function setupDrop3(){
	for (let i = 0; i <= 9; i++){
		tables[i].innerHTML = '';
		
		let weps = document.createElement('div');
		let cos = document.createElement('div');
		let act = document.createElement('div');
		let tools = document.createElement('div');
		
		let wepsHead = document.createElement('button');
		let cosHead = document.createElement('button');
		let actHead = document.createElement('button');
		let toolsHead = document.createElement('button');
		
		wepsHead.classList.add('buttonhead');
		cosHead.classList.add('buttonhead');
		actHead.classList.add('buttonhead');
		toolsHead.classList.add('buttonhead');
		
		wepsHead.innerHTML="Weapons";
		cosHead.innerHTML="Cosmetics";
		actHead.innerHTML="Actions";
		toolsHead.innerHTML="Other";
		
		weps.append(wepsHead);
		weps.append(document.createElement('hr'));
		cos.append(cosHead);
		cos.append(document.createElement('hr'));
		act.append(actHead);
		act.append(document.createElement('hr'));
		tools.append(toolsHead);
		tools.append(document.createElement('hr'));
		
		tables[i].append(weps);
		tables[i].append(document.createElement('hr'));
		tables[i].append(cos);
		tables[i].append(document.createElement('hr'));
		tables[i].append(act);
		tables[i].append(document.createElement('hr'));
		tables[i].append(tools);
	}
	
	Object.keys(items).forEach( (item) => {
		if (item <= 30) return;
		
		let itm = JSON.parse(getPrefab(item));
		let button = document.createElement("button");
		button.setAttribute("onClick", `setItem('${item}')`);
		if(itemNames.hasOwnProperty(properCase(itm.item_name)) == false){
			button.innerHTML = itm["name"];
		}
		else button.innerHTML = itemNames[properCase(itm.item_name)];
		parseItem(item, button)
	});
	
	for (let o = 0; o <= 9; o++){
		for (let ch = 0; ch < tables[o].childElementCount; ch++){
			if(tables[o].children[ch].nodeName == "DIV" && tables[o].children[ch].childElementCount < 3){
				tables[o].children[ch].remove();
				tables[o].children[ch].remove();
			}
		}
	}
}

function parseItem(itm, button){
	console.log(itm);
	let item = JSON.parse(getPrefab(itm));
	
//	if(itm.hasOwnProperty('prefab') && !itm.hasOwnProperty('used_by_classes')){
//		let name = itm.prefab;
//		let rep = name.split(' ');
//		rep.forEach((wrd) => {
//			if(wrd.includes('weapon') ||
//			  wrd.includes('tool') ||
//			  wrd.includes('paint_can') ||
//			  wrd.includes('eventkey') ||
//			  wrd.includes('tournament_medal') ||
//			  wrd.includes('powerup_bottle')){
//				name = wrd;
//			}
//		})
//		item = prefabs[name];
//	}
//	else item = itm;
	
	if(item.hasOwnProperty('used_by_classes')){
		if(Object.keys(item.used_by_classes).length > 1){
			if(item.hasOwnProperty('item_class')){
				if(item.item_class.includes('weapon')){
					tables[9].children[0].append(button);
				}
				else if(item.item_class.includes('wearable')){
					if(item.item_slot == 'secondary') tables[i].children[0].append(button);
					else tables[9].children[2].append(button);
				}
				else tables[9].children[6].append(button);
			}
			if(item.hasOwnProperty('prefab')){
				if(item.prefab.includes('taunt')){
					tables[9].children[4].append(button);
				}
			}
		}
		if(Object.keys(item.used_by_classes).length < 9){
			for(let i = 0; i < tables.length; i++){
				if(item.used_by_classes.hasOwnProperty(classes[i])){
					let btn2 = button.cloneNode(true);
					if(item.hasOwnProperty('item_class')){
						if(item.item_class.includes('weapon')){
							tables[i].children[0].append(btn2);
						}
						else if(item.item_class.includes('wearable')){
							if(item.item_slot == 'secondary') tables[i].children[0].append(btn2);
							else tables[i].children[2].append(btn2);
						}
						else tables[i].children[6].append(btn2);
					}
					if(item.hasOwnProperty('prefab')){
						if(item.prefab.includes('taunt')){
							tables[i].children[4].append(btn2);
						}
					}
				}
			}
		}
	}
	else tables[10].append(button);
}

document.addEventListener('click', function(e){
	if(time != '' && data != '' && !hasError){
		clearTimeout(time);
		off(warn);
	}
	if (e.target.id == "info"){
		off(drop1);
		off(drop2);
		off(drop3);
		return;
	}
	if (e.target.id == "infocont"){
		off(drop1);
		off(drop2);
		off(drop3);
		return;
	}
	
	switch (e.target.nodeName){
		case "TD":
			if (data == '') return;
			if (e.shiftKey){
				if (select == '') return;
				if (e.id == select.id) return;
				
				off(info);
				
				let coord1 = [(parseInt(e.target.id, 10) - 1) % 10, Math.floor((parseInt(e.target.id, 10) - 1) / 10)];
				let coord2 = [(parseInt(select.id, 10) - 1) % 10, Math.floor((parseInt(select.id, 10) - 1) / 10)];
				let coordMin = [Math.min(coord1[0], coord2[0]), Math.min(coord1[1], coord2[1])];
				let coordMax = [Math.max(coord1[0], coord2[0]), Math.max(coord1[1], coord2[1])];
				
				deselect(true);
				
				for (let y = 0; y <=4; y++){
					if(y >= coordMin[1] && y <= coordMax[1]){
						for (let x = 0; x <= 9; x++){
							if (x >= coordMin[0] && x <= coordMax[0]){
								bpTable[(y*10)+x + 1].classList.add('tdSel');
							}
						}
					}
				}
				
				return;
			}
			deselect(true);
			select = e.target;
			select.classList.add("tdSel");
			selectId = parseInt(select.id, 10);
			off(drop1);
			off(drop2);
			off(drop3);
			delBtn.disabled = false;
			setSelect();
			updateInfo();
			
			if(helpPage == 3){
				updateHelp(1);
			}
			
			break;
		case "BUTTON":
			switch (e.target.id){
				case "inbutton":
					if(curr[0] == -1){
						noItemWarning();
					}
					else checkName();
					break;
				case "presets":
					toggle(drop1);
					off(drop2);
					off(drop3);
					break;
				case "quality":
					off(drop1);
					off(drop3);
					if(curr[0] == -1){
						noItemWarning();
					}
					else toggle(drop2);
					break;
				case "item":
					off(drop1);
					toggle(drop3);
					off(drop2);
					break;
				case "pagel":
					off(drop1);
					off(drop2);
					off(drop3);
					off(info);
					infoPic.src = "";
					break;
				case "pager":
					off(drop1);
					off(drop2);
					off(drop3);
					off(info);
					infoPic.src = "";
					break;
			}
			break;
		default:
			off(drop1);
			off(drop2);
			off(drop3);
			if (info.contains(e.target)) break;
			if (search.contains(e.target)) break;
			deselect(true);
			off(info);
			infoPic.src = "";
			delBtn.disabled = true;
			break;
	}
})

function setItem(num){
	curr = [-1, -1, -1, -1, -1, -1];
	off(drop1);
	off(drop2);
	off(drop3);
	off(sticky);
	off(info);
	infoPic.src = "";
	
	curr[0] = num;
	if(qualities != ''){
		if(items[num].hasOwnProperty('item_quality')) curr[2] = parseInt(qualities[items[num].item_quality].value, 10);
		else curr[2] = parseInt(qualities.unique.value, 10);
	}
	
	if(!items[curr[0]].hasOwnProperty("max_ilevel")){
		ilevel.disabled = true;
		curr[1] = 0;
	}
	else curr[1] = parseInt(items[num].max_ilevel, 10);
	
	for(let i = 0; i < tables.length; i++){
		off(tables[i]);
	}
	
	if(helpPage == 5) updateHelp(1);
	
	ilevel.disabled = false;
	updateInfo();
	updateSelect();
	updateRecord();
}

function setSelect(){
	if (bp[selectId + pageIndex][0] > -1){
		curr[0] = bp[selectId + pageIndex][0];
		curr[1] = bp[selectId + pageIndex][1];
		curr[2] = bp[selectId + pageIndex][2];
		curr[3] = bp[selectId + pageIndex][3];
		curr[4] = bp[selectId + pageIndex][4];
		curr[5] = bp[selectId + pageIndex][5];
	}
	else{
		curr[0] = -1;
		curr[1] = -1;
		curr[2] = -1;
		curr[3] = -1;
		curr[4] = -1;
		curr[5] = -1;
	}
	updateInfo();
}

ilevel.addEventListener('input', function(e){
	if(curr[0] < 0) return;
	if(!items[curr[0]].hasOwnProperty("max_ilevel")){
		ilevel.value = "";
		ilevel.disabled = true;
		curr[1] = 0;
		return;
	}
	let max = parseInt(items[curr[0]].max_ilevel, 10);
	let min = parseInt(items[curr[0]].min_ilevel, 10);
	
	if(ilevel.value > max){
		ilevel.value = max;
	}
	if(ilevel.value < min){
		ilevel.value = min;
	}
	curr[1] = ilevel.value;
	updateRecord();
	updateInfo();
})

function updateRecord(){
	bp[selectId + pageIndex][0] = curr[0];
	bp[selectId + pageIndex][1] = curr[1];
	bp[selectId + pageIndex][2] = curr[2];
	
	bp[selectId + pageIndex][3] = curr[3];
	bp[selectId + pageIndex][4] = curr[4];
	bp[selectId + pageIndex][5] = curr[5];
}

function updateSelect(){
	if(curr[0] > -1){
		let itm = curr[0];
		itm = JSON.parse(getPrefab(itm));
		
		if(!itm.hasOwnProperty("image_inventory")){
			select.setAttribute("style", 'background-image: url(backpack/weapons/Unknownweapon.png)');
		}
		else{
			if (itm.image_inventory != ""){
				select.setAttribute("style", `background-image: url(${itm.image_inventory.toString()}.png)`);
			}
			else select.setAttribute("style", 'background-image: url(backpack/weapons/Unknownweapon.png)');
		}
	}
	else{
		select.setAttribute("style", '');
	}
}

function getPrefab(itm){
	let newItm = items[itm];
	if(items[itm].hasOwnProperty('prefab')){
		let rep = items[itm].prefab.split(' ');
		rep.forEach((wrd) => {
			let pfb = Object.assign({}, prefabs[wrd]);
			console.log(pfb);
			Object.keys(pfb).forEach((key) =>{
				console.log(key);
				if(newItm.hasOwnProperty(key)){
					delete pfb[key];
				}
			})
			newItm = Object.assign(newItm, pfb);
		})
	}
	return JSON.stringify(newItm);
}

function updateInfo(){
	if(curr[0] > -1){
		let itm = curr[0];
		itm = JSON.parse(getPrefab(itm));
		ilevel.disabled = false;
		try{
			if(!itm.hasOwnProperty("image_inventory")){
				infoPic.src = 'backpack/weapons/Unknownweapon_large.png';
			}
			else{
				if (itm.image_inventory != ""){
					infoPic.src = `${itm.image_inventory.toString()}_large.png`;
				}
				else infoPic.src = 'backpack/weapons/Unknownweapon_large.png';
			}
		}
		catch (error){
			infoPic.src = 'backpack/weapons/Unknownweapon_large.png';
		}
		
		try{
			type.innerHTML = itemNames[properCase(itm.item_type_name)];
		}
		catch (error){
			type.innerHTML = "Unknown Item Type";
		}
		
		let qual = getQuality(curr[2]);
		inameCont.setAttribute("style", `color: ${setColor(qual)}`);
		
		if (qual == "rarity4") qual = "Unusual";
		if (qual == "developer") qual = "Valve";
		
		if(itemNames.hasOwnProperty(properCase(itm.item_name)) == false){
			iname.innerHTML = itm["name"];
		}
		else iname.innerHTML = itemNames[properCase(itm.item_name)];
		
		if (qual !== "unique" & qual !== "normal"){
			iname.innerHTML = `${qual} ${iname.innerHTML}`;
		}
		
		if(curr[1] <= 0){
			ilevel.value = "";
			ilevel.disabled = true;
		}
		else ilevel.value = curr[1];
		
		if(curr[3] > 0){
			effect.classList.remove("invisible");
			effect.innerHTML = `Effect: ${getUnusual(curr[3])}`;
		}
		else off(effect);
		
		if(items[curr[0]].hasOwnProperty("capabilities")){
			if(items[curr[0]].capabilities.hasOwnProperty("paintable")){
				on(paintable);
			}
			else{
				off(paintable);
				paintable.removeAttribute('style');
			}
		}
		else{
			off(paintable);
			paintable.removeAttribute('style');
		}
		
		if(curr[4] != -1){
			paintable.setAttribute('style', `background-color: #${getHexColor(curr[4])}`);
		}
		else{
			paintable.removeAttribute('style');
		}
		
		if(curr[5] != -1){
			off(iname.parentNode);
			on(custname.parentNode);
			custname.value = curr[5];
		}
		else{
			off(custname.parentNode);
			on(iname.parentNode);
			clearName();
		}
		
	}
	else
	{
		infoPic.src= "backpack/weapons/Unknownweapon_large.png";
		type.innerHTML = "Item";
		iname.innerHTML = "No Item Selected";
		inameCont.setAttribute("style", "");
		ilevel.disabled = true;
		effect.innerHTML = "Effect: No Effect";
		paintable.removeAttribute('style');
		off(paintable);
		off(custname.parentNode);
		on(iname.parentNode);
		clearName();
	}
	
	on(info);
}

function properCase(str){
	if(String(str).charAt(0) == "#"){
		return String(str).slice(1);
	}
	else return str;
}

function setQuality(num){
	curr[2] = num;
	if(num != 5) curr[3] = -1;
	updateRecord();
	updateInfo();
	if(helpPage == 8) updateHelp(1);
}

function getQuality(num){
	if (qualities == '') return "unique";
	for(const key in qualities){
		if (qualities[key].value == num) return key;
	}
}

function deleteItem(){
	curr = [-1, -1, -1, -1, -1, -1];
	bpTable.forEach((cell) =>{
		if(cell.classList.contains("tdSel")){
			bp[parseInt(cell.id, 10) + ((page - 1) * 50)] = [-1, -1, -1, -1, -1, -1];
		}
	})
	delBtn.disabled = true;
	updateInfo();
	reloadPage();
	deselect(true);
	off(info);
	infoPic.src = "";
	off(drop1);
	off(drop2);
	off(drop3);
	off(sticky);
}

function advPreset(){
	if(helpPage == 10) updateHelp(1);
}

function allItems(){
	deselect(false);
	off(info);
	off(sticky);
	off(drop1);
	infoPic.src = "";
	
	clearbp();
	let keys = Object.keys(items);
	let index = 1;
	keys.forEach(key => {
		if(parseInt(key, 10) >=35){
			if (index >= bp.length) updateMaxPages(1);
			bp[index][0] = key;
			if(qualities != '') bp[index][2] = qualities.unique.value;
			else bp[index][2] = 3;

			if(!items[key].hasOwnProperty("max_ilevel")){
				bp[index][1] = 0;
			}
			else bp[index][1] = items[key].max_ilevel;
			index++;
		}
	})
	maxpage = Math.ceil(index / 50);
	reloadPage();
	advPreset();
}

function allAccessible(all){
	deselect(false);
	off(info);
	off(sticky);
	off(drop1);
	infoPic.src = "";
	
	clearbp();
	let keys = Object.keys(items);
	let index = 1;
	keys.forEach(key => {
		if((items[key].hasOwnProperty("item_slot") || items[key].hasOwnProperty("drop_sound") || items[key].hasOwnProperty("drop_type")) && items[key].hidden != 1 && parseInt(key, 10) >= 35){
			if (index >= bp.length) updateMaxPages(1);
		   	if(!all && (parseInt(key,10) >= 190 && parseInt(key, 10) <= 212)){
				return;
			}
			bp[index][0] = key;
			if (qualities != '') bp[index][2] = qualities.unique.value;
			else bp[index][2] = 3;

			if(!items[key].hasOwnProperty("max_ilevel")){
				bp[index][1] = 0;
			}
			else bp[index][1] = items[key].max_ilevel;
			index++;
		}
	})
	reloadPage();
}
function allWeapons(all){
	deselect(false);
	off(info);
	off(sticky);
	off(drop1);
	infoPic.src = "";
	
	clearbp();
	let keys = Object.keys(items);
	let index = 1;
	keys.forEach(key => {
		if(items[key].craft_class == "weapon"){
			if (index >= bp.length) updateMaxPages(1);
			if(!all && ((parseInt(key,10) >= 190 && parseInt(key, 10) <= 212) || parseInt(key, 10) < 35)){
				return;
			}
			bp[index][0] = key;
			if (qualities != '') bp[index][2] = qualities.unique.value;
			else bp[index][2] = 3;
			
			if(!items[key].hasOwnProperty("max_ilevel")){
				bp[index][1] = 0;
			}
			else bp[index][1] = items[key].max_ilevel;
			index++;
	   	}
	})
	reloadPage();
	advPreset();
}
function allHats(){
	deselect(false);
	off(info);
	off(sticky);
	off(drop1);
	infoPic.src = "";
	
	clearbp();
	let keys = Object.keys(items);
	index = 1;
	keys.forEach(key => {
		if(items[key].item_class == "tf_wearable" && items[key].hidden != 1){
			if (index >= bp.length) updateMaxPages(1);
		   	bp[index][0] = key;
			if (qualities != '') bp[index][2] = qualities.unique.value;
			else bp[index][2] = 3;
			
			if(!items[key].hasOwnProperty("max_ilevel")){
				bp[index][1] = 0;
			}
			else bp[index][1] = items[key].max_ilevel;
			index++;
		   }
	})
	reloadPage();
	advPreset();
}

function allWepsHats(){
	deselect(false);
	off(info);
	off(sticky);
	off(drop1);
	infoPic.src = "";
	
	clearbp();
	let keys = Object.keys(items);
	index = 1;
	keys.forEach(key => {
		if(items[key].item_class == "tf_wearable" && items[key].hidden != 1){
			if (index >= bp.length) updateMaxPages(1);
		   	bp[index][0] = key;
			bp[index][2] = qualities.unique.value;

			if(!items[key].hasOwnProperty("max_ilevel")){
				bp[index][1] = 0;
			}
			else bp[index][1] = items[key].max_ilevel;
			index++;
		   }
	})
	reloadPage();
	advPreset();
}

function deselect(all){
	curr[0] = -1;
	curr[1] = -1;
	curr[2] = -1;
	if (select != ''){
		if(!all){
			if (select.classList.contains("tdSel")) select.classList.remove("tdSel");
			select = '';
		}
		else{
			bpTable.forEach((cell) => {
				cell.classList.remove("tdSel");
			})
			select = '';
		}
	}
}

function updateMaxPages(num){
	maxpage += num;
	if (maxpage < 1){
		maxpage = 1;
	}
	if (num > 0){
		for(i = 0; i < 50 * num; i++){
			bp.push([-1, -1, -1, -1, -1, -1]);
		}
	}
	if (num < 0){
		bp = bp.slice(0, -50);
	}
	updatePage(0);
}

function updatePage(num){
	page = page+num;
	if (page < 1){
		page = maxpage;
	}
	if (page > maxpage){
		page = 1
	}
	pageno.innerHTML = `${page}/${maxpage}`;
	deselect(true);
	reloadPage();
}

function reloadPage(){
	pageIndex = (page - 1) * 50;
	for (i = 1; i <= 50; i++){
		let cell = document.getElementById(i.toString());
		let index = bp[i + pageIndex];
		if (index[0] != -1){
			
			if(!items[index[0]].hasOwnProperty("image_inventory")){
			   	cell.setAttribute("style", 'background-image: url(backpack/weapons/Unknownweapon.png)');
			}
			else{
				if (items[index[0]].image_inventory != ""){
					cell.setAttribute("style", `background-image: url(${items[index[0]].image_inventory.toString()}.png)`);
				}
				else cell.setAttribute("style", 'background-image: url(backpack/weapons/Unknownweapon.png)');
			}
		}
		else cell.setAttribute("style", 'background-image: none');
	}
}

function pageTurn(num){
	page = page + num;
	reloadPage();
}

function zero(num){
	for (let i=0; i<num; i++){
		gen[mark] = 0;
		mark++;
	}
}

function toggle(tog){
	if(tog.classList.contains("invisible")){
		on(tog);
	}
	else off(tog);
}

function on(tog){
	tog.classList.remove("invisible");
}
function off(tog){
	tog.classList.add("invisible");
}

function details(num){
	switch (num)
	{
		case 0:
			detailInfo.innerHTML = 'Mouse over a button for more details.';
			break;
		case 1:
			detailInfo.innerHTML = 'For older versions of RevEmu and most versions of RevLoader usable on copies of TF2 before 2011.';
			break;
		case 2:
			detailInfo.innerHTML = 'For newer versions of RevEmu usable on copies of TF2 after 2011.';
			break;
		case 4:
			detailInfo.innerHTML = 'For SmartSteamEmu.<br><span style="color: #b74936">Warning: Not fully implemented.<br>May not work on your version.</span>';
			break;
	}
}

window.onerror = function(message, source, lineno, colno, error){
	hasError = true;
	let src = '';
	if (source.includes("html")){
		src = "UI";
	}
	if (source.includes("js")){
		src = "Script";
	}
	warn.innerHTML = `<h2>Warning</h2><p style="font-family: TF2secondary">An error has occurred</br></br>${message}</br>Occurred at: ${src}, line ${lineno}, column ${colno}.</br>Please contact emptyvessel on Discord with a screenshot of this error.</br></br>While refreshing the page is advised, the tool may still continue to function.<br>Continue use at your own risk.</p><button OnClick="off(warn); hasError = false;">Close</button>`;
	on(warn);
}

function appGen(p){
	gen[mark] = p;
	mark++;
}

function bigInt(num, left){
	let n = Number(num).toString(16);
	if(n.length % 2 !== 0){
		n = "0"+n;
	}
	n = n.match(/.{1,2}/g);
	
	if (left){
		appGen(parseInt(n[1], 16));
		appGen(parseInt(n[0], 16));
	}
	else{
		appGen(parseInt(n[0], 16));
		appGen(parseInt(n[1], 16));
	}
}

function genSch(num){
	let itm = bp[num];
	if(parseInt(itm[0], 10) > 255){
		bigInt(itm[0], true);
		zero(2);
	}
	else {
		appGen(itm[0]);
		zero(3);
	}
	appGen(parseInt(itm[1], 10));
	zero(3);
	appGen(parseInt(itm[2], 10));
	zero(3);
	if(num > 255){
		bigInt(num, true);
	}
	else {
		appGen(num, true);
		zero(1);
	}
	zero(1);
	appGen(128);
	appGen(1);
	zero(3);
}

function getUnus32(num){
	const bfr = new ArrayBuffer(4);
	const vw = new DataView(bfr);
	vw.setFloat32(0, num, true);
	const out = vw.getUint32(0, false);
	return out;
}

function genAttr(num, old){
	let attr = 0;
	let itm = bp[num];
	if(itm[3] != -1){
		attr++;
	}
	if(itm[4] != -1){
		attr++;
	}
	if(itm[5] != -1){
		attr += itm[5].length + 1;
	}
	
	if(old){
		appGen(attr);
		zero(3);
	}
		
	else{
		zero(2);
		appGen(attr);
		zero(6);
	}

	if(itm[3] != -1){
		appGen(134);
		zero(5);
		bigInt(getUnus32(itm[3], false));
	}
	if(itm[4] != -1){
		appGen(142);
		zero(3);
		let hex = [itm[4].substring(0, 2), itm[4].substring(2, 4), itm[4].substring(4, 6), itm[4].substring(6, 8)];
		let color = [parseInt(hex[0], 16), parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];

		appGen(color[0]);
		appGen(color[1]);
		appGen(color[2]);
		appGen(color[3]);
	}

	if(itm[5] != -1){
		let up = itm[5].toUpperCase();
		for(let o = 0; o < up.length; o++){
			let char = up.charCodeAt(o);
			appGen(char);
		}
		zero(1);
	}
}

function rev(old){
	gen = [];
	mark = 0;
	
	if(old){
		appGen(1);
		zero(3);
	}
	else{
		let starter = "REVITMDB";
		for(s = 0; s < starter.length; s++){
			let schar = starter.charCodeAt(s);
			appGen(schar);
		}
		appGen(2);
		zero(5);
	}
	for(let i = 1; i < bp.length; i++){
		if(bp[i][0] != -1){
			genSch(i);
			genAttr(i, old);
		}
	}
	generateFile("items_440.bin");
}

function sse(){
	gen = [];
	mark = 0;
	
	let starter = "SSEItem";
	for(s = 0; s < starter.length; s++){
		let schar = starter.charCodeAt(s);
		appGen(schar);
	}
	zero(1);
	
	let length = 0;
	let lengthBmrk = mark;
	mark+=4;
	
	let bi = false;
	let tri = 0;
	
	for(let i = 1; i < bp.length; i++){
		if(bp[i][0] != -1){
			length++;
			
			appGen(1);
			zero(3);
			
			let bmrk = mark;
			mark++;
			
			zero(3);
			appGen(8);
			zero(1);
			appGen(24);
			
			if(i > 255){
				bigInt(i, true);
			}
			else {
				appGen(i);
			}
			appGen(32);
			
			if(parseInt(bp[i], 10) > 255){
				bigInt(parseInt(bp[i][0], 10), true);
			}
			else {
				appGen(parseInt(bp[i][0], 10));
			}
			
			appGen(40);
			appGen(01);
			appGen(48);
			
			appGen(parseInt(bp[i][1], 10));
			appGen(56);
			appGen(parseInt(bp[i][2], 10));
			appGen(64);
			zero(1);
			appGen(72);
			zero(1);
			
			let attrBmrk = 0;
			
			if (bp[i][3] != -1){
				appGen(98);
				
				attrBmrk = mark;
				mark++;
				
				appGen(8);
				appGen(134);
				appGen(26);
				appGen(5);
				
				bigInt(getUnus32(bp[i][3]), false);
				
				appGen(21);
				gen[attrBmrk] = mark - attrBmrk;
			}
			if (bp[i][4] != -1){
				appGen(98);
				
				attrBmrk = mark;
				mark++;
				
				appGen(8);
				appGen(); // Attribute
				appGen(26);
				appGen(5);
				
				let hex = [itm[4].substring(0, 2), itm[4].substring(2, 4), itm[4].substring(4, 6), itm[4].substring(6, 8)];
				let color = [parseInt(hex[0], 16), parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];

				appGen(color[0]);
				appGen(color[1]);
				appGen(color[2]);
				appGen(color[3]);
				
				appGen(21);
				gen[attrBmrk] = mark - attrBmrk;
			}
			if (bp[i][5] != -1){
				appGen(98);
				
				attrBmrk = mark;
				mark++;
				
				appGen(8);
				appGen(); // Attribute
				appGen(26);
				appGen(5);
				
				let up = itm[5].toUpperCase();
				for(let o = 0; o < up.length; o++){
					let char = up.charCodeAt(o);
					appGen(char);
				}
				zero(1);
				
				appGen(21);
				gen[attrBmrk] = mark - attrBmrk;
			}
			
			appGen(152);
			appGen(1);
			zero(1);
			gen[bmrk] = mark - bmrk - 4;
		}
	}
	mark=lengthBmrk;
	appGen(length);
	zero(3);
	generateFile("items.bin")
}

function generateFile(name){
	let genFile = new Uint8Array(gen.length);
	for (let i = 0; i < gen.length; i++){
		genFile[i] = gen[i];
	}
	downloadBlob(genFile, name, "application/octet-stream");
}

var downloadBlob, downloadURL;

downloadBlob = function(data, fileName, mimeType) {
	var blob, url;
	blob = new Blob([data], {
		type: mimeType
	});
	url = window.URL.createObjectURL(blob);
	downloadURL(url, fileName);
	setTimeout(function() {
		return window.URL.revokeObjectURL(url);
	}, 1000);
};

downloadURL = function(data, fileName) {
	var a;
	a = document.createElement('a');
	a.href = data;
	a.download = fileName;
	document.body.appendChild(a);
	a.style = 'display: none';
	a.click();
	a.remove();
};