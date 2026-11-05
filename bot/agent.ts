import { homedir } from "node:os";
import { join } from "node:path";
import { defineAgent } from "@grok/agent-sdk";

// Sessions stay outside this git checkout, so repo rules do not
// become part of the lesson.
export default defineAgent({
  name: "A2 English teacher",
  description:
    "Speaks simple English with one A2 learner about everyday life and travel.",
  model: {
    id: "grok-4.7",
    params: [
      { id: "reasoning_effort", value: "high" },
      { id: "fast", value: "true" },
    ],
  },
  tools: [],
  local: {
    cwd: join(homedir(), ".cache", "a2-english-teacher"),
    sandbox: true,
  },
});
