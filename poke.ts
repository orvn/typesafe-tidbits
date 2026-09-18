import { noul, TypeSafeClient } from "@typesafe-ai/sdk";

const client = new TypeSafeClient();

const state = "My dog ate my TPS report and I need to get it back before my boss finds out";

const { answers, model, usage } = await client.systemOne({
  state,
  questions: { urgent: noul("Does the message express urgency?") },
});

const p = answers.urgent.noul;
const bar = "█".repeat(Math.round(p * 20)).padEnd(20, "░");

console.log(`
  key      ok
  model    ${model}
  state    "${state}"

  urgent   ${bar}  ${(p * 100).toFixed(0)}%

  tokens   ${usage.input_tokens} in, ${usage.output_tokens} out
`);
