import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

import type { Node } from "mdast"; // Import the Node type from mdast
import type { RemarkPlugin } from "@astrojs/markdown-remark"; // Import the RemarkPlugin type

export function remarkReadingTime(): RemarkPlugin {
    return function (
        tree: Node,
        { data }: { data: { astro: { frontmatter: { minutesRead: string } } } }
    ) {
        const textOnPage = toString(tree);
        const readingTime = getReadingTime(textOnPage);

        // Customize the output text in Spanish
        const minutes = Math.ceil(readingTime.minutes);
        const minutesText = minutes === 1 ? "minuto" : "minutos";
        const wordsText = `${readingTime.words} palabras`;
        data.astro.frontmatter.minutesRead = `${minutes} ${minutesText} • ${wordsText}`;
    };
}
