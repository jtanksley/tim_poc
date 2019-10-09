export class Crew {
    id:string;
    fillid: string;
    firstname: string;
    lastname: string;
    fullname: string;
    startwork: boolean;
    startworktype: string;
    approvalstatus: string;
    i9: boolean;
    i9verified: boolean;
    position: string;
    department: string;
    project: string;
    attachments?: Array<string>;
    progress: number;

    constructor(id: string) {
        this.id = id;
        this.attachments = [];
    }
}
