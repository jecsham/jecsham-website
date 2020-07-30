var mainProjects: any[] = [];
var otherProjects: any = [];
async function getProjects() {
    if (mainProjects.length === 0) {
        let resp = await fetch('/json/projects.json');
        let data = await resp.json();
        mainProjects = data.main_projects;
        otherProjects = data.other_projects;
    }
    return {
        mainProjects,
        otherProjects
    }
}

export default getProjects;