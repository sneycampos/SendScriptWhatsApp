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
SHREK 2

[The DreamWorks Animation logo plays out. Credits saying "DreamWorks Pictures Presents" and "A PDI/DreamWorks Production" appear]

[A light shines down on a same storybook from the first movie. It opens, and an English-accented voice (Prince Charming) turns the pages and reads it this time.]

Prince Charming: Once upon a time in a kingdom far far away, the king and queen were blessed with a beautiful baby girl. And throughout the land, everyone was happy. Until the sun went down, and they saw that their daughter was cursed with a frightful enchantment that took hold each and every night. Desperate, they sought the help of a fairy godmother; who had them lock the young princess away in a tower, there to await the kiss of the handsome Prince Charming!

[Book transitions to Prince Charming, wearing a knight's armor and red cape, riding on horseback. He rides through a forest, snowy mountains and barren desert]

Prince Charming: It was he who would chance the perilous journey through blistering cold and scorching desert traveling for many days and nights, risking life and limb to reach the Dragon’s Keep.

EXT. - DRAGON'S KEEP

[Prince Charming arrives at the Dragon's Keep, an ominous castle surrounded by a moat of lava, but sees that the wooden bridge leading across the lava was destroyed by the Dragon from the first movie. Charming uses his bow to shoot a roped arrow to a wooden post on the other side and uses it as a zipline. He looks up at a tower that rises above the rest of the castle, a light shining from its window. He enters the Dragon's Keep]

INT. - DRAGON'S KEEP

Prince Charming: For he was the bravest...

[Prince Charming takes off his helmet, revealing himself to be the narrator's voice. He continues to speak aloud]

Prince Charming: …and most handsome…

[He takes off his hair net and dramatically swishes his hair]

Prince Charming: ...in all the land. And it was destiny that his kiss...

[He sprays air freshener in his mouth]

Prince Charming: …would break the dreaded curse.

[Prince Charming continues through the abandoned castle and reaches the princess' tower]

INT. - THE PRINCESS'S TOWER

[He enters the princess' room and makes his way to her bed where a figure lays down, obscured by the bed's curtains]

Prince Charming: He alone would climb to the highest room of the tallest tower to enter the princess’s chambers, cross the room to her sleeping silhouette, pull back the gossamer curtains to find her--

[Prince Charming pulls the curtain and gasps; the figure is no princess--it's Big Bad Wolf. He is annoyed by the interruption]

Big Bad Wolf: What?

Prince Charming: Princess…Fiona?

Big Bad Wolf: No!

Prince Charming: Oh, thank heavens. Where is she?

Big Bad Wolf: She’s on her honeymoon.

Prince Charming: Honeymoon?! With whom?!

----

[We see various scenes from Shrek and Fiona's honeymoon with the music "Accidentally in Love" by Counting Crows playing. They enter a giant gingerbread house and spend the night there. In the morning, Little Red Riding Hood knocks on the door, fleeing in terror after Shrek and Fiona answer the door. They take the basket she left and have a picnic on the beach. A wave crashes over Shrek and Fiona as they make out in the sand and the Little Mermaid takes Fiona's place. Fiona drags the mermaid by the tail, and throws her into the sea into a group of sharks. Later, Shrek has some dwarves forge Fiona's wedding ring. They run happily through a meadow where an angry mob emerges, chasing after them. Shrek gets caught a trap and villagers surround Fiona, who fends them off. They take turns farting in a mud bath, using fairies trapped in jars for light. They kiss in the moonlight, transitioning to...

EXT. - SWAMP

...their arrival back at Shrek's swamp]

Shrek: It’s so good to be home!

[Shrek scoops Fiona about in his arms and walks to the door of his home]

Shrek: Just you and me and…

[Singing can be heard from inside.]

INT. - SHREK'S HOUSE

[They open the door to find Donkey laying in Shrek's chair]

Donkey: 🎶Two can be as bad as one…🎶

Shrek: Donkey?

[Shrek sets Fiona down]

Donkey: Shrek! Fiona! Well aren’t you two a sight for sore eyes! Give us a hug, Shrek, you old love machine. [chuckles] And look at you, Mrs. Shrek. How ‘bout a side of sugar for the steed?

Shrek: Donkey, what are you doing here?

Donkey: Oh! I was just taking care of your love nest for you.

Shrek: Oh, you mean like… sorting the mail and watering the plants?

[Shrek gestures to piles of mail stacked on a stool and potted plants that have withered away]

Donkey: Yeah, and feeding the fish!

Shrek: I don’t have any fish.

Donkey: You do now. I call that one Shrek and the other Fiona.

[Donkey walks over to a fish bowl. The water is rancid and the two fish are clearly dead]

Donkey: That Shrek is a rascally devil. Get your…[mumbling]

Shrek: Oh, would you look at the time? Well I guess you’d better be going.

[Shrek opens the front door and beckons Donkey to head out]

Donkey: Hey wait a minute, don’t you want to tell me all about your trip? Or how about a game of Parcheesi?

[Donkey runs back over to the fireplace and Shrek groans in frustration]

Fiona: Um, actually--Donkey? Shouldn’t you be getting home to Dragon?

Donkey: Oh, yeah, that. I don’t know. She’s been all moody and stuff lately...so I thought I’d move back in with you guys!

Fiona: Well you know we’re always happy to see you, Donkey.

[Fiona kneels down to pat Donkey on the head, then Shrek puts his hands on her shoulders]

Shrek: But Fiona and I are married now. We need a little time, you know, to be together.

[Donkey smiles and stares at Shrek, not taking the hint]

Shrek: Just with each other.

[Donkey continues to stare]

Shrek: Alone.

Donkey: Say no more, say no more. You don’t have to worry about a thing. I will always be here to make sure nobody bothers you!

Shrek: Donkey!

Donkey: Yes, roomie?

Shrek: You’re bothering me.

Donkey: Oh, okay. All right, cool. I guess uh… me and Pinocchio was gonna catch a tournament, anyway, so uh.... maybe I’ll see y’all Sunday for a barbecue or something.

[Donkey solemnly walks out the door and shuts it behind him]

Shrek: He’ll be fine. Now, where were we?

[Fiona puts her hands on his arm]

Shrek: Oh. I think I remember.

[The two giggle and Shrek takes her in his arms. He leans her over for a kiss, but they are interrupted by Donkey, who is suddenly standing next to them again]

Shrek: Donkey!

[In his surprise, Shrek accidentally drops Fiona. He leans down to pick her up]

Donkey: I know, I know! Alone! I’m going! I’m going! Hey, but what do you want me to tell these other guys?

[Donkey opens the door, and Shrek and Fiona look up, puzzled]

EXT. - SHREK'S HOME

[A group of uniformed men stand outside, playing a fanfare with their trumpets and drums. A page steps forth with a scroll in his hand. After the fanfare is over, one of the trumpeters begins play the Hawaii Five-0 Theme Song. The page smacks him on the head with his scroll. Shrek and Fiona step outside of the house]

Page: Enough, Reggie. [clears throat] "Dearest Princess Fiona. You are hereby summoned to the Kingdom of Far, Far Away for a royal ball in celebration of your marriage...

[Upon hearing this news Shrek looks uneasy, while Fiona is smiling]

Page: ...at which time the King will bestow his royal blessing… upon you and your…eh...

[He looks up from the scroll and stares at Shrek]

Page: uh…Prince Charming. Love, the King and Queen of Far Far Away. A.K.A. Mom and Dad."

Fiona: Mom and Dad?

Shrek: Prince Charming?

Donkey: Royal ball?! Can I come?

Shrek: We’re not going.

Fiona & Donkey: What?!

Shrek: I mean, don’t you think they might be a bit… shocked to see you like this?

Fiona: Well, they might be a bit surprised. But they’re my parents, Shrek. They love me. And don’t worry, they're gonna love you too.

Shrek: Yeah, right. Somehow I don’t think I’ll be welcome at the country club.

Fiona: Will you stop it? They’re not like that.

Shrek: Then how do you explain Sergeant Pompous and the Fancy Pants Club Band?

[The page gives a huff, and walks off with the rest of the men]

Fiona: Oh, come on! You could at least give them a chance.

Shrek: To do what? Sharpen their pitchforks?

Fiona: No! They just want to give you their blessing.

Shrek: Oh, great. Now I need their blessing?

Fiona: Well, if you want to be a part of this family, yes!

Shrek: And who says I want to be part of this family?

Fiona: Uh, you did! When you married me?!

Shrek: Well, there’s some fine print for you!

Fiona: Ugh! So that’s it, you won’t come?

Shrek: Trust me. It’s a bad idea. We are not going! And that’s final!

[After a silence, we cut to Fiona throwing the last of their luggage into the back of their carriage]

Donkey: Hey, come on, Shrek! We don’t want to hit traffic!

Gingy: Don’t worry! We’ll take care of everything.

[Shrek reluctantly leaves the house. Gingy, Pinocchio, the Three Little Pigs, Big Bad Wolf, and the Three Blind Mice run inside. One of the mice is running to catch up]

Blind Mouse: Hey, wait for me! Oof!

[The door shuts and the mouse runs into it. Shrek groans as he hears sounds of glass breaking and music playing. Shrek, Fiona, and Donkey get in the carriage and set out for Far Far Away]

Donkey: Hit it! 🎶Move ‘em on! Head ‘em up! Head ‘em up, move ‘em on! Head ‘em up! Move ‘em down! Rawhide! Move 'em on! Head ‘em up! Head ‘em up! Move ‘em on! Move ‘em on! Head ‘em up! Rawhide! Ride ‘em up! Move ‘em on!🎶

COUNTRYSIDE

Donkey: 🎶Head ‘em up! Head ‘em up! Move ‘em on! Rawhide! Knock ‘em out! Pound ‘em dead! Make ‘em tea! Buy ‘em drinks! Meet their mamas! Milk ‘em hard! Rawhide! Yee-haw!🎶

[Later, they reach a sign that reads "700 miles to Far Far Away"]

Donkey: Are we there yet?

Shrek: No.

MOUNTAINS

[They are now riding in the rain over a rocky terrain]

Donkey: Are we there yet?

Fiona: Not yet.

[They are now on a snowy mountain. A sign reads "200 miles to Far Far Away"]

Donkey: Okay, are we there yet?

Fiona: No.

[More time passes and they are riding through thick snow]

Donkey: Are we there yet?

Shrek: No!

[They are riding out of the snowy area]

Donkey: Are we there yet?

Shrek: (sarcastically) Yes.

Donkey: Really?

Shrek: No!

[They pass by a waterfall and over a bridge]

Donkey: Are we there yet?

Fiona: No!

FOREST

[They pass a sign that reads "100 miles to Far Far Away"]

Donkey: Are we there yet?!

Shrek: No, we are not!

[Later as they pass through the forest, their dwarf driver is now covering his ears as he holds the reigns]

Donkey: Are we there yet?!

Shrek & Fiona: No!

[Shrek begins mimicking Donkey]

Donkey: Are we there yet?

Shrek: Are we there yet?

Donkey: Hey, that’s not funny.

Shrek: Hey, that’s not funny.

Donkey: Hey, that’s really immature.

Shrek: Hey, that’s really immature.

Donkey: See, this is why nobody likes ogres.

Shrek: See, this is why nobody likes ogres.

Donkey: Alright, your loss!

Shrek: Alright, your loss!

Donkey: I’m gonna just stop talking!

Shrek: Finally!

Donkey: But this is taking forever, Shrek. And there ain't no in-flight movie or nothing!

Shrek: The Kingdom of Far Far Away, Donkey. That’s where we’re going. Far Far… [whispers] Away!

Donkey: All right, all right, I get it. I’m just so darn bored!

Shrek: Well, find a way to entertain yourself!

[Donkey sighs. After a pause he sighs heavily. Then he makes a popping sound with his mouth. Then pops again. And again.]

Shrek: Oh! For 5 minutes. Could you not be yourself… for 5 minutes!

[Fiona leans against the window and looks out. She looks back to see Donkey's mouth lean forward. She braces herself and Donkey makes the popping noise again]

Shrek: [screams] Are we there yet?!

Fiona: [chuckles] Yes!

Donkey: Oh, finally!

[Off in the distance they see the Kingdom of Far Far Away]

INT. - KINGDOM OF FAR FAR AWAY

[They pass through the front gates]

Donkey: Wow! It’s going to be champagne wishes and caviar dreams from now on!

[The streets are paved and there are buildings everywhere. People fill the sidewalks and carriages fill the road]

Donkey: Hey, good-looking! We’ll be back to pick you up later! Ooh, pantyhose!

[Fiona looks out with excitement, while Shrek remains cautious]

Shrek: We are definitely not in the swamp anymore.

[A crossing guard dressed in full armor brings them to a halt as a limousine-esque carriage passes by]

Guard: Halt!

[A man walks up to the horses and cleans them off, and the carriage driver tosses him a coin]

Woman: Hey, everyone, look!

[Two women take note of their carriage and start following it. Soon, others take notice and join in. Fiona turns to Shrek, who is clearly not enjoying this. She gives him a reassuring smile, and he tries to return one back]

Donkey: Hey, ladies! Nice day for a parade, huh? Yeah! You working that hat!

[A loud crowd has now amassed behind them. They head up the avenue and towards the palace further up the road]

Donkey: Swimming pools! Movie stars!

EXT. - FAR FAR AWAY PALACE

[A cheering crowd is gathered in front of the palace, filling up the entirety of the square. Confetti rains and fanfare plays. The King and Queen stand waiting in front of the palace doors. The carriage pulls and stops in front of the red carpet leading to the palace. An announcer pulls out a scroll and reads it aloud]

Announcer: Announcing the long-awaited return of the beautiful Princess Fiona and her new husband!

[The crowd cheers]

Fiona: Well, this is it.

King Harold: This is it.

Announcer: This is it.

[A man with a box of doves gets ready to open it]

Man: This is it.

[The birds are released and a fanfare is played as Shrek, Fiona, and Donkey step out of the carriage. The crowd gasps, the fanfare dies off, and one of the doves smacks into a wall and falls to the ground. The King and Queen stand with mouths wide open. It is totally silent. A baby starts cries and laughs]

Donkey: Uh… why don’t you guys go ahead? I’ll park the car.

[Donkey jumps into the carriage and the driver starts riding off. Shrek takes Fiona's hand and starts walking forward]

Shrek: So… (chuckles) ...you still think this was a good idea?

Fiona: Of course! Look! Mom and Dad look happy to see us.

[The King and Queen start walking forward and talk amongst themselves]

King Harold: Who on earth are they?

Queen Lillian : I think that’s our little girl.

King Harold: That’s not little! That’s a really big problem! Wasn’t she supposed to kiss Prince Charming and break the spell?

Queen Lillian: Well, he’s no Prince Charming, but they do look--

Shrek: Happy now? We came. We saw them.

[Shrek nervously chuckles as they pass by a few men carrying pitchforks]

Shrek: Now let’s go before they light the torches.

Fiona: They’re my parents!

Shrek: Hello? They locked you in a tower!

Fiona: Hey! That was for my own--

King Harold: Good! Now here’s our chance. Let’s go back inside and pretend we’re not home!

[King Harold tries to start walking back but Queen Lillian urges him forward]

Queen Lillian: Harold, we have to be--

Shrek: Quick! While they’re not looking we could make a run for it.

Fiona: Shrek! Stop it! Everything’s gonna be--

King Harold: A disaster! There is no way--

Fiona: You can do this.

Shrek: I really--

King Harold: Really--

Queen Lillian: Really--

Shrek: Don't--

Queen Lillian: Want--

Shrek: To…

Queen Lillian: Be--

Shrek/King Harold: Here.

[The four stand facing each other. After a brief silence, Fiona goes up to hug King Harold and Queen Lillian]

Fiona: Mom, Dad. I’d like you to meet my husband…Shrek.

[Shrek stands nervously. Queen Lillian tries to appear happy to meet him, while King Harold doesn't even try to hide his disgusted look]

Shrek: Well, um… It’s easy to see where Fiona gets her good looks from.

[Shrek chuckles nervously. King Harold glares, Queen Lillian is apprehensive, and Fiona cringes]

INT. - FAR FAR AWAY PALACE. DINING ROOM.

[We cut Shrek to gulping at the dinner table. To his sides sits Fiona and Queen Lillian, and across from him sits King Harold. Queen Lillian looks around nervously and King Harold glares at Shrek. Shrek, unsure of how to eat the food on his plate properly, plops it in his mouth, and grins with the food still stuck in his teeth. Queen Lillian cringes. Fiona tries to sip her drink courteously, but lets out a loud belch and covers her mouth]

Fiona: Excuse me.

[Shrek and Fiona laugh]

Shrek: Better out than in, I always say, eh, Fiona?

Shrek: That’s good...

[They stop laughing after neither King Harold nor Queen Lillian join in]

Shrek: I guess not...

[We hear Donkey yelling in another room]

Donkey: What do you mean, "not on the list"? Don’t tell me you don’t know who I am.

[Donkey comes bursting in the room from the kitchen]

Donkey: Hey! What’s happening, everybody? Thanks for waiting. You know I had the hardest time finding this place.

[Donkey pulls up a seat next to King Harold]

King Harold: No! No! Bad donkey! Bad! Down!

Fiona: No, no, no, Dad! It’s all right! It’s all right. He’s with us. He helped rescue me from the dragon.

Donkey: Yup, that's me. The noble steed. Hey, waiter! How ‘bout a bowl for the steed?

Shrek: Oh, boy...

[Shrek loudly slurps from his bowl]

Fiona: Um, Shrek?

Shrek: Yeah?..Oh! Sorry! Great soup, Mrs. Q. Mmm!

Fiona: No, no. Darling.

[Fiona demonstrates that the bowl he ate from is for washing his hands]

Shrek: Oh!

[The rest of the dinner table does the same]

Queen Lillian: So, Fiona, tell us about where you live.

Fiona: Well…Shrek owns his own land. Don’t you, honey?

Shrek: Oh, yes! It’s in an enchanted forest abundant in squirrels and...cute little duckies and--

Donkey: What?! (laughing) I know you ain’t talking about the swamp!

Shrek: (gritting his teeth) Donkey!

King Harold: (sarcastically) An ogre from a swamp. Oh! How original.

[Donkey dunks his mouth into his bowl and starts drinking]

Queen Lillian: Well, I suppose that would be a fine place to raise the children...

[King Harold starts choking on his drink and Shrek accidentally swallows his spoon. They both gag until Shrek spits his spoon out onto the table]

Shrek: (chuckling) It’s a bit early to be thinking about that, isn’t it?

King Harold: Indeed. I just started eating.

Queen Lillian: Harold!

Shrek: (offended) What’s that supposed to mean?

Fiona: Dad. It’s great, okay?

King Harold: Well, for his type, yes.

Shrek: My type?!

Donkey: Uhhh--I gotta go to the bathroom.

[The chef and a host of servers enter the room with dinner, including a whole turkey , lobster, and a pig.]

Chef: Dinner is served!

Donkey: Never mind. I can hold it.

[The servers set the food on the table]

Chef: Bon appetit!

Donkey: Ooh, Mexican food! My favorite!

Queen Lillian: Well, let’s not just sit here with our tummies rumbling. Everybody dig in!

Donkey: Don’t mind if I do, Lillian.

King Harold: So, I suppose any grandchildren I could expect from you would be--

Shrek: Ogres, yes!

[King Harold pulls the lobster towards himself, Shrek does the same with the turkey]

Queen Lillian: Not that there’s anything wrong with that. Right, Harold?

King Harold: Oh, no! No! Of course, not! That is, assuming you don’t eat your own young!

[King Harold violently stabs the lobster with a knife]

Fiona: Dad!

Shrek: Oh, no, we usually prefer the ones who’ve been locked away in a tower!

[Shrek rips off both drumsticks off the turkey and bites them]

Fiona: Shrek, please!

King Harold: I only did that because I love her!

[King Harold pierces a piece from the lobster and shoves it to the boiler]

Shrek: Oh, aye! Daycare or dragon-guarded castle?!

[Shrek rips out the wishbone from the turkey]

King Harold: You wouldn’t understand! You’re not her father!

[Fiona sighs as Shrek and King Harold continue to rip apart their food, sending bits and pieces flying across the table]

Queen Lillian: It’s so nice to have the family together for dinner.

[Shrek and King Harold tug over the pig in the middle of the table, accidentally sending it flying upwards]

Queen Lillian: Harold!

Fiona: Shrek!

Shrek: Fiona!

King Harold: Fiona!

Fiona: Mom!

Queen Lillian: Harold…

Donkey: Donkey!

[The pig lands on the table with a thud. Fiona looks at Shrek and King Harold, and then runs out of the room]

INT. - FAR FAR AWAY PALACE. FIONA'S BEDROOM.

[Fiona enters her room where she stayed as a child. She looks affectionately at a doll of a princess, then moves on. She goes out to her balcony and cries a single tear, then suddenly notices bubbles floating all around her. A woman in the distance floats inside of a bubble and begins to sing.]

Fairy Godmother: 🎶Your fallen tears have called to me / So, here comes my sweet remedy / I know what every princess needs / For her to live life happily…🎶

[The woman floats up to her and pops the bubble. She notices Fiona, and both gasp]

Fairy Godmother: Oh! Oh, my dear. Oooh, look at you, you're all um...grown up. [chuckles]

Fiona: Um, who are you?

Fairy Godmother: Oh, sweet pea! I’m your Fairy Godmother.

Fiona: I have a fairy godmother?

Fairy Godmother: Shu-shu-shu--shush, shush. Now, don’t worry. I’m here to make it all better. With...just...a…

[Fairy Godmother flies into the room and starts singing again]

Fairy Godmother: 🎶...wave of my magic wand! / Your troubles will soon be gone! / With a flick of the wrist and just a flash / You’ll land a prince with a ton of cash🎶

[She conjures up a load of gold coins]

Fairy Godmother: 🎶A high-priced dress made by mice no less / Some crystal glass pumps / And no more stress🎶

[Out of the closet comes a sparkling gold dress that floats its way onto Fiona]

Fairy Godmother: 🎶Your worries will vanish, your soul will cleanse / Confide in your very own furniture friends🎶

[The furniture starts to animate and move around. They begin to sing along]

Fairy Godmother: 🎶We’ll help you set a new fashion trend!🎶

[Suddenly they are in a spacious room. A chair swoops up Fiona and carries her over to a mirror]

Fairy Godmother: 🎶I’ll make you fancy, I’ll make you great🎶

Furniture: 🎶The kind of girl a prince would date!🎶

Fairy Godmother: 🎶They’ll write your name on the bathroom wall…🎶

Mirror: For a happy ever after, give Fiona a call!

Fairy Godmother: 🎶A sporty carriage to ride in style / Sexy man boy chauffeur, Kyle🎶

[A giant pink carriage appears with the aforementioned Kyle laying down on top of it, who cracks a whip. The furniture dances around Fiona]

Fairy Godmother: 🎶Banish your blemishes, tooth decay / Cellulite thighs will fade away! / And oh, what the hey! / Have a bichon frisé!🎶

[A small puppy lands in Fiona's hands. Various makeup appliances begin to pester Fiona]

Fairy Godmother: 🎶Nip and tuck, here and there / To land that prince with the perfect hair / Lipstick liners, shadows blush / To get that prince with the sexy tush / Lucky day, hunk buffet / You and your prince take a roll in the hay / You can spoon on the moon / With the prince to the tune🎶

[Fairy Godmother and Kyle begin to dance and the music gets faster and more frantic]

Fiona: Stop, please!

Fairy Godmother: 🎶Don’t be drab, you’ll be fab / Your prince will have rock-hard abs / Cheese soufflé, Valentine’s Day / Have some chicken fricassee! / Nip and tuck, here and there / To land that prince with the perfect hair--🎶

Fiona: Stop!

[The music stops and Fiona's fancy dress turns to dust]

Fiona: (chuckles) Look...thank you very much, Fairy Godmother, but I really don’t need all this.

[Fairy Godmother and the furniture collectively gasp, the furniture begins to shuffle away, grumbling]

[Shrek starts knocking at the door and a shelf moves over to blocks it]

Shrek: Fiona? Fiona?

[Shrek forces his way in and to see Fairy Godmother floating next to Fiona, who has the puppy in her arms. The furniture move back to their original positions. Fairy Godmother looks surprised to see Shrek. Donkey comes running in]

Donkey: Oh! You got a puppy? All I got in my room was shampoo.

Fiona: Oh...uh…Fairy Godmother, furniture…I’d like you to meet my husband, Shrek.

Fairy Godmother: (in disbelief) Your husband? What--what did you say? When did this happen?

Fiona: Shrek is the one who rescued me.

Fairy Godmother: But that can’t be right!

Shrek: Oh, great, more relatives!

Fiona: She’s just trying to help.

Shrek: Good! She can help us pack. Get your coat, dear. We’re leaving.

[Shrek opens up his suitcase]

Fiona: What?

Donkey: Leaving? I don’t want to leave.

Fiona: When did you decide this?

Shrek: Shortly after arriving.

Fiona: Look, I I’m sorry…

Fairy Godmother: No, no, no, no, that’s all right. I need to go, anyway. But remember, dear, if you should ever need me…happiness…is just a teardrop away.

[Fairy Godmother holds out a business card to Fiona, but Shrek snatches it out of her hand]

Shrek: Thanks, but we’ve got all the happiness we need. Happy, happy, happy!

Fairy Godmother: So I see...let’s go, Kyle.

[Fairy Godmother steps out the balcony and flies away in the pink carriage with Kyle driving]

Fiona: Very nice, Shrek.

Shrek: What? I told you coming here was a bad idea.

Fiona: You could’ve at least tried to get along with my father!

Shrek: You know, somehow I don’t think I was going to get Daddy’s blessing even if I did want it!

[The puppy starts barking]

Fiona: Well, do you think it might be nice if somebody asked me what I wanted?

Shrek: Sure. Do you want me to pack for you?

Fiona: You’re unbelievable! You’re behaving like a…

Shrek: Go on! Say it!

Fiona: Like an ogre!

Shrek: Well, here’s a news flash for you! Whether your parents like it or not… I am an ogre!

[The puppy continues to bark and Shrek roars in its face. It stops and cowers]

Donkey: Wow! So this was right in ogres are like onions.

Shrek: And guess what, princess? That’s not about to change.

Fiona: I’ve made changes for you, Shrek. Think about that.

[Fiona steps out and the lets the door slam behind her]

Donkey: That’s real smooth, Shrek. "I’m an ogre!" [mimics Shrek roars]

[Shrek goes to open the door but hears Fiona crying. He sighs and leans his back to the door]

INT. - FAR FAR AWAY PALACE. MASTER BEDROOM.

[Up one floor from Fiona's room, King Harold stands at a balcony. He has been listening the whole time]

King Harold: I knew this would happen.

[Queen Lillian speaks from inside the room]

Queen Lillian: You should. You started it.

[King Harold walks back inside the bedroom. Queen Lillian is sitting in bed with a book in hand]

King Harold: I can hardly believe that, Lillian. I mean really, he's the ogre. Not me.

Queen Lillian: I think, Harold, you’re taking this a little too personally. This is Fiona’s choice.

King Harold: Yes, but she was supposed to choose the prince we picked out for her! I mean, you expect me to give my blessings to this…this...thing?

Queen Lillian: Fiona does. And she’ll never forgive you if you don’t. I don’t want to lose our daughter again, Harold.

[King Harold sighs]

Queen Lillian: Ugh, you act as if love is totally predictable. Don’t you remember when we were young? And oh, we used to walk down by the lily pond and they were in bloom…

King Harold: (starting to reminisce) Our first kiss... (snapping out of it) it’s not the same! I don’t think you realize that our daughter has married a monster!

Queen Lillian: Oh, stop being such a drama king.

King Harold: Fine! Fine! Pretend there’s nothing wrong! (dances around) La, di, da, di, da, di da! Isn’t it all wonderful! I’d like to know how it could get any worse!

[From behind him, Fairy Godmother's carriage floats up to the balcony and Fairy Godmother opens the door]

Fairy Godmother: Hello, Harold.

[King Harold yelps]

Queen Lillian: What happened?

King Harold: Uh, nothing! Nothing, dear! Just the old crusade wound playing up a bit! [chuckles] I’ll... just stretch it out here for a while!

[He walks out to the balcony and shuts the doors behind him]

Fairy Godmother: You better get in. We need to talk.

King Harold: Actually, Fairy Godmother, off to bed. [yawns] Already taken my pills, and they tend to make me a bit drowsy. So, um how about…

[A large man steps behind King Harold]

King Harold: ...uh, we, we make this a quick visit. What? What?

INT. - GODMOTHER'S CARRAIGE

[The man shoves him inside the carriage and enters after him. King Harold sits between the man and another similar looking man to his other side]

King Harold: Oh, hello. Ha-ha-ha!

[The carriage flies off]

King Harold: So, what’s new?

[Fairy Godmother sits across from King Harold, and next to her sits Prince Charming]

Fairy Godmother: You remember my son, Prince Charming?

King Harold: Charming! Oh! Is that you? My gosh! It's been years! How--when...when, when, when did you get back?

Prince Charming: (calmly) Oh, about 5 minutes ago, actually... (angrily) after I endured blistering winds! Scorching desert! I climbed to the highest room of the tallest tower–-

[Prince Charming, who is now standing up from his seat, sits back down by Fairy Godmother and shushed]

Fairy Godmother: Mummy can handle this.. (continuing her son's rant) He endures blistering winds and scorching desert! He climbs to the highest bloody room of the tallest bloody tower!

King Harold: But, but, but...

Fairy Godmother: And what does he find? Some gender-confused wolf telling him that his princess--

King Harold: If I could just--

Fairy Godmother: --is already married!

King Harold: I mean, It wasn’t my fault. He didn’t get there in time.

Fairy Godmother: Stop the car!

[The carriage comes to a sudden stop]

Fairy Godmother: Harold...

[The men crack their knuckles]

Fairy Godmother: You force me to do something I really don’t want to do.

[Fairy Godmother rolls down the window]

King Harold: (gasps) Where are we?

[The carriage is stopped at a drive-thru window]

PRICILLA: Well, hi, there! Welcome to Friar’s Fat Boy, may I take your order?

Fairy Godmother: My diet is ruined! I hope you’re happy. (turns to the clerk) Er… okay. Two Renaissance Wraps, no mayo… chili ring...

Prince Charming: I’ll have the Medieval Meal.

Fairy Godmother: Yeah, one Medieval Meal and Harold… curly fries?

King Harold: No, thank you.

Fairy Godmother: Sourdough soft taco, then? What do you want?

King Harold: No, really, I’m fine.

PRICILLA: Your order, Fairy Godmother.

[The clerk hands her their order in a bad, and then a large battle-axe]

PRICILLA: And this comes with the Medieval Meal.

Fairy Godmother: There you are, dear.

[Fairy Godmother hands Prince Charming the axe. The carriage takes off]

Fairy Godmother: You see we made a deal, Harold, and I assume you don’t want me to go back on my part.

King Harold: (sighs) Indeed not.

Fairy Godmother: So Fiona and Charming will be together.

King Harold: Yes.

Fairy Godmother: Oh, believe me, Harold. It’s what’s best. Not only for your daughter…

[Fairy Godmother bites into her burrito and talks with her mouth full]

Fairy Godmother:...but for your Kingdom.

INT. - FAR FAR AWAY PALACE. MASTER BEDROOM.

[They arrive back at the balcony of the master bedroom and King Harold is pushed out]

King Harold: What am I supposed to do about it?

[The battle axe is tossed into King Harold's hands]

Fairy Godmother: Use your imagination.

[Fairy Godmother shuts the door and the carriage flies off. King Harold stands unsure, still clutching the axe, staring at the moon]

EXT. - THE POISON APPLE. NIGHT.

[A hooded man on horseback arrives at The Poison Apple, a ramshackle tavern. The man is King Harold in disguise. He dismounts his horse and enters the tavern. He knocks on the door and an eye peeks out]

CYCLOPS: Oh…uh come on in, Your Majesty.

[Cyclops opens the door and lets King Harold in]

INT. - THE POISON APPLE.

[The tavern is a seedy gathering of misfits. Pirates and witches sit at the tables. Two trees arm wrestle and two dwarfs fight. Someone is playing darts with throwing axes. Captain Hook plays the piano and sings. King Harold tries to hide his identity with his cloak and walks over to the bar. Next to him, the Headless Horseman downs a drink and burps. King Harold tries to get the attention of the bartender]

King Harold: (clears his throat) Um, excuse me?

[He turns to look down at a feminine frog sipping a martini on a stool]

Miss Frog: Hey. Do I know you?

King Harold: Uh, no, you must be mistaking me for someone else. Uh… excuse me. I’m looking for the Ugly Stepsister.

[The bartender turns around and leans on the bar, glaring at King Harold. It is Doris, otherwise known as the Ugly Stepsister]

King Harold: Ah! There you are. Right. You see, I...I need to have someone taken care of.

Doris: (in a deep voice) Who’s the guy?

King Harold: Well, he’s not a guy, per se. Um… he’s an ogre.

[The whole tavern gasps and Captain Hook stops playing]

Doris: Hey, buddy, let me clue you in. There’s only one fella who can handle a job like that, and, frankly…he don't like to be disturbed.

King Harold: Where could I find him?

[King Harold knocks on a door and lets himself in. The room is completely dark, except for the moonlight shining through a window. A shadowy figure sits with their boots on a table]

King Harold: H-Hello?

[A pair of bright green eyes appear from the darkness]

Puss in Boots: Who dares enter my room?

King Harold: Sorry! I hope I’m not interrupting, but I’m told you’re the one to talk to about an...ogre problem?

Puss in Boots: You are told correct, but for this I charge a great deal of money.

King Harold: Would… this be enough?

[King Harold tosses a small sack onto the table. Out from the shadows, a sword slices open the sack and gold coins spill out onto the table]

Puss in Boots: Hmm. You have engaged my valuable services...Your Majesty. Just tell me where I can find this ogre.

INT. - FAR FAR AWAY PALACE. FIONA'S BEDROOM. NIGHT.

[Shrek and Fiona lay in bed, which is just big enough to fit them both. Fiona is fast asleep while Shrek is awake, tossing and turning. He notices an ornate clock that features a prince and princess kissing, and then turns onto his back. He then stares at a poster of a handsome man named Sir Justin stuck to the bottom of the canopy above them. Shrek gets out of bed and looks out the window and stares at the Far Far Away sign. He goes over to the fireplace to warm up, but notices Fiona's childhood toys on the mantelpiece. One is a figure of a knight, who is about to slay a fallen ogre. Shrek picks up a toy princess that resembles Fiona and it speaks]

Princess Toy: Dear knight, I pray that you take this favor as a token of my gratitude.

[Shrek puts the toy back and then looks over at a small chest on a table in the corner of the room. He opens it to see a book inside, but the box start playing music. He quickly shuts it and looks over to make sure Fiona is still sleeping. He quickly opens the box and snatches the book out from it. He opens it, and Fiona's voice reads it in his head]

Fiona: Dear Diary. Sleeping Beauty is having a slumber party tomorrow, but Dad says I can’t go. He never lets me out after sunset.

[He turns the page to the next entry in the diary]

Fiona: Dad says I’m going away for a while. Must be like some finishing school or something.

[He scoffs and turns the page]

Fiona: Mom says that when I’m old enough, my Handsome Prince Charming will rescue me from my tower and bring me back to my family!

[Turns the page]

Fiona: And we'll all live happily ever after!

[With his mouth open, Shrek turns to the next page]

Fiona: Mrs. Fiona Charming.

[He frantically turns the pages which all read aloud "Mrs. Fiona Charming". He is surprised by a knock at the door, and sets the diary down. He opens the door to see King Harold standing in the hall]

King Harold: Sorry. I hope I’m not interrupting anything.

Shrek: No, no. I was just reading a, uh…a scary book.

King Harold: I was hoping you’d let me apologize for my despicable behavior earlier.

Shrek: Okay?

King Harold: I don’t know what came over me. Do you suppose we could pretend it never happened and start over?

Shrek: Look, Your Majesty, I just…

King Harold: Please, call me Dad.

Shrek: Dad. We both acted like ogres. Maybe we just need some time to get to know each other.

King Harold: Excellent idea! I was actually hoping you might join me for a morning hunt. A little...father-son time? I know it would mean the world to Fiona.

[Shrek stares back at Fiona, still asleep, then sighs]

King Harold: Shall we say 7:30 by the old oak?

FOREST. DAY.

[Shrek and Donkey are walking through a thick forest. Far Far Palace is far off over the hills behind them]

Shrek: Face it, Donkey! We’re lost.

Donkey: We can’t be lost! We followed the king’s instructions exactly. What did he say? "Head to the darkest part of the woods…"

Shrek: Aye.

Donkey: "Past the sinister trees with those scary-looking branches."

Shrek: Check.

[Donkey runs over to a bush in the shape of a busty figure]

Donkey: Yeah, and there’s the bush shaped like Shirley Bassey!

Shrek: We passed that bush 3 times already!

Donkey: Hey, you were the one who said you didn't want to stop and get directions.

Shrek: Oh, great. My one chance to fix things up with Fiona’s dad, and I end up lost in the woods with you!

Donkey: Alright, you don’t have to get huffy with me, I’m only trying to help.

Shrek: I know! I know. (sighs) I’m sorry, all right?

Donkey: Hey, don’t worry about it.

Shrek: I just really need to make things work with this guy.

Donkey: Yeah, sure. Now let’s go bond with Daddy.

[Someone is looking at Shrek and Donkey from up in a tree. Purring sounds are heard]

Shrek: Well, well, well, Donkey. I know it was kind of a tender moment back there, but the purring?

Donkey: Man, what are you talking about? I ain’t purring.

Shrek: Oh, sure. What’s next? A hug?

Donkey: Hey, Shrek. Donkeys don’t purr. What do you think I am, some kind of a…

[A figure jumps down onto the path in front of them. It is an orange cat, wearing a hat, cape, boots, and brandishing a fencing sword]

Puss in Boots: Ha-ha! Fear me, if you dare! (hisses)

Shrek: Hey, look! A little cat.

Donkey: Look out, Shrek! He got a piece!

Shrek: It’s a cat, Donkey. Come here, little kitty, kitty. Come on, little kitty. Come here. Oh! Come here, little kitty.

[Puss in Boots throws off his cape, sticks his sword into the ground, and leaps towards Shrek. With his claws drawn he grabs onto Shrek's leg. Shrek screams in pain]

Donkey: Hold on, Shrek! I’m coming!

[Puss in Boots is climbing all over Shrek and gets into his clothes]

Shrek: Come on! Oh, get it off! Oh, get it off! Oh, God. Oh… No! Ooh! Aagh!

[Puss in Boots comes ripping out the front of Shrek's shirt, and then digs his claws into his leg again]

Donkey: Look out, Shrek! Hold still!

Shrek: Get it off!

Donkey: Shrek! Hold still!

[Donkey tries to kick Puss in Boots with his hind legs, but Puss dodges and accidentally kicks Shrek in the crotch. Shrek drops to his knees and clutches the area]

Donkey: Did I miss?

Shrek: No. You got them.

[Puss in Boots leaps back over them, cartwheeling in the air, lands back in his boots and picks up his hat and sword]

Puss in Boots: Now, ye ogre, pray for mercy from… Puss…in Boots!

[He cuts a letter P mark in a tree, similar to Zorro]

Shrek: (infuriated) Ohh, I’ll kill that cat!

Puss in Boots: Ah-ha-ha!

[Puss in Boots starts coughing and then heaving onto the floor. Shrek and Donkey stand confused until Puss finally spits out a hairball]

Puss in Boots: (chuckles) Hairball.

Donkey: Oh! That is nasty!

[Shrek picks Puss in Boots up by the scruff]

Shrek: What do you reckon we should do with him?

Donkey: I say we take the sword and neuter him right here. Give him the Bob Barker treatment!?

Puss in Boots: (frightened) Oh, no! Por favor! Please! I implore you! It was nothing personal, Señor! I was doing it only for my family. My mother, she is sick. And my father lives off the garbage! The king offered me much in gold and I have a litter of brothers…

[Shrek covers Puss in Boots' mouth with his finger]

Shrek: Whoa...whoa...whoa, whoa, whoa, whoa! Fiona’s father paid you to do this?

Puss in Boots: The rich King? Sí.

[Shrek drops Puss in Boots to the ground and he screeches]

Shrek: Well, so much for Dad’s royal blessing.

Donkey: Oh, come on, Shrek, don’t feel bad. Almost everybody that meets you wants to kill you.

[Shrek sits down on a nearby rock, looking down]

Shrek: Gee, thanks. (sighs) Maybe Fiona would’ve been better off if I were some sort of Prince Charming.

Puss in Boots: Sí, that’s what the King said.

[Donkey glares at Puss in Boots]

Puss in Boots: Oh, uh… sorry. I thought that question was directed at me.

Donkey: Shrek, Fiona knows you’d do anything for her.

Shrek: Well, it’s not like I wouldn’t change if I could. I just… I just wish I could make her happy. [tiny pauses out] Hold the phone…

[Shrek pulls out the business card he took from Fairy Godmother earlier. He reads it]

Shrek: "Happiness. A tear drop away." Donkey! Think of the saddest thing that’s ever happened to you.

Donkey: Aw, man, where do I begin? Well, first there was the time that old farmer tried to sell me for some magic beans. I ain't never got over that. Then this fool went off and had a party and he have the guests trying to pin the tail on me. Then they got all drunk and start beating me with a stick going, "Piñata! Piñata!" What is a piñata, anyway?!

Shrek: No, Donkey! I need you to cry!

Donkey: Yeah, well don’t go projecting on me! I know you’re feeling bad, but you gotta let your own--

[Puss in Boots forcefully steps on Donkey's hoof. Donkey screams in pain]

Donkey: You little, hairy, litter-licking sack of...

[Donkey sheds a tear, and Shrek lets it fall onto the card. A bubble is conjured, and Fairy Godmother appears in it]

Fairy Godmother: What? Is it on? Is it on? [clears throat] This is Fairy Godmother. I’m either away from my desk or with a client. But if you come by the office, we’ll be glad to make you a personal appointment. Have a happy ever after.

[The bubble bursts into sparkling dust]

Donkey: Oh…

Shrek: Are you up for a little quest, Donkey?

Donkey: That’s more like it! Shrek and Donkey, on another whirlwind adventure! 🎶Ain’t no stopping us now! Whoo! We’re on the move!🎶

[Shrek and Donkey start walking off]

Puss in Boots: Stop, Ogre! I have misjudged you.

Shrek: Join the club. We’ve got jackets.

Puss in Boots: On my honor, I am obliged to accompany you until I have saved your life as you have spared me mine.

Donkey: I'm sorry, the position of annoying talking animals has already been taken. Let’s go, Shrek! Shrek?

[Shrek looks down at Puss in Boots, who gives him a cute, helpless look. Shrek smiles]

Donkey: Shrek!

Shrek: Aw, come on, Donkey. Look at him… in his wee little boots. You know, how many cats can wear boots? Honestly. Aw, let’s keep him!

Donkey: Say what?!

[Puss purrs and Shrek marvels at his cuteness]

[Donkey groans]

[Shrek scoops him up into his arms and begins walking with Donkey]

Shrek: Aw, listen. He’s purring!

Donkey: Oh, so now it’s cute!

Shrek: Aw, come on, Donkey. Lighten up.

Donkey: Lighten up? Oh, I should lighten up?! Look who’s telling who to lighten up!

INT. - FAR FAR AWAY PALACE. FIONA'S BEDROOM. MORNING.

[Fiona is awaken by the puppy licking her nose]

Fiona: [giggles] Shrek!

[She looks up and the dog barks. She sits up with a concerned look on her face]

Fiona: Shrek?

[She gets up and walks to the balcony, only to notice the diary opened face down. She picks it up to a page of a drawing of Fiona and a prince kissing]

EXT. - FAR FAR AWAY PALACE. MORNING.

[King Harold and Queen Lillian are with servants outside in a courtyard, looking at different samples of carpet. King Harold looks distracted]

Queen Lillian: They’re both festive, aren’t they? What do you think, Harold?

King Harold: Um… yes, yes. Fine. Fine.

[Queen Lillian scoffs and sends the servants away]

Queen Lillian: Try to at least pretend you’re interested in your daughter’s wedding ball.

King Harold: Honestly, Lillian, I don’t think it matters. How do we know there will even be a ball?

[Fiona steps out from the palace doors]

Fiona: Mom! Dad!

Queen Lillian: Oh, hello, dear.

King Harold: What’s that, Cedric? Right! Coming!

[King Harold walks off before Fiona reaches them]

Fiona: Mom, have you seen Shrek?

Queen Lillian: I haven’t. You should ask your father. Be sure and use small words, dear. He’s a little slow this morning.

[King Harold walks up to Cedric, a servant, who is carrying a bowl]

Cedric: Can I help you, Your Majesty?

King Harold: Ah, yes! Um…

[King Harold sticks his finger into the bowl and tastes it]

King Harold: Mmm! Exquisite. What do you call this dish?

Cedric: That would be the dog’s breakfast, Your Majesty.

King Harold: Ah, yes. Very good, then. Carry on, Cedric.

[Fiona catches up and Cedric walks away]

Fiona: Dad? Dad, have you seen Shrek?

King Harold: Uh, no I haven’t, dear.

[King Harold walks off again, going up to servants and trying to appear busy]

King Harold: I’m sure he just went off to look for a nice… mud hole to cool down in. You know, after your little spat last night.

Fiona: Oh. You heard that, huh?

[King Harold continues to walk away but Fiona keeps up]

King Harold: Darling, the whole kingdom heard you. I mean, after all, it is in his nature to be…well, a bit of a brute.

Fiona: Him? You know, you didn’t exactly roll out the Welcome Wagon!

King Harold: Well, what did you expect?! Look at what he’s done to you.

Fiona: Shrek loves me for who I am. I would think you’d be happy for me.

King Harold: Darling, I’m just thinking about what’s best for you. Maybe you should do the same.

[King Harold leaves and leaves Fiona standing]

FOREST

[Donkey is walking behind Shrek, who is still carrying Puss in Boots. Donkey eyes Puss in Boots suspiciously as he whispers into Shrek's ear. Shrek glances back at Donkey]

Shrek: No, really?

[Shrek and Puss in Boots laugh. They walk out into a clearing]

Donkey: Oh…

EXT. - FAIRY GODMOTHER'S COTTAGE

[Off in the distance they see a small cottage. Connected to it is a giant factory with colored gases rising out from its chimneys]

Donkey: Oh, no. That’s the ol' Keebler’s place! Let’s just back away slowly.

Puss in Boots: That’s the Fairy Godmother’s cottage. She’s the largest producer of hexes and potions in the whole kingdom.

Shrek: Then why don’t we pop in there for a spell? Ha-ha! Spell!

[Shrek chuckles while Puss in Boots laughs loudly and they walk on. With an annoyed look on his face, Donkey follows them]

Puss in Boots: He makes me laugh!

INT. - FAIRY GODMOTHER'S COTTAGE

[The three enter through the front door of the cottage and into a reception area. At the desk sits an elf writing into a book]

Shrek: Hi. I’m here to see the--

Jerome: The Fairy Godmother. I’m sorry. She is not in.

[Fairy Godmother's voice sounds from a speaker system next to the receptionist]

Fairy Godmother: Jerome, coffee and a Monte Cristo. Now!

Jerome: [sighs] Yes, Fairy Godmother. Right away. Look, she’s not seeing any clients today, okay?

Shrek: That’s okay, buddy. We’re from the union.

Jerome: The union?

Shrek: We represent the workers in all magical industries, both evil and benign.

Jerome: Oh! Oh, right.

Shrek: Are you feeling at all degraded or oppressed?

[Jerome turns the speaker to face the other way]

Jerome: Uh… a little. W--w--we don’t even have dental.

Shrek: They don’t even have dental. Okay, we're just gonna have a look around. Oh. By the way. I think it’d be better if the Fairy Godmother didn’t know we were here. Know what I’m saying? Huh?

Donkey: Hmm?

Shrek: Huh?

Donkey: Huh? Huh? Huh?!

Shrek: Stop it.

Jerome: (whispers) Of course. Go right in.

[The three walk through a door next to the receptionist]

INT. - POTION FACTORY

[From up above on a catwalk, the three look out at the factory. The workers are all elves wearing white hazmat suits. Chemicals are poured into giant vats. Potions are put onto conveyor belts. Ingredients are tested and mixed. Shrek notices a set of doors at the other end of the room with a sign above that reads "Potion Room". They see flashing lights accompanied by booming sounds coming from a doorway to their right. They head inside and walk down a hallway, which leads to another set of doors. They can hear Fairy Godmother behind it as well as the source of the flashes]

Fairy Godmother: A drop of desire! [giggles] Naughty!

[Inside a giant cauldron pours out gas as Fairy Godmother dumps various vials into it]

Fairy Godmother: A pinch of passion. [laughs] And just a hint of…lust! [laughs]

Shrek: Excuse me.

[Shrek and company walk in, and Fairy Godmother gasps]

Shrek: Sorry to barge in like this but uh--

Fairy Godmother: What in Grimm’s name are you doing here?

Shrek: Well...it seems that Fiona’s not exactly happy.

Fairy Godmother: Oh-ho-ho! And there’s some question as to why that is? Well, let’s explore that, shall we?

[Fairy Godmother hovers over to wall of bookshelves filled with books]

Fairy Godmother: Ah. P, P, P, P, P…Princess.

[She pulls out a book titled "Cinderella"]

Fairy Godmother: Cinderella! Here we are. "Lived happily ever after." Oh…[laughs] No ogres!

[She tosses the book to the ground and pulls out another]

Fairy Godmother: Let’s see. Snow White. A handsome prince. Oh...no ogres.

[She continues to pull out books and toss them]

Fairy Godmother: Sleeping Beauty. Oh, no ogres! Hansel and Gretel? No! Thumbelina? No. The Golden Bird, the Little Mermaid, Pretty Woman…No, no, no, no, no!

[She flies down and gets in Shrek's face]

Fairy Godmother: You see, ogres don’t live happily ever after.

[Shrek points his finger at Fairy Godmother]

Shrek: All right, look, lady!

Fairy Godmother: Don’t you point… those dirty green sausages at me!

[They get closer towards each other and glare into each other's eyes. They are interrupted by a worker who comes through the door]

Worker: Your Monte Cristo and coffee--oh! Sorry.

Shrek: Ah… that’s okay. We were just leaving. Very sorry to have wasted your time, Miss Godmother.

Fairy Godmother: Just… go.

Shrek: Come on, guys.

[The three head back out the doors. A worker pushing a cart walks by the janitor's closet. It opens and Shrek pulls him and the cart inside. Shrek puts the hazmat suit on which only manages to cover his head. He walks through the factory floor pushing the cart]

Shrek: TGIF, eh, buddy? Working hard or hardly working, eh, Mac?

[He enters the Potion Room he saw earlier. He opens the cart to reveal Donkey and Puss in Boots crammed inside]

Puss in Boots: Oh! Eh!

Donkey: Hey, man, you wanna get your fine Corinthian footwear and your cat cheeks out of my face? Man, that stinks!

Puss in Boots: Well, you don’t exactly smell like a basket of roses.

[Shrek looks up at the shelves built into the walls around them. The shelves are filled with different potions]

Shrek: Well, one of these has got to help.

Puss in Boots: Ah, I was just concocting this very plan. Already our minds are becoming one.

Donkey: Whoa, whoa, whoa, now. Listen, if we need an expert on licking ourselves, we’ll give you a call. Shrek, this is a bad idea.

Shrek: Look. Make yourself useful and go keep watch. Puss, do you think you could get to those on top?

Puss in Boots: No problema, boss. In one of my 9 lives I was the great cat burglar of Santiago de Compostela! (laughs)

Donkey: Shrek, are you off your nut?

Shrek: Donkey, keep watch.

Donkey: Keep watch? Yeah, Imma keep watch. I’ll watch that wicked witch come and whammy zammy a world of hurt all up your backside. I'm gonna laugh, too. I’ll be giggling to myself.

[Donkey walks back the door to stand on guard. Puss in Boots climbs up the shelves and stops at a glowing green vial]

Shrek: What do you see?

Puss in Boots: "Toad Stool Softener"?

Donkey: Oh yeah, right, I’m sure a nice BM is the perfect solution for marital problems!

[Puss in Boots continues to climb up and stop every so often]

Puss in Boots: "Elfa Seltzer"?

Shrek: Uh-uh.

Puss in Boots: "Hex Lax"?

Shrek: No! Try "handsome."

Puss in Boots: Sorry. No handsome.

[Puss in Boots stops at a row of potions kept behind a glass display case]

Puss in Boots: Hey! How about "Happily Ever After"?

Shrek: Well, what does it do?

Puss in Boots: It says "Beauty Divine."

Donkey: You know in some cultures, donkeys are revered as the wisest of all creatures. Especially us talking ones.

[Donkey, not paying attention to the door, doesn't notice a worker and Jerome staring at them]

Shrek: [gasps] Donkey!

[Donkey looks back and Jerome and the worker run off. Donkey runs back to Shrek and the door shuts]

Shrek: That’ll have to do. We’ve got company!

[Puss in Boots uses his claw to cut a hole in the glass]

Donkey: Can we get on with this?

[Puss in Boots tries to pull out the Happily Ever After potion, but the hole he made is too small for it to fit]

Shrek: Hurry!

[Puss in Boots tries to force the potion through and the glass starts to crack. It shatters as the bottle is pulled out, sending Puss in Boots flying. Donkey manage to catch the falling potion with his mouth]

Shrek: Nice catch, Donkey!

[Puss in Boots lands on his feet]

Puss in Boots: Finally! A good use for your mouth.

[An alarm sounds and red lights flash. At the doorway, a metal gate starts to lower down]

Shrek: Come on!

[Shrek grabs Donkey and Puss in Boots and dives under the gate. Puss in Boots reaches back for his hat just before the gate slams shut. A group of elves run in with rapid-fire crossbows and shoot at them. Shrek, still carrying Donkey and Puss in Boots, dodges the arrows and jumps onto a conveyer belt. They continue to dodge the arrows as they climb over various wooden machinery. Shrek tips over a giant cauldron, filled with a potion, and the substance spills onto the floor. The elves run away as Shrek jumps up and grabs onto a pulley system that leads back to the entrance. The potion splashes over a cage of two geese and turns them into ballerinas. Two workers are caught in it and are transformed into a clock and a candelabra. Another group of fleeing elves are turned into doves. Shrek, Donkey, and Puss in Boots reach the end of the room and jump onto the catwalk. Later, the potion has dried up and Fairy Godmother shouts at the doves]

Fairy Godmother: I don’t care whose fault it is. Just get this place cleaned up!

Doves: Yes, Godmother.

Fairy Godmother: And somebody bring me something deep fried and smothered in chocolate!

[Prince Charming comes bursting through the doors behind her]

Prince Charming: Mother!

Fairy Godmother: Charming. Sweetheart. Well, this isn’t a good time, pumpkin. Mama’s working.

Prince Charming: Whoa, what happened here?

Fairy Godmother: The ogre, that’s what!

Prince Charming: What?! Where is he, Mom?

[Prince Charming pulls his sword out from its sheath and starts swinging it around]

Prince Charming: I shall rend his head from his shoulders! I will smite him where he stands! He will rue the very day he stole my kingdom from me!

[Bird poop lands on his shoulder]

Prince Charming: Oh, put it away, Junior! You’re still going to be king. We’ll just have to come up with something smarter.

[Jerome, who is now a dove, flies over carrying a clipboard]

Jerome: Pardon. Um…e-everything is accounted for, Fairy Godmother. Except for one potion.

[Fairy Godmother takes a look at the clipboard]

Fairy Godmother: What? Oh… I do believe we can make this work to our advantage.

FOREST - DAY

[Shrek, Donkey, and Puss in Boots are walking through a clearing. Shrek reads the label on the potion]

Shrek: "Happily Ever After Potion. Maximum strength. For you and your true love. If one of you drinks this, you both will be fine. Happiness, comfort and beauty divine."

Donkey: "You both will be fine"?

Shrek: I guess it means it’ll affect Fiona, too.

[Shrek pops the cork out from the bottle]

Donkey: Hey, man, this don’t feel right. My donkey senses are tingling all over. So why don't you just drop that jug o’ voodoo and let’s get out of here.

Shrek: It says, "Beauty Divine." How bad can it be?

[Shrek sniffs the potion and sneezes onto a mushroom]

Donkey: Aha! See, you’re allergic to that stuff. You’re gonna have a reaction. And if you think that I’ll be smearing VapoRub all over your chest, think again!

Puss in Boots: Boss, just in case there is something wrong with the potion… allow me to take the first sip. It would be an honor to lay my life on the line for you.

Donkey: Oh, no, no. I don’t think so. If there's gonna be any animal testing, I’m gonna do it. That’s the best friend’s job. Now give me that bottle.

[Donkey grabs the bottle with his mouth and chugs half of it down. Shrek grabs the bottle]

Shrek: How do you feel?

Donkey: Well, I don’t feel any different. I look any different?

Puss in Boots: You still look like an ass to me.

Shrek: Maybe it doesn’t work on donkeys. Well, here’s to us, Fiona.

Donkey: Shrek? You drink that, there’s no going back.

Shrek: I know.

Donkey: But, no more wallowing in the mud?

Shrek: I know.

Donkey: No more itchy butt crack?

Shrek: I know!

Donkey: But you love being an ogre!

Shrek: I know! (sighs) But I love Fiona more.

Donkey: Shrek, no! Wait!

[Shrek drinks the rest of the potion. His belly starts rumbling, and Donkey and Puss in Boots take cover behind a log. Shrek lets out a loud fart and the two come out from cover]

Donkey: Ooh, got to be… I think you grabbed the "Farty Ever After" potion.

Puss in Boots: Maybe it’s a dud.

Shrek: Or maybe Fiona and I were never meant to be.

[Suddenly, thunder sounds and gray clouds move in above them]

Donkey: Uh-oh. What did I tell you? I think I feel something coming on. I don’t want to die. I don’t want to die. I don’t want to die!

[It starts raining]

Donkey: Oh, sweet sister, mother of mercy. I’m melting! I’m melting!

Shrek: It’s just the rain, Donkey.

Donkey: [chuckles] Oh.

[As they walk off, they don't notice the mushroom Shrek sneezed on transform into a rose. They eventually come across an abandoned barn in the forest. Shrek opens the gates and they head inside]

EXT. - ABANDONED BARN

[Shrek looks out from the barn, solemnly starting at Far Far Away way off in the distance. Shrek looks down at Donkey and pats his head]

Donkey: Shrek, don’t worry. Things seem bad because it’s dark and rainy and Fiona’s father hired a sleazy hitman to whack you.

[Puss in Boots hisses at Donkey]

Donkey: lt’ll be better in the morning. You’ll see. 🎶The sun’ll come out…tomorrow. [yawns] Bet your bottom…🎶

Shrek: Bet my bottom?

Donkey: I’m coming, Elizabeth!

[Donkey rears back and falls to the floor unconscious]

Shrek: Donkey? Are you all right?

Puss in Boots: Hey, boss. Let’s shave him.

Shrek: D-Donkey?..

[Shrek passes out and falls down. Puss screeches]

INT. - FAR FAR AWAY PALACE

[King Harold and Queen Lillian are sitting by a fireplace when Fiona walks in]

King Harold: There you are! We missed you at dinner.

Queen Lillian: What is it, darling?

Fiona: Dad…I’ve been thinking about what you said. And I’m going to set things right.

King Harold: Ah! Excellent! That’s my girl.

Fiona: It was a mistake to bring Shrek here. I’m going to go out and find him. And then we're gonna go back to the swamp where we belong.

[Fiona walks out of the room and grabs her suitcase. King Harold and Queen Lillian follow her]

Queen Lillian: Fiona, please!

King Harold: Let’s not be rash, darling. You can’t go anywhere right now.

[Fiona pushes open the front doors of the palace and looks out at the rain. Before she can step forward, she passes out and falls to the floor]

King Harold: Fiona!

Queen Lillian: Fiona!

[King Harold and Queen Lillian run over to Fiona and kneel over her]

INT. - ABANDONED BARN

[Posed similarly, Puss in Boots runs over to Shrek and Donkey's unconscious bodies. He lies down beside them]

EXT. - ABANDONED BARN

[We see a bright, sparkling purple light emit from the barn. It fades]

INT. - FAR FAR AWAY PALACE. FIONA'S CHILDHOOD ROOM.

[King Harold and Queen Lillian tend to Fiona, who they have tucked into bed. Queen Lillian walks off, and King Harold follows after lingering for a few moments]

EXT. - FAR FAR AWAY PALACE. FIONA'S CHILDHOOD ROOM.

[A similar bright light flashes in Fiona's room before fading]

INT. - ABANDONED BARN. MORNING.

[Eyes slowly open. Women can be heard whispering]

Maiden #2: Look look look, I told you he was here. Look at him! Look at him!

Maiden #1: Shh! Quiet!

Maiden #2: Look at him!

[Shrek groans. A woman laying down, staring at him, comes into focus]

Jill: Good morning, sleepyhead.

[Shrek shouts and sits up. Three women are sitting beside him, and one of them is holding Puss in Boots in her arms]

Jill & Maidens: Good morning!

Maiden #2: We love your kitty!

Shrek: Oww…my head…

Jill: Here, I fetched a pail of water.

Shrek: Thanks.

[Shrek looks at down at his hands and gasps, noticing they are now human hands. He grabs the pail of water and looks at his reflection. He is now a handsome, human man. He gasps and drops the pail onto the floor. He starts to feel his new body]

Shrek: Oh!.. A cute, button nose? Thick, wavy locks? Taut, round buttocks?! I’m… I’m…

[Jill and Maiden #1 latch onto Shrek]

Jill: Gorgeous!

Maiden #1: I’ll say.

Jill: I’m Jill. What’s your name?

Shrek: Um… Shrek.

Jill: "Shrek"? Wow...are you from Europe?

Maiden #1: You’re so tense!

Jill: I want to rub his shoulders.

Maiden #1: I got it covered, thanks.

[Maiden #2 joins in]

Maiden #2: I don’t have anything to rub!

Jill: Well, get in line.

Shrek: Have you ladies seen my donkey?

Donkey: Who are you calling donkey?!

[Donkey stands in the doorway. He is now a white stallion]

Shrek: Donkey? You’re a--

Donkey: A stallion, baby! I can whinny! [whinnies] I can count!

[Donkey starts to trot around outside]

Donkey: Look at me, Shrek! I’m...trotting! That’s some quality potion! What’s in that stuff?

Puss in Boots: "Oh, don’t take the potion, Mr. Boss, it’s very bad." Pah!

[Puss in Boots picks up the discarded potion bottle and reads the label]

Puss in Boots: "Warning: Side effects may include burning, itching, oozing, weeping. Not intended for heart patients or those with… nervous disorders."

Donkey: I’m trotting, I’m trotting in place! Yeah!

[Shrek, Puss in Boots, Jill and the maidens all stare at Donkey]

Donkey: What?

Puss in Boots: Señor!

[Puss in Boots reads the rest of the label]

Puss in Boots: "To make the effects of this potion permanent, the drinker must obtain his true love’s kiss by midnight."

[Shrek grabs the potion to read it for himself]

Shrek: Midnight?! Why is it always midnight?

Maiden #1: Oh! Pick me! I’ll be your true love!

Jill: I’ll be your true love.

Maiden #2: I’ll be true... enough.

[Jill and the maidens start puckering their lips and Shrek backs away]

Shrek: Look, ladies, I already have a true love.

[The women groan in disappointment]

Puss in Boots: And take it from me, boss. You are going to have one satisfied princess.

Donkey: And let’s face it. You are a lot easier on the eyes. But inside you’re the still same old, mean, salty…

Shrek: Easy--

Donkey: …cantankerous, stinky...

Shrek: Alright then--

Donkey: …foul, angry ogre you always been.

Shrek: And you’re still the same annoying donkey.

Donkey: Yeah.

Shrek: Well, look out, princess. Here comes the new me!

[Shrek's pants fall down to his ankles. His clothes are too big for him now]

Donkey: First things first, we need to get you out of those clothes.

[The women all gasp in excitement]

FOREST. MORNING.

[A carriage is traveling on a road through the forest. Shrek, Donkey, and Puss in Boots are hidden further up the road]

Shrek: Ready?

Donkey: Ready!

[The carriage hits a bump and Donkey screams behind them. A passenger inside the carriage leans out his head]

Nobleman: Driver, stop!

[The nobleman gets out to examine Donkey, who is writhing on the ground]

Donkey: Oh, God! Help me, please! My racing days are over! I’m blind! I’m blind! Tell the truth, will I ever play the violin again?

Nobleman: Oh, you poor creature! Is there anything I can do for you?

Donkey: Well, I guess there is one thing...

[Donkey drops the act and Puss in Boots jumps out from behind him, pointing his sword at the nobleman]

Puss in Boots: Take off the powdered wig and step away from your drawers!

[Shrek puts on the nobleman's powdered wig and his clothes, which are too small for him

Puss in Boots: Not bad.

Donkey: Not bad at all.

[After a moment of silence, the two burst out laughing. The nobleman's son peeks out from inside the carriage]

Nobleman's son: Father? Is everything all right, Father?

[The son gets a look at the scene and tries to hide back inside. Shrek takes his clothes, leaving both the nobleman and his son stranded in their undergarments. Shrek saddles up on Donkey's back with Puss in Boots]

Shrek: Thank you, gentlemen! Someday, I will repay you! Unless, of course, I can't find you or if I forget.

[Donkey whinnies and rears back onto his hind legs, knocking Puss in Boots off. Donkey sprints off, leaving Puss in Boots muttering angrily in Spanish]

Puss in Boots: Ey tú! Pedazo de carne con patas, cómo te atreves hacerme esto?! (Subtitled: "Hey you! You piece of meat with legs, how dare you do this to me?!)

KINGDOM OF FAR FAR AWAY. DAY.

[Shrek and Puss in Boots are riding Donkey through the streets of Far Far Away. Shrek looks uneasy as people in the streets stop and stare. Shrek cautiously waves at an angry mob, who to his surprise, smile and wave back at him. Shrek admires the new "him" in the mirror and waves at three noblewomen ogling at him. Donkey kicks into a faster pace and towards the Far Far Away Palace.]

EXT. - FAR FAR AWAY PALACE. DAY.

[They stop at the foot of the stairs leading up to the palace doors. Two guards stand by the stairs]

Guard: Halt!

Shrek: Tell Princess Fiona her husband, Sir Shrek, is here to see her.

INT. - FAR FAR AWAY PALACE. FIONA'S CHILDHOOD ROOM.

[Fiona gest out of bed and walks over to the mirror to wash her face. As she takes the towel away from her face, she sees her reflection in the mirror; she is a human again. She screams and Shrek hears her from outside]

Shrek: Fiona!

Fiona: Shrek?

INT. - FAR FAR AWAY PALACE.

[Shrek runs inside the palace to find Fiona. Fiona runs out of her room to do the same. The two almost cross each other's paths]

INT. - FAR FAR AWAY PALACE. FIONA'S CHILDHOOD ROOM.

[Shrek runs into Fiona's room and sees a cloaked figure hovering by the window]

Shrek: Fiona?

[The figure takes off the cloak and reveals themselves to be Fairy Godmother]

Fairy Godmother: Hello, handsome.

EXT. - FAR FAR AWAY PALACE.

[Fiona runs outside and down the stairs, not recognizing Donkey in his new form]

Fiona: Shrek!

Donkey: Princess!

Fiona: Donkey?

Donkey: Wow! That potion worked on you too, huh?

Fiona: What potion?

Donkey: Oh, it's kind of a long story but, see, Shrek and I took some magic potion. And well, now...we’re sexy!

[Fiona leans over to see Puss in Boots sitting on Donkey's back]

Fiona: Shrek?

Puss in Boots: For you, baby… I could be.

Donkey: Yeah, you wish.

Fiona: Donkey, where is Shrek?

Donkey: He just went inside looking for you.

INT. - FAR FAR AWAY PALACE.

[Fiona runs back inside and yells loudly]

Fiona: Shrek!

INT. - FAR FAR AWAY PALACE. FIONA'S CHILDHOOD ROOM.

Shrek: Fiona! Fiona!

[Shrek runs for the door, but Fairy Godmother uses her magic to close it. One of the talking pieces of furniture from before moves in his way]

Furniture: You want to dance, pretty boy?

[Shrek tries to run out to the balcony, but Fairy Godmother shuts those doors as well]

Fairy Godmother: Are you going so soon? Don’t you want to see your wife?

[Fairy Godmother gestures to the window and steps aside]

INT. - FAR FAR AWAY PALACE.

[Elsewhere in the palace, Fiona stops at the top of some stairs. She hears a voice come from a room to her right]

Prince Charming: Fiona?

[Fiona steps toward the voice and sees Prince Charming standing by a balcony. He is wearing noble clothes that somewhat resemble Shrek's usual getup]

Fiona: Shrek?

Prince Charming: Aye, Fiona. It is me.

Fiona: What happened to your voice?

Prince Charming: Uhh...the potion changed a lot of things, Fiona. But not the way I feel about you.

[Just as Prince Charming takes Fiona's hand, King Harold and Queen Lillian come walking in]

Queen Lillian: Fiona?

King Harold: Charming?!

Prince Charming: Ah--do you think so? [laughs] Dad. I was so hoping you would approve.

Queen Lillian: Um… Who are you?

Prince Charming: Mom, it’s me, Shrek. I know you never get a second chance at a first impression, but, well, what do you think?

[Prince Charming pulls Fiona in closer, who is still looking at him with suspicion. Neither King Harold nor Queen Lillian appear to be approving. Prince Charming hugs Fiona, who hesitantly obliges him. Shrek is shouting from across the other side of the palace in Fiona's room. The glass window muffles his voice and none of them can hear him]

Shrek: Fiona! Fiona!

INT. - FAR FAR AWAY PALACE. FIONA'S CHILDHOOD ROOM.

Shrek: Fiona! Fiona!

Fairy Godmother: Fiona, Fiona! Ho-ho-ho-oh, shoot! I don’t think they can hear us, pigeon.

[Shrek stares out at the coupe and sighs]

Fairy Godmother: Don’t you think you’ve already messed her life up enough?

Shrek: I just wanted her to be happy.

Fairy Godmother: And now she can be. Oh, sweetheart. She’s finally found the prince of her dreams.

Shrek: But look at me. Look what I’ve done for her.

Fairy Godmother: It’s time you stop living in a fairy tale, Shrek. She’s a princess, and you’re an ogre. That’s something no amount of potion will ever change.

[Shrek takes another look out the window and sees Fiona, Prince Charming, King Harold, and Queen Lillian head inside from the balcony]

Shrek: But…I love her.

Fairy Godmother: If you really love her…you’ll let her go.

EXT. - FAR FAR AWAY PALACE.

[Shrek comes from out of the palace, angrily barging down the stairs]

Donkey: Shrek?

Puss in Boots: Señor?

[Shrek walks by without looking at them]

Donkey: Hey, what’s going on? Where are you going?

INT. - FAR FAR AWAY PALACE.

[Prince Charming and Fiona walk down the hallway away from King Harold and Queen Lillian. Fiona looks back and gives King Harold a confused look before Prince Charming nudges her closer]

Queen Lillian: You wouldn’t have had anything to do with this...would you, Harold?

[King Harold looks down with a guilty look on his face]

EXT. - KINGDOM OF FAR FAR AWAY.

[Shrek walks through the streets with his head bowed down. Donkey and Puss in Boots follow him]

INT. - POISON APPLE.

[Captain Hook is playing the piano and singing. Shrek, Donkey, and Puss in Boots are sitting at the bar with their drinks. Doris sets a bottle of milk on the table]

Doris: There you go, boys.

Puss in Boots: Just leave the bottle, Doris.

Doris: Hey. Why the long face?

Shrek: It was all just a stupid mistake. I never should have rescued her from that tower in the first place.

[Puss in Boots laps up the milk in his cup and slams it down]

Puss in Boots: I hate Mondays.

Donkey: I can’t believe you’d walk away from the best thing that ever happened to you.

Shrek: What choice do I have? She loves that pretty boy, Prince Charming.

Donkey: Aww, come on. Is he really that good-looking?

Doris: Are you kidding? He’s gorgeous! He has a face that looks like it was carved by angels.

Puss in Boots: Oh. He sounds dreamy.

Shrek: You know, shockingly, this isn’t making me feel any better. Look, guys. It’s for the best. Mom and Dad approve, and Fiona gets the man she’s always dreamed of. Everybody wins.

[Behind them, King Harold enters inside wearing his cloak]

Donkey: Except for you. I don’t get it, Shrek. You love Fiona.

Shrek: Aye. And that’s why I have to let her go.

King Harold: Umm...excuse me, is she here?

[Shrek looks up to see King Harold who is talking with Doris]

Doris: She’s, uh… in the back.

[King Harold walks up to a door in the back and sees Fairy Godmother's men from before standing guard]

King Harold: Oh, hello again. Heh...

[He goes through the doors]

INT. - POISON APPLE. BACK ROOM.

[Fairy Godmother and Prince Charming stand waiting inside the room]

King Harold: Fairy Godmother. Charming.

Fairy Godmother: Ugh, you’d better have a good reason for dragging us down here, Harold.

King Harold: Well, I’m afraid Fiona isn’t really…warming up to Prince Charming.

Prince Charming: Umm, F-Y-I, not my fault.

Fairy Godmother: Oh, no, no, of course it’s not, dear.

Prince Charming: I mean, how charming can I be when I have to pretend I’m that dreadful ogre?

King Harold: No, no, it’s nobody’s fault. Perhaps it’s best if we just call the whole thing off, okay?

Fairy Godmother & Prince Charming: What?!

King Harold: I mean you can’t force someone to fall in love!

Fairy Godmother: Oh, I beg to differ. I do it all the time.

[Fairy Godmother pulls out a red vial and hands it to King Harold. Shrek is listening in from the window, outside and out of sight]

Fairy Godmother: Have Fiona drink this and she’ll fall in love with the first man she kisses, which will be Charming.

King Harold: Umm… no.

Fairy Godmother: What did you say?

King Harold: I...I...I can’t. I...I won’t do it.

Fairy Godmother: Oh, yes, you will. If you remember, I helped you with your happily ever after. And I can take it away just as easily.

[Fairy Godmother sticks her wand in King Harold's face and it begins to glow]

Fairy Godmother: Is that what you want? Is it?

King Harold: No.

Fairy Godmother: Good boy. Now, we have to go. I need to do Charming’s hair before the ball. He’s hopeless. You know he’s all high in the front, he can never get to the back. You always need someone to do the back of your hair.

Prince Charming: Oh! Thank you, Mother.

Donkey: Mother?!

[The three look out the window to see Shrek, Donkey, and Puss in Boots standing at the window]

Shrek: Um… Mary! A talking horse!

Fairy Godmother: The ogre!

EXT. - THE POISON APPLE. DAY.

[Outside by the entrance, a pair of guards are interrogating the Headless Horseman. Shrek and Puss in Boots ride Donkey and sprint past them. Fairy Godmother comes flying after them]

Fairy Godmother: Stop them! Thieves! Bandits! Stop them!

[Fairy Godmother tries to zap them as the guards start running after them]

EXT. - FAR FAR AWAY PALACE. EVENING.

[Fireworks go off in the evening sky. The red carpet is rolled out in front of the palace and festivities are set up. Crowds of people are gathered by the red carpet as celebrities walk down it]

Announcer: Well, the abs are fab and it’s gluteus to the maximus here at tonight’s Far, Far Away Royal Ball Blowout! The coaches are lined up as the cream of the crop pours out of them like Miss Muffet’s curds and whey!


[Joan Rivers talks to the camera with loudspeaker in hand]

Joan: Everyone who’s anyone has turned out to honor Princess Fiona and Prince Shrek and, oh my, the outfits look gorgeous! Look! Hansel and Gretel!

[Hansel and Gretel skip down the carpet hand in hand, tossing bread crumbs along their path]

Joan: What the heck are the crumbs for? And right behind them, Tom Thumb and Thumbelina! Oh, aren’t they adorable!

[The tiny Tom Thumb and Thumbelina are mistakenly swept up by a man sweeping the crumbs]

Joan: Here comes Sleeping Beauty!

[The carriage door is opened and Sleeping Beauty falls onto the carpet, still sleeping]

Joan: Oh, tired old thing...who’s this? Who’s this?! Who is this?

[Fairy Godmother's pink carriage descends]

Joan: Oh. It’s the one, it’s the only…it’s the Fairy Godmother!

[Fairy Godmother hovers her way across the red carpet]

Fairy Godmother: Hello, Far Far Away! Can I get a "whoop-whoop"?

[The crowd whoops]

Fairy Godmother: May all your endings be happy and…well, you know the rest!

INT. - THE SWAMP. SHREK'S HOME.

[Pinocchio, Gingy, Big Bad Wolf, the Three Little Pigs, and the Three Blind Mice are using the Magic Mirror as a TV. They are watching footage of the event as it cuts to a commercial break]

Magic Mirror: We’ll be right back with the Royal Far Far Away Ball after these messages.

Gingy: I hate these ball shows! They bore me to tears. Flip over to Wheel Of Torture.

Pinocchio: I’m not flipping anywhere, sir, until I see Shrek and Fiona.

Gingy: Whizzes on you guys! Hey, mice, pass me a buffalo wing.

[The mice start moving their canes around, unaware that the plate of chicken wings is right next to them]

Gingy: No no, to your left. Your left!

[A chicken wing flies up and lands inside the rancid fish bowl]

Magic Mirror: Tonight on "K.N.I.G.H.T.S."…

Gingy: Ah! Now here’s a good show!

[Footage plays of Shrek, Donkey, and Puss in Boots being chased by several patrols of knights]

Knight: We got a white bronco heading east into the forest. Requesting backup.

Narrator: It's time for the men in steel to teach these madcap mammals their "devil may mare" attitudes just won't fly!

[The chase ends in the streets of Far Far Away. Two knights seize Shrek and three more point their crossbows at him]

Shrek: Alright, alright! Let me go!

[Three knights are restraining Donkey]

Donkey: Let me go!! Why are you grabbing me?! OW!! Police brutality!!! POLICE BRUTALITY!!!!!

Knight: Come on!

Shrek: I have to talk to Princess Fiona!

Knight: We warned you!

[A knight runs up to Shrek with pepper shaker and sprays it into his eyes]

Shrek: Ow! Ow!

Narrator: Will they get away with it? Or did someone let the cat out of the bag?

Puss in Boots: You capitalist pig dogs!

[Puss in Boots pounces on a knight who grabs him. Two knights restrain him with an animal capture device and one lifts a dime bag off of him. He sniffs it and shows the camera]

Knight: Catnip!

Puss in Boots: That’s, uh, not mine.

[The knights proceed to throw Shrek, Donkey, and Puss in Boots into the back of a metal wagon]

Shrek: Hold on! Alright! Find Princess Fiona!

Donkey: I’m a donkey!

[The knights shut the doors of the van. Shrek yells through the bars of the door]

Shrek: Tell her, Shrek--I’m her husband, Shrek! Ow!

[The show freezes frame on Shrek's face as a knight sprays him with a pepper shaker again]

Narrator: K.N.I.G.H.T.S.!

Gingy: Quick! Rewind it!

[The Magic Mirror rewinds the footage]

Shrek: Shrek--I’m her husband, Shrek! Ow!

[The playback stops. Everyone on the couch sits with their mouths wide open]

INT. - FAR FAR AWAY PALACE. NIGHT.

[King Harold is pouring tea into two cups on a tray. He reluctantly pours the contents of the Love Potion into one of the cups. Out from the cup comes a magical dust in the shape of heart, which then dissipates. He pushes open a door, carrying the tray of tea, and sees Fiona staring out of a window]

King Harold: Darling? Ah. I thought I might find you here. How about a nice hot cup of tea before the ball?

Fiona: (sighs) I’m not going.

King Harold: But, but, but the...the whole kingdom’s turned out to celebrate your marriage.

Fiona: There’s just one problem. That’s not my husband. I mean, look at him.

[Fiona gestures out the window at Prince Charming on the red carpet, who is playing up to the crowd]

King Harold: Yes, he is a bit...different, but people change for the ones they love. You’d be surprised how much I changed for your mother.

[King Harold sets the tray down on the window sill]

Fiona: Change? He’s completely lost his mind!

King Harold: Darling, why not come down to the ball and give him another chance? I mean, you might find you like this new Shrek.

Fiona: But it’s the old one I fell in love with, Dad. I’d give anything to have him back.

[Fiona reaches for one of the tea cups, but King Harold quickly grabs it instead]

King Harold: Uh, darling. That’s mine. Decaf. O-otherwise I’m up all night.

[Fiona takes a sip from the other cup and smiles]

Fiona: Thanks.

[King Harold smiles back but looks distressed]

INT. - JAIL TOWER. NIGHT.

[A bridge from the main land connects to an island. On the island is a massive, stone prison with a giant tower. Shrek, Donkey, and Puss in Boots are in a prison cell. Chains dangle from the ceiling which attach to their shackles, keeping them suspended above the floor]

Donkey: I gotta get out of here! You can’t lock us up like this! Let me go! Hey, what about my Miranda Rights? You’re supposed to say, I have the right to remain silent! Nobody said I have the right to remain silent!

Shrek: Donkey, you have the right to remain silent! What you lack is the capacity!

Puss in Boots: I must hold on before I, too, go totally mad.

Pinocchio: Shrek? Donkey?

[Staring down from above through a grate is Pinocchio, Ginny, Big Bad Wolf, the Three Little Pigs, and the Three Blind Mice]

Puss in Boots: Too late.

Shrek: Gingy! Pinocchio! Get us out of here!

[Dynamite sticks are rigged to the grate. One of the mice carries the match to light the fuse, but falls through the grate]

Blind Mouse: Oh…

[The mouse lands with a thud. The Three Little Pigs shake their heads and light the match themselves]

Little Pig: Fire in ze hole!

[The dynamites' explosion blows off the grate. Pinocchio, with key in hand, jumps and the pigs lowers down by his strings. Pinocchio tangles himself up in his strings after flipping and posing on the way down. Gingy groans and slides down the string]

Gingy: Look out below!

Shrek: Quick! Tell a lie!

Pinocchio: What should I say?

Gingy: Anything, but quick!

Donkey: Say something crazy like "I’m wearing ladies’ underwear!"

Pinocchio: I'm...I am wearing ladies’ underwear.

[They wait for Pinocchio's nose to grow but nothing happens]

Shrek: Heh...are you?

Pinocchio: I most certainly am not!

[His nose grows a bit]

Donkey: It looks like you most certainly am are!

Pinocchio: I am not!

[His nose grows even further]

Puss in Boots: What kind?

Gingy: It’s a thong!

[Gingy pulls at his pink thong and lets it slap back]

Pinocchio: Ow! They’re briefs!

[Gingy takes the key and runs across Pinocchio's nose as it continues to grow with each lie]

Gingy: Are not!

Pinocchio: Are too!

Gingy: Are not!

Pinocchio: Are too!

[Gingy eventually reaches Shrek and uses the key to free Shrek, Donkey, and Puss in Boots]

Gingy: Here we go. Hang tight!

Donkey: Wait, wait, wait! Ow! Ow! Hey, hey, hey! Ow!

[The three are dropped down onto the floor of the cell. Shrek looks out the window, seeing the Far Far Away Palace. Shrek hears a muffled voice]

Blind Mouse: Excuse me?

Shrek: What? Puss!

[He sees the mouse's tail sticking out from Puss in Boots' mouth]

Blind Mouse: Pardon me, would you mind letting me go?

[Puss in Boots spits out the mouse]

Puss in Boots: Sorry, boss.

Shrek: Quit messing around! We’ve got to stop that kiss!

Donkey: I thought you was going to let her go.

Shrek: I was, but I can’t let them do this to Fiona!

Donkey: Boom! That’s what I like to hear. Look who’s finally coming around!

Puss in Boots: But it’s impossible! We’ll never get in. The castle is guarded and there is a moat and everything!

Gingy: Well, folks, it looks like we’re up chocolate creek without a popsicle stick.

[Shrek stares thoughtfully at Gingy]

Gingy: What?

Shrek: Do you still know the Muffin Man?

Gingy: Well, sure! He’s down on Drury Lane. Why?

Shrek: Because we’re gonna need flour. Lots and lots of flour.

EXT. - DRURY LANE. NIGHT.

[Shrek knocks on the front door of a bakery. The Muffin Man opens the door and happily greets Gingy, who is standing on Shrek's shoulder]

Muffin Man: Gingy!

Gingy: Fire up the ovens, Muffin Man! We’ve got a big order to fill!

[An evil chuckle is heard from inside the bakery as lightning strikes in the sky]

Gingy: It’s alive!

CITY OF FAR FAR AWAY. NIGHT.

[A couple is out on a table drinking tea when their cups begin to shake. In the city, palm trees not too far off fall down one after the other. Donkey comes chasing through with Puss, Pinocchio, Big Bad Wolf, the Pigs, and the Mice on his back]

Donkey: Run, run, run, as fast you can!

[Citizens of the kingdom scream as the feet of a giant gingerbread man stomp through the streets. His name is Mongo, and Shrek and Gingy are riding on his shoulders]

Gingy: Go, baby, go!

Shrek: There it is, Mongo! To the castle!

[Shrek points towards the Far Far Away Palace. Mongo instead grabs a giant coffee mug on top of a Farbucks Coffee building]

Shrek: No, no, no, no, you great stupid pastry! Come on!

[Customers come running out of the building. Mongo tries to drink from the giant cup, but drops it after nothing comes out of it]

Donkey: Mongo! Down here! Look at the pony!

[Mongo starts to laugh and follow Donkey]

Donkey: That’s right! Follow the pretty pony! Pretty pony wants to play at the castle!

Mongo: Oooh, pretty pony.

EXT. - FAR FAR AWAY PALACE. COURTYARD.

[King Harold walks with Fiona in arm and gives her off to Prince Charming. An audience gathered out on the ballroom floor cheers as Charming waves]

Announcer: Ladies and gentlemen! Presenting Princess Fiona and her new husband, Prince Shrek!

[The crowd applauds and Queen Lillian claps along. Fiona has her hand on Prince Charming's arm as they walk down the steps. Prince Charming continues to wave and blow kisses]

Fiona: Shrek, what are you doing?

Prince Charming: I’m just playing the part, Fiona.

Fiona: Is that glitter on your lips?

Prince Charming: Mmm, cherry flavored. Want a taste?

Fiona: Ugh! What is with you?

[Fiona lets go and starts to walk back up the stairs]

Prince Charming: But, Muffin Cake…

[Prince Charming shrugs at Fairy Godmother, who is across the room and by the stage. She goes over to the piano player snapping her fingers]

Fairy Godmother: C minor, put it in C minor.

[Fairy Godmother addresses the crowd and conjures herself a flashy, red dress]

Fairy Godmother: Ladies and gentlemen. I’d like to dedicate this song to…Princess Fiona and Prince Shrek.

[A spotlight shines on the two and Fiona stops to look back]

Prince Charming: Fiona, my Princess. Will you honor me with a dance?

[Fiona looks hesitantly at Prince Charming and then back at Fairy Godmother. She starts singing "Holding Out for a Hero"]

Fairy Godmother: 🎶Where have all the good men gone / And where are all the gods?🎶

[Fairy Godmother continutes to sing. Fiona looks uncomfortably at the crowd who are all chanting "Dance! Dance!" Prince Charming holds out his hand and Fiona eventually takes it. They slowly dance on the ballroom floor]

Fiona: Since when do you dance?

Prince Charming: Fiona, my dearest, if there’s one thing I know, it’s that love is full of surprises.

Fairy Godmother: 🎶Late at night I toss and I turn / And I dream of what I need🎶 Hit it!

[A band and choir join in and the music kicks into gear]

EXT. - FAR FAR AWAY PALACE. OUTER WALLS.

[Shrek, Mongo, and Gingy approach the walls surrounding the palace. Surrounding the walls is a deep moat and the drawbridge over it has been pulled up. Guards rush around the top of the walls as the Captain of the Guards shouts orders]

Shrek: All right, big fella! Let’s crash this party!

Captain: Man the catapults! Ready! Fire!

[A guard uses a catapult to launch a fireball right at Mongo's chest]

Shrek: Brace yourselves!

Mongo: Ooh! Purty!

[The fireball hits him in the chest and he steps back, nearly stomping on Donkey and the rest of the group]

Gingy: Not the gumdrop button!

[The fireball hit him square in the gumdrop. Mongo watches the gumdrop drop to the ground, still on fire, he gets angry and lets out a Godzilla-esque roar. Mongo kicks the gumdrop back, landing right on top of the catapult and destroying it]

Guard: Incoming!

Donkey: Ha-ha! All right!

EXT. - FAR FAR AWAY PALACE. COURTYARD.

[Prince Charming and Fiona continue to dance, though she is still uncomfortable. Watching on from the side, King Harold is facepalming and Queen Lillian looks at him]

EXT. - FAR FAR AWAY PALACE. OUTER WALLS.

[Mongo is getting closer to the gate but the guards are shooting more fireballs at him]

Shrek: Go, Mongo! Go!

Captain: Man the cauldrons!

[The guards pour hot, bubbling liquid into a set of machinery]

Shrek: After you, Mongo.

[Mongo starts to pull down the drawbridge]

Captain: That’s it! Heave-ho!

[The guards pour down a giant vat of the liquid onto Mongo's head]

Shrek: Watch out!

Donkey: Shrek!

[Mongo rises back up, the foam having formed around his head like a wig]

Guard: More heat, less foam!

EXT. - FAR FAR AWAY PALACE. COURTYARD.

[Fairy Godmother continues to sing. Prince Charming is tossing a rose around his mouth]

EXT. - FAR FAR AWAY PALACE. OUTER WALLS.

[Mongo is trying to pull down the drawbridge again]

Captain: Heave! Ho!

[Shrek looks up as the guards pour down more liquid onto Mongo. This time his arms snap off, still holding open the drawbridge, as the rest of Mongo starts falling back into the moat. Shrek grabs onto one the arms and Gingy jumps back down to Mongo]

Gingy: Nooo!

[Mongo's arms start to crack as the guards try to pull the drawbridge back up. Shrek climbs up and gets through]

EXT. - FAR FAR AWAY PALACE. COURTYARD.

[Prince Charming spits out the rose, scoops Fiona in his arms, and leans in for a kiss. Fiona grabs the rose and puts it in her mouth, stopping him. They continue to dance]

EXT. - FAR FAR AWAY PALACE.

[Shrek swings down the chain to the drawbridge and knocks over the three guards that were pulling on it. He lowers the drawbridge for the rest of the group]

Shrek: [whistles] Come on!

[The group cheers. Meanwhile, Gingy is standing on Mongo's face as he sinks into the water]

Mongo: Be...good.

[Gingy is scooped up by Puss in Boots' sword and into Pinocchio's arms]

Gingy: He needs me! Let me go!

[Shrek and Puss in Boots ride Donkey up the deserted red carpet and toward the front doors of the palace. Suddenly a group of armed guards show up and block the doorway]

Shrek: Donkey!

[Donkey leaps up and over the group of guards and they chase after them. Puss in Boots jumps off and Shrek and Donkey halt]

Shrek: Puss!

Puss in Boots: Go! Go! Your lady needs you! Go!

Shrek and Donkey race off as Puss in Boots turns to face the guards. He takes off his hat and sheathes his sword

Puss in Boots: Today, I repay my debt.

[Puss in Boots puts on his cute, guilty face. The guards stop and lift the visors from the helmets]

Guards: Aww…

Puss in Boots: [growling] En garde!

[Puss in Boots leaps from guard to guard, battling them off with his sword]

EXT. - FAR FAR AWAY PALACE. COURTYARD.

[Prince Charming once again leans Fiona down in his arms and tries to kiss her. This time she doesn't resist. But just as they are about to kiss, Shrek and Donkey come bursting through the doors to the courtyard]

Shrek: STOP!!!

[The music comes to a halt. Donkey hurries down the stairs and Shrek jumps off his back]

Shrek: Hey, you! Back away from my wife!

Fiona: Shrek?

[The crowd gasps. King Harold and Queen Lillian look on, surprised]

Fairy Godmother: You couldn’t just go back to your swamp and leave well enough alone.

Shrek: Now!

[The Three Little Pigs launch one of themselves at Fairy Godmother using a blanket as a slingshot]

Three Little Pigs: Pigs und blanket!

[The pig grabs onto Fairy Godmother's leg and she tries to shake him off. Shrek swings Pinocchio by his strings and throws him at Fairy Godmother]

Shrek: Pinocchio! Get the wand!

Pig #1: I see London! I see France!

Pinocchio: Waaaahhh!

[Pinocchio misses Fairy Godmother and she shoots him with her wand, transforming him into a human boy]

Pinocchio: I’m a real boy!

[Fairy Godmother flings the pig into the open window of some woman. She raises her wand to zap Shrek, but Big Bad Wolf begins blowing her away with his breath. She drops the wand and another pig grabs it and runs. She chases after him]

Pig #2: Catch!

[The pig throws the wand to Donkey]

Gingy: Donkey!

[Donkey throws it to Gingy as Fairy Godmother still tries to grab it. Gingy throws it to the Three Blind Mice who don't catch it. The wand bounces on the ground and activates]

Pinocchio: I’m a real boy. Ah!--

[The wand's magic hits Pinocchio and he turns back into his puppet by itself]

Pinocchio: Oh...

[Shrek and Fairy Godmother chase after the wand]

Fairy Godmother: That’s mine! That’s mine!

[Fairy Godmother grabs it but Shrek swipes it out of her hands and into the air. Donkey races to the wand. Puss in Boots climbs on top of his head and grabs it]

Donkey: Pray for mercy, from Puss...

Puss in Boots: And Donkey!

Fairy Godmother: She’s taken the potion! Kiss her now!

[Prince Charming runs up to Fiona, grabs her shoulders, and kisses her]

Shrek: No!

[Shrek drops to his knees. King Harold and Queen Lillian look on with concern. Fairy Godmother smiles. Fiona looks at Prince Charming with surprise, and then with affection. Prince Charming puts his hand on Fiona's face, and then she holds his face with both hands]

Fiona: Hi-ya!

[Fiona headbutts Prince Charming and he drops to the floor. The crowd gasps. Shrek runs up to Fiona]

Shrek: Fiona.

Fiona: Shrek.

Fairy Godmother: Harold! You were supposed to give her the potion!

King Harold: Well, I guess I gave her the wrong tea.

[Prince Charming grabs the wand from Puss in Boots and throws it to Fairy Godmother]

Prince Charming: Mommy!

Fiona: Mommy?

Fairy Godmother: (growls) I told you!...

[Fairy Godmother flies up into the air, clutching onto the wand. Shrek and Fiona hold onto each other]

Fairy Godmother: Ogres don’t live happily. Ever. AFTER!!!!!!!!!

[Fairy Godmother zaps her wand at Shrek and Fiona. Shrek pushes Fiona out of the way and to the ground. King Harold runs over to them]

Queen Lillian: Harold!

Fiona: Shrek!

King Harold: (yelling) NOOOOOOOOOOOOOOO!!!!!!!!!!!!!!!!

[King Harold leaps in front of Shrek and gets hit by the wand's zap as a horrible sacrifice to the kingdom! King Harold's ceremonial armor chestplate deflects the magical trail back to hit Fairy Godmother. She is knocked back, but appears to be unscathed]

Fairy Godmother: Woo....ha!--

[Fairy Godmother turns into bubbles for her death. Her glasses and wand drop to the ground. Fiona runs over to King Harold's now empty armor and clothes]

Fiona: [gasping] Oh, Dad!

[She sobs and Shrek takes her in his arms. Queen Lillian runs over]

Pinocchio: Is he…?

Gingy: Yup.

[A frog ribbit is heard from inside the chestplate]

Gingy: He croaked.

[A frog comes crawling out from inside the chestplate]

Queen Lillian: Harold?

Fiona: Dad?

King Harold: I’d hoped you’d never see me like this.

Donkey: Hey! And he gave you a hard time!

Shrek: Donkey!

King Harold: No, no, he’s right. I’m sorry. To both of you. I only wanted what was best for Fiona. But I can see now… she already has it. Shrek, Fiona…will you accept an old frog’s apologies… and my blessing?

Queen Lillian: Harold?

King Harold: I’m sorry, Lillian. I just wish I could be the man you deserve.

[King Harold tries to leap away but Queen Lillian catches him]

Queen Lillian: You’re more that man today than you ever were… warts and all.

[King Harold ribbits. The clock chimes]

Puss in Boots: Boss! The Happily Ever After Potion!

Shrek: Midnight! Fiona, is this what you want? To be this way forever?

Fiona: What?

Shrek: Because if you kiss me now, we can stay like this.

Fiona: You’d do that? For me?

Shrek: Yes.

[Fiona looks back at King Harold and Queen Lillian, then back to Shrek

Fiona: I want what any princess wants. To live happily ever after…

[Shrek leans in to kiss Fiona, but she gently stops him with her hand]

Fiona: ...with the ogre I married.

Puss in Boots: Whatever happens, I must not cry! You cannot make me cry!

[Puss in Boots quietly cries and the clock bells ring]

[Shrek and Fiona hold each other's hands as they are engulfed in a magical aura and float into the air. The same happens to Donkey. Donkey begins to transform back into his donkey self]

Donkey: No. No, no. Aaah! Ow. Oh, no.

[He is lowered back to the ground. So are Shrek and Fiona, who are both now ogres. Donkey sighs]

Shrek: [laughs] Hey. You still look like a noble steed to me.

Fiona: [giggles] Now, where were we?

Shrek: Oh. I remember.

[Shrek leans Fiona over and they kiss. The crowd claps]

Puss in Boots: Hey! Isn’t we supposed to be having a fiesta?

[The crowd cheers and Donkey and Puss in Boots take to the stage]

Donkey: Uno, dos, quatro, hit it! Puss and Donkey, y’all…

[Donkey and Puss in Boots start singing "Livin' La Vida Loca" by Ricky Martin. The band accompanies them]

Donkey: 🎶She’s into superstitions / Black cats and voodoo dolls🎶...sing it, Puss!

Puss in Boots: 🎶I feel a premonition / That girl’s gonna make me fall🎶

Donkey: Here we go!

[The whole crowd is now dancing along]

Puss in Boots: 🎶She’s into new sensations / New kicks in the candlelight🎶

Donkey & Puss in Boots: 🎶She’s got a new addiction / For every day and night / She’ll make you take your clothes off / And go dancing in the rain / She’ll make you live her crazy life / But she’ll take away your pain / Like a bullet to your brain / Upside inside out / Living la vida loca🎶

[Doris walks up to Prince Charming and tries to kiss him]

Doris: Hey, gorgeous!

[Mongo is still fully submerged under the water]

Mongo: Living la vida loca

Donkey & Puss in Boots: 🎶Her lips are devil red / And her skin’s the color of mocha / She will wear you out / Living la vida loca🎶

Donkey: Oh, she livin’ it loca!

Puss in Boots: Living la vida loca

Donkey: Say it one more time now!

Donkey & Puss in Boots: Living la vida loca

Puss in Boots: Hey, Donkey, that’s Spanish!

Donkey & Puss in Boots: 🎶She’ll push and pull you down / Living la vida loca / She will wear you out / Living la vida loca / Living la vida loca / She’ll push and pull you down / Living la vida loca / Her lips are devil red / And her skin’s the color of mocha / She will wear you out / Living la vida loca / Living la vida loca / Living la vida loca / Living la vida loca🎶

[The song ends and the end credits roll. The dance floor is empty, except for Shrek and Fiona still slow dancing. Donkey sits on the stage quietly singing]

Donkey: 🎶All by myself / Don’t wanna be / All by myself anymore…🎶

[Puss in Boots walks up with two women by his side]

Puss in Boots: Amigo, we are off to the Kit-Kat Club. Come on, join us.

Donkey: Thanks, compadre. I’m… I’m not in the mood.

Puss in Boots: We will cheer you up! Find you a nice....uh, burro!

[Dragon roars. Donkey looks up into the sky]

Donkey: Hey, baby! Woo! Hey, that’s my girl! Yeah! All right!

[Dragon lands on the dance floor]

Donkey: Baby, where you been?

Dragon: [whimpers]

Donkey: I’m sorry, too. I should’ve stayed. But Shrek had this thing he had to do and uh--

Dragon: [groans]

Donkey: What? Say it one more time. What you talking about? Are you serious?!

[In comes flying a small donkey with the wings, scales, and fiery breath of a dragon]

Dronkey: Da-da!

[5 more of the dronkeys come flying in and jump all over Donkey. Dragon blows a cloud in the shape of a heart]

Donkey: Look at our little mutant babies! I got to get a job.

♪(You're So True: Joseph Arthur)♪

♪(Funkytown: Lipps inc.)♪ 

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
