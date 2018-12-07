/**
 * Global JS 
 */

// Bootstrap tooltips
$('dropdown-toggle').dropdown('togle')

// My Years Old
$('#yearsOld').text(myYearsOld(27, 11, 1997))

// My Years Old Function 
function myYearsOld(d, m, y) {
    let initDate = new Date(`${y}-${m}-${d}`).getTime()
    let date = new Date()
    let dif = initDate - date
    let yearsOld = Math.abs((dif / (1000 * 60 * 60 * 24)) / 365)

    return yearsOld.toFixed(1)
}

$.getJSON("../json/projects.json", function (data) {
    $.each(data.main_projects, function (index, value) {
        $('#cards-main-projects').append(`<div class="card j-card m-4 px-0" style="width: 18rem;"><img class="j-img-card-projects rounded-circle" src="${value.img}" alt="img"><div class="card-body"><h5 class="card-title mt-4">${value.title}</h5><span class="mb-2 badge badge-secondary">${value.badge}</span><p class="card-text">${value.description}</p></div><div class="card-footer text-center"><a href="${value.site_url}" target="_blanc" class="card-link">Site</a><a href="${value.source_code_url}" target="_blanc" class="card-link">Source code</a></div></div>`)
    })
    $.each(data.other_projects, function (index, value) {
        $('#cards-other-projects').append(`<div class="card j-card m-4 px-0" style="width: 18rem;"><img class="j-img-card-projects rounded-circle" src="${value.img}" alt="img"><div class="card-body"><h5 class="card-title mt-4">${value.title}</h5><span class="mb-2 badge badge-secondary">${value.badge}</span><p class="card-text">${value.description}</p></div><div class="card-footer text-center"><a href="${value.site_url}" target="_blanc" class="card-link">Site</a><a href="${value.source_code_url}" target="_blanc" class="card-link">Source code</a></div></div>`)
    })
});
$.getJSON("https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@jecsham", function (data) {
    $.each(data.userData.courses, function (index, value) {
        $('#cards-platzi-courses').append(`<a href="https://platzi.com/${value.diploma_link}" target="_blanc" class="j-nounderline text-dark">
        <div class="card m-3" style="width: 25rem;">
            <div class="card-body">
                <table style="float:center">
                    <tr>
                        <td>
                            <img src="${value.badge}" class="j-img-card-platzi rounded-circle"
                                alt="">
                        </td>
                        <td>
                            <h5 class="card-title ml-3 mb-0">${value.title}</h5>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </a>`)
    })
    $.each(data.userData.careers, function (index, value) {
        $('#cards-platzi-careers').append(`<a href="https://platzi.com/${value.diploma_link}" target="_blanc" class="j-nounderline text-dark">
        <div class="card m-3" style="width: 25rem;">
            <div class="card-body">
                <table style="float:center">
                    <tr>
                        <td>
                            <img src="${value.golden_achievement}" class="j-img-card-platzi rounded-circle"
                                alt="">
                        </td>
                        <td>
                            <h5 class="card-title ml-3 mb-0">${value.title}</h5>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </a>`)
    })
    $.each(data.userData.contributions, function (index, value) {
        $('#cards-platzi-contributions').append(`<a href="https://platzi.com/${value.detail_url}" target="_blanc" class="j-nounderline text-dark">
        <div class="card m-3" style="width: 25rem;">
            <div class="card-body">
                <table style="max-width: 100%">
                    <tr>
                        <td>
                            <h5 class="card-title mb-0">${value.title}</h5>
                        </td>
                    </tr>
                    <tr>
                        <td class="float-right">
                            <small class="text-muted j-nounderline"><span class="mdi mdi-comment"></span> ${value.n_responses} &nbsp; &nbsp;<span class="mdi mdi-thumb-up"></span> ${value.n_stars}</small>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </a>`)
    })
})