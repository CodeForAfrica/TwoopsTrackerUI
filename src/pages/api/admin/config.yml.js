import fs from "fs";
import path from "path";

import yaml from "js-yaml";

import site from "@/twoopstracker/utils/site";

export default function handler(req, res) {
  if (req.method === "GET") {
    const filePath = path.resolve(process.cwd(), "public/admin/config.yml");
    let configFile = fs.readFileSync(filePath);
    if (process.env.NODE_ENV === "production") {
      const config = yaml.load(configFile);
      // Set production configurations
      config.backend.name = "github";
      config.backend.repo = process.env.ADMIN_BACKEND_REPO;
      config.backend.base_url = site.url;
      config.backend.auth_endpoint = process.env.ADMIN_BACKEND_AUTH_ENDPOINT;
      config.publish_mode = "editorial_workflow";
      // Remove dev configurations
      config.local_backend = undefined;

      configFile = yaml.dump(config);
    }

    res.setHeader("Content-Type", "text/yaml");
    res.setHeader("Content-Disposition", "attachment; filename=config.yml");
    res.send(configFile);
  }

  return res.status(405).end();
}
