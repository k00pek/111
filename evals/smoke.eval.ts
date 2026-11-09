import { defineEval } from "@grok/agent-sdk/evals";

export default defineEval({
  tags: ["smoke"],
  description: "A turn about everyday life completes.",
  async test(t) {
    await t.send("I went to the market yesterday.");
    t.succeeded();
  },
});
