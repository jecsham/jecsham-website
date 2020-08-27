var courses: any[] = [];
var careers: any = [];
var contributions: any = [];
async function getPlatziData() {
    if (courses.length === 0) {
        let resp = await fetch('https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@jecsham');
        let data = await resp.json();
        courses = data.userData.courses;
        careers = data.userData.careers;
        contributions = data.userData.contributions;
    }
    return {
        courses,
        careers,
        contributions
    }
}

export default getPlatziData;