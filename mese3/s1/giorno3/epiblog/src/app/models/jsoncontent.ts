import { Articles } from "./articles"

export interface Jsoncontent {

  posts:Articles[]
  total:number
  skip:number
  limit:number
}
