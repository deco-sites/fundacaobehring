import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 432,
  site: "fundacaobehring",
  domains: ["fundacaobehring.deco.site"],
});