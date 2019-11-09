export default function getDefaultKeyDownHandler(clickHandler) {
    return function (event) {
        switch (event.key) {
            case 'Enter':
            case ' ':
            case 'Spacebar': // for older browsers
                event.preventDefault();
                clickHandler(event);
                break;
            default:
                break;
        }
    };
}
