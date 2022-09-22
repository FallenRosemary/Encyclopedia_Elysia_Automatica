onEvent('item.registry', event => {
	// Reward Boxes
	event.create('common_lootbox').displayName('Dusty Crate')
	event.create('rare_lootbox').displayName('Novelty Crate')
	event.create('epic_lootbox').displayName('Antique Crate')
	event.create('legendary_lootbox').displayName('Artifact Crate')

	event.create('box_open').displayName('Opened Box')
	event.create('box_closed').displayName('Box')
	event.create('box_scavengers').displayName("Scavenger's Box")
	event.create('box_farmers').displayName("Farmer's Box")
	
	// Misc
	event.create('andesite_ashes').displayName('Andesite Ashes')
	event.create('elysian_flower').displayName('Elysian Flower')
})