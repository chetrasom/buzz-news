export const removeNonExisting = (data) => {
    const randomData = data;
    const filterArticles = randomData.filter((article) => article?.source?.id && article?.author !== null);
    return filterArticles;
};

export const removeNonAuthor = (data) => {
    const randomData = data;
    const filterArticles = randomData.filter((article) => article?.author !== null);
    return filterArticles;
}

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        
        array[i] = array[j];
        array[j] = temp;
    }

    return array
}