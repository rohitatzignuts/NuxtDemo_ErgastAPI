export function useDateFormatter() {
    const dateFormat = (dt) => {
        const date = new Date(dt);
        return new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short' }).format(date).toUpperCase();
    };
    return dateFormat;
}
