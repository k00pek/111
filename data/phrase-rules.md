# Phrase rules

How to build one short sentence from one chunk. This file is the procedure. It is not the sentence list.

Take the chunk from `data/nuclear-list.md`. Read its row in `data/chunk-build.md`. Take an open word from `data/b1-words.md`. When the verb is irregular, take the past and the participle from `data/verb-forms.md`. The eight forms are named in `data/b1-tenses.md`.

One chunk makes one sentence. Use one subject and the one form on the row. The opening scene fixes the first pronoun and the first time. A later line takes the next pronoun and the next time in `data/start-scenes.md`. The recall is in `data/recall.md`.

## Subject

When the pattern needs a subject, use one of: I, you, we, they, he, she, it. It is for a thing.

- I: am, was, have, do
- you, we, they: are, were, have, do
- he, she, it: is, was, has, does

## Pattern

Apply the pattern on the row.

- ready. The chunk is already the reply, or the subject is already inside it. It takes an hour. I don't know.
- subject. Put the subject in front. The chunk has its own verb. She has to go.
- be. Put the subject and a form of be in front, when be is not already in the chunk. I'm about to leave. It is bound to rain. When the chunk itself begins with be, that be takes the form. She is likely to say no.
- have. Put the subject and a form of have in front. I have no idea. It has to do with money. For in common, the thing stands between have and the chunk. We have music in common.
- there. There plus a form of be, then the chunk. There's no sign of rain.
- question. The sentence is a question. The chunk starts it, or the question is built around the chunk. What if it rains? What about lunch?
- question with have. Do you have a plan in mind? The thing stands before the chunk.
- beside. The verb is one verb from the B1 word list, in the named form. The chunk stands at the end and has no object of its own. She left in the end. I did it on my own.

## Form

Put the verb in the form named on the row.

A regular verb adds -ed for the past and the past participle. In the Present Simple, he, she, and it add -s. An irregular verb takes its past and its participle from the verb list. be, do, and have also change in the present: am / is / are, do / does, have / has.

These labels stand in the form column on their own: used to, had better, might as well, would like, would, can, could, ought to, imperative, no verb. ", not" means the sentence is negative. I don't care for tea.

Past Continuous is the form on think about. Past Perfect Simple is the form on feel like.

## Slot

Fill the slot named on the row. In a start scene, and in a recall, the word is the one named for that place in `data/start-scenes.md`.

- none. Nothing follows the chunk.
- verb. A verb from the B1 word list. After to, and after a modal label, it stays in the base form. keep on, and the verb choice of feel like or get used to, take -ing. In get to do, replace do with that verb.
- thing, person, place. A noun from the B1 word list. thing or person, thing or verb, and place or verb mean either one fits. none or thing means the sentence can stop without the thing.
- clause. A short clause. They say it's good.
- of + thing, with + person, to + place. Say that word before the noun. I'm in favor of the plan. I'll catch up with you. She went back to the shop. home, here, and there take no to.
- before. The thing or person stands in front of the chunk. I'll bear it in mind. People take it for granted.

## Split

Apply the split mark on the row.

- yes. A pronoun goes between the verb and the particle. I'll pick you up. The slot noun goes between the verb and the particle. I'll pick the keys up. When the slot says before, the word always stands in front. A clause stays after the whole chunk. one's stays in the chunk: I've made up my mind. On get back, split applies to the thing, not to the place. I got the book back. I got back to the shop.
- no. The word stays after the whole chunk. I'm looking for him. She got on the bus.
- none. There is no particle to move.

## Glue

- A new countable singular noun takes a or an. the is for the one both speakers already know. A plural or an uncountable noun takes no a.
- do, does, or did makes a question or a negative in the Present Simple and the Past Simple. be and these modals make the question and the negative without do: can, could, will, would, ought to, had better, might as well. used to asks with did and use: Did she use to go? afford to takes can in the spoken sentence: She can afford to go.
- one's matches the subject: my, your, his, her, our, their. I've made up my mind. She did it on her own.
