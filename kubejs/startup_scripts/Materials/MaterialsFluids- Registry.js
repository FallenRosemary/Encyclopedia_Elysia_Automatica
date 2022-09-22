onEvent('fluid.registry',(event) => {

    global.metals.forEach((metal) => {
        event.create(`molten_${metal.name}`).displayName(`Molten ${metal.display} Metal`).stillTexture(`kubejs:block/fluid_still_${metal.name}`).flowingTexture(`kubejs:block/fluid_flowing_${metal.name}`)
    });
})