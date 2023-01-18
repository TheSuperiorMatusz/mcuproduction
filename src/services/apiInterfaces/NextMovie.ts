export interface NextMovie{
    days_until: number;
    following_production:NextMovie;
    tittle:string;
}