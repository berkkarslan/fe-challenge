import { ServerApi } from "./server";
import { Helpers } from "./helpers";
export class ApiService {
  constructor() {
    this.server = new ServerApi();
    this.helpers = new Helpers();
  }
}
