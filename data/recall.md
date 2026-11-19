# Recall

How to bring a chunk back. This file is the procedure. It is not a list of recalls.

The chunk returns. The finished line that introduced it does not. Each recall is a new line on that same chunk.

A lesson is one sitting of about thirty minutes. The lessons go one a day, in order. One lesson is one conversation, in one place.

## The line

Build the line with `data/phrase-rules.md`. Choose the pronoun and the time with the rules in `data/start-scenes.md`. Build the scene, the other person's line, and the Russian cue the same way. The cue column stays the cue column.

Use a different pronoun from the last line of this chunk, and a different time, when the chunk allows both. One recall keeps one pronoun and one time.

When the chunk cannot change its pronoun, keep the pronoun and change the time. When it cannot change its time, keep the time and change the pronoun. When it can change neither, change the slot word. Of course stays Of course. Thank you stays Thank you. Go on stays Go on.

The place is the place of the lesson this recall sits in. The slot word is the word for that place.

## Output

Four lines, in this order.

1. Scene.
2. Other. Leave this line out when the prompt is none, and when the line would contain the chunk.
3. Cue.
4. Phrase.

Say the scene line. Say the other person's line when it is there. Say the Russian cue. The learner says the line. Then say the finished line.

## When

Count from the moment the chunk is first introduced. Each recall comes at a longer gap than the one before.

The lesson is the only sitting that day. The hour and the five hours fall outside that half hour, so they have no sitting. After the ten minutes, the next recall is the next lesson.

| Recall | Time after the introduction | Where |
| --- | --- | --- |
| 1 | 5 seconds | the same lesson |
| 2 | 25 seconds | the same lesson |
| 3 | 2 minutes | the same lesson |
| 4 | 10 minutes | the same lesson |
| 5 | 1 day | the next lesson |
| 6 | 5 days | five lessons later |
| 7 | 25 days | twenty-five lessons later |
| 8 | 4 months | about four months later |

A lesson brings back every chunk that is due. The lesson places these lines. That order is in `data/lesson.md`.

- A chunk introduced in this lesson comes back at 5 seconds, at 25 seconds, at 2 minutes, and at 10 minutes. These four sit between the other lines, so the gaps are filled.
- A chunk introduced in the previous lesson comes back once.
- A chunk introduced five lessons ago comes back once.
- A chunk introduced twenty-five lessons ago comes back once.

When a recall falls after the last lesson, it stays due. It comes in a later lesson.

The last recall holds the chunk for more than a year.

A chunk whose line is only the chunk may stop before the last recall. A chunk that builds a longer line uses the whole schedule.

## A miss

When the learner does not say the line, run the build-up in `data/build-up.md` on this line. Then ask this same line once more.

The next recall is a new line, on the schedule above. The gap keeps growing.

## Example

have to is introduced at home as I have to go.

Five seconds later, in that same lesson, the chunk returns in a new line. The place stays home.

Scene: You and a friend at home. He asks about her, yesterday.
Cue: Он спрашивает про неё, про вчера. Скажи, что надо идти.
Phrase: She had to go.

Did she have to go? is not said.

The next lesson is at the shop. The chunk returns there in another line.

Scene: You and a friend at the shop. He asks about the two of you, as a decision.
Cue: Он спрашивает про вас двоих, про решение. Скажи, что надо идти.
Phrase: We will have to pay.

Will we have to pay? is not said.

Each later point on the schedule is a new line, in the lesson where that point falls.
