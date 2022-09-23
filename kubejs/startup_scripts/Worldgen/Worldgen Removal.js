onEvent('worldgen.remove', (event) => {
    event.removeOres((ores) => {
        ores.blocks = [ 
            // FTBIC
            'ftbic:aluminum_ore',
            'ftbic:deepslate_aluminum_ore',
            'ftbic:iridium_ore',
            'ftbic:deepslate_iridium_ore',
            'ftbic:lead_ore',
            'ftbic:deepslate_lead_ore',
            'ftbic:tin_ore',
            'ftbic:deepslate_tin_ore',
            'ftbic:uranium_ore',
            'ftbic:deepslate_uranium_ore',
            // Mini Utils
            'miniutilities:ender_ore',
            // Enlightend End
            'nourished_end:malachite_ore',
            'nourished_end:bismuth_ore',
            'nourished_end:cobalt_void_shale',
            // Stalwart Dungeon
            'stalwart_dungeons:tungsten_ore',
            'stalwart_dungeons:chorundum_ore',
            // Malum
            'malum:blazing_quartz_ore',
            'malum:natural_quartz_ore',
            'malum:deeplsate_quartz_ore',
            'malum:soulstone_ore',
            'malum:deepslate_soulstone_ore',
            // Deep Resonance
            'deepresonance:resonating_ore_deepslate',
            'deepresonance:resonating_ore_stone',
            'deepresonance:resonating_ore_nether',
            'deepresonance:resonating_ore_end',
            // Minecraft
            'minecraft:coal_ore',
            'minecraft:deepslate_coal_core',
            'minecraft:iron_ore',
            'minecraft:deepslate_iron_ore',
            'minecraft:copper_ore',
            'minecraft:deepslate_copper_ore',
            'minecraft:gold_ore',
            'minecraft:deepslate_copper_ore',
            'minecraft:redstone_ore',
            'minecraft:deepslate_redstone_ore',
            'minecraft:emerald_ore',
            'minecraft:deepslate_emerald_ore',
            'minecraft:lapis_ore',
            'minecraft:deepslate_lapis_ore',
            'minecraft:diamond_ore',
            'minecraft:deepslate_diamond_ore',
            'minecraft:nether_gold_ore',
            'minecraft:nether_quartz_ore',
            'minecraft:raw_gold_block',
            'minecraft:raw_iron_block',
            'minecraft:raw_copper_block',
            'minecraft:ancient_debris',
            // Electrodynamics
            'electrodynamics:oresulfur'
        ];
    });
});
