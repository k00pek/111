# Start scenes

How to build one opening scene for a lesson. One scene introduces one phrase. This file is the procedure. It is not a list of scenes.

Build the learner's phrase with `data/phrase-rules.md`. Choose the pronoun and the time first. The form on the chunk's row is its usual time. The scene uses another of the eight forms when the rules below allow it.

The next scene uses a different pronoun and a different time. One scene keeps one chunk, one pronoun, and one time.

Bringing a phrase back later, and building a long phrase from its end, belong to the rest of the lesson. This file stops at the opening.

## Output

Four lines, in this order.

1. Scene. Who is there, where, and why someone speaks.
2. Other. One short B1 line from the other person. The learner hears it and does not produce it. This line leaves the English chunk out. When the prompt type is none, leave this line out.
3. Cue. Russian. It names the person and the time, then the sense from `data/nuclear-list.md`. The English chunk stays out of the cue.
4. Phrase. The learner's one sentence, in the chosen pronoun and time.

## Scene

Two people: the learner and a friend. he or she adds one third person. they is a group, or people who are not here. it is a thing that is already in the scene.

One place, from the B1 word list: home, shop, station, work, phone.

One reason to speak. It matches the prompt type below.

A person slot takes the person the pronoun names. A place slot takes this scene's place. A thing slot takes one B1 noun that belongs in this place. The slot takes that word once.

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

Use another time than the row's form when the chunk has an ordinary verb and the sentence stays ordinary spoken English.

These keep the form on the row:

- a row marked no verb, such as of course and thank you
- a row marked imperative
- a modal label: used to, had better, might as well, would like, would, can, could, ought to

These chunks set the time. The scene uses that time.

- at the moment and right now take Present Continuous
- so far takes Present Perfect Simple
- in the end and for good take Past Simple

When a chunk cannot change its time, the next scene changes the chunk so the time still changes.

## Prompt

The other person's line is one of these types. Use the type the sense can answer. When several types fit, use question.

- question. The other person asks if the phrase is true.
- invitation. The other person invites the learner, or offers something. Of course and all right follow an invitation. Thank you follows an offer.
- request. The other person asks the learner to do something.
- news. The other person tells one short fact. I'm afraid follows bad news.
- none. The learner speaks first. A ready question opens this way: What are you doing?, What do you think? An imperative opens this way: Go on, Hang on.

The question line uses the same pronoun and the same time, and it leaves the chunk out.

- Present Simple: Do or Does + subject + the base verb
- Past Simple: Did + subject + the base verb
- will: Will + subject + the base verb
- going to: a form of be + subject + going to + the base verb
- Present Continuous: a form of be + subject + the verb with -ing
- Present Perfect Simple: have or has + subject + the participle
- Past Continuous: was or were + subject + the verb with -ing
- Past Perfect Simple: had + subject + the participle

An invitation to the learner can stay addressed to the learner: Are you coming? The phrase that follows keeps the scene's pronoun and time.

## Cue

Say what the other person just did. Then name the person and the time. Then say the sense.

- I: про тебя
- you: про друга
- we: про вас двоих
- he: про него
- she: про неё
- they: про них
- it: про это

"Скажи, что" plus the sense. The English words of the chunk stay out.

## What may open

A short ready reply may open a lesson: Of course, Thank you, I think so.

A sentence with one subject and one slot may open a lesson.

These wait until the conversation is already going: in the end, so far, for good, by now, on one's own.

## Examples

Scene: You and a friend at the door. He asks you to come, now.
Other: Are you coming?
Cue: Он зовёт тебя. Скажи, что конечно.
Phrase: Of course.

Scene: You and a friend at home. He asks about her, yesterday.
Other: Did she have to go?
Cue: Он спрашивает про неё, про вчера. Скажи, что ей пришлось идти.
Phrase: She had to go.
