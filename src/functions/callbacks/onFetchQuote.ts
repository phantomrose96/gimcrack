// import { fetchPageContents } from '../HelperFunctions';
import Discord from 'discord.js';
import { ABoT } from '../../assets/ABoT';
// import ABoT from '../../assets/ABoT';

export async function onFetchQuote(
  message: Discord.Message,
  response: string,
) {
  message.content = message.content.toLocaleLowerCase();
  let foundQuote: string | undefined;

  ABoT.find((chapter) => {
    foundQuote = chapter.content.find((paragraph) => {
      let cleanedParagraph = paragraph
        .toLocaleLowerCase()
        .replace(/’/g, "'");
      return cleanedParagraph.includes(message.content);
    });
    return !!foundQuote;
  });

  if (!!foundQuote) {
    message.channel.send(response + '```' + foundQuote + '```');
  } else {
    message.channel.send("Sorry, can't find that quote");
  }

  //   const $ = await fetchPageContents(true);
  //   const div = $('p').filter(
  //     (_index: number, element: cheerio.Element) => {
  //       const children = element.childNodes.filter((child) => {
  //         let lowerCase = child.data?.toLocaleLowerCase();
  //         lowerCase = lowerCase?.replace(/’/g, "'");
  //         return lowerCase?.includes(message.content);
  //       });
  //       return !!children.length;
  //     },
  //   );

  //   if (!!div && !!div[0]) {
  //     message.channel.send(
  //       response + '```' + joinParagraph(div[0].children) + '```',
  //     );
  //   } else {
  //     message.channel.send("Sorry, can't find that quote");
  //   }
}

// function joinParagraph(children: cheerio.Element[]): string {
//   let st = '';
//   children.forEach((child) => {
//     st += child.data ? child.data : child.firstChild.data;
//   });
//   return st;
// }
