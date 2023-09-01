const tubeCategory = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json()
    console.log(data)
    const tabContainer = document.getElementById('tab-container')
    data.data.slice(0, 4).forEach((category) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <a onclick="newsType('${category.category_id}')" class="tab btn">${category.category}</a>
        `
        tabContainer.appendChild(div)
    })

}

// tab click data Show
const newsType = async(categoryId) => {
    const response = await fetch(`
    https://openapi.programming-hero.com/api/videos/category/${categoryId}
    `);
    const data = await response.json()
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = ''

    if(data?.data?.length === 0){
        const messageContainer = document.getElementById('message-container');
        if (messageContainer) {
        const div = document.createElement('div');
        messageContainer.innerHTML = `
            <div class="flex justify-center py-5">
            <img src="./image/Icon.png" alt="">
            </div>
            <p class="text-5xl font-semibold py-2">Oops!! Sorry, there is no <br> content here</p>
        `;
        messageContainer.appendChild(div);
        }
    }
    else{
        data?.data?.forEach((videos) => {
            const div = document.createElement('div')
            const {hr, min} = converter(videos?.others?.posted_date)
    
            div.innerHTML = `
            <div class="card bg-base-100 bg-cover shadow-xl">
                <figure>
                    <img
                    class="h-[200px] relative"
                    src=${videos?.thumbnail}
                    alt="Loading"
                    />
                </figure>
                <p class="text-right px-3 rounded-md text-white bg-black bg-cover" style="position: absolute; bottom: 85px; right: 0">
                ${videos?.others?.posted_date  ? `${hr} hrs ${min} min ago`: '' }
                </p>
                <div class="flex px-3 gap-3 py-2">
                    <div class="avatar">
                        <div class="w-14 h-12 rounded-full">
                            <img
                            src=${videos.authors[0]?.profile_picture}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 class="card-title inter font-semibold text-lg text-[#171717]">
                            ${videos?.title}
                        </h2>
                        <div class="inter text-sm font-normal">
                            <div class="flex gap-3">
                                <h6>${videos?.authors[0]?.profile_name}</h6>
                                <a href="">
                                ${videos?.authors[0]?.verified === true ? ' <img src="./image/fi_10629607.png" alt="">' : ''}
                                </a>
                            </div>
                            <small>${videos?.others?.views}</small>
                        </div>
                    </div>
                </div>
            </div>
            `
            cardContainer.appendChild(div)
        }) 
    }


    
}

function converter(sec){
    const hr = Math.floor(sec / 3600)
    const extraSec = sec % 3600
    const min = Math.floor(extraSec / 60)
    return{hr, min}

}

tubeCategory()
newsType('1000')

  