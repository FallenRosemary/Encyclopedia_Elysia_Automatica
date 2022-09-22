onEvent('worldgen.remove', (event) => {
    event.removeOres((ores) => {
        ores.blocks = [ 
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
            'miniutilities:ender_ore',
            'nourished_end:malachite_ore',
            'nourished_end:bismuth_ore',
            'nourished_end:cobalt_void_shale',
            'stalwart_dungeons:tungsten_ore',
        ];
    });
});
