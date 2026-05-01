
export enum GradeLevel {

    Undergraduate = "Undergraduate",
    Graduate = "Graduate",
    PhD = "phD"
}

export interface Student {
    id: number;
    name: string;
    email?: string;
    grades: number[]
    level: GradeLevel;
}

export interface GraduateStudent extends Student {
    advisor: string;
}