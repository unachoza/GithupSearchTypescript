


export const fetchGithub = (text:string, license:string,  forked:boolean, stars:string,): Promise<any>  => {
 return  fetch(
    `https://api.github.com/search/repositories?q=${text}+license:${
      license
    }+stars:${stars}+fork:${forked}&sort=stars&order=desc`
  )
}

   
    // data => {
    //   //what do I do with the result? I cant set  or how do I pass it back restult to formContainer?
    //   // this.setState({ isLoaded: true, data: data.items });
    // });

