# Start scenes

How to build one opening scene for a lesson. One scene introduces one phrase. This file is the procedure. It is not a list of scenes.

Build the learner's phrase with `data/phrase-rules.md`. Choose the pronoun and the time first. The form on the chunk's row is its usual time. The scene uses another of the eight forms when the rules below allow it.

The next scene uses a different pronoun and a different time. One scene keeps one chunk, one pronoun, and one time.

Bringing a phrase back later, and building a long phrase from its end, belong to the rest of the lesson. This file stops at the opening.

## Output

Four lines, in this order.

1. Scene. Who is there, where, and why someone speaks.
2. Other. One short B1 line from the other person. The learner hears it and does not produce it. When the prompt is none, leave this line out.
3. Cue. Russian. The person, the time, and the cue column from `data/nuclear-list.md`.
4. Phrase. The learner's one sentence, in the chosen pronoun and time.

## Scene

Two people: the learner and a friend. he or she adds one third person. they is a group, or people who are not here. it is a thing that is already in the scene.

One place: home, shop, station, work, phone.

The slot takes the word for that place. It takes that word once.

| Place | Thing | Verb | News |
| --- | --- | --- | --- |
| home | key | go | The dog is here |
| shop | bread | pay | The shop is closed |
| station | ticket | wait | The train is late |
| work | letter | work | The letter is ready |
| phone | battery | call | The phone is off |

bread, milk, and time take no a. Every other thing takes a when it is new, and the when it is the one already in the scene.

- thing, of + thing, and a thing slot marked before: the thing for the place.
- verb: the verb for the place, in the base form. At home the verb is go: I have to go.
- thing or verb: the thing. good at and get used to take the place verb with -ing: good at working, get used to working.
- place or verb: home is at home, shop is at the shop, station is at the station, work is at work, phone is on the phone. She ended up at home.
- place: home stays home, work stays work, and shop, station, and phone take the. She got home. She got to work. She went around the shop. head to already has to: she is heading to the shop, she is heading home, she is heading to work.
- to + place, and to + place or a thing: that place. home, here, and there take no to. She went back to the shop. I went back home.
- person, and with + person: the friend. When the pronoun is he or she, that person.
- thing or person: the third person when the pronoun is he or she. Otherwise the thing for the place.
- none or thing: the thing for the place. take off at the station takes no thing, and the cue is «взлететь». At the other places the thing is coat, and the cue stays «снять это».
- clause: the news sentence for the place. In a past time, is becomes was. I'm afraid the dog is here. I didn't know the dog was here.
- none: nothing follows the chunk.
- beside: the place verb, in the scene time, and the chunk at the end. I'm working at the moment. I'll call in advance.

These chunks do not take the thing in the place table.

| Chunk | Place | Word |
| --- | --- | --- |
| get on | station | train |
| get off | station | train |
| turn on | phone | phone |
| switch on | phone | phone |
| turn down | phone | phone |
| turn up | phone | phone |
| fill in | work | form |
| put up | home | picture |
| go through | work | letter |
| go into | work | letter |
| it takes | home | time |

run out of keeps the chosen place and uses milk at home, bread at the shop, time at the station, time at work, and battery on the phone.

A person slot takes the person the pronoun names. I and we use the friend when a person is required and the pronoun is not he or she.

## Pronoun

Choose one: I, you, we, they, he, she, it.

- I is the learner.
- you is the friend.
- we is the learner and the friend.
- he or she is the third person. A name works as he or she.
- they is a group.
- it is a thing.

Patterns subject, be, have, beside, and question with have take this pronoun.

A chunk that already contains its pronoun keeps that pronoun. I don't know, I think, I don't think, I thought, and I'll tell you what keep I. What do you think?, Do you know?, What do you mean?, and What are you doing? keep you. They say keeps they. Up to you keeps you. It takes and that's it keep it. There is / there are keeps there.

When a chunk cannot change its pronoun, the next scene changes the chunk so the pronoun still changes.

In the other person's line, I and you change places. The learner's I is the friend's you. The learner's you is the friend's I. we, they, he, she, and it stay the same in both lines.

## Time

Choose one of the eight forms in `data/b1-tenses.md`.

The other person's line and the learner's phrase use this same time. The cue names it in Russian, before the learner hears the phrase.

