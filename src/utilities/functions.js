export function formatDate(acfDate){
    const year = acfDate.substring(0, 4);
    const month = acfDate.substring(4, 6);
    const day = acfDate.substring(6, 8);
    const formattedISO = `${year}-${month}-${day}`;

    const dateObj = new Date(formattedISO);

    //  year: 'numeric',
    //     month: 'long',
    //     day: 'numeric'
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long'
    }).format(dateObj);

    return formattedDate;
}

export function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    txt.remove();
    return txt.value;
}

