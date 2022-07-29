const getMoment = async function () {
    const moment = await import('moment');
    return moment.default;
}
export {
    getMoment
}