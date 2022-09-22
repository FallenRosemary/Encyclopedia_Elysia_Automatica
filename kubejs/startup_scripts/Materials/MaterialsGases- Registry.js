onEvent('mekanism.slurry.registry',(event) => {

    global.metals.forEach((metal) => {
        event.create(`clean_slurry_${metal.name}`).displayName(`Clean ${metal.display} Slurry`).texture(`kubejs:block/clean_slurry_${metal.name}`);
        event.create(`dirty_slurry_${metal.name}`).displayName(`Dirty ${metal.display} Slurry`).texture(`kubejs:block/dirty_slurry_${metal.name}`);
    });
})

