export interface MenuType {
    component?: string;
    icon: string;
    id: number;
    is_show: 0 | 1;
    level: number;
    order: string;
    pid: number;
    sort: number;
    status: 0 | 1;
    tips?: string;
    title: string;
    type: "menu" | "menu_dir" | "button";
    url: string;
    children?: MenuType[]
}

export interface Nav_groupType{
    status: number;
    tag: string;
    title: string;
}

export interface PageType{
    page: number;
    pageSize: number;
}

export interface AddNav_item{
    group_id: number;
    status: number;
    title: string;
    url: string;
    tag: string;
}

export interface AddUser{
    name:string;
    phone:string;
    password:string;
    avatar:string;
    status:number;
}
export interface AddGroup{
    title:string;
    rules:string[]
    status:number;
}



