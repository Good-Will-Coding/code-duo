const data = [{
        name: 'John Coder',
        age: '32',
        gender: 'Male',
        lookingFor: 'someone to help me with the backend of my project! ',
        languages: 'Javacript, HTML, CSS',
        image: 'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
        name: 'Jen Smith',
        age: '22',
        gender: 'Female',
        lookingFor: 'someone to learn machine learning with for fun!',
        languages: 'Python',
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
        name: 'Lisa Simpson',
        age: '36',
        gender: 'Female',
        lookingFor: 'someone to chat with about CodeWar challenges!',
        languages: 'Java, C++',
        image: 'https://randomuser.me/api/portraits/women/43.jpg'
    },
];


const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {

    const currentProfile = profiles.next().value;
    if (currentProfile !== undefined) {

        document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item"><strong>Name</strong>: ${currentProfile.name}</li>
    <li class="list-group-item"><strong>Gender:</strong> ${currentProfile.gender}</li>

    <li class="list-group-item"><strong>Age:</strong> ${currentProfile.age}</li>
    <li class="list-group-item"><strong>Languages:</strong> ${currentProfile.languages}</li>
    <li class="list-group-item"><strong>Preference:</strong> Looking for ${currentProfile.lookingFor}</li>
    </ul>`;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        // No more profiles
        window.location.reload();
    }
}

// Profile Iterator

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                    done: true
                }
        }
    };
}