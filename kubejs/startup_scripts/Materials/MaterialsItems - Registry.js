onEvent('item.registry',(event) => {

    global.metals.forEach((metal) => {
    global.metalsMaterials.forEach((metalMaterial) => {
    // Metals and Materials
       event.create(`${metalMaterial.name}_${metal.name}`).group(`kubejs`).displayName(`${metalMaterial.preDisplay}${metal.display}${metalMaterial.reDisplay}`).texture(`kubejs:unification/${metal.name}/${metalMaterial.name}`);
    })})

    global.metals.forEach((metal) => {
    global.metalsProcessing.forEach((metalProcessing) => {
    // Metals and Processing
        event.create(`${metalProcessing.name}_${metal.name}`).group(`kubejs`).displayName(`${metalProcessing.preDisplay}${metal.veinDisplay}${metalProcessing.reDisplay}`).texture(`kubejs:unification/${metal.name}/${metalProcessing.name}`);
    })});

})
