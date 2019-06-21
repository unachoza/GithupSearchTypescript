import React from "react";
export const fetchGithub = async (props: any): Promise<any> => {
  await fetch(
    `https://api.github.com/search/repositories?q=${props.text}+license:${
      props.license
    }+stars:${props.stars}+fork:${props.forked}&sort=stars&order=desc`
  )
    .then(res => res.json())
    .then(data => {
      //what do I do with the result? I cant set props? or how do I pass it back restult to formContainer?
      // this.setState({ isLoaded: true, data: data.items });
    });
};
