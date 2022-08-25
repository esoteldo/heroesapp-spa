import { heroes } from "../data/heroes";

export const getHeroesByPublisher=(publisher)=>{

    const validPublisher=['Dc Comics','Marvel Comics'];

    if(!validPublisher.includes(publisher)){
        throw new error(`${publisher} is not a valid publisher`)
    }

}