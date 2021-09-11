export default function groupsSort(a, b) {
    if (a.name && b.name) {
        if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
        if (b.name.toUpperCase() > a.name.toUpperCase()) return -1;
    }

    return 0;
}
