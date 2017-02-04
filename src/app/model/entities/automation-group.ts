export class AutomationGroup extends Object {

    // constructor();
    private app_id: string;
    private name: string;
    private automationList: Array<Object>;

    constructor() {
        super();
    };


    public get $app_id(): string {
        return this.app_id;
    }

    public set $app_id(value: string) {
        this.app_id = value;
    }


    public get $name(): string {
        return this.name;
    }

    public set $name(value: string) {
        this.name = value;
    }

    public get $automationList(): Array<Object> {
        return this.automationList;
    }

    public set $automationList(value: Array<Object>) {
        this.automationList = value;
    }



    // constructor(public app_id?: string, public name?: string, public automationList?: Array<Object>) {
    //     super();
    //     this.app_id = app_id;
    //     this.name = name;
    //     this.automationList = automationList;
    // }



}