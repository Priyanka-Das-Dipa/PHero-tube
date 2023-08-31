const tubeCategory = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json()
    console.log(data)
    const tabContainer = document.getElementById('tab-container')
    data.data.slice(0, 4).forEach((category) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <a onclick="newsType('${category.category_id})" class="tab btn">${category.category}</a>
        `
        tabContainer.appendChild(div)
    })

}

// tab click data Show
const newsType = async(categoryId) =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    const data = await response.json()
    const cardContainer = document.getElementById('card-container')
    data?.data.forEach((videos) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                src="https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png"
                alt="Shoes"
                />
            </figure>
            <div class="flex px-3 gap-3 py-2">
                <div class="avatar">
                    <div class="w-14 h-12 rounded-full">
                        <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                        />
                    </div>
                </div>
                <div>
                    <h2 class="card-title inter font-semibold text-lg text-[#171717]">
                        Biden Pledges Nearly $3 Billion To Ukraine
                    </h2>
                    <div class="inter text-sm font-normal">
                        <h6>Jimmy Dane</h6>
                        <small>91k Views</small>
                        </div>
                </div>
            </div>
        </div>
        
        
        `
        cardContainer.appendChild(div)

    }) 


}
tubeCategory()