import { defineEval, includes } from "@grok/agent-sdk/evals";

export default defineEval({
  tags: ["smoke"],
  description:
    "A past-time sentence in the present tense stops the dialogue and shows the tense correction.",
  async test(t) {
    await t.send("I go to the market yesterday.");
    t.succeeded();
    t.check(t.reply, includes(/\bwent\b/i));
    t.check(t.reply, includes(/\bmarket\b/i));
  },
});
