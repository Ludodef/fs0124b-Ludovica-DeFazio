import { Article } from "./article"

export interface Jsoncontent {
  posts:Article[]
  total:number
  skip:number
  limit:number

}
