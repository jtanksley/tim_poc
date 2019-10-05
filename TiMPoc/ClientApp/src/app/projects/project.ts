import { Crew} from '../crew/crew';

export class Project {
    id: string;
    name: string;
    crewmembers: Crew[];

    constructor(name: string) {
        this.name = name;
        this.crewmembers = [];
    }

}
