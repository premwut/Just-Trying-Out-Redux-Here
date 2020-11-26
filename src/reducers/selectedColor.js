export default (state='', action) => {
    switch (action.type) {
        case 'SELECT_COLOR':
            return action.payload;
        default:
            return '';
    }
}