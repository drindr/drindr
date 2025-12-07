import { renderStatsCard } from "./cards";
import { writeFileSync } from "fs";

import data from "../github-user-stats.json";
const output = renderStatsCard(data);
writeFileSync("stat.svg", output);
