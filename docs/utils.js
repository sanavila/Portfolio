export const truncate = (size, text) => {
    if (text.length > size) {
        return text.trim().substring(0, size - 3).padEnd(size, ".");
    } return text;
};
