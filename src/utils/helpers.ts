/**
 * Calculates and displays the reading time for an article
 * @return {void}
 */
export function getReadingTime(): void {
    const WORDS_PER_MINUTE = 225;
    const SELECTOR = {
        article: "article",
        time: "time"
    };

    try {
        const articleElement = document.getElementById(SELECTOR.article);
        const timeElement = document.getElementById(SELECTOR.time);

        if (!articleElement || !timeElement) {
            console.warn("Required elements not found");
            return;
        }

        const text = articleElement.innerText;
        const words = text.trim().split(/\s+/).length;
        const readingTimeMinutes = Math.ceil(words / WORDS_PER_MINUTE);

        timeElement.innerText = `tiempo de lectura: ${readingTimeMinutes} min`;
    } catch (error) {
        console.error("Error calculating reading time:", error);
    }
}
