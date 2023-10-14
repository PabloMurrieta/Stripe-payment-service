import Server from "./models/server";
import 'dotenv/config'

const servidor = new Server();
servidor.listen()