import { program } from "commander";
import { banner } from "./ui/main";

program
  .name('lithium-util')
  .description(banner)
  .version('0.0.1');


program
  .command("app:build")
  .description("Build an application")
  .option("-o, --output <output-dir>", "Specify the output directory");

program
  .command("app:create")
  .description("Create an applications from a scaffolding")
  .option("-n, --name <app-name>", "Specify the application name");


program
  .command("app:serve")
  .description("Serve an application")
  .option("-p, --port", "Specifies the server port");


program.parse();