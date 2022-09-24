onEvent('block.registry',(event) => {

    // Metals
    global.metals.forEach((metal) => {
        event.create(`block_${metal.name}`).displayName(`Block of ${metal.display}`).textureAll(`kubejs:unification/${metal.name}/block`);
        event.create(`block_raw_${metal.name}`).displayName(`Block of Raw ${metal.veinDisplay}`).textureAll(`kubejs:unification/${metal.name}/block_raw`);
        event.create(`block_raw_compressed_${metal.name}`).displayName(`Compressed Block of Raw ${metal.veinDisplay}`).textureAll(`kubejs:unification/${metal.name}/block_compressed`);
        event.create(`block_gilded_${metal.name}`).displayName(`Gilded Block of Raw ${metal.veinDisplay}`).textureAll(`kubejs:unification/${metal.name}/block_gilded`);
        event.create(`block_living_${metal.name}`).displayName(`Living Block of Raw ${metal.veinDisplay}`).textureAll(`kubejs:unification/${metal.name}/block_living`);
        // Ores
    global.rocks.forEach((rock) => {
        // Switch this over to dynamically generated models at some point
        event.create(`${rock.name}_${metal.name}_ore`).displayName(`${metal.veinDisplay} Ore`).textureAll(`kubejs:unification/${metal.name}/${rock.name}`);
    })
    });
})