- Present Simple: про сейчас
- Present Continuous: про то, что идёт сейчас
- Present Perfect Simple: про то, что уже есть
- Past Simple: про вчера
- Past Continuous: про тот момент
- Past Perfect Simple: про ещё более раннее
- will: про решение
- going to: про план

The scene uses the form on the row. It uses another form only from the list for that pattern.

- subject or have, when the form column is one of the eight: any of the eight.
- be: Present Simple, Past Simple, or will. She is fond of the key. She was fond of the key. She will be fond of the key.
- there is / there are, and no sign of: Present Simple, Past Simple, Present Perfect Simple, Past Perfect Simple, will, or going to.
- beside: the time that chunk sets. at the moment and right now are Present Continuous. in advance is will. all the time is Present Simple.

These keep the form on the row:

- a row marked no verb, such as of course and thank you
- a row marked imperative
- a modal label: used to, had better, might as well, would like, would, can, could, ought to

These chunks set the time. The scene uses that time.

- at the moment and right now take Present Continuous
- all the time takes Present Simple
- in advance takes will
- so far takes Present Perfect Simple
- in the end and for good take Past Simple
- by now takes Present Simple

When a chunk cannot change its time, the next scene changes the chunk so the time still changes.

## Prompt

The prompt is the last column of the chunk's row in `data/chunk-build.md`.

- question. The other person asks with the base form of the chunk and the slot word. The learner answers with the finished phrase. Do you have to go? She had to go. The friend's pronoun follows the rule above: Do you have to go? for the learner's I. Am I looking for the key? for the learner's You are looking for the key.
- invitation. The line does not contain the chunk. of course and all right use Are you coming? thank you uses Here you are.
- request. The line does not contain the chunk. Can you help? In the past, Could you help? With will, Will you help? With going to, Are you going to help?
- news. The line does not contain the chunk. It is the news sentence for the place. is in that sentence changes with the time: is, was, has been, had been, will be, or is going to be. Present Continuous uses is. Past Continuous uses was. The dog is here. The shop was closed. The train will be late.
- none. No line from the other person. The learner speaks first.

Question shapes. The first word of the chunk takes the ending. The rest of the chunk stays, then the slot word. looking for the key. found out the time.

there is / there are asks with there and be. Is there a key? Was there a key? Has there been a key? Had there been a key? Will there be a key? Is there going to be a key? no sign of asks Is there a sign of the key? The same be forms apply, and the thing follows of.

- Present Simple: Do or Does + subject + base form
- Past Simple: Did + subject + base form
- will: Will + subject + base form
- going to: a form of be + subject + going to + base form
- Present Continuous: a form of be + subject + the verb with -ing
- Present Perfect Simple: have or has + subject + the participle
- Past Continuous: was or were + subject + the verb with -ing
- Past Perfect Simple: had + subject + the participle

For pattern be, the question is the form of be, then the subject, then the chunk. Is she fond of the key?

For pattern have, the question is Do or Does, then the subject, then have, then the chunk. Do you have any idea?

A chunk that already contains I and a verb drops those words in the question and keeps the verb. Do you know the time? The learner says I don't know the time.

## Cue

The first words come from the prompt.

- question: Он спрашивает
- invitation: Он зовёт. For thank you: Он даёт вещь.
- request: Он просит
- news: Он говорит
- none: no first words

Then the person and the time.

- I: про тебя
- you: про друга
- we: про вас двоих
- he: про него
- she: про неё
- they: про них
- it: про это

Then «Скажи, что» and the cue column. The cue column is already the line. The sense gloss is not used here. The English chunk stays out.

For prompt none, the cue is only «Скажи, что» and the cue column.

## What may open

A short ready reply may open a lesson: Of course, Thank you, I think so.

A sentence with one subject and one slot may open a lesson.

These wait until the conversation is already going: in the end, so far, for good, by now, on one's own.

## Examples

Scene: You and a friend at home. He invites you, now.
Other: Are you coming?
Cue: Он зовёт про тебя, про сейчас. Скажи, что конечно.
Phrase: Of course.

Scene: You and a friend at home. He asks about her, yesterday.
Other: Did she have to go?
Cue: Он спрашивает про неё, про вчера. Скажи, что надо идти.
Phrase: She had to go.
