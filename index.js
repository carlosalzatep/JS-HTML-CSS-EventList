var event = [
    {
        name : 'Virtual Hiring Fair',
        date : 'April 25 - 26, 2020',
        location : 'Vancouver - Canada',
        deadline : '04/24/2020',
        type: 'MeetUp'
    },
    {
        name : 'Virtual Hiring Fair',
        date : 'April 25 - 26, 2020',
        location : 'Vancouver - Canada',
        deadline : '04/24/2020',
        type: 'Leap'
    },
    {
        name : 'Virtual Hiring Fair',
        date : 'April 25 - 26, 2020',
        location : 'Vancouver - Canada',
        deadline : '04/24/2020',
        type: 'Recruiting Mission'
    },
    {
        name : 'Virtual Hiring Fair',
        date : 'April 25 - 26, 2020',
        location : 'Vancouver - Canada',
        deadline : '04/24/2020',
        type: 'VanHackathon'
    },
    {
        name : 'Virtual Hiring Fair',
        date : 'April 25 - 26, 2020',
        location : 'Vancouver - Canada',
        deadline : '04/24/2020',
        type: 'Premium Webinar'
    },
    {
        name : 'Virtual Hiring Fair',
        date : 'April 25 - 26, 2020',
        location : 'Vancouver - Canada',
        deadline : '04/24/2020',
        type: 'Open Webinar'
    }
]

function EventList(eventType, eventDivID){

    var DivEvents = document.getElementById(eventDivID)
    var EventContent = '';

    for(var i=0; i<event.length; i++){

        if(eventType == 'All' || event[i].type == eventType){

            EventContent += '<div class="card mb-4 shadow-sm">'
            EventContent += '<div class="card-header">'
            EventContent += '  <h2 class="my-0 font-weight-normal">'+event[i].name+'</h2>'
            EventContent += '  <img src="https://cdn4.iconfinder.com/data/icons/flat-circle-flag/182/circle_flag_canada-512.png">'
            EventContent += '</div>'
            EventContent += '<div class="card-body">'
            EventContent += '  <h4 class="card-title pricing-card-title">'+event[i].date+'<br><small class="text-muted">'+event[i].location+'</small></h4>'
            EventContent += '  <ul class="list-unstyled mt-3 mb-4">'
            EventContent += '    <li>Deadline: '+event[i].deadline+'</li>'
            EventContent += '    <li class="font-weight-bold">'
            
            if(event[i].type == 'Premium Webinar') EventContent += '<img class="star" src="https://pngimage.net/wp-content/uploads/2018/06/star-icon-png-transparent-background-5.png">'
            
            EventContent += event[i].type+'</li>'
            EventContent += '  </ul>'
            EventContent += '  <button type="button" class="btn btn-lg btn-block btn-outline-primary" data-toggle="modal" data-target="#Event1">Details</button>'
            
            if(event[i].type == 'Premium Webinar') EventContent += '<button type="button" class="btn btn-lg btn-block btn-primary" data-toggle="modal" data-target="#Alert">Apply</button>'
            else
                EventContent += '  <button type="button" class="btn btn-lg btn-block btn-primary" data-toggle="modal" data-target="#Apply">Apply</button>'
            EventContent += '</div>'
            EventContent += '</div>'

        }
    }

    DivEvents.innerHTML= EventContent;
}

var alltab = document.getElementById('all-tab')
alltab.addEventListener('click',EventList('All', 'allEvents'))

var alltab = document.getElementById('meetup-tab')
alltab.addEventListener('click',EventList('MeetUp', 'meetupEvent'))

var alltab = document.getElementById('leap-tab')
alltab.addEventListener('click',EventList('Leap', 'leapEvent'))

var alltab = document.getElementById('recrutiting-tab')
alltab.addEventListener('click',EventList('Recruiting Mission', 'RecruitingMissionEvent'))

var alltab = document.getElementById('vanhackathon-tab')
alltab.addEventListener('click',EventList('VanHackathon', 'VanHackathonEvent'))

var alltab = document.getElementById('premium-tab')
alltab.addEventListener('click',EventList('Premium Webinar', 'PremiumWebinarEvent'))

var alltab = document.getElementById('open-tab')
alltab.addEventListener('click',EventList('Open Webinar', 'OpenWebinarEvent'))

