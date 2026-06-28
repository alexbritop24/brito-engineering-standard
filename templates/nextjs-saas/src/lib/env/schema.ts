export type AppEnvironment = "development" | "test" | "production";

export type EnvConfig = {
  nodeEnv: AppEnvironment;
  appUrl: string;
};

function isAppEnvironment(value: string | undefined): value is AppEnvironment {
  return value === "development" || value === "test" || value === "production";
}

export function createEnvConfig(env: NodeJS.ProcessEnv): EnvConfig {
  const nodeEnv = isAppEnvironment(env.NODE_ENV) ? env.NODE_ENV : "development";

  return {
    nodeEnv,
    appUrl: env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  };
}
