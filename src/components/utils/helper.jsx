export function filterdata(searchtext, Filteredcards) {
    return Filteredcards.filter((item) => {
        return item.info.name?.toLowerCase().includes(searchtext.toLowerCase());
    });
}

