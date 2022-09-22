onEvent('recipes',(event) => {

global.metals.forEach((metal) => {
  // Ore Processing

  // Raw Ore -> Withering Ore (Wither Rose + Exp)
  event.custom({
		"type": "lychee:item_inside",
		"item_in":[
			{"item":`kubejs:raw_${metal.name}`},
		],
		"block_in":{
			"blocks":["architects_palette:lit_withered_osseous_skull"]
		},
    "post":
    [{
			"type":"drop_item",
			"item":`kubejs:withering_${metal.name}`,
			"count": 1
		},
    {
			"type":"drop_item",
			"item":`kubejs:withering_${metal.secondary}`,
			"count": 1
		},
		{
			"type":"place",
			"block":"architects_palette:withered_osseous_skull"
		}]
	});


  // Impure -> Dusts and Fragments (Centrifuge)
  event.custom({
    "type": "thermal:centrifuge",
    "ingredient": {
      "item": `kubejs:impure_dust_${metal.name}`
    },"result": [
      {
        "item": `kubejs:fragment_${metal.name}`,
        "count": 1
      },
      {
        "item": `kubejs:dust_${metal.name}`,
        "count": 1,
        "chance": 0.75
      },
      {
        "item": `kubejs:dust_${metal.secondary}`,
        "count": 1,
        "chance": 0.5
      }
    ],
    "energy": 1600
  })

  // Dirty Dusts in Bottler
  event.custom({
    "type": "thermal:bottler",
  "ingredients": [
    {"item": `kubejs:dirty_dust_${metal.name}`},
    {"fluid": "minecraft:water","amount": 250}
  ],"result": [
    {"item": `kubejs:impure_dust_${metal.name}`, "count": 1}
  ]})

  event.custom({
    "type": "thermal:bottler",
  "ingredients": [
    {"item": `kubejs:dirty_dust_${metal.name}`},
    {"fluid": "tconstruct:liquid_soul","amount": 20}
  ],"result": [
    {"item": `kubejs:haunted_${metal.name}`, "count": 1}
  ]})

  event.custom({
    "type": "thermal:bottler",
  "ingredients": [
    {"item": `kubejs:dirty_dust_${metal.name}`},
    {"fluid": "assemblylinemachines:condensed_void","amount": 10}
  ],"result": [
    {"item": `kubejs:impure_dust_${metal.name}`, "count": 8}
  ]})

  event.custom({
    "type": "thermal:bottler",
  "ingredients": [
    {"item": `kubejs:dirty_dust_${metal.name}`},
    {"fluid": "pneumaticcraft:etching_acid","amount": 40}
  ],"result": [
    {"item": `kubejs:impure_dust_${metal.name}`, "count": 4}
  ]})

  event.custom({
    "type": "thermal:bottler",
  "ingredients": [
    {"item": `kubejs:dirty_dust_${metal.name}`},
    {"fluid": "immersiveengineering:redstone_acid","amount": 80}
  ],"result": [
    {"item": `kubejs:impure_dust_${metal.secondary}`, "count": 4}
  ]})

  // Furnace Smelting
  event.smelting(`3x kubejs:nugget_${metal.name}`,`kubejs:raw_${metal.name}`)
  event.smelting(`6x kubejs:nugget_${metal.name}`,`kubejs:dust_${metal.name}`)
  event.smelting(`3x kubejs:nugget_${metal.name}`,`kubejs:dirty_dust_${metal.name}`)
  event.smelting(`4x kubejs:nugget_${metal.name}`,`kubejs:impure_dust_${metal.name}`)

  // Haunted -> Suffused / Hex ash (Mana pool)
  event.recipes.botania.mana_infusion(
    `kubejs:suffused_${metal.name}`,
    `kubejs:haunted_${metal.name}`,
    4000,
    "malum:block_of_hex_ash"
    );

  // Raw -> Haunted + Secondary Dirty Dust / Soul Fire -> Ash (Soul Fire)
  event.custom({
		"type": "lychee:item_inside",
		"item_in":[
			{"item":`kubejs:raw_${metal.name}`},
		],
		"block_in":{
			"blocks":["minecraft:soul_fire"]
		},
    "post":
    [{
			"type":"drop_item",
			"item":`kubejs:haunted_${metal.name}`,
			"count": 2
		},
    {
			"type":"drop_item",
			"item":`kubejs:dirty_dust_${metal.secondary}`,
			"count": 1
		},
		{
			"type":"place",
			"block":"supplementaries:ash"
		}]
	});

  // Raw Block -> Haunted + Secondary Dirty Dust / Soul Fire -> Ash (Soul Fire)
  event.custom({
		"type": "lychee:item_inside",
		"item_in":[
			{"item":`kubejs:block_raw_${metal.name}`},
		],
		"block_in":{
			"blocks":["minecraft:soul_fire"]
		},
    "post":
    [{
			"type":"drop_item",
			"item":`kubejs:haunted_${metal.name}`,
			"count": 20
		},
    {
			"type":"drop_item",
			"item":`kubejs:dirty_dust_${metal.secondary}`,
			"count": 10
		},
		{
			"type":"place",
			"block":"supplementaries:ash"
		}]
	})

  // Suffused -> Levigated (Natural Altar)
  event.custom({
    "type":"naturesaura:altar",
    "input":{"item":`kubejs:suffused_${metal.name}`},
    "output":{"item":`kubejs:levigated_${metal.name}`,
    "count": 2},"aura_type":
    "naturesaura:overworld","catalyst":
    {"item": "malum:block_of_hex_ash"},
    "aura": 2000,"time": 20
  })

  // raw -> Dirty Dust (Pulverizer)
  event.custom({
    "type":"thermal:pulverizer",
    "ingredient":{"item":`kubejs:raw_${metal.name}`},
    "result":[
      {"item":`kubejs:dirty_dust_${metal.name}`, "chance": 1.5},
      {"item":`kubejs:dirty_dust_${metal.secondary}`,"chance": 0.5},
      {"item":"minecraft:flint","chance": 0.2}],
      "experience": 0.5
    })

    event.custom({
      "type":"thermal:pulverizer",
      "ingredient":{"item":`kubejs:block_raw_${metal.name}`},
      "result":[
        {"item":`kubejs:dirty_dust_${metal.name}`, "count": 20, "chance": 1.5},
        {"item":`kubejs:dirty_dust_${metal.secondary}`, "count": 20, "chance": 0.5},
        {"item":"minecraft:flint", "count": 20, "chance": 0.2}],
        "experience": 0.5
      })

  // Levigated -> Fulminated (TNT)
  event.custom({
		"type":"lychee:item_exploding",
		"item_in":[
			{
				"item":`kubejs:levigated_${metal.name}`,
			},
      {
				"item":`kubejs:levigated_${metal.name}`,
			},
      {
				"item":`kubejs:levigated_${metal.name}`,
			},
      {
				"item":`kubejs:levigated_${metal.name}`,
			},
      {
				"item":`botania:rune_winter`,
			},
		],
		"post": [
			{
				"type":"drop_item",
				"item":`kubejs:fulminated_${metal.name}`,
				"count": 6
			}]
	})


  // Fulminated -> Crystal + Secondary Crystal (Create Crushing)
  event.recipes.createCrushing([
    `4x kubejs:crystal_${metal.name}`,
    Item.of(`3x kubejs:crystal_${metal.name}`).withChance(0.75),
    Item.of(`2x kubejs:crystal_${metal.secondary}`).withChance(0.5),
  ],`kubejs:fulminated_${metal.name}`)

  // Material Processing

  // Nuggets Packing
  event.recipes.thermal.press(`kubejs:ingot_${metal.name}`,[`9x kubejs:nugget_${metal.name}`,"thermal:press_packing_3x3_die"]);
  event.recipes.immersiveengineeringMetalPress(`7x kubejs:ingot_${metal.name}`,`63x kubejs:nugget_${metal.name}`,"thermal:press_packing_3x3_die");
  event.custom({"type":"assemblylinemachines:pneumatic","input":{"item":`kubejs:nugget_${metal.name}`,"count":9},"output":{"item":`kubejs:ingot_${metal.name}`},"time": 9,"moldItem":"thermal:press_packing_3x3_die"});
  // Gears
  event.shaped(`1x kubejs:gear_${metal.name}`,['ABA','BCB','ABA'],{A:'minecraft:air',B:`kubejs:plate_${metal.name}`,C:`kubejs:rod_${metal.name}`});
  event.recipes.thermal.press(`kubejs:gear_${metal.name}`,[`4x kubejs:ingot_${metal.name}`,"thermal:press_gear_die"]);
  event.recipes.immersiveengineeringMetalPress(`8x kubejs:gear_${metal.name}`,`32x kubejs:ingot_${metal.name}`,"thermal:press_gear_die");
  event.custom({"type": "assemblylinemachines:pneumatic","input": {"item": `kubejs:ingot_${metal.name}`,"count": 4},"output": {"item": `kubejs:gear_${metal.name}`},"time": 9,"moldItem": "thermal:press_gear_die"});
  // Blocks Packing
  event.recipes.thermal.press(`kubejs:block_${metal.name}`,[`9x kubejs:ingot_${metal.name}`,"thermal:press_packing_3x3_die"]);
  event.recipes.immersiveengineeringMetalPress(`7x kubejs:block_${metal.name}`,`63x kubejs:ingot_${metal.name}`,"thermal:press_packing_3x3_die");
  event.custom({"type":"assemblylinemachines:pneumatic","input":{"item":`kubejs:ingot_${metal.name}`,"count":9},"output":{"item":`kubejs:block_${metal.name}`},"time": 9,"moldItem":"thermal:press_packing_3x3_die"});
  event.custom({"type":"tconstruct:casting_basin","fluid": {"fluid":`kubejs:molten_${metal.name}`,"amount":810},"result":{"item":`kubejs:block_${metal.name}`},"cooling_time":177});
  //event.custom({"type": "thermal:chiller","ingredients": [{"fluid": `kubejs:molten_${metal.name}`,"amount": 810},{"item": "tconstruct:seared_basin"}],"result": [{"item": `kubejs:block_${metal.name}`,"count": 1}],"energy": 4800});
  event.custom({"type": "assemblylinemachines:pneumatic","input": {"item": `kubejs:ingot_${metal.name}`,"count": 9},"output": {"item": `kubejs:block_${metal.name}`},"time": 9,"moldItem": "thermal:press_packing_3x3_die"});
global.metalsMaterials.forEach((metalMaterial) => {
global.metalsProcessing.forEach((metalProcessing) => {
  // Fluids
  //event.recipes.thermal.crucible(Fluid.of(`kubejs:molten_${metal.name}`,`${metalMaterial.fluidAmount}`),`kubejs:${metalMaterial.name}_${metal.name}`);
  //event.recipes.thermal.crucible(Fluid.of(`kubejs:molten_${metal.name}`,`${metalProcessing.fluidAmount}`),`kubejs:${metalProcessing.name}_${metal.name}`);
})})});

})