export const fetchGithub = (text:string, license:string,  forked:boolean, stars:string,): Promise<any>  => {
 return  fetch(
    `https://api.github.com/search/repositories?q=${text}+license:${
      license
    }+stars:${stars}+fork:${forked}&sort=stars&order=desc`
  ) 
  
}
