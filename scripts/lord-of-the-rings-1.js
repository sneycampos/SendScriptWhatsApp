async function sendScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
		textarea = main.querySelector(`div[contenteditable="true"]`)

	if(!textarea) throw new Error("There is no conversation open")

	for(const line of lines){
		console.log(line)

		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));

		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);

		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}

	return lines.length;
}

sendScript(`
LORD OF THE RINGS: THE FELLOWSHIP OF THE RING

It began with the forging of the great rings. Three were given to the Elves, immortal, wisest and fairest of all beings. Seven to the Dwarf lords, great miners and craftsmen of the mountain halls. And nine, nine rings were gifted to the race of Men, who above all else, desire power. For within these rings was bound the strength and will to govern each race. But they were all of them deceived, for another ring was made.

In the land of Mordor, in the fires of Mount Doom, the Dark Lord Sauron forged in secret a master ring, to control all others. And into this Ring, he poured his cruelty, his malice and his will to dominate all life.

"One Ring to rule them all."

One by one, free lands in Middle-Earth fell to the power of the Ring. But there were some who resisted. A last alliance of Men and Elves marched against the armies of Mordor and on the slopes of Mount Doom they fought for the freedom of Middle-Earth.

< Vast armies of Men, Elves and Orcs assemble on the battlefield. Gil-Galad, Elrond and Elendil regard their enemies as the orcs snarl back, taunting them. Then the Orcs attack the Alliance, rushing across the field that separates the two armies. Elrond gives the command to the elven archers to engage >

< < Elrond: Tangado haid! Hado i philinn! > >

< The Elves raise their bows and releases a slew of arrows at the incoming orcs, taking down the first line of orc defense. As the wave of the orc infantry reaches the first line of the elven troops, the elves swing their swords up, slicing the orcs as they come, one after the other down the line. Soon the elves and the men are fully engaged in combat, taking down many of the orc troops >

Victory was near. But the power of the Ring could not be undone.

< Sauron strides onto the battlefield. Elrond looks up in trepidation. The Dark Lord, towering over both elves and men, brandishes a mace and shows the Ring of Power glowing on his finger. In fear, some of the warriors back off. Sauron wields his mace, hitting a group of warriors and sends them flying across the field. He repeats it with another fell swoop. Elendil, raising his sword to strike, attacks Sauron, but Sauron parries his blow and flings him against the rock, crushing him to death. Horrified, Isildur runs to his fallen father >

It was in this moment when all hope had faded, that Isildur, son of the King, took up his father's sword.

< Isildur grasps the hilt of Narsil but Sauron quickly stomps it down, shattering the blade. Sauron, with the Ring on his finger, reaches down towards Isildur. With a last desperate attempt, Isildur lets out a battle cry and strikes Sauron’s hand with the shards of Narsil, slicing the finger that bears the One Ring. Sauron lets out a cry as the Ring is separated from him. He implodes, sending a shock wave throughout the battlefield, knocking the warring troops off their feet. His armor falls unto the ground, his body vaporized >

Sauron, the enemy of the free-peoples of Middle-Earth was defeated. The Ring passed to Isildur, who had this one chance to destroy evil forever.

But the hearts of men are easily corrupted. And the Ring of Power has a will of its own. It betrayed Isildur to his death. And some things that should not have been forgotten were lost.

History became legend, legend became myth and for two and a half thousand years, the Ring passed out of all knowledge. Until, when chance came, it ensnared a new bearer.

< < Gollum: My Precioussssss > >


The Ring came to the creature Gollum, who took it deep into the tunnels of the Misty Mountains. And there, it consumed him.

< < Gollum: It came to me, my own, my love, my own, my prrrrreciousssss! gollum! > >

The Ring brought to Gollum unnatural long life. For five hundred years it poisoned his mind. And in the gloom of Gollum's cave, it waited. Darkness crept back into the forest of the world. Rumor grew of a shadow in the east, whispers of a nameless fear, and the Ring of Power perceived. Its time had now come.

It abandoned Gollum.

But something happened then the Ring did not intend. It was picked up by the most unlikely creature imaginable.

< < Bilbo: What’s this > >

A Hobbit: Bilbo Baggins of the Shire.

< < Bilbo: A ring. > >

< < Gollum: (from afar) Losssst! My precious is lost! > >

For the time soon come when Hobbits will shape the fortunes of all.

The Shire…60 years later

< A hobbit, reading beneath a tree, hears a male voice singing. He closes his book and stands, listening. Recognizing the voice, he smiles then runs to the road. He finds an old man, wearing a gray cloak and a pointy hat, driving a horse-drawn cart filled with fireworks and such >

Old Man: < singing > The road goes ever on and on down from the door where it began. Now far ahead the road has gone, and I must follow if I can…

Hobbit: You're late!

< The old man does not look at the Hobbit at first, and then turns slowly, with an emphatic expression on his face that begins to twitch >

Old Man: A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to.

< Both he and Frodo slowly begin to grin and crack up into laughter >

Frodo: < leaps onto cart and hugs the old man > Its wonderful to see you Gandalf!

Gandalf: < laughs > Ooh! You didn’t think I’d miss your Uncle Bilbo's birthday?

Frodo: What news of the outside world? Tell me everything.

Gandalf: Everything? Far too eager and curious for a hobbit, most unnatural. Well what can I tell you? Life in the wide world goes on much as it has this past age, full of its own comings and goings. Scarcely aware of the existence of hobbits... which I am very thankful.

Hobbit folk: Look it's Gandalf! Its Gandalf!

< Gandalf grins and tips his hat slightly >

Gandalf: Ooh! The long expected party!

< Hobbits raise a banner by the Party Tree that reads "Happy Birthday Bilbo Baggins." A hobbitess clasps her hands with pleasure and anticipation, looking at the sign >

Gandalf: So how is the old rascal? I hear it’s got to be a party of special magnificence.

Frodo: You know Bilbo, he's got the whole place in an uproar.

Gandalf: Hmm, well now that should please him, hmmm.

Frodo: Half the Shire’s been invited.

Gandalf: Good gracious me!

Frodo: He is up to something.

Gandalf: Oh really…

Frodo: All right then keep your secrets. < Gandalf laughs > Before you came along we Bagginses were very well thought of.

Gandalf: Indeed?

Frodo: Never had any adventures or did anything unexpected.

Gandalf: If you’re referring to the incident with the dragon, I was barely involved. All I did was give your uncle a little nudge out of the door.

Frodo: Whatever you did, you’ve been officially labeled a disturber of the peace.

Gandalf: Oh really?

< cart drives past grumpy old hobbit with grim look >

Hobbit children: Gandalf! Gandalf! Fireworks? Gandalf?

< Gandalf pretends to ignore the children >

Hobbit children: < dissapointed > Awwww.

< fireworks suddenly go off from the cart >
< hobbit children cheer >
< Gandalf laughs >
< grumpy old hobbit chuckles >
< grumpy old hobbitwife comes out and gives a nagging look to grumpy old hobbit >
< grumpy old hobbit restores grumpy look >

Frodo: Gandalf, I'm glad you're back.

Gandalf: < as Frodo jumps off the cart > So am I, dear boy! So am I.

< Scene goes to Bag End. Gandalf pulls up to Bilbo’s house. He goes through a gate with a sign on it saying: "No admittance except on party business. He then knocks on the door with his staff >

< knock, knock, knock, knock >

Bilbo: < from within > No thank you! We don't want any more visitors, well-wishers or distant relations!

Gandalf: And what about very old friends?

< Bilbo opens the door >
Bilbo: Gandalf?

Gandalf: Bilbo Baggins!

Bilbo: My dear Gandalf! < gives Gandalf a hug >

Gandalf: Good to see you! One hundred and eleven years old --who would believe it? < looks at Bilbo in astonishment > You haven't aged a day.

< Bilbo and Gandalf laugh >

Bilbo: Come on, come in! Welcome, welcome! < closes door > *There we are/ *Well now. Tea? Or maybe something a little stronger? I've got a few bottles of the Old Winyard left. 1296 --very good year. Almost as old as I am! Hahaha! It was laid down by my father. What say we open one, eh? [*note to reader: these lines are the different versions heard by audiences everywhere]

Gandalf: Just tea, thank you.

< Gandalf backs into the chandelier. He steadies it but then bumps his head onto the beam. Nursing the pain he enters Bilbo’s study and sees the map of the Lonely Mountain mounted on a frame. He picks it up to examine it. Meanwhile, Bilbo was puttering around in the kitchen >

Bilbo: I was expecting you here last week! Not that it matters, you come and go as you please. Always have done and always will. You caught me a bit unprepared, I'm afraid. We have some cold chicken and pickles... Here's some cheese here- oh no it won't do. There we got raspberry jam and apple tart... Not much for afterlunch - oh no! We're all right. I have some cake. < enters the study > I can make you some eggs if you like-- oh. Gandalf?

Gandalf: Just tea, thank you.

Bilbo: Alright! < with mouthful of cake > You don't mind if I eat, do you?

Gandalf: Oh no, not at all.

< a sudden, incessant knock on the door and a woman shouting: "Bilbo! Bilbo Baggins! >

Bilbo: < whispers > I'm not at home!

Bilbo: I've got to get away from these confounded relatives hanging on the bell--they never give me a moment's peace! I want to see mountains again, mountains Gandalf! And then find somewhere quiet where I can finish my book. Oh, tea!

Gandalf: So, you mean to go through with your plan, then.

Bilbo: Yes, yes. It's all in hand. All the arrangements are made. < starts to pour water into the tea pot, Gandalf opens the lid > Oh, thank you.

Gandalf: Frodo suspects something.

Bilbo: ‘Course he does. He's a Baggins! Not some block-headed Bracegirdle from Hardbottle.

Gandalf: You will tell him, won't you?

Bilbo: Yes, yes.

Gandalf: He's very fond of you.

Bilbo: I know. He'd probably come with me if I asked him < chuckles >. I think in his heart Frodo is still in love with the Shire: the woods, the fields…little rivers. I'm old Gandalf. I know I don't look it, but I'm beginning to feel it in my heart. I feel thin --sort of stretched like butter scraped over too much bread. I need a holiday, a very long holiday, and I don't expect I shall return. In fact, I mean not to!

< evening came. Outside, Gandalf and Bilbo are sitting and smoking pipe >

Bilbo: Old Toby. The finest weed in the Southfarthing.

< Bilbo first blows a ring of smoke and Gandalf blows a smoke ship that sails through it >

Bilbo: Gandalf, my old friend. This will be a night to remember!

< Scene goes to Bilbo’s party. The fireworks are going off and festivities are well underway >

Bilbo: < to guest > Hello, hello, Fatty Bolger, lovely to see you! Welcome, welcome!

< Frodo sees his friend Sam sitting alone, looking sidelong at hobbitlass Rosie Cotton dancing >

Frodo: < sits beside him > Go on Sam! Ask Rosie for a dance.

Sam: < gets cold feet > I think I’ll just have another ale.

Frodo: Oh no you don’t. Go on. < pushes Sam to the dance floor and into Rosie’s arms. Frodo laughs aloud >

Gandalf: < setting off a firework > Whoa!

< fireworks explode over the party field, a huge glittering umbrella in the night sky then changes into spears and whizzes away into the distance >
< Bilbo speaks to the hobbit children gathered at his feet >

Bilbo: There I was, at the mercy of three monstrous trolls! And they were all arguing amongst themselves about how they were going to cook us, whether it be turned on a spit or whether they should sit on us one by one and squash us into jelly.

< cute hobbit child gasps and shakes her head emphatically >

Bilbo: They spent so much time arguing the wither-tos and why-fors, that when the sun’s first light cracked over the top of the trees and poof!

Hobbit Children: < gasp >

Bilbo: It turned them all to stone!

< Gandalf, laughing, returns from his cart with more fireworks. Merry Brandybuck appears from behind, signaling Pippin Took to get onto Gandalf’s cart >

Merry: Quickly!

< butterfly fireworks goes off much to the hobbit children’s amusement >
Gandalf: Whoa! Off they go.

Merry: No, no the big one, big one

< inside the tent, Merry and Pippin light up the firework >
Pippin: Done.

Merry: You’re supposed to stick it in the ground!

Pippin: It is in the ground.

Merry: Outside!

Pippin: It was your idea!

< just then the firework goes up, throwing Merry and Pippin onto the ground. The firework bursts into a shape of a dragon and turns towards the merrymakers. The hobbits see this and try to get out of the way >

Hobbit: Look at that!

Frodo: Bilbo? Bilbo, look out for the dragon!

Bilbo: Dragon? Nonsense! There hasn’t been a dragon in these parts for a thousand years…

< Frodo pushes Bilbo to the ground. The dragon swoops low over the hobbits’ heads, flies off and bursts into a beautiful finale over the lake. Hobbits clap in amusement >

< Merry and Pippin, covered in soot, stands proud with their accomplishment >
Merry: That was good!

Pippin: Let’s get another one!

< Gandalf comes up behind them and grabs them each by their ear >

Merry and Pippin: Aah!

Gandalf: Meriadoc Brandybuck and Peregrin Took. I might have known.

< As Merry and Pippin wash the plates, the other Hobbits are gathered near the party tree >

Hobbits: Speech, Bilbo! Speech!

Frodo: Speech!

Bilbo: My dear Bagginses and Boffins, < cheers > Tooks and Brandybucks, < cheers > Grubbs, < cheers > Chubbs, < cheers > Hornblowers, < cheers > Bolgers, < cheers > Bracegirdles < cheers > and Proudfoots.

Proudfoot Hobbit: Proudfeet!

< hobbits laugh. Bilbo waves dismissively >

Bilbo: Today is my 111th birthday!

Hobbits: Happy birthday!

Hobbit: Happy birthday!

Bilbo: Alas, eleventy-one years is far too short a time to live among such excellent and admirable hobbits. < cheers > I don’t know half of you half as well as I should like, and I like less than half of you half as well as you deserve. < dead silence from the crowd >

Bilbo: I, uh, I h-have things to do. < fidgets with the Ring behind his back. Whispers to himself > I’ve put this off for far too long. < to the crowd > I regret to announce this is the end. I am going now. I bid you all a very fond farewell. < whispers >Goodbye.

< Puts the Ring on and vanishes >

Hobbits: < shocked > Ooh!

< Bilbo, invisible, leaves the party and returns to Bag End. Next scene shows Bag-End interior >

Bilbo: Hahahahaha! < flips the ring, catches it and puts it in his pocket >

Gandalf: I suppose you think that was terribly clever.

Bilbo: Come on Gandalf! Did you see their faces?

Gandalf: There are many magic rings in this world Bilbo Baggins and none of them should be used lightly.

Bilbo: It was just a bit of fun! Oh you’re probably right, as usual. You will keep an eye on Frodo, won’t you?

Gandalf: Two eyes, as often as I can spare them.

Bilbo: I’m leaving everything to him.

Gandalf: What about this Ring of yours, is that staying too?

Bilbo: Yes, yes. It’s in an envelope over there on the mantelpiece. < Gandalf turns to look >

Bilbo: No, wait, its --here in my pocket. Heh, isn’t that, isn’t that odd though? < looks at the Ring > Yet, after all why not? Why shouldn’t I keep it?

Gandalf: I think you should leave the Ring behind, Bilbo. Is that so hard?

Bilbo: Well no… and yes! Now it comes to it, I don’t feel like parting with it, its mine, I found it, it came to me!

Gandalf: There’s no need to get angry.

Bilbo: What if I’m angry, it’s your fault! < caresses Ring > It’s mine! My own, my precious.

Gandalf: Precious? Its been called that before, but not by you.

Bilbo: Argh! What business is it of yours what I do with my own things!

Gandalf: I think you’ve had that Ring quite long enough.

Bilbo: You want it for yourself!

Gandalf: Bilbo Baggins! Do not take me for some conjurer of cheap tricks. I am not trying to rob you. I’m trying to help you.

Bilbo: < starts weeping >

Gandalf: All your long years we’ve been friends. Trust me as you once did, hmm? Let it go.

Bilbo: < collects himself > You’re right Gandalf, the Ring must go to Frodo. It’s late, the road is long. Yes it is time.

< Bilbo opens the door >

Gandalf: Bilbo…

Bilbo: Hmm?

Gandalf: …the Ring is still in your pocket.

Bilbo: Oh, yes…

< Bilbo pulls out the Ring from his pocket. He stares at it on his palm, then slowly and with a great effort turns his hand, allowing it to slip off his palm. It lands on the floor with a heavy thud >

< Bilbo runs out the door, goes a few paces, then stops and lifts his head. He looks relieved >

Bilbo: I’ve thought of an ending for my book. < turns to Gandalf at the door > "And he lived happily ever after…to the end of his days".

Gandalf: And I’m sure you will my dear friend.

Bilbo: Good bye, Gandalf.

Gandalf: Good bye, dear Bilbo.

< Bilbo goes out by the gate, and starts down the road, singing >
Bilbo: The road goes ever on and on, down from the door where it began…

Gandalf: Until our next meeting.

< Gandalf re-enters Bag End. He stoops to pick up the ring but stops short when the Eye of Sauron flashes in his mind. He rises and proceeds to sit himself by the fireplace >

< Voice over of Bilbo > Its mine, my own, my precious! >

Gandalf: < mumbles > Riddles in the Dark.

< Frodo is heard entering Bag End >

Frodo: Bilbo! Bilbo!

< Frodo sees the Ring and stoops to pick it up >

Gandalf: < mumbles > My precious.

< Frodo notices Gandalf smoking by the fireplace, approaches him >

Gandalf: < mumbles > Precious…

Frodo: He's gone hasn't he? He talked for so long about leaving. I didn't think he'd really do it.

Frodo: Gandalf?

Gandalf: Hmm. < smiles at Frodo > Bilbo's Ring. He's gone to stay with the elves. He's left you Bag End… < holds envelope open, Frodo slips in the Ring, Gandalf seals the envelope > …along with all his possessions. The Ring is yours now. Put it somewhere out of sight.

< Gandalf gets up to leave >

Frodo: Where are you going?

Gandalf: There are some things that I must see to.

Frodo: What things?

Gandalf: Questions. Questions that need answering!

Frodo: But you've only just arrived! I don't understand.

Gandalf: < looks back at Frodo > Neither do I. Keep it secret. Keep it safe.
< Gandalf leaves Bag End. Frodo looks at the envelope in his hand, containing the Ring >

< At the dungeons of Barad-Dur, Gollum’s voice is heard as he is tortured >

Gollum: Shire!!! Baggins!!!

< Gates of Minas Morgul opens. The Ringwraiths ride out to find the Ring >

< Gandalf rides to the outskirts of Mount Doom to observe the activity that going on. He then heads to Minas Tirith to study its ancient scrolls >

Gandalf: < voice over >Year 3434 of the Second Age. Here follows the account of Isildur, High King of Gondor and the finding of the Ring of Power. It has come to me, the One Ring. It shall be an heirloom of my kingdom. All that should follow in my bloodline shall be bound to its fate for I will risk no hurt to the Ring. It is precious to me, though I buy it with a great pain. The markings upon the band begin to fade. The writing, which at first was as clear as red flame, has all but disappeared. A secret now that only fire can tell.

< Back at the Shire >

< Hobbit chopping wood in front of his home. His dog barks incessantly, then backs off, whimpering, as it retreats into the house >

Ringwraith: Shire. Baggins.

Hobbit: < fearful > Baggins. There are no Baggins ‘round here. They’re up in Hobbiton, that way. < points >

< Ringwraith gallops off >

< Scene goes to The Green Dragon Inn - Frodo and Sam are leaving >

Rosie: Goodnight.

Sam: Goodnight.

< Frodo and Sam stagger to Bag End >

Sam: Goodnight.

Frodo: Goodnight Sam.

< Frodo comes up the steps, opens the door and notices that the house seems to have been broken into >
< Gandalf grabs his shoulder from behind >

Frodo: < startled > Huh?!

Gandalf: Is it secret?! Is it safe?!

< Frodo opens a chest, searches through it and finds the envelope >

Frodo: Ah! < hands Gandalf the envelope >

< Gandalf throws the envelope to the fire >

Frodo: < alarmed > What are you doing?

< Gandalf gets a pair of tongs and picks up the Ring >

Gandalf: Hold out your hand Frodo, it’s quite cool. < drops the Ring on Frodo’s hand > What can you see? Can you see anything?

Frodo: Nothing. There's nothing... wait. There are markings. It's some form of elvish. I can’t read it.

Gandalf: There are few who can. The language is that of Mordor, which I will not utter here.

Frodo: Mordor?

Gandalf: In the common tongue it says, "One Ring to rule them all, One Ring to find them. One Ring to bring them all and in the darkness bind them."

Gandalf: This is the One Ring. Forged by the Dark Lord Sauron in the fires of Mount Doom. Taken by Isildur from the hand of Sauron himself.

Frodo: Bilbo found it. In Gollum's cave.

Gandalf: Yes. For sixty years the Ring lay quiet in Bilbo's keeping, prolonging his life, delaying old age. But no longer Frodo. Evil is stirring in Mordor. The Ring has awoken. It's heard its master's call.

Frodo: But he was destroyed. Sauron was destroyed.

Ring: < whispers > Isildur…

< alarmed, both Gandalf and Frodo look at the Ring >

Gandalf: No, Frodo. The spirit of Sauron endured. His life force is bound to the Ring and the Ring survived. Sauron has returned. His orcs have multiplied. His fortress of Barad-Dur is rebuilt in the land of Mordor. Sauron needs only this Ring to cover all the lands of a second darkness. He is seeking it. Seeking it, all his thought is bent on it. The Ring yearns above all else to return to the hand of its master. They are one, the Ring and the Dark Lord. Frodo, he must never find it.

Frodo: Alright, we put it away. We keep it hidden. We never speak of it again. No one knows it's here, do they? Do they Gandalf?

Gandalf: There is one other who knew that Bilbo had the Ring. I looked everywhere for the creature Gollum. But the enemy found him first. I don’t know how long they tortured him. Amidst the endless screams and inane babble, they discerned two words:

< Scene flashes to Gollum’s torture >
Gollum: Shire!!! Baggins!!!

Frodo: Shire. Baggins. But that would lead them here!

< Scene cuts to the Ringwraiths riding up to a Hobbit along the road >

Hobbit: Who goes there?

< Ringwraith chops off the hobbit’s head >

< Scene cuts back to Bag End >

Frodo: Take it Gandalf! Take it!

Gandalf: No Frodo no.

Frodo: You must take it!

Gandalf: You cannot offer me this Ring!

Frodo: I'm giving it to you!

Gandalf: Don't tempt me Frodo! I dare not take it. Not even to keep it safe. Understand Frodo, I would use this Ring from the desire to do good. But through me, it would wield a power to great and terrible to imagine.

Frodo: But it cannot stay in the Shire!

Gandalf: No! No it can't.

Frodo: What must I do?

< Scene goes to Frodo rushing about, hastily packing for his journey >

Gandalf: You must leave and leave quickly.

Frodo: Where? Where do I go?


Gandalf: Get out of the Shire. Make for the village Bree.

Frodo: Bree. What about you?

Gandalf: I'll be waiting for you, at the Inn of the Prancing Pony.

Frodo: And the Ring will be safe there?

Gandalf: I don't know Frodo. I don't have any answers. I must see the head of my order. He is both wise and powerful. Trust me Frodo, he’ll know what to do. You’ll have to leave the name of Baggins behind you, for that name is not safe outside the Shire. Travel only by day. And stay off the road.

Frodo: I can cut across country easily enough.

Gandalf: My dear Frodo. Hobbits really are amazing creatures! You can learn all that there is to know about their ways in a month, and yet after a hundred years, they can still surprise you. < hears rustling of the leaves > Get down!

< Frodo drops to the floor. Gandalf goes to the window, peers out cautiously then gives the bushes a whack with his staff >

Sam: Oooff!!

< Gandalf drags Sam up by his hair and plops him onto the table >

Gandalf: Confound it all Samwise Gamgee! Have you been eavesdropping?!

Sam: I have been droppin’ no eves sir, honest. I was just cutting the grass under the window there, if you follow me.

Gandalf: A little late for trimming the verge don’t you think?

Sam: I heard raised voices.

Gandalf: What did you hear?! Speak!!!!

Sam: N-n-n-nothing important. That is I heard a good deal about a Ring and a Dark Lord and something about the end of the world but… Please, Mister Gandalf sir, don’t hurt me. Don’t turn me into anythin’ --unnatural.

Gandalf: No, perhaps not. I have thought of a better use for you…

< Cuts to the scene outside the following morning >

Gandalf: Come along Samwise, keep up! Be careful both of you. The enemy has many spies in his service: birds, beasts. < turns to Frodo > Is it safe? < Frodo pats his vest pocket > Never put it on, for the agents of the Dark Lord will be drawn to its power. Always remember, Frodo, the Ring is trying to get back to its master. It wants to be found.

< Gandalf rides off, leaving Frodo and Sam in the forest >

< Frodo and Sam treks along countryside and streams >

< Frodo walks along the cornfield. Sam following behind, suddenly stops >

Sam: This is it.


Frodo: < turns > This is what?

Sam: I take one more step, it’ll be the farthest away from home I’ve ever been.

Frodo: < reassuringly > Come on Sam. Remember what Bilbo used to say: "It's a dangerous business… < segues to Bilbo’s voice > …Frodo, going out your door. You step onto the road, and if you don’t keep your feet, there's no knowing where you might be swept off to."

< Scene of Frodo and Sam setting up camp for the night >

< Scene of a Ringwraith, on a ridge, looking over the Shire >

< Gandalf rides swiftly into Isengard. Saruman descends down the steps of Orthanc to meet him >

Saruman: Smoke rises from the mountain of Doom. The hour grows late and Gandalf the Grey rides to Isengard seeking my counsel. For that is why you have come, is it not...my old friend?

Gandalf: Saruman. < bows >

< Gandalf and Saruman are walking through the Gardens of Isengard >

Saruman: You are sure of this?

Gandalf: Beyond any doubt.

Saruman: The Ring of Power has been found.

Gandalf: All these long years it was in the Shire, under my very nose.

Saruman: Yet you did not have the wit to see it. Your love of the halfling’s leaf has clearly slowed your mind.

Gandalf: But we still have time. Time enough to counter Sauron if we act quickly.

Saruman: Time?! What time do you think we have?

< Gandalf and Saruman are conferring in the chambers of Orthanc >

Saruman: Sauron has regained much of his former strength. He cannot yet take physical form, but his spirit has lost none of its potency. Concealed within his fortress, the Lord of Mordor sees all -- his gaze pierces cloud, shadow, earth and flesh. You know of what I speak, Gandalf -- a great Eye... lidless... wreathed in flame.

Gandalf: The Eye of Sauron.

Saruman: He is gathering all evil to him. Very soon he will summon an army great enough to launch an assault upon Middle Earth.

Gandalf: You know this? How?

Saruman: I have seen it.

< Gandalf and Saruman enter the chamber of the Palantir >

Gandalf: A Palantir is a dangerous tool, Saruman.

Saruman: Why? Why should we fear to use it?

< Unveils the Palantir >

Gandalf: They are not all accounted for, the lost Seeing Stones. We do not know who else may be watching!

< Covers the Palantir, Eye of Sauron flashes briefly >

Saruman: The hour is later than you think. Sauron's forces are already moving. The Nine have left Minas Morgul.

Gandalf: < alarmed > The Nine!

Saruman: They crossed the River Isen on Midsummer's Eve, disguised as riders in black.

Gandalf: They've reached the Shire?!

Saruman: They will find the Ring… and kill the one who carries it.

Gandalf: Frodo!

< Gandalf heads towards the door but Saruman closes it with his mind and the other doors in turn. Trapped, Gandalf looks at Saruman >

Saruman: You did not seriously think that a hobbit could contend with the will of Sauron? There are none who can. Against the power of Mordor there can be no victory. We must join with him, Gandalf. We must join with Sauron. It would be wise, my friend.

Gandalf: Tell me, "friend", when did Saruman the wise abandon reason for madness?!

< With a shout, Saruman points his staff at Gandalf, throwing him up and pinning him against the far wall, then drops him heavily to the floor. Gandalf counters with his own staff, throwing Saruman onto his back. They battle back and forth. Finally, Saruman uses his power to yank Gandalf’s staff from his hands, and he advances on Gandalf with both staffs. Gandalf spins helplessly just above the floor >

Saruman: I gave you the chance of aiding me willingly. But you...have elected...the way of pain!
< Saruman sends Gandalf rising to the pinnacle of Orthanc >

< Scene: The Shire. Sam emerges from a field of corn, onto a small path. He looks back and forth, not seeing Frodo in either direction >

Sam: < starts to panic > Mister Frodo? Frodo! Frodo!

< Frodo emerges from the bend in the path, looking puzzled >

Sam: < sigh > I thought I’d lost you.

Frodo: What are you talking about?

Sam: It's just something Gandalf said.

Frodo: What did he say?

Sam: "Don’t you lose him Samwise Gamgee!" And I don't mean to.

Frodo: < amused > Sam, we're still in the Shire. What could possibly happen?

< Suddenly, Pippin bursts from the cornfield and knocks over Frodo. Merry, close behind, barrels out, knocking over Sam. Both have an armful of vegetables >

Pippin: Frodo? Merry! It's Frodo Baggins.

Merry: Hello Frodo!

Sam: Get off him! < hauls Pippin off Frodo > Frodo? Are you all right?

Pippin: What's the meaning of this?

Merry: Hold this. < hands vegetables to Sam >

Sam: You've been into Farmer Maggot's crop!

< They hear a dog barking and an angry, yelling voice. Pippin grabs Frodo and runs, followed by Merry. Sam does a double take on the produce in his hands, drops them and runs after the others >

Farmer Maggot: < brandishing a scythe > Wait till I get this through you!…Stay out of my fields! You ruffians I’ll catch up with you!

Merry: ‘Dunno why he is so upset. It’s only a couple of carrots!

Pippin: And some cabbages. And those few bags of potatoes that we lifted last week and, and the mushrooms the week before!

Merry: Yes Pippin! My point is, he is clearly overreactin’. Run!

< Pippin, Frodo and Merry stops just before the edge of the hill. Sam slams into them from behind and all four hobbits roll down the hill >

Pippin: Ooh! That was close

Merry: Ow! I think I've broken something. < pulls out a broken carrot >

Sam: Trust a Brandybuck and a Took!

Merry: What?! That was just a detour, a shortcut.

Sam: A shortcut to what?

Pippin: Mushrooms!!!

< Sam and Merry rush towards the mushrooms, followed by Pippin >

< Frodo, standing, looks down the road >

Pippin: That’s mine!

Hobbits: Mmm…

Merry: Here is a nice one Sam.

Frodo: I think we should get off the road.

< Sounds of the Nazgul can be heard, coming up the road >

Frodo: Get off the road! Quick!

< hobbits grab their things and cross the road, hopping over and then crawling beneath a large overhanging tree root. Sound of hoof steps are heard >

Sam: Shhh! < to Merry and Pippin > Stop it! Be quiet!

< Merry and Pippin stop jostling each other. Frodo looks up through a small gap and sees a great black horse, and the Nazgul, clothed and hooded in black. The Nazgul leaps from his horse. He approaches the tree root and rests his armored hand on it, hissing and sniffing >

< Insects and earthworms start coming out of their holes. Frodo enters a trance, tempted to wear the Ring as his finger strains towards it. Sam realizes this and he reaches over and hits Frodo in the arm, startling him out of his the trance. Frodo jerks the Ring away from his finger. Merry throws a bag full of vegetables into the forest to distract the Nazgul, who whirls away and follows the sound. The hobbits make a break for it. They run a short distance and then stop, gasping >

Merry: What was that?

< Frodo stares at the Ring on his palm but says nothing >

< Nightfall. A Nazgul is patrolling the area. The hobbits hide behind the trees >

Pippin: Anything?

Frodo: Nothing.

Pippin: What is going on?

Merry: That Black Rider was looking for something… or someone. Frodo?

Sam: Get down!

< Nazgul feigns leaving the area >

Frodo: I have to leave the Shire. Sam and I must get to Bree.

Merry: Right. Buckleberry Ferry. Follow me.

< Hobbits make their way to Buckleberry ferry. A second Nazgul suddenly appears along their path. Frodo is delayed as the others run on. The hobbits jump over the fence and run towards the river. The Nazgul follows the chase, hot on Frodo’s heels >

Pippin: Run! This way, follow me! Run!

Merry: Get the rope Sam!

< Merry and Sam each uncoil an anchoring rope while Pippin starts to push off >

Sam: Frodo!

Hobbits: Run Frodo!

Frodo: Go!

Hobbits: Hurry!

Sam: Frodo!

Hobbits: Jump Frodo! Go on faster! Jump!

< Frodo leaps onto the raft. The Nazgul stops short of the water >
< Looking back the hobbits see the Nazgul ride away, followed by two more riders >

Frodo: How far to the nearest crossing?

Merry: Brandywine Bridge: Twenty miles.

< Hobbits arrive at the west gate of Bree, soaking wet due to the pouring rain >

Frodo: Come on.

< Knocks on the gates >

Gatekeeper: What do you want?

Frodo: We’re heading for the Prancing Pony.

Gatekeeper: Hobbits! Four hobbits! What business brings you to Bree?

Frodo: We wish to stay at the inn. Our business is our own.

Gatekeeper: Alright young sir, I meant no offence. ‘Tis my job to ask question after nightfall. There’s talk of strange folk abroad. Can’t be too careful.

< Hobbits come up the cobble stone path, working their way through the crowd >

Men of Bree: Move! Watch where you're going!

< Hobbits enter the Prancing Pony >

Frodo: Excuse me?

Butterbur: Good evening little masters! If you’re seeking accommodation we’ve got some nice, cozy, hobbit-sized rooms available. Mr. uh--

Frodo: --Underhill, my name’s Underhill.

Butterbur: Underhill. Hmm.

Frodo: We’re friends of Gandalf the Grey. Can you tell him we’ve arrived?

Butterbur: Gandalf? Gandalf? Ohhh yes! I remember, elderly chap, big gray beard, pointy hat. Not seen him for 6 months.

< The hobbits are shocked. Worry crosses their faces >

Sam: What do we do now?

< The hobbits are seated at a table in the common room of the Prancing Pony. The air is dark and smoke-filled. Drunken men laugh raucously. Several glance suspiciously at the hobbits. Frodo looks worried, as does Sam >

Frodo: Sam. He’ll be here. He’ll come.

Man: < to Merry coming from the bar > Get, get out of my way.

< Merry sits down at the table. He is holding a huge stein of beer, which he sets down reverently >

Pippin: What’s that?

Merry: This my friend, is a pint.

Pippin: It comes in pints? I’m getting one. < rushes to the bar >

Sam: You had a whole half already!

< Sam turns back to his mug. After a moment, he nudges Frodo >

Sam: That fellow’s done nothin’ but starin’ at us since we arrived.

Frodo: < takes Barliman aside > Excuse me, that man in the corner, who is he?

Butterbur: He’s one of them rangers. Dangerous folk they are-- all wandering the wilds. What his right name is I’ve never heard but around here, he’s known as Strider.

Frodo: Strider...

< Frodo starts to play with the Ring. It starts to whisper, tempting him to use it >

The Ring: Baggins. Baggins. Baggins. Baggins! Baggins!…

Pippin: Baggins!

< Frodo snaps out of his reverie >

Pippin: < at the bar > Sure I know a Baggins. He’s over there, Frodo Baggins. He's my second cousin once removed on his mother's side < listeners laugh, "It works for him!" yells one > and my third cousin twice removed on his father's side, if you follow me.

< Frodo rushes towards the bar to stop Pippin from babbling further >

Frodo: Pippin! < grabs him >

Pippin: Steady on!

< Frodo slips on someone’s boot and falls back, tossing the Ring into the air. As he catches it, the Ring slips onto Frodo’s finger. He disappears. Bree folks gasp in surprise. The Nazgul are alerted and makes for Bree. Frodo, now in the Shadow World, looks around mystified. He then sees an immense singular orb, a lidless eye, wreathed in flame. The Eye of Sauron stares down at him >

Voice of Sauron: You cannot hide! I see you! There is no life in the void, only death!

< Frodo backs away, terrified. He gropes for the Ring, unable to tear his gaze from the hideous Eye. Finally he wrenches the Ring off, reappearing with a relieved sigh, beside Strider’s table >

Frodo: Ah! < Strider grabs him from behind >

Strider: You draw far too much attention to yourself Mr. "Underhill"! < tosses him up the stairs >

< Strider flings open the door of his room, tosses Frodo in and shuts the door behind them. Frodo stumbles, falls to his knees, and stands up quickly, putting his back to the wall >

Frodo: What do you want?

Strider: A little more caution from you. That is no trinket you carry.

Frodo: I carry nothing.

Strider: Indeed.

< Walks over to the window, puts out the candles >

Strider: I can avoid being seen if I wish. But to disappear entirely, that is a rare gift.

Frodo: Who are you?

Strider: Are you frightened?

Frodo: Yes.

Strider: Not nearly frightened enough. I know what hunts you.

< Door bursts open. Strider draws his sword. Sam, Merry and Pippin rushes in >

Sam: *Stand off! / *Let him go! Or I’ll have you Longshanks! [*note to reader: these are the two different versions heard by audiences everywhere]

Strider: You have a stout heart little hobbit, but that will not save you. You can no longer wait for the wizard Frodo. They’re coming.

< The Nazgul crash through the gates of Bree and into the Prancing Pony. Screeches are heard. They make for the hobbits’ room and starts stabbing the beds. They pull back the covers to realize the hobbits are not there. They scream in agony >

< Strider watches from the window in his room as the Nazgul remount their dark horses. Frodo, gravely concerned of the attack, sits at the foot of the bed. The rest of the sleeping hobbits, awakened by the Nazgul cries, lean wide-eyed against the headboard >

Frodo: What are they?

Strider: They were once men. Great kings of Men. Then Sauron the Deceiver gave to them nine Rings of Power. Blinded by their greed, they took them without question. One by one falling into darkness. Now they are slaves to his will. They are the Nazgul, Ringwraiths, neither living nor dead. At all times they feel the presence of the Ring. Drawn to the power of the One. They will never stop hunting you.

< The following morning, Strider leads the four hobbits and a newly acquired pony away from the village of Bree >

Frodo: Where are you taking us?

Strider: Into the wild.

Merry: < to Frodo > How do we know this Strider is a friend of Gandalf’s?

Frodo: We have no choice but to trust him.

Sam: But where is he leading us?

Strider: To Rivendell Master Gamgee, The House of Elrond.

Sam: Did you hear that? Rivendell! We’re going to see the elves!

< After a while the Hobbits pause pulling cookware and food from their packs. Strider looks back at them >

Strider: Gentlemen, we do not stop till nightfall.

Pippin: What about breakfast?

Strider: We’ve already had it.

Pippin: We've had one yes. What about second breakfast?

< Strider walks away >

Merry: Don't think he knows about second breakfast Pip.

Pippin: < alarmed > What about elevenses? Luncheon? Afternoon tea? Dinner? Supper? He knows about them doesn’t he?

Merry: I wouldn't count on it.

< From over bush, Strider tosses an apple and Merry catches it. He hands it to Pippin and pats him on the shoulder. Another apple flies through the air, hitting Pippin in the head. He looks up bewildered >

Merry: < impatiently > Pippin!

< Scene: Isengard. Saruman is in the Chamber of the Palantir. His hand is suspended over the Stone, and a fiery light is in its depths. The eye of Sauron appears within the Palantir >

Saruman: < telepathically > The power of Isengard is at your command, Sauron, Lord of the Earth.

Voice of Sauron: Build me an army worthy of Mordor!

< Saruman is sitting on a chair in one of his chambers, his arms wound about him. He looks haunted. Three orcs file into the room >

Orc: What orders from Mordor my Lord? What does the Eye command?

Saruman: We have work to do!

< Scene: The pinnacle of Orthanc. Gandalf wakes painfully, the cold rain slashing down, the creaking of the felled trees heard far below. He slowly pushes himself up and moves cautiously to the edge and peers down at the activity surrounding Isengard >

Orcs: The trees are strong, my Lord. Their roots go deep.

Saruman: Rip them all down.

< Scene returns to Strider and the Hobbits. Strider stops and looks at the ruins atop a tall hill >

Strider: This was the great watchtower of Amon Sul. We shall rest here tonight.

< Hobbits, weary from the long travel, flings off their packs and settles down. Strider opens a bundle, revealing four short swords. He hands them to the hobbits >

Strider: These are for you. Keep them close. I’m going to have a look around. Stay here.

< Frodo, asleep, wakes up with a start. Merry, Pippin and Sam gathered around a fire cooking >

Pippin: Can I have some meat?

Merry: Ok. Want some tomatoes Sam?

Merry: Great tomatoes

Frodo: What are you doing?!

Merry: Tomatoes, sausages, nice crispy bacon.

Sam: We saved some for you Mr. Frodo.

Frodo: Put it out you fools! Put it out!

Pippin: Oh that’s nice! Ash on my tomatoes!

< Suddenly, a Nazgul cry pierces the darkness. The hobbits jump up, startled, and look over the lip of the hollow. They see five Nazgul closing in on Amon Sul. They unsheathe their small swords >

All: Uh?!

< Frodo motions the others to run up the steps, towards the ruins >
Frodo: Go!

< At the top, the Nazgul surrounds them, pulling out their long swords. Sam, Merry and Pippin prepare to defend of Frodo >

Sam: < brandishing his sword > Back you devils!

< Sam clashes swords with the Nazgul, but is swiftly thrown aside. Merry and Pippin close the gap in front of Frodo, but they too are cast aside. Frodo backs across the hill, dropping his sword with a clatter. He stumbles, falls, and crawls backward until he is backed against a fallen column. Frodo brings out the Ring from his pocket. Immediately, the Witch King feels its presence and approaches Frodo, drawing a long dagger. Frodo tries to scramble back, terrified, but has nowhere to go. Desperately, he slips on the Ring >

< The world changes. The Nazguls’ true forms are revealed to him, shining like ghostly kings. The Witch King reaches out for the Ring, and the Ring responds, lifting Frodo’s own hand towards the wraith. With desperate strength, Frodo yanks his hand back. The Witch King stabs him through the left shoulder with his long dagger, pinning him to the ground, then reaches again for the Ring. Frodo cries out in pain >

< At that moment, Strider leaps over Frodo and attacks the Nazgul with both sword and flaming brand. The Witch King withdraws his dagger and drops it. Frodo summons the strength to pull the Ring from his finger. He reappears in the middle of an anguished scream >

Frodo: Aaaahhhh!

Sam: Frodo! < rushes to his side >

Frodo: Oh Sam!

< Strider continues to fight the Nazgul, torch in one hand, sword in another. He sets them afire and finally drives them away >

Sam: Strider! Help him Strider.

Strider: He’s been stabbed by a Morgul blade. < blade dissolves in the wind > This is beyond my skill to heal. He needs elvish medicine.

< Strider carries Frodo over his shoulder and proceeds to leave Weathertop, the other hobbits following closely behind them. Nazgul cries are still heard in the area >

Strider: Hurry!

Sam: We are six days from Rivendell. He’ll never make it!

Frodo: < whispering > Gandalf…

Strider: Hold on Frodo.

Frodo: < cries out > …Gandalf!!!!

< Next scene swoops over Isengard and up to the Pinnacle of Orthanc were Gandalf is held prisoner. A moth flutters into view and is caught by Gandalf, who to whispers to it >

Gandalf: < whispering > Gwaihir. Go, Gwaihir.

< Gandalf sends it off and the moth flies away. Scene swoops down into the Caverns of Isengard as forging of weapons and armor are well underway. Saruman observes all the activity with pride and witnesses the birth of Lurtz and the Uruk Hai >

< Scene goes back to Strider and the Hobbits at the Trollshaws. Frodo is delirious >

Sam: Mr. Frodo? < to Strider > He’s going cold!

Pippin: Is he going to die?

Strider: He’s passing into the shadow world. He will soon become a wraith like them.

< Frodo gasps >

< The Nazgul cry is heard from a distance >

Merry: They’re close.

Strider: Sam, do you know Athelas plant?

Sam: Athelas?

Strider: Kingsfoil.

Sam: Kingsfoil- uh, that's a weed.

Strider: It may help to slow the poison. Hurry!

< They search for the plant. Strider finds a small patch and proceeds to collect it. Suddenly a sword is at his throat >

Arwen: What’s this? A ranger caught off his guard?

< Frodo, lying on the ground, senses a white light nearing him. He turns towards it, and like a vision, sees Arwen approaching >

Arwen: Frodo.... Im Arwen. Telin le thaed (I am Arwen. I have come to help you.)

Arwen: Lasto beth nin. Tolo dan na galad (Hear my voice. Come back to the light)

Merry: < in awe > Who is she?

Arwen: < kneels > Frodo!

Sam: She's an elf.

Arwen: He's fading!

< Frodo gasps >

Arwen: He's not going to last. We must get him to my father. I’ve been looking for you for 2 days.

Merry: Where are you taking him?

Arwen: There are 5 wraiths behind you. Where the other 4 are, I do not know.

< Strider mounts Frodo onto the horse, Asfaloth >

Strider/Aragorn: Dartho guin perian. Rych le ad tolthathon. (Stay with the Hobbits. I will send horses again for you)

Arwen: Hon mabathon. Rochon ellint im. (I’m the faster rider. I’ll take him.)

Strider/Aragorn: Andelu i ven. (The road is too dangerous.)

Pippin: What are they saying?

Arwen: Frodo fir. Ae athradon i hir, tur gwaith nin beriatha hon. (If I can get across the river, the power of my people will protect him.)

Arwen: < reassuringly > I do not fear them.

Strider/Aragorn: Beyest lin.

< Arwen mounts onto Asfaloth. Frodo is seated in front of her >


Strider/Aragorn: Arwen, ride hard. Don’t look back!

Arwen: Noro lim, Asfaloth, noro lim! (Ride fast Asfaloth, ride fast!)

< Asfaloth gallops away >

Sam: < to Strider > What are you doing?! Those wraiths are still out there!

< Arwen rides on as the Nazgul gives chase. Amongst the trees and over open spaces they rode in pursuit >

Arwen: Noro lim Asfaloth!!! (Ride faster Asfaloth!)

< Arwen reaches the river, and splashes across the ford. She pauses and looks back. The Nazgul have stops at the edge of the water >

Nazgul: Give up the half-fling she-elf!

Arwen: < draws her sword > If you want him, come and claim him!

< The Nazgul draws their sword and begin to cross the ford >

< Arwen casts a spell unto the river >
Arwen: Nin o Chithaeglir, lasto beth daer, Rimmo nin Bruinen dan in Ulair!
Nin o Chithaeglir, lasto beth daer, Rimmo nin Bruinen dan in Ulair! (Waters of the Misty Mountains listen to the great word; flow waters of Loudwater against the Ringwraiths!)

< Gradually, the water level rises. A great flood comes around the bend, with peaks like white horses. The Nazgul are cast from their mounts and washed away down the river >

< Frodo starts to slip from the horse. Arwen lays him on the ground >

Arwen: No! Frodo...No! Frodo, don’t give in! Not now!

< Arwen cries and embraces Frodo >

Arwen: < voice over > What grace is given me, let it pass to him, let him be spared, save him.

< Scene whites out, Elrond’s image appears >

Elrond: Lasto beth nin. Tolo dan nan galad. (Hear my voice, come back to the light)

< Scene opens with Frodo lying in bed at The House of Elrond, Rivendell >

Frodo: < half-asleep > Where am I?

Gandalf: You are in the house of Elrond. And it is 10 o’clock in the morning, on October the 24th if you want to know.

< Frodo wakes up >

Frodo: Gandalf!

Gandalf: Yes...I’m here. And you're lucky to be here too. A few more hours and you
would have been beyond our aid. But you have some strength in you, my dear hobbit!

Frodo: What happened Gandalf? Why didn't you meet us?

Gandalf: Oh I'm sorry Frodo... I was delayed.

< Flashback to Isengard. Saruman using his powers, flips Gandalf about then dangles him dangerously over the edge of Orthanc >

Saruman: Friendship with Saruman is not lightly thrown aside.

Saruman: One ill turn deserves another. It is over! Embrace the power of the Ring…or embrace your own destruction!

< flips Gandalf back towards the platform >

Gandalf: < slowly raises himself > There is only one Lord of the Ring! Only one can bend it to his will. And he does not share power!

< Gandalf leaps off the Tower of Orthanc and lands on Gwaihir's back >

Saruman: So you have chosen - death.

< Gwaihir flies over the mountains, bearing Gandalf to safety >
< End of Flashback. Scene returns to Rivendell >

Frodo: Gandalf? What is it?

Gandalf: Nothing Frodo.

< Sam enters the room >

Sam: Frodo! Frodo!

Frodo: Sam!

Sam: Bless you, you're awake!

< Frodo laughs >

Gandalf: Sam has hardly left your side.

Sam: We were that worried about you, weren't we Mr. Gandalf?

Gandalf: By the skills of Lord Elrond, you're beginning to mend.

Elrond: Welcome to Rivendell, Frodo Baggins.

< Reunion of the hobbits. Frodo sees Bilbo >

Frodo: Bilbo!

Bilbo: Hello Frodo my lad!

Frodo: Bilbo! < hug >

Bilbo: Oh!

< Next scene, Frodo reads Bilbo's book >

Frodo: "There and Back Again: A Hobbit's Tale by Bilbo Baggins". < leafs through the book > This is wonderful!

Bilbo: I meant to go back...wander the paths of Mirkwood... visit Laketown...see the Lonely Mountain again. But age it seems have finally caught up with me. < gives Frodo a playful smirk >

< Frodo leafing through the book, stops to look at the map of the Shire >

Frodo: I miss the Shire. I spent all my childhood, pretending I was off somewhere else…off with you on one of your adventures! < realizes sadly > My own adventure turned out to be quite different.

Frodo: I’m not like you Bilbo.

Bilbo: My dear boy.

< Scene goes to Sam packing his bag >

Sam: < to himself > Now what have I forgotten?

Frodo: Packed already?

Sam: No harm in being prepared.

Frodo: I thought you wanted to see the elves Sam.

Sam: I do!

Frodo: More than anything.

Sam: I did! Its just...we did what Gandalf wanted didn't we? We got the Ring this far
to Rivendell and then I thought, seen’ as how you’re on the mend, we'd be off soon. Off home.

Frodo: You're right Sam. We did what we set out to do. < shows the Ring on his palm > The Ring will be safe in Rivendell.

Frodo: I am ready to go home.

< Gandalf and Elrond watches Frodo and Sam from the balcony in Elrond's study >

Elrond: His strength returns.

Gandalf: That wound will never fully heal. He will carry it the rest of his life.

Elrond: And yet to have come so far, still bearing the Ring, the hobbit has shown extraordinary resilience to it's evil.

Gandalf: It is a burden he should never have had to bear. We can ask no more of Frodo.

Elrond: Gandalf, the enemy is moving. Sauron's forces are amassing in the east-- his eye is fixed on Rivendell. And Saruman you tell me has betrayed us. Our list of allies grows thin.

Gandalf: His treachery runs deeper than you know. By foul craft Saruman has crossed orcs with goblin-men, he's breeding an army in the caverns of Isengard. An army that can move in sunlight and cover great distance at speed. Saruman is coming for the Ring.

Elrond: This evil cannot be concealed by the power of the Elves. We do not have the strength to fight both Mordor and Isengard!

< Gandalf moves away, deep in thought >

Elrond: Gandalf, the Ring cannot stay here.

< Gandalf sees Boromir, Legolas and Gimli arrive at Rivendell >

Elrond: This peril belongs to all middle earth. They must decide now how to end it. The time of the Elves is over-- my people are leaving these shores. Who will you look to when we've gone? The Dwarves? They hide in their mountains seeking riches-- they care nothing for the troubles of others.

Gandalf: It is in Men that we must place our hope.

Elrond: Men? Men are weak. The race of men is failing. The blood of Numenor is all but spent. It's pride and dignity forgotten. It is because of men the Ring survives. I was there Gandalf. I was there three thousand years ago…

< Quick flashback to Isildur slicing the Ring off Sauron’s hand >

Elrond: Isildur took the Ring. I was there the day the strength of men failed.

< Return to flashback, Elrond and Isildur on the slopes of Mount Doom >

Elrond: Isildur hurry. Follow me.

Elrond: < voice over > I led Isildur into the heart of Mount Doom, where the Ring was forged, the one place it could be destroyed.

< At Sammath Naur, Elrond stands near the cracks of Doom >

Elrond: Cast it into the fire!

< Isildur looks at the Ring in his hand. The Ring whispers to him >

Elrond: Destroy it!

Isildur: No.

< Isildur walks away >

Elrond: Isildur!!!

Elrond: < voice over > It should’ve ended that day, but evil was allowed to endure.

< Flashback ends. Scene returns to Rivendell >

Elrond: Isildur kept the Ring. The line of kings is broken. There is no strength left in the world of men. They’re scattered, divided, leaderless.

Gandalf: There is one who could unite them, one who could reclaim the throne of Gondor.

Elrond: He turned from that path long time ago. He has chosen exile.

< Interior shot in Rivendell. Cut to Aragorn is reading a book. Boromir enters and pauses to regard the painting of Isildur and Sauron. Then he turns to the shrine and sees the broken sword lying there. He picks up the haft and stares at the blade >

Boromir: The shards of Narsil! The blade that cut the ring from Sauron's hand!

< Boromir runs his finger up the blade and cuts himself >

Boromir: < in amazement > It's still sharp!

< Turns to look at Aragorn who is watching him >

Boromir: < in disdain > No more than a broken heirloom!

< He returns the sword carelessly and it clatters to the ground. Boromir walks away. Aragorn gets up and walks to the shrine. He picks up the dropped haft and carefully sets it in place with the other shards. He takes a step back and touches his right hand to his heart, as he looks at the shrine. Arwen walks in behind him >

Arwen: Why do you fear the past? You are Isildur's heir, not Isildur himself. You are not bound to his fate.

Aragorn: The same blood flows in my veins. < turns to Arwen > Same weakness.

Arwen: Your time will come. You will face the same evil, and you will defeat it. A si i-Dhúath ú-orthor. Ú or le a ú or nin. (The Shadow does not hold sway yet, not over you and not over me.)

< Scene goes to Arwen and Aragorn, in the garden at twilight, standing atop of a bridge >

Arwen: Renech i lu i erui govannen? (Do you remember when we first met?)

Aragorn: Nauthannem i ned ol reniannen. (I thought I had strayed into a dream.)

Arwen: < tenderly touches Aragorn’s cheek > Gwenwin in enninath...U-arnech in naeth i si celich. (Long years have passed…You did not have the cares you carry now.)

Arwen: Renech i beth i pennen? (Do you remember what I told you?)

Aragorn: < his fingers run across the Evenstar pendant > You said you'd bind yourself to me. Forsaking the immortal life of your people.

Arwen: And to that I hold. I would rather share one lifetime with you than face all the ages of this world alone.

< Arwen gives Aragorn the Evenstar >

Arwen: I choose a mortal life.

Aragorn: You cannot give me this!

Arwen: It is mine to give to whom I will...like my heart.
< They kiss >

< The following morning, at the Council of Elrond. Gandalf and Frodo along with a congregation of Men, Elves and Dwarves sit in a semi-circle around a stone pedestal >

Elrond: Strangers from distant lands, friends of old. You have been summoned here to answer the threat of Mordor. Middle-Earth stands upon the brink of destruction. None can escape it. You will unite or you will fall. Each race is bound to this fate--this one doom. < gestures to the pedestal > Bring forth the Ring, Frodo.

< Frodo rises and lays the Ring on the pedestal and returns to his seat >

< People starts whispering >

Boromir: So it is true...

Man of Laketown: The Doom of Men

Boromir: < shakes head > It is a gift. A gift to the foes of Mordor. Why not use this Ring? < paces > Long has my father, the Steward of Gondor, kept the forces of Mordor at bay. By the blood of our people are your lands kept safe! Give Gondor the weapon of the enemy. Let us use it against him!

Aragorn: You cannot wield it! None of us can. The One Ring answers to Sauron alone. It has no other master.

Boromir: And what would a ranger know of this matter?

< Legolas stands suddenly >

Legolas: This is no mere ranger. He is Aragorn, son of Arathorn. You owe him your allegiance.

Boromir: Aragorn? This... is Isildur's heir?

Legolas: And heir to the throne of Gondor.

< Frodo looks wide-eyed at Aragorn >

Aragorn: Havo dad Legolas (Sit down Legolas)

Boromir: Gondor has no king. Gondor needs no king. < returns to his seat >

Gandalf: Aragorn is right. We cannot use it.

Elrond: You have only one choice. The Ring must be destroyed.

Gimli: What are we waiting for?

< Gimli grabs an axe and approaches the pedestal >

Gimli: ARGH!!!!

< Gimli strikes the Ring with full force but is repelled back, throwing him to the ground. Concurrently, Frodo sees the Eye of Sauron in his mind and winces in pain. The Ring remains intact with the shards of the axe all around it >

< Whispers in the black tongue issue forth from the Ring >

Elrond: The Ring cannot be destroyed, Gimli, son of Gloin by any craft that we here possess. The Ring was made in the fires of Mount Doom. Only there can it be unmade. It must be taken deep into Mordor and cast back into the fiery chasm from whence it came.

< Ring whispers: Ash Nazg >

Elrond: One of you must do this.

< Dead silence from the council >

Boromir: One does not simply walk into Mordor. Its black gates are guarded by more than just orcs. There is evil there that does not sleep. And the great Eye is ever watchful. It is a barren wasteland. Riddled with fire and ash and dust. The very air you breathe is a poisonous fume. Not with ten thousand men could you do this. It is folly!

Legolas: < stands indignantly > Have you heard nothing Lord Elrond has said? The Ring must be destroyed!

Gimli: < leaps to his feet > And I suppose you think you're the one to do it?!

Boromir: < rises > And if we fail, what then?! What happens when Sauron takes back what is his?!

Gimli: I will be dead before I see the Ring in the hands of an elf!

< Commotion starts as arguments erupt amongst the council members >

Gimli: Never trust an elf!

Gandalf: Do you not understand that while we bicker amongst ourselves, Sauron's power grows?! None can escape it!

< Frodo remains seated, watching the Ring uneasily, the angry figures of the council reflected on its surface. Suddenly, flames flare up, engulfing the surface of the Ring >

Ring: Ash Nazg Durbatuluk! Ash Nazg Gimbatul! Ash Nazg Gimbatul! Ash Nazg Gimbatul!

< The intensity of the arguments increase. Slowly, determination dawns on Frodo’s face. He stands and takes a few steps toward the arguing council, trying to make his voice heard above the din >

Frodo: I will take it! I will take it!

< The argument dies down. Gandalf closes is eyes as he hears Frodo’s statement. The members of the council slowly turn towards Frodo, astonished >

Frodo: I will take the Ring to Mordor. Though-- I do not know the way.

Gandalf: < walks towards Frodo > I will help you bear this burden, Frodo Baggins, so long as it is yours to bear. < places his hands reassuringly on Frodo’s shoulders >

Aragorn: < rises > If by my life or death, I can protect you, I will.

< approaches Frodo and keels before him >

Aragorn: You have my sword.

Legolas: And you have my bow. < walks to join them >

Gimli: And my axe! < looks grimly at Legolas as he joins the group >

Boromir: < walks over to them > You carry the fates of us all little one. If this is indeed the will of the council, then Gondor will see it done.

Sam: Heh! < jumps from behind the bushes and joins them > Mr. Frodo is not goin’ anywhere without me!

Elrond: < amused > No indeed, it is hardly possible to separate you even when he is summoned to a secret council and you are not.

Pippin and Merry: < emerges from behind the pillars to join them > Wait! We are coming too!

Merry: You'd have to send us home tied up in a sack to stop us!

Pippin: Anyway you need people of intelligence on this sort of mission, quest... thing.

Merry: Well that rules you out Pip.

Elrond: Nine companions... So be it! You shall be the Fellowship of the Ring!

Pippin: Great! Where are we going?

< Scene goes to Bilbo’s room >

Bilbo: My old sword, Sting! Here! Take it, take it!

< Frodo unsheathes the sword and examines it >

Frodo: It’s so light!

Bilbo: Yes...yea--made by the elves you know. The blade glows blue when orcs are close. And its times like that my lad, when you'll have to be extra careful!

< Bilbo brings out a mail shirt >

Bilbo: Here’s a pretty thing --Mithril! As light as a feather! And as hard as dragon scales! Let me see you put it on. Go on.

< Bilbo sees the Ring hanging on a chain around Frodo’s neck >

Bilbo: Oh...M-my old Ring! Oh well… I sh-sh-should very much like, to hold it again, one last time.

< Frodo begins to cover up the Ring >
< Bilbo, transformed by the power of the Ring, lashes out. Frodo, startled, backs away. Bilbo soon regains his composure. He then sits on the bed weeping >

Bilbo: I’m sorry I brought this upon you my boy...I’m sorry that you must carry this burden. I’m sorry for everything!

< Frodo places a reassuring hand on Bilbo’s shoulder >

< The Fellowship departs from Rivendell. They travel through the woods, over open plains and hillsides. They pause on a hill in the wild >

Gandalf: < voice over > We must hold this course west of the Misty Mountains for 40 days. If our luck holds the Gap of Rohan will still be open to us. From there our road turns east to Mordor.

< Boromir spars with Merry and Pippin, tutoring them on sword fighting >

Boromir: Two, Three, Four, Five. Good, very good.

Aragorn: Move your feet.

Merry: That’s good, Pippin.

Pippin: Thanks.

Boromir: Faster

Gimli: ‘Anyone was to ask for my opinion, which I note they’re not, I’d say we were taking the long way round. Gandalf, we could pass through the Mines of Moria. My cousin Balin would give us a royal welcome.

Gandalf: No Gimli, I would not take the roads through Moria unless I had no other choice.

< Legolas notices something amiss and looks intently towards the South >

Boromir: Come on. Good.

< Boromir accidentally nicks Pippin’s hand >

Pippin: Aaaah!

Boromir: Sorry!

< Pippin kicks Boromir on the shin >

Boromir: Ahh!

Merry: Get Him!

< Boromir goes down in mock battle and Boromir and Aragorn laughs >

Pippin: For the Shire!

Pippin: Hold him! Hold him Merry!

Merry: He got my arm! He got my arm!

< taking notice of Legolas’ observation >
Sam: What is that?

Gimli: Nothing, it’s just a whiff of cloud.

Boromir: It’s moving fast…against the wind.

Legolas: Crebain from Dunland!

Aragorn: Hide!

Boromir: Merry! Frodo!

Aragorn: Come on, come on! Take cover!

< The Fellowship scrambles to gather their things. Sam puts out the fire. They hide behind rock outcroppings and under bushes. Just then, a flock of black birds rushes overhead, cawing loudly. They circle the hill, then turn and fly back Southward >

Gandalf: Spies of Saruman! The passage south is being watched. We must take the Pass of Caradhras.

< The Fellowship climbs the snowy slopes of Caradhras. Frodo looses his footing and falls, rolling down the slope towards Aragorn >

Frodo: Ungh!

Aragorn: Frodo! < helps him to his feet >

< Frodo searches himself for the Ring. Finding it missing, he looks back up the slope. Boromir, sees the Ring on the snow and picks it up by its chain >

Aragorn: Boromir.

Boromir: It is a strange fate we should suffer so much fear and doubt over so small a thing… such a little thing.

Aragorn: Boromir! Give the Ring to Frodo.

Boromir: < hands it to Frodo > As you wish. I care not.

< Frodo grabs the Ring from him. Boromir jokingly tousles Frodo’s hair then turns to resume climbing. Frodo looks on suspiciously. Aragorn releases his grip from his sword >

< Scene goes to Crebain returning to Isengard- beneath Orthanc >
Saruman: So, Gandalf, you try to lead them over Caradhras. And if that fails, where then will you go? If the mountain defeats you will you risk a more dangerous road?

< Scene - The Pass of Caradhras >

< Fellowship with the exception of Legolas plods through the snow >

< Voice of Saruman is heard >
Saruman: Cuiva nwalca Carnirasse; nai yarvaxea rasselya! (Wake up cruel Redhorn! May your horn be bloodstained!)

Legolas: There is a fell voice on the air.

Gandalf: Its Saruman!

< First avalanche falls. It misses the Fellowship by a hair >

Aragorn: He’s trying to bring down the mountain! Gandalf, we must turn back!

Gandalf: No!

< Gandalf rises on the snow, chants out counter spell >

Gandalf: Losto Caradhras, sedho, hodo, nuitho i 'ruith! (Sleep Caradhras, be still, lie still, hold your wrath!)

< Saruman stands on the Pinnacle of Orthanc continues to cast spells on Caradhras >
Saruman: Cuiva nwalca Carnirasse; Nai yarvaxea rasselya; taltuva notto-carinnar! (Wake up cruel Redhorn! May your bloodstained horn fall upon enemy heads!)

< lightning strikes the tip of Caradhras sending a second avalanche onto the Fellowship below. Legolas snatches Gandalf from the edge, pulling him against the cliff just before the snow buries them completely. After a moment, they emerge from the snow >

Boromir: We must get off the mountain! Make for the Gap of Rohan and take the west road to my city!

Aragorn: The Gap of Rohan takes us too close to Isengard!

Gimli: If we cannot pass over a mountain, let us go under it. Let us go through the mines of Moria.

< Scene flashes to Saruman in his chamber in Orthanc, reading a page in the book of lore >

Saruman: Moria. You fear to go into those mines. The dwarves delved too greedily and too deep. You know what they awoke in the darkness of Khazad-dum: Shadow and Flame!

< Scene returns to Caradhras >

Gandalf: < grimly > Let the Ring bearer decide.

Gandalf: Frodo?

Frodo: We will go through the mines.

Gandalf: So be it.

< Nest scene: The Fellowship arrives at the West Gate of Moria >

Gimli: < in awe > The walls of Moria!

< Fellowship walks by the side of the lake. Frodo’s foot slips into the water >

Frodo: < gasp >

< Gandalf makes out an outline of the doors >

Gandalf: Now, let’s see. Ithildin -- it mirrors only starlight and moonlight.

< Moon appears. Doors illuminate >

Gandalf: It reads "The doors of Durin - Lord of Moria. Speak friend and enter."

Merry: What do you suppose that means?

Gandalf: Oh it’s quite simple. If you are a friend you speak the password and the doors will open.

Gandalf: Annon Edhellen edro hi ammen! (Gate of the Elves open now for me!)

< Doors remain closed. Gandalf begins to push it with his staff >

< Time passes. The rest of the Fellowship are seated around the doors or near the lake, still waiting for Gandalf to open it >

Gandalf: Ando Eldarinwa a lasta quettanya, Fenda Casarinwa! (Gate of Elves listen to my word, Threshold of Dwarves!)

Aragorn: < unhitches Bill’s bridle > The mines are no place for a pony, even one so brave as Bill.

Sam: < sadly > Buh-bye Bill

Aragorn: Go on, Bill, go on. Don’t worry Sam, he knows the way home.

< Merry begins to throw stones into the water. Pippin follows suit but Aragorn stops him >

Aragorn: Do not disturb the water.

Gandalf: < exasperated > Oh, it’s useless!

< Frodo stands and looks at the writings intently >
Frodo: It’s a riddle. Speak "friend" and enter. What’s the Elvish word for friend?

Gandalf: Mellon

< The stone doors slowly swing open. The Fellowship enters Moria >

Gimli: Soon master elf you will enjoy the fabled hospitality of the dwarves. Roaring fires, malt beer, ripe meat off the bone. This, my friend, is the home of my cousin Balin. And they call it a mine. A mine!

Boromir: This is no mine, it’s a tomb!

< Dwarf corpses litter the floor >

Gimli: Oh! No! Noooo!!!

< Legolas picks up an arrow from the body of a fallen dwarf, examines it and casts it away in disgust >

Legolas: Goblins!

< Legolas, Aragorn and Boromir draw out their swords >

Boromir: We make for the Gap of Rohan. We should never have come here.

< The four hobbits are backing toward the door. Something stirs in the water behind them >

Boromir: Now get out of here, get out!

< The whole company starts for the door. Suddenly, Frodo is grabbed from behind and pulled off his feet by the Watcher in the water >

Sam, Merry, and Pippin: Frodo!

Sam: Strider! < hacks at tentacle > Get off him!

< The watcher releases Frodo for a split-second, and feigns to disappear under the water. Suddenly as many tentacles come boiling out of the water its slaps the other hobbits aside and grab Frodo around the leg. He is pulled out over the water and into the air >

Frodo: aah!

Merry: Aragorn!

< Legolas shoots one of the tentacles holding Frodo. Boromir and Aragorn rush to the water with their swords, and attack the Watcher. It flings Frodo wildly in the air. Boromir slices the main tentacle holding Frodo’s leg. Frodo falls, and Boromir catches him. Aragorn and Boromir retreat towards the shore >

Gandalf: Into the Mines!

Boromir: Legolas! Aim for his eye! Come on!

< Legolas shoots an arrow straight into the Watcher’s eye. It pulls back and as the Fellowship race into Moria, it reaches out and slams the gates shut. Slabs of rocks drop and the roof of the passageway collapses. Total darkness falls. Then a beam of light emits from Gandalf’s staff, showing the startled faces of the Fellowship >

Gandalf: We now have but one choice. We must face the long dark of Moria. Be on your guard. There are older and fouler things than orcs in the deep places of the world.

< The Fellowship carefully picks its way over the floor and up the broad steps >

Gandalf: Quietly now. It’s a four-day journey to the other side. Let us hope that our presence may go unnoticed.

< The Fellowship enters a great cavern with a serpentine walkway down through the middle. They then climb up steep steps on the side of a cavern with its many buildings and stalagmites above them. Pippin looses his footing and slips onto Merry >

Merry: Pippin!

< On the fourth day of their journey, the Fellowship climbs another flight of stairs to a crossroads in the mine: three portals loom before them >

Gandalf: I have no memory of this place

< The Fellowship rests while Gandalf tries to decide their course >

Pippin: Are we lost?

Merry: No.

Pippin: I think we are.

Sam: Shhh! Gandalf’s thinking.

Pippin: Merry?

Merry: What?

Pippin: I’m hungry.

< Frodo looks down into the cavern and sees a small figure leaping from stone to stone. Startled, he walks over to where Gandalf is sitting >

Frodo: There’s something down there.

Gandalf: It’s Gollum.

Frodo: Gollum?

Gandalf: He’s been following us for three days.

Frodo: He escaped the dungeons of Barad-Dur!

Gandalf: Escaped? Or set loose?

< From the distance below, Gollum looks up, his large eyes pierces the darkness and observes the company >

Gandalf: He hates and loves the Ring, as he hates and loves himself. He will never be rid of his need for it.

Frodo: It’s a pity Bilbo didn’t kill him when he had the chance!

Gandalf: Pity? It was pity that stayed Bilbo’s hand. Many that live deserve death, and some that die deserve life. Can you give it to them, Frodo?

Gandalf: Do not be too eager to deal out death in judgement. Even the very wise can not see all ends. My heart tells me that Gollum has some part to play yet, for good or ill, before this is over. The pity of Bilbo may rule the fate of many.

< Gollum slinks off. Frodo sits down next to Gandalf >

Frodo: I wish the Ring had never come to me. I wish none of this had happened.

Gandalf: So do all who live to see such times, but that is not for them to decide. All we have to decide is what to do with the time that is given to us. There are other forces at work in this world Frodo besides the will of evil. Bilbo was meant to find the Ring, in which case you also were meant to have it. And that is an encouraging thought.

Gandalf: < looks towards one of the doorways > Ah! It’s that way.

Merry: He’s remembered!

Gandalf: No, but the air doesn’t smell so foul down here. If in doubt, Meriadoc, always follow your nose.

< The Fellowship heads down the left-hand passage, and before long they come to a more open space >

Gandalf: Let me risk a little more light.

< His staff illuminates a grandiose hall of stone lined with tall pillars and arched ceilings as far as the eye can see. Members of the Fellowship, including Gimli, react in awe >

Gandalf: Behold the great realm and dwarf city of Dwarrowdelf.

Sam: Now there’s an eye opener and no mistake.

< Fellowship walks forward through the hall. Gimli sees a ray of sunlight shining through the Chamber of Mazarbul. Corpses lay scattered about >

Gimli: Haugh!

Gandalf: Gimli!

< Gimli pays no heed to Gandalf, but runs into the chamber. He stops and kneels by a crypt >

Gimli: No! No! < sob > No! < sob >

< Boromir moves forward and places his hand on Gimli’s shoulder >

Gandalf: < translates the runes on the tomb > "Here lies Balin, son of Fundin, Lord of Moria." He is dead then. Its as I feared.

Gimli: < wails >

< Gandalf gives his staff and hat to Pippin, bends down, and takes from the grasp of a corpse a large and battered book. He opens it and clears the dirt from its pages >

Legolas: < to Aragorn > We must move on, we cannot linger!

Gandalf: < reading > "They have taken the bridge, and the second hall. We have barred the gates, but cannot hold them for long. The ground shakes. Drums, drums in the deep. < turns the page > We cannot get out. A Shadow moves in the dark. We cannot get out…They are coming."

< Pippin sees a corpse sitting by a stone well with an arrow in its chest. Curiously, he reaches out and lightly touches the arrow. The arrowhead breaks off from the rest of the corpse, causing first the skull, then the body, then the chain and bucket to go over the side of the well and drop far below, its noise echo from hall to hall. He winces at each new wave of noise. Then silence. The Fellowship begins to relax >

Gandalf: < slams the book shut > Fool of a Took! Throw yourself in next time and rid us of your stupidity!

< Just then, drums echo up from deep below. Terror creeps into their faces >

Sam: Frodo! < Sting glows blue >

Legolas: Orcs!

< Boromir goes to the door to have a look. Arrows are shot and hits the door near his face >

Aragorn: < to the Hobbits > Get back! Stay close to Gandalf!

< Aragorn, dropping his torch, runs to Boromir and closes the doors. A troll can be heard just outside >

Boromir: They have a cave troll.

< Legolas tosses weapons to Boromir and Aragorn to help blockade the door. Fellowship draws out their weapons Gimli leaps atop Balin's tomb and brandishes his axe >

Gimli: Aarrgghhh!!! Let them come! There is one dwarf yet in Moria that still draws breath!

< Orcs begin breaking the door down. Legolas and Aragorn shoot at them through the holes in the door. The orcs break through and the battle begins. The Fellowship engages the orcs >

< A cave troll smashes through the doorway. Legolas shoots him; he growls. Sam looks up, sees the troll swinging his mace down at him, and runs under the troll's legs. The troll swings twice at Gimli, but hits first the tomb, then an Orc instead. The battle rages on >

Sam: < hits orcs with skillet > I think I’m getting the hang of this.

< Legolas kills orcs on a ledge on one wall. The troll swings his chain at Legolas, who avoids it until the troll wraps it around a pillar. Legolas stamps the chain tight and then runs along it onto the troll's head. He shoots the troll and then jumps off >

< The troll continues to seek Frodo who tries to evade its searches by hiding around the pillar. The troll finds him nevertheless and grabs him. Frodo falls on his back into a corner. The troll lifts and drags Frodo off the edge >

Frodo: Aragorn? Aragorn!

< Frodo stabs the troll's hand with Sting. The troll drops Frodo to the ground >

Aragorn: Frodo! Yaaahh!

< Aragorn grabs a spear from the floor and stabs the troll with it. The troll, infuriated, hits Aragorn and sends him flying across the room. He collapses onto the floor. Frodo races after him and tries to rouse him, but Aragorn is too stunned to move >

< Frodo begins to run but the troll blocks Frodo’s path with its spear, throwing him back. The troll takes aim and stabs Frodo on the chest >

Frodo: < being stabbed > Ungh!

Sam: Frodo? Frodo!

< Frodo slumps to the floor >

Merry and Pippin: Yaahh!

< They leap onto the troll's head and start stabbing him. The troll flails at its head, finally grabbing Merry, swinging him around and throws him to the ground. The Fellowship redoubles its efforts against Orcs and troll. Gandalf and Gimli take turns stabbing at the troll and dodging out of range. Legolas takes aim. With Pippin stabbing the troll one more time on the head, the troll opens its mouth. Legolas delivers the deathblow >

< The troll moans then collapses to the ground. Pippin is thrown against the floor and is knocked out. There is a moment of silence. All Orcs are dead or has fled >

Aragorn: Oh no!

< He runs towards Frodo and turns him over. Frodo groans >

Sam: He’s alive!

Frodo: I’m all right, I’m not hurt.

Aragorn: You should be dead! That spear would have skewered a wild boar.

Gandalf: I think there’s more to this hobbit than meets the eye.

< Frodo reveals his Mithril shirt >

Gimli: Mithril! You are full of surprises Master Baggins.

< Orcs are once again heard down the hall >

Gandalf: To the bridge of Khazad-dum!

< The Fellowship runs out the rear door of the chamber, closely pursued by an army of orcs. Other orcs spring out from the floor or crawl from the ceiling and down the pillars like spiders. They surround the Fellowship, who have drawn their weapons outward. Just then a fiery light appears at the end of a hall followed by a thunderous growl. The orcs, dismayed, flee panicking in all directions >

Boromir: What is this new devilry?

Gandalf: A Balrog-- a demon of the ancient world. This foe is beyond any of you. Run!

< The Fellowship enters a passageway, then down a flight of steps. Parts of the steps end into a chasm and Boromir nearly falls into one. Legolas pulls him back. The Hobbits too stop short of falling in. They take another flight of stairs down. Aragorn and Gandalf bring up the rear >

Aragorn: Gandalf.

Gandalf: Lead them on Aragorn. The bridge is near. < Aragorn resists > Do as I say! Swords are no more use here.

< The Fellowship encounter a gap on the stairs. Legolas leaps forward and lands on the other side >

Legolas: < beckons > Gandalf.

< Gandalf leaps after him >

< Arrows whistles into the air, striking the stone steps at their feet. Legolas and Aragorn shoots back >

Boromir: Merry! Pippin! Hoo-aah!
< He takes Merry and Pippin, one on each side, and leaps forward >

Aragorn: Sam.
< He pitches Sam to the other side and is caught by Boromir >

< Aragorn reaches to pick up Gimli >

Gimli: < holds up his hand > Nobody tosses a dwarf.

< He leaps forward but nearly falls back into the chasm. Legolas grabs his beard >

Gimli: Not the beard!

< Some of the stone steps crumble and fall into the abyss. Aragorn pushes Frodo back up the steps and clambers after him. They struggle to their feet and look at the widened gap that separates them from the rest of the fellowship. The Balrog is heard approaching from the other hall, its the fiery light is seen getting closer. Stone structures around the mine collapse as it draws near. A huge rock falls from the ceiling and smashes down the steps behind Aragorn and Frodo, creating another gap behind them and weakening the stairs’ foundation. The stairs begin to wobble >

Aragorn: Stay there. Hold on. Hang on! Lean forward!

Legolas: Come on!

< They shift their weight forward, tipping the stairs across the divide and slamming onto the steps where their companions are. They leap across to safety. Turning, they continue to run down the stairs as the stone structures collapse behind them >

Gandalf: Over the bridge! Fly!

< The Fellowship crosses the bridge. Gandalf turns to face the Balrog >
< The Balrog growls >

Gandalf: You cannot pass!

Frodo: Gandalf!

< A blazing light radiate from Gandalf’s staff, illuminating the entire bridge >

Gandalf: I am the servant of the secret fire, wielder of the flame of Anor. The dark fire will not avail you! Flame of Udun!

< The Balrog strikes down on Gandalf with its flaming sword. Gandalf parries the blow with Glamdring, shattering the Balrog’s sword >

Gandalf: Go back to the shadow!

< The Balrog brandishes a flaming whip, lashing it about menacingly >

Gandalf: YOU…SHALL NOT...PASS!!!

< Gandalf strikes his staff onto the bridge. As the Balrog steps forward, the bridge collapses from under it and the demon plunges backward into the chasm. Gandalf, exhausted, leans on his staff and watches the Balrog fall then turns to follow the others. At the last minute, the flaming whip lashes up from the depths of the abyss and wounds about Gandalf’s ankle, dragging him over the edge. He clings onto the bridge but is straining to keep his grip >

< Frodo rushes forward but Boromir restrains him >

Boromir: No, Frodo!

Frodo: Gandaaaaalf!

Gandalf: Fly you fools!

< Gandalf loses his grip and falls into the chasm >

Frodo: Noooooooooooooooo!!!!

< Boromir grabs hold of Frodo and starts to leave >

Boromir: Aragorn!

Frodo: Noooooooooooo!!!

< Aragorn is stunned. He stares at the bridge in disbelief. For a moment he does not move, but then orc arrows start whistling by once again, shooting at the companions. Dodging, he turns and follows the others up the stairs >

< The Fellowship comes streaming out of the East Gate of Moria. Everyone is distraught. Sam sits on the ground, bows his head onto his hands and begins to weep. Merry consoles Pippin, who lay crying. Boromir tries to restrain Gimli as the dwarf vents out his rage and sorrow. Legolas wears a look of shock and disbelief >

< Aragorn wipes his sword clean, re-sheathes it and turns to the others >

Aragorn: Legolas, get them up.

Boromir: Give them a moment for pity's sake.

Aragorn: By nightfall these hills will be swarming with orcs! We must reach the Woods of Lothlorien. Come Boromir, Legolas, Gimli, get them up.

Aragorn: < he reaches down and lifts Sam up > On your feet Sam. < looks around > Frodo? Frodo!

< Frodo, a few paces away, grieves alone. Weeping silently, he turns towards Aragorn >

< Next scene: The Fellowship crosses Dimrill Dale and enters the Woods of Lothlorien >

Gimli: Stay close young hobbits! They say there’s a great sorceress lives in these woods, an elf-witch of terrible power. All who look upon her, fall under her spell...

Galadriel’s Voice: < whispering echo > Frodo....

< Frodo, startled, looks around >

Gimli: ... and are never seen again.

Galadriel’s Voice: …Your coming to us… is as the footsteps of doom. You bring great evil here Ring bearer!

Sam: Mr. Frodo?

Gimli: Well, here is one dwarf she won't ensnare so easily. I have the eyes of a hawk and the ears of a fox!

< With arrows notched, Lorien elves suddenly appear from behind the trees, aiming at them. The Fellowship stops and look around, alarmed >

Gimli: Oh...

Haldir: The dwarf breathes so loud we could have shot him in the dark.

Gimli: Grrr....

Aragorn: Haldir o Lórien. Henion aníron, boe ammen i dulu lîn. Boe ammen veriad lîn.

(Haldir of Lorien, we come here for help. We need your protection.)

Gimli: Aragorn, these woods are perilous! We should go back.

Haldir: You have entered the realm of the Lady of the Wood. You cannot go back. Come, she is waiting.

< The Fellowship arrive at Caras Galadhon. They ascend a winding stairway amongst the trees, towards the grand court of Galadriel and Celeborn. With a glow issuing forth from them, the Lord and Lady of Lothlorien descend to meet the Fellowship, hand in hand. Aragorn touches his head reverently in greeting >

Celeborn: Eight that are here yet nine there were set out from Rivendell. Tell me where is Gandalf? For I much desire to speak with him.

< Galadriel looks at Aragorn, reading the answer in his eyes >

Galadriel: He has fallen into shadow.

Galadriel: The quest stands upon the edge of a knife. Stray but a little and it will fail to the ruin of all.

< Galadriel looks at Boromir who can't stand her gaze. He starts shaking and casts his eyes downwards >

Galadriel: Yet hope remains while the company is true.

< Galadriel looks at Sam and smiles. Sam continues to gaze at her >

Galadriel: Do not let your hearts be troubled. Go now and rest for you are weary with sorrow and much toil. Tonight you will sleep in peace. < whispers to Frodo in his mind > Welcome Frodo of the Shire. One who has seen the Eye!

< Later, back on the ground, an area has been provided for them to rest in. The hobbits are settling down to rest. In the trees, the elves singing can be heard >

A Olorin i yaresse ( Olorin, who once was...)

Mentaner i Numeherui… (sent by the Lords of the West…)

Legolas: < pensive > A lament for Gandalf.

Merry: What do they say about him?

Legolas: I have not the heart to tell you. For me the grief is still too near.

Tirien i Romenori (to guard the lands of the East…)
Maiarion i Oiosaila…(wisest of all Maiar…)

Mana elye etevanne…(what drove you to leave…)

Norie i melanelye? (that which you loved?)

< Aragorn walks over to Boromir, who is seated alone on a great tree root >

Aragorn: Take some rest. These borders are well protected.

Boromir: I will find no rest here. I heard her voice inside my head. She spoke of my father and the fall of Gondor. She said to me even now there is hope left. But I cannot see it. It is long since we had any hope.

Boromir: My father is a noble man, but his rule is failing. And now our…our people lose faith. He looks to me to make things right and I would do it. I would see the glory of Gondor restored. < sigh > Have you ever seen it Aragorn? White tower of Ecthelion, glimmering like a spike of pearl and silver. It's banners caught high in the morning breeze. Have you ever been called home by the clear ringing of silver trumpets?

Aragorn: I have seen the White City, long ago.

Boromir: One day, our paths will lead us there. And the tower guards shall take up the call: The Lords of Gondor have returned!

< The Fellowship is asleep. Galadriel walks by. Frodo wakes up with a start and proceeds to follow her. Galadriel descends to her garden and fills the ewer with water. She turns towards Frodo >

Galadriel: Will you look into the mirror?

Frodo: What will I see?

Galadriel: Even the wisest cannot tell. For the mirror shows many things.

< She begins to pour the water into the silver basin >

Galadriel: Things that were, things that are and some things… < empties the ewer > that have not yet come to pass.

< Frodo steps up to the mirror to take a look. He peers down and sees nothing but his reflection. The suddenly the mirror clears and shows a vision of Legolas, Merry and Pippin, then Sam. He sees Bag End, then the burning of Hobbiton, the enslavement of the Hobbits and the destruction of the Shire. Then the Eye of Sauron fills the mirror. The Ring hanging from his neck pulls him closer to the water. Steam begins to curl up from the basin as Sauron speaks to Frodo in Black Speech. Terrified, he grabs the Ring and jerks back, throwing himself off the step and landing on his back on the forest floor >

Galadriel: I know what it is you saw, for it is also in my mind. < speaks to Frodo telepathically > It is what will come to pass if you should fail. The Fellowship is breaking. It has already begun. He will try to take the Ring. You know of whom I speak. One by one it will destroy them all.

Frodo: < telepathically > If you ask it of me, I will give you the One Ring.

< Opening his palm, he offers the Ring to her >

Galadriel: You offer it to me freely. I do not deny that my heart has greatly desired this.

< She approaches Frodo and places her hand over the Ring. Her image begins to change >

Galadriel: In place OF A DARK LORD, YOU WILL HAVE A QUEEN! NOT DARK BUT BEAUTIFUL AND TERRIBLE AS THE DAWN! TREACHEROUS AS THE SEA! STRONGER THAN THE FOUNDATIONS OF THE EARTH! ALL SHALL LOVE ME AND DISPAIR!

< Galadriel’s image returns to normal >

Galadriel: I pass the test! I will diminish, and go into the West, and remain Galadriel.

Frodo: I cannot do this alone.

Galadriel: You are a Ring bearer, Frodo. To bear a Ring of power is to be alone. This task was appointed to you and if you do not find a way, no one will.

Frodo: Then I know what I must do. It's just… I'm afraid to do it.

< Galadriel bends down to meet him at eye level >

Galadriel: Even the smallest person can change the course of the future.

< Scene goes to Orthanc in Isengard. Saruman and Lurtz are standing in the central chamber >

Saruman: Do you know how the Orcs first came into being? They were elves once, taken by the dark powers. Tortured and mutilated: a ruined and terrible form of life. Now...perfected: my fighting Uruk-Hai. Whom do you serve?

Lurtz: Saruman!

< The Uruk-Hai wear their armor and are given their weapons. They receive a white handprint on their heads and faces, signifying Saruman’s army. They then assemble before him >

Saruman: < to the troops > Hunt them down. Do not stop until they are found. You do not know pain. You do not know fear. You will taste man flesh!

Saruman: < to Lurtz > One of the halflings carries something of great value. Bring them to me alive and unspoiled. Kill the others!

< Uruk-Hai troop leaves Isengard >

< Scene returns to Lothlorien >

Galadriel: Farewell, Frodo Baggins. I give you the light of Earendil, our most beloved star.

Galadriel: Namarie.

Galadriel: May it be a light for you in dark places, when all other lights go out.

< Galadriel raises her hand in farewell as the Fellowship canoes down the river >

< The Uruk-Hai march along through the forest as the three boats carrying the Fellowship float along the Anduin >

< The Fellowship’s boats pass through a canyon. Aragorn lifts his head, half-smiles and taps Frodo on the shoulder >

Aragorn: Frodo, the Argonath! Long have I desired to look upon the kings of old. My kin.

< The Fellowship looks up in awe at the towering splendor of the Argonath. Two majestic statues, carved right out of the rock, proudly stand on each side of the Anduin. Their left arms are held aloft, their palms facing outwards in gesture of warning. Solemn and stern were their faces, the silent wardens of a long vanished kingdom >

< The Fellowship reaches the foot of Amon Hen, the Hill of Sight. As they disembark on the gravel beach of Parth Galen, Boromir looks troubled and appears to be fighting a conflict within him. Frodo looks perturbed. The Fellowship starts to make camp >

Aragorn: We cross the lake at nightfall. Hide the boats and continue on foot. We approach Mordor from the north.

Gimli: Oh, yes?! It's just a simple matter of finding our way through Emyn Muil? An impassable labyrinth of razor sharp rocks! And after that, it gets even better! < Pippin looks up, alarmed > Festering, stinking marshlands far as the eye can see!

Aragorn: That is our road. I suggest you take some rest and recover your strength master dwarf.

Gimli: Recover my…?! Phrrrrr...

Legolas: < quietly to Aragorn > We should leave now.

Aragorn: No. Orcs patrol the eastern shore. We must wait for cover of darkness.

Legolas: It is not the eastern shore that worries me. A shadow and a threat has been growing in my mind. Something draws near...I can feel it!

Gimli: No dwarf need recover strength! < to Pippin > Pay no heed to that, young hobbit.

< Merry, returning with some wood for the campfire, looks around >

Merry: Where's Frodo?

< Sam, who was half-dozing, rouses with a start. Aragorn looks over the camp. His gaze stops on Boromir’s shield, lying with the baggage >

< Frodo wanders into the forest. He stands by an immense stone head, lying with its side on the ground. Boromir, gathering wood, sees Frodo and approaches him >

Boromir: None of us should wander alone, you least of all. So much depends on you. Frodo?

Boromir: I know why you seek solitude. You suffer; I see it day by day. You sure you do not suffer needlessly? There are other ways, Frodo, other paths that we might take.

Frodo: I know what you would say. And it would seem like wisdom but for the warning in my heart.

Boromir: Warning? Against what? We're all afraid, Frodo. But to let that fear drive us to destroy what hope we have. Don't you see that is madness?

Frodo: There is no other way!

Boromir: I ask only for the strength to defend my people! < throws the gathered wood to the ground > If you would but lend me the Ring...

Frodo: No. < steps back >

Boromir: Why do you recoil? I am no thief.

Frodo: You are not yourself.

Boromir: What chance do you think you have? They will find you! They will take the Ring and you will beg for death before the end!

< Frodo begins to run from Boromir >

Boromir: Fool!

< Boromir gives chase >

Boromir: It is not yours save by unhappy chance. It could have been mine! < tackles Frodo > It should be mine! Give it to me!

< struggle ensues >

Boromir: Give it to me!

Frodo: No!

Boromir: Give me… Give me the Ring!

Frodo: Nurgh…ugh!

< Frodo slips the Ring on and disappears. He kicks Boromir and runs away >

Boromir: < looks around desperately > I see your mind. You will take the Ring to Sauron! You will betray us! You go to your death and the death of us all! Curse you! Curse you! And all the halflings!

< Boromir slips and falls to the ground. The madness of the Ring leaves him and he comes to his senses >

Boromir: Frodo?...Frodo?...what have I done?...please...Frodo!

Boromir: < in the background > Frodo, I'm sorry! Oh no!

< Frodo, in the "shadow world," climbs up onto the Seat of Seeing atop Amon Hen. He looks over the stone seat and sees the Dark Tower from afar. The image rushes towards him and his vision rise to its pinnacle-where the burning Eye of Sauron stares back menacingly. Frodo, rushing to remove the Ring, falls off the Seat of Seeing and lands on his back. He sits up, trying to catch his breath >

< Aragorn approaches >

Aragorn: Frodo?

Frodo: < startled > Huh?! It has taken Boromir.

Aragorn: < intensely > Where is the Ring?

Frodo: Stay away! < scrambles up and retreats from Aragorn. Aragorn comes after him >

Aragorn: Frodo!

< Frodo stops >

Aragorn: I swore to protect you!

Frodo: Can you protect me from yourself?!

< Shows the Ring on his palm >

Frodo: Would you destroy it?

< Aragorn, looking at the Ring, slowly approaches Frodo. The Ring begins to whisper >

The Ring: Aragorn...Aragorn…Elessar...

< He reaches out. With both hands, Aragorn closes Frodo’s hand over the Ring and pushes it to the hobbit’s chest >

Aragorn: I would have gone with you to the end, into the very fires of Mordor.

Frodo: I know. Look after the others, especially Sam. He will not understand.

< Aragorn nods but then sees Sting’s blue glow. He stands suddenly >

Aragorn: Go on Frodo. < draws out his sword > Run. Run!

< Frodo leaves. Aragorn walks out from beneath the Seat of Seeing and finds a troop of Uruk-Hai advancing towards him. He gives a half-smile, and half-swaggers towards them, holding his sword up to his face as an acceptance to the challenge. They attack. He cuts several down, but they force him up the stairs of the Seat >

< Sam searches frantically for Frodo in the woods >

Sam: Mr.Frodo!!!
< He hears the clash of sword on sword. His eyes widen >

Lurtz: < to his troops > Find the Halfling! Find the Halfling!

Aragorn: < jumps onto the Uruk-Hai > Elendil!!!!!

< Legolas and Gimli run forward from behind the Seat. Legolas shoots three Uruk-Hai with quick bow-work; Gimli lands blow after blow with his axe >

Legolas: Aragorn! Go!

< Frodo runs and hides behind a tree. Across the way, Merry and Pippin hide in a space under some fallen tree trunks >

Merry: Frodo!

Pippin: < beckoning > Hide here quick! Come on!

< Frodo looks at them, anguished, then shakes his head >

Pippin: < to Merry > What’s he doin'?

Merry: He's leavin’.

Pippin: No! < runs out to Frodo >

Merry: Pippin! < comes after him >

< Merry and Pippin are out in the open. Several Uruk-Hai are coming down the hill, towards their area >


Merry: < quietly > Run Frodo! Go!

< Merry cups his hands and calls out to the Uruk-Hai >

Merry: Hey! Hey you! Over here!

Pippin: Hey!

Merry: Over here!

Pippin: < waving his arms > This way!

< Both hobbits run away from Frodo. The Uruk-Hai troop follows them. Frodo makes a break for it, running in the opposite direction >

Pippin: Its working!

Merry: I know its working! Run!

< Merry and Pippin run across an old stone bridge. At its far end, they stop and see Uruk-hai running towards them. The Uruks are closing in, both in front and behind. An Uruk runs up to them, raising his battleaxe. But Boromir comes charging in, knocks the Uruk back, and kills him with his own axe. He throws a knife at another. More close in >

< Back at the Seat of Seeing, Legolas, Aragorn, and Gimli continue to fight the Uruk-Hai. In one smooth move, Legolas stabs one Uruk with an arrow then shoots it out at another. Gimli wields his axe. Aragorn stabs one behind his back. Legolas shoots an Uruk who has closed in on Aragorn >

< Three loud ox-horn blasts are heard >

Legolas: The Horn of Gondor!

Aragorn: Boromir!

< They run down Amon Hen towards the sound, but Uruks are between them and Boromir. A visual sweep shows some running towards Boromir, down the stone steps; the others attack Aragorn, Legolas, and Gimli as they struggle to follow >

< Boromir sounds the horn of Gondor again >

Boromir: < to the hobbits > Run! Run!

< The Uruks attack Boromir. He kills two more. Lurtz walks into view, lifts his bow, aims a big black arrow, and shoots it into Boromir’s left shoulder. The hobbits look at him in shock. Boromir drops to his knees, begins to breathe hard, and looks at the hobbits. Uruks come closer, but he gives a battle cry, rises, and swings his sword at one, who falls. Lurtz growls, lifts his bow, and shoots again. A black arrow flies into Boromir’s stomach. He drops to his knees again, gasping. But he swings his sword at another Uruk and gets back up. Lurtz shoots him one more time, in the chest. Boromir falls on his knees and stays there, swaying a little and blinking >

< Merry and Pippin look at him, aghast. With all the courage they could muster, they take up their swords and attack the Uruk-Hai >

Merry and Pippin: Shire!!!!!

< They never have the chance to strike. The Uruk-Hai lifted them up and carried them off. Merry and Pippin wave their arms frantically. The Uruk-Hai troop walks away from Boromir. Boromir looks on in helplessly >

< Lurtz, now left alone, stops ten feet from Boromir and takes aim with his bow. Boromir swallows and stares back at him. Just then Aragorn crashes into Lurtz, whose arrow flies off harmlessly >

< Lurtz and Aragorn fight. Aragorn loses his sword and is thrown to the ground; when he gets up, Lurtz throws his two-prong shield at Aragorn and pins him by the neck against a tree. Lurtz raises his sword and strikes, but Aragorn slips beneath the shield and dodges the blow. Aragorn pulls out a knife and stabs Lurtz on the leg. Lurtz roars. Lurtz then pulls out the knife and throws it at Aragorn, who has found his sword and uses it to bat the knife away. Aragorn closes in on Lurtz and in a flurry of swordplay, slices his arm off and then stabs him in the chest. Lurtz pulls himself up on the sword closer to Aragorn, snarling. Aragorn grimaces, pulls his sword out of Lurtz, swings it wide, and hacks off Lurtz’s head. The rest of Lurtz falls to the ground >

< Aragorn pauses a moment, panting. He then races to Boromir. Boromir, pale and bloodied, is now lying on his back, his head close to a tree >

Aragorn: No! < runs up and kneels near Boromir >

Boromir: They took the little ones.

Aragorn: Be still.

Boromir: Frodo, where is Frodo?

Aragorn: I let Frodo go.

Boromir: Then you did what I could not. I tried to take the Ring from him.

Aragorn: The Ring is beyond our reach now.

Boromir: Forgive me, I did not see it. I have failed you all.

Aragorn: No, Boromir, you fought bravely! You have kept your honor. < reaches out to pull the arrows from Boromir >

Boromir: Leave it! It is over. The world of men will fall, and all will come to darkness… and my city to ruin.

Aragorn: I do not know what strength is in my blood, but I swear to you I will not let the white city fall, nor our people fail!

Boromir: Our people? Our people.

< He reaches for his sword. Aragorn places the hilt in his hand, and Boromir clasps it to his chest >

Boromir: I would have followed you my brother, my captain, my king!

< Boromir passes away. Aragorn touches his hand to his forehead, then to his lips in respect >

Aragorn: Be at peace, son of Gondor. < bends and kisses Boromir on the brow >

< Legolas and Gimli arrive at the scene. Legolas looks sadly at Aragorn and Boromir. Gimli bows his head and turns away >

< Scene shows Sam running through the woods >

Sam: Frodo!

< Frodo stands upon Parth Galen, staring into the distance, with the Ring on his palm. Weeping silently, he recalls his conversation with Gandalf >

< flashback >

Frodo: I wish the Ring had never come to me. I wish none of this had happened.

Gandalf: So do all who live to see such times but that is not for them to decide. All you have to decide is what to do with the time that is given to you.

< flashback ends. Frodo decides to leave. Determined to proceed with the quest alone, he closes his hand over the Ring, and puts it into his vest pocket. He pushes the boat into the river and jumps in. Just then, Sam emerges from the woods. He sees Frodo paddling away and runs after him >

Sam: Frodo no! Frodo! Mr. Frodo!

Frodo: < quietly > No Sam. < continues to paddle away >

< Sam runs into the river after Frodo. Frodo, hearing the splashes, looks back >

Frodo: Go back Sam! I’m going to Mordor alone.

Sam: Of course you are, and I’m coming with you!

Frodo: You can’t swim! Sam!

< Sam struggles to swim then sinks into the water >

Frodo: Sam!!!

< Sam sinks deeper and deeper. He sees the sun shimmering up on the surface. His arm floats limply as he descends into the water. Suddenly Frodo’s hand reaches down and grabs Sam’s wrist. . Sam tightens his hand around Frodo’s. Frodo pulls him out of the water and up into the boat and Sam tumbles in >

Sam: < dripping wet > I made a promise, Mr. Frodo. A promise! "Don’t you leave him Samwise Gamgee." And I don’t mean to! I don’t mean to.

Frodo: Oh Sam! < hug > Come on.

< Frodo and Sam paddle towards the eastern shore >

< Boromir is laid to rest in one of the boats. His sword rests with him, his shield is above his head and his cloven horn at his side. The boat slips over the falls of Rauros and then drops into the mists below. Gimli watches the boat disappear. Aragorn wears Boromir’s vambraces in his honor. Legolas shoves the third boat into the water >

Legolas: Hurry! Frodo and Sam have reached the eastern shore.

< Aragorn stand still and says nothing >

Legolas: You mean not to follow them?

Aragorn: Frodo’s fate is no longer in our hands.

Gimli: Then it has all been in vain! The Fellowship has failed.

Aragorn: < puts his hands on their shoulders > Not if we hold true to each other. We will not abandon Merry and Pippin to torment and death. Not while we have strength left. Leave all that can be spared behind. We travel light. Let’s hunt some orc!

< Legolas and Gimli look at each other, grinning >

Gimli: Yes!!! Haha!

< Aragorn runs into the woods, followed by Gimli and Legolas >

< Frodo and Sam stand upon Emyn Muil, seeing the Dead Marshes and Mordor in the distance ahead >

Frodo: Mordor. I hope the others find a safer route.

Sam: Strider will look after them.

Frodo: I don’t suppose we’ll ever see them again.

Sam: We may yet, Mr. Frodo. We may.

Frodo: < turns, smiling > Sam, I’m glad you’re with me.

< Frodo and Sam descend the rocky slope. Scene fades out >

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
