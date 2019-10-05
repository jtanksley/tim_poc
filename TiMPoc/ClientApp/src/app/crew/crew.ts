export class Crew {
    id:string;
    fillid: string;
    firstname: string;
    lastname: string;
    startwork: boolean;
    startworktype: string;
    approvalstatus: string;
    i9: boolean;
    i9verified: boolean;
    position: string;
    department: string;
    project: string;
    attachments?: Array<string>;

    constructor(id: string) {
        this.id = id;
        this.attachments = [];
    }
}
