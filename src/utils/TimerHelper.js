function calculateSecondsBetweenDates(startDate, endDate, pauseTime, totalPausedTime = 0) {
    // console.log(startDate, endDate, pauseTime, totalPausedTime);
    const past = new Date(startDate);
    const current = endDate ? new Date(endDate) : new Date();

    let differenceInMilliseconds = current - past;

    if (pauseTime) {
        const pauseDuration = current - new Date(pauseTime);
        differenceInMilliseconds -= pauseDuration;
    }

    differenceInMilliseconds -= totalPausedTime;

    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    // console.log(differenceInSeconds);
    return differenceInSeconds;
}

export default calculateSecondsBetweenDates