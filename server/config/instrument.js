import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";




// import * as Sentry from "@sentry/node";
// import { nodeProfilingIntegration } from "@sentry/profiling-node";
// 
Sentry.init({
  dsn: "https://2a455332478c8678f73b586699d6a332@o4509600671137792.ingest.us.sentry.io/4509600676708352",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],
  // tracesSampleRate: 1.0,
  profileSessionSampleRate: 1.0,
  profileLifecycle: "trace",
  sendDefaultPii: true,
});

// // Ensure to call this before importing any other modules!
// Sentry.init({
//   dsn: "https://2a455332478c8678f73b586699d6a332@o4509600671137792.ingest.us.sentry.io/4509600676708352",

//   // Adds request headers and IP for users, for more info visit:
//   // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#sendDefaultPii
//   sendDefaultPii: true,

//   integrations: [
//     // Add our Profiling integration
//     nodeProfilingIntegration(),
//   ],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for tracing.
//   // We recommend adjusting this value in production
//   // Learn more at
//   // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#tracesSampleRate
// //   tracesSampleRate: 1.0,

//   // Set profilesSampleRate to 1.0 to profile 100%
//   // of sampled transactions.
//   // This is relative to tracesSampleRate
//   // Learn more at
//   // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#profilesSampleRate
//   profilesSampleRate: 1.0,
// });


// Profiling happens automatically after setting it up with `Sentry.init()`.
// All spans (unless those discarded by sampling) will have profiling data attached to them.
Sentry.startSpan({
  name: "My Span",
}, () => {
  // The code executed here will be profiled
});