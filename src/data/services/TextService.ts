export const TextService = {
    limitText(text: string, maxLength: number): string {
        if (typeof text !== 'string') {
            throw new Error('Invalid input: text must be a string');
        }
        if (text.length < maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    }
}

