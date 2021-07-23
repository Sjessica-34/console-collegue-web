import {Presentation} from "./presentation2";
import {Service} from "../common/service"


const service = new Service();
const presentation = new Presentation(service);

presentation.list();
presentation.create()