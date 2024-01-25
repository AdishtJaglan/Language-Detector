import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
    console.log(colors.red("Language in undefined, need more parameters"));
} else {
    const language = langs.where("3", langCode);

    if (language) {
        console.log(colors.green("The language is", language.name));
    } else {
        console.log(colors.gray("Could not identify the language."));
    }
}