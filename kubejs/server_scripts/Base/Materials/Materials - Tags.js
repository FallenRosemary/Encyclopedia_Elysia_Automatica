onEvent('tags.items',(event) => {

    global.metals.forEach((metal) => {
        //Sulfate Crystals
        event.add(`elysia:sulfate_crystals/${metal.name}`, `kubejs:sulfate_crystal_${metal.name}`)
        event.add(`elysia:sulfate_crystals`, `kubejs:sulfate_crystal_${metal.name}`)

        // Blocks
        event.add(`elysia:storage_blocks/${metal.name}`, `kubejs:block_${metal.name}`)
        event.add(`elysia:storage_blocks`, `kubejs:block_${metal.name}`)

        // Impure Dusts
        event.add(`elysia:impure_dusts/${metal.name}`, `kubejs:impure_dust_${metal.name}`)
        event.add(`elysia:impure_dusts`, `kubejs:impure_dust_${metal.name}`)

        // Clumps
        event.add(`elysia:clumps/${metal.name}`, `kubejs:clump_${metal.name}`)
        event.add(`elysia:clumps`, `kubejs:clump_${metal.name}`)

        // Crystals
        event.add(`elysia:crystals/${metal.name}`, `kubejs:crystal_${metal.name}`)
        event.add(`elysia:crystals`, `kubejs:crystal_${metal.name}`)

        // Dirty Dusts
        event.add(`elysia:dirty_dusts/${metal.name}`, `kubejs:dirty_dust_${metal.name}`)
        event.add(`elysia:dirty_dusts`, `kubejs:dirty_dust_${metal.name}`)

        // Shards
        event.add(`elysia:shards/${metal.name}`, `kubejs:shard_${metal.name}`)
        event.add(`elysia:shards`, `kubejs:shard_${metal.name}`)

        // Gravels
        event.add(`elysia:gravels/${metal.name}`, `kubejs:gravel_${metal.name}`)
        event.add(`elysia:gravels`, `kubejs:gravel_${metal.name}`)

        // Fragments
        event.add(`elysia:fragments/${metal.name}`, `kubejs:fragment_${metal.name}`)
        event.add(`elysia:fragments`, `kubejs:fragment_${metal.name}`)

        // Impure Dusts
        event.add(`elysia:impure_dusts/${metal.name}`, `kubejs:impure_dust_${metal.name}`)
        event.add(`elysia:impure_dusts`, `kubejs:impure_dust_${metal.name}`)

        // Crushed
        event.add(`elysia:crushed/${metal.name}`, `kubejs:crushed_${metal.name}`)
        event.add(`elysia:crushed`, `kubejs:crushed_${metal.name}`)

        // Ground
        event.add(`elysia:ground/${metal.name}`, `kubejs:ground_${metal.name}`)
        event.add(`elysia:ground`, `kubejs:ground_${metal.name}`)

        // Raw Materials
        event.add(`elysia:raw_materials/${metal.name}`, `kubejs:raw_${metal.name}`)
        event.add(`elysia:raw_materials`, `kubejs:raw_${metal.name}`)

        // Raw Ores
        event.add(`elysia:raw_ores/${metal.name}`, `kubejs:raw_${metal.name}`)
        event.add(`elysia:raw_ores`, `kubejs:raw_${metal.name}`)
        event.add(`lychee:fire_immune`, `kubejs:raw_${metal.name}`)

        // Raw Ore Blocks
        event.add(`elysia:storage_blocks/raw_${metal.name}`, `kubejs:block_raw_${metal.name}`)
        event.add(`elysia:storage_blocks/raw`, `kubejs:block_raw_${metal.name}`)
        event.add(`elysia:storage_blocks`, `kubejs:block_raw_${metal.name}`)
        event.add(`lychee:fire_immune`, `kubejs:block_raw_${metal.name}`)

    global.metalsMaterials.forEach((metalMaterial) => {

        event.add(`forge:${metalMaterial.name}s/${metal.name}`,`kubejs:${metalMaterial.name}_${metal.name}`);
        event.add(`forge:${metalMaterial.name}s`,`kubejs:${metalMaterial.name}_${metal.name}`);

    })});

})