console.log("This is CV Screener");

const data=[
    {
        name: 'Jhonny',
        age: 18,
        city: 'Pune',
        language: 'HTML',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Katrina',
        age: 48,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
        name: 'Lana Rhodes',
        age: 30,
        city: 'Mumbai',
        language: 'CSS',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    {
        name: 'Aish',
        age: 30,
        city: 'Mumbai',
        language: 'CSS',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/58.jpg'
    },
    {
        name: 'Kareena',
        age: 30,
        city: 'Mumbai',
        language: 'CSS',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/69.jpg'
    },
    {
        name: 'Shreya',
        age: 30,
        city: 'Mumbai',
        language: 'CSS',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
        name: 'Sajid',
        age: 30,
        city: 'Mumbai',
        language: 'CSS',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },
]

//Cv Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next:function(){
            if (nextIndex<profiles.length) {
                return {
                    value:profiles[nextIndex++],
                    done:false
                }
            }
            else{
                
                return{
                    done:true,
                }
            }
        }
    }
}
const candidates=cvIterator(data)
nextCv() //Just calling this once such that at the first time of reload the screener wont apeear blanlk

//Button Listener
const next=document.getElementById('next')
next.addEventListener('click', nextCv);

function nextCv(params) {
    const currentCandidate=candidates.next().value;
    let image=document.getElementById('image')
    let profile=document.getElementById('profile')
    if (currentCandidate !=undefined) {
        image.innerHTML = `<img class="card-img-top" src="${currentCandidate.image}" alt="Card image cap">`
        profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name: ${currentCandidate.name}</li>
                            <li class="list-group-item">Age: ${currentCandidate.age} years old.</li>
                            <li class="list-group-item">Lives in: ${currentCandidate.city}</li>
                            <li class="list-group-item">Primarily works in ${currentCandidate.language}</li>
                            <li class="list-group-item">using ${currentCandidate.framework} framework</li>
                            </ul>`
    } else {
        alert("End of applications")
        window.location.reload();
    }

    
}
