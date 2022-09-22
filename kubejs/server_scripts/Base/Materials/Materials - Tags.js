onEvent('tags.items',(event) => {

    global.metals.forEach((metal) => {
        //Sulfate Crystals
        event.add(`forge:sulfate_crystals/${metal.name}`, `kubejs:sulfate_crystal_${metal.name}`)
        event.add(`forge:sulfate_crystals`, `kubejs:sulfate_crystal_${metal.name}`)

        // Blocks
        event.add(`forge:storage_blocks/${metal.name}`, `kubejs:block_${metal.name}`)
        event.add(`forge:storage_blocks`, `kubejs:block_${metal.name}`)

        // Impure Dusts
        event.add(`forge:impure_dusts/${metal.name}`, `kubejs:impure_dust_${metal.name}`)
        event.add(`forge:impure_dusts`, `kubejs:impure_dust_${metal.name}`)

        // Clumps
        event.add(`forge:clumps/${metal.name}`, `kubejs:clump_${metal.name}`)
        event.add(`forge:clumps`, `kubejs:clump_${metal.name}`)

        // Crystals
        event.add(`forge:crystals/${metal.name}`, `kubejs:crystal_${metal.name}`)
        event.add(`forge:crystals`, `kubejs:crystal_${metal.name}`)

        // Dirty Dusts
        event.add(`forge:dirty_dusts/${metal.name}`, `kubejs:dirty_dust_${metal.name}`)
        event.add(`forge:dirty_dusts`, `kubejs:dirty_dust_${metal.name}`)

        // Shards
        event.add(`forge:shards/${metal.name}`, `kubejs:shard_${metal.name}`)
        event.add(`forge:shards`, `kubejs:shard_${metal.name}`)

        // Gravels
        event.add(`forge:gravels/${metal.name}`, `kubejs:gravel_${metal.name}`)
        event.add(`forge:gravels`, `kubejs:gravel_${metal.name}`)

        // Fragments
        event.add(`forge:fragments/${metal.name}`, `kubejs:fragment_${metal.name}`)
        event.add(`forge:fragments`, `kubejs:fragment_${metal.name}`)

        // Impure Dusts
        event.add(`forge:impure_dusts/${metal.name}`, `kubejs:impure_dust_${metal.name}`)
        event.add(`forge:impure_dusts`, `kubejs:impure_dust_${metal.name}`)

        // Crushed
        event.add(`forge:crushed/${metal.name}`, `kubejs:crushed_${metal.name}`)
        event.add(`forge:crushed`, `kubejs:crushed_${metal.name}`)

        // Ground
        event.add(`forge:ground/${metal.name}`, `kubejs:ground_${metal.name}`)
        event.add(`forge:ground`, `kubejs:ground_${metal.name}`)

        // Raw Materials
        event.add(`forge:raw_materials/${metal.name}`, `kubejs:raw_${metal.name}`)
        event.add(`forge:raw_materials`, `kubejs:raw_${metal.name}`)

        // Raw Ores
        event.add(`forge:raw_ores/${metal.name}`, `kubejs:raw_${metal.name}`)
        event.add(`forge:raw_ores`, `kubejs:raw_${metal.name}`)
        event.add(`lychee:fire_immune`, `kubejs:raw_${metal.name}`)

        // Raw Ore Blocks
        event.add(`forge:storage_blocks/raw_${metal.name}`, `kubejs:block_raw_${metal.name}`)
        event.add(`forge:storage_blocks/raw`, `kubejs:block_raw_${metal.name}`)
        event.add(`forge:storage_blocks`, `kubejs:block_raw_${metal.name}`)
        event.add(`lychee:fire_immune`, `kubejs:block_raw_${metal.name}`)

    global.metalsMaterials.forEach((metalMaterial) => {

        event.add(`forge:${metalMaterial.name}s/${metal.name}`,`kubejs:${metalMaterial.name}_${metal.name}`);
        event.add(`forge:${metalMaterial.name}s`,`kubejs:${metalMaterial.name}_${metal.name}`);

    })});

